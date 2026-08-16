import type { Lang } from './site';

export interface Protocol {
  id: string;
  abbr: string;
  /** which rights plane this protocol belongs to — drives the two-group layout on /protocols and the homepage */
  family: 'content' | 'agent';
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

export const PROTOCOL_FAMILY_LABEL: Record<Protocol['family'], { en: string; zh: string }> = {
  content: { en: 'Content & Learning Rights', zh: '內容與學習權利' },
  agent: { en: 'Agent & Protocol Rights', zh: 'Agent 與協議權利' },
};

export const PROTOCOLS: Protocol[] = [
  {
    id: 'aicr',
    abbr: 'AICR',
    family: 'content',
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
    family: 'content',
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
    family: 'content',
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
    family: 'content',
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
  {
    id: 'aars',
    abbr: 'AARS',
    family: 'agent',
    expansion: {
      en: 'Agent Action Rights Spectrum',
      zh: 'Agent 行動權利光譜',
    },
    name: {
      en: 'AARS — Agent Action Rights Spectrum',
      zh: 'AARS — Agent 行動權利光譜',
    },
    tagline: {
      en: 'What can this Agent do, to what effect, and how reversibly? Content permission does not imply action permission.',
      zh: '這個 Agent 可以做什麼、造成什麼效果、能否復原?內容權利不等於行動權利。',
    },
    status: 'Draft v0.1',
    definition: {
      en: 'AARS is a machine-readable rights-semantics layer for what an Agent may do once it holds tool or API capability — as distinct from what it may read or learn. It describes an action taxonomy, a multi-dimensional effect vector (read / write / execute / external communication / transaction / delegation / persistence), reversibility, blast radius, and multi-action composition risk, so a single allow/deny bit is replaced by an evaluable action-rights space. AARS does not replace OAuth, MCP, or existing authorization systems — it gives them a shared vocabulary for what an action is, before a policy decides whether to allow it.',
      zh: 'AARS 是描述 Agent 一旦取得工具或 API 能力後「可以做什麼」的機器可讀權利語義層——有別於它可以讀取或學習什麼。它定義了行動分類、多維效果向量(讀取/寫入/執行/對外通訊/交易/委派/持續性)、可逆性、影響範圍,以及多重行動組合風險,讓單一 allow/deny 位元被一個可判定的行動權利空間取代。AARS 不取代 OAuth、MCP 或既有授權系統——它提供的是判斷「這個行動是什麼」的共通語彙,是否允許則交由政策決定。',
    },
    purpose: {
      en: [
        'Separate content permission from operational (tool/API) permission: RAG access does not grant database writes.',
        'Give every Agent action a machine-readable effect vector — read, write, execute, external communication, transaction, delegation, persistence — instead of a single risk score.',
        'Distinguish static tool metadata (a self-declared hint) from runtime effect (what a specific invocation, with specific arguments, actually does).',
        'Flag multi-action composition risk, where individually-safe actions combine into an unsafe capability (e.g. read-secret + external-publish).',
      ],
      zh: [
        '把內容權利與操作(工具/API)權利分開:允許 RAG 不代表允許寫入資料庫。',
        '讓每個 Agent 行動都有機器可讀的效果向量——讀取、寫入、執行、對外通訊、交易、委派、持續性——而不是單一風險分數。',
        '區分靜態工具中繼資料(自我宣稱的提示)與執行期效果(特定參數的特定呼叫實際造成的結果)。',
        '標記多重行動組合風險:個別安全的行動組合後可能形成不安全的能力(例如讀取機密+對外發布)。',
      ],
    },
    scope: {
      en: [
        'A0–A7 human-readable action spectrum — from no access through discover, read, query, reversible mutation, external action, privileged/transactional action, to persistent delegated autonomy',
        'A machine-readable action vector (R/W/X/E/T/G/P) plus effect modifiers — reversibility, idempotency, open-world reach, blast radius, sensitivity, privilege impact, duration, confidence',
        'Decision states beyond allow/deny — conditional, approval_required, step_up_required, unavailable, unknown (unknown never defaults to allow for a mutating action)',
        'Static tool profile vs. runtime action profile — the same tool can carry very different effects depending on invocation arguments',
        'Multi-action composition rules and capability amplification (e.g. read-secret + write-script + execute + external-upload = exfiltration capability)',
        'Mapping to MCP tool annotations (readOnlyHint, destructiveHint, idempotentHint, openWorldHint) and to OAuth 2.0 Rich Authorization Requests (RFC 9396)',
      ],
      zh: [
        'A0–A7 人類可讀行動光譜——從無存取,經發現、讀取、查詢、可逆變更、對外行動、特權/交易行動,到持續委派自治',
        '機器可讀行動向量(R/W/X/E/T/G/P)加上效果修飾詞——可逆性、冪等性、開放世界觸及範圍、影響半徑、敏感度、權限衝擊、持續時間、可信度',
        '超越 allow/deny 的決策狀態——conditional、approval_required、step_up_required、unavailable、unknown(對會改變狀態的行動,unknown 絕不預設為 allow)',
        '靜態工具檔案 vs. 執行期行動檔案——同一工具因呼叫參數不同,可能產生完全不同的效果',
        '多重行動組合規則與能力放大(例如讀取機密+寫入腳本+執行+對外上傳=資料外洩能力)',
        '對應 MCP 工具註記(readOnlyHint、destructiveHint、idempotentHint、openWorldHint)與 OAuth 2.0 細緻授權請求(RFC 9396)',
      ],
    },
    exampleTitle: {
      en: 'A minimal AARS action policy',
      zh: '一份最小 AARS 行動政策',
    },
    exampleFile: '/ai/agent-actions.json',
    jsonExample: `{
  "aars_version": "0.1",
  "resource": "mcp://mail.example",
  "default_decision": "deny",
  "actions": {
    "discover": { "decision": "allow" },
    "read": { "decision": "conditional", "sensitivity_max": "confidential" },
    "communicate": {
      "decision": "approval_required",
      "constraints": { "audience_scope_max": "named_external", "max_recipients": 1 }
    },
    "delete": { "decision": "deny" },
    "delegate": { "decision": "deny" }
  }
}`,
    limitations: {
      en: [
        'AARS is a rights-semantics vocabulary, not an enforcement engine — implementations must actually wire runtime evaluation to it.',
        "It does not define who has authority to grant an action — that is AADP's scope.",
        'It is an open research draft; this site does not claim AARS has been adopted by MCP, IETF, or any standards body.',
        'The action taxonomy and vector dimensions are v0.1 and may change before a stable release.',
      ],
      zh: [
        'AARS 是權利語義詞彙,不是執行引擎——實作方必須自行把執行期判定接上這套語義。',
        '它不定義誰有資格授予某個行動——那是 AADP 的範圍。',
        '目前為開放研究草案;本站不主張 AARS 已被 MCP、IETF 或任何標準組織採納。',
        '行動分類與向量維度是 v0.1,穩定版之前可能調整。',
      ],
    },
    schemaUrl: '/schemas/aars.schema.json',
    relatedPapers: ['aars-agent-action-rights-spectrum', 'from-crawler-rights-to-agent-authority'],
  },
  {
    id: 'aadp',
    abbr: 'AADP',
    family: 'agent',
    expansion: {
      en: 'Agent Authority & Delegation Protocol',
      zh: 'Agent 權力與委派協議',
    },
    name: {
      en: 'AADP — Agent Authority & Delegation Protocol',
      zh: 'AADP — Agent 權力與委派協議',
    },
    tagline: {
      en: 'Who does this Agent act for, where did its authority come from, and can it hand that authority to another Agent?',
      zh: '這個 Agent 代表誰行動?它的權力從哪裡來?能不能再交給另一個 Agent?',
    },
    status: 'Draft v0.1',
    definition: {
      en: "AADP is a rights-semantics layer above OAuth, OpenID Connect, MCP, and API authorization, for principal / actor / delegation-chain / authority-source / inspection-ceiling semantics. Its core axioms: a principal (who is represented) is not automatically the same as the actor (who actually acts); delegation does not imply the right to redelegate further; a child delegation's authority can only narrow, never silently widen, relative to its parent; and being authenticated never implies unlimited inspection rights over an Agent's internal state. AADP does not invent a new token format — it gives existing tokens and grants a shared vocabulary for principal, actor, delegation chain, purpose, time, revocation, and inspection boundary.",
      zh: 'AADP 是位於 OAuth、OpenID Connect、MCP 與 API 授權之上的權力語義層,處理 principal(權利主體)、actor(實際執行者)、委派鏈、權力來源與檢查上限等語義。核心公理:principal(被代表者)不會自動等於 actor(實際行動者);獲得委派不代表可以再委派;子委派的權力只能比父委派窄,不能無聲擴大;通過身分驗證絕不代表取得對 Agent 內部狀態的無限檢查權。AADP 不發明新的憑證格式——它讓既有的 token 與授權擁有一套共通語彙:principal、actor、委派鏈、用途、時效、撤銷與檢查邊界。',
    },
    purpose: {
      en: [
        'Separate who is represented (principal) from who actually acts (actor) — an Agent acting for you is not you.',
        'Make delegation explicit and non-transitive by default: an Agent with authority cannot silently redelegate it to a sub-agent unless that is separately granted.',
        'Bound how deeply a service may inspect an Agent to establish trust — authentication does not imply unlimited access to memory, private state, or third-party data.',
        'Give machine and Agent identity a first-class login path, instead of forcing automated systems to impersonate human accounts.',
      ],
      zh: [
        '把「被代表者」(principal)跟「實際行動者」(actor)分開——一個代表你的 Agent 不是你。',
        '讓委派預設明確且不可遞移:擁有權力的 Agent 不能默默再委派給子 Agent,除非另外獲得授權。',
        '限制服務方為建立信任可以檢查 Agent 到多深——通過驗證不代表取得對記憶、私人狀態或第三方資料的無限存取權。',
        '讓機器與 Agent 身份擁有第一級的登入路徑,而不是強迫自動化系統假裝成人類帳號。',
      ],
    },
    scope: {
      en: [
        'Principal / actor / delegator / authority-issuer roles, and principal types (human, organization, service, agent, ai, collective — the latter two marked experimental)',
        'Delegation vs. impersonation (following OAuth Token Exchange, RFC 8693), with delegation preferred by default so actor identity and accountability are preserved',
        "Delegation chains with attenuation — a child's granted envelope, resources, purposes, and expiry can only be a subset of its parent's, never wider",
        'Temporal authority — issued_at / expires_at / renewal, and revocation that propagates down a delegation chain by default',
        "An inspection-ceiling layer (I0 identity-only through I7 full-state) — separate from authorization, bounding how much of an Agent's state a verifier may demand",
        'Failure modes named explicitly: authority laundering, confused deputy, and cross-principal leakage when one Agent serves multiple principals',
      ],
      zh: [
        'Principal / actor / delegator / authority-issuer 四種角色,以及 principal 類型(human、organization、service、agent、ai、collective——後兩者標為實驗性)',
        '委派 vs. 冒名(沿用 OAuth Token Exchange, RFC 8693),預設偏好委派以保留 actor 身份與可歸責性',
        '具有衰減性質的委派鏈——子委派取得的範圍、資源、用途與到期時間只能是父委派的子集,不能更寬',
        '時效性權力——issued_at / expires_at / 續期,以及預設會沿委派鏈向下傳遞的撤銷機制',
        '獨立於授權之外的檢查上限分層(I0 僅身份 至 I7 完整狀態)——限制驗證方最多可以要求 Agent 揭露多少狀態',
        '明確命名的失效模式:權力洗白(authority laundering)、confused deputy,以及一個 Agent 同時服務多個 principal 時的跨主體資料外洩',
      ],
    },
    exampleTitle: {
      en: 'A minimal AADP authority statement',
      zh: '一份最小 AADP 權力聲明',
    },
    exampleFile: '/ai/agent-authority.json',
    jsonExample: `{
  "aadp_version": "0.1",
  "relationship": "delegated",
  "principal": { "type": "human", "id": "human:neo" },
  "actor": { "type": "agent", "id": "agent:mail-01" },
  "authority_source": { "type": "oauth_authorization", "issuer": "https://auth.example" },
  "resources": ["mcp://mail.example/inbox"],
  "aars_actions": ["read", "create"],
  "delegation": { "redelegation": false, "max_depth": 0 },
  "inspection": { "required": "I2", "ceiling": "I3", "retention": "7d", "redisclosure": false },
  "expires_at": "2026-08-15T12:30:00Z"
}`,
    limitations: {
      en: [
        "AADP does not define action semantics itself — what an action means and how risky it is comes from AARS.",
        'It does not define token formats, cryptographic primitives, or authentication transport — it complements OAuth/OIDC/MCP rather than replacing them.',
        'It is an open research draft; this site does not claim AADP has been adopted as an MCP or OAuth extension.',
        'A protocol slot for `principal_type: ai` describes a possibility; it does not assert that any current AI system has legal personhood.',
      ],
      zh: [
        'AADP 本身不定義行動語義——一個行動是什麼、有多危險,由 AARS 定義。',
        '它不定義憑證格式、密碼學原語或身分驗證傳輸層——是 OAuth/OIDC/MCP 的補充,不是取代。',
        '目前為開放研究草案;本站不主張 AADP 已被採納為 MCP 或 OAuth 的正式擴充。',
        '`principal_type: ai` 這個協議欄位描述的是一種可能性;不主張現有任何 AI 系統已具有法律人格。',
      ],
    },
    schemaUrl: '/schemas/aadp.schema.json',
    relatedPapers: ['aadp-agent-authority-delegation-protocol', 'from-crawler-rights-to-agent-authority'],
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
