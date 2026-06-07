const DEFAULT_SITE_URL = "https://waymakerskills.com";

export function normalizeSiteUrl(value: string | undefined) {
  const raw = (value ?? DEFAULT_SITE_URL).trim();
  return raw.replace(/\/+$/, "");
}

export function normalizeBasePath(value: string | undefined) {
  const raw = (value ?? "/").trim();

  if (!raw || raw === "/") {
    return "/";
  }

  const withLeadingSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withLeadingSlash.replace(/\/+$/, "") + "/";
}
