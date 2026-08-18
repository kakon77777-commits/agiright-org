/**
 * DWRG validation, per the whitepaper's own §29 checklist (scoped to the
 * checks meaningful for this registry's actual size/shape):
 *
 *   node scripts/dwrg-validate.mjs
 *
 * Run BEFORE `npm run build` (its report is read by ResourcesPage.astro /
 * SpecsPage.astro at build time, like conformance-check.mjs and the other
 * scripts/*-check.mjs reports). Writes public/ai/dwrg-validation-report.json
 * with the actual result of each check — not a hand-typed pass/fail.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = join(here, '..');
const OUT = join(ROOT, 'public', 'ai', 'dwrg-validation-report.json');

const { DWRG_RESOURCES } = await import(pathToFileURL(join(ROOT, 'src', 'data', 'resources.ts')));

const findings = [];
function fail(check, detail) {
  findings.push({ check, detail, severity: 'FAIL' });
}

// 1. duplicate resource_id
{
  const seen = new Map();
  for (const r of DWRG_RESOURCES) {
    if (seen.has(r.id)) fail('duplicate_resource_id', `"${r.id}" appears more than once`);
    seen.set(r.id, true);
  }
}

// 2. duplicate canonical_url
{
  const seen = new Map();
  for (const r of DWRG_RESOURCES) {
    if (seen.has(r.canonical_url)) fail('duplicate_canonical_url', `"${r.canonical_url}" used by more than one resource`);
    seen.set(r.canonical_url, r.id);
  }
}

// 3. invalid URL (canonical_url and every link href)
for (const r of DWRG_RESOURCES) {
  for (const url of [r.canonical_url, ...r.links.map((l) => l.href)]) {
    try {
      new URL(url);
    } catch {
      fail('invalid_url', `${r.id}: "${url}" is not a well-formed URL`);
    }
  }
}

// 4. missing required metadata
for (const r of DWRG_RESOURCES) {
  for (const field of ['id', 'name', 'type', 'canonical_url', 'status']) {
    if (!r[field]) fail('missing_required_metadata', `${r.id || '(no id)'}: missing "${field}"`);
  }
  if (!r.description?.en || !r.description?.zh) fail('missing_required_metadata', `${r.id}: missing bilingual description`);
}

// 5. non-public leak -- real check, not vacuous: fails the moment any
// non-'public' visibility value appears anywhere in the registry, which
// is exactly the whitepaper's "PublicProjection ∩ NonPublicResources = ∅"
// invariant (§16/§29). Every entry is 'public' today (v1 has no other
// visibility level implemented), so this reads the actual field rather
// than assuming it -- it will catch a real leak the day a non-public
// resource is ever added, not just today's state.
for (const r of DWRG_RESOURCES) {
  if (r.visibility !== 'public') fail('non_public_leak', `${r.id}: visibility="${r.visibility}" would be emitted into a public-only projection`);
}

// 6. HTML/JSON drift -- every resource's canonical_url must actually appear
// as a rendered link in the BUILT /resources.html, not just in the source
// data (catches ResourcesPage.astro silently failing to render an entry).
{
  const distHtml = join(ROOT, 'dist', 'resources.html');
  if (existsSync(distHtml)) {
    const html = readFileSync(distHtml, 'utf8');
    for (const r of DWRG_RESOURCES) {
      const localPath = r.canonical_url.startsWith('https://agiright.org')
        ? r.canonical_url.replace('https://agiright.org', '') || '/'
        : r.canonical_url;
      if (!html.includes(`href="${localPath}"`) && !html.includes(`href="${r.canonical_url}"`)) {
        fail('html_json_drift', `${r.id}: canonical_url not found as a rendered href in dist/resources.html`);
      }
    }
  } else {
    findings.push({ check: 'html_json_drift', detail: 'dist/resources.html not built yet -- run after `npm run build` for this check to run', severity: 'SKIPPED' });
  }
}

// 7. Linkset relation types must be IANA-registered or resources.ts must
// supply an explicit override (linksetRel) -- this is the whitepaper's
// §12 "DomainRelation != StandardRelation" invariant, checked mechanically
// instead of by manual review.
const IANA_REGISTERED = new Set([
  'alternate', 'describedby', 'related', 'service-desc', 'service-doc', 'service-meta',
  'canonical', 'item', 'next', 'prev', 'first', 'last', 'self', 'up', 'author', 'help',
  'license', 'search', 'tag', 'via', 'linkset',
]);
for (const r of DWRG_RESOURCES) {
  for (const l of r.links) {
    const effective = l.linksetRel ?? l.rel;
    if (!IANA_REGISTERED.has(effective)) {
      fail('unregistered_linkset_relation', `${r.id}: relation "${effective}" (from rel="${l.rel}") is not IANA-registered and has no linksetRel override`);
    }
  }
}

const report = {
  report_version: '0.1',
  publisher: 'AGIRight.org',
  check: 'dwrg_validation',
  profile_reference: 'DWRG_Dual_Surface_Web_Resource_Graph_Technical_Whitepaper_v0.1 §29',
  resources_checked: DWRG_RESOURCES.length,
  checks_run: ['duplicate_resource_id', 'duplicate_canonical_url', 'invalid_url', 'missing_required_metadata', 'non_public_leak', 'html_json_drift', 'unregistered_linkset_relation'],
  findings_count: findings.filter((f) => f.severity === 'FAIL').length,
  findings,
  status: findings.some((f) => f.severity === 'FAIL') ? 'FAIL' : 'PASS',
};

writeFileSync(OUT, JSON.stringify(report, null, 2) + '\n', 'utf8');
console.log(`Resources checked: ${report.resources_checked}`);
console.log(`Findings: ${report.findings_count}`);
console.log(`Status: ${report.status}`);
if (report.status === 'FAIL') {
  console.error(JSON.stringify(findings.filter((f) => f.severity === 'FAIL'), null, 2));
  process.exit(1);
}
