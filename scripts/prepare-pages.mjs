import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const clientDir = path.join(repoRoot, "dist", "client");

const defaultSiteUrl = "https://waymakerskills.com";
const rawSiteUrl = (process.env.VITE_SITE_URL ?? defaultSiteUrl).trim().replace(/\/+$/, "");
const rawBasePath = (process.env.VITE_BASE_PATH ?? "/").trim();
const basePath =
  !rawBasePath || rawBasePath === "/"
    ? "/"
    : `${rawBasePath.startsWith("/") ? rawBasePath : `/${rawBasePath}`}`.replace(/\/+$/, "") + "/";

const legacyRedirects = {
  "/about": "/about-waymaker-skills",
  "/founder": "/sanjo-mathew-founder",
  "/nova": "/nova-human-development-methodology",
  "/lq": "/lq-life-intelligence-quotient-framework",
  "/programs": "/human-development-programs",
  "/corporate-training": "/corporate-training-programs",
  "/schools-youth": "/school-youth-development-programs",
  "/leadership": "/leadership-development-training",
  "/communication": "/communication-skills-training",
  "/emotional-intelligence": "/emotional-intelligence-training",
  "/coaching-mentoring": "/coaching-and-mentoring",
  "/wami": "/wami-childrens-life-skills",
};

function pathWithBase(routePath) {
  if (basePath === "/") {
    return routePath;
  }

  return `${basePath.replace(/\/$/, "")}${routePath}`;
}

function absoluteRouteUrl(routePath) {
  return new URL(pathWithBase(routePath), rawSiteUrl).toString();
}

function redirectHtml(toPath) {
  const canonicalUrl = absoluteRouteUrl(toPath);
  const redirectPath = pathWithBase(toPath);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting</title>
    <meta name="robots" content="noindex,follow" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta http-equiv="refresh" content="0; url=${redirectPath}" />
    <script>window.location.replace(${JSON.stringify(redirectPath)});</script>
  </head>
  <body>
    <p>This page has moved to <a href="${redirectPath}">${toPath}</a>.</p>
  </body>
</html>
`;
}

async function main() {
  await cp(path.join(clientDir, "index.html"), path.join(clientDir, "404.html"), {
    force: true,
  });

  for (const [fromPath, toPath] of Object.entries(legacyRedirects)) {
    const targetDir = path.join(clientDir, fromPath.replace(/^\//, ""));
    await mkdir(targetDir, { recursive: true });
    await writeFile(path.join(targetDir, "index.html"), redirectHtml(toPath), "utf8");
  }

  const sitemapPath = path.join(clientDir, "sitemap.xml");
  const sitemap = await readFile(sitemapPath, "utf8");

  for (const legacyPath of Object.keys(legacyRedirects)) {
    const legacyUrl = absoluteRouteUrl(legacyPath);
    if (sitemap.includes(`<loc>${legacyUrl}</loc>`)) {
      throw new Error(`Legacy route leaked into sitemap: ${legacyPath}`);
    }
  }
}

await main();
