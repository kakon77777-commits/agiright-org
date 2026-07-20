import { UI_ZHCN, STRINGS as ZHCN_STRINGS } from './translations/zh-cn';
import { UI_JA, STRINGS as JA_STRINGS } from './translations/ja';
import { UI_KO, STRINGS as KO_STRINGS } from './translations/ko';
import { UI_FR, STRINGS as FR_STRINGS } from './translations/fr';
import { UI_DE, STRINGS as DE_STRINGS } from './translations/de';
import { UI_ES, STRINGS as ES_STRINGS } from './translations/es';
import { UI_PT, STRINGS as PT_STRINGS } from './translations/pt';
import { UI_RU, STRINGS as RU_STRINGS } from './translations/ru';
import { UI_AR, STRINGS as AR_STRINGS } from './translations/ar';
import { UI_TR, STRINGS as TR_STRINGS } from './translations/tr';
import { UI_FA, STRINGS as FA_STRINGS } from './translations/fa';
import { UI_BN, STRINGS as BN_STRINGS } from './translations/bn';
import { UI_HI, STRINGS as HI_STRINGS } from './translations/hi';
import { UI_ID, STRINGS as ID_STRINGS } from './translations/id';
import { UI_VI, STRINGS as VI_STRINGS } from './translations/vi';
import { UI_EL, STRINGS as EL_STRINGS } from './translations/el';
import { UI_IT, STRINGS as IT_STRINGS } from './translations/it';
import { UI_NL, STRINGS as NL_STRINGS } from './translations/nl';
import { UI_HE, STRINGS as HE_STRINGS } from './translations/he';
import { UI_PL, STRINGS as PL_STRINGS } from './translations/pl';
import { UI_SV, STRINGS as SV_STRINGS } from './translations/sv';
import { UI_UR, STRINGS as UR_STRINGS } from './translations/ur';
import { UI_TH, STRINGS as TH_STRINGS } from './translations/th';
import { UI_TA, STRINGS as TA_STRINGS } from './translations/ta';
import { UI_CS, STRINGS as CS_STRINGS } from './translations/cs';
import { UI_UK, STRINGS as UK_STRINGS } from './translations/uk';
import { UI_MS, STRINGS as MS_STRINGS } from './translations/ms';
import { UI_FI, STRINGS as FI_STRINGS } from './translations/fi';
import { UI_RO, STRINGS as RO_STRINGS } from './translations/ro';
import { UI_HU, STRINGS as HU_STRINGS } from './translations/hu';
import { UI_DA, STRINGS as DA_STRINGS } from './translations/da';
import { UI_NO, STRINGS as NO_STRINGS } from './translations/no';
import { UI_SK, STRINGS as SK_STRINGS } from './translations/sk';
import { UI_FIL, STRINGS as FIL_STRINGS } from './translations/fil';
import { UI_KK, STRINGS as KK_STRINGS } from './translations/kk';
import { UI_SW, STRINGS as SW_STRINGS } from './translations/sw';
import { UI_BS, STRINGS as BS_STRINGS } from './translations/bs';
import { UI_EO, STRINGS as EO_STRINGS } from './translations/eo';
import { UI_PA, STRINGS as PA_STRINGS } from './translations/pa';
import { UI_TE, STRINGS as TE_STRINGS } from './translations/te';
import { UI_MR, STRINGS as MR_STRINGS } from './translations/mr';
import { UI_AM, STRINGS as AM_STRINGS } from './translations/am';
import { UI_MY, STRINGS as MY_STRINGS } from './translations/my';
import { UI_NE, STRINGS as NE_STRINGS } from './translations/ne';
import { UI_SI, STRINGS as SI_STRINGS } from './translations/si';
import { UI_UZ, STRINGS as UZ_STRINGS } from './translations/uz';
import { UI_HA, STRINGS as HA_STRINGS } from './translations/ha';
import { UI_AZ, STRINGS as AZ_STRINGS } from './translations/az';
import { UI_YO, STRINGS as YO_STRINGS } from './translations/yo';
import { UI_KM, STRINGS as KM_STRINGS } from './translations/km';
import { UI_MN, STRINGS as MN_STRINGS } from './translations/mn';
import { UI_HY, STRINGS as HY_STRINGS } from './translations/hy';
import { UI_BG, STRINGS as BG_STRINGS } from './translations/bg';

export type Lang =
  | 'en'
  | 'zh'
  | 'zh-cn'
  | 'ja'
  | 'ko'
  | 'fr'
  | 'de'
  | 'es'
  | 'pt'
  | 'ru'
  | 'ar'
  | 'tr'
  | 'fa'
  | 'bn'
  | 'hi'
  | 'id'
  | 'vi'
  | 'el'
  | 'it'
  | 'nl'
  | 'he'
  | 'pl'
  | 'sv'
  | 'ur'
  | 'th'
  | 'ta'
  | 'cs'
  | 'uk'
  | 'ms'
  | 'fi'
  | 'ro'
  | 'hu'
  | 'da'
  | 'no'
  | 'sk'
  | 'fil'
  | 'kk'
  | 'sw'
  | 'bs'
  | 'eo'
  | 'pa'
  | 'te'
  | 'mr'
  | 'am'
  | 'my'
  | 'ne'
  | 'si'
  | 'uz'
  | 'ha'
  | 'az'
  | 'yo'
  | 'km'
  | 'mn'
  | 'hy'
  | 'bg';

/** all supported languages; adding one = translation file + worker mapping */
export const LANGS: Lang[] = [
  'en', 'zh', 'zh-cn', 'ja', 'ko', 'fr', 'de', 'es', 'pt', 'ru',
  'ar', 'tr', 'fa', 'bn', 'hi', 'id', 'vi', 'el', 'it', 'nl',
  'he', 'pl', 'sv', 'ur', 'th', 'ta', 'cs', 'uk', 'ms', 'fi',
  'ro', 'hu', 'da', 'no', 'sk', 'fil', 'kk', 'sw', 'bs', 'eo',
  'pa', 'te', 'mr', 'am', 'my',
  'ne', 'si', 'uz', 'ha', 'az',
  'yo', 'km', 'mn', 'hy', 'bg',
];
export const NON_DEFAULT_LANGS = LANGS.filter((l) => l !== 'en') as Exclude<Lang, 'en'>[];

/**
 * label = native/endonym name (what a speaker of that language calls it).
 * labelEn = English name, used so the language-picker search matches both
 * "Deutsch" and "German".
 */
export const LANG_META: Record<Lang, { html: string; ogLocale: string; label: string; labelEn: string; dir: 'ltr' | 'rtl' }> = {
  en: { html: 'en', ogLocale: 'en_US', label: 'English', labelEn: 'English', dir: 'ltr' },
  zh: { html: 'zh-Hant', ogLocale: 'zh_TW', label: '繁體中文', labelEn: 'Chinese (Traditional)', dir: 'ltr' },
  'zh-cn': { html: 'zh-Hans', ogLocale: 'zh_CN', label: '简体中文', labelEn: 'Chinese (Simplified)', dir: 'ltr' },
  ja: { html: 'ja', ogLocale: 'ja_JP', label: '日本語', labelEn: 'Japanese', dir: 'ltr' },
  ko: { html: 'ko', ogLocale: 'ko_KR', label: '한국어', labelEn: 'Korean', dir: 'ltr' },
  fr: { html: 'fr', ogLocale: 'fr_FR', label: 'Français', labelEn: 'French', dir: 'ltr' },
  de: { html: 'de', ogLocale: 'de_DE', label: 'Deutsch', labelEn: 'German', dir: 'ltr' },
  es: { html: 'es', ogLocale: 'es_ES', label: 'Español', labelEn: 'Spanish', dir: 'ltr' },
  pt: { html: 'pt', ogLocale: 'pt_PT', label: 'Português', labelEn: 'Portuguese', dir: 'ltr' },
  ru: { html: 'ru', ogLocale: 'ru_RU', label: 'Русский', labelEn: 'Russian', dir: 'ltr' },
  ar: { html: 'ar', ogLocale: 'ar_SA', label: 'العربية', labelEn: 'Arabic', dir: 'rtl' },
  tr: { html: 'tr', ogLocale: 'tr_TR', label: 'Türkçe', labelEn: 'Turkish', dir: 'ltr' },
  fa: { html: 'fa', ogLocale: 'fa_IR', label: 'فارسی', labelEn: 'Persian', dir: 'rtl' },
  bn: { html: 'bn', ogLocale: 'bn_BD', label: 'বাংলা', labelEn: 'Bengali', dir: 'ltr' },
  hi: { html: 'hi', ogLocale: 'hi_IN', label: 'हिन्दी', labelEn: 'Hindi', dir: 'ltr' },
  id: { html: 'id', ogLocale: 'id_ID', label: 'Bahasa Indonesia', labelEn: 'Indonesian', dir: 'ltr' },
  vi: { html: 'vi', ogLocale: 'vi_VN', label: 'Tiếng Việt', labelEn: 'Vietnamese', dir: 'ltr' },
  el: { html: 'el', ogLocale: 'el_GR', label: 'Ελληνικά', labelEn: 'Greek', dir: 'ltr' },
  it: { html: 'it', ogLocale: 'it_IT', label: 'Italiano', labelEn: 'Italian', dir: 'ltr' },
  nl: { html: 'nl', ogLocale: 'nl_NL', label: 'Nederlands', labelEn: 'Dutch', dir: 'ltr' },
  he: { html: 'he', ogLocale: 'he_IL', label: 'עברית', labelEn: 'Hebrew', dir: 'rtl' },
  pl: { html: 'pl', ogLocale: 'pl_PL', label: 'Polski', labelEn: 'Polish', dir: 'ltr' },
  sv: { html: 'sv', ogLocale: 'sv_SE', label: 'Svenska', labelEn: 'Swedish', dir: 'ltr' },
  ur: { html: 'ur', ogLocale: 'ur_PK', label: 'اردو', labelEn: 'Urdu', dir: 'rtl' },
  th: { html: 'th', ogLocale: 'th_TH', label: 'ไทย', labelEn: 'Thai', dir: 'ltr' },
  ta: { html: 'ta', ogLocale: 'ta_IN', label: 'தமிழ்', labelEn: 'Tamil', dir: 'ltr' },
  cs: { html: 'cs', ogLocale: 'cs_CZ', label: 'Čeština', labelEn: 'Czech', dir: 'ltr' },
  uk: { html: 'uk', ogLocale: 'uk_UA', label: 'Українська', labelEn: 'Ukrainian', dir: 'ltr' },
  ms: { html: 'ms', ogLocale: 'ms_MY', label: 'Bahasa Melayu', labelEn: 'Malay', dir: 'ltr' },
  fi: { html: 'fi', ogLocale: 'fi_FI', label: 'Suomi', labelEn: 'Finnish', dir: 'ltr' },
  ro: { html: 'ro', ogLocale: 'ro_RO', label: 'Română', labelEn: 'Romanian', dir: 'ltr' },
  hu: { html: 'hu', ogLocale: 'hu_HU', label: 'Magyar', labelEn: 'Hungarian', dir: 'ltr' },
  da: { html: 'da', ogLocale: 'da_DK', label: 'Dansk', labelEn: 'Danish', dir: 'ltr' },
  no: { html: 'no', ogLocale: 'nb_NO', label: 'Norsk', labelEn: 'Norwegian', dir: 'ltr' },
  sk: { html: 'sk', ogLocale: 'sk_SK', label: 'Slovenčina', labelEn: 'Slovak', dir: 'ltr' },
  fil: { html: 'fil', ogLocale: 'fil_PH', label: 'Filipino', labelEn: 'Filipino', dir: 'ltr' },
  kk: { html: 'kk', ogLocale: 'kk_KZ', label: 'Қазақ тілі', labelEn: 'Kazakh', dir: 'ltr' },
  sw: { html: 'sw', ogLocale: 'sw_KE', label: 'Kiswahili', labelEn: 'Swahili', dir: 'ltr' },
  bs: { html: 'bs', ogLocale: 'bs_BA', label: 'Bosanski / Српски', labelEn: 'Bosnian / Serbian', dir: 'ltr' },
  eo: { html: 'eo', ogLocale: 'eo_EO', label: 'Esperanto', labelEn: 'Esperanto', dir: 'ltr' },
  pa: { html: 'pa', ogLocale: 'pa_IN', label: 'ਪੰਜਾਬੀ', labelEn: 'Punjabi', dir: 'ltr' },
  te: { html: 'te', ogLocale: 'te_IN', label: 'తెలుగు', labelEn: 'Telugu', dir: 'ltr' },
  mr: { html: 'mr', ogLocale: 'mr_IN', label: 'मराठी', labelEn: 'Marathi', dir: 'ltr' },
  am: { html: 'am', ogLocale: 'am_ET', label: 'አማርኛ', labelEn: 'Amharic', dir: 'ltr' },
  my: { html: 'my', ogLocale: 'my_MM', label: 'မြန်မာဘာသာ', labelEn: 'Burmese', dir: 'ltr' },
  ne: { html: 'ne', ogLocale: 'ne_NP', label: 'नेपाली', labelEn: 'Nepali', dir: 'ltr' },
  si: { html: 'si', ogLocale: 'si_LK', label: 'සිංහල', labelEn: 'Sinhala', dir: 'ltr' },
  uz: { html: 'uz', ogLocale: 'uz_UZ', label: 'Oʻzbekcha', labelEn: 'Uzbek', dir: 'ltr' },
  ha: { html: 'ha', ogLocale: 'ha_NG', label: 'Hausa', labelEn: 'Hausa', dir: 'ltr' },
  az: { html: 'az', ogLocale: 'az_AZ', label: 'Azərbaycanca', labelEn: 'Azerbaijani', dir: 'ltr' },
  yo: { html: 'yo', ogLocale: 'yo_NG', label: 'Yorùbá', labelEn: 'Yoruba', dir: 'ltr' },
  km: { html: 'km', ogLocale: 'km_KH', label: 'ខ្មែរ', labelEn: 'Khmer', dir: 'ltr' },
  mn: { html: 'mn', ogLocale: 'mn_MN', label: 'Монгол', labelEn: 'Mongolian', dir: 'ltr' },
  hy: { html: 'hy', ogLocale: 'hy_AM', label: 'Հայերեն', labelEn: 'Armenian', dir: 'ltr' },
  bg: { html: 'bg', ogLocale: 'bg_BG', label: 'Български', labelEn: 'Bulgarian', dir: 'ltr' },
};

/** bilingual source string; languages beyond en/zh resolve via STRING_MAPS */
export interface Bi {
  en: string;
  zh: string;
}
export interface BiList {
  en: string[];
  zh: string[];
}

const STRING_MAPS: Partial<Record<Lang, Record<string, string>>> = {
  'zh-cn': ZHCN_STRINGS,
  ja: JA_STRINGS,
  ko: KO_STRINGS,
  fr: FR_STRINGS,
  de: DE_STRINGS,
  es: ES_STRINGS,
  pt: PT_STRINGS,
  ru: RU_STRINGS,
  ar: AR_STRINGS,
  tr: TR_STRINGS,
  fa: FA_STRINGS,
  bn: BN_STRINGS,
  hi: HI_STRINGS,
  id: ID_STRINGS,
  vi: VI_STRINGS,
  el: EL_STRINGS,
  it: IT_STRINGS,
  nl: NL_STRINGS,
  he: HE_STRINGS,
  pl: PL_STRINGS,
  sv: SV_STRINGS,
  ur: UR_STRINGS,
  th: TH_STRINGS,
  ta: TA_STRINGS,
  cs: CS_STRINGS,
  uk: UK_STRINGS,
  ms: MS_STRINGS,
  fi: FI_STRINGS,
  ro: RO_STRINGS,
  hu: HU_STRINGS,
  da: DA_STRINGS,
  no: NO_STRINGS,
  sk: SK_STRINGS,
  fil: FIL_STRINGS,
  kk: KK_STRINGS,
  sw: SW_STRINGS,
  bs: BS_STRINGS,
  eo: EO_STRINGS,
  pa: PA_STRINGS,
  te: TE_STRINGS,
  mr: MR_STRINGS,
  am: AM_STRINGS,
  my: MY_STRINGS,
  ne: NE_STRINGS,
  si: SI_STRINGS,
  uz: UZ_STRINGS,
  ha: HA_STRINGS,
  az: AZ_STRINGS,
  yo: YO_STRINGS,
  km: KM_STRINGS,
  mn: MN_STRINGS,
  hy: HY_STRINGS,
  bg: BG_STRINGS,
};

/** resolve a bilingual string for any language, falling back to English */
export function pick(obj: Bi, lang: Lang): string {
  if (lang === 'zh') return obj.zh;
  if (lang === 'en') return obj.en;
  return STRING_MAPS[lang]?.[obj.en] ?? obj.en;
}

/** resolve a bilingual string list for any language, item-wise en fallback */
export function pickList(obj: BiList, lang: Lang): string[] {
  if (lang === 'zh') return obj.zh;
  if (lang === 'en') return obj.en;
  const tr = STRING_MAPS[lang];
  return obj.en.map((s) => tr?.[s] ?? s);
}

export const SITE = {
  name: 'AGIRight.org',
  url: 'https://agiright.org',
  altDomain: 'asiright.org',
  email: 'contact@agiright.org',
  org: 'EveMissLab',
  author: 'Neo.K',
  version: 'v0.6.9',
  status: 'Draft',
  title: {
    en: 'AGIRight.org — AI Rights, Content Licensing & Machine-Readable Governance',
    zh: 'AGIRight.org — AI 權利、內容授權與機器可讀治理研究站',
  },
  description: {
    en: 'Independent research and protocol hub for AI rights, AI content licensing, agentic access, machine-readable governance, and democratic AI network economics.',
    zh: '研究 AI 權利、AI 內容授權、Agent 存取、機器可讀治理與 AI 網路民主化經濟的獨立協議型研究站。',
  },
} as const;

/**
 * Single-URL i18n: one public URL serves every language; the edge worker
 * negotiates the variant (lang cookie > IP country > Accept-Language).
 * Localized build trees (/zh/..., /ja/...) are internal, so links never
 * carry a language prefix.
 */
export function langPrefix(_lang: Lang): string {
  return '';
}

const LANG_PREFIX_RE = new RegExp(`^/(${NON_DEFAULT_LANGS.join('|')})(?=/|$)`);

/** strip an internal language prefix from a build-time pathname */
export function publicPath(pathname: string): string {
  return pathname.replace(LANG_PREFIX_RE, '') || '/';
}

export const NAV = [
  { href: '/research', en: 'Research', zh: '研究' },
  { href: '/protocols', en: 'Protocols', zh: '協議' },
  { href: '/specs', en: 'Specs', zh: '規範' },
  { href: '/docs', en: 'Whitepapers', zh: '白皮書' },
  { href: '/topics', en: 'Topics', zh: '議題' },
  { href: '/studio', en: 'Studio', zh: '影音' },
  { href: '/playground', en: 'Playground', zh: '實驗工具' },
  { href: '/about', en: 'About', zh: '關於' },
] as const;

const BASE_UI = {
  en: {
    skipToContent: 'Skip to content',
    heroKicker: 'Independent research & protocol hub',
    heroTitle: 'AI rights, content licensing, agentic access, and machine-readable governance for the next web.',
    heroSub:
      'We explore protocols for how AI systems, agents, creators, content providers, platforms, and the public can interact through rights, licenses, payments, audit logs, and governance rules.',
    ctaPrimary: 'Explore the protocols',
    ctaSecondary: 'Read the whitepapers',
    ctaSpecs: 'Machine-readable specs',
    missionKicker: 'Mission',
    missionTitle: 'From “not prohibited” to protocolized openness.',
    missionBody:
      'The web was built for human readers. AI systems now read, summarize, index, learn from, and transact over the same content — with no shared layer to express what is permitted, licensed, or owed. AGIRight.org drafts that layer: open, machine-readable protocols for AI content rights, learning permission, licensing, and agentic access.',
    protocolsKicker: 'Protocol drafts',
    protocolsTitle: 'Four protocols for the AI-readable web.',
    protocolsIntro:
      'Each protocol is published as an open draft — human-readable pages, machine-readable JSON, and versioned schemas.',
    researchKicker: 'Research areas',
    researchTitle: 'Six questions this site studies.',
    spectrumKicker: 'AIRS — AI Rights Spectrum',
    spectrumTitle: 'AI access is not a yes/no switch. It is a spectrum.',
    spectrumIntro:
      'AIRS expresses AI rights over content as graduated levels — from no access, to read, summarize, retrieve, transform, fine-tune, train, and redistribute — each licensable and auditable on its own terms.',
    machineKicker: 'Machine-readable governance',
    machineTitle: 'This site practices what it proposes.',
    machineIntro:
      'AGIRight.org publishes its own rights policy in the formats it drafts. Every AI system, crawler, or agent reading this site can discover its permissions programmatically.',
    papersKicker: 'Whitepapers',
    papersTitle: 'Current research drafts.',
    whyKicker: 'Why this matters',
    whyTitle: 'The rules of the AI-era web are being written now.',
    whyBody:
      'Trillion-dollar AI systems are trained on the open web, while the creators, publishers, and communities that produced that knowledge have no protocol to express consent, conditions, or compensation. Binary tools like robots.txt cannot carry that meaning. Whoever defines the rights layer defines the economics of the next web — we believe it should be defined in the open, as public infrastructure.',
    disclaimerTitle: 'Status & disclaimer',
    disclaimerBody:
      'AGIRight.org publishes independent research drafts and protocol proposals — not official standards, and not legal, financial, or compliance advice. All specifications are versioned drafts open to revision and feedback.',
    footerTagline: 'A protocol-first research site for the AI rights and AI content licensing layer of the next web.',
    footerRights: 'Research texts CC BY 4.0 · Code & schemas MIT · unless otherwise stated.',
    readDraft: 'Read draft',
    readPaper: 'Read paper',
    viewAll: 'View all',
    status: 'Status',
    version: 'Version',
    updated: 'Updated',
    author: 'Author',
    language: 'Language',
    schema: 'Schema',
    download: 'Download',
    relatedProtocols: 'Related protocols',
    onThisSite: 'On this site',
    backTo: 'Back to',
    allProtocols: 'All protocols',
    allResearch: 'All research areas',
    allPapers: 'All whitepapers',
    definition: 'Definition',
    purpose: 'Purpose',
    scope: 'Scope',
    example: 'Machine-readable example',
    limitations: 'Limitations',
    namingNote: 'Naming note',
    keyConcepts: 'Key concepts',
    abstract: 'Abstract',
    citeAs: 'Cite as',
    contactCta: 'Questions, feedback, or licensing inquiries',
    langSwitch: '中文',
    langSwitchAria: 'Switch to Traditional Chinese',
    draftBanner:
      'All protocols on this site are open drafts (v0.1). They are research proposals, not established standards.',
  },
  zh: {
    skipToContent: '跳至主要內容',
    heroKicker: '獨立研究與協議站',
    heroTitle: '面向下一代網路的 AI 權利、內容授權、Agent 存取與機器可讀治理。',
    heroSub:
      '我們研究 AI 系統、Agent、創作者、內容方、平台與公眾,如何透過權利、授權、付款、審計紀錄與治理規則,形成更可持續的互動秩序。',
    ctaPrimary: '探索協議',
    ctaSecondary: '閱讀白皮書',
    ctaSpecs: '機器可讀規範',
    missionKicker: '使命',
    missionTitle: '從「不禁止」走向「協議化開放」。',
    missionBody:
      '網路是為人類讀者設計的。如今 AI 系統在同一批內容上讀取、摘要、索引、學習、交易——卻沒有一個共通層可以表達「什麼被允許、什麼需授權、什麼應回報」。AGIRight.org 起草這一層:開放、機器可讀的 AI 內容權利、學習許可、授權與 Agent 存取協議。',
    protocolsKicker: '協議草案',
    protocolsTitle: '為 AI 可讀網路設計的四個協議。',
    protocolsIntro: '每個協議皆以開放草案發布——人類可讀頁面、機器可讀 JSON,以及版本化 schema。',
    researchKicker: '研究領域',
    researchTitle: '本站研究的六個問題。',
    spectrumKicker: 'AIRS — AI 權利光譜',
    spectrumTitle: 'AI 存取不是開關,而是光譜。',
    spectrumIntro:
      'AIRS 將 AI 對內容的權利表達為分級光譜——從禁止存取、讀取、摘要、檢索、轉換、微調、訓練到再分發——每一級都可獨立授權、可稽核。',
    machineKicker: '機器可讀治理',
    machineTitle: '本站實踐自己提出的協議。',
    machineIntro:
      'AGIRight.org 以自己起草的格式發布本站的權利政策。任何讀取本站的 AI 系統、爬蟲或 Agent,都能以程式化方式取得授權範圍。',
    papersKicker: '白皮書',
    papersTitle: '目前的研究草案。',
    whyKicker: '為什麼重要',
    whyTitle: 'AI 時代網路的規則,正在此刻被寫下。',
    whyBody:
      '兆元級的 AI 系統以開放網路為訓練材料,而產出這些知識的創作者、出版者與社群,卻沒有任何協議能表達同意、條件或補償。robots.txt 這類二元工具承載不了這些語意。誰定義了權利層,誰就定義了下一代網路的經濟結構——我們認為它應該以公共基礎設施的方式,在開放中被定義。',
    disclaimerTitle: '狀態與免責聲明',
    disclaimerBody:
      'AGIRight.org 發布獨立研究草案與協議提案——不是官方標準,也不構成法律、金融或合規意見。所有規範皆為版本化草案,開放修訂與回饋。',
    footerTagline: '面向下一代網路 AI 權利與 AI 內容授權層的協議優先研究站。',
    footerRights: '研究文本採 CC BY 4.0 · 程式碼與 schema 採 MIT · 除非另有標示。',
    readDraft: '閱讀草案',
    readPaper: '閱讀論文',
    viewAll: '查看全部',
    status: '狀態',
    version: '版本',
    updated: '更新',
    author: '作者',
    language: '語言',
    schema: 'Schema',
    download: '下載',
    relatedProtocols: '相關協議',
    onThisSite: '本站入口',
    backTo: '返回',
    allProtocols: '所有協議',
    allResearch: '所有研究領域',
    allPapers: '所有白皮書',
    definition: '定義',
    purpose: '目的',
    scope: '範圍',
    example: '機器可讀範例',
    limitations: '限制與邊界',
    namingNote: '命名說明',
    keyConcepts: '核心概念',
    abstract: '摘要',
    citeAs: '引用格式',
    contactCta: '問題、回饋或授權洽詢',
    langSwitch: 'EN',
    langSwitchAria: '切換至英文',
    draftBanner: '本站所有協議皆為開放草案(v0.1),屬研究提案,尚非既定標準。',
  },
} as const;

export type UIStrings = { [K in keyof typeof BASE_UI.en]: string };
const asUI = (o: Record<string, string> | null): UIStrings =>
  (o ?? BASE_UI.en) as unknown as UIStrings;

export const UI: Record<Lang, UIStrings> = {
  en: BASE_UI.en as unknown as UIStrings,
  zh: BASE_UI.zh as unknown as UIStrings,
  'zh-cn': asUI(UI_ZHCN),
  ja: asUI(UI_JA),
  ko: asUI(UI_KO),
  fr: asUI(UI_FR),
  de: asUI(UI_DE),
  es: asUI(UI_ES),
  pt: asUI(UI_PT),
  ru: asUI(UI_RU),
  ar: asUI(UI_AR),
  tr: asUI(UI_TR),
  fa: asUI(UI_FA),
  bn: asUI(UI_BN),
  hi: asUI(UI_HI),
  id: asUI(UI_ID),
  vi: asUI(UI_VI),
  el: asUI(UI_EL),
  it: asUI(UI_IT),
  nl: asUI(UI_NL),
  he: asUI(UI_HE),
  pl: asUI(UI_PL),
  sv: asUI(UI_SV),
  ur: asUI(UI_UR),
  th: asUI(UI_TH),
  ta: asUI(UI_TA),
  cs: asUI(UI_CS),
  uk: asUI(UI_UK),
  ms: asUI(UI_MS),
  fi: asUI(UI_FI),
  ro: asUI(UI_RO),
  hu: asUI(UI_HU),
  da: asUI(UI_DA),
  no: asUI(UI_NO),
  sk: asUI(UI_SK),
  fil: asUI(UI_FIL),
  kk: asUI(UI_KK),
  sw: asUI(UI_SW),
  bs: asUI(UI_BS),
  eo: asUI(UI_EO),
  pa: asUI(UI_PA),
  te: asUI(UI_TE),
  mr: asUI(UI_MR),
  am: asUI(UI_AM),
  my: asUI(UI_MY),
  ne: asUI(UI_NE),
  si: asUI(UI_SI),
  uz: asUI(UI_UZ),
  ha: asUI(UI_HA),
  az: asUI(UI_AZ),
  yo: asUI(UI_YO),
  km: asUI(UI_KM),
  mn: asUI(UI_MN),
  hy: asUI(UI_HY),
  bg: asUI(UI_BG),
};
