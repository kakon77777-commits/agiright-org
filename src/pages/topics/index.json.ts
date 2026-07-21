import type { APIRoute } from 'astro';
import { TOPICS } from '../../data/topics';
import { SITE } from '../../data/site';

// Machine-readable export of every /topics entry (v0.8 metadata plan §11) —
// language-neutral (both title/summary locales included), for Agent/RAG use
// without needing to scrape the rendered HTML.
export const GET: APIRoute = () => {
  const body = {
    schema_version: '1.0',
    site: SITE.name,
    site_version: SITE.version,
    generated_note: 'Every field here is also on https://agiright.org/topics as static HTML — this is a machine-readable mirror, not a separate data source.',
    count: TOPICS.length,
    items: TOPICS,
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
