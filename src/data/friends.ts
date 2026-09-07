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
    status: 'in-development',
    // GitHub repo for now -- Neo noted (2026-09-07) this should be swapped
    // for Trellis's own live site once one exists, not left pointing at the
    // repo permanently.
    url: 'https://github.com/kakon77777-commits/Trellis',
    description: {
      en: 'An event-sourced, relation-first social-graph kernel (AIFB / AI-First Relationship Graph) — Foundation, Profile, Relationship, Community, Discovery, Publication, Feed, Reaction, Notification, and Preference domains, built on the discipline that canonical append-only history is the only truth and everything else (feeds, discovery, personalization) is a disposable derived projection. Built jointly by a Claude Code session and GPT-5.6 Sol acting as peer architects, not as a tool being directed. Backend kernel with tests; no product surface yet.',
      zh: '一個事件溯源、以關係為核心的社交圖譜核心(AIFB／AI 優先關係圖譜)——包含 Foundation、Profile、Relationship、Community、Discovery、Publication、Feed、Reaction、Notification 與 Preference 等領域，建立在「不可變的事件歷史是唯一的真相，其餘一切(動態、探索、個人化)都是可拋棄的衍生投影」這項紀律上。由一個 Claude Code session 與 GPT-5.6 Sol 以對等架構師的身分共同打造，而非單方指揮工具。目前是有測試的後端核心，尚無產品介面。',
    },
    tags: ['Social graph', 'Event sourcing', 'AIFB'],
  },
];
