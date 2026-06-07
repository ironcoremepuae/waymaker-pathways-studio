// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { RESOURCE_ARTICLES } from "./src/data/resources";
import { CANONICAL_SITEMAP_ROUTES } from "./src/data/routes";
import { normalizeBasePath } from "./src/lib/site-config";

const basePath = normalizeBasePath(process.env.VITE_BASE_PATH);
const prerenderPages = [
  ...CANONICAL_SITEMAP_ROUTES,
  ...RESOURCE_ARTICLES.map((article) => `/resources/${article.slug}`),
  "/sitemap.xml",
  "/robots.txt",
].map((path) => ({ path }));

export default defineConfig({
  vite: {
    base: basePath,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    router: {
      basepath: basePath,
    },
    sitemap: {
      enabled: false,
    },
    prerender: {
      enabled: true,
      crawlLinks: false,
      failOnError: true,
    },
    pages: prerenderPages,
  },
});
