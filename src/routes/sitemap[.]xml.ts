import { createFileRoute } from "@tanstack/react-router";
import { RESOURCE_ARTICLES } from "@/data/resources";
import { CANONICAL_SITEMAP_ROUTES, ROUTES } from "@/data/routes";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          ...CANONICAL_SITEMAP_ROUTES,
          ...RESOURCE_ARTICLES.map((article) => `/resources/${article.slug}`),
        ];
        const urls = paths.map(
          (p) =>
            `  <url>\n    <loc>${absoluteUrl(p)}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${p === ROUTES.home ? "1.0" : "0.8"}</priority>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
