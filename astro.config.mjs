import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://agiright.org',
  trailingSlash: 'never',
  integrations: [
    // Every language's build tree (/ja/..., /zh/..., etc.) is a first-class,
    // independently indexable URL as of 2026-07-21 (see BaseLayout.astro's
    // hreflang tags) — no filter needed, all of them belong in the sitemap.
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: 'file',
  },
});
