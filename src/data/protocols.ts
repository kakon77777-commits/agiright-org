import type { Lang } from './site';

export interface Protocol {
  id: string;
  abbr: string;
  expansion: { en: string; zh: string };
  name: { en: string; zh: string };
  tagline: { en: string; zh: string };
  status: string;
  definition: { en: string; zh: string };
  purpose: { en: string[]; zh: string[] };
  scope: { en: string[]; zh: string[] };
  exampleTitle: { en: string; zh: string };
  exampleFile: string;
  jsonExample: string;
  limitations: { en: string[]; zh: string[] };
  namingNote?: { en: string; zh: string };
  schemaUrl: string;
  wellKnownUrl?: string;
  relatedPapers: string[];
}

export const PROTOCOLS: Protocol[] = [
  {
    id: 'aicr',
    abbr: 'AICR',
    expansion: {
      en: 'AI Content Rights / AI Content Rules',
      zh: 'AI 內容權利與使用規則',
    },
    name: {
      en: 'AICR — AI Content Rights',
      zh: 'AICR — AI 內容權利與使用規則',
    },
    tagline: {
      en: 'A machine-readable declaration of what AI systems may do with your content.',
      zh: '以機器可讀方式宣告:AI 系統可以對你的內容做什麼。',
    },
    status: 'Draft v0.1',
    definition: {
      en: 'AICR is a machine-readable rights declaration layer. It lets a publisher state — per site, per path, or per resource — whether AI systems may read, summarize, quote, retrieve (RAG), transform, train on, commercially use, or redistribute content, and under which conditions such as attribution, retention limits, or contact-based licensing. Where robots.txt only says "crawl or don\'t", AICR carries the semantics of rights.',
      zh: 'AICR 是機器可讀的權利宣告層。發布者可以針對整站、路徑或單一資源,宣告 AI 系統是否可以讀取、摘要、引用、檢索(RAG)、轉換、訓練、商業使用或再分發內容,以及附帶條件——例如需標註出處、保存期限、或需聯絡授權。robots.txt 只能說「爬或不爬」,AICR 承載的是權利的語意。',
    },
    purpose: {
      en: [
        'Replace the binary allow/deny of robots.txt with graduated, use-specific permissions.',
        'Give creators and publishers a standard way to reserve training and commercial rights while staying open to reading and citation.',
        'Give AI systems a discoverable, auditable basis for compliant content use.',
        'Serve as the rights foundation that AICL licensing flows execute against.',
      ],
      zh: [
        '以分級、分用途的許可,取代 robots.txt 的二元允許/禁止。',
        '讓創作者與出版者能以標準方式保留訓練與商業權利,同時維持可讀取、可引用的開放。',
        '讓 AI 系統有可發現、可稽核的合規使用依據。',
        '作為 AICL 授權流程執行時的權利基礎層。',
      ],
    },
    scope: {
      en: [
        'read_access — whether AI may fetch and read the content',
        'summarization — summaries, with or without attribution',
        'quotation — excerpt limits and attribution rules',
        'rag_use — retrieval-augmented generation, retention windows',
        'transformation — structured extraction and derivative works',
        'training — model training and fine-tuning permission',
        'commercial_use — commercial exploitation of the content',
        'redistribution — republishing or redistributing content or derivatives',
      ],
      zh: [
        'read_access — AI 是否可抓取與讀取內容',
        'summarization — 摘要,以及是否需標註出處',
        'quotation — 引用字數上限與署名規則',
        'rag_use — 檢索增強生成(RAG)與資料保存期限',
        'transformation — 結構化萃取與衍生著作',
        'training — 模型訓練與微調許可',
        'commercial_use — 內容的商業性利用',
        'redistribution — 內容或衍生物的再發布',
      ],
    },
    exampleTitle: {
      en: 'This site\'s own policy — /.well-known/aicr.json',
      zh: '本站自己的政策 — /.well-known/aicr.json',
    },
    exampleFile: '/.well-known/aicr.json',
    jsonExample: `{
  "version": "0.1",
  "publisher": "AGIRight.org",
  "default_policy": {
    "read_access": { "allowed": true },
    "summarization": {
      "allowed": true,
      "attribution_required": true
    },
    "quotation": {
      "allowed": true,
      "max_excerpt_words": 200,
      "attribution_required": true
    },
    "rag_use": {
      "allowed": true,
      "attribution_required": true,
      "retention_days": 30
    },
    "training": {
      "allowed": false,
      "permission_contact": "contact@agiright.org"
    },
    "commercial_use": {
      "allowed": false,
      "permission_contact": "contact@agiright.org"
    },
    "redistribution": { "allowed": false }
  }
}`,
    limitations: {
      en: [
        'AICR is a declaration, not an enforcement mechanism — compliance depends on AI systems choosing (or being required) to honor it.',
        'It is an open research draft, not an adopted industry or legal standard.',
        'It does not by itself resolve copyright disputes or define the legal weight of a declaration.',
        'Field names and semantics may change between draft versions.',
      ],
      zh: [
        'AICR 是宣告層,不是強制機制——效力取決於 AI 系統選擇(或被要求)遵守。',
        '目前為開放研究草案,尚非業界或法律採納的標準。',
        '它本身不解決著作權爭議,也不定義宣告的法律效力。',
        '欄位名稱與語意可能在草案版本間調整。',
      ],
    },
    schemaUrl: '/schemas/aicr.schema.json',
    wellKnownUrl: '/.well-known/aicr.json',
    relatedPapers: ['aicr-aicl-content-licensing', 'protocolized-openness'],
  },
  {
    id: 'aicl',
    abbr: 'AICL',
    expansion: {
      en: 'AI Content License / AI Content Licensing Layer',
      zh: 'AI 內容授權與授權連接層',
    },
    name: {
      en: 'AICL — AI Content Licensing Layer',
      zh: 'AICL — AI 內容授權連接層',
    },
    tagline: {
      en: 'Turns declared rights into executable licensing: quote, pay, verify, audit, revoke.',
      zh: '把宣告的權利變成可執行的授權流程:報價、支付、驗證、稽核、撤銷。',
    },
    status: 'Draft v0.1',
    definition: {
      en: 'AICL is the licensing and transaction layer built on top of AICR. Where AICR declares what is allowed, AICL defines how permission is actually obtained: license tiers and prices, quote and payment endpoints, signed license tokens, usage and audit logs, and revocation. It is designed to interoperate with emerging machine-payment mechanisms such as HTTP 402 flows and pay-per-crawl schemes, with agentic payment kept inside human-approved budgets and audit trails.',
      zh: 'AICL 是建立在 AICR 之上的授權與交易層。AICR 宣告「什麼被允許」,AICL 則定義「如何實際取得許可」:授權級距與價格、報價與支付端點、簽章授權憑證(license token)、使用與稽核紀錄、以及撤銷機制。設計上可與 HTTP 402、pay-per-crawl 等新興機器支付機制互通,且 Agent 支付必須處於人類核准的預算與稽核軌跡之內。',
    },
    purpose: {
      en: [
        'Convert rights declarations into a workable licensing market instead of a binary open/closed web.',
        'Standardize the machine-to-machine flow: discover policy → request quote → license → use → audit.',
        'Keep agentic payments bounded: budgets, approval thresholds, request-bound tokens, full audit logs.',
        'Give content providers a path to compensation without closing their sites to AI.',
      ],
      zh: [
        '把權利宣告轉換為可運作的授權市場,而不是二元的開放/封鎖網路。',
        '標準化機器對機器流程:發現政策 → 請求報價 → 取得授權 → 使用 → 稽核。',
        '讓 Agent 支付有界:預算、核准門檻、綁定請求的憑證、完整稽核紀錄。',
        '讓內容方在不對 AI 關站的前提下,獲得補償的路徑。',
      ],
    },
    scope: {
      en: [
        'License catalog — tiers of rights bundles with prices and conditions',
        'Quote / pay / verify / revoke endpoints',
        'Signed license tokens bound to requester, scope, and time',
        'Usage logs and audit trails',
        'HTTP 402 "Payment Required" interoperability',
        'Safety rules: no AI handling of raw card data, human approval thresholds',
      ],
      zh: [
        '授權目錄——權利組合的級距、價格與條件',
        '報價 / 支付 / 驗證 / 撤銷端點',
        '綁定請求者、範圍與時效的簽章授權憑證',
        '使用紀錄與稽核軌跡',
        '與 HTTP 402「Payment Required」互通',
        '安全規則:AI 不得接觸明文卡號、設定人類核准門檻',
      ],
    },
    exampleTitle: {
      en: 'This site\'s own licenses — /.well-known/aicl.json',
      zh: '本站自己的授權 — /.well-known/aicl.json',
    },
    exampleFile: '/.well-known/aicl.json',
    jsonExample: `{
  "version": "0.1",
  "publisher": "AGIRight.org",
  "licenses": [
    {
      "id": "public_read_summary",
      "rights": ["read", "summarize", "quote"],
      "price": { "amount": "0", "currency": "USD" },
      "conditions": [
        "attribution_required",
        "no_model_training",
        "no_commercial_redistribution"
      ]
    },
    {
      "id": "research_rag",
      "rights": ["read", "summarize", "rag"],
      "price": { "amount": "0", "currency": "USD" },
      "conditions": [
        "attribution_required",
        "retention_days_30",
        "no_model_training"
      ]
    },
    {
      "id": "commercial_or_training_license",
      "rights": ["training", "commercial_use"],
      "requires_contact": true,
      "contact": "contact@agiright.org"
    }
  ]
}`,
    limitations: {
      en: [
        'This site does not operate a payment gateway; commercial licenses are contact-based in v0.1.',
        'AICL is a protocol proposal — it does not guarantee that AI companies will pay.',
        'Payment compliance, tax, and financial regulation are out of scope for this draft.',
        'Token formats and endpoint semantics are experimental and may change.',
      ],
      zh: [
        '本站不營運支付網關;v0.1 的商業授權採聯絡洽談。',
        'AICL 是協議提案——不保證 AI 公司必然付費。',
        '支付合規、稅務與金融監管不在本草案範圍內。',
        '憑證格式與端點語意屬實驗性質,可能調整。',
      ],
    },
    namingNote: {
      en: 'In earlier EveMissLab research, the acronym AICL also names the “AI Ingestion & Capability Layer” — an architectural layer for how AI systems read and invoke websites (manifest, corpus, capability, governance sublayers). On this site, AICL refers to the AI Content Licensing Layer unless explicitly stated otherwise; the ingestion-layer work is published as a separate whitepaper.',
      zh: '在 EveMissLab 較早的研究中,AICL 縮寫也曾指「AI Ingestion & Capability Layer(AI 攝取與能力層)」——描述 AI 如何讀取與調用網站的架構層(清單、語料、能力、治理四子層)。在本站中,除非另有說明,AICL 一律指 AI 內容授權連接層;攝取層研究以獨立白皮書發布。',
    },
    schemaUrl: '/schemas/aicl.schema.json',
    wellKnownUrl: '/.well-known/aicl.json',
    relatedPapers: ['aicr-aicl-content-licensing', 'ai-content-payment-democratic-economy', 'aicl-ai-ingestion-capability-layer'],
  },
  {
    id: 'airs',
    abbr: 'AIRS',
    expansion: {
      en: 'AI Rights Spectrum',
      zh: 'AI 權利光譜',
    },
    name: {
      en: 'AIRS — AI Rights Spectrum',
      zh: 'AIRS — AI 權利光譜',
    },
    tagline: {
      en: 'AI rights over content are not binary — they form a graduated, licensable spectrum.',
      zh: 'AI 對內容的權利不是二元的——而是一道可分級、可授權的光譜。',
    },
    status: 'Draft v0.1',
    definition: {
      en: 'AIRS is the conceptual model underneath AICR and AILP: it holds that AI use of content cannot be governed by a single allow/deny bit. Reading, summarizing, retrieving, transforming, fine-tuning, training, and redistributing are different acts with different depths, uses, and economic weight. AIRS arranges them as a spectrum of levels, each of which can be separately permitted, priced, conditioned, and audited — making rights proportional, use-specific, and trackable.',
      zh: 'AIRS 是 AICR 與 AILP 底層的概念模型:AI 對內容的使用無法用單一的允許/禁止位元治理。讀取、摘要、檢索、轉換、微調、訓練、再分發是不同深度、不同用途、不同經濟重量的行為。AIRS 將它們排列為分級光譜,每一級都能被獨立許可、定價、附加條件與稽核——讓權利做到比例化、用途化、可追蹤化。',
    },
    purpose: {
      en: [
        'Replace the false binary of "open vs. closed" with graduated levels of AI access.',
        'Let publishers stay maximally open at shallow levels while reserving deep levels (training, redistribution).',
        'Provide the shared vocabulary that AICR declarations and AICL licenses refer to.',
        'Make each level independently auditable and priceable.',
      ],
      zh: [
        '以分級存取取代「開放 vs. 封閉」的假二元。',
        '讓發布者在淺層(讀取、摘要)最大化開放,同時保留深層(訓練、再分發)權利。',
        '提供 AICR 宣告與 AICL 授權共同引用的語彙。',
        '讓每一級都可獨立稽核、獨立定價。',
      ],
    },
    scope: {
      en: [
        'Level 0 — No AI Access',
        'Level 1 — Read Only',
        'Level 2 — Read and Summarize (with attribution)',
        'Level 3 — RAG Use (retention + attribution rules)',
        'Level 4 — Transform (structured extraction under license)',
        'Level 5 — Fine-Tuning Use (explicit license)',
        'Level 6 — Training Use (explicit license)',
        'Level 7 — Commercial Redistribution (explicit license)',
      ],
      zh: [
        'Level 0 — 禁止 AI 存取',
        'Level 1 — 僅可讀取',
        'Level 2 — 可讀取與摘要(需署名)',
        'Level 3 — 可用於 RAG(附保存與署名規則)',
        'Level 4 — 可轉換(授權下的結構化萃取)',
        'Level 5 — 可用於微調(需明確授權)',
        'Level 6 — 可用於訓練(需明確授權)',
        'Level 7 — 可商業再分發(需明確授權)',
      ],
    },
    exampleTitle: {
      en: 'The spectrum, machine-readable — /ai/rights-spectrum.json',
      zh: '機器可讀的光譜 — /ai/rights-spectrum.json',
    },
    exampleFile: '/ai/rights-spectrum.json',
    jsonExample: `{
  "version": "0.1",
  "spectrum": [
    { "level": 0, "name": "No AI Access" },
    { "level": 1, "name": "Read Only" },
    { "level": 2, "name": "Read and Summarize" },
    { "level": 3, "name": "RAG Use" },
    { "level": 4, "name": "Transform" },
    { "level": 5, "name": "Fine-Tuning Use" },
    { "level": 6, "name": "Training Use" },
    { "level": 7, "name": "Commercial Redistribution" }
  ]
}`,
    limitations: {
      en: [
        'The eight levels are a research model — real-world rights may need finer or different partitions.',
        'Level ordering encodes typical depth/economic weight, not a legal hierarchy.',
        'AIRS describes rights semantics; it does not itself enforce or verify compliance.',
      ],
      zh: [
        '八個層級是研究模型——真實世界的權利可能需要更細或不同的切分。',
        '層級順序表達的是典型深度與經濟重量,不是法律位階。',
        'AIRS 描述權利語意,本身不執行也不驗證合規。',
      ],
    },
    schemaUrl: '/schemas/airs.schema.json',
    relatedPapers: ['ai-rights-spectrum', 'protocolized-openness'],
  },
  {
    id: 'ailp',
    abbr: 'AILP',
    expansion: {
      en: 'AI Learning Permission Protocol',
      zh: 'AI 學習許可協議',
    },
    name: {
      en: 'AILP — AI Learning Permission Protocol',
      zh: 'AILP — AI 學習許可協議',
    },
    tagline: {
      en: 'Can AI learn from this? To what depth, for which uses, with what obligations?',
      zh: 'AI 能不能學?學到什麼深度?用於什麼用途?附帶什麼義務?',
    },
    status: 'Draft v0.1',
    definition: {
      en: 'AILP operationalizes the AIRS spectrum for the specific question of learning. It distinguishes acts that binary crawler rules collapse together: being read is not being learned from; being retrieved is not being trained on; fine-tuning is not distillation; verbatim memorization is different from statistical internalization. AILP lets a publisher declare, in a single machine-readable file, per-dimension permissions — access, indexing, inference input, embedding, training, fine-tuning, distillation, memory, output, attribution and compensation — each as allowed, denied, or license-required.',
      zh: 'AILP 把 AIRS 光譜落實到「學習」這個具體問題上。它區分了被二元爬蟲規則混為一談的行為:被讀取不等於被學習;被檢索不等於被訓練;微調不是蒸餾;逐字記憶不同於統計性內化。AILP 讓發布者在單一機器可讀檔案中,逐維度宣告許可——存取、索引、推論輸入、嵌入、訓練、微調、蒸餾、記憶、輸出、署名與補償——每一項皆可為允許、拒絕或需授權。',
    },
    purpose: {
      en: [
        'Answer "may AI learn from this?" with dimension-level precision instead of a crawl bit.',
        'Separate learning permission (internalizing into models) from access permission (fetching pages).',
        'Support compensation models: free, non-commercial, license-required, revenue-share.',
        'Ensure openness is machine-executable — so goodwill is not discarded as legal uncertainty.',
      ],
      zh: [
        '用維度級精度回答「AI 能不能學習這些內容」,而不是一個爬蟲位元。',
        '把學習許可(內化進模型)與存取許可(抓取頁面)分開。',
        '支援補償模式:免費、非商用、需授權、收益分潤。',
        '讓開放成為機器可執行的宣告——善意才不會被當成法律不確定性而被清洗排除。',
      ],
    },
    scope: {
      en: [
        'access / indexing — fetching and semantic indexing',
        'inference_input — use as context at inference time (RAG)',
        'embedding — vectorization and retrieval indexes',
        'training / fine_tuning / distillation — model internalization tiers',
        'verbatim_memory — whether exact reproduction is permitted',
        'attribution / compensation — citation duties and payment terms',
      ],
      zh: [
        'access / indexing — 抓取與語意索引',
        'inference_input — 推論時作為上下文使用(RAG)',
        'embedding — 向量化與檢索索引',
        'training / fine_tuning / distillation — 模型內化的不同層級',
        'verbatim_memory — 是否允許逐字重現',
        'attribution / compensation — 引用義務與補償條款',
      ],
    },
    exampleTitle: {
      en: 'A learning-permission declaration — /ai/rights-spectrum.json (AILP profile)',
      zh: '學習許可宣告範例 — /ai/rights-spectrum.json(AILP profile)',
    },
    exampleFile: '/ai/rights-spectrum.json',
    jsonExample: `{
  "version": "0.1",
  "protocol": "AILP",
  "publisher": "example.org",
  "default": {
    "access": "allowed",
    "indexing": "allowed",
    "inference_input": "allowed",
    "embedding": "allowed",
    "training": "license_required",
    "fine_tuning": "license_required",
    "distillation": "denied",
    "verbatim_memory": "denied",
    "attribution": "required",
    "compensation": "contact"
  },
  "contact": "licensing@example.org"
}`,
    limitations: {
      en: [
        'Learning-permission semantics are the hardest to verify technically — AILP declares intent, it cannot yet prove compliance.',
        'The dimension list is a draft; boundaries between training, fine-tuning, and distillation are still debated.',
        'Legal recognition of learning permissions varies by jurisdiction and is unresolved.',
      ],
      zh: [
        '學習許可的語意在技術上最難驗證——AILP 宣告意圖,尚無法證明合規。',
        '維度清單仍是草案;訓練、微調、蒸餾之間的邊界仍有爭論。',
        '學習許可的法律效力因法域而異,尚無定論。',
      ],
    },
    schemaUrl: '/schemas/ailp.schema.json',
    relatedPapers: ['ai-rights-spectrum', 'protocolized-openness'],
  },
];

export function getProtocol(id: string): Protocol {
  const p = PROTOCOLS.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown protocol: ${id}`);
  return p;
}

export const AGENTIC_PAYMENT_NOTE = {
  en: 'A fifth track — Agentic Payment — is studied as part of AICL: how agents pay for licensed content inside human-approved budgets, with request-bound tokens and audit logs, and never with raw card data.',
  zh: '第五個軌道——Agentic Payment(代理支付)——作為 AICL 的一部分研究:Agent 如何在人類核准的預算內為授權內容付費,使用綁定請求的憑證與稽核紀錄,且永不接觸明文卡號。',
};
