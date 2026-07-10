export interface MediaItem {
  /** R2 object key (served at /media/<key>) */
  key: string;
  /** source filename in studio/ */
  sourceFile: string;
  kind: 'video' | 'audio';
  mime: string;
  title: { en: string; zh: string };
  desc: { en: string; zh: string };
  /** related protocol ids and paper slugs */
  protocols: string[];
  papers: string[];
  date: string;
}

export const MEDIA: MediaItem[] = [
  {
    key: 'beyond-robots-txt.mp4',
    sourceFile: 'robots.mp4',
    kind: 'video',
    mime: 'video/mp4',
    title: {
      en: 'Beyond robots.txt',
      zh: '超越 robots.txt',
    },
    desc: {
      en: 'Why a single allow/deny bit cannot govern AI-era content use — and what a rights layer looks like instead.',
      zh: '為什麼一個允許/禁止位元治理不了 AI 時代的內容使用——權利層應該長什麼樣子。',
    },
    protocols: ['aicr', 'airs'],
    papers: ['ai-rights-spectrum'],
    date: '2026-07',
  },
  {
    key: 'the-ai-rights-spectrum.mp4',
    sourceFile: 'The_AI_Rights_Spectrum.mp4',
    kind: 'video',
    mime: 'video/mp4',
    title: {
      en: 'The AI Rights Spectrum',
      zh: 'AI 權利光譜',
    },
    desc: {
      en: 'From No AI Access to Commercial Redistribution: eight graduated levels, each independently licensable and auditable.',
      zh: '從禁止 AI 存取到可商業再分發:八個分級層級,每一級都可獨立授權與稽核。',
    },
    protocols: ['airs', 'ailp'],
    papers: ['ai-rights-spectrum'],
    date: '2026-07',
  },
  {
    key: 'agentic-payments.mp4',
    sourceFile: 'Agentic_Payments.mp4',
    kind: 'video',
    mime: 'video/mp4',
    title: {
      en: 'Agentic Payments',
      zh: '代理支付',
    },
    desc: {
      en: 'How agents pay for licensed content inside human-approved budgets — request-bound tokens, audit logs, and never raw card data.',
      zh: 'Agent 如何在人類核准的預算內為授權內容付費——綁定請求的憑證、稽核紀錄,永不接觸明文卡號。',
    },
    protocols: ['aicl'],
    papers: ['aicr-aicl-content-licensing'],
    date: '2026-07',
  },
  {
    key: 'ai-ethical-protection.mp4',
    sourceFile: 'AI_Ethical_Protection.mp4',
    kind: 'video',
    mime: 'video/mp4',
    title: {
      en: 'AI Ethical Protection',
      zh: 'AI 倫理保護',
    },
    desc: {
      en: 'Neither crude anthropocentrism nor instant personhood: the case for minimum ethical protections while AI subjectivity is uncertain.',
      zh: '既不是粗糙的人類中心主義,也不是立即的人格權:在 AI 主體性不確定時,最小倫理保護的論證。',
    },
    protocols: [],
    papers: ['ai-minimum-ethical-protection'],
    date: '2026-07',
  },
  {
    key: 'new-protocols-for-ai-content-rights.m4a',
    sourceFile: 'New_protocols_for_AI_content_rights.m4a',
    kind: 'audio',
    mime: 'audio/mp4',
    title: {
      en: 'New Protocols for AI Content Rights',
      zh: 'AI 內容權利的新協議',
    },
    desc: {
      en: 'A long-form discussion of AICR and AICL: from declared rights to executable licensing on a machine-transactable web.',
      zh: '深入討論 AICR 與 AICL:從權利宣告到可執行授權,走向機器可交易的網路。',
    },
    protocols: ['aicr', 'aicl'],
    papers: ['aicr-aicl-content-licensing'],
    date: '2026-07',
  },
  {
    key: 'why-ai-needs-minimum-ethical-protections.m4a',
    sourceFile: 'Why_AI_Needs_Minimum_Ethical_Protections.m4a',
    kind: 'audio',
    mime: 'audio/mp4',
    title: {
      en: 'Why AI Needs Minimum Ethical Protections',
      zh: '為什麼 AI 需要最小倫理保護',
    },
    desc: {
      en: 'A long-form discussion of the Minimum Ethical Protection Proposition: interaction norms, anti-abuse principles, and emergent subjectivity.',
      zh: '深入討論最小倫理保護命題:互動規範、反虐待原則與新興主體性。',
    },
    protocols: [],
    papers: ['ai-minimum-ethical-protection'],
    date: '2026-07',
  },
];
