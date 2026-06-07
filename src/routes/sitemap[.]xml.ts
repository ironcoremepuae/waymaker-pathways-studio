import { createFileRoute } from "@tanstack/react-router";
import { CANONICAL_SITEMAP_ROUTES, ROUTES } from "@/data/routes";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const baseUrl = new URL(request.url).origin;
        const paths = [
          ...CANONICAL_SITEMAP_ROUTES,
          "/resources/why-human-development-matters",
          "/resources/emotional-intelligence-future-success",
          "/resources/children-confidence-life-skills",
          "/resources/communication-skills-leadership-life",
          "/resources/from-knowledge-to-capability",
          "/resources/building-resilience-changing-world",
        ];
        const urls = paths.map(
          (p) =>
            `  <url>\n    <loc>${baseUrl}${p}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${p === ROUTES.home ? "1.0" : "0.8"}</priority>\n  </url>`,
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
