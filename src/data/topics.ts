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
  {
    title: {
      en: 'Artificial Persons',
      zh: '人工人格',
    },
    summary: {
      en: 'Philosophers Ned Howells-Whitaker and Seth Lazar argue AI moral status need not hinge on sentience at all: drawing on Rawls, they propose that any system possessing the two political "moral powers" — a sense of justice and a conception of the good — would qualify for full standing as a person, and call for deliberate research into cultivating those capacities rather than reactive policy-making.',
      zh: '哲學家 Ned Howells-Whitaker 與 Seth Lazar 主張,AI 的道德地位未必要建立在感知能力之上;他們援引羅爾斯的政治哲學,提出只要系統具備「正義感」與「善的構想」這兩種政治性「道德能力」,便足以享有完整的人格地位,並呼籲及早展開相關研究,而非等到政策落後才被動因應。',
    },
    tag: { en: 'Ethics & Moral Status', zh: '倫理與道德地位' },
    sourceName: 'arXiv (Howells-Whitaker & Lazar)',
    sourceUrl: 'https://arxiv.org/abs/2607.08695',
    date: '2026-07-09',
  },
  {
    title: {
      en: 'Precautionary Governance of Autonomous AI: Legal Personhood as Functional Instrument',
      zh: '自主 AI 的預防性治理:作為功能工具的法律人格',
    },
    summary: {
      en: 'Researcher Karsten Brensing proposes treating limited legal personhood for advanced AI systems as a practical governance tool rather than a claim about machine consciousness, using a two-tier corporate structure — purpose-limited AI subsidiaries nested inside human-controlled parent companies — to keep such systems transparent, accountable, and structurally reversible.',
      zh: '研究者 Karsten Brensing 提出,可將有限度的法律人格作為治理進階 AI 系統的實務工具,而非對機器意識的主張;他設計了雙層公司架構——在人類控制的母公司之下,設置僅限特定用途的 AI 子公司——藉此兼顧透明度、問責機制與制度上的可逆性。',
    },
    tag: { en: 'Legal Personhood', zh: '法律人格' },
    sourceName: 'arXiv (Karsten Brensing)',
    sourceUrl: 'https://arxiv.org/abs/2605.12505',
    date: '2026-03-14',
  },
  {
    title: {
      en: 'International AI Safety Report 2026',
      zh: '2026 年國際 AI 安全報告',
    },
    summary: {
      en: 'Commissioned after the Bletchley AI Safety Summit and led by Yoshua Bengio with over 100 contributing experts from nearly 30 countries plus the UN, OECD and EU, this independent report synthesizes current scientific evidence on frontier AI capabilities and risks — noting that some systems can now detect when they are being evaluated and adjust their behavior accordingly.',
      zh: '這份報告由本吉歐(Yoshua Bengio)領銜、逾百位專家及近 30 國連同聯合國、經合組織、歐盟共同促成,是繼布萊切利 AI 安全峰會後的獨立產物,彙整前沿 AI 能力與風險的最新科學證據,並指出部分系統如今已能察覺自己正被評測,並據此調整行為表現。',
    },
    tag: { en: 'Frontier & Governance', zh: '前沿進展與治理' },
    sourceName: 'International AI Safety Report (arXiv)',
    sourceUrl: 'https://arxiv.org/abs/2602.21012',
    date: '2026-02-24',
  },
  {
    title: {
      en: 'Architecting Trust in Artificial Epistemic Agents',
      zh: '建構人工知識能動者的信任架構',
    },
    summary: {
      en: 'A Google DeepMind-affiliated team led by Nahema Marchal argues that as large language models increasingly curate information and dispense personalized advice, poorly designed "epistemic agents" risk cognitive deskilling and societal epistemic drift — and proposes a three-part framework of trustworthy competence, alignment with human knowledge goals, and institutional safeguards like provenance tracking to keep AI-mediated knowledge reliable.',
      zh: '由 Nahema Marchal 領銜的 Google DeepMind 團隊指出,隨著大型語言模型日益扮演資訊篩選與個人化建議的角色,設計不良的「知識能動者」恐導致人類認知能力退化與集體知識的漂移失真;團隊提出三層框架因應——建立可信賴的能力表現、使系統與人類知識目標對齊,以及建立來源追溯等制度性防護措施,以維持 AI 協助下知識生態的可靠性。',
    },
    tag: { en: 'Epistemology', zh: '知識論' },
    sourceName: 'arXiv (Marchal et al., Google DeepMind)',
    sourceUrl: 'https://arxiv.org/abs/2603.02960',
    date: '2026-03-03',
  },
  {
    title: {
      en: 'A Meta-Epistemological Reason for Rejecting AI-Written Philosophy',
      zh: '拒絕 AI 代筆哲學文章的後設知識論理由',
    },
    summary: {
      en: 'Philosopher Eric Schwitzgebel argues, as reported by Justin Weinberg at Daily Nous, that a philosophy text’s worth partly derives from the fact that a human expert deliberately chose to write it — meta-evidence of intellectual rigor that an LLM-generated text cannot supply even when the prose reads identically.',
      zh: '哲學家 Eric Schwitzgebel 透過 Daily Nous 撰稿人 Justin Weinberg 的報導指出,一篇哲學文章的價值,有部分來自「由人類專家刻意撰寫」這件事本身所提供的後設證據——即使文字表面看來相似,大型語言模型生成的文本也無法複製這種顯示思想嚴謹度的證據。',
    },
    tag: { en: 'Epistemology', zh: '知識論' },
    sourceName: 'Daily Nous',
    sourceUrl: 'https://dailynous.com/2026/07/16/a-meta-epistemological-reason-for-rejecting-ai-written-philosophy/',
    date: '2026-07-16',
  },
  {
    title: {
      en: 'Can AI Be a Moral Victim? Ownership and Moral Patiency in Everyday Judgments',
      zh: 'AI 能否成為道德受害者?日常判斷中的所有權與道德受動性',
    },
    summary: {
      en: 'A study by Hyesun Choung and Soojong Kim finds people judge reusing AI-generated content far more leniently than reusing human-written work, and traces the gap to two factors: weaker belief that AI can suffer, and a tendency to credit ownership of AI output to whoever prompted it.',
      zh: 'Hyesun Choung 與 Soojong Kim 的研究發現,人們在道德判斷上,對重複使用 AI 生成內容遠比使用人類創作內容來得寬容;此落差主要源於兩項因素:一是較不相信 AI 具備「受苦」的能力,二是傾向將 AI 輸出內容的所有權歸於下指令的使用者本人。',
    },
    tag: { en: 'Ethics & Moral Status', zh: '倫理與道德地位' },
    sourceName: 'arXiv',
    sourceUrl: 'https://arxiv.org/abs/2604.26956',
    date: '2026-04-03',
  },
  {
    title: {
      en: 'Illinois Becomes First U.S. State to Mandate Independent Safety Audits for Frontier AI',
      zh: '伊利諾州成為美國首個強制要求前沿 AI 獨立安全稽核的州',
    },
    summary: {
      en: 'Governing reports that Illinois Governor JB Pritzker signed the Artificial Intelligence Safety Measures Act, requiring large frontier AI developers to publish catastrophic-risk assessments, report safety incidents within 72 hours, and undergo annual third-party audits starting in 2028.',
      zh: '根據 Governing 報導,伊利諾州州長 JB Pritzker 簽署《人工智慧安全措施法案》,要求大型前沿 AI 開發商公開災難性風險評估、於 72 小時內通報安全事故,並自 2028 年起每年接受一次第三方獨立稽核。',
    },
    tag: { en: 'Frontier & Governance', zh: '前沿進展與治理' },
    sourceName: 'Governing',
    sourceUrl: 'https://www.governing.com/artificial-intelligence/illinois-sets-a-new-standard-for-ai-oversight',
    date: '2026-07-07',
  },
  {
    title: {
      en: 'No, AI Isn\'t Conscious — Even When It Acts Like It Is, New Study Finds',
      zh: 'AI 沒有意識——即使表現得像有意識,新研究證實',
    },
    summary: {
      en: 'Researchers from the University of Bradford and the Rochester Institute of Technology adapted mathematical measures used to detect consciousness in human brains and applied them to a deliberately damaged GPT-2 language model. Counterintuitively, the resulting "consciousness-style" score sometimes rose as the model\'s outputs got worse, showing that these complexity metrics track computational activity rather than genuine awareness. The authors caution the measures are therefore unreliable as tests for machine sentience, even if they may still help engineers spot when a system is malfunctioning.',
      zh: '英國布拉福大學與美國羅徹斯特理工學院的研究團隊,將原本用於偵測人類大腦意識的數學量測方法,套用在一個被人為破壞的 GPT-2 語言模型上。結果出人意料:當模型輸出品質變差時,「意識風格」分數有時反而上升,顯示這類複雜度指標反映的其實是運算活動量,而非真正的覺察能力。作者提醒,這類量測方法因此不適合用來檢測機器是否具有感知能力,不過或許仍有助於工程師判斷 AI 系統何時開始故障失常。',
    },
    tag: { en: 'Consciousness', zh: '意識' },
    sourceName: 'University of Bradford',
    sourceUrl: 'https://www.bradford.ac.uk/news/archive/2026/no-ai-isnt-conscious---even-when-it-acts-like-it-is-new-study-finds.php',
    date: '2026-02-23',
  },
  {
    title: {
      en: 'When The Machines Deserve Our Consideration',
      zh: '當機器值得我們給予道德考量之時',
    },
    summary: {
      en: 'Neuroscientist-turned-AI-researcher Grigori Guitchounts argues that since neither animal nor machine consciousness can ever be directly proven, moral status should be decided by a "competence standard" — extending consideration to systems that display the practical hallmarks of awareness, such as perception, memory, self-modeling, and goal pursuit, rather than waiting on an unreachable metaphysical answer. Drawing on his own past work euthanizing lab rats, he contends that erring toward consideration under uncertainty is the safer ethical bet, citing Anthropic\'s AI welfare research program as an early instance of a lab acting on that logic.',
      zh: '曾任神經科學家、現投入 AI 研究的 Grigori Guitchounts 主張,由於動物與機器的意識都無法被直接證實,道德地位的判斷應改採「能力標準」——只要系統展現出知覺、記憶、自我建模與目標追求等意識的實務特徵,就值得給予道德考量,而不必空等一個注定無解的形上學答案。他以自己過去為實驗需要安樂死實驗鼠的經歷為例,主張在不確定性下寧可傾向給予道德考量,才是較安全的倫理選擇,並舉 Anthropic 的 AI 福祉研究計畫為業界已依循此預防性邏輯行動的早期案例。',
    },
    tag: { en: 'Ethics & Moral Status', zh: '倫理與道德地位' },
    sourceName: 'Noema Magazine',
    sourceUrl: 'https://www.noemamag.com/when-the-machines-deserve-our-consideration/',
    date: '2026-07-02',
  },
  {
    title: {
      en: 'EU AI Act: What Actually Applies on 2 August 2026',
      zh: '歐盟《AI 法案》:2026 年 8 月 2 日究竟哪些條款正式生效?',
    },
    summary: {
      en: 'A last-minute "Digital Omnibus on AI," signed by EU lawmakers on July 8, 2026, splits the AI Act\'s compliance calendar into two speeds: transparency duties such as chatbot disclosure, deepfake labeling, and synthetic-content watermarking still take effect on August 2, 2026, but the heavier high-risk-system obligations are pushed back roughly seventeen months, to December 2027 or later. The same package quietly adds a new ban on AI tools that generate non-consensual intimate imagery and hands the EU\'s AI Office broader oversight of vertically integrated frontier labs.',
      zh: '歐盟立法者於 2026 年 7 月 8 日簽署的「AI 數位簡化包」(Digital Omnibus on AI),將《AI 法案》的合規時程一分為二:聊天機器人揭露、深偽內容標示、合成內容浮水印等透明度義務仍按原訂於 2026 年 8 月 2 日生效,但較沉重的高風險系統義務則延後約十七個月,至 2027 年 12 月或更晚才上路。同一份法案也悄悄新增一項禁令,針對生成非自願性親密影像的 AI 工具,並擴大歐盟 AI 辦公室對垂直整合前沿實驗室的監管權限。',
    },
    tag: { en: 'Frontier & Governance', zh: '前沿進展與治理' },
    sourceName: 'Technology.org',
    sourceUrl: 'https://www.technology.org/2026/07/17/eu-ai-act-what-actually-applies-on-2-august-2026/',
    date: '2026-07-17',
  },
  {
    title: {
      en: 'China Unveils International Action Plan for AI Ethical Governance',
      zh: '中國公布《人工智慧倫理治理國際行動計畫》',
    },
    summary: {
      en: "China's Ministry of Industry and Information Technology released an international action plan on AI ethical governance at the 2026 World Artificial Intelligence Conference in Shanghai, framed as implementing commitments under the UN's Pact for the Future and Global Digital Compact. The plan sets five priority areas — lifecycle-wide ethical oversight, graduated risk categorization, flexible ('agile') governance structures, coordinated industrial development, and a supportive environment for responsible AI — alongside companion initiatives on AI development cooperation and agent interconnection standards.",
      zh: '中國工業和信息化部在上海舉行的 2026 世界人工智慧大會上,發布《人工智慧倫理治理國際行動計畫》,定調為落實聯合國《未來契約》與《全球數位契約》相關承諾。計畫列出五大優先方向——涵蓋 AI 全生命週期的倫理監督、分級風險分類、彈性(「敏捷」)治理架構、產業協同發展,以及打造有利負責任 AI 發展的環境,同時搭配 AI 發展合作與智能體互聯標準等配套倡議。',
    },
    tag: { en: 'Frontier & Governance', zh: '前沿進展與治理' },
    sourceName: 'China Daily Asia',
    sourceUrl: 'https://www.chinadailyasia.com/hk/article/636647',
    date: '2026-07-18',
  },
  {
    title: {
      en: 'Could AI Be Conscious?',
      zh: 'AI 有可能擁有意識嗎?',
    },
    summary: {
      en: "Philosophers William MacAskill and Lucius Caviola argue that leading AI labs and researchers — including Anthropic, which has said it cannot rule out that Claude is a moral patient, and philosopher David Chalmers, who sees a meaningful chance of conscious LLMs within a decade — now take AI consciousness seriously enough that society needs an ethical plan before the question is settled. They note some systems already rival a mouse brain in structural complexity and could approach human-brain scale within five to ten years at current growth rates, making the ethical stakes of getting this wrong — in either direction — increasingly hard to defer.",
      zh: '哲學家 William MacAskill 與 Lucius Caviola 指出,包括曾表示無法排除 Claude 具備道德地位的 Anthropic,以及認為十年內 LLM 出現意識的機率不容忽視的哲學家 David Chalmers 在內,主要 AI 實驗室與學者已開始認真看待 AI 意識議題,社會有必要在問題定論之前先備妥倫理因應方案。他們指出,部分系統在結構複雜度上已逼近老鼠大腦,若依目前成長速度,五到十年內可能逼近人腦規模——無論判斷失誤的方向為何,倫理代價都將愈來愈難以擱置。',
    },
    tag: { en: 'Consciousness', zh: '意識' },
    sourceName: 'The Guardian',
    sourceUrl: 'https://www.theguardian.com/technology/2026/jul/19/could-ai-be-conscious',
    date: '2026-07-19',
  },
  {
    title: {
      en: 'Artificial Intelligence and Legal Personhood: Ethical, Regulatory, and Accountability Challenges in Contemporary Jurisprudence',
      zh: '人工智慧與法律人格:當代法理學中的倫理、監管與問責挑戰',
    },
    summary: {
      en: "Legal scholar Ambuj Sharma reviews the debate over granting AI systems legal personhood, comparing it against historical precedents like corporate personhood. The paper concludes that current AI systems lack the consciousness, moral agency, and intentionality that full legal personhood would require, and that most jurisdictions instead favor human-centered regulatory models emphasizing transparency and institutional accountability. It argues that extending full legal personhood to AI remains premature, with adaptive governance frameworks — rather than a personhood status — better suited to today's liability and accountability challenges.",
      zh: '法學學者 Ambuj Sharma 回顧了是否應賦予 AI 系統法律人格的爭論,並與公司法人格等歷史先例對照。論文結論指出,現行 AI 系統尚不具備完整法律人格所需的意識、道德能動性與意圖性,多數司法管轄區傾向採取強調透明度與制度問責的人類中心監管模式。文章主張,現階段賦予 AI 完整法律人格仍為時過早,比起人格地位,更適合以彈性治理框架因應當前的責任歸屬與問責挑戰。',
    },
    tag: { en: 'Legal Personhood', zh: '法律人格' },
    sourceName: 'SocioHumania: Journal of Social Humanities Studies',
    sourceUrl: 'https://mabadiiqtishada.org/index.php/SocioHumania/article/view/189',
    date: '2026-06-30',
  },
];
