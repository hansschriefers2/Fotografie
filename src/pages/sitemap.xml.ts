// Sitemap für Google & Bing – Seitenliste in src/data/seo.ts
import { basisUrl, sitemapSeiten } from "../data/seo";

export function GET() {
  const heute = new Date().toISOString().slice(0, 10);
  const urls = sitemapSeiten
    .map(([pfad, prio]) => `  <url><loc>${basisUrl}${pfad}</loc><lastmod>${heute}</lastmod><priority>${prio.toFixed(1)}</priority></url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
