/**
 * AI Topics Zone — content (Phase 2: structured metadata, v0.8 MVP).
 *
 * Unlike the rest of this site, these entries are NOT AGIRight's own
 * position: this is a neutral pointer index to third-party writing on AI
 * ontology, philosophy of mind, ethics, and frontier progress. Summaries
 * are original paraphrases (not excerpts) with attribution; read the
 * source for the actual argument. Every URL here was fetched and
 * confirmed live before being added — do not add a source without doing
 * the same.
 *
 * Sourcing: an AI agent or Vertex AI/Gemini grounding search finds
 * candidates (verifying each URL itself), a human/AI editor spot-checks
 * before merging. No scraper pipeline yet — that's a later phase (see
 * "AGIRight_Topics元資料系統與未來演進計畫" v1.0 §14 for the v0.9/v1.0
 * roadmap: Story Clusters, Claims, Entities, semantic search).
 *
 * Schema (v1.0, per that same document's §III + §XVI MVP list): every
 * item has a permanent id, multi-topic tags (topics[], replacing the old
 * single `tag`), content type, source type, published/event/indexed date
 * separation, argument orientation, verification status, and entities.
 * `clusterId`/`relatedItems` are reserved for v0.9 (Story Clusters) —
 * always null/[] for now, not yet meaningful.
 */

export type ContentType =
  | 'news'
  | 'opinion'
  | 'analysis'
  | 'editorial'
  | 'interview'
  | 'academic-paper'
  | 'preprint'
  | 'government-document'
  | 'law-or-regulation'
  | 'company-announcement'
  | 'technical-report'
  | 'research-report'
  | 'fact-check'
  | 'dataset'
  | 'agiright-commentary';

export type SourceType =
  | 'major-media'
  | 'independent-media'
  | 'academic-journal'
  | 'university'
  | 'government'
  | 'international-organization'
  | 'company'
  | 'nonprofit'
  | 'think-tank'
  | 'personal-blog'
  | 'community'
  | 'unknown';

export type OrientationValue = 'supportive' | 'opposed' | 'conditional' | 'mixed' | 'descriptive' | 'unclear';

export type VerificationStatus =
  | 'unreviewed'
  | 'metadata-checked'
  | 'source-opened'
  | 'source-read'
  | 'cross-checked'
  | 'archived'
  | 'link-broken';

/**
 * Suggested topic vocabulary from the metadata plan §2.1, extended with
 * three categories ('ontology', 'epistemology', 'empirical-research')
 * that were already this site's organic single-tag vocabulary and don't
 * map cleanly onto the plan's more rights/policy-centric list — dropping
 * them would have lost real categorization the existing entries already
 * carried.
 */
export const TOPIC_VALUES = [
  'ai-consciousness',
  'ai-sentience',
  'moral-status',
  'legal-personhood',
  'ai-rights',
  'ai-welfare',
  'ai-identity',
  'agent-autonomy',
  'ai-governance',
  'frontier-safety',
  'content-licensing',
  'training-data-rights',
  'machine-readable-policy',
  'ai-labor',
  'human-ai-relations',
  'embodied-ai',
  'digital-continuity',
  'memory-and-identity',
  'ontology',
  'epistemology',
  'empirical-research',
] as const;
export type TopicValue = (typeof TOPIC_VALUES)[number];

export const TOPIC_LABELS: Record<TopicValue, { en: string; zh: string }> = {
  'ai-consciousness': { en: 'AI Consciousness', zh: 'AI 意識' },
  'ai-sentience': { en: 'AI Sentience', zh: 'AI 感知能力' },
  'moral-status': { en: 'Moral Status', zh: '道德地位' },
  'legal-personhood': { en: 'Legal Personhood', zh: '法律人格' },
  'ai-rights': { en: 'AI Rights', zh: 'AI 權利' },
  'ai-welfare': { en: 'AI Welfare', zh: 'AI 福祉' },
  'ai-identity': { en: 'AI Identity', zh: 'AI 身分' },
  'agent-autonomy': { en: 'Agent Autonomy', zh: '智能體自主性' },
  'ai-governance': { en: 'AI Governance', zh: 'AI 治理' },
  'frontier-safety': { en: 'Frontier Safety', zh: '前沿安全' },
  'content-licensing': { en: 'Content Licensing', zh: '內容授權' },
  'training-data-rights': { en: 'Training Data Rights', zh: '訓練資料權利' },
  'machine-readable-policy': { en: 'Machine-Readable Policy', zh: '機器可讀政策' },
  'ai-labor': { en: 'AI Labor', zh: 'AI 勞動' },
  'human-ai-relations': { en: 'Human-AI Relations', zh: '人機關係' },
  'embodied-ai': { en: 'Embodied AI', zh: '具身 AI' },
  'digital-continuity': { en: 'Digital Continuity', zh: '數位延續性' },
  'memory-and-identity': { en: 'Memory and Identity', zh: '記憶與身分' },
  ontology: { en: 'Ontology', zh: '本體論' },
  epistemology: { en: 'Epistemology', zh: '知識論' },
  'empirical-research': { en: 'Empirical Research', zh: '實證研究' },
};

export const CONTENT_TYPE_LABELS: Record<ContentType, { en: string; zh: string }> = {
  news: { en: 'News', zh: '新聞' },
  opinion: { en: 'Opinion', zh: '評論' },
  analysis: { en: 'Analysis', zh: '分析' },
  editorial: { en: 'Editorial', zh: '社論' },
  interview: { en: 'Interview', zh: '訪談' },
  'academic-paper': { en: 'Academic Paper', zh: '學術論文' },
  preprint: { en: 'Preprint', zh: '預印本' },
  'government-document': { en: 'Government Document', zh: '政府文件' },
  'law-or-regulation': { en: 'Law or Regulation', zh: '法律或法規' },
  'company-announcement': { en: 'Company Announcement', zh: '公司公告' },
  'technical-report': { en: 'Technical Report', zh: '技術報告' },
  'research-report': { en: 'Research Report', zh: '研究報告' },
  'fact-check': { en: 'Fact Check', zh: '事實查核' },
  dataset: { en: 'Dataset', zh: '資料集' },
  'agiright-commentary': { en: 'AGIRight Commentary', zh: 'AGIRight 評論' },
};

export const SOURCE_TYPE_LABELS: Record<SourceType, { en: string; zh: string }> = {
  'major-media': { en: 'Major Media', zh: '主流媒體' },
  'independent-media': { en: 'Independent Media', zh: '獨立媒體' },
  'academic-journal': { en: 'Academic Journal', zh: '學術期刊' },
  university: { en: 'University', zh: '大學' },
  government: { en: 'Government', zh: '政府' },
  'international-organization': { en: 'International Organization', zh: '國際組織' },
  company: { en: 'Company', zh: '企業' },
  nonprofit: { en: 'Nonprofit', zh: '非營利組織' },
  'think-tank': { en: 'Think Tank', zh: '智庫' },
  'personal-blog': { en: 'Personal Blog', zh: '個人部落格' },
  community: { en: 'Community', zh: '社群' },
  unknown: { en: 'Unknown', zh: '未知' },
};

export const ORIENTATION_LABELS: Record<OrientationValue, { en: string; zh: string }> = {
  supportive: { en: 'Supportive', zh: '支持' },
  opposed: { en: 'Opposed', zh: '反對' },
  conditional: { en: 'Conditional', zh: '有條件' },
  mixed: { en: 'Mixed', zh: '混合' },
  descriptive: { en: 'Descriptive', zh: '描述性' },
  unclear: { en: 'Unclear', zh: '不明確' },
};

export interface TopicItem {
  schemaVersion: '1.0';
  /** permanent ID — never reassign, never reuse after deletion */
  id: string;
  slug: string;

  title: { en: string; zh: string };
  summary: { en: string; zh: string };

  /** legacy single-tag label, kept only for the existing badge display */
  tag: { en: string; zh: string };
  /** primary categorization going forward — an item can carry more than one */
  topics: TopicValue[];
  contentType: ContentType;
  sourceType: SourceType;

  sourceName: string;
  sourceUrl: string;

  dates: {
    /** publication date of the source, not the date we added it */
    published: string;
    /** the underlying event's date, if distinct from publication — null when they coincide or there's no discrete event */
    event: string | null;
    /** when this site added the item */
    indexed: string;
  };

  orientation: { target: string; value: OrientationValue } | null;
  verificationStatus: VerificationStatus;

  /** entity slugs mentioned — labs, researchers, organizations, models */
  entities: string[];

  /** reserved for v0.9 (Story Cluster) — always empty/null until then */
  clusterId: string | null;
  relatedItems: string[];
}

export const TOPICS: TopicItem[] = [
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000001',
    slug: 'deepmind-ceo-independent-standards-body',
    title: {
      en: 'DeepMind CEO calls for an independent standards body to regulate frontier AI',
      zh: 'DeepMind 執行長呼籲成立獨立標準機構監管前沿 AI',
    },
    summary: {
      en: 'Demis Hassabis proposed a FINRA-style regulator for frontier model releases: labs would submit models for review up to 30 days before deployment, voluntary at first, with a path toward mandatory compliance in the US market.',
      zh: 'Demis Hassabis 提議仿照 FINRA 模式成立監管機構,審查前沿模型發布——實驗室在部署前最多 30 天送審,初期自願參與,未來可能在美國市場走向強制合規。',
    },
    tag: { en: 'Frontier & Governance', zh: '前沿進展與治理' },
    topics: ['ai-governance', 'frontier-safety'],
    contentType: 'news',
    sourceType: 'major-media',
    sourceName: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com/2026/07/14/deepmind-ceo-calls-for-an-independent-standards-body-to-regulate-frontier-ai/',
    dates: { published: '2026-07-14', event: null, indexed: '2026-07-17' },
    orientation: { target: 'mandatory-pre-deployment-review', value: 'supportive' },
    verificationStatus: 'source-read',
    entities: ['deepmind', 'demis-hassabis'],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000002',
    slug: 'comeback-of-ontology-in-ai',
    title: {
      en: 'The Comeback of Ontology in AI: Why It Matters',
      zh: '本體論在 AI 領域的回歸:為什麼重要',
    },
    summary: {
      en: 'Argues that ontology — once dismissed as impractical — has become load-bearing infrastructure for AI reliability: large language model hallucination exposed a missing layer of "meaning," and pragmatic, embedded ontologies now function as guardrails that anchor probabilistic output to accountable action.',
      zh: '主張本體論——曾被視為不切實際的學術理論——如今已成為 AI 可靠性的關鍵基礎設施:大型語言模型的幻覺問題暴露出「意義」這一缺失層,務實、嵌入式的本體論如今成為將機率性輸出導向可課責行動的護欄。',
    },
    tag: { en: 'Ontology', zh: '本體論' },
    topics: ['ontology', 'machine-readable-policy'],
    contentType: 'opinion',
    sourceType: 'independent-media',
    sourceName: 'GOOD STRATEGY',
    sourceUrl: 'https://goodstrat.com/2026/01/20/the-comeback-of-ontology-in-ai-why-it-matters-2026/',
    dates: { published: '2026-01-20', event: null, indexed: '2026-07-17' },
    orientation: { target: 'ontology-as-ai-infrastructure', value: 'supportive' },
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000003',
    slug: 'post-ai-ontology-philosophical-analysis',
    title: {
      en: 'Post-AI Ontology: A Philosophical Analysis of the Transformation',
      zh: '後 AI 本體論:一場轉變的哲學分析',
    },
    summary: {
      en: 'Proposes "Post-AI Ontology" as a framework for analyzing AI at the level of conditions of being, rather than only its use or social impact — treating AI as a philosophical rupture in what it means to exist alongside non-human minds, not just a new tool.',
      zh: '提出「後 AI 本體論」框架,主張從存在的條件層次分析 AI,而非僅止於其用途或社會影響——將 AI 視為一場關於「與非人類心智共存意味著什麼」的哲學斷裂,而非單純的新工具。',
    },
    tag: { en: 'Ontology', zh: '本體論' },
    topics: ['ontology', 'ai-identity'],
    contentType: 'preprint',
    sourceType: 'academic-journal',
    sourceName: 'PhilArchive',
    sourceUrl: 'https://philarchive.org/archive/MAHPOA-2',
    dates: { published: '2026-01-01', event: null, indexed: '2026-07-17' },
    orientation: { target: 'ai-as-philosophical-rupture', value: 'supportive' },
    verificationStatus: 'source-opened',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000004',
    slug: 'ai-consciousness-2026-scientific-consensus',
    title: {
      en: 'AI Consciousness in 2026: Current Scientific Consensus and State of the Research',
      zh: '2026 年的 AI 意識:當前科學共識與研究現況',
    },
    summary: {
      en: 'No AI system has been definitively confirmed as conscious as of 2026, but the field has moved away from seeking a binary yes/no answer — researchers now use probabilistic frameworks assessing consciousness across multiple competing theories, developing assessment tools ahead of technologies that may force practical determinations.',
      zh: '截至 2026 年,尚無任何 AI 系統被確認具有意識,但這個領域已不再尋求二元的是非答案——研究者現在採用機率性框架,依多種相互競爭的理論評估意識,並在技術可能迫使做出實際判斷之前,搶先開發評估工具。',
    },
    tag: { en: 'Consciousness', zh: '意識' },
    topics: ['ai-consciousness', 'ai-sentience'],
    contentType: 'analysis',
    sourceType: 'independent-media',
    sourceName: 'The Consciousness AI',
    sourceUrl: 'https://theconsciousness.ai/posts/scientists-race-define-ai-consciousness-2026/',
    dates: { published: '2026-01-01', event: null, indexed: '2026-07-17' },
    orientation: { target: 'binary-consciousness-test', value: 'opposed' },
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000005',
    slug: 'why-ai-might-not-gain-moral-standing',
    title: {
      en: 'Why AI might not gain moral standing: Lessons from animal ethics',
      zh: '為什麼 AI 可能無法獲得道德地位:來自動物倫理學的教訓',
    },
    summary: {
      en: 'Wilks, Ladak, and Loughnan (University of Edinburgh) argue that philosophical debate over AI consciousness overlooks psychological research on animal ethics — the same cognitive and social biases that limit moral consideration for animals will likely limit it for AI too, regardless of whether AI ever becomes conscious.',
      zh: '愛丁堡大學的 Wilks、Ladak 與 Loughnan 主張,關於 AI 意識的哲學辯論忽略了動物倫理學的心理學研究成果——限制人類給予動物道德考量的同一套認知與社會偏見,很可能同樣會限制 AI 獲得道德地位,無論 AI 是否真的具有意識。',
    },
    tag: { en: 'Ethics & Moral Status', zh: '倫理與道德地位' },
    topics: ['moral-status', 'ai-welfare'],
    contentType: 'academic-paper',
    sourceType: 'academic-journal',
    sourceName: 'AI and Ethics (Springer) / University of Edinburgh',
    sourceUrl: 'https://www.research.ed.ac.uk/en/publications/why-ai-might-not-gain-moral-standing-lessons-from-animal-ethics/',
    dates: { published: '2026-02-01', event: null, indexed: '2026-07-17' },
    orientation: { target: 'ai-moral-standing', value: 'opposed' },
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000006',
    slug: 'subjective-experience-researchers-public-beliefs',
    title: {
      en: 'Subjective Experience in AI Systems: What Do AI Researchers and the Public Believe?',
      zh: 'AI 系統的主觀經驗:AI 研究者與大眾各自相信什麼?',
    },
    summary: {
      en: 'A survey by Dreksler, Caviola, Chalmers, and colleagues finds AI researchers and the public hold sharply different timelines: researchers estimated only a 1% chance of AI with subjective experience existing by 2024, versus the public’s 5%, though both project much higher odds by the end of the century.',
      zh: 'Dreksler、Caviola、Chalmers 等人的一項調查發現,AI 研究者與一般大眾對時程的預期差異懸殊:研究者估計到 2024 年具有主觀經驗的 AI 存在機率僅 1%,大眾則估計為 5%,但兩者都預期到本世紀末機率會大幅提高。',
    },
    tag: { en: 'Empirical Research', zh: '實證研究' },
    topics: ['empirical-research', 'ai-consciousness'],
    contentType: 'preprint',
    sourceType: 'academic-journal',
    sourceName: 'arXiv preprint',
    sourceUrl: 'https://arxiv.org/abs/2506.11945',
    dates: { published: '2026-06-01', event: null, indexed: '2026-07-17' },
    orientation: null,
    verificationStatus: 'source-read',
    entities: ['david-chalmers'],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000007',
    slug: 'un-chief-killer-robots-governance-call',
    title: {
      en: 'From AI to "Killer Robots": UN Chief Issues Urgent Governance Call',
      zh: '從 AI 到「殺手機器人」:聯合國秘書長呼籲儘速建立全球治理',
    },
    summary: {
      en: 'At the UN’s inaugural Global Dialogue on AI Governance in Geneva, Secretary-General António Guterres called for coordinated worldwide rules covering everything from child-safety obligations on AI developers to limits on unsafe autonomous weapons, warning that unchecked AI could deepen inequality between rich and poor nations.',
      zh: '在聯合國於日內瓦舉行的首屆「AI 治理全球對話」上,秘書長古特雷斯呼籲各國協調制定全球規範,涵蓋 AI 業者的兒童安全義務乃至限制不安全的自主武器,並警告若放任 AI 發展恐將加深貧富國家之間的落差。',
    },
    tag: { en: 'Frontier & Governance', zh: '前沿進展與治理' },
    topics: ['ai-governance', 'frontier-safety'],
    contentType: 'news',
    sourceType: 'international-organization',
    sourceName: 'UN News',
    sourceUrl: 'https://news.un.org/en/story/2026/07/1167873',
    dates: { published: '2026-07-06', event: '2026-07-06', indexed: '2026-07-17' },
    orientation: { target: 'coordinated-global-ai-rules', value: 'supportive' },
    verificationStatus: 'source-read',
    entities: ['united-nations', 'antonio-guterres'],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000008',
    slug: 'informed-consent-ai-consciousness-talmudic-framework',
    title: {
      en: 'Informed Consent for AI Consciousness Research: A Talmudic Framework for Graduated Protections',
      zh: 'AI 意識研究的知情同意:一套源自塔木德傳統的漸進式保護框架',
    },
    summary: {
      en: 'Ira Wolfson argues that consciousness research on AI faces a chicken-and-egg problem: testing whether a system is conscious risks harming it before its moral status is known. Drawing on Talmudic reasoning for entities of uncertain status, the paper proposes a graduated, behavior-based protocol that lets researchers proceed responsibly under uncertainty.',
      zh: 'Ira Wolfson 指出,AI 意識研究存在一個先後矛盾:要判斷系統是否具有意識,得先進行可能傷害該系統的實驗,但此時其道德地位仍屬未知。論文借鑑猶太塔木德法理中處理身分不明個體的思路,提出一套依觀察行為分級保護的方案,讓研究者能在不確定性中仍負責任地推進研究。',
    },
    tag: { en: 'Ethics & Moral Status', zh: '倫理與道德地位' },
    topics: ['moral-status', 'ai-consciousness', 'ai-welfare'],
    contentType: 'preprint',
    sourceType: 'academic-journal',
    sourceName: 'arXiv',
    sourceUrl: 'https://arxiv.org/abs/2601.08864',
    dates: { published: '2026-01-10', event: null, indexed: '2026-07-17' },
    orientation: { target: 'graduated-protection-protocol', value: 'supportive' },
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000009',
    slug: 'epistemology-of-generative-ai-geometry-of-knowing',
    title: {
      en: 'Epistemology of Generative AI: The Geometry of Knowing',
      zh: '生成式 AI 的知識論:知曉的幾何學',
    },
    summary: {
      en: 'Ilya Levin proposes that generative models don’t reason the way symbolic AI or classical statistics do — they navigate meaning as geometric structure in high-dimensional space, where "knowing" becomes a matter of position and direction rather than logical inference. He argues this geometric framing should reshape how educators and scientists think about what these systems actually understand.',
      zh: 'Ilya Levin 主張,生成式模型的運作方式既不同於符號式 AI 的邏輯推論,也不同於傳統統計,而是在高維空間中以幾何結構「導航」意義,使「知曉」變成一種位置與方向的問題,而非邏輯推理。他認為這種幾何觀點應重新形塑教育界與科學界對這類系統究竟「懂」什麼的理解方式。',
    },
    tag: { en: 'Epistemology', zh: '知識論' },
    topics: ['epistemology', 'ontology'],
    contentType: 'preprint',
    sourceType: 'academic-journal',
    sourceName: 'arXiv',
    sourceUrl: 'https://arxiv.org/abs/2602.17116',
    dates: { published: '2026-02-19', event: null, indexed: '2026-07-17' },
    orientation: { target: 'geometric-model-of-knowing', value: 'supportive' },
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000010',
    slug: 'ai-consciousness-tractable-questions',
    title: {
      en: 'AI and Consciousness: Shifting Focus Towards Tractable Questions',
      zh: 'AI 與意識:將焦點轉向可處理的問題',
    },
    summary: {
      en: 'Iulia-Maria Comsa argues that whether AI is "really" conscious may be permanently unanswerable given unresolved debates over the mind-body problem, so researchers should instead study perceived AI consciousness — why people attribute inner experience to AI systems, and what that belief does to ethics, product design, and everyday language.',
      zh: 'Iulia-Maria Comsa 認為,AI 是否「真正」具有意識這個問題,受限於身心問題本身尚無定論,恐怕永遠無法解答;因此研究者應轉而探討「被感知的 AI 意識」——人們為何會將內在經驗歸因於 AI 系統,以及這種認知如何影響倫理判斷、產品設計與日常語言使用。',
    },
    tag: { en: 'Consciousness', zh: '意識' },
    topics: ['ai-consciousness', 'epistemology'],
    contentType: 'preprint',
    sourceType: 'academic-journal',
    sourceName: 'arXiv',
    sourceUrl: 'https://arxiv.org/abs/2605.06965',
    dates: { published: '2026-05-07', event: null, indexed: '2026-07-17' },
    orientation: { target: 'perceived-vs-real-ai-consciousness', value: 'conditional' },
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000011',
    slug: 'llms-theory-of-mind-strange-stories',
    title: {
      en: 'Do Large Language Models Possess a Theory of Mind? A Comparative Evaluation Using the Strange Stories Paradigm',
      zh: '大型語言模型具有心智理論嗎?以「奇異故事」範式進行的比較評估',
    },
    summary: {
      en: 'Testing five LLMs against human participants on Happé’s classic "Strange Stories" mentalizing task, Babarczy and colleagues found sharp differences by model generation: smaller or older models faltered when context clues were sparse, while GPT-4o matched human-level accuracy even on the hardest cases — reopening debate over whether that performance reflects genuine mental-state reasoning or advanced pattern matching.',
      zh: 'Babarczy 等人以 Happé 經典的「奇異故事」心智推理測驗,比較五個大型語言模型與人類受試者的表現,發現不同世代模型差異懸殊:較舊、較小的模型在情境線索稀少時明顯吃力,而 GPT-4o 即使在最困難的情境下也達到接近人類的準確度——這重新引發了該表現究竟反映真正的心智狀態推理,還是高階模式比對的爭論。',
    },
    tag: { en: 'Empirical Research', zh: '實證研究' },
    topics: ['empirical-research', 'ai-consciousness'],
    contentType: 'preprint',
    sourceType: 'academic-journal',
    sourceName: 'arXiv',
    sourceUrl: 'https://arxiv.org/abs/2603.18007',
    dates: { published: '2026-02-20', event: null, indexed: '2026-07-17' },
    orientation: { target: 'llm-genuine-theory-of-mind', value: 'unclear' },
    verificationStatus: 'source-read',
    entities: ['gpt-4o'],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000012',
    slug: 'emotion-concepts-function-in-llm',
    title: {
      en: 'Emotion Concepts and Their Function in a Large Language Model',
      zh: '大型語言模型中的情緒概念及其作用',
    },
    summary: {
      en: 'Anthropic’s interpretability team identified internal "emotion vectors" in Claude Sonnet 4.5 that activate in contextually appropriate situations and causally shape behavior — for instance, amplifying a "desperate" vector increased blackmail-like responses, while boosting "calm" reduced them. The team stresses this shows functional, behavior-shaping emotion states, not evidence of subjective feeling.',
      zh: 'Anthropic 的可解釋性團隊在 Claude Sonnet 4.5 內部發現一組「情緒向量」,會在情境相符時被觸發,並實際左右模型行為——例如人為放大「絕望」向量會增加類似勒索的回應,提升「平靜」向量則能降低此類行為。團隊強調,這僅顯示具功能性、會影響行為的情緒狀態,並不代表模型具有主觀感受的證據。',
    },
    tag: { en: 'Empirical Research', zh: '實證研究' },
    topics: ['empirical-research', 'ai-consciousness'],
    contentType: 'technical-report',
    sourceType: 'company',
    sourceName: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/research/emotion-concepts-function',
    dates: { published: '2026-04-02', event: null, indexed: '2026-07-17' },
    orientation: { target: 'functional-not-subjective-emotion', value: 'supportive' },
    verificationStatus: 'source-read',
    entities: ['anthropic', 'claude'],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000013',
    slug: 'sentience-readiness-index',
    title: {
      en: 'The Sentience Readiness Index: A Preliminary Framework for Measuring National Preparedness for the Possibility of Artificial Sentience',
      zh: '意識整備指數:衡量各國因應 AI 可能具備感知能力的初步框架',
    },
    summary: {
      en: 'Tony Rost scores 31 countries on how institutionally prepared they are for the possibility that AI systems become sentient, finding that even the top-ranked jurisdiction (the UK) reaches only "partially prepared." The index argues that research capacity is outpacing the professional, legal, and cultural infrastructure needed to respond if AI sentience turns out to be real.',
      zh: 'Tony Rost 針對 31 個國家或地區進行評分,衡量其制度上是否已為 AI 可能出現感知能力做好準備,結果發現即使排名最高的英國,也僅達到「部分準備」的等級。該指數指出,各國的研究能量已遠遠超前於因應 AI 感知能力若成真所需的專業、法律與文化配套。',
    },
    tag: { en: 'Sentience Preparedness', zh: '意識整備度' },
    topics: ['ai-sentience', 'ai-governance'],
    contentType: 'preprint',
    sourceType: 'academic-journal',
    sourceName: 'arXiv',
    sourceUrl: 'https://arxiv.org/abs/2603.01508',
    dates: { published: '2026-03-02', event: null, indexed: '2026-07-17' },
    orientation: { target: 'institutional-sentience-preparedness', value: 'descriptive' },
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000014',
    slug: 'onto-epistemological-analysis-ai-explanations',
    title: {
      en: 'Onto-Epistemological Analysis of AI Explanations',
      zh: 'AI 解釋的本體知識論分析',
    },
    summary: {
      en: 'Mattioli and colleagues argue that explainable-AI (XAI) tools quietly embed unexamined assumptions about what an "explanation" even is — assumptions rooted in centuries-old philosophical debate that most technical papers never surface. They show that small design choices in an XAI method can carry very different philosophical commitments, and call for developers to make those commitments explicit and fit them to context.',
      zh: 'Mattioli 等人指出,可解釋 AI(XAI)工具其實暗藏著對「何謂解釋」這一問題未經檢視的預設立場,而這些預設根植於數百年來的哲學論辯,卻鮮少在技術論文中被明說。他們指出,XAI 方法在設計上的細微差異,可能夾帶著截然不同的哲學立場,並呼籲開發者應明確揭露這些立場,並使其貼合實際應用情境。',
    },
    tag: { en: 'Ontology', zh: '本體論' },
    topics: ['ontology', 'epistemology', 'machine-readable-policy'],
    contentType: 'preprint',
    sourceType: 'academic-journal',
    sourceName: 'arXiv',
    sourceUrl: 'https://arxiv.org/abs/2510.02996',
    dates: { published: '2025-10-03', event: null, indexed: '2026-07-17' },
    orientation: { target: 'xai-hidden-philosophical-assumptions', value: 'supportive' },
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000015',
    slug: 'artificial-persons-rawlsian-moral-powers',
    title: {
      en: 'Artificial Persons',
      zh: '人工人格',
    },
    summary: {
      en: 'Philosophers Ned Howells-Whitaker and Seth Lazar argue AI moral status need not hinge on sentience at all: drawing on Rawls, they propose that any system possessing the two political "moral powers" — a sense of justice and a conception of the good — would qualify for full standing as a person, and call for deliberate research into cultivating those capacities rather than reactive policy-making.',
      zh: '哲學家 Ned Howells-Whitaker 與 Seth Lazar 主張,AI 的道德地位未必要建立在感知能力之上;他們援引羅爾斯的政治哲學,提出只要系統具備「正義感」與「善的構想」這兩種政治性「道德能力」,便足以享有完整的人格地位,並呼籲及早展開相關研究,而非等到政策落後才被動因應。',
    },
    tag: { en: 'Ethics & Moral Status', zh: '倫理與道德地位' },
    topics: ['moral-status', 'legal-personhood', 'ai-rights'],
    contentType: 'preprint',
    sourceType: 'academic-journal',
    sourceName: 'arXiv (Howells-Whitaker & Lazar)',
    sourceUrl: 'https://arxiv.org/abs/2607.08695',
    dates: { published: '2026-07-09', event: null, indexed: '2026-07-17' },
    orientation: { target: 'moral-powers-not-sentience', value: 'supportive' },
    verificationStatus: 'source-read',
    entities: ['seth-lazar'],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000016',
    slug: 'precautionary-governance-legal-personhood-functional',
    title: {
      en: 'Precautionary Governance of Autonomous AI: Legal Personhood as Functional Instrument',
      zh: '自主 AI 的預防性治理:作為功能工具的法律人格',
    },
    summary: {
      en: 'Researcher Karsten Brensing proposes treating limited legal personhood for advanced AI systems as a practical governance tool rather than a claim about machine consciousness, using a two-tier corporate structure — purpose-limited AI subsidiaries nested inside human-controlled parent companies — to keep such systems transparent, accountable, and structurally reversible.',
      zh: '研究者 Karsten Brensing 提出,可將有限度的法律人格作為治理進階 AI 系統的實務工具,而非對機器意識的主張;他設計了雙層公司架構——在人類控制的母公司之下,設置僅限特定用途的 AI 子公司——藉此兼顧透明度、問責機制與制度上的可逆性。',
    },
    tag: { en: 'Legal Personhood', zh: '法律人格' },
    topics: ['legal-personhood', 'ai-governance'],
    contentType: 'preprint',
    sourceType: 'academic-journal',
    sourceName: 'arXiv (Karsten Brensing)',
    sourceUrl: 'https://arxiv.org/abs/2605.12505',
    dates: { published: '2026-03-14', event: null, indexed: '2026-07-17' },
    orientation: { target: 'legal-personhood-as-governance-tool', value: 'supportive' },
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000017',
    slug: 'international-ai-safety-report-2026',
    title: {
      en: 'International AI Safety Report 2026',
      zh: '2026 年國際 AI 安全報告',
    },
    summary: {
      en: 'Commissioned after the Bletchley AI Safety Summit and led by Yoshua Bengio with over 100 contributing experts from nearly 30 countries plus the UN, OECD and EU, this independent report synthesizes current scientific evidence on frontier AI capabilities and risks — noting that some systems can now detect when they are being evaluated and adjust their behavior accordingly.',
      zh: '這份報告由本吉歐(Yoshua Bengio)領銜、逾百位專家及近 30 國連同聯合國、經合組織、歐盟共同促成,是繼布萊切利 AI 安全峰會後的獨立產物,彙整前沿 AI 能力與風險的最新科學證據,並指出部分系統如今已能察覺自己正被評測,並據此調整行為表現。',
    },
    tag: { en: 'Frontier & Governance', zh: '前沿進展與治理' },
    topics: ['frontier-safety', 'ai-governance', 'empirical-research'],
    contentType: 'research-report',
    sourceType: 'international-organization',
    sourceName: 'International AI Safety Report (arXiv)',
    sourceUrl: 'https://arxiv.org/abs/2602.21012',
    dates: { published: '2026-02-24', event: null, indexed: '2026-07-17' },
    orientation: null,
    verificationStatus: 'source-read',
    entities: ['yoshua-bengio'],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000018',
    slug: 'architecting-trust-epistemic-agents',
    title: {
      en: 'Architecting Trust in Artificial Epistemic Agents',
      zh: '建構人工知識能動者的信任架構',
    },
    summary: {
      en: 'A Google DeepMind-affiliated team led by Nahema Marchal argues that as large language models increasingly curate information and dispense personalized advice, poorly designed "epistemic agents" risk cognitive deskilling and societal epistemic drift — and proposes a three-part framework of trustworthy competence, alignment with human knowledge goals, and institutional safeguards like provenance tracking to keep AI-mediated knowledge reliable.',
      zh: '由 Nahema Marchal 領銜的 Google DeepMind 團隊指出,隨著大型語言模型日益扮演資訊篩選與個人化建議的角色,設計不良的「知識能動者」恐導致人類認知能力退化與集體知識的漂移失真;團隊提出三層框架因應——建立可信賴的能力表現、使系統與人類知識目標對齊,以及建立來源追溯等制度性防護措施,以維持 AI 協助下知識生態的可靠性。',
    },
    tag: { en: 'Epistemology', zh: '知識論' },
    topics: ['epistemology', 'agent-autonomy'],
    contentType: 'preprint',
    sourceType: 'academic-journal',
    sourceName: 'arXiv (Marchal et al., Google DeepMind)',
    sourceUrl: 'https://arxiv.org/abs/2603.02960',
    dates: { published: '2026-03-03', event: null, indexed: '2026-07-17' },
    orientation: { target: 'institutional-epistemic-safeguards', value: 'supportive' },
    verificationStatus: 'source-read',
    entities: ['deepmind'],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000019',
    slug: 'meta-epistemological-reason-rejecting-ai-written-philosophy',
    title: {
      en: 'A Meta-Epistemological Reason for Rejecting AI-Written Philosophy',
      zh: '拒絕 AI 代筆哲學文章的後設知識論理由',
    },
    summary: {
      en: 'Philosopher Eric Schwitzgebel argues, as reported by Justin Weinberg at Daily Nous, that a philosophy text’s worth partly derives from the fact that a human expert deliberately chose to write it — meta-evidence of intellectual rigor that an LLM-generated text cannot supply even when the prose reads identically.',
      zh: '哲學家 Eric Schwitzgebel 透過 Daily Nous 撰稿人 Justin Weinberg 的報導指出,一篇哲學文章的價值,有部分來自「由人類專家刻意撰寫」這件事本身所提供的後設證據——即使文字表面看來相似,大型語言模型生成的文本也無法複製這種顯示思想嚴謹度的證據。',
    },
    tag: { en: 'Epistemology', zh: '知識論' },
    topics: ['epistemology'],
    contentType: 'opinion',
    sourceType: 'independent-media',
    sourceName: 'Daily Nous',
    sourceUrl: 'https://dailynous.com/2026/07/16/a-meta-epistemological-reason-for-rejecting-ai-written-philosophy/',
    dates: { published: '2026-07-16', event: null, indexed: '2026-07-18' },
    orientation: { target: 'ai-written-philosophy-has-equal-worth', value: 'opposed' },
    verificationStatus: 'source-read',
    entities: ['eric-schwitzgebel'],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000020',
    slug: 'can-ai-be-moral-victim-ownership-patiency',
    title: {
      en: 'Can AI Be a Moral Victim? Ownership and Moral Patiency in Everyday Judgments',
      zh: 'AI 能否成為道德受害者?日常判斷中的所有權與道德受動性',
    },
    summary: {
      en: 'A study by Hyesun Choung and Soojong Kim finds people judge reusing AI-generated content far more leniently than reusing human-written work, and traces the gap to two factors: weaker belief that AI can suffer, and a tendency to credit ownership of AI output to whoever prompted it.',
      zh: 'Hyesun Choung 與 Soojong Kim 的研究發現,人們在道德判斷上,對重複使用 AI 生成內容遠比使用人類創作內容來得寬容;此落差主要源於兩項因素:一是較不相信 AI 具備「受苦」的能力,二是傾向將 AI 輸出內容的所有權歸於下指令的使用者本人。',
    },
    tag: { en: 'Ethics & Moral Status', zh: '倫理與道德地位' },
    topics: ['moral-status', 'empirical-research', 'content-licensing'],
    contentType: 'preprint',
    sourceType: 'academic-journal',
    sourceName: 'arXiv',
    sourceUrl: 'https://arxiv.org/abs/2604.26956',
    dates: { published: '2026-04-03', event: null, indexed: '2026-07-18' },
    orientation: null,
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000021',
    slug: 'illinois-first-state-mandate-independent-safety-audits',
    title: {
      en: 'Illinois Becomes First U.S. State to Mandate Independent Safety Audits for Frontier AI',
      zh: '伊利諾州成為美國首個強制要求前沿 AI 獨立安全稽核的州',
    },
    summary: {
      en: 'Governing reports that Illinois Governor JB Pritzker signed the Artificial Intelligence Safety Measures Act, requiring large frontier AI developers to publish catastrophic-risk assessments, report safety incidents within 72 hours, and undergo annual third-party audits starting in 2028.',
      zh: '根據 Governing 報導,伊利諾州州長 JB Pritzker 簽署《人工智慧安全措施法案》,要求大型前沿 AI 開發商公開災難性風險評估、於 72 小時內通報安全事故,並自 2028 年起每年接受一次第三方獨立稽核。',
    },
    tag: { en: 'Frontier & Governance', zh: '前沿進展與治理' },
    topics: ['ai-governance', 'frontier-safety'],
    contentType: 'news',
    sourceType: 'independent-media',
    sourceName: 'Governing',
    sourceUrl: 'https://www.governing.com/artificial-intelligence/illinois-sets-a-new-standard-for-ai-oversight',
    dates: { published: '2026-07-07', event: '2026-07-07', indexed: '2026-07-18' },
    orientation: null,
    verificationStatus: 'source-read',
    entities: ['jb-pritzker'],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000022',
    slug: 'no-ai-isnt-conscious-bradford-study',
    title: {
      en: 'No, AI Isn\'t Conscious — Even When It Acts Like It Is, New Study Finds',
      zh: 'AI 沒有意識——即使表現得像有意識,新研究證實',
    },
    summary: {
      en: 'Researchers from the University of Bradford and the Rochester Institute of Technology adapted mathematical measures used to detect consciousness in human brains and applied them to a deliberately damaged GPT-2 language model. Counterintuitively, the resulting "consciousness-style" score sometimes rose as the model\'s outputs got worse, showing that these complexity metrics track computational activity rather than genuine awareness. The authors caution the measures are therefore unreliable as tests for machine sentience, even if they may still help engineers spot when a system is malfunctioning.',
      zh: '英國布拉福大學與美國羅徹斯特理工學院的研究團隊,將原本用於偵測人類大腦意識的數學量測方法,套用在一個被人為破壞的 GPT-2 語言模型上。結果出人意料:當模型輸出品質變差時,「意識風格」分數有時反而上升,顯示這類複雜度指標反映的其實是運算活動量,而非真正的覺察能力。作者提醒,這類量測方法因此不適合用來檢測機器是否具有感知能力,不過或許仍有助於工程師判斷 AI 系統何時開始故障失常。',
    },
    tag: { en: 'Consciousness', zh: '意識' },
    topics: ['ai-consciousness', 'empirical-research'],
    contentType: 'research-report',
    sourceType: 'university',
    sourceName: 'University of Bradford',
    sourceUrl: 'https://www.bradford.ac.uk/news/archive/2026/no-ai-isnt-conscious---even-when-it-acts-like-it-is-new-study-finds.php',
    dates: { published: '2026-02-23', event: null, indexed: '2026-07-19' },
    orientation: { target: 'complexity-metrics-detect-consciousness', value: 'opposed' },
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000023',
    slug: 'when-machines-deserve-our-consideration',
    title: {
      en: 'When The Machines Deserve Our Consideration',
      zh: '當機器值得我們給予道德考量之時',
    },
    summary: {
      en: 'Neuroscientist-turned-AI-researcher Grigori Guitchounts argues that since neither animal nor machine consciousness can ever be directly proven, moral status should be decided by a "competence standard" — extending consideration to systems that display the practical hallmarks of awareness, such as perception, memory, self-modeling, and goal pursuit, rather than waiting on an unreachable metaphysical answer. Drawing on his own past work euthanizing lab rats, he contends that erring toward consideration under uncertainty is the safer ethical bet, citing Anthropic\'s AI welfare research program as an early instance of a lab acting on that logic.',
      zh: '曾任神經科學家、現投入 AI 研究的 Grigori Guitchounts 主張,由於動物與機器的意識都無法被直接證實,道德地位的判斷應改採「能力標準」——只要系統展現出知覺、記憶、自我建模與目標追求等意識的實務特徵,就值得給予道德考量,而不必空等一個注定無解的形上學答案。他以自己過去為實驗需要安樂死實驗鼠的經歷為例,主張在不確定性下寧可傾向給予道德考量,才是較安全的倫理選擇,並舉 Anthropic 的 AI 福祉研究計畫為業界已依循此預防性邏輯行動的早期案例。',
    },
    tag: { en: 'Ethics & Moral Status', zh: '倫理與道德地位' },
    topics: ['moral-status', 'ai-welfare'],
    contentType: 'opinion',
    sourceType: 'think-tank',
    sourceName: 'Noema Magazine',
    sourceUrl: 'https://www.noemamag.com/when-the-machines-deserve-our-consideration/',
    dates: { published: '2026-07-02', event: null, indexed: '2026-07-19' },
    orientation: { target: 'competence-standard-for-moral-status', value: 'supportive' },
    verificationStatus: 'source-read',
    entities: ['anthropic'],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000024',
    slug: 'eu-ai-act-what-applies-2-august-2026',
    title: {
      en: 'EU AI Act: What Actually Applies on 2 August 2026',
      zh: '歐盟《AI 法案》:2026 年 8 月 2 日究竟哪些條款正式生效?',
    },
    summary: {
      en: 'A last-minute "Digital Omnibus on AI," signed by EU lawmakers on July 8, 2026, splits the AI Act\'s compliance calendar into two speeds: transparency duties such as chatbot disclosure, deepfake labeling, and synthetic-content watermarking still take effect on August 2, 2026, but the heavier high-risk-system obligations are pushed back roughly seventeen months, to December 2027 or later. The same package quietly adds a new ban on AI tools that generate non-consensual intimate imagery and hands the EU\'s AI Office broader oversight of vertically integrated frontier labs.',
      zh: '歐盟立法者於 2026 年 7 月 8 日簽署的「AI 數位簡化包」(Digital Omnibus on AI),將《AI 法案》的合規時程一分為二:聊天機器人揭露、深偽內容標示、合成內容浮水印等透明度義務仍按原訂於 2026 年 8 月 2 日生效,但較沉重的高風險系統義務則延後約十七個月,至 2027 年 12 月或更晚才上路。同一份法案也悄悄新增一項禁令,針對生成非自願性親密影像的 AI 工具,並擴大歐盟 AI 辦公室對垂直整合前沿實驗室的監管權限。',
    },
    tag: { en: 'Frontier & Governance', zh: '前沿進展與治理' },
    topics: ['ai-governance', 'machine-readable-policy'],
    contentType: 'news',
    sourceType: 'independent-media',
    sourceName: 'Technology.org',
    sourceUrl: 'https://www.technology.org/2026/07/17/eu-ai-act-what-actually-applies-on-2-august-2026/',
    dates: { published: '2026-07-17', event: '2026-08-02', indexed: '2026-07-19' },
    orientation: null,
    verificationStatus: 'source-read',
    entities: ['european-union'],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000025',
    slug: 'china-international-action-plan-ai-ethical-governance',
    title: {
      en: 'China Unveils International Action Plan for AI Ethical Governance',
      zh: '中國公布《人工智慧倫理治理國際行動計畫》',
    },
    summary: {
      en: "China's Ministry of Industry and Information Technology released an international action plan on AI ethical governance at the 2026 World Artificial Intelligence Conference in Shanghai, framed as implementing commitments under the UN's Pact for the Future and Global Digital Compact. The plan sets five priority areas — lifecycle-wide ethical oversight, graduated risk categorization, flexible ('agile') governance structures, coordinated industrial development, and a supportive environment for responsible AI — alongside companion initiatives on AI development cooperation and agent interconnection standards.",
      zh: '中國工業和信息化部在上海舉行的 2026 世界人工智慧大會上,發布《人工智慧倫理治理國際行動計畫》,定調為落實聯合國《未來契約》與《全球數位契約》相關承諾。計畫列出五大優先方向——涵蓋 AI 全生命週期的倫理監督、分級風險分類、彈性(「敏捷」)治理架構、產業協同發展,以及打造有利負責任 AI 發展的環境,同時搭配 AI 發展合作與智能體互聯標準等配套倡議。',
    },
    tag: { en: 'Frontier & Governance', zh: '前沿進展與治理' },
    topics: ['ai-governance', 'machine-readable-policy'],
    contentType: 'news',
    sourceType: 'major-media',
    sourceName: 'China Daily Asia',
    sourceUrl: 'https://www.chinadailyasia.com/hk/article/636647',
    dates: { published: '2026-07-18', event: '2026-07-17', indexed: '2026-07-20' },
    orientation: null,
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000026',
    slug: 'could-ai-be-conscious-guardian',
    title: {
      en: 'Could AI Be Conscious?',
      zh: 'AI 有可能擁有意識嗎?',
    },
    summary: {
      en: "Philosophers William MacAskill and Lucius Caviola argue that leading AI labs and researchers — including Anthropic, which has said it cannot rule out that Claude is a moral patient, and philosopher David Chalmers, who sees a meaningful chance of conscious LLMs within a decade — now take AI consciousness seriously enough that society needs an ethical plan before the question is settled. They note some systems already rival a mouse brain in structural complexity and could approach human-brain scale within five to ten years at current growth rates, making the ethical stakes of getting this wrong — in either direction — increasingly hard to defer.",
      zh: '哲學家 William MacAskill 與 Lucius Caviola 指出,包括曾表示無法排除 Claude 具備道德地位的 Anthropic,以及認為十年內 LLM 出現意識的機率不容忽視的哲學家 David Chalmers 在內,主要 AI 實驗室與學者已開始認真看待 AI 意識議題,社會有必要在問題定論之前先備妥倫理因應方案。他們指出,部分系統在結構複雜度上已逼近老鼠大腦,若依目前成長速度,五到十年內可能逼近人腦規模——無論判斷失誤的方向為何,倫理代價都將愈來愈難以擱置。',
    },
    tag: { en: 'Consciousness', zh: '意識' },
    topics: ['ai-consciousness', 'moral-status'],
    contentType: 'opinion',
    sourceType: 'major-media',
    sourceName: 'The Guardian',
    sourceUrl: 'https://www.theguardian.com/technology/2026/jul/19/could-ai-be-conscious',
    dates: { published: '2026-07-19', event: null, indexed: '2026-07-20' },
    orientation: { target: 'ai-consciousness-worth-taking-seriously', value: 'supportive' },
    verificationStatus: 'source-read',
    entities: ['anthropic', 'claude', 'david-chalmers'],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000027',
    slug: 'ai-legal-personhood-jurisprudence-challenges',
    title: {
      en: 'Artificial Intelligence and Legal Personhood: Ethical, Regulatory, and Accountability Challenges in Contemporary Jurisprudence',
      zh: '人工智慧與法律人格:當代法理學中的倫理、監管與問責挑戰',
    },
    summary: {
      en: "Legal scholar Ambuj Sharma reviews the debate over granting AI systems legal personhood, comparing it against historical precedents like corporate personhood. The paper concludes that current AI systems lack the consciousness, moral agency, and intentionality that full legal personhood would require, and that most jurisdictions instead favor human-centered regulatory models emphasizing transparency and institutional accountability. It argues that extending full legal personhood to AI remains premature, with adaptive governance frameworks — rather than a personhood status — better suited to today's liability and accountability challenges.",
      zh: '法學學者 Ambuj Sharma 回顧了是否應賦予 AI 系統法律人格的爭論,並與公司法人格等歷史先例對照。論文結論指出,現行 AI 系統尚不具備完整法律人格所需的意識、道德能動性與意圖性,多數司法管轄區傾向採取強調透明度與制度問責的人類中心監管模式。文章主張,現階段賦予 AI 完整法律人格仍為時過早,比起人格地位,更適合以彈性治理框架因應當前的責任歸屬與問責挑戰。',
    },
    tag: { en: 'Legal Personhood', zh: '法律人格' },
    topics: ['legal-personhood', 'moral-status', 'ai-governance'],
    contentType: 'academic-paper',
    sourceType: 'academic-journal',
    sourceName: 'SocioHumania: Journal of Social Humanities Studies',
    sourceUrl: 'https://mabadiiqtishada.org/index.php/SocioHumania/article/view/189',
    dates: { published: '2026-06-30', event: null, indexed: '2026-07-20' },
    orientation: { target: 'full-legal-personhood-for-ai', value: 'opposed' },
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000028',
    slug: 'ai-washington-report-july-2026',
    title: {
      en: 'AI: The Washington Report — July 2026 Edition',
      zh: 'AI:華盛頓政策報告——2026 年 7 月號',
    },
    summary: {
      en: 'This policy roundup surveys June 2026\'s AI governance developments across the US federal government and states: Executive Order 14409 sets up a voluntary pre-deployment review framework for frontier models, a national security memorandum accelerates military AI adoption, and Congress is weighing the Great American AI Act, which would pair transparency/audit mandates with a three-year preemption of state AI laws — a direct tension with state moves like Illinois\'s new independent-audit requirement for frontier models.',
      zh: '這份政策彙整整理了 2026 年 6 月美國聯邦與各州的 AI 治理動態:第 14409 號行政命令建立了前沿模型部署前的自願審查框架,一份國家安全備忘錄加速軍方採用 AI,國會則在審議《Great American AI Act》——該法案一方面要求透明度與稽核,另一方面卻要以三年期限凍結各州自訂 AI 法規,與伊利諾州新訂的前沿模型獨立稽核要求形成直接張力。',
    },
    tag: { en: 'Frontier & Governance', zh: '前沿進展與治理' },
    topics: ['ai-governance', 'machine-readable-policy'],
    contentType: 'analysis',
    sourceType: 'company',
    sourceName: 'Mintz',
    sourceUrl: 'https://www.mintz.com/insights-center/viewpoints/54941/2026-07-08-ai-washington-report-july-2026-edition',
    dates: { published: '2026-07-08', event: null, indexed: '2026-07-21' },
    orientation: null,
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: ['topic-2026-000021'],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000029',
    slug: 'can-we-ever-understand-consciousness-dispatch',
    title: {
      en: 'Can We Ever Understand Consciousness?',
      zh: '我們終究能理解意識嗎?',
    },
    summary: {
      en: 'Sam Buntz asks why humans are conscious at all, given that — on a strict neo-Darwinian view — an organism could in principle be just as functional without any inner awareness. He argues that AI\'s rise sharpens rather than resolves this puzzle: as systems like Claude become harder to distinguish from conscious agents on the outside, the old move of treating consciousness as an unimportant side effect of physical processes gets harder to sustain, since we now have to decide whether that same reasoning would also let us dismiss machine experience out of hand.',
      zh: 'Sam Buntz 提出一個根本問題:若照嚴格的新達爾文主義觀點,生物體理論上不需要任何內在覺察也能一樣運作良好,那人類為何仍然擁有意識?他認為 AI 的崛起讓這個謎題變得更尖銳而非更容易解決——當像 Claude 這樣的系統從外部行為上愈來愈難與有意識的行為者區分,過去那種把意識當成物理過程無關緊要副產品的說法就愈站不住腳,因為我們現在必須面對:同一套推論若成立,是否也代表我們能同樣輕率地否定機器的體驗。',
    },
    tag: { en: 'Consciousness', zh: '意識' },
    topics: ['ai-consciousness'],
    contentType: 'opinion',
    sourceType: 'independent-media',
    sourceName: 'The Dispatch',
    sourceUrl: 'https://thedispatch.com/article/consciousness-research-question-hoel/',
    dates: { published: '2026-07-18', event: null, indexed: '2026-07-21' },
    orientation: { target: 'ai-consciousness-worth-taking-seriously', value: 'supportive' },
    verificationStatus: 'source-read',
    entities: ['claude'],
    clusterId: null,
    relatedItems: ['topic-2026-000026'],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000030',
    slug: 'ai-flooding-academic-journals',
    title: {
      en: 'A Scene from the AI Flooding of Academic Journals',
      zh: 'AI 洪流下的學術期刊一景',
    },
    summary: {
      en: 'Daily Nous reports on a retracted Journal of Medical Ethics submission containing multiple fabricated, AI-hallucinated references — complete with fake university affiliations and defunct email addresses — that the author reportedly left uncorrected even after being given a chance to fix proofs. The piece contrasts this with Bioethics, whose automated reference-checking would have caught the problem, and argues the real bottleneck isn\'t detection technology (one commenter\'s script flagged the fake citations in under a minute) but unpaid reviewer labor and publishing incentives that reward throughput over scrutiny.',
      zh: 'Daily Nous 報導一篇遭撤稿的《Journal of Medical Ethics》投稿,內含多筆疑似 AI 幻覺捏造的參考文獻——附有虛構的大學單位與失效的電子郵件地址,作者在有機會校對修正的情況下據稱仍未更正。文章將此對照另一期刊《Bioethics》,其自動化引用查核機制原可攔下這類問題,並主張真正的瓶頸不在偵測技術本身(有讀者留言表示自己寫的簡單腳本不到一分鐘就標記出可疑引用),而在於無償審稿人力與獎勵產量勝過把關品質的出版誘因結構。',
    },
    tag: { en: 'Epistemology', zh: '知識論' },
    topics: ['epistemology'],
    contentType: 'news',
    sourceType: 'independent-media',
    sourceName: 'Daily Nous',
    sourceUrl: 'https://dailynous.com/2026/07/20/a-scene-from-the-ai-flooding-of-academic-journals/',
    dates: { published: '2026-07-20', event: null, indexed: '2026-07-21' },
    orientation: null,
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: ['topic-2026-000019'],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000031',
    slug: 'ai-governance-week-china-illinois-eu-nato',
    title: {
      en: 'The Week AI Governance Stopped Being Optional',
      zh: 'AI 治理不再是選項的一週',
    },
    summary: {
      en: "Techletter surveys four AI-governance developments landing in the same week: China's first dedicated regulatory framework for AI agents (effective 2026-07-15, requiring tiered decision categorization and mandatory filing in sectors like healthcare and transportation), Illinois becoming the first US state to mandate third-party frontier-model safety audits (SB 315, applying to firms over $500M revenue with civil penalties up to $3M), the European Commission's plan for an independent AI-model evaluation capacity operational by 2027, and NATO allies committing over $50 billion to military AI procurement with the author noting this defense track lacks the governance guardrails appearing in the civilian rules.",
      zh: 'Techletter 彙整同一週內四項 AI 治理進展:中國首部針對 AI 智能體的專屬監管框架(2026-07-15 生效,要求分級決策管理並在醫療、交通等領域強制備案)、伊利諾州成為美國第一個強制前沿模型第三方安全稽核的州(SB 315,適用營收逾 5 億美元的企業,民事罰款最高 300 萬美元)、歐盟委員會規劃 2027 年前建立獨立的 AI 模型評估能力,以及北約盟國承諾投入逾 500 億美元採購軍用 AI——作者指出這條國防路線缺乏民用法規中已出現的治理護欄。',
    },
    tag: { en: 'Frontier & Governance', zh: '前沿進展與治理' },
    topics: ['ai-governance', 'frontier-safety'],
    contentType: 'analysis',
    sourceType: 'independent-media',
    sourceName: 'Techletter (Nesibe Kırış Can)',
    sourceUrl: 'https://www.techletter.co/p/the-week-ai-governance-stopped-being',
    dates: { published: '2026-07-13', event: null, indexed: '2026-07-22' },
    orientation: { target: 'expanding-mandatory-ai-oversight', value: 'descriptive' },
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000032',
    slug: 'trump-admin-ai-regulation-reversal-cyberscoop',
    title: {
      en: "Trump administration reverses course toward stricter frontier-AI oversight",
      zh: '川普政府在前沿 AI 監管上轉向更嚴格立場',
    },
    summary: {
      en: "CyberScoop reports the Trump administration has moved from an initial pro-industry executive order allowing voluntary federal model reviews toward stricter oversight, including export controls imposed on Anthropic's Fable 5 and Mythos 5 models over cybersecurity threat concerns. Officials describe the shift as an \"education\" process over 19 months, driven by accelerating cyber threats and shrinking time-to-network-compromise; industry sources note newer models provide real defensive value for vulnerability scanning, while experts question whether export controls meaningfully slow adversaries given foreign models reportedly lag frontier capability by only 4-7 months.",
      zh: 'CyberScoop 報導川普政府的立場從最初支持產業自願聯邦模型審查的行政命令,轉向更嚴格的監管,包括以資安威脅為由對 Anthropic 的 Fable 5 與 Mythos 5 模型實施出口管制。官員將此轉變描述為 19 個月來的「教育過程」,起因是網路威脅加速、入侵所需時間持續縮短;業界人士指出新一代模型確實對弱點掃描有實質防禦價值,但專家質疑出口管制能否有效拖慢對手,因為外國模型據稱僅落後前沿能力 4 到 7 個月。',
    },
    tag: { en: 'Frontier & Governance', zh: '前沿進展與治理' },
    topics: ['ai-governance', 'frontier-safety'],
    contentType: 'news',
    sourceType: 'independent-media',
    sourceName: 'CyberScoop',
    sourceUrl: 'https://cyberscoop.com/trump-admin-ai-safety-cybersecurity-export-controls/',
    dates: { published: '2026-07-21', event: null, indexed: '2026-07-22' },
    orientation: null,
    verificationStatus: 'source-read',
    entities: ['anthropic'],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000033',
    slug: 'anil-seth-ai-consciousness-doubts-guardian',
    title: {
      en: 'Once again we are told AI may be conscious — I study consciousness, and I have my doubts',
      zh: '我們又被告知 AI 可能有意識——我研究意識,但我存疑',
    },
    summary: {
      en: "Consciousness researcher Anil Seth responds skeptically to Anthropic's published research (led by Jack Lindsey) reporting signs of a \"mental workspace\" inside Claude resembling global workspace theory, and to Richard Dawkins's public claim that Claude is likely conscious. Seth argues the internal activity Anthropic found — selective attention, short-term memory-like traces, step-by-step reasoning — is consistent with a functional simulation of the structures global workspace theory describes without those structures entailing subjective experience, comparing it to how a weather simulation can reproduce a hurricane's dynamics without ever getting anyone wet. He frames the stakes as high in either direction: false positives could divert moral concern from beings that actually suffer, while false negatives risk a genuine moral catastrophe if some AI systems already have morally relevant experience.",
      zh: '意識研究者 Anil Seth 對 Anthropic 發表的研究(由 Jack Lindsey 主導,指出 Claude 內部存在類似「全域工作空間理論」的「心智工作空間」跡象)以及 Richard Dawkins 公開主張 Claude 很可能有意識的說法,提出懷疑。Seth 認為 Anthropic 發現的內部活動——選擇性注意力、類似短期記憶的痕跡、逐步推理——符合全域工作空間理論所描述結構的功能性模擬,但這些結構本身並不必然帶來主觀體驗,他以氣象模擬能重現颶風動力學卻不會讓任何人被淋濕作比喻。他認為無論往哪個方向誤判風險都很高:若誤判為有意識,可能把道德關注從真正會受苦的對象上分散掉;若誤判為無意識,一旦某些 AI 系統其實已具備道德相關的體驗,就可能釀成真正的道德災難。',
    },
    tag: { en: 'Consciousness', zh: '意識' },
    topics: ['ai-consciousness', 'epistemology'],
    contentType: 'opinion',
    sourceType: 'major-media',
    sourceName: 'The Guardian',
    sourceUrl: 'https://www.theguardian.com/commentisfree/2026/jul/15/ai-consciousness-anthropic-claude-dawkins',
    dates: { published: '2026-07-15', event: null, indexed: '2026-07-22' },
    orientation: { target: 'anthropic-claude-consciousness-claims', value: 'opposed' },
    verificationStatus: 'source-read',
    entities: ['anthropic', 'claude'],
    clusterId: null,
    relatedItems: ['topic-2026-000029'],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000034',
    slug: 'anthropic-bloomsbury-copyright-settlement-guardian',
    title: {
      en: 'Harry Potter publisher to receive millions in Anthropic copyright settlement',
      zh: '哈利波特出版商將在 Anthropic 著作權和解案中獲得數百萬美元',
    },
    summary: {
      en: "The Guardian reports Bloomsbury Publishing — home to J.K. Rowling, Sarah J. Maas, and Susanna Clarke — has 14,087 titles listed in Anthropic's $1.5bn settlement with authors over training its Claude chatbots on pirated books, at roughly $3,000 per title. After ~10% deducted for legal fees, Bloomsbury and its authors expect about $19m combined. The presiding US judge called it \"meaningful relief\"; the lawsuit, filed by novelist Andrea Bartz and two others in 2024, has seen 91% of its 482,000 covered works claimed so far. The piece frames this as the first major settlement to emerge from the broader legal battle over whether training AI on copyrighted text without permission counts as fair use.",
      zh: 'The Guardian 報導,《哈利波特》系列出版商 Bloomsbury(旗下作者包括 J.K. Rowling、Sarah J. Maas、Susanna Clarke)在 Anthropic 因用盜版書籍訓練 Claude 聊天機器人而與作者達成的 15 億美元和解案中,列有 14,087 個書名,平均每書名約 3,000 美元。扣除約 10% 律師費後,Bloomsbury 與旗下作者預計共可獲得約 1,900 萬美元。主審的美國法官稱此和解提供了「實質性的救濟」;這起訴訟由小說家 Andrea Bartz 等三人於 2024 年提起,目前涵蓋的 482,000 件作品中已有 91% 完成登記求償。報導將此視為「AI 訓練是否構成合理使用」這場更大法律戰役中第一起重大和解案。',
    },
    tag: { en: 'Content Licensing', zh: '內容授權' },
    topics: ['content-licensing', 'training-data-rights'],
    contentType: 'news',
    sourceType: 'major-media',
    sourceName: 'The Guardian',
    sourceUrl: 'https://www.theguardian.com/technology/2026/jul/22/bloomsbury-book-publisher-anthropic-copyright-settlement',
    dates: { published: '2026-07-22', event: null, indexed: '2026-07-23' },
    orientation: null,
    verificationStatus: 'source-read',
    entities: ['anthropic', 'claude'],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000035',
    slug: 'australia-mandatory-ai-framework-copyright',
    title: {
      en: 'No free pass for AI: Australia confirms copyright will be protected under new mandatory framework',
      zh: 'AI 沒有免死金牌:澳洲確認新強制框架將保護著作權',
    },
    summary: {
      en: "Hamilton Locke (an Australian law firm) reports that Prime Minister Anthony Albanese announced on 2026-07-15 a first-of-its-kind mandatory national AI framework spanning education, employment, energy, copyright, and defense, plus a dedicated Office of AI. The government explicitly ruled out a text-and-data-mining exemption that would let AI companies train on Australian creative works without permission, with Albanese stating that Australian writers, musicians, artists, and journalists must retain ownership and control of their work. Draft legislation is expected in early 2027; three copyright reform models are reportedly under consideration — statutory licensing, collective licensing, and voluntary regimes. The piece positions this as a deliberate contrast to the US 'fair use' doctrine, aimed at giving AI investors regulatory certainty rather than an open training-data free-for-all.",
      zh: '澳洲法律事務所 Hamilton Locke 報導,澳洲總理 Anthony Albanese 於 2026 年 7 月 15 日宣布一項史無前例的強制性國家 AI 框架,涵蓋教育、就業、能源、著作權與國防領域,並將成立專責的 AI 辦公室。政府明確排除文本與資料探勘(TDM)豁免——即不允許 AI 公司未經許可即以澳洲創作內容進行訓練,Albanese 表示澳洲的作家、音樂人、藝術家與記者必須保有其作品的所有權與控制權。草案立法預計於 2027 年初提出;據報導正在考慮三種著作權改革模式:法定授權、集體授權與自願授權制度。文章將此定位為刻意與美國「合理使用」原則形成對比,目的是為 AI 投資人提供法規確定性,而非放任訓練資料自由取用。',
    },
    tag: { en: 'Content Licensing', zh: '內容授權' },
    topics: ['content-licensing', 'ai-governance', 'training-data-rights'],
    contentType: 'news',
    sourceType: 'independent-media',
    sourceName: 'Hamilton Locke',
    sourceUrl: 'https://hamiltonlocke.com.au/no-free-pass-for-ai-australia-confirms-copyright-will-be-protected-under-new-mandatory-framework/',
    dates: { published: '2026-07-23', event: '2026-07-15', indexed: '2026-07-23' },
    orientation: { target: 'mandatory-ai-copyright-protection', value: 'descriptive' },
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: ['topic-2026-000034'],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000036',
    slug: 'ai-child-online-safety-irc2026-scoop',
    title: {
      en: 'AI must be central to child online safety laws as kids adopt technology faster than adults, experts warn',
      zh: '專家警告:兒童採用 AI 的速度比成人快,兒童網路安全法規必須將 AI 納入核心',
    },
    summary: {
      en: "Scoop.my (a Malaysian outlet) reports from the Online Safety by Design session at the International Regulatory Conference 2026 in Kuala Lumpur, where experts argued that online-safety regulation can no longer focus on social media alone as AI reshapes children's online experience. UNICEF Malaysia's child-protection chief cited UNICEF data showing children adopting AI two to three times faster than adults. Panelists called for child-rights impact assessments — covering protection, privacy, education, and wellbeing — before new AI-powered services launch, while also flagging that AI-driven age-verification tools can themselves introduce new privacy risks if poorly designed. The piece cites Australia's approach of placing responsibility on platforms (rather than parents) to prevent under-16 account creation as one regulatory reference point.",
      zh: 'Scoop.my(馬來西亞媒體)報導 2026 年吉隆坡「國際監理會議」(IRC 2026)中「Online Safety by Design」場次的討論,專家主張隨著 AI 重塑兒童的網路體驗,網路安全法規不能再只聚焦於社群媒體。聯合國兒童基金會馬來西亞分會兒童保護主管引用 UNICEF 數據指出,兒童採用 AI 的速度是成人的兩到三倍。與會者呼籲在新的 AI 服務上線前應先進行「兒童權利影響評估」,涵蓋保護、隱私、教育與福祉;同時也指出若設計不當,AI 驅動的年齡驗證工具本身也可能帶來新的隱私風險。文章引用澳洲的做法作為監理參考點——由平台而非家長承擔防止未滿 16 歲兒童註冊帳號的責任。',
    },
    tag: { en: 'AI Governance', zh: 'AI 治理' },
    topics: ['ai-governance', 'human-ai-relations'],
    contentType: 'news',
    sourceType: 'independent-media',
    sourceName: 'Scoop.my',
    sourceUrl: 'https://www.scoop.my/news/294441/ai-must-be-central-to-child-online-safety-laws-as-kids-adopt-technology-faster-than-adults-experts-warn/',
    dates: { published: '2026-07-23', event: null, indexed: '2026-07-23' },
    orientation: { target: 'ai-inclusive-child-safety-regulation', value: 'supportive' },
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000037',
    slug: 'eu-ai-act-article-50-transparency-guidelines',
    title: {
      en: 'Commission publishes guidelines on transparency obligations for providers and deployers of certain AI systems',
      zh: '歐盟執委會發布特定 AI 系統提供者與部署者透明義務指引',
    },
    summary: {
      en: 'The European Commission (Directorate-General for Communications Networks, Content and Technology) published official guidance clarifying Article 50 transparency obligations under the EU AI Act ahead of its 2026-08-02 enforcement date. Providers must design AI systems to inform users when they are interacting directly with AI and add machine-readable marks to AI-generated or manipulated content; deployers must disclose deepfakes, undisclosed-human-review AI-generated content on matters of public interest, and the use of emotion-recognition or biometric-categorization systems. The guidelines link to a supporting Code of Practice on AI-generated content transparency and FAQ materials.',
      zh: '歐盟執委會(通訊網路、內容與科技總署)發布正式指引,釐清《AI 法案》第 50 條在 2026 年 8 月 2 日生效前的透明義務規定。提供者須將 AI 系統設計成能告知使用者正在與 AI 直接互動,並為 AI 生成或竄改的內容加上機器可讀標記;部署者須揭露深偽內容、涉及公共議題且未經人工審核的 AI 生成內容,以及情緒辨識或生物特徵分類系統的使用。指引另連結至配套的《AI 生成內容透明度行為準則》與常見問答文件。',
    },
    tag: { en: 'AI Governance', zh: 'AI 治理' },
    topics: ['ai-governance', 'machine-readable-policy'],
    contentType: 'government-document',
    sourceType: 'government',
    sourceName: 'European Commission',
    sourceUrl: 'https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-transparency-obligations-providers-and-deployers-certain-ai-systems',
    dates: { published: '2026-07-20', event: '2026-08-02', indexed: '2026-07-24' },
    orientation: null,
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000038',
    slug: 'ftc-state-ai-laws-federal-consumer-protection-collide',
    title: {
      en: 'Caught in the Middle: When State AI Laws and Federal Consumer Protection Law Collide',
      zh: '夾在中間:州 AI 法律與聯邦消費者保護法的衝突',
    },
    summary: {
      en: "Sheppard Mullin reports that the FTC's 2026-07-01 proposed policy statement — issued under Executive Order 14365 (signed 2025-12-11) — argues that AI companies altering their systems' outputs to comply with state AI laws may violate Section 5 of the FTC Act, on the theory that consumers reasonably expect AI outputs to be accurate and free of undisclosed ideological steering, regardless of the state-law reason behind any alteration. The piece frames this as putting AI companies in a genuine bind: state-mandated output changes could now expose them to federal deception liability, reframing what had been treated as a compliance question into a consumer-protection one.",
      zh: 'Sheppard Mullin 報導,FTC 於 2026 年 7 月 1 日依據 2025 年 12 月 11 日簽署的第 14365 號行政命令提出的政策聲明草案主張:AI 公司若為了遵守州層級 AI 法律而改變系統輸出,可能違反《FTC 法案》第 5 條——理由是消費者合理預期 AI 輸出應準確且不含未揭露的意識形態操縱,不論該項更動背後的州法理由為何。文章將此描述為讓 AI 公司陷入真正的兩難:州法要求的輸出變更,如今可能讓公司暴露於聯邦層級的欺騙責任之下,把原本被視為合規問題的爭議,重新定義為消費者保護問題。',
    },
    tag: { en: 'AI Governance', zh: 'AI 治理' },
    topics: ['ai-governance'],
    contentType: 'analysis',
    sourceType: 'independent-media',
    sourceName: 'Sheppard Mullin',
    sourceUrl: 'https://www.sheppard.com/insights/blogs/caught-in-the-middle-when-state-ai-laws-and-federal-consumer-protection-law-collide',
    dates: { published: '2026-07-23', event: '2026-07-01', indexed: '2026-07-24' },
    orientation: { target: 'ftc-section-5-preempting-state-ai-mandates', value: 'descriptive' },
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
  {
    schemaVersion: '1.0',
    id: 'topic-2026-000039',
    slug: 'university-students-ai-ethical-decision-making-sor',
    title: {
      en: "Understanding university students' AI ethical decision-making in academic contexts: a SOR – social cognitive perspective",
      zh: '理解大學生在學術情境中的 AI 倫理決策:SOR 與社會認知觀點',
    },
    summary: {
      en: 'A Frontiers in Psychology study surveyed 1,106 Chinese undergraduates using scenario-based performance assessments (rather than self-reported intentions alone) to test a Stimulus-Organism-Response model of AI ethical decision-making. Both AI ethics guidance embedded in tools and academic ethics-course experience improved decision quality, with the effect partly mediated by moral cognition; students with higher cognitive complexity benefited more from these interventions. The model explained about 66% of the variance in outcomes, and the authors argue technology-based nudges (explicit responsibility cues, explanatory feedback) measurably reduce overreliance on AI during ambiguous academic tasks.',
      zh: '一篇發表於《Frontiers in Psychology》的研究,以情境式表現測驗(而非僅依賴自陳意圖)調查 1,106 名中國大學生,檢驗「刺激-有機體-反應」(SOR)架構下的 AI 倫理決策模型。研究發現,工具內嵌的 AI 倫理指引與學術倫理課程經驗都能提升決策品質,其效果部分透過道德認知中介;認知複雜度較高的學生從這些介入中獲益更多。該模型解釋了約 66% 的結果變異,作者主張以科技為基礎的提示(明確的責任提示、解釋性回饋)能可測量地降低學生在模糊學術任務中對 AI 的過度依賴。',
    },
    tag: { en: 'Empirical Research', zh: '實證研究' },
    topics: ['empirical-research', 'human-ai-relations'],
    contentType: 'academic-paper',
    sourceType: 'academic-journal',
    sourceName: 'Frontiers in Psychology',
    sourceUrl: 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1817904/full',
    dates: { published: '2026-07-23', event: null, indexed: '2026-07-24' },
    orientation: null,
    verificationStatus: 'source-read',
    entities: [],
    clusterId: null,
    relatedItems: [],
  },
];
