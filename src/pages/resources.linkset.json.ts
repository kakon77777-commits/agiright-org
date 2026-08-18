import type { APIRoute } from 'astro';
import { DWRG_RESOURCES } from '../data/resources';

// RFC 9264 Linkset projection (application/linkset+json) — generated from
// src/data/resources.ts, the same canonical registry as /resources.json and
// /resources/. Only IANA-registered link relation types appear here (each
// resources.ts entry's `linksetRel`, falling back to `rel` when `rel` is
// itself already a registered type such as "describedby" or "related") —
// per the DWRG whitepaper §12: a custom domain relation (e.g.
// "documentation", "declaration") must not be presented as if it were
// already a standard one just because it appears in the richer DWRG JSON.
export const GET: APIRoute = () => {
  const linkset = DWRG_RESOURCES.map((r) => {
    const anchor: Record<string, unknown> = { anchor: r.canonical_url };
    for (const link of r.links) {
      const relationType = link.linksetRel ?? link.rel;
      const bucket = (anchor[relationType] as Array<{ href: string }> | undefined) ?? [];
      bucket.push({ href: link.href });
      anchor[relationType] = bucket;
    }
    return anchor;
  });

  return new Response(JSON.stringify({ linkset }, null, 2), {
    headers: { 'Content-Type': 'application/linkset+json; charset=utf-8' },
  });
};
