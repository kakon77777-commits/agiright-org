/**
 * Imports the research papers from ../docx into src/content/whitepapers/,
 * renaming to URL slugs and prepending minimal frontmatter.
 * Re-runnable: overwrites destination files each time.
 *
 *   node scripts/import-papers.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const SRC = join(here, '..', '..', 'docx');
const DEST = join(here, '..', 'src', 'content', 'whitepapers');

const PAPERS = [
  {
    slug: 'aicr-aicl-content-licensing',
    file: 'AICR_AICL_v0.1.1_Authority_Reference_Patch.md',
    title: 'AICR / AICL as an AI Content Licensing and Agentic Payment Connection Layer (v0.1.1)',
  },
  {
    slug: 'ai-rights-spectrum',
    file: 'AIRS_AILP_v0.1.1_Scope_Boundary_Patch.md',
    title: 'AI Rights Spectrum: From robots.txt to an AI Learning Permission Protocol (v0.1.1)',
  },
  {
    slug: 'protocolized-openness',
    file: 'Protocolized Openness Why “Not Prohibited” Does Not Mean “Learnable” in the Age of AI.md',
    title: 'Protocolized Openness: Why “Not Prohibited” Does Not Mean “Learnable” in the Age of AI',
  },
  {
    slug: 'aicl-ai-ingestion-capability-layer',
    file: 'AICL-I_AI_Ingestion_Capability_Layer_v0.2.md',
    title: 'AICL-I v0.2: AI Ingestion & Capability Layer',
  },
  {
    slug: 'aicl-ai-ingestion-capability-layer-zh',
    file: 'AICL：AI Ingestion & Capability Layer.md',
    title: 'AICL:AI 攝取與能力層(中文原稿)',
  },
  {
    slug: 'ai-content-payment-democratic-economy',
    file: 'AI_Content_Payment_and_Network_Democratic_Economy_EN.md',
    title: 'AI Content Payment and the Network Democratic Economy',
  },
  {
    slug: 'ai-minimum-ethical-protection',
    file: 'AI_Minimum_Ethical_Protection_v0.1.1_Proportional_Inspection_Patch.md',
    title: 'The Minimum Ethical Protection Proposition for AI (v0.1.1)',
  },
  {
    slug: 'from-crawler-rights-to-agent-authority',
    file: 'AGIRIGHT_From_Crawler_Rights_to_Agent_Authority_v0.1.md',
    title: 'From Crawler Rights to Agent Authority: Extending AGIRIGHT from Content Governance to Protocol-Native AI Agents',
  },
  {
    slug: 'aars-agent-action-rights-spectrum',
    file: 'AARS_Agent_Action_Rights_Spectrum_v0.1.md',
    title: 'AARS v0.1 — Agent Action Rights Spectrum',
  },
  {
    slug: 'aadp-agent-authority-delegation-protocol',
    file: 'AADP_Agent_Authority_Delegation_Protocol_v0.1.md',
    title: 'AADP v0.1 — Agent Authority & Delegation Protocol',
  },
  {
    slug: 'agiright-technical-whitepaper-v0-2',
    file: 'AGIRight.org_技術白皮書_v0.2.md',
    title: 'AGIRight.org Technical White Paper v0.2',
  },
];

mkdirSync(DEST, { recursive: true });

for (const paper of PAPERS) {
  const src = join(SRC, paper.file);
  const body = readFileSync(src, 'utf8');
  const frontmatter = `---\ntitle: ${JSON.stringify(paper.title)}\n---\n\n`;
  writeFileSync(join(DEST, `${paper.slug}.md`), frontmatter + body, 'utf8');
  console.log(`imported: ${paper.slug}.md  <-  ${paper.file}`);
}
console.log(`done (${PAPERS.length} papers)`);
