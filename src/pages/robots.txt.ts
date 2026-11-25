// robots.txt – alle Suchmaschinen und KI-Assistenten dürfen die Website lesen.
// (Kundengalerie, Guides, Preisguide und Gutschein-Vorlage sind per „noindex“ aus der Suche genommen.)
import { basisUrl } from "../data/seo";

export function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${basisUrl}/sitemap.xml\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
