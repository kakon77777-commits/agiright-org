export interface SpectrumLevel {
  level: number;
  name: { en: string; zh: string };
  description: { en: string; zh: string };
  /** css color used in the spectrum visualization */
  color: string;
}

export const SPECTRUM: SpectrumLevel[] = [
  {
    level: 0,
    name: { en: 'No AI Access', zh: '禁止 AI 存取' },
    description: {
      en: 'AI systems may not access the resource.',
      zh: 'AI 系統不得存取該資源。',
    },
    color: '#b03a48',
  },
  {
    level: 1,
    name: { en: 'Read Only', zh: '僅可讀取' },
    description: {
      en: 'AI systems may read the resource but may not summarize, store, transform, or train.',
      zh: 'AI 可讀取,但不得摘要、儲存、轉換或訓練。',
    },
    color: '#b45338',
  },
  {
    level: 2,
    name: { en: 'Read & Summarize', zh: '可讀取與摘要' },
    description: {
      en: 'AI systems may read and summarize with attribution.',
      zh: 'AI 可讀取並摘要,需標註出處。',
    },
    color: '#b7791f',
  },
  {
    level: 3,
    name: { en: 'RAG Use', zh: '可用於 RAG' },
    description: {
      en: 'AI systems may use the resource for retrieval-augmented generation under retention and attribution rules.',
      zh: 'AI 可將資源用於檢索增強生成,須遵守保存與署名規則。',
    },
    color: '#98851f',
  },
  {
    level: 4,
    name: { en: 'Transform', zh: '可轉換' },
    description: {
      en: 'AI systems may transform the resource into structured data under license conditions.',
      zh: 'AI 可在授權條件下,將資源轉換為結構化資料。',
    },
    color: '#6f8a2f',
  },
  {
    level: 5,
    name: { en: 'Fine-Tuning Use', zh: '可用於微調' },
    description: {
      en: 'AI systems may use the resource for fine-tuning if explicitly licensed.',
      zh: '在明確授權下,AI 可將資源用於微調。',
    },
    color: '#4d8b46',
  },
  {
    level: 6,
    name: { en: 'Training Use', zh: '可用於訓練' },
    description: {
      en: 'AI systems may use the resource for model training if explicitly licensed.',
      zh: '在明確授權下,AI 可將資源用於模型訓練。',
    },
    color: '#38875c',
  },
  {
    level: 7,
    name: { en: 'Commercial Redistribution', zh: '可商業再分發' },
    description: {
      en: 'AI systems may commercially redistribute derived outputs if explicitly licensed.',
      zh: '在明確授權下,AI 可將衍生產出用於商業再分發。',
    },
    color: '#2f855a',
  },
];
