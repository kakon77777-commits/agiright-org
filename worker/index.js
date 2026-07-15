/**
 * AGIRight.org edge worker.
 *
 * 1. Host canonicalization — serves agiright.org; 301s every other bound
 *    hostname (www.agiright.org, asiright.org, www.asiright.org) to it.
 * 2. Single-URL multilingual — one public URL per page. The language is
 *    negotiated per request: `lang` cookie (manual choice) > IP country >
 *    Accept-Language > English. Localized trees (e.g. /zh/...) exist only
 *    as internal build artifacts; requests are rewritten to them here.
 *    Legacy /zh/* URLs 301 to the bare URL and persist the preference.
 *
 * Adding a language later: add its code to LANGS (and country/accept rules),
 * build the tree under /<code>/ — no other worker change needed.
 */
const CANONICAL_HOST = 'agiright.org';
const DEFAULT_LANG = 'en';
/** language codes with a built tree under /<code>/ (longest first for prefix matching) */
const LANGS = ['zh-cn', 'zh', 'ja', 'ko', 'fr', 'de', 'es', 'pt', 'ru', 'ar', 'tr', 'fa', 'bn', 'hi', 'id', 'vi', 'el', 'it', 'nl', 'he', 'pl', 'sv', 'ur', 'th'];
/** IP countries mapped to a non-default language */
const COUNTRY_LANG = {
  TW: 'zh',
  HK: 'zh',
  MO: 'zh',
  CN: 'zh-cn',
  JP: 'ja',
  KR: 'ko',
  FR: 'fr',
  // BE: Dutch-speaking Flemish are the majority (~60%) over French-speaking
  // Walloons (~40%) — corrected from an earlier fr default
  BE: 'nl',
  DE: 'de',
  AT: 'de',
  CH: 'de',
  ES: 'es',
  MX: 'es',
  AR: 'es',
  CO: 'es',
  CL: 'es',
  PE: 'es',
  PT: 'pt',
  BR: 'pt',
  RU: 'ru',
  BY: 'ru',
  KZ: 'ru',
  // Arabic: GCC + Levant + Maghreb + Egypt/Iraq (major population centers)
  SA: 'ar',
  AE: 'ar',
  EG: 'ar',
  IQ: 'ar',
  JO: 'ar',
  KW: 'ar',
  QA: 'ar',
  BH: 'ar',
  OM: 'ar',
  MA: 'ar',
  DZ: 'ar',
  TN: 'ar',
  LB: 'ar',
  SY: 'ar',
  TR: 'tr',
  IR: 'fa',
  AF: 'fa',
  BD: 'bn',
  // IN intentionally unmapped: India is multilingual (22 official
  // languages) — Accept-Language is a better per-user signal than country
  ID: 'id',
  VN: 'vi',
  GR: 'el',
  CY: 'el', // Greek Cypriots are the island's majority
  IT: 'it',
  SM: 'it',
  VA: 'it',
  NL: 'nl',
  IL: 'he',
  PL: 'pl',
  SE: 'sv',
  PK: 'ur',
  TH: 'th',
};
/** Content-Language per lang code */
const CONTENT_LANG = {
  en: 'en',
  zh: 'zh-Hant',
  'zh-cn': 'zh-Hans',
  ja: 'ja',
  ko: 'ko',
  fr: 'fr',
  de: 'de',
  es: 'es',
  pt: 'pt',
  ru: 'ru',
  ar: 'ar',
  tr: 'tr',
  fa: 'fa',
  bn: 'bn',
  hi: 'hi',
  id: 'id',
  vi: 'vi',
  el: 'el',
  it: 'it',
  nl: 'nl',
  he: 'he',
  pl: 'pl',
  sv: 'sv',
  ur: 'ur',
  th: 'th',
};
const LANG_COOKIE = 'lang';
const COOKIE_ATTRS = 'Path=/; Max-Age=31536000; SameSite=Lax';

/** paths that are language-neutral: machine layer, feeds, build assets, API, media */
const NEUTRAL_PREFIXES = ['/ai/', '/schemas/', '/.well-known/', '/_astro/', '/api/', '/media/'];

function cookieLang(request) {
  const cookie = request.headers.get('Cookie') || '';
  const m = cookie.match(/(?:^|;\s*)lang=([A-Za-z-]+)/);
  if (!m) return null;
  const v = m[1].toLowerCase();
  if (v === DEFAULT_LANG || LANGS.includes(v)) return v;
  return null;
}

function pickLang(request) {
  const fromCookie = cookieLang(request);
  if (fromCookie) return fromCookie;

  const country = request.cf && request.cf.country;
  if (country && COUNTRY_LANG[country]) return COUNTRY_LANG[country];

  const accept = (request.headers.get('Accept-Language') || '').toLowerCase();
  // first language tag wins; script-aware Chinese mapping
  const first = accept.split(',')[0].trim().split(';')[0];
  if (first.startsWith('zh')) {
    if (/hans|cn|sg/.test(first)) return 'zh-cn';
    return 'zh'; // zh-tw / zh-hant / zh-hk / bare zh → Traditional
  }
  if (first.startsWith('ja')) return 'ja';
  if (first.startsWith('ko')) return 'ko';
  if (first.startsWith('fr')) return 'fr';
  if (first.startsWith('de')) return 'de';
  if (first.startsWith('es')) return 'es';
  if (first.startsWith('pt')) return 'pt';
  if (first.startsWith('ru')) return 'ru';
  if (first.startsWith('ar')) return 'ar';
  if (first.startsWith('tr')) return 'tr';
  if (first.startsWith('fa')) return 'fa';
  if (first.startsWith('bn')) return 'bn';
  if (first.startsWith('hi')) return 'hi';
  if (first.startsWith('id')) return 'id';
  if (first.startsWith('vi')) return 'vi';
  if (first.startsWith('el')) return 'el';
  if (first.startsWith('it')) return 'it';
  if (first.startsWith('nl')) return 'nl';
  if (first.startsWith('he') || first.startsWith('iw')) return 'he'; // 'iw' = old ISO 639-1 code for Hebrew, still sent by some browsers
  if (first.startsWith('pl')) return 'pl';
  if (first.startsWith('sv')) return 'sv';
  if (first.startsWith('ur')) return 'ur';
  if (first.startsWith('th')) return 'th';
  return DEFAULT_LANG;
}

/** true for HTML page routes; false for files and the machine-readable layer */
function isPagePath(pathname) {
  if (NEUTRAL_PREFIXES.some((p) => pathname.startsWith(p))) return false;
  const ext = pathname.match(/\.([a-z0-9]+)$/i);
  if (ext && ext[1].toLowerCase() !== 'html') return false;
  return true;
}

function withLangHeaders(res, lang) {
  const out = new Response(res.body, res);
  out.headers.append('Vary', 'Cookie');
  out.headers.set('Content-Language', CONTENT_LANG[lang] || lang);
  return out;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // --- host canonicalization ------------------------------------------
    if (url.hostname !== CANONICAL_HOST) {
      url.hostname = CANONICAL_HOST;
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }

    // --- live demo API (v0.3) --------------------------------------------
    if (url.pathname.startsWith('/api/')) {
      return handleApi(url, request, env);
    }

    // --- media streaming from R2 (v0.4.1) ---------------------------------
    if (url.pathname.startsWith('/media/')) {
      return handleMedia(url, request, env);
    }

    // --- legacy localized URLs: /zh/foo → /foo + remembered preference ---
    for (const lang of LANGS) {
      const m = url.pathname.match(new RegExp(`^/${lang}(/.*)?$`));
      if (m) {
        const target = m[1] && m[1] !== '/' ? m[1] : '/';
        return new Response(null, {
          status: 301,
          headers: {
            Location: url.origin + target + url.search,
            'Set-Cookie': `${LANG_COOKIE}=${lang}; ${COOKIE_ATTRS}`,
          },
        });
      }
    }

    // --- language negotiation for page routes ----------------------------
    if ((request.method === 'GET' || request.method === 'HEAD') && isPagePath(url.pathname)) {
      const lang = pickLang(request);
      if (lang !== DEFAULT_LANG) {
        const localized = new URL(url);
        localized.pathname = `/${lang}${url.pathname === '/' ? '' : url.pathname}`;
        let res = await env.ASSETS.fetch(new Request(localized, request));
        if (res.status === 404) {
          // page not translated yet — fall back to the default language
          res = await env.ASSETS.fetch(request);
          return withLangHeaders(res, DEFAULT_LANG);
        }
        return withLangHeaders(res, lang);
      }
      return withLangHeaders(await env.ASSETS.fetch(request), DEFAULT_LANG);
    }

    return env.ASSETS.fetch(request);
  },
};

/* ---------------------------------------------------------------------------
   Media streaming from R2 (v0.4.1) — GET /media/<key> with HTTP Range
   support so video/audio players can seek (206 Partial Content).
--------------------------------------------------------------------------- */

function parseRange(header) {
  // supports: bytes=start-end | bytes=start- | bytes=-suffix
  const m = /^bytes=(\d*)-(\d*)$/.exec(header || '');
  if (!m || (m[1] === '' && m[2] === '')) return null;
  if (m[1] === '') return { suffix: Number(m[2]) };
  const offset = Number(m[1]);
  if (m[2] === '') return { offset };
  return { offset, length: Number(m[2]) - offset + 1 };
}

async function handleMedia(url, request, env) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('method not allowed', { status: 405 });
  }
  const key = decodeURIComponent(url.pathname.slice('/media/'.length));
  if (!key || key.includes('..')) return new Response('not found', { status: 404 });

  const range = request.method === 'GET' ? parseRange(request.headers.get('Range')) : null;
  let object;
  try {
    object = await env.MEDIA.get(key, range ? { range } : undefined);
  } catch {
    // R2 rejects unsatisfiable ranges
    const head = await env.MEDIA.head(key);
    if (!head) return new Response('not found', { status: 404 });
    return new Response('range not satisfiable', {
      status: 416,
      headers: { 'Content-Range': `bytes */${head.size}` },
    });
  }
  if (!object) return new Response('not found', { status: 404 });

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('ETag', object.httpEtag);
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Cache-Control', 'public, max-age=86400');

  if (range) {
    // compute Content-Range from the requested range + total size —
    // production R2 does not reliably echo the fulfilled range back
    let offset, length;
    if (range.suffix !== undefined) {
      length = Math.min(range.suffix, object.size);
      offset = object.size - length;
    } else {
      offset = range.offset;
      length = Math.min(range.length ?? object.size - offset, object.size - offset);
    }
    if (offset >= object.size || length <= 0) {
      return new Response('range not satisfiable', {
        status: 416,
        headers: { 'Content-Range': `bytes */${object.size}` },
      });
    }
    headers.set('Content-Range', `bytes ${offset}-${offset + length - 1}/${object.size}`);
    return new Response(object.body, { status: 206, headers });
  }

  headers.set('Content-Length', String(object.size));
  return new Response(request.method === 'HEAD' ? null : object.body, { status: 200, headers });
}

/* ---------------------------------------------------------------------------
   Live demo API (v0.3) — mock/educational only, per site policy: no real
   payment processing, no data collection. CORS-open so other playgrounds
   and agents can call these endpoints.
--------------------------------------------------------------------------- */

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function apiJson(obj, status = 200, extra = {}) {
  return new Response(JSON.stringify(obj, null, 2), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...CORS, ...extra },
  });
}

async function handleApi(url, request, env) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS });
  }
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return apiJson({ error: 'method_not_allowed' }, 405);
  }
  switch (url.pathname) {
    case '/api/mock/402':
      return mock402(url);
    case '/api/crawler-check':
      return crawlerCheck(url, env);
    default:
      return apiJson(
        {
          error: 'not_found',
          endpoints: ['/api/mock/402', '/api/crawler-check?origin=https://example.org'],
          openapi: 'https://agiright.org/ai/openapi.json',
        },
        404
      );
  }
}

/**
 * GET /api/mock/402[?resource=/path]
 * A live example of an AICL-style "402 Payment Required" response:
 * machine-actionable licensing information instead of a dead end.
 */
function mock402(url) {
  const resource = (url.searchParams.get('resource') || '/premium/example-article').slice(0, 200);
  return apiJson(
    {
      error: 'license_required',
      message: 'This resource requires a license for AI use. This is a mock response for demonstration — no payment is processed.',
      resource,
      aicl: 'https://agiright.org/.well-known/aicl.json',
      applicable_licenses: [
        {
          id: 'metered_rag',
          rights: ['rag'],
          price: { amount: '0.002', currency: 'USD', unit: 'per_request' },
          conditions: ['attribution_required', 'retention_days_30', 'no_model_training'],
        },
        {
          id: 'commercial_or_training_license',
          rights: ['training', 'fine_tuning', 'commercial_use'],
          requires_contact: true,
          contact: 'contact@agiright.org',
        },
      ],
      quote_endpoint: 'https://agiright.org/api/mock/quote (specification only — not implemented)',
      spec: 'https://agiright.org/protocols/aicl',
      mock: true,
    },
    402,
    { Link: '<https://agiright.org/.well-known/aicl.json>; rel="license-catalog"' }
  );
}

/**
 * GET /api/crawler-check?origin=https://example.org
 * Fetches a site's machine-readable policy surface (bounded: https-only,
 * fixed well-known paths, capped size and time) and returns the raw results
 * so the playground can validate and summarize them client-side.
 */
const CHECK_FILES = [
  '/robots.txt',
  '/llms.txt',
  '/.well-known/aicr.json',
  '/.well-known/aicl.json',
  '/ai/rights-spectrum.json',
  '/ai/manifest.json',
];
const PRIVATE_HOST = /^(localhost|.*\.local|.*\.internal|.*\.lan|0\.0\.0\.0|127\.|10\.|192\.168\.|169\.254\.|172\.(1[6-9]|2\d|3[01])\.)/i;

async function crawlerCheck(url, env) {
  const raw = url.searchParams.get('origin') || '';
  let origin;
  try {
    const parsed = new URL(raw);
    if (parsed.protocol !== 'https:') throw new Error('https origins only');
    if (!parsed.hostname.includes('.') || PRIVATE_HOST.test(parsed.hostname)) {
      throw new Error('public hostnames only');
    }
    origin = parsed.origin;
  } catch (e) {
    return apiJson({ error: 'invalid_origin', message: String((e && e.message) || e) }, 400);
  }

  // self-inspection: serve our own files from the asset store directly,
  // avoiding worker self-fetch recursion limits
  const self = origin === `https://${CANONICAL_HOST}` || origin === `https://www.${CANONICAL_HOST}`;

  const results = await Promise.all(
    CHECK_FILES.map(async (path) => {
      try {
        const res = self
          ? await env.ASSETS.fetch(new Request(`https://${CANONICAL_HOST}${path}`))
          : await fetch(origin + path, {
          redirect: 'follow',
          signal: AbortSignal.timeout(8000),
          headers: {
            'User-Agent': 'AGIRight-PolicyTester/0.3 (+https://agiright.org/playground)',
            Accept: 'application/json, text/plain, */*',
          },
        });
        const contentType = res.headers.get('content-type') || '';
        const length = Number(res.headers.get('content-length') || 0);
        let body = null;
        if (res.ok && length < 512000) {
          const text = await res.text();
          body = text.slice(0, 20000);
        }
        return { path, status: res.status, contentType, body };
      } catch (e) {
        return { path, error: String((e && e.message) || e) };
      }
    })
  );

  return apiJson({
    origin,
    checked_at: new Date().toISOString(),
    note: 'Raw fetch results; validation against AGIRight draft schemas happens in the playground client.',
    results,
  });
}
