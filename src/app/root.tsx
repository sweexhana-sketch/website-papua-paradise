import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import type { FC, ReactNode } from 'react';
import './global.css';

export const links = () => [];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Papua Paradise Teknologi — Solusi IT Terpercaya di Papua</title>
        <meta
          name="description"
          content="Papua Paradise Teknologi adalah perusahaan IT terpercaya di Sorong, Papua Barat Daya. Layanan pembuatan website, aplikasi mobile, sistem informasi, dan konsultasi IT profesional."
        />
        <meta property="og:title" content="Papua Paradise Teknologi" />
        <meta property="og:description" content="Solusi IT Terpercaya untuk Bisnis Anda di Papua" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#020b18" />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
