import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
import { DWRG_RESOURCES } from '../data/resources';

// DWRG (Dual-Surface Web Resource Graph) JSON projection. Generated from
// src/data/resources.ts, the single canonical registry — never hand-edited.
// See /resources/ for the human-readable HTML projection of the same data,
// and /resources.linkset.json for the RFC 9264 Linkset projection.
export const GET: APIRoute = () => {
  const body = {
    schema: 'dwrg-0.1',
    scope: 'public-only',
    site_version: SITE.version,
    generated_at: `${SITE.updatedAt}T00:00:00Z`,
    resources: DWRG_RESOURCES.map((r) => ({
      id: r.id,
      name: r.name,
      type: r.type,
      canonical_url: r.canonical_url,
      visibility: r.visibility,
      indexable: r.indexable,
      status: r.status,
      description: r.description.en,
      links: r.links.map((l) => ({ rel: l.rel, href: l.href })),
    })),
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
