import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Hono } from 'hono';
import type { Handler } from 'hono/types';
import updatedFetch from '../src/__create/fetch';

const API_BASENAME = '/api';
const api = new Hono();

// Get current directory
const __dirname = join(fileURLToPath(new URL('.', import.meta.url)), '../src/app/api');
if (globalThis.fetch) {
  globalThis.fetch = updatedFetch;
}

// Recursively find all route.js files
async function findRouteFiles(dir: string): Promise<string[]> {
  const files = await readdir(dir);
  let routes: string[] = [];

  for (const file of files) {
    try {
      const filePath = join(dir, file);
      const statResult = await stat(filePath);

      if (statResult.isDirectory()) {
        routes = routes.concat(await findRouteFiles(filePath));
      } else if (file === 'route.js') {
        // Handle root route.js specially
        if (filePath === join(__dirname, 'route.js')) {
          routes.unshift(filePath); // Add to beginning of array
        } else {
          routes.push(filePath);
        }
      }
    } catch (error) {
      console.error(`Error reading file ${file}:`, error);
    }
  }

  return routes;
}

// Helper function to transform file path to Hono route path
function getHonoPath(routeFile: string): { name: string; pattern: string }[] {
  const relativePath = routeFile.replace(__dirname, '');
  const parts = relativePath.split('/').filter(Boolean);
  const routeParts = parts.slice(0, -1); // Remove 'route.js'
  if (routeParts.length === 0) {
    return [{ name: 'root', pattern: '' }];
  }
  const transformedParts = routeParts.map((segment) => {
    const match = segment.match(/^\[(\.{3})?([^\]]+)\]$/);
    if (match) {
      const [_, dots, param] = match;
      return dots === '...'
        ? { name: param, pattern: `:${param}{.+}` }
        : { name: param, pattern: `:${param}` };
    }
    return { name: segment, pattern: segment };
  });
  return transformedParts;
}

// Import and register all routes
async function registerRoutes() {
  api.routes = [];
  
  // Use Vite's glob import instead of fs.readdir so it works in the bundled build
  const routes = import.meta.glob('../src/app/api/**/route.{js,ts}', { eager: true });
  const routeFiles = Object.keys(routes).sort((a, b) => b.length - a.length);

  for (const routeFile of routeFiles) {
    try {
      const route = routes[routeFile] as any;
      const methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
      
      for (const method of methods) {
        if (route[method]) {
          // calculate path from e.g. "../src/app/api/foo/route.js" -> "/foo"
          let relativePath = routeFile.replace('../src/app/api', '').replace(/\\/g, '/');
          if (relativePath.endsWith('/route.js') || relativePath.endsWith('/route.ts')) {
            relativePath = relativePath.replace(/\/route\.[jt]s$/, '');
          }
          if (!relativePath) relativePath = '/';
          
          const parts = relativePath.split('/').filter(Boolean);
          const transformedParts = parts.map((segment) => {
            const match = segment.match(/^\[(\.{3})?([^\]]+)\]$/);
            if (match) {
              const [_, dots, param] = match;
              return dots === '...' ? `:${param}{.+}` : `:${param}`;
            }
            return segment;
          });
          
          const honoPath = `/${transformedParts.join('/')}`;
          
          const handler: Handler = async (c) => {
            const params = c.req.param();
            return await route[method](c.req.raw, { params });
          };
          
          const methodLowercase = method.toLowerCase();
          switch (methodLowercase) {
            case 'get': api.get(honoPath, handler); break;
            case 'post': api.post(honoPath, handler); break;
            case 'put': api.put(honoPath, handler); break;
            case 'delete': api.delete(honoPath, handler); break;
            case 'patch': api.patch(honoPath, handler); break;
          }
        }
      }
    } catch (error) {
      console.error(`Error importing route file ${routeFile}:`, error);
    }
  }
}

// Initial route registration
await registerRoutes();

export { api, API_BASENAME };
