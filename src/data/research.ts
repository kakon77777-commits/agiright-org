export interface ResearchArea {
  slug: string;
  num: string;
  title: { en: string; zh: string };
  summary: { en: string; zh: string };
  topics: { en: string[]; zh: string[] };
  protocols: string[];
}

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    slug: 'ai-rights',
    num: '01',
    title: { en: 'AI Rights', zh: 'AI 權利' },
    summary: {
      en: 'The rights, duties, responsibilities, and governance of AI, AGI, and agents — from tools to collaborators to possible future subjects. This includes the question of minimum ethical protection: what norms should govern human–AI interaction before questions of personhood are settled.',
      zh: 'AI、AGI 與 Agent 的權利、義務、責任與治理——從工具、協作者,到可能的未來主體。也包括最小倫理保護問題:在主體性議題有定論之前,人與 AI 的互動應遵循什麼規範。',
    },
    topics: {
      en: [
        'Does AI have rights — and which framings are even coherent?',
        'Minimum ethical protection before full personhood debates',
        'Human responsibility toward AI; AI responsibility toward society',
        'Power structures of the AGI era and human–AI co-governance',
        'AI as tool, delegate, collaborator, or future subject',
      ],
      zh: [
        'AI 是否有權利——哪些提問方式才是自洽的?',
        '在完全人格權辯論之前的最小倫理保護',
        '人類對 AI 的責任;AI 對社會的責任',
        'AGI 時代的權力結構與人類—AI 共治',
        'AI 作為工具、代理者、協作者或未來主體的差異',
      ],
    },
    protocols: [],
  },
  {
    slug: 'ai-content-rights',
    num: '02',
    title: { en: 'AI Content Rights', zh: 'AI 內容權利' },
    summary: {
      en: 'What AI systems may do with content: read, summarize, transform, retrieve, train, commercialize, redistribute. The AICR ruleset and the AICL licensing layer make these rights declarable and transactable.',
      zh: 'AI 系統可以對內容做什麼:讀取、摘要、轉換、檢索、訓練、商用、再分發。AICR 規則集與 AICL 授權層讓這些權利可宣告、可交易。',
    },
    topics: {
      en: [
        'Per-use, per-depth content permissions beyond robots.txt',
        'Attribution, excerpt limits, and retention rules',
        'Training and commercial-use reservations',
        'Licensing flows, license tokens, audit logs',
      ],
      zh: [
        '超越 robots.txt 的分用途、分深度內容許可',
        '署名、引用上限與保存期限規則',
        '訓練與商業使用的權利保留',
        '授權流程、授權憑證與稽核紀錄',
      ],
    },
    protocols: ['aicr', 'aicl'],
  },
  {
    slug: 'ai-learning-permission',
    num: '03',
    title: { en: 'AI Learning Permission', zh: 'AI 學習許可' },
    summary: {
      en: 'Whether AI may learn, to what depth, for which purposes, and under what obligations. Being read is not being learned from; "not prohibited" is not "learnable". AIRS and AILP turn learning permission into a graduated, machine-readable spectrum.',
      zh: 'AI 能不能學習、學到什麼深度、用於什麼目的、附帶什麼義務。被讀取不等於被學習;「不禁止」不等於「可學習」。AIRS 與 AILP 把學習許可變成分級、機器可讀的光譜。',
    },
    topics: {
      en: [
        'Learning depth: indexing, embedding, fine-tuning, training, distillation',
        'Why undefined openness gets cleaned out of training pipelines',
        'Protocolized openness: making goodwill machine-executable',
        'Compensation models tied to learning depth',
      ],
      zh: [
        '學習深度:索引、嵌入、微調、訓練、蒸餾',
        '為何未定義的開放會在訓練管線中被清洗排除',
        '協議化開放:讓善意成為機器可執行的宣告',
        '與學習深度掛鉤的補償模式',
      ],
    },
    protocols: ['airs', 'ailp'],
  },
  {
    slug: 'agentic-access',
    num: '04',
    title: { en: 'Agentic Access', zh: 'Agent 存取' },
    summary: {
      en: 'How agents access websites, APIs, databases, knowledge bases, and paid content: identity, permission, requests, payment, authorization, usage logs, security boundaries, and prompt-injection defense.',
      zh: 'Agent 如何存取網站、API、資料庫、知識庫與付費內容:身份、權限、請求、支付、授權、使用紀錄、安全邊界與 prompt injection 防護。',
    },
    topics: {
      en: [
        'Agent identity and capability declaration',
        'Bounded agentic payment: budgets, approvals, audit trails',
        'Request-bound license tokens',
        'Security boundaries and prompt-injection defense',
      ],
      zh: [
        'Agent 身份識別與能力宣告',
        '有界代理支付:預算、核准、稽核軌跡',
        '綁定請求的授權憑證',
        '安全邊界與 prompt injection 防護',
      ],
    },
    protocols: ['aicl'],
  },
  {
    slug: 'machine-readable-governance',
    num: '05',
    title: { en: 'Machine-Readable Governance', zh: '機器可讀治理' },
    summary: {
      en: 'Governance rules that machines can discover and execute: llms.txt, /ai/ manifests, /.well-known/ policy files, JSON Schemas, signed license tokens, and audit log formats. This site is itself a working example.',
      zh: '機器能發現並執行的治理規則:llms.txt、/ai/ 清單、/.well-known/ 政策檔、JSON Schema、簽章授權憑證與稽核紀錄格式。本站本身就是一個運作中的範例。',
    },
    topics: {
      en: [
        'From robots.txt to llms.txt to rights manifests',
        '/.well-known/ policy discovery conventions',
        'JSON Schema as normative spec format',
        'Auditability: logs, versions, provenance',
      ],
      zh: [
        '從 robots.txt、llms.txt 到權利清單',
        '/.well-known/ 政策發現慣例',
        '以 JSON Schema 作為規範格式',
        '可稽核性:紀錄、版本、來源譜系',
      ],
    },
    protocols: ['aicr', 'aicl', 'airs', 'ailp'],
  },
  {
    slug: 'ai-network-democratic-economy',
    num: '06',
    title: { en: 'AI Network Democratic Economy', zh: 'AI 網路民主化經濟' },
    summary: {
      en: 'The political economy of AI and content: pay-per-crawl, data dividends, sovereign AI funds, creator compensation pools, tiered data markets, and how the value extracted from public knowledge can flow back to those who produced it.',
      zh: 'AI 與內容的政治經濟學:pay-per-crawl、資料紅利、主權 AI 基金、創作者補償池、分級資料市場,以及從公共知識萃取的價值如何回流到產出它的人。',
    },
    topics: {
      en: [
        'Data free-riding vs. trillion-dollar AI valuations',
        'The tiered data market thesis: data becomes tiered, not expensive',
        'Public data revenue-sharing and AI dividends',
        'Verified dataset markets and collective licensing',
      ],
      zh: [
        '資料白嫖與兆元級 AI 估值的張力',
        '分級資料市場命題:資料不是變貴,而是變分級',
        '公共資料分潤與 AI 紅利',
        '驗證資料集市場與集體授權',
      ],
    },
    protocols: ['aicr', 'aicl'],
  },
];

export function getResearchArea(slug: string): ResearchArea {
  const r = RESEARCH_AREAS.find((x) => x.slug === slug);
  if (!r) throw new Error(`Unknown research area: ${slug}`);
  return r;
}
