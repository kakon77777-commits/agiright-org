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
    file: 'AICR-AICL_AI_Content_Licensing_and_Agentic_Payment_Layer_EN.md',
    title: 'AICR / AICL as an AI Content Licensing and Agentic Payment Connection Layer',
  },
  {
    slug: 'ai-rights-spectrum',
    file: 'AI Rights Spectrum From robots.txt to an AI Learning Permission Protocol.md',
    title: 'AI Rights Spectrum: From robots.txt to an AI Learning Permission Protocol',
  },
  {
    slug: 'protocolized-openness',
    file: 'Protocolized Openness Why “Not Prohibited” Does Not Mean “Learnable” in the Age of AI.md',
    title: 'Protocolized Openness: Why “Not Prohibited” Does Not Mean “Learnable” in the Age of AI',
  },
  {
    slug: 'aicl-ai-ingestion-capability-layer',
    file: 'AICL_AI_Ingestion_and_Capability_Layer_EN.md',
    title: 'AICL: AI Ingestion & Capability Layer',
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
    file: 'AI_Minimum_Ethical_Protection_Proposition_EN.md',
    title: 'The Minimum Ethical Protection Proposition for AI',
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
