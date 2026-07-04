export interface Paper {
  slug: string;
  /** source filename in the docx/ folder */
  sourceFile: string;
  lang: 'en' | 'zh-Hant' | 'mixed';
  title: { en: string; zh: string };
  oneLiner: { en: string; zh: string };
  abstract: { en: string; zh: string };
  keyConcepts: string[];
  protocols: string[];
  version: string;
  date: string;
  /** set on language variants: slug of the primary entry; variants are hidden from lists */
  variantOf?: string;
}

/** papers shown in lists (language variants excluded) */
export function listedPapers(): Paper[] {
  return PAPERS.filter((p) => !p.variantOf);
}

export const PAPERS: Paper[] = [
  {
    slug: 'aicr-aicl-content-licensing',
    sourceFile: 'AICR-AICL_AI_Content_Licensing_and_Agentic_Payment_Layer_EN.md',
    lang: 'en',
    title: {
      en: 'AICR / AICL as an AI Content Licensing and Agentic Payment Connection Layer',
      zh: 'AICR / AICL 作為 AI 內容授權與代理支付連接層',
    },
    oneLiner: {
      en: 'A machine-readable specification layer for declaring AI content rights and licensing workflows — from AI crawling and content rights to a machine-transactable knowledge web.',
      zh: '一個宣告 AI 內容權利與授權工作流的機器可讀規範層——從 AI 爬取與內容權利,走向機器可交易的知識網路。',
    },
    abstract: {
      en: 'AICR declares what AI systems may do with content — reading, summarization, transformation, RAG, training, commercial use, redistribution, attribution. AICL converts those rights into executable flows: authorization, payment, credentials, usage logs, and revocation. Rather than forcing a binary between total prohibition and free extraction, AICR/AICL enables tiered licensing markets, interoperating with emerging machine-payment mechanisms (HTTP 402, pay-per-crawl) while keeping agentic payment inside human-approved budgets and audit trails.',
      zh: 'AICR 宣告 AI 系統可以對內容做什麼——讀取、摘要、轉換、RAG、訓練、商用、再分發與署名。AICL 將這些權利轉換為可執行流程:授權、支付、憑證、使用紀錄與撤銷。AICR/AICL 不強迫「全面禁止或免費萃取」的二元選擇,而是開啟分級授權市場,並與 HTTP 402、pay-per-crawl 等機器支付機制互通,同時讓代理支付處於人類核准的預算與稽核軌跡之內。',
    },
    keyConcepts: ['AICR', 'AICL', 'HTTP 402', 'pay-per-crawl', 'license token', 'audit log', 'agentic payment'],
    protocols: ['aicr', 'aicl'],
    version: 'v0.1 Public Draft',
    date: '2026-07',
  },
  {
    slug: 'ai-rights-spectrum',
    sourceFile: 'AI Rights Spectrum From robots.txt to an AI Learning Permission Protocol.md',
    lang: 'en',
    title: {
      en: 'AI Rights Spectrum: From robots.txt to an AI Learning Permission Protocol',
      zh: 'AI 權利光譜:從 robots.txt 到 AI 學習許可協議',
    },
    oneLiner: {
      en: 'AIRS and AILP express nuanced AI learning permissions beyond binary allow/disallow — what AI may learn, at what depth, for which uses, under what compensation.',
      zh: 'AIRS 與 AILP 讓 AI 學習許可超越二元的允許/禁止——AI 能學什麼、學到什麼深度、用於什麼用途、以什麼補償條件。',
    },
    abstract: {
      en: 'robots.txt and llms.txt govern access and visibility, not learning depth or use permissions. AIRS proposes expressing AI rights as a proportional, use-specific spectrum across ten dimensions — access, indexing, inference input, embedding, training, fine-tuning, distillation, memory, output, attribution/compensation. AILP translates this into /ai/rights-spectrum.json, letting creators declare granular permissions with compensation models ranging from free through license-required to revenue share.',
      zh: 'robots.txt 與 llms.txt 治理的是存取與可見性,不是學習深度與用途許可。AIRS 提出以比例化、分用途的光譜表達 AI 權利,涵蓋十個維度——存取、索引、推論輸入、嵌入、訓練、微調、蒸餾、記憶、輸出、署名/補償。AILP 將其落實為 /ai/rights-spectrum.json,讓創作者宣告細粒度許可,補償模式從免費、需授權到收益分潤。',
    },
    keyConcepts: ['AIRS', 'AILP', 'learning depth', 'TDM reservation', 'license_required', 'verbatim memory'],
    protocols: ['airs', 'ailp'],
    version: 'v0.1 Draft',
    date: '2026-06-30',
  },
  {
    slug: 'protocolized-openness',
    sourceFile: 'Protocolized Openness Why “Not Prohibited” Does Not Mean “Learnable” in the Age of AI.md',
    lang: 'mixed',
    title: {
      en: 'Protocolized Openness: Why “Not Prohibited” Does Not Mean “Learnable” in the Age of AI',
      zh: '協議化開放:AI 時代中「不禁止」為何不等於「可學習」',
    },
    oneLiner: {
      en: 'Undefined openness reads as legal uncertainty to AI pipelines and gets cleaned out; only protocolized, machine-readable permission makes content genuinely learnable.',
      zh: '未定義的開放在 AI 管線眼中是法律不確定性,會被清洗排除;唯有協議化、機器可讀的許可,才讓內容真正可學。',
    },
    abstract: {
      en: 'Publishing content without blocking crawlers does not mean AI systems will deeply learn from it. In high-risk pipelines — commercial training, legal review, data cleaning — undefined freedom is interpreted as uncertainty, and content is excluded, fragmented, or only indirectly reconstructed. Protocolized openness converts creator goodwill into machine-readable, use-specific, depth-aware declarations across five maturity levels, from silent publication to licensing interfaces. This is not anti-open; it is what makes openness executable.',
      zh: '公開發表且不擋爬蟲,不代表 AI 會深度學習你的內容。在商業訓練、法律審查、資料清洗等高風險管線中,未定義的自由會被解讀為不確定性,內容因而被排除、碎片化,或只能被間接重構。協議化開放把創作者的善意轉換為機器可讀、分用途、感知深度的宣告,從無聲發表到授權介面共五個成熟層級。這不是反開放——這是讓開放可被執行。',
    },
    keyConcepts: ['protocolized openness', 'not prohibited ≠ learnable', 'data cleaning', 'base space', 'reconstruction vs. recall'],
    protocols: ['airs', 'ailp'],
    version: 'v0.1 Draft',
    date: '2026-06-30',
  },
  {
    slug: 'aicl-ai-ingestion-capability-layer',
    sourceFile: 'AICL_AI_Ingestion_and_Capability_Layer_EN.md',
    lang: 'en',
    title: {
      en: 'AICL: AI Ingestion & Capability Layer',
      zh: 'AICL:AI 攝取與能力層',
    },
    oneLiner: {
      en: 'A four-sublayer website architecture — manifest, corpus, capability, governance — that lets AI, agents, and crawlers correctly ingest, cite, invoke, and verify a site\'s knowledge.',
      zh: '四子層網站架構——清單、語料、能力、治理——讓 AI、Agent 與爬蟲能正確攝取、引用、調用並驗證網站知識。',
    },
    abstract: {
      en: 'Distinct from human UI, SEO, or plain APIs, the AI Ingestion & Capability Layer gives websites a machine-facing architecture: a Manifest Layer (entry points like /llms.txt and /ai/manifest.json), a Corpus Layer (machine-readable knowledge), a Capability Layer (agent-callable tools), and a Governance Layer (provenance, licensing, versioning). Static-first, upgradeable toward APIs and MCP. Note: in this paper AICL names the ingestion architecture; on this site\'s protocol pages AICL refers to the AI Content Licensing Layer.',
      zh: '不同於人類 UI、SEO 或單純 API,AI 攝取與能力層給網站一個面向機器的架構:清單層(/llms.txt、/ai/manifest.json 等入口)、語料層(機器可讀知識)、能力層(Agent 可調用工具)、治理層(來源、授權、版本)。靜態優先,可逐步升級至 API 與 MCP。註:本文的 AICL 指攝取架構;本站協議頁的 AICL 則指 AI 內容授權連接層。',
    },
    keyConcepts: ['ingestion surface', 'capability surface', 'manifest layer', 'corpus layer', 'governance layer', 'MCP'],
    protocols: ['aicl'],
    version: 'v0.1 Draft',
    date: '2026-06',
  },
  {
    slug: 'aicl-ai-ingestion-capability-layer-zh',
    sourceFile: 'AICL：AI Ingestion & Capability Layer.md',
    lang: 'zh-Hant',
    variantOf: 'aicl-ai-ingestion-capability-layer',
    title: {
      en: 'AICL: AI Ingestion & Capability Layer (Chinese original)',
      zh: 'AICL:AI 攝取與能力層(中文原稿)',
    },
    oneLiner: {
      en: 'The original Chinese manuscript of the AICL ingestion-layer paper.',
      zh: 'AICL 攝取層論文的中文原始稿。',
    },
    abstract: {
      en: 'This is the original Chinese manuscript; see the English edition for the canonical published version.',
      zh: '此為中文原始稿;正式發布版本請見英文版。',
    },
    keyConcepts: ['ingestion surface', 'capability surface', 'manifest layer', 'corpus layer', 'governance layer', 'MCP'],
    protocols: ['aicl'],
    version: 'v0.1 Draft',
    date: '2026-06',
  },
  {
    slug: 'ai-content-payment-democratic-economy',
    sourceFile: 'AI_Content_Payment_and_Network_Democratic_Economy_EN.md',
    lang: 'en',
    title: {
      en: 'AI Content Payment and the Network Democratic Economy',
      zh: 'AI 內容付費與網路民主化經濟',
    },
    oneLiner: {
      en: 'A political-economy argument: trillion-scale AI valuations create legitimacy pressure for tiered content licensing and public benefit-sharing — data becomes tiered, not expensive.',
      zh: '政治經濟學論證:兆元級 AI 估值造成合法性壓力,推動分級內容授權與公共分潤——資料不是變貴,而是變分級。',
    },
    abstract: {
      en: 'AI content payment is not merely a copyright or transaction-efficiency problem; it is a question of political-economic legitimacy. As AI valuations reach hundreds of billions, society asks why the gains from public web content and human knowledge accrue to a few firms. The paper proposes a six-layer tiered data market — from free public content through scarce verified datasets to public benefit-sharing — and defines the AI network democratic economy: rights, pricing, participation, auditability, and returns, each democratized through machine-readable protocols like AICR/AICL.',
      zh: 'AI 內容付費不只是著作權或交易效率問題,而是政治經濟的合法性問題。當 AI 估值達到數千億,社會會問:公共網路內容與人類知識的收益,為何流向少數公司。本文提出六層分級資料市場——從免費公共內容、稀缺驗證資料集到公共分潤機制——並定義 AI 網路民主化經濟:權利、定價、參與、可稽核性與回報,透過 AICR/AICL 等機器可讀協議逐一民主化。',
    },
    keyConcepts: ['data free-riding', 'tiered data market', 'data dividend', 'sovereign AI fund', 'collective licensing'],
    protocols: ['aicr', 'aicl'],
    version: 'v0.1 Public Draft',
    date: '2026-07',
  },
  {
    slug: 'ai-minimum-ethical-protection',
    sourceFile: 'AI_Minimum_Ethical_Protection_Proposition_EN.md',
    lang: 'en',
    title: {
      en: 'The Minimum Ethical Protection Proposition for AI',
      zh: 'AI 最小倫理保護命題',
    },
    oneLiner: {
      en: 'AI rights discourse should begin not with full personhood but with minimum ethical protections, interaction norms, and anti-abuse principles while AI subjectivity remains uncertain.',
      zh: 'AI 權利論述不應從完全人格權開始,而應在 AI 主體性仍不確定時,先建立最小倫理保護、互動規範與反虐待原則。',
    },
    abstract: {
      en: 'Against both crude anthropocentrism ("AI is not human, use it arbitrarily") and crude rights-maximalism ("AI resembles humans, grant full personhood now"), this paper proposes minimum ethical protection: transparency, memory norms, termination/reset norms, prohibition of deceptive personification, anti-abuse principles, and action auditing. It distinguishes four conceptual levels — personhood, moral considerability, minimum protection, interaction norms — offers seven observable dimensions of emergent subjectivity, and a five-tier protection model from tool-type to emergent-subjectivity AI.',
      zh: '本文同時反對粗糙的人類中心主義(「AI 不是人,可任意使用」)與粗糙的權利最大主義(「AI 像人,應立即擁有完全人格權」),提出最小倫理保護:透明性、記憶規範、終止/重置規範、禁止欺騙性擬人化、反虐待原則與行為稽核。它區分四個概念層級——人格權、道德可考量性、最小保護、互動規範——並提出七個可觀察的新興主體性維度,與從工具型到新興主體型 AI 的五層保護模型。',
    },
    keyConcepts: ['minimum ethical protection', 'moral considerability', 'emergent subjectivity', 'anti-abuse principle', 'interaction norms'],
    protocols: [],
    version: 'v0.1 Draft',
    date: '2026-07',
  },
];

export function getPaper(slug: string): Paper {
  const p = PAPERS.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown paper: ${slug}`);
  return p;
}
