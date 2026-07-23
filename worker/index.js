/**
 * AGIRight.org edge worker.
 *
 * 1. Host canonicalization — serves agiright.org; 301s every other bound
 *    hostname (www.agiright.org, asiright.org, www.asiright.org) to it.
 * 2. Hybrid multilingual (since 2026-07-21, per the site's own audit doc):
 *    every page has a language-negotiated bare URL (`lang` cookie > IP
 *    country > Accept-Language > English) AND a stable, directly-servable,
 *    independently indexable per-language URL (e.g. /ja/about) carrying
 *    matching hreflang tags (see BaseLayout.astro). Both are first-class —
 *    visiting /ja/about serves that build tree directly (no redirect) and
 *    sets the lang cookie, so a later visit to the bare URL keeps the same
 *    language. Before 2026-07-21 this same request pattern 301-redirected
 *    to the bare URL instead, which made the prefixed URLs unusable as
 *    hreflang targets (Google requires hreflang URLs not to redirect) and
 *    contradicted the "single URL" language_negotiation.model claim in
 *    /ai/manifest.json for every language but the one this loop explicitly
 *    handled.
 *
 * Adding a language later: add its code to LANGS (and country/accept rules),
 * build the tree under /<code>/ — no other worker change needed.
 */
const CANONICAL_HOST = 'agiright.org';
const DEFAULT_LANG = 'en';
/** language codes with a built tree under /<code>/ (longest first for prefix matching) */
const LANGS = ['zh-cn', 'zh', 'ja', 'ko', 'fr', 'de', 'es', 'pt', 'ru', 'ar', 'tr', 'fa', 'bn', 'hi', 'id', 'vi', 'el', 'it', 'nl', 'he', 'pl', 'sv', 'ur', 'th', 'ta', 'cs', 'uk', 'ms', 'fi', 'ro', 'hu', 'da', 'no', 'sk', 'fil', 'kk', 'sw', 'bs', 'eo', 'pa', 'te', 'mr', 'am', 'my', 'ne', 'si', 'uz', 'ha', 'az', 'yo', 'km', 'mn', 'hy', 'bg', 'ig', 'ka', 'lo', 'so', 'hr', 'lt', 'lv', 'et', 'sl', 'mt', 'ga', 'jv', 'zu', 'af', 'ps'];
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
  // KZ: Kazakh is the sole state language (constitution); Russian is widely
  // used but this was an over-simplification from before a Kazakh
  // translation existed — corrected now that kk is available, same kind of
  // fix as the earlier BE (Belgium) correction below.
  KZ: 'kk',
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
  // ta intentionally has no country mapping: Tamil's largest populations
  // (India, Sri Lanka) are both majority-other-language countries — same
  // reasoning as IN above. Accept-Language is the accurate per-user signal.
  CZ: 'cs',
  UA: 'uk',
  MY: 'ms',
  BN: 'ms', // Brunei: Malay is the sole official language
  FI: 'fi',
  RO: 'ro',
  HU: 'hu',
  DK: 'da',
  NO: 'no',
  SK: 'sk',
  PH: 'fil',
  // TZ only, not KE: Swahili is Tanzania's dominant everyday language,
  // while Kenya's web/business use skews English despite Swahili's
  // co-official status — Accept-Language is the better signal for KE.
  TZ: 'sw',
  BA: 'bs',
  // eo intentionally has no country mapping — Esperanto is constructed and
  // has no national population; Accept-Language is the only real signal.
  // pa/te/mr intentionally have no country mapping: Punjab, Andhra
  // Pradesh/Telangana, and Maharashtra are Indian states, not countries —
  // same reasoning as the IN/ta/hi precedent above.
  ET: 'am',
  MM: 'my',
  NP: 'ne',
  // LK: Sinhala is the majority/national language (~74%) — unlike the
  // IN/ta/pa/te/mr precedent above, Sri Lanka's two official languages
  // (Sinhala, Tamil) have a clear majority, so country mapping is safe here.
  LK: 'si',
  UZ: 'uz',
  AZ: 'az',
  // ha/yo intentionally have no country mapping: Nigeria's official language
  // is English, and Hausa/Yoruba are each major regional languages (not a
  // nationwide majority) — same reasoning as the IN/ta precedent above.
  KH: 'km',
  MN: 'mn',
  // AM here is Armenia's country code, distinct from the 'am' Amharic
  // language code used elsewhere — Cloudflare's cf.country is always
  // uppercase, this codebase's Lang codes are always lowercase, so there's
  // no actual collision, just a coincidental same-letters case difference.
  AM: 'hy',
  BG: 'bg',
  GE: 'ka',
  LA: 'lo',
  // SO: Somalia's constitution names both Somali and Arabic official, but
  // Somali is the overwhelming everyday-vernacular majority (Arabic is
  // largely religious/liturgical use) — same "clear majority despite
  // co-official status" reasoning as the earlier LK/si precedent.
  SO: 'so',
  HR: 'hr',
  // ig intentionally has no country mapping: Nigeria's official language is
  // English and Igbo is a major regional language (not a nationwide
  // majority) — same reasoning as the ha/yo precedent above.
  LT: 'lt',
  LV: 'lv',
  EE: 'et',
  SI: 'sl',
  MT: 'mt',
  // ga (Irish) intentionally has no country mapping: Irish is Ireland's
  // constitutional first official language, but English is the
  // overwhelming everyday-use language there — same reasoning as the
  // ha/yo/ig precedent above (constitutional/official status without
  // practical-majority everyday use).
  // jv (Javanese) intentionally has no country mapping: Javanese has more
  // native speakers than Indonesian itself, but Indonesia's national
  // lingua franca and sole official language is Bahasa Indonesia (already
  // ID → id) — Javanese is a regional/ethnic language, not a national
  // one, same reasoning as the IN/ta/pa precedent above.
  // zu/af (Zulu, Afrikaans) intentionally have no country mapping: South
  // Africa has 12 official languages with no majority — Zulu is merely
  // the largest single home language at ~24%, not a majority like the
  // LK/si or SO/so precedents required — Accept-Language is the accurate
  // per-user signal here, same reasoning as the IN precedent above.
  // ps (Pashto) intentionally has no new country mapping: Afghanistan (AF)
  // already maps to 'fa' (Dari/Persian) — Dari and Pashto are both
  // official and roughly comparable in population share with no clear
  // majority, so this doesn't meet the bar the earlier KZ/kk correction
  // needed (a genuine sole-official-language case) — leaving the existing
  // AF → fa default unchanged rather than an under-justified reversal;
  // Pashto speakers in both Afghanistan and Pakistan are served by
  // Accept-Language instead.
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
  ta: 'ta',
  cs: 'cs',
  uk: 'uk',
  ms: 'ms',
  fi: 'fi',
  ro: 'ro',
  hu: 'hu',
  da: 'da',
  no: 'no',
  sk: 'sk',
  fil: 'fil',
  kk: 'kk',
  sw: 'sw',
  bs: 'bs',
  eo: 'eo',
  pa: 'pa',
  te: 'te',
  mr: 'mr',
  am: 'am',
  my: 'my',
  ne: 'ne',
  si: 'si',
  uz: 'uz',
  ha: 'ha',
  az: 'az',
  yo: 'yo',
  km: 'km',
  mn: 'mn',
  hy: 'hy',
  bg: 'bg',
  ig: 'ig',
  ka: 'ka',
  lo: 'lo',
  so: 'so',
  hr: 'hr',
  lt: 'lt',
  lv: 'lv',
  et: 'et',
  sl: 'sl',
  mt: 'mt',
  ga: 'ga',
  jv: 'jv',
  zu: 'zu',
  af: 'af',
  ps: 'ps',
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
  if (first.startsWith('ta')) return 'ta';
  if (first.startsWith('cs')) return 'cs';
  if (first.startsWith('uk')) return 'uk';
  if (first.startsWith('ms')) return 'ms';
  if (first.startsWith('fi')) return 'fi';
  if (first.startsWith('ro')) return 'ro';
  if (first.startsWith('hu')) return 'hu';
  if (first.startsWith('da')) return 'da';
  if (first.startsWith('no') || first.startsWith('nb') || first.startsWith('nn')) return 'no'; // nb=Bokmål, nn=Nynorsk — both map to the single Norwegian variant this site ships
  if (first.startsWith('sk')) return 'sk';
  if (first.startsWith('fil') || first.startsWith('tl')) return 'fil'; // 'tl' = ISO 639-1 Tagalog, still the more common Accept-Language tag for Filipino
  if (first.startsWith('kk')) return 'kk';
  if (first.startsWith('sw')) return 'sw';
  if (first.startsWith('bs') || first.startsWith('sr')) return 'bs'; // this site ships one combined Bosnian/Serbian variant, not two
  if (first.startsWith('eo')) return 'eo';
  if (first.startsWith('pa')) return 'pa';
  if (first.startsWith('te')) return 'te';
  if (first.startsWith('mr')) return 'mr';
  if (first.startsWith('am')) return 'am';
  if (first.startsWith('my')) return 'my';
  if (first.startsWith('ne')) return 'ne';
  if (first.startsWith('si')) return 'si';
  if (first.startsWith('uz')) return 'uz';
  if (first.startsWith('ha')) return 'ha';
  if (first.startsWith('az')) return 'az';
  if (first.startsWith('yo')) return 'yo';
  if (first.startsWith('km')) return 'km';
  if (first.startsWith('mn')) return 'mn';
  if (first.startsWith('hy')) return 'hy';
  if (first.startsWith('bg')) return 'bg';
  if (first.startsWith('ig')) return 'ig';
  if (first.startsWith('ka')) return 'ka';
  if (first.startsWith('lo')) return 'lo';
  if (first.startsWith('so')) return 'so';
  if (first.startsWith('hr')) return 'hr';
  if (first.startsWith('lt')) return 'lt';
  if (first.startsWith('lv')) return 'lv';
  if (first.startsWith('et')) return 'et';
  if (first.startsWith('sl')) return 'sl';
  if (first.startsWith('mt')) return 'mt';
  if (first.startsWith('ga')) return 'ga';
  if (first.startsWith('jv')) return 'jv';
  if (first.startsWith('zu')) return 'zu';
  if (first.startsWith('af')) return 'af';
  if (first.startsWith('ps')) return 'ps';
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

    // --- unified sitemap entry point (P0-4): /sitemap.xml mirrors the
    //     @astrojs/sitemap-generated index instead of a separate filename ---
    if (url.pathname === '/sitemap.xml') {
      const idx = await env.ASSETS.fetch(new URL('/sitemap-index.xml', url));
      return new Response(idx.body, idx);
    }

    // --- per-language URLs: served directly now, not redirected away ---
    for (const lang of LANGS) {
      const m = url.pathname.match(new RegExp(`^/${lang}(/.*)?$`));
      if (m && isPagePath(url.pathname)) {
        const res = await env.ASSETS.fetch(request);
        const out = withLangHeaders(res, lang);
        out.headers.append('Set-Cookie', `${LANG_COOKIE}=${lang}; ${COOKIE_ATTRS}`);
        return out;
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
