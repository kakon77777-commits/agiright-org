import type { APIRoute } from 'astro';
import { SITE, LANG_META, INDEXABLE_LANGS } from '../../data/site';

// Generated from SITE.version/SITE.updatedAt and the live LANGS list instead
// of being hand-edited — this file used to be a static public/ JSON and its
// site_version drifted to a stale "0.4.1" while the real site moved on
// through many releases (2026-07-21 site-audit P0 finding).
export const GET: APIRoute = () => {
  const manifest = {
    version: '0.1',
    site_version: SITE.version,
    site: SITE.name,
    url: SITE.url,
    alias_domains: [`https://${SITE.altDomain}`],
    description: SITE.description.en,
    publisher: SITE.org,
    author: SITE.author,
    primary_language: 'en',
    secondary_language: 'zh-TW',
    language_negotiation: {
      model: 'hybrid',
      note: "Every page has a language-negotiated bare URL (lang cookie > IP country > Accept-Language > English) AND a stable, independently indexable per-language URL (e.g. /ja/about) with matching hreflang tags — pick whichever fits: the bare URL for a smart default, the prefixed URL for a citable, language-stable link. Machine-readable files under /ai/, /.well-known/, and /schemas/ are language-neutral. AI systems and crawlers receive English by default at the bare URL. Untranslated strings gracefully fall back to English.",
      cookie: 'lang',
      // Only locales at 'indexable'/'published' status are advertised here —
      // see localeStatus()/isIndexable() in site.ts ("Option A+", v1.1
      // multilingual plan). Currently equal to the full LANGS list since
      // every shipped language has that status, but this is the field that
      // would shrink first if a future language launched at a lower status.
      supported: INDEXABLE_LANGS.map((l) => LANG_META[l].html),
      cookie_values: INDEXABLE_LANGS,
      default: 'en',
      rtl_languages: INDEXABLE_LANGS.filter((l) => LANG_META[l].dir === 'rtl'),
      example: "curl -H 'Cookie: lang=nl' https://agiright.org/",
    },
    status: 'draft',
    updated: SITE.updatedAt,
    protocols: [
      {
        id: 'aicr',
        name: 'AI Content Rights',
        url: 'https://agiright.org/protocols/aicr',
        schema: 'https://agiright.org/schemas/aicr.schema.json',
        live_instance: 'https://agiright.org/.well-known/aicr.json',
        status: 'draft-0.1',
      },
      {
        id: 'aicl',
        name: 'AI Content Licensing Layer',
        url: 'https://agiright.org/protocols/aicl',
        schema: 'https://agiright.org/schemas/aicl.schema.json',
        live_instance: 'https://agiright.org/.well-known/aicl.json',
        status: 'draft-0.1',
      },
      {
        id: 'airs',
        name: 'AI Rights Spectrum',
        url: 'https://agiright.org/protocols/airs',
        schema: 'https://agiright.org/schemas/airs.schema.json',
        live_instance: 'https://agiright.org/ai/rights-spectrum.json',
        status: 'draft-0.1',
      },
      {
        id: 'ailp',
        name: 'AI Learning Permission Protocol',
        url: 'https://agiright.org/protocols/ailp',
        schema: 'https://agiright.org/schemas/ailp.schema.json',
        status: 'draft-0.1',
      },
    ],
    entry_points: {
      llms_txt: 'https://agiright.org/llms.txt',
      content_policy: 'https://agiright.org/ai/content-policy.json',
      rights_spectrum: 'https://agiright.org/ai/rights-spectrum.json',
      protocol_index: 'https://agiright.org/ai/protocol-index.json',
      aicr: 'https://agiright.org/.well-known/aicr.json',
      aicl: 'https://agiright.org/.well-known/aicl.json',
      ai_rights: 'https://agiright.org/.well-known/ai-rights.json',
      examples: 'https://agiright.org/docs/examples',
      changelog: 'https://agiright.org/docs/changelog',
      playground: 'https://agiright.org/playground',
      registry: 'https://agiright.org/ai/registry.json',
      openapi: 'https://agiright.org/ai/openapi.json',
      starter_template: 'https://agiright.org/downloads/agiright-policy-starter.zip',
      studio: 'https://agiright.org/studio',
      repository: 'https://github.com/kakon77777-commits/agiright-org',
      sitemap: 'https://agiright.org/sitemap.xml',
      feed: 'https://agiright.org/feed.xml',
      topics: 'https://agiright.org/topics',
      topics_feed: 'https://agiright.org/topics/index.json',
    },
    api: {
      openapi: 'https://agiright.org/ai/openapi.json',
      live_endpoints: [
        {
          method: 'GET',
          path: '/api/mock/402',
          description: 'Live mock of an AICL-style HTTP 402 response — machine-actionable licensing info. No payment is processed.',
        },
        {
          method: 'GET',
          path: '/api/crawler-check?origin=https://example.org',
          description: "Fetches a site's machine-readable policy surface (robots.txt, llms.txt, AICR/AICL, rights spectrum, manifest).",
        },
      ],
    },
    citation: {
      format: 'Neo.K / EveMissLab, "Page Title", version, AGIRight.org, URL',
      attribution_required: true,
    },
    contact: {
      email: SITE.email,
    },
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
