import { BASE_PATH, BRAND, LOGO, SITE_URL } from "@/data/site";

function withBasePath(path: string) {
  if (!path || path === "/") {
    return BASE_PATH;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const trimmedBase = BASE_PATH === "/" ? "" : BASE_PATH.replace(/\/$/, "");

  if (
    !trimmedBase ||
    normalizedPath === trimmedBase ||
    normalizedPath.startsWith(`${trimmedBase}/`)
  ) {
    return normalizedPath;
  }

  return `${trimmedBase}${normalizedPath}`;
}

export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return new URL(withBasePath(path), new URL(SITE_URL).origin).toString();
}

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}) {
  const fullTitle = opts.title.includes(BRAND) ? opts.title : `${opts.title} | ${BRAND}`;
  const canonical = absoluteUrl(opts.path);
  const og = absoluteUrl(opts.ogImage ?? LOGO);

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: opts.description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:image", content: og },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: og },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

export function jsonLd(obj: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(obj),
  };
}

export function breadcrumbLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function serviceLd(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(url),
    provider: { "@type": "Organization", name: BRAND, url: SITE_URL },
  };
}
