import path from 'node:path';
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // Expose NEXT_PUBLIC_* env vars on client
  envPrefix: 'NEXT_PUBLIC_',
  plugins: [
    reactRouter(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      lodash: 'lodash-es',
      '@': path.resolve(__dirname, 'src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  clearScreen: false,
  build: {
    target: 'esnext',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router', 'lucide-react'],
  },
  server: {
    allowedHosts: true,
    host: '0.0.0.0',
    port: 4000,
    hmr: {
      overlay: false,
    },
  },
});
