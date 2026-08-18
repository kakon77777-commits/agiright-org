/**
 * DWRG (Dual-Surface Web Resource Graph) canonical registry.
 *
 * Neo brought DWRG_Dual_Surface_Web_Resource_Graph_v0.1_2026-08-17.zip
 * (whitepaper + schema + generation contract, checksummed and independently
 * verified against RFC 8288/RFC 9264 before use) and asked to prototype its
 * architecture on AGIRight.org itself, framed as a side-experiment ("番外篇"),
 * not a rewrite of the six rights protocols.
 *
 * This is the ONE canonical registry. /resources/ (HTML), /resources.json
 * (DWRG JSON), and /resources.linkset.json (RFC 9264 Linkset) are all
 * generated from this single array -- never hand-edited separately. That is
 * the whitepaper's central invariant (§14 "One Write -> Many Projections",
 * §27 "共用資料源") and the exact discipline this site's OWN existing
 * machine-readable layer (llms.txt/manifest.json/registry.json/
 * protocol-index.json) has repeatedly drifted on -- three separate
 * cross-file version-drift bugs were caught manually during the 2026-08-16/17
 * Agent & Protocol Rights integration before this registry existed.
 *
 * v0.1 scope, deliberately narrow (whitepaper's own Phase 0 -- "Static Public
 * Registry", not the later access-control/agent-metadata/cross-site phases):
 * this site's own major public resources -- six protocols, the /topics
 * dataset, and the GitHub repository. It does NOT enumerate every one of the
 * ~20 /ai/*.json and /.well-known/*.json files as separate top-level nodes;
 * those are attached as typed `links` on the resource they document, per the
 * whitepaper's own Resource Graph philosophy (§6): a graph attaches typed
 * relations to a resource, it doesn't need to flatten everything into peers.
 *
 * `type: 'protocol'` is a deliberate AGIRight-specific extension beyond the
 * whitepaper's suggested vocabulary (§22 lists website/product/paper/
 * documentation/repository/api/... but not "protocol") -- allowed under its
 * own principle that `type` is a discovery hint, not a standards claim (§12's
 * "DomainRelation != StandardRelation" applies the same way to types).
 */

export type DwrgResourceType = 'website' | 'protocol' | 'dataset' | 'repository';

export interface DwrgLink {
  /** DWRG/domain rel name, used as-is in /resources.json. */
  rel: string;
  href: string;
  /**
   * IANA-registered link relation to use for this link in the RFC 9264
   * Linkset projection instead of `rel`, when `rel` itself isn't a
   * registered type. Per whitepaper §12: a custom relation must not be
   * presented as if it were already standard. Omit when `rel` is already
   * a registered type (e.g. "describedby", "related", "alternate").
   */
  linksetRel?: string;
}

export interface DwrgResource {
  id: string;
  name: string;
  type: DwrgResourceType;
  canonical_url: string;
  visibility: 'public';
  indexable: boolean;
  status: 'active';
  description: { en: string; zh: string };
  links: DwrgLink[];
}

const PROTOCOL_LINKS: Record<string, DwrgLink[]> = {
  aicr: [
    { rel: 'describedby', href: 'https://agiright.org/schemas/aicr.schema.json' },
    { rel: 'documentation', href: 'https://agiright.org/docs/whitepapers/aicr-aicl-content-licensing', linksetRel: 'related' },
    { rel: 'declaration', href: 'https://agiright.org/.well-known/aicr.json', linksetRel: 'related' },
  ],
  aicl: [
    { rel: 'describedby', href: 'https://agiright.org/schemas/aicl.schema.json' },
    { rel: 'documentation', href: 'https://agiright.org/docs/whitepapers/aicr-aicl-content-licensing', linksetRel: 'related' },
    { rel: 'declaration', href: 'https://agiright.org/.well-known/aicl.json', linksetRel: 'related' },
  ],
  airs: [
    { rel: 'describedby', href: 'https://agiright.org/schemas/airs.schema.json' },
    { rel: 'documentation', href: 'https://agiright.org/docs/whitepapers/ai-rights-spectrum', linksetRel: 'related' },
    { rel: 'declaration', href: 'https://agiright.org/ai/rights-spectrum.json', linksetRel: 'related' },
  ],
  ailp: [
    { rel: 'describedby', href: 'https://agiright.org/schemas/ailp.schema.json' },
    { rel: 'documentation', href: 'https://agiright.org/docs/whitepapers/ai-rights-spectrum', linksetRel: 'related' },
  ],
  aars: [
    { rel: 'describedby', href: 'https://agiright.org/schemas/aars.schema.json' },
    { rel: 'documentation', href: 'https://agiright.org/docs/whitepapers/aars-agent-action-rights-spectrum', linksetRel: 'related' },
    { rel: 'declaration', href: 'https://agiright.org/ai/agent-actions.json', linksetRel: 'related' },
  ],
  aadp: [
    { rel: 'describedby', href: 'https://agiright.org/schemas/aadp.schema.json' },
    { rel: 'documentation', href: 'https://agiright.org/docs/whitepapers/aadp-agent-authority-delegation-protocol', linksetRel: 'related' },
    { rel: 'declaration', href: 'https://agiright.org/ai/agent-authority.json', linksetRel: 'related' },
  ],
};

export const DWRG_RESOURCES: DwrgResource[] = [
  {
    id: 'agiright-org',
    name: 'AGIRight.org',
    type: 'website',
    canonical_url: 'https://agiright.org/',
    visibility: 'public',
    indexable: true,
    status: 'active',
    description: {
      en: 'Independent research and protocol hub for AI rights, AI content licensing, agentic access, and machine-readable governance.',
      zh: '研究 AI 權利、AI 內容授權、Agent 存取與機器可讀治理的獨立研究站。',
    },
    links: [
      { rel: 'documentation', href: 'https://agiright.org/docs', linksetRel: 'related' },
      { rel: 'related', href: 'https://agiright.org/specs' },
      { rel: 'service-desc', href: 'https://agiright.org/ai/manifest.json' },
      { rel: 'repository', href: 'https://github.com/kakon77777-commits/agiright-org', linksetRel: 'related' },
    ],
  },
  {
    id: 'aicr',
    name: 'AICR — AI Content Rights',
    type: 'protocol',
    canonical_url: 'https://agiright.org/protocols/aicr',
    visibility: 'public',
    indexable: true,
    status: 'active',
    description: {
      en: 'Declares how AI systems may read, index, and use a site’s content.',
      zh: '宣告 AI 系統可以如何讀取、索引與使用網站內容。',
    },
    links: PROTOCOL_LINKS.aicr,
  },
  {
    id: 'aicl',
    name: 'AICL — AI Content Licensing Layer',
    type: 'protocol',
    canonical_url: 'https://agiright.org/protocols/aicl',
    visibility: 'public',
    indexable: true,
    status: 'active',
    description: {
      en: 'Machine-readable licensing and payment-connection layer for AI use of content.',
      zh: 'AI 使用內容的機器可讀授權與付款連接層。',
    },
    links: PROTOCOL_LINKS.aicl,
  },
  {
    id: 'airs',
    name: 'AIRS — AI Rights Spectrum',
    type: 'protocol',
    canonical_url: 'https://agiright.org/protocols/airs',
    visibility: 'public',
    indexable: true,
    status: 'active',
    description: {
      en: 'A graduated spectrum of AI content-access permissions beyond binary robots.txt allow/deny.',
      zh: '超越 robots.txt 二元允許/拒絕的漸進式 AI 內容存取權限光譜。',
    },
    links: PROTOCOL_LINKS.airs,
  },
  {
    id: 'ailp',
    name: 'AILP — AI Learning Permission Protocol',
    type: 'protocol',
    canonical_url: 'https://agiright.org/protocols/ailp',
    visibility: 'public',
    indexable: true,
    status: 'active',
    description: {
      en: 'Explicit permission protocol for whether content may be used in AI model training.',
      zh: '明確宣告內容是否可用於 AI 模型訓練的許可協議。',
    },
    links: PROTOCOL_LINKS.ailp,
  },
  {
    id: 'aars',
    name: 'AARS — Agent Action Rights Spectrum',
    type: 'protocol',
    canonical_url: 'https://agiright.org/protocols/aars',
    visibility: 'public',
    indexable: true,
    status: 'active',
    description: {
      en: 'A spectrum of permissions for what actions an AI agent may take on a site, not just what it may read.',
      zh: '規範 AI agent 在網站上可執行哪些行動的權限光譜,而不只是可讀取什麼。',
    },
    links: PROTOCOL_LINKS.aars,
  },
  {
    id: 'aadp',
    name: 'AADP — Agent Authority & Delegation Protocol',
    type: 'protocol',
    canonical_url: 'https://agiright.org/protocols/aadp',
    visibility: 'public',
    indexable: true,
    status: 'active',
    description: {
      en: 'Declares who an AI agent is acting for and whether it may re-delegate that authority.',
      zh: '宣告 AI agent 是代表誰行動,以及是否可以再委派這個權力。',
    },
    links: PROTOCOL_LINKS.aadp,
  },
  {
    id: 'topics',
    name: 'AGIRight /topics',
    type: 'dataset',
    canonical_url: 'https://agiright.org/topics',
    visibility: 'public',
    indexable: true,
    status: 'active',
    description: {
      en: 'Daily-curated, independently verified index of AI ethics/governance/ontology news and research.',
      zh: '每日整理、獨立查證的 AI 倫理/治理/本體論新聞與研究索引。',
    },
    links: [
      { rel: 'api', href: 'https://agiright.org/topics/index.json', linksetRel: 'related' },
    ],
  },
  {
    id: 'agiright-org-repo',
    name: 'agiright-org (GitHub)',
    type: 'repository',
    canonical_url: 'https://github.com/kakon77777-commits/agiright-org',
    visibility: 'public',
    indexable: false,
    status: 'active',
    description: {
      en: 'Public source repository for this site — Astro source, protocol data, and generation scripts.',
      zh: '本站的公開原始碼庫——Astro 原始碼、協議資料與產生腳本。',
    },
    links: [
      { rel: 'related', href: 'https://agiright.org/' },
    ],
  },
];
