/**
 * Cross-file version consistency audit.
 *
 * protocols.ts is the source of truth for each protocol's live `status`
 * (e.g. "Draft v0.1.1"). This script extracts that, then checks every
 * OTHER file that also states a protocol's version and flags any that
 * disagree. This is the exact class of bug caught three times in a row
 * during the 2026-08-17 session (llms.txt in Phase C, /specs file list
 * in Phase D, registry.json + manifest.json.ts in Phase E) -- this script
 * makes that a repeatable check instead of an accidental catch.
 *
 *   node scripts/version-consistency-check.mjs
 *
 * Writes public/ai/version-consistency-report.json with the actual result.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = join(here, '..');
const OUT = join(ROOT, 'public', 'ai', 'version-consistency-report.json');

function normalizeVersion(s) {
  // "Draft v0.1.1" / "draft-0.1.1" / "v0.1.1" / "0.1.1" -> "0.1.1"
  const m = String(s).match(/(\d+\.\d+(?:\.\d+)?)/);
  return m ? m[1] : null;
}

// --- Source of truth: protocols.ts -----------------------------------

const protocolsTs = readFileSync(join(ROOT, 'src', 'data', 'protocols.ts'), 'utf8');
const truth = {};
{
  // Each protocol block: id: 'xxx' ... status: 'Draft v0.1.1'
  const blockRe = /id:\s*'([a-z]+)',[\s\S]*?status:\s*'([^']+)'/g;
  let m;
  while ((m = blockRe.exec(protocolsTs))) {
    const [, id, status] = m;
    truth[id] = normalizeVersion(status);
  }
}

const mismatches = [];
const checked = [];

function check(file, label, protocolId, foundVersion) {
  const expected = truth[protocolId];
  checked.push({ file: label, protocol: protocolId, expected, found: foundVersion });
  if (expected && foundVersion && expected !== foundVersion) {
    mismatches.push({ file: label, protocol: protocolId, expected_from_protocols_ts: expected, found_in_file: foundVersion });
  }
}

// --- registry.json -----------------------------------------------------
{
  const label = 'public/ai/registry.json';
  const data = JSON.parse(readFileSync(join(ROOT, 'public', 'ai', 'registry.json'), 'utf8'));
  for (const p of data.protocols || []) {
    check(label, label, p.id, normalizeVersion(p.current_version));
  }
}

// --- protocol-index.json ------------------------------------------------
{
  const label = 'public/ai/protocol-index.json';
  const data = JSON.parse(readFileSync(join(ROOT, 'public', 'ai', 'protocol-index.json'), 'utf8'));
  for (const p of data.protocols || []) {
    check(label, label, p.id, normalizeVersion(p.status));
  }
}

// --- manifest.json.ts (source, not built output) ------------------------
{
  const label = 'src/pages/ai/manifest.json.ts';
  const text = readFileSync(join(ROOT, 'src', 'pages', 'ai', 'manifest.json.ts'), 'utf8');
  const blockRe = /id:\s*'([a-z]+)'[\s\S]*?status:\s*'([^']+)'/g;
  let m;
  while ((m = blockRe.exec(text))) {
    const [, id, status] = m;
    if (id in truth) check(label, label, id, normalizeVersion(status));
  }
}

// --- papers.ts (whitepaper version field, only for content_learning ids matching a protocol id) ---
{
  const label = 'src/data/papers.ts';
  const text = readFileSync(join(ROOT, 'src', 'data', 'papers.ts'), 'utf8');
  // AICR/AICL whitepaper and AIRS/AILP whitepaper both cover TWO protocols
  // at once and carry ONE version field for the pair, so we only check
  // them against protocols that are expected to share that version.
  const pairs = [
    { slug: 'aicr-aicl-content-licensing', ids: ['aicr', 'aicl'] },
    { slug: 'ai-rights-spectrum', ids: ['airs', 'ailp'] },
  ];
  for (const { slug, ids } of pairs) {
    const re = new RegExp(`slug:\\s*'${slug}'[\\s\\S]*?version:\\s*'([^']+)'`);
    const m = text.match(re);
    if (m) {
      const found = normalizeVersion(m[1]);
      for (const id of ids) check(label, `${label} (${slug})`, id, found);
    }
  }
}

const report = {
  report_version: '0.1',
  publisher: 'AGIRight.org',
  check: 'version_consistency',
  source_of_truth: 'src/data/protocols.ts (Protocol.status field)',
  truth_versions: truth,
  files_checked: [...new Set(checked.map((c) => c.file))],
  checks_run: checked.length,
  mismatches_found: mismatches.length,
  mismatches,
  status: mismatches.length === 0 ? 'PASS' : 'FAIL',
  note: 'Cross-checks every protocol version stated outside protocols.ts against protocols.ts itself, which is the page a visitor actually sees. Run this at the start of any future phase that touches protocol versions, not only after a manual catch.',
};

writeFileSync(OUT, JSON.stringify(report, null, 2) + '\n', 'utf8');
console.log(`Checks run: ${report.checks_run}`);
console.log(`Mismatches: ${report.mismatches_found}`);
console.log(`Status: ${report.status}`);
if (mismatches.length > 0) {
  console.error(JSON.stringify(mismatches, null, 2));
  process.exit(1);
}
