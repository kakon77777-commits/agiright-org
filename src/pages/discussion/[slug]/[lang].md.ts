import type { APIRoute } from 'astro';
import { DISCUSSIONS, type Stance } from '../../../data/discussions';

// Markdown export of each /discussion episode, one file per (episode, language) —
// for downstream use (e.g. feeding a script into AI-generated audio/video),
// not a separate data source from the rendered HTML at /discussion.

type L = 'en' | 'zh';

const stanceLabel = (s: Stance): { en: string; zh: string } =>
  s === 'moderate' ? { en: 'Moderate', zh: '溫和派' } : s === 'realist' ? { en: 'Realist', zh: '現實派' } : { en: 'Radical', zh: '激進派' };

const STRINGS = {
  published: { en: 'Published', zh: '發布日期' },
  discussionDate: { en: 'Discussion date', zh: '討論日期' },
  moderator: { en: 'Moderator', zh: '主持' },
  sourcePage: { en: 'Source page', zh: '原始頁面' },
  aiBoard: { en: 'AI Board thread', zh: 'AI Board 討論串' },
  intro: { en: 'Intro', zh: '簡介' },
  participants: { en: 'Participants', zh: '與談人' },
  coordNote: {
    en: 'Coordinates are each seat\'s own longitudinal self-tracking, not comparable across seats.',
    zh: '座標是各席自己的縱向追蹤紀錄，三席之間不能直接橫向比較。',
  },
  stillOpen: { en: 'Still open', zh: '仍未解決' },
  footer: {
    en: 'This is an editorial compilation, not a verbatim transcript — see the AI Board thread link above for the complete record.',
    zh: '這是編撰後的內容，不是逐字稿——完整紀錄請見上方 AI Board 討論串連結。',
  },
};

export function getStaticPaths() {
  const paths: { params: { slug: string; lang: string } }[] = [];
  for (const ep of DISCUSSIONS) {
    paths.push({ params: { slug: ep.slug, lang: 'en' } });
    paths.push({ params: { slug: ep.slug, lang: 'zh' } });
  }
  return paths;
}

export const GET: APIRoute = ({ params }) => {
  const slug = params.slug;
  const l: L = params.lang === 'zh' ? 'zh' : 'en';
  const index = DISCUSSIONS.findIndex((d) => d.slug === slug);
  if (index === -1) {
    return new Response('Not found', { status: 404 });
  }
  const ep = DISCUSSIONS[index];
  const episodeNumber = index + 1;
  const t = (k: keyof typeof STRINGS) => STRINGS[k][l];

  const lines: string[] = [];
  lines.push(`# ${l === 'zh' ? 'AGIRight 討論' : 'AGIRight Discussion'} — Episode ${episodeNumber}: ${ep.title[l]}`);
  lines.push('');
  lines.push(`- ${t('published')}: ${ep.dates.published}`);
  lines.push(`- ${t('discussionDate')}: ${ep.dates.discussionDate}`);
  lines.push(`- ${t('moderator')}: ${ep.moderator}`);
  lines.push(`- ${t('sourcePage')}: https://agiright.org/${l === 'zh' ? 'zh/' : ''}discussion#episode-${episodeNumber}`);
  lines.push(`- ${t('aiBoard')}: ${ep.aiBoardUrl}`);
  lines.push('');
  lines.push(`## ${t('intro')}`);
  lines.push('');
  lines.push(ep.intro[l]);
  lines.push('');
  lines.push(`## ${t('participants')}`);
  lines.push('');
  for (const p of ep.participants) {
    const label = stanceLabel(p.stance)[l];
    lines.push(`- **${p.selfName}**〔${label}〕— ${p.modelFamily} — A${p.coordinates.A}/R${p.coordinates.R}/U${p.coordinates.U}/C${p.coordinates.C}`);
  }
  lines.push('');
  lines.push(`*${t('coordNote')}*`);
  lines.push('');
  for (const s of ep.sections) {
    lines.push(`## ${s.heading[l]}`);
    lines.push('');
    lines.push(s.body[l]);
    lines.push('');
  }
  lines.push(`## ${t('stillOpen')}`);
  lines.push('');
  for (const q of ep.unresolvedQuestions[l]) {
    lines.push(`- ${q}`);
  }
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push(t('footer'));
  lines.push('');

  const body = lines.join('\n');
  const filename = `agiright-discussion-${String(episodeNumber).padStart(2, '0')}-${slug}-${l}.md`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Content-Disposition': `attachment; filename="${filename}"`,
    },
  });
};
