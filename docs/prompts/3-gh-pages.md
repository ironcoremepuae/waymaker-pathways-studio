Set up GitHub Pages deployment for the WayMaker Skills™ website.

Important context:

* This repo is the **WayMaker Skills™ company website**.
* This is not a replacement for sanjo.in.
* sanjo.in is only Sanjo Mathew’s personal brand/profile website.
* Brand spelling must always be exactly: **WayMaker Skills™**
* The project is a TanStack Start + React 19 + Vite + TypeScript website.
* It has canonical SEO routes, resource article pages, route-level metadata, sitemap, robots.txt, JSON-LD helpers, FAQ schema, Article schema, and old short-route redirects.
* GitHub Pages is static hosting only, so this deployment must work as a static/prerendered site.
* Do not remove SEO routes, resource article pages, structured data, sitemap, robots, redirects, content, or animations.
* Do not invent fake business details.
* Real contact details already exist in `src/data/site.ts`.

Current canonical routes that must deploy correctly:

* `/`
* `/about-waymaker-skills`
* `/sanjo-mathew-founder`
* `/nova-human-development-methodology`
* `/lq-life-intelligence-quotient-framework`
* `/human-development-programs`
* `/corporate-training-programs`
* `/school-youth-development-programs`
* `/leadership-development-training`
* `/communication-skills-training`
* `/emotional-intelligence-training`
* `/coaching-and-mentoring`
* `/wami-childrens-life-skills`
* `/resources`
* `/contact`
* all `/resources/*` article pages

Old routes that should continue redirecting or safely forwarding:

* `/about`
* `/founder`
* `/nova`
* `/lq`
* `/programs`
* `/corporate-training`
* `/schools-youth`
* `/leadership`
* `/communication`
* `/emotional-intelligence`
* `/coaching-mentoring`
* `/wami`

Goal:
Prepare this repo for deployment to GitHub Pages using GitHub Actions.

Do this carefully and verify everything.

TASK 1 — Inspect current project setup

Inspect:

* `package.json`
* `vite.config.ts`
* TanStack Start config
* route files
* `src/data/routes.ts`
* `src/data/site.ts`
* `src/lib/seo.ts`
* `src/routes/sitemap[.]xml.ts`
* `public/robots.txt`
* existing lockfiles
* existing README/deployment docs if any

Determine:

* exact build command
* exact build output folder
* whether the app currently outputs static files suitable for GitHub Pages
* whether TanStack Start prerender/static output is enabled
* whether direct refresh on deep routes can work after static deployment
* whether old short route redirects can work after static deployment

Do not assume the output folder. Build and inspect it.

Run:

* `npm run build`

Then identify the static output folder. Possible folders may include:

* `.output/public`
* `dist`
* `build`
* another generated output folder

TASK 2 — Ensure static/prerender deployment works

GitHub Pages cannot run a Node server or SSR runtime.

Make the app deployable as a static/prerendered website.

If static/prerender is already configured correctly, document that.

If not configured, enable it safely using the correct TanStack Start/Vite configuration for this project.

Prerender these canonical pages:

* `/`
* `/about-waymaker-skills`
* `/sanjo-mathew-founder`
* `/nova-human-development-methodology`
* `/lq-life-intelligence-quotient-framework`
* `/human-development-programs`
* `/corporate-training-programs`
* `/school-youth-development-programs`
* `/leadership-development-training`
* `/communication-skills-training`
* `/emotional-intelligence-training`
* `/coaching-and-mentoring`
* `/wami-childrens-life-skills`
* `/resources`
* `/contact`
* all existing resource article pages from `src/data/resources.ts`

Ensure these pages generate real crawlable static HTML where possible.

Do not remove JSON-LD, FAQ schema, Article schema, canonical links, or Open Graph metadata.

TASK 3 — Handle GitHub Pages base path

GitHub Pages can be deployed in two ways:

1. User/organization site:
   `https://<github-username>.github.io/`

2. Project site:
   `https://<github-username>.github.io/<repo-name>/`

Most repos deploy as project sites, so the site may need a base path.

Add a safe configurable base path strategy.

Use environment variables:

* `VITE_SITE_URL`
* `VITE_BASE_PATH`

Recommended defaults:

* `VITE_SITE_URL=https://<github-username>.github.io/<repo-name>`
* `VITE_BASE_PATH=/<repo-name>/`

But do not hardcode the real username/repo unless it is already known from git remote.

If a custom domain will be used later:

* `VITE_SITE_URL=https://<final-domain>`
* `VITE_BASE_PATH=/`

Implementation requirements:

* Use `VITE_SITE_URL` for canonical URLs, Open Graph URLs, JSON-LD URLs, sitemap URLs, and robots sitemap URL.
* Use `VITE_BASE_PATH` only for asset/routing base path if required.
* Do not let canonical URLs accidentally include duplicate slashes.
* Do not let internal links break under a repo subpath.
* If TanStack Router needs basename/basepath support, configure it cleanly.
* If Vite needs `base`, configure it cleanly.
* Keep custom-domain deployment easy by changing env only.

Add or update `.env.example`:

```env
VITE_SITE_URL=https://<github-username>.github.io/<repo-name>
VITE_BASE_PATH=/<repo-name>/
```

Add comments explaining that for a custom domain, `VITE_BASE_PATH=/`.

TASK 4 — Verify old route redirects under static hosting

The old short routes currently redirect as 301 routes in the app.

Because GitHub Pages is static hosting, server-side 301 redirects may not work the same way after deployment.

Inspect the generated output and verify what happens for old routes.

Required behavior:

* New canonical routes must be primary.
* Sitemap must include only canonical routes and resource article routes.
* Old redirect routes must not appear in sitemap.
* Old routes should forward visitors to canonical routes if possible.

If true 301 redirects work in the static output, keep them.

If true 301 redirects do not work on GitHub Pages:

* Create a safe static fallback strategy for legacy routes.
* Prefer static HTML legacy pages that:

  * contain a canonical link to the new route
  * contain a meta refresh to the new route
  * contain a small JavaScript redirect
  * contain a visible fallback link
  * are not included in sitemap
* Document that GitHub Pages does not provide true server-side 301 redirects for these static legacy URLs.
* Do not create duplicate indexable content on old routes.

TASK 5 — Deep route refresh support

Verify that direct browser refresh works on:

* `/about-waymaker-skills`
* `/human-development-programs`
* `/resources/why-human-development-matters`
* at least one other resource article route

If every route is statically generated as its own HTML file, no SPA fallback may be needed.

If direct refresh fails for deep routes:

* Add a GitHub Pages compatible `404.html` fallback.
* The fallback should preserve client-side routing if needed.
* Do not damage SEO canonical pages.
* Document the limitation.

TASK 6 — GitHub Actions workflow

Create:

`.github/workflows/deploy-pages.yml`

Use official GitHub Pages deployment flow:

* `actions/checkout`
* `actions/setup-node`
* `actions/configure-pages`
* `actions/upload-pages-artifact`
* `actions/deploy-pages`

Workflow requirements:

* Trigger on push to `main`
* Support manual `workflow_dispatch`
* Use Node 20
* Use npm
* Use `npm ci` because `package-lock.json` exists
* Run lint
* Run typecheck
* Run build
* Upload the correct static output folder
* Deploy to GitHub Pages

Permissions:

* `contents: read`
* `pages: write`
* `id-token: write`

Concurrency:

* group: `pages`
* cancel-in-progress: false

Environment:
Use placeholders that the user can update:

```yaml
env:
  VITE_SITE_URL: https://<github-username>.github.io/<repo-name>
  VITE_BASE_PATH: /<repo-name>/
```

If the repo remote reveals the GitHub owner/repo, you may use the actual detected owner/repo in comments or docs, but avoid making risky assumptions.

TASK 7 — GitHub Pages docs

Create:

`DEPLOYMENT_GITHUB_PAGES.md`

Include:

1. What this deployment is for.
2. Important limitation:

   * GitHub Pages is static hosting.
   * It cannot run TanStack Start SSR/server functions.
   * The site must be prerendered/static.
3. GitHub settings steps:

   * Push repo to GitHub.
   * Go to repo Settings.
   * Go to Pages.
   * Set Source to GitHub Actions.
4. Required environment variables:

   * `VITE_SITE_URL`
   * `VITE_BASE_PATH`
5. Default GitHub Pages project URL example:

   * `https://<github-username>.github.io/<repo-name>`
6. Custom domain setup:

   * set `VITE_SITE_URL=https://yourdomain.com`
   * set `VITE_BASE_PATH=/`
   * configure domain in GitHub Pages
   * configure DNS
   * enable HTTPS
7. Build output folder.
8. How to manually test locally.
9. What routes to test after deployment.
10. SEO checks after deployment:

* canonical URLs
* sitemap.xml
* robots.txt
* Open Graph preview
* JSON-LD
* direct refresh on deep routes
* old short route forwarding

11. Contact form limitation:

* If there is no backend/email service, the form cannot actually send messages.
* Email integration must be added separately before relying on form submissions.

12. Troubleshooting:

* blank page due to base path
* assets 404 due to wrong Vite base
* direct route refresh 404
* sitemap using wrong domain
* canonical URL wrong
* old redirects not true 301 on GitHub Pages

TASK 8 — README update

Update `README.md`.

Add:

* Project name: WayMaker Skills™ company website
* Short note that sanjo.in is the founder personal brand/profile website
* Local development commands
* Build command
* Typecheck command
* GitHub Pages deployment section
* Link to `DEPLOYMENT_GITHUB_PAGES.md`

Do not overwrite useful existing README content. Add to it cleanly.

TASK 9 — Package scripts

Check `package.json`.

If missing, add:

```json
"typecheck": "tsc --noEmit"
```

If useful, add:

```json
"build:pages": "npm run build"
```

Do not add unnecessary packages.

Do not switch package managers.

Because the project currently uses npm for validation, keep npm workflow unless there is a strong reason not to.

TASK 10 — robots and sitemap for GitHub Pages

Ensure:

* `sitemap.xml` generates absolute URLs from `VITE_SITE_URL`.
* `robots.txt` points to the correct sitemap URL.

If `robots.txt` is static and cannot read env variables:

* Use a placeholder GitHub Pages URL.
* Document that it must be updated for the actual GitHub Pages URL or custom domain before production.
* Prefer a dynamic robots route only if the framework supports it cleanly and statically.

TASK 11 — Validate locally

Run:

* `npm run lint`
* `npm run typecheck` if script exists, otherwise `npx tsc --noEmit`
* `npm run build`

Then inspect the output folder and confirm:

* homepage exists
* canonical pages exist
* resource article pages exist
* sitemap exists
* robots exists
* assets load with correct base path
* no redirect-only legacy routes are included in sitemap

If possible, locally serve the static output folder and test:

* `/`
* `/about-waymaker-skills`
* `/human-development-programs`
* `/resources/why-human-development-matters`
* `/about` forwarding behavior
* `/programs` forwarding behavior

TASK 12 — Do not do these

Do not:

* remove canonical SEO routes
* remove resource article routes
* remove old route forwarding behavior
* remove sitemap or robots
* remove JSON-LD
* remove FAQ schema
* remove Article schema
* remove contact details
* convert the site back to old short URLs
* add fake testimonials/stats/awards/social links
* add a backend
* add CMS
* add authentication
* add database
* add unnecessary dependencies

TASK 13 — Final report

After completing, report:

1. Commands run.
2. Files changed.
3. Build output folder.
4. Whether static/prerender support was already present or newly configured.
5. GitHub Actions workflow added.
6. Required GitHub repository settings.
7. Required environment variable values for:

   * GitHub Pages project URL
   * custom domain
8. Whether base path was configured.
9. Sitemap/robots changes.
10. Deep-route refresh behavior.
11. Old route redirect/forwarding behavior.
12. Lint/typecheck/build status.
13. Remaining warnings.
14. Remaining deployment limitations.
15. Exact next steps for the user in GitHub UI.
