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
    slug: 'agent-action-rights',
    num: '04b',
    title: { en: 'Agent Action Rights', zh: 'Agent 行動權利' },
    summary: {
      en: 'What an Agent may DO once it holds tool or API capability, as distinct from what it may read or learn: action taxonomy, effect vectors, reversibility, blast radius, and multi-action composition risk. AARS gives content permission and action permission separate, independently-evaluable axes.',
      zh: 'Agent 一旦取得工具或 API 能力後「可以做什麼」,有別於它可以讀取或學習什麼:行動分類、效果向量、可逆性、影響範圍與多重行動組合風險。AARS 讓內容權利與行動權利成為獨立、可分開判定的兩軸。',
    },
    topics: {
      en: [
        'Content permission does not imply operational (tool/API) permission',
        'A machine-readable action vector beyond a single risk score',
        'Static tool metadata vs. runtime effect — the same tool, different arguments, different risk',
        'Composition risk: individually-safe actions that combine into an unsafe capability',
      ],
      zh: [
        '內容權利不等於操作(工具/API)權利',
        '超越單一風險分數的機器可讀行動向量',
        '靜態工具中繼資料 vs. 執行期效果——同一工具,不同參數,不同風險',
        '組合風險:個別安全的行動組合後形成不安全的能力',
      ],
    },
    protocols: ['aars'],
  },
  {
    slug: 'agent-authority-delegation',
    num: '04c',
    title: { en: 'Agent Authority & Delegation', zh: 'Agent 權力與委派' },
    summary: {
      en: 'Who an Agent acts for, where its authority came from, whether it can hand that authority to another Agent, and how much of its internal state a verifier may demand. AADP separates principal from actor, bounds delegation to strictly narrow (never silently widen), and treats inspection as a bounded right, not an unlimited one.',
      zh: 'Agent 代表誰行動、它的權力從哪裡來、能否再交給另一個 Agent,以及驗證方最多可以要求它揭露多少內部狀態。AADP 把 principal 跟 actor 分開,限制委派只能收窄(不能無聲擴大),並把檢查權當成有界的權利,而非無限制的權利。',
    },
    topics: {
      en: [
        'Principal ≠ actor: an Agent acting for you is not you',
        'Delegation chains that can only narrow, never silently widen, relative to their parent',
        'Authentication does not imply unlimited inspection of memory, private, or third-party state',
        'Machine-native identity — Agents should not be forced to impersonate human accounts',
      ],
      zh: [
        'Principal ≠ actor:代表你的 Agent 不是你',
        '委派鏈只能比父委派窄,不能無聲擴大',
        '通過身分驗證不代表取得對記憶、私人或第三方狀態的無限檢查權',
        '機器原生身份——Agent 不應被迫假裝成人類帳號',
      ],
    },
    protocols: ['aadp'],
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
    protocols: ['aicr', 'aicl', 'airs', 'ailp', 'aars', 'aadp'],
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
