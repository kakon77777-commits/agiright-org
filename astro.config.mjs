import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// "Option A+" (multilingual plan v1.1, 2026-07-21): sitemap inclusion is
// gated by locale status, not by mere membership in LANGS — mirrors
// `LOCALE_STATUS_OVERRIDES` / `isIndexable()` in src/data/site.ts. Every
// current language is 'indexable' there, so this list is empty and this
// filter is a no-op today; it exists so a future non-indexable locale (e.g.
// 'generated' but not yet reviewed) has somewhere to be excluded without
// reintroducing the old single-language-hardcoded filter this replaced.
// Keep in sync with site.ts by hand — this file can't import a .ts data
// module cheaply, and the list is short enough that duplication is safer
// than a fragile cross-module-system import here.
const NON_INDEXABLE_LANG_PREFIXES = [];

export default defineConfig({
  site: 'https://agiright.org',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter:
        NON_INDEXABLE_LANG_PREFIXES.length === 0
          ? undefined
          : (page) => !NON_INDEXABLE_LANG_PREFIXES.some((l) => new RegExp(`agiright\\.org/${l}(/|$)`).test(page)),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: 'file',
  },
});
