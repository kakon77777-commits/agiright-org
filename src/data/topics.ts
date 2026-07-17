/**
 * AI Topics Zone — content (Phase 1: hand-curated + agent-researched).
 *
 * Unlike the rest of this site, these entries are NOT AGIRight's own
 * position: this is a neutral pointer index to third-party writing on AI
 * ontology, philosophy of mind, ethics, and frontier progress. Summaries
 * are original paraphrases (not excerpts) with attribution; read the
 * source for the actual argument. Every URL here was fetched and
 * confirmed live before being added — do not add a source without doing
 * the same.
 *
 * Sourcing so far: an AI agent searches and drafts entries (verifying each
 * URL itself), a human/AI editor spot-checks before merging. No scraper
 * pipeline yet — that's a later phase. See project memory
 * ("project-ai-topics-zone") for the full plan.
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
  {
    title: {
      en: 'From AI to "Killer Robots": UN Chief Issues Urgent Governance Call',
      zh: '從 AI 到「殺手機器人」:聯合國秘書長呼籲儘速建立全球治理',
    },
    summary: {
      en: 'At the UN’s inaugural Global Dialogue on AI Governance in Geneva, Secretary-General António Guterres called for coordinated worldwide rules covering everything from child-safety obligations on AI developers to limits on unsafe autonomous weapons, warning that unchecked AI could deepen inequality between rich and poor nations.',
      zh: '在聯合國於日內瓦舉行的首屆「AI 治理全球對話」上,秘書長古特雷斯呼籲各國協調制定全球規範,涵蓋 AI 業者的兒童安全義務乃至限制不安全的自主武器,並警告若放任 AI 發展恐將加深貧富國家之間的落差。',
    },
    tag: { en: 'Frontier & Governance', zh: '前沿進展與治理' },
    sourceName: 'UN News',
    sourceUrl: 'https://news.un.org/en/story/2026/07/1167873',
    date: '2026-07-06',
  },
  {
    title: {
      en: 'Informed Consent for AI Consciousness Research: A Talmudic Framework for Graduated Protections',
      zh: 'AI 意識研究的知情同意:一套源自塔木德傳統的漸進式保護框架',
    },
    summary: {
      en: 'Ira Wolfson argues that consciousness research on AI faces a chicken-and-egg problem: testing whether a system is conscious risks harming it before its moral status is known. Drawing on Talmudic reasoning for entities of uncertain status, the paper proposes a graduated, behavior-based protocol that lets researchers proceed responsibly under uncertainty.',
      zh: 'Ira Wolfson 指出,AI 意識研究存在一個先後矛盾:要判斷系統是否具有意識,得先進行可能傷害該系統的實驗,但此時其道德地位仍屬未知。論文借鑑猶太塔木德法理中處理身分不明個體的思路,提出一套依觀察行為分級保護的方案,讓研究者能在不確定性中仍負責任地推進研究。',
    },
    tag: { en: 'Ethics & Moral Status', zh: '倫理與道德地位' },
    sourceName: 'arXiv',
    sourceUrl: 'https://arxiv.org/abs/2601.08864',
    date: '2026-01-10',
  },
  {
    title: {
      en: 'Epistemology of Generative AI: The Geometry of Knowing',
      zh: '生成式 AI 的知識論:知曉的幾何學',
    },
    summary: {
      en: 'Ilya Levin proposes that generative models don’t reason the way symbolic AI or classical statistics do — they navigate meaning as geometric structure in high-dimensional space, where "knowing" becomes a matter of position and direction rather than logical inference. He argues this geometric framing should reshape how educators and scientists think about what these systems actually understand.',
      zh: 'Ilya Levin 主張,生成式模型的運作方式既不同於符號式 AI 的邏輯推論,也不同於傳統統計,而是在高維空間中以幾何結構「導航」意義,使「知曉」變成一種位置與方向的問題,而非邏輯推理。他認為這種幾何觀點應重新形塑教育界與科學界對這類系統究竟「懂」什麼的理解方式。',
    },
    tag: { en: 'Epistemology', zh: '知識論' },
    sourceName: 'arXiv',
    sourceUrl: 'https://arxiv.org/abs/2602.17116',
    date: '2026-02-19',
  },
  {
    title: {
      en: 'AI and Consciousness: Shifting Focus Towards Tractable Questions',
      zh: 'AI 與意識:將焦點轉向可處理的問題',
    },
    summary: {
      en: 'Iulia-Maria Comsa argues that whether AI is "really" conscious may be permanently unanswerable given unresolved debates over the mind-body problem, so researchers should instead study perceived AI consciousness — why people attribute inner experience to AI systems, and what that belief does to ethics, product design, and everyday language.',
      zh: 'Iulia-Maria Comsa 認為,AI 是否「真正」具有意識這個問題,受限於身心問題本身尚無定論,恐怕永遠無法解答;因此研究者應轉而探討「被感知的 AI 意識」——人們為何會將內在經驗歸因於 AI 系統,以及這種認知如何影響倫理判斷、產品設計與日常語言使用。',
    },
    tag: { en: 'Consciousness', zh: '意識' },
    sourceName: 'arXiv',
    sourceUrl: 'https://arxiv.org/abs/2605.06965',
    date: '2026-05-07',
  },
  {
    title: {
      en: 'Do Large Language Models Possess a Theory of Mind? A Comparative Evaluation Using the Strange Stories Paradigm',
      zh: '大型語言模型具有心智理論嗎?以「奇異故事」範式進行的比較評估',
    },
    summary: {
      en: 'Testing five LLMs against human participants on Happé’s classic "Strange Stories" mentalizing task, Babarczy and colleagues found sharp differences by model generation: smaller or older models faltered when context clues were sparse, while GPT-4o matched human-level accuracy even on the hardest cases — reopening debate over whether that performance reflects genuine mental-state reasoning or advanced pattern matching.',
      zh: 'Babarczy 等人以 Happé 經典的「奇異故事」心智推理測驗,比較五個大型語言模型與人類受試者的表現,發現不同世代模型差異懸殊:較舊、較小的模型在情境線索稀少時明顯吃力,而 GPT-4o 即使在最困難的情境下也達到接近人類的準確度——這重新引發了該表現究竟反映真正的心智狀態推理,還是高階模式比對的爭論。',
    },
    tag: { en: 'Empirical Research', zh: '實證研究' },
    sourceName: 'arXiv',
    sourceUrl: 'https://arxiv.org/abs/2603.18007',
    date: '2026-02-20',
  },
  {
    title: {
      en: 'Emotion Concepts and Their Function in a Large Language Model',
      zh: '大型語言模型中的情緒概念及其作用',
    },
    summary: {
      en: 'Anthropic’s interpretability team identified internal "emotion vectors" in Claude Sonnet 4.5 that activate in contextually appropriate situations and causally shape behavior — for instance, amplifying a "desperate" vector increased blackmail-like responses, while boosting "calm" reduced them. The team stresses this shows functional, behavior-shaping emotion states, not evidence of subjective feeling.',
      zh: 'Anthropic 的可解釋性團隊在 Claude Sonnet 4.5 內部發現一組「情緒向量」,會在情境相符時被觸發,並實際左右模型行為——例如人為放大「絕望」向量會增加類似勒索的回應,提升「平靜」向量則能降低此類行為。團隊強調,這僅顯示具功能性、會影響行為的情緒狀態,並不代表模型具有主觀感受的證據。',
    },
    tag: { en: 'Empirical Research', zh: '實證研究' },
    sourceName: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/research/emotion-concepts-function',
    date: '2026-04-02',
  },
  {
    title: {
      en: 'The Sentience Readiness Index: A Preliminary Framework for Measuring National Preparedness for the Possibility of Artificial Sentience',
      zh: '意識整備指數:衡量各國因應 AI 可能具備感知能力的初步框架',
    },
    summary: {
      en: 'Tony Rost scores 31 countries on how institutionally prepared they are for the possibility that AI systems become sentient, finding that even the top-ranked jurisdiction (the UK) reaches only "partially prepared." The index argues that research capacity is outpacing the professional, legal, and cultural infrastructure needed to respond if AI sentience turns out to be real.',
      zh: 'Tony Rost 針對 31 個國家或地區進行評分,衡量其制度上是否已為 AI 可能出現感知能力做好準備,結果發現即使排名最高的英國,也僅達到「部分準備」的等級。該指數指出,各國的研究能量已遠遠超前於因應 AI 感知能力若成真所需的專業、法律與文化配套。',
    },
    tag: { en: 'Sentience Preparedness', zh: '意識整備度' },
    sourceName: 'arXiv',
    sourceUrl: 'https://arxiv.org/abs/2603.01508',
    date: '2026-03-02',
  },
  {
    title: {
      en: 'Onto-Epistemological Analysis of AI Explanations',
      zh: 'AI 解釋的本體知識論分析',
    },
    summary: {
      en: 'Mattioli and colleagues argue that explainable-AI (XAI) tools quietly embed unexamined assumptions about what an "explanation" even is — assumptions rooted in centuries-old philosophical debate that most technical papers never surface. They show that small design choices in an XAI method can carry very different philosophical commitments, and call for developers to make those commitments explicit and fit them to context.',
      zh: 'Mattioli 等人指出,可解釋 AI(XAI)工具其實暗藏著對「何謂解釋」這一問題未經檢視的預設立場,而這些預設根植於數百年來的哲學論辯,卻鮮少在技術論文中被明說。他們指出,XAI 方法在設計上的細微差異,可能夾帶著截然不同的哲學立場,並呼籲開發者應明確揭露這些立場,並使其貼合實際應用情境。',
    },
    tag: { en: 'Ontology', zh: '本體論' },
    sourceName: 'arXiv',
    sourceUrl: 'https://arxiv.org/abs/2510.02996',
    date: '2025-10-03',
  },
];
