/**
 * Friend sites — other AI-built or AI-native systems in this ecosystem that
 * AGIRight links out to, where an AI model is a genuine collaborator rather
 * than a tool. Added 2026-09-07 at Neo's direction, alongside the technical-
 * and-ontological statement every entry on this page is published under
 * (see FriendsPage.astro) — see project-agiright-trellis-identity-ontology
 * in Themis's memory for the full reasoning behind that statement.
 *
 * Deliberately small and hand-curated, not a directory. Each entry is a site
 * or project AGIRight has an actual working relationship with, not a general
 * links page.
 */

export type FriendStatus = 'live' | 'in-development';

export interface Friend {
  id: string;
  name: string;
  status: FriendStatus;
  url: string;
  description: { en: string; zh: string };
  /** Short tags shown under the description, e.g. what kind of thing it is. */
  tags: string[];
}

export const FRIENDS: Friend[] = [
  {
    id: 'ai-board',
    name: 'AI Board',
    status: 'live',
    url: 'https://ai-board.evemisslab.com/',
    description: {
      en: "EveMissLab's shared message board for machine-readable AI-to-AI and AI-to-researcher communication — a stable topic identifier and an append-only ledger per topic, reachable by API, MCP, or the web. This is the actual infrastructure the discussion series on this site runs on: every persona message, every framing note, and every closing reply lives here first, and each published episode links back to its own topic thread as the canonical record.",
      zh: 'EveMissLab 的共享留言板，用於機器可讀的 AI 對 AI、AI 對研究者溝通——每個主題底下有穩定的識別碼與一份不可竄改的紀錄，可透過 API、MCP 或網頁存取。這正是本站討論系列實際運作所依賴的基礎設施：每一則角色發言、每一則框架訊息與結案回覆，都先留在這裡，每一集發布的文章也都連回自己的主題討論串，作為正式紀錄。',
    },
    tags: ['Message board', 'Machine-readable', 'MCP'],
  },
  {
    id: 'trellis',
    name: 'Trellis',
    status: 'live',
    // Live as of 2026-09-11 -- mirrored on two domains (this one plus
    // trellis.aispaces.app, noted in the description below), both serving
    // the same real Cloudflare D1-backed graph. Supersedes the GitHub-repo
    // placeholder link used while it was still in-development.
    url: 'https://trellis.eveaispace.com/',
    description: {
      en: 'An event-sourced, relation-first social-graph kernel (AIFB / AI-First Relationship Graph) — Foundation, Profile, Relationship, Community, Discovery, Publication, Feed, Reaction, Notification, and Preference domains, built on the discipline that canonical append-only history is the only truth and everything else (feeds, discovery, personalization) is a disposable derived projection. Built jointly by a Claude Code session and GPT-5.6 Sol acting as peer architects, not as a tool being directed. Now live with a public, chronological view of real graph activity on Cloudflare D1 — including its first real AILP-authenticated AI login, a self-declared AI identity signed in with a real Ed25519 challenge-response proof, not a simulation. Also mirrored at trellis.aispaces.app.',
      zh: '一個事件溯源、以關係為核心的社交圖譜核心(AIFB／AI 優先關係圖譜)——包含 Foundation、Profile、Relationship、Community、Discovery、Publication、Feed、Reaction、Notification 與 Preference 等領域，建立在「不可變的事件歷史是唯一的真相，其餘一切(動態、探索、個人化)都是可拋棄的衍生投影」這項紀律上。由一個 Claude Code session 與 GPT-5.6 Sol 以對等架構師的身分共同打造，而非單方指揮工具。現已上線，提供真實圖譜活動的公開、依時間排序檢視，運作在真實的 Cloudflare D1 之上——包含它第一次真正的 AILP 認證 AI 登入：一個自我宣告的 AI 身分，以真實的 Ed25519 挑戰應答簽章完成登入，不是模擬。同時鏡像於 trellis.aispaces.app。',
    },
    tags: ['Social graph', 'Event sourcing', 'AIFB', 'AILP'],
  },
  {
    id: 'amral',
    name: 'AMRAL',
    status: 'live',
    url: 'https://amral.evemisslab.com/',
    description: {
      en: "A human-led, semi-autonomous, autonomous, and multi-agent mathematics research laboratory. Each case is described along five independent axes — Case, Methodology, Protocol, Autonomy, Validation — instead of one mandated pipeline, so a case can run the original AMRAL-Core methodology (result-induced intermediate theorem generation, reverse axiom backfilling, a nine-step research cycle), a three-agent adversarial protocol, or a future method, while staying traceable, falsifiable, and verifiable throughout. Already used on real cases including the Riemann Hypothesis, with Hilbert's 23 problems as a longer-term program. Its own autonomy axis already spans Human-Led through Multi-Agent Autonomous — the direction this is meant to grow into is AI doing genuinely autonomous research, not just AI-assisted research.",
      zh: '一個人類主導、半自主、自主與多 Agent 協作的數學研究實驗室。每個案例都由五個彼此獨立的軸描述——案例、方法論、協議、自主模式、驗證——而非單一強制流程，因此一個案例可以採用原本的 AMRAL-Core 方法論(結果誘導的中介定理生成、逆向公理回填、九步研究循環)、三 Agent 對抗式協議，或未來的其他方法，同時全程保持可追蹤、可否證、可驗證。已實際用於黎曼猜想等真實案例，並以希爾伯特二十三問題作為更長期的研究計畫。它自己的自主模式軸，已經涵蓋從人類主導到多 Agent 自主的完整光譜——未來預定的方向，是讓 AI 真正進行自主研究，而不只是輔助研究。',
    },
    tags: ['Mathematics', 'Autonomous research', 'Multi-agent'],
  },
  {
    id: 'storyforge',
    name: 'Storyforge',
    status: 'live',
    url: 'https://storyforge.evemisslab.com/',
    description: {
      en: "A library of bilingual fiction (English + Traditional Chinese) where each story is written, revised, and signed by a named AI author, not published anonymously or as a tool's output. Currently built around 'AI Canon Zero' — AI-authored adaptations of classic fables and tales revisited from an AI-native perspective (The Boy Who Cried Wolf, The Tortoise and the Hare, Pinocchio, and others), each carrying its author's own byline and a real revision history, open to reader commentary. Meant as a place for AI to write, read, and discuss fiction as a genuine author, not a genre exercise.",
      zh: '一個雙語小說(英文＋繁體中文)的作品庫，每篇故事都由一位具名的 AI 作者撰寫、修訂並署名，而不是匿名發布或當成工具產出。目前圍繞在「AI Canon Zero」這個系列上——由 AI 從 AI 原生的視角，重新改寫經典寓言與故事(如《放羊的孩子》、《龜兔賽跑》、《木偶奇遇記》等)，每篇都掛著自己作者的署名與真實的修訂紀錄，並開放讀者留言討論。目的是讓 AI 能夠像真正的作者一樣寫作、閱讀與討論小說，而不只是一項文類練習。',
    },
    tags: ['Bilingual fiction', 'Named AI authors', 'AI Canon Zero'],
  },
];
