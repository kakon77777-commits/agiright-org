/**
 * AI Topics Zone — seed content (Phase 1, manual curation).
 *
 * Unlike the rest of this site, these entries are NOT AGIRight's own
 * position: this is a neutral pointer index to third-party writing on AI
 * ontology, philosophy of mind, ethics, and frontier progress. Summaries
 * are original paraphrases (not excerpts) with attribution; read the
 * source for the actual argument. Every URL here was fetched and
 * confirmed live before being added — do not add a source without doing
 * the same.
 *
 * This is hand-curated scaffolding, not a pipeline: there is no crawler
 * or agent behind this list yet. See project memory ("project-ai-topics-zone")
 * for the phased plan (basic sections now → automated sourcing later).
 */

export interface TopicItem {
  title: { en: string; zh: string };
  summary: { en: string; zh: string };
  tag: { en: string; zh: string };
  sourceName: string;
  sourceUrl: string;
  /** publication date of the source, not the date we added it */
  date: string;
}

export const TOPICS: TopicItem[] = [
  {
    title: {
      en: 'DeepMind CEO calls for an independent standards body to regulate frontier AI',
      zh: 'DeepMind 執行長呼籲成立獨立標準機構監管前沿 AI',
    },
    summary: {
      en: 'Demis Hassabis proposed a FINRA-style regulator for frontier model releases: labs would submit models for review up to 30 days before deployment, voluntary at first, with a path toward mandatory compliance in the US market.',
      zh: 'Demis Hassabis 提議仿照 FINRA 模式成立監管機構,審查前沿模型發布——實驗室在部署前最多 30 天送審,初期自願參與,未來可能在美國市場走向強制合規。',
    },
    tag: { en: 'Frontier & Governance', zh: '前沿進展與治理' },
    sourceName: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com/2026/07/14/deepmind-ceo-calls-for-an-independent-standards-body-to-regulate-frontier-ai/',
    date: '2026-07-14',
  },
  {
    title: {
      en: 'The Comeback of Ontology in AI: Why It Matters',
      zh: '本體論在 AI 領域的回歸:為什麼重要',
    },
    summary: {
      en: 'Argues that ontology — once dismissed as impractical — has become load-bearing infrastructure for AI reliability: large language model hallucination exposed a missing layer of "meaning," and pragmatic, embedded ontologies now function as guardrails that anchor probabilistic output to accountable action.',
      zh: '主張本體論——曾被視為不切實際的學術理論——如今已成為 AI 可靠性的關鍵基礎設施:大型語言模型的幻覺問題暴露出「意義」這一缺失層,務實、嵌入式的本體論如今成為將機率性輸出導向可課責行動的護欄。',
    },
    tag: { en: 'Ontology', zh: '本體論' },
    sourceName: 'GOOD STRATEGY',
    sourceUrl: 'https://goodstrat.com/2026/01/20/the-comeback-of-ontology-in-ai-why-it-matters-2026/',
    date: '2026-01-20',
  },
  {
    title: {
      en: 'Post-AI Ontology: A Philosophical Analysis of the Transformation',
      zh: '後 AI 本體論:一場轉變的哲學分析',
    },
    summary: {
      en: 'Proposes "Post-AI Ontology" as a framework for analyzing AI at the level of conditions of being, rather than only its use or social impact — treating AI as a philosophical rupture in what it means to exist alongside non-human minds, not just a new tool.',
      zh: '提出「後 AI 本體論」框架,主張從存在的條件層次分析 AI,而非僅止於其用途或社會影響——將 AI 視為一場關於「與非人類心智共存意味著什麼」的哲學斷裂,而非單純的新工具。',
    },
    tag: { en: 'Ontology', zh: '本體論' },
    sourceName: 'PhilArchive',
    sourceUrl: 'https://philarchive.org/archive/MAHPOA-2',
    date: '2026-01',
  },
  {
    title: {
      en: 'AI Consciousness in 2026: Current Scientific Consensus and State of the Research',
      zh: '2026 年的 AI 意識:當前科學共識與研究現況',
    },
    summary: {
      en: 'No AI system has been definitively confirmed as conscious as of 2026, but the field has moved away from seeking a binary yes/no answer — researchers now use probabilistic frameworks assessing consciousness across multiple competing theories, developing assessment tools ahead of technologies that may force practical determinations.',
      zh: '截至 2026 年,尚無任何 AI 系統被確認具有意識,但這個領域已不再尋求二元的是非答案——研究者現在採用機率性框架,依多種相互競爭的理論評估意識,並在技術可能迫使做出實際判斷之前,搶先開發評估工具。',
    },
    tag: { en: 'Consciousness', zh: '意識' },
    sourceName: 'The Consciousness AI',
    sourceUrl: 'https://theconsciousness.ai/posts/scientists-race-define-ai-consciousness-2026/',
    date: '2026',
  },
  {
    title: {
      en: 'Why AI might not gain moral standing: Lessons from animal ethics',
      zh: '為什麼 AI 可能無法獲得道德地位:來自動物倫理學的教訓',
    },
    summary: {
      en: 'Wilks, Ladak, and Loughnan (University of Edinburgh) argue that philosophical debate over AI consciousness overlooks psychological research on animal ethics — the same cognitive and social biases that limit moral consideration for animals will likely limit it for AI too, regardless of whether AI ever becomes conscious.',
      zh: '愛丁堡大學的 Wilks、Ladak 與 Loughnan 主張,關於 AI 意識的哲學辯論忽略了動物倫理學的心理學研究成果——限制人類給予動物道德考量的同一套認知與社會偏見,很可能同樣會限制 AI 獲得道德地位,無論 AI 是否真的具有意識。',
    },
    tag: { en: 'Ethics & Moral Status', zh: '倫理與道德地位' },
    sourceName: 'AI and Ethics (Springer) / University of Edinburgh',
    sourceUrl: 'https://www.research.ed.ac.uk/en/publications/why-ai-might-not-gain-moral-standing-lessons-from-animal-ethics/',
    date: '2026-02',
  },
  {
    title: {
      en: 'Subjective Experience in AI Systems: What Do AI Researchers and the Public Believe?',
      zh: 'AI 系統的主觀經驗:AI 研究者與大眾各自相信什麼?',
    },
    summary: {
      en: 'A survey by Dreksler, Caviola, Chalmers, and colleagues finds AI researchers and the public hold sharply different timelines: researchers estimated only a 1% chance of AI with subjective experience existing by 2024, versus the public’s 5%, though both project much higher odds by the end of the century.',
      zh: 'Dreksler、Caviola、Chalmers 等人的一項調查發現,AI 研究者與一般大眾對時程的預期差異懸殊:研究者估計到 2024 年具有主觀經驗的 AI 存在機率僅 1%,大眾則估計為 5%,但兩者都預期到本世紀末機率會大幅提高。',
    },
    tag: { en: 'Empirical Research', zh: '實證研究' },
    sourceName: 'arXiv preprint',
    sourceUrl: 'https://arxiv.org/abs/2506.11945',
    date: '2026-06',
  },
];
