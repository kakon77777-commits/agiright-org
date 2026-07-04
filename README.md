# AGIRight.org

Independent research and protocol hub for AI rights, AI content licensing, agentic access, machine-readable governance, and democratic AI network economics.

**Live:** https://agiright.org (alias: https://asiright.org)
**Status:** v0.1 — all protocols are open research drafts.

## What this is

- Research pages for six areas: AI rights, AI content rights, AI learning permission, agentic access, machine-readable governance, AI network democratic economy.
- Protocol drafts: **AICR** (AI Content Rights), **AICL** (AI Content Licensing Layer), **AIRS** (AI Rights Spectrum), **AILP** (AI Learning Permission Protocol).
- Whitepapers by Neo.K / EveMissLab (CC BY 4.0).
- A machine-readable governance layer the site itself deploys: `/llms.txt`, `/ai/*.json`, `/.well-known/*.json`, `/schemas/*.schema.json`.

## Stack

Astro 5 · Tailwind CSS v4 · GSAP (ScrollTrigger) · bilingual EN + `/zh` (zh-Hant) · static output for Cloudflare Pages.

## Develop

```bash
npm install
npm run dev       # dev server
npm run build     # static build to dist/
npm run preview   # preview the build
```

Whitepaper sources live in `../docx/`; re-import them into the content collection with:

```bash
node scripts/import-papers.mjs
```

## Deploy (Cloudflare Workers Static Assets)

The site is served by the `agiright-site` Worker ([wrangler.jsonc](wrangler.jsonc)): static assets from `dist/`, with [worker/index.js](worker/index.js) canonicalizing every non-`agiright.org` hostname (www, asiright.org) to a 301. `run_worker_first` is required — without it, asset hits bypass the redirect logic.

```bash
npm run build
npx wrangler deploy
```

Custom domains (auto-managed DNS + certs): `agiright.org`, `www.agiright.org`, `asiright.org`, `www.asiright.org`.

## License

Research texts CC BY 4.0 · code and schemas MIT, unless otherwise stated.
