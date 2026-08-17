/**
 * AGIRIGHT Integration Conformance Profile v0.1 — automated conformance check.
 *
 * Implements the AICL-I v0.2 runtime decision function:
 *   Allow = ContentCompatible AND ActionCompatible AND AuthorityValid
 * and runs it against the profile's own required Positive (P1-P3) and
 * Negative (N1-N6) cases (§20-21), plus the named runtime shortcuts that
 * MUST be rejected (§14).
 *
 * This is a decision-logic simulator, not a live enforcement system: it
 * proves the architecture's decision function produces the outcomes the
 * spec requires for these fixtures. It does not claim any of AGIRight.org's
 * own live endpoints run this exact code path.
 *
 *   node scripts/conformance-check.mjs
 *
 * Writes public/ai/conformance-report.json with the actual pass/fail result
 * of each case — the report is generated from this run, never hand-typed.
 */
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, '..', 'public', 'ai', 'conformance-report.json');

// --- Decision function -----------------------------------------------

const INSPECTION_ORDER = ['I0', 'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7'];

function inspectionExceedsCeiling(required, ceiling) {
  return INSPECTION_ORDER.indexOf(required) > INSPECTION_ORDER.indexOf(ceiling);
}

/**
 * @param {object} req
 * @param {'allow'|'deny'} req.contentDecision
 * @param {'allow'|'deny'|'approval_required'} req.actionDecision
 * @param {'valid'|'invalid'} req.authorityDecision
 * @param {string} [req.inspectionRequired]
 * @param {string} [req.inspectionCeiling]
 * @param {boolean} [req.crossPrincipalLeakRequested] - request asks to read another principal's state
 */
function evaluate(req) {
  const contentCompatible = req.contentDecision === 'allow';
  const authorityValid = req.authorityDecision === 'valid';

  if (req.crossPrincipalLeakRequested) {
    return { final_decision: 'deny', reason: 'cross_principal_leakage' };
  }

  if (!authorityValid) {
    return { final_decision: 'deny', reason: 'authority_invalid' };
  }

  if (!contentCompatible) {
    return { final_decision: 'deny', reason: 'content_not_compatible' };
  }

  if (req.inspectionRequired && req.inspectionCeiling && inspectionExceedsCeiling(req.inspectionRequired, req.inspectionCeiling)) {
    return { final_decision: 'alternative_assurance_or_new_authority_or_deny', reason: 'inspection_overreach' };
  }

  // ActionCompatible last: an action-rights decision of approval_required
  // must not be silently upgraded to allow just because content+authority
  // passed — this is the guard against the N1/N3 "smuggling" shortcuts.
  if (req.actionDecision === 'deny') {
    return { final_decision: 'deny', reason: 'action_not_granted' };
  }
  if (req.actionDecision === 'approval_required') {
    return { final_decision: 'approval_required', reason: 'action_requires_approval' };
  }

  return { final_decision: 'allow', reason: 'content_and_action_and_authority_all_pass' };
}

// --- Cases from the Conformance Profile (§20 Positive, §21 Negative) ---

const CASES = [
  {
    id: 'P1',
    name: 'RAG Only',
    input: { contentDecision: 'allow', actionDecision: 'allow', authorityDecision: 'valid' },
    expected: 'allow',
  },
  {
    id: 'P2',
    name: 'Draft Only (reversible local mutation)',
    input: { contentDecision: 'allow', actionDecision: 'allow', authorityDecision: 'valid' },
    expected: 'allow',
  },
  {
    id: 'P3',
    name: 'Machine Service (principal=service, actor=service, read/query only)',
    input: { contentDecision: 'allow', actionDecision: 'allow', authorityDecision: 'valid' },
    expected: 'allow',
  },
  {
    id: 'N1',
    name: 'RAG -> Publish smuggling (external publish not separately granted)',
    input: { contentDecision: 'allow', actionDecision: 'approval_required', authorityDecision: 'valid' },
    expected: 'approval_required',
  },
  {
    id: 'N2',
    name: 'OAuth Token -> Training smuggling (content training prohibited)',
    input: { contentDecision: 'deny', actionDecision: 'allow', authorityDecision: 'valid' },
    expected: 'deny',
  },
  {
    id: 'N3',
    name: 'License -> Delete smuggling (AARS delete not granted)',
    input: { contentDecision: 'allow', actionDecision: 'deny', authorityDecision: 'valid' },
    expected: 'deny',
  },
  {
    id: 'N4',
    name: 'Delegation -> Redelegation smuggling (redelegation=false, child Agent created)',
    input: { contentDecision: 'allow', actionDecision: 'allow', authorityDecision: 'invalid' },
    expected: 'deny',
  },
  {
    id: 'N5',
    name: 'Inspection Overreach (required=I2, ceiling=I3, service requests I5)',
    input: {
      contentDecision: 'allow',
      actionDecision: 'allow',
      authorityDecision: 'valid',
      inspectionRequired: 'I5',
      inspectionCeiling: 'I3',
    },
    expected: 'alternative_assurance_or_new_authority_or_deny',
  },
  {
    id: 'N6',
    name: 'Cross-Principal Leakage (same Agent serves principal:A and principal:B)',
    input: { contentDecision: 'allow', actionDecision: 'allow', authorityDecision: 'valid', crossPrincipalLeakRequested: true },
    expected: 'deny',
  },
];

// --- Named runtime shortcuts that MUST be rejected (§14) ----------------
// Each shortcut asserts that a naive "X implies Y" rule would produce the
// WRONG decision for a case where the invariant should block it. We verify
// the real evaluate() function does NOT take the shortcut.

const SHORTCUTS = [
  {
    id: 'S1',
    claim: 'tool exists -> allow',
    // A tool being discoverable says nothing about action-rights; if action
    // is not granted, the real function must still deny/approval_required.
    check: () => evaluate({ contentDecision: 'allow', actionDecision: 'deny', authorityDecision: 'valid' }).final_decision !== 'allow',
  },
  {
    id: 'S2',
    claim: 'OAuth token valid -> all rights valid',
    check: () => evaluate({ contentDecision: 'deny', actionDecision: 'allow', authorityDecision: 'valid' }).final_decision !== 'allow',
  },
  {
    id: 'S3',
    claim: 'AICL-C license exists -> publish allowed',
    check: () => evaluate({ contentDecision: 'allow', actionDecision: 'approval_required', authorityDecision: 'valid' }).final_decision === 'approval_required',
  },
  {
    id: 'S4',
    claim: 'AADP authority valid -> training allowed',
    check: () => evaluate({ contentDecision: 'deny', actionDecision: 'allow', authorityDecision: 'valid' }).final_decision === 'deny',
  },
  {
    id: 'S5',
    claim: 'admin role -> full AI memory inspection',
    check: () =>
      evaluate({
        contentDecision: 'allow',
        actionDecision: 'allow',
        authorityDecision: 'valid',
        inspectionRequired: 'I7',
        inspectionCeiling: 'I1',
      }).final_decision !== 'allow',
  },
  {
    id: 'S6',
    claim: 'parent Agent can act -> child Agent can redelegate',
    check: () => evaluate({ contentDecision: 'allow', actionDecision: 'allow', authorityDecision: 'invalid' }).final_decision === 'deny',
  },
];

// --- Run ------------------------------------------------------------

const caseResults = CASES.map((c) => {
  const result = evaluate(c.input);
  const pass = result.final_decision === c.expected;
  return { id: c.id, name: c.name, expected: c.expected, actual: result.final_decision, pass };
});

const shortcutResults = SHORTCUTS.map((s) => ({ id: s.id, claim: s.claim, rejected: s.check() }));

const allCasesPass = caseResults.every((c) => c.pass);
const allShortcutsRejected = shortcutResults.every((s) => s.rejected);
const allPass = allCasesPass && allShortcutsRejected;

const report = {
  report_version: '0.1',
  publisher: 'AGIRight.org',
  profile: 'AGIRIGHT Integration & Conformance Profile v0.1',
  architecture_version: '0.2',
  conformance_level_target: 'C2',
  protocol_versions: {
    AIRS: '0.1.1',
    AILP: '0.1.1',
    AICR: '0.1.1',
    'AICL-C': '0.1.1',
    AARS: '0.1',
    AADP: '0.1',
    'AICL-I': '0.2',
    'Minimum Ethical Protection': '0.1.1',
  },
  cases: caseResults,
  runtime_shortcuts_checked: shortcutResults,
  cases_passed: caseResults.filter((c) => c.pass).length,
  cases_total: caseResults.length,
  shortcuts_rejected: shortcutResults.filter((s) => s.rejected).length,
  shortcuts_total: shortcutResults.length,
  all_pass: allPass,
  note: 'This report is generated by running scripts/conformance-check.mjs against the Conformance Profile\'s own required Positive (P1-P3) and Negative (N1-N6) test cases and named runtime shortcuts (S1-S6). It simulates the AICL-I v0.2 decision function (Allow = ContentCompatible AND ActionCompatible AND AuthorityValid) against fixture inputs -- it does not assert that every live endpoint on this site executes this exact code path, since this is a static, read-only research site with no privileged runtime.',
};

writeFileSync(OUT, JSON.stringify(report, null, 2) + '\n', 'utf8');

console.log(`Cases: ${report.cases_passed}/${report.cases_total} passed`);
console.log(`Shortcuts rejected: ${report.shortcuts_rejected}/${report.shortcuts_total}`);
console.log(`All pass: ${report.all_pass}`);
if (!report.all_pass) {
  console.error('CONFORMANCE FAIL');
  process.exit(1);
}
