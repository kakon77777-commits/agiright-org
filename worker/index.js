/**
 * AGIRight.org edge worker.
 * - Serves the static site (Workers Static Assets) on agiright.org.
 * - 301-redirects every other bound hostname (www.agiright.org, asiright.org,
 *   www.asiright.org) to the canonical domain, preserving path and query.
 */
const CANONICAL_HOST = 'agiright.org';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname !== CANONICAL_HOST) {
      url.hostname = CANONICAL_HOST;
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
