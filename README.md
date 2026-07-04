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

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- Custom domains: `agiright.org`, `asiright.org` (redirect alias)

## License

Research texts CC BY 4.0 · code and schemas MIT, unless otherwise stated.
