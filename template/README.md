# AI Policy Starter Template

A minimal, deployable static site with a complete machine-readable AI-policy layer, based on the [AGIRight.org](https://agiright.org) protocol drafts (AICR / AICL / AIRS / AILP, all v0.1).

## What's inside

```
index.html                  minimal human-facing page
llms.txt                    entry index for AI systems
robots.txt                  crawler access rules (pointing at the policy files)
.well-known/aicr.json       AI content rights declaration (AICR)
.well-known/aicl.json       license catalog (AICL)
ai/manifest.json            machine entry manifest
ai/rights-spectrum.json     AIRS/AILP learning-permission declaration
```

The default policy is **open-but-reserved**: reading, summarization, quotation, and RAG are allowed with attribution; model training, commercial use, and redistribution require a license.

## Use it

1. Replace every `your-site.example` and `contact@your-site.example` with your domain and contact.
2. Adjust the policy to taste — or regenerate the files with the [AGIRight playground](https://agiright.org/playground).
3. Deploy anywhere that serves static files:
   - **Cloudflare Pages**: drag-and-drop this folder, or connect a repo (no build command, output `/`).
   - **Cloudflare Workers Static Assets**: `wrangler deploy` with `assets.directory` pointing here.
   - Netlify / GitHub Pages / any static host works too.
4. Verify with the [crawler policy tester](https://agiright.org/playground): enter your domain and check the score.

## Status & license

The protocols are open research drafts (v0.1) from AGIRight.org — not adopted standards, and machine-readable declarations express intent rather than enforcement. Template files: MIT. Generated with AGIRight.org v0.4.
