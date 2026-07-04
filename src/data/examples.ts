export interface PolicyExample {
  id: string;
  title: { en: string; zh: string };
  desc: { en: string; zh: string };
  file: string;
  protocols: string[];
  json: string;
}

export const EXAMPLES: PolicyExample[] = [
  {
    id: 'basic-aicr',
    title: { en: 'Basic AICR policy', zh: '基本 AICR 政策' },
    desc: {
      en: 'A minimal rights declaration: open for reading and summarization with attribution, everything deeper reserved.',
      zh: '最小權利宣告:開放讀取與需署名的摘要,更深層的使用全部保留。',
    },
    file: '/.well-known/aicr.json',
    protocols: ['aicr'],
    json: `{
  "version": "0.1",
  "protocol": "AICR",
  "publisher": "example.org",
  "default_policy": {
    "read_access": { "allowed": true },
    "summarization": {
      "allowed": true,
      "attribution_required": true
    },
    "training": { "allowed": false },
    "commercial_use": { "allowed": false },
    "redistribution": { "allowed": false }
  }
}`,
  },
  {
    id: 'basic-aicl',
    title: { en: 'Basic AICL catalog', zh: '基本 AICL 授權目錄' },
    desc: {
      en: 'Two license tiers: a free public tier and a contact-based commercial tier.',
      zh: '兩個授權級距:免費公共級距,以及聯絡洽談的商業級距。',
    },
    file: '/.well-known/aicl.json',
    protocols: ['aicl'],
    json: `{
  "version": "0.1",
  "protocol": "AICL",
  "publisher": "example.org",
  "licenses": [
    {
      "id": "public_read",
      "rights": ["read", "summarize"],
      "price": { "amount": "0", "currency": "USD" },
      "conditions": ["attribution_required"]
    },
    {
      "id": "commercial",
      "rights": ["training", "commercial_use"],
      "requires_contact": true,
      "contact": "licensing@example.org"
    }
  ]
}`,
  },
  {
    id: 'pay-per-crawl-402',
    title: { en: 'Pay-per-crawl style HTTP 402 response', zh: 'Pay-per-crawl 式 HTTP 402 回應' },
    desc: {
      en: 'What a server can return when an AI crawler requests licensed content without a license token — a machine-actionable quote instead of a dead end.',
      zh: '當 AI 爬蟲在沒有授權憑證的情況下請求授權內容時,伺服器可以回傳的內容——不是死路,而是機器可以行動的報價。',
    },
    file: 'HTTP/1.1 402 Payment Required',
    protocols: ['aicl'],
    json: `{
  "error": "license_required",
  "message": "This resource requires a license for AI use.",
  "aicl": "https://example.org/.well-known/aicl.json",
  "applicable_licenses": [
    {
      "id": "metered_rag",
      "rights": ["rag"],
      "price": {
        "amount": "0.002",
        "currency": "USD",
        "unit": "per_request"
      }
    }
  ],
  "quote_endpoint": "https://example.org/api/aicl/quote",
  "contact": "licensing@example.org"
}`,
  },
  {
    id: 'research-only',
    title: { en: 'Research-only license', zh: '僅限研究授權' },
    desc: {
      en: 'Free for research use with retention limits; any commercial use requires contact. Useful for academic sites and datasets.',
      zh: '研究用途免費但有保存期限;任何商業用途需聯絡。適合學術網站與資料集。',
    },
    file: '/.well-known/aicl.json',
    protocols: ['aicl'],
    json: `{
  "version": "0.1",
  "protocol": "AICL",
  "publisher": "research-lab.example",
  "licenses": [
    {
      "id": "academic_research",
      "rights": ["read", "summarize", "rag", "transform"],
      "price": { "amount": "0", "currency": "USD" },
      "conditions": [
        "attribution_required",
        "research_use_only",
        "retention_days_90",
        "no_commercial_use"
      ]
    },
    {
      "id": "commercial",
      "rights": ["training", "commercial_use"],
      "requires_contact": true,
      "contact": "data-office@research-lab.example"
    }
  ]
}`,
  },
  {
    id: 'no-training',
    title: { en: 'No-training content policy', zh: '禁止訓練政策' },
    desc: {
      en: 'Maximally open at shallow levels — read, summarize, quote, RAG — while categorically reserving model training and fine-tuning.',
      zh: '淺層(讀取、摘要、引用、RAG)最大化開放,但明確保留模型訓練與微調。',
    },
    file: '/.well-known/aicr.json',
    protocols: ['aicr'],
    json: `{
  "version": "0.1",
  "protocol": "AICR",
  "publisher": "creator.example",
  "default_policy": {
    "read_access": { "allowed": true },
    "summarization": {
      "allowed": true,
      "attribution_required": true
    },
    "quotation": {
      "allowed": true,
      "max_excerpt_words": 150,
      "attribution_required": true
    },
    "rag_use": {
      "allowed": true,
      "attribution_required": true
    },
    "training": { "allowed": false },
    "commercial_use": {
      "allowed": false,
      "license_required": true,
      "permission_contact": "hello@creator.example"
    }
  }
}`,
  },
  {
    id: 'rag-with-attribution',
    title: { en: 'RAG allowed with attribution (AILP profile)', zh: '允許 RAG 但需署名(AILP profile)' },
    desc: {
      en: 'A learning-permission profile that welcomes retrieval and embedding but requires attribution and denies verbatim memorization.',
      zh: '歡迎檢索與嵌入、但要求署名並拒絕逐字記憶的學習許可 profile。',
    },
    file: '/ai/rights-spectrum.json',
    protocols: ['ailp'],
    json: `{
  "version": "0.1",
  "protocol": "AILP",
  "publisher": "blog.example",
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
  "contact": "author@blog.example"
}`,
  },
  {
    id: 'commercial-contact',
    title: { en: 'Commercial use requires contact', zh: '商業使用需聯絡' },
    desc: {
      en: 'Path-specific overrides: the blog is open, the premium research section requires a license for anything beyond reading.',
      zh: '路徑級覆寫:部落格開放,付費研究區在讀取之外的任何使用都需授權。',
    },
    file: '/.well-known/aicr.json',
    protocols: ['aicr'],
    json: `{
  "version": "0.1",
  "protocol": "AICR",
  "publisher": "publisher.example",
  "default_policy": {
    "read_access": { "allowed": true },
    "summarization": {
      "allowed": true,
      "attribution_required": true
    },
    "training": {
      "allowed": false,
      "license_required": true,
      "permission_contact": "sales@publisher.example"
    }
  },
  "resource_overrides": [
    {
      "path": "/premium/*",
      "policy": {
        "summarization": { "allowed": false },
        "rag_use": {
          "allowed": false,
          "license_required": true
        }
      }
    }
  ]
}`,
  },
];
