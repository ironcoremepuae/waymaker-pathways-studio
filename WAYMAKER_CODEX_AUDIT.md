# WayMaker Skills™ Technical Audit

## Tech stack

- Framework: React 19 with TanStack Start and TanStack Router (file-based routing)
- Build tool: Vite 7
- Language: TypeScript
- Data/state: `@tanstack/react-query`
- Styling: Tailwind CSS v4, `tw-animate-css`, custom global CSS in `src/styles.css`
- UI primitives: Radix UI components, shadcn-style component structure under `src/components/ui`
- Forms/validation: `react-hook-form`, `zod`, `@hookform/resolvers`
- Icons: `lucide-react`
- Package manager used for this audit: `npm` (project contains `package-lock.json`; `bun.lock` is also present)

## Available npm scripts

- `npm run dev` -> `vite dev`
- `npm run build` -> `vite build`
- `npm run build:dev` -> `vite build --mode development`
- `npm run preview` -> `vite preview`
- `npm run lint` -> `eslint .`
- `npm run format` -> `prettier --write .`

## Page routes found

- `/`
- `/about`
- `/founder`
- `/nova`
- `/lq`
- `/programs`
- `/corporate-training`
- `/schools-youth`
- `/leadership`
- `/communication`
- `/emotional-intelligence`
- `/coaching-mentoring`
- `/wami`
- `/resources`
- `/contact`
- `/sitemap.xml`

## Main components found

- Site shell/layout: `Layout`, `Header`, `Footer`
- Section system: `Section`, `PageHero`
- CTA system: `CTAButton`, `FinalCTA`
- Animation/reveal: `Reveal`
- Content blocks: `Timeline`, `OutcomeGrid`, `QuoteBlock`, `EcosystemGrid`, `AudienceCards`
- FAQ system: `FAQList`, `faqJsonLd`
- Card primitives: `FeatureCard`, `BentoTile`
- Shared site data/config: `src/data/site.ts`

## SEO implementation found

- Route-level metadata via `pageMeta()` in `src/lib/seo.ts`
- Canonical links emitted per route
- Open Graph and Twitter meta tags emitted per route
- JSON-LD helpers in `src/lib/seo.ts`
- FAQ schema via `faqJsonLd()`
- Breadcrumb schema via `breadcrumbLd()`
- Service schema via `serviceLd()`
- Root-level organization and website schema in `src/routes/__root.tsx`
- `robots.txt` present at `public/robots.txt`
- Dynamic sitemap route at `src/routes/sitemap[.]xml.ts`

## Animation implementation found

- Custom reveal-on-scroll animation using `IntersectionObserver` in `src/components/site/Reveal.tsx`
- CSS keyframe animations in `src/styles.css`:
  - reveal-up
  - float-slow
  - glow-pulse
  - gradient-shift
  - shine
  - scroll-hint
- `tw-animate-css` is also included

## Known placeholders

- Contact phone number is intentionally marked as coming soon
- Resources page includes "Coming soon" placeholders for articles/tools/impact stories
- Footer social icons still point to `#` placeholder links
- Sitewide SEO URLs are mostly path-only rather than full production absolute URLs
- `robots.txt` currently has no `Sitemap:` directive

## Build / lint / typecheck status

- `npm install`: passed
- `npm run build`: passed
- `npx tsc --noEmit`: passed
- `npm run lint`: passes with warnings only
- `npm run dev -- --host 127.0.0.1 --port 3000`: Vite reported ready at `http://127.0.0.1:3000/`

## Issues found

- ESLint still reports 7 `react-refresh/only-export-components` warnings in shared UI/component files; no remaining lint errors
- Footer social links are placeholder `#` URLs and should be replaced with real profiles or non-link placeholders
- Canonical URLs, `og:url`, and root JSON-LD URLs are relative paths, not absolute production URLs
- `robots.txt` is minimal and does not advertise the sitemap
- Built logo asset is large (`waymaker-logo.png` outputs at ~682 kB), so image optimization is worth doing
- The repo contains both `bun.lock` and `package-lock.json`; package-manager choice should be standardized

## Recommended next changes

- Introduce a single production `siteUrl` config and use it for canonical URLs, `og:url`, JSON-LD, and sitemap generation
- Add a `Sitemap:` entry to `public/robots.txt`
- Replace footer `#` social links with real URLs or remove/disable them until available
- Optimize the logo/image asset sizes
- Decide whether the project should be npm-first or Bun-first and align lockfiles/scripts
- Clean up the remaining React Refresh warnings if the team wants a zero-warning lint baseline
