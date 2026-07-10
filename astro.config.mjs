import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://agiright.org',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // single-URL i18n: localized build trees (/zh/...) are internal —
      // only bare URLs are public, so exclude them from the sitemap
      filter: (page) => !/agiright\.org\/zh(\/|$)/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: 'file',
  },
});
