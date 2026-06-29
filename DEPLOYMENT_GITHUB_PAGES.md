# GitHub Pages Deployment

This repo builds the WayMaker Skillsâ„¢ marketing website as a static GitHub Pages deployment.

## Important limitation

GitHub Pages is static hosting only.

- It cannot run TanStack Start SSR at request time.
- It cannot run server functions.
- This repo therefore uses prerendered static output in `dist/client`.

## Required GitHub settings

1. Push the repository to GitHub.
2. Open `Settings`.
3. Open `Pages`.
4. Set `Source` to `GitHub Actions`.

## Required environment variables

Set these in the workflow or repository environment before production deployment:

- `VITE_SITE_URL`
- `VITE_BASE_PATH`

Current production custom-domain defaults for this repo:

- `VITE_SITE_URL=https://waymakerskills.com`
- `VITE_BASE_PATH=/`
- `VITE_PAGES_CNAME=waymakerskills.com`

Custom domain setup:

- `VITE_SITE_URL=https://yourdomain.com`
- `VITE_BASE_PATH=/`
- `VITE_PAGES_CNAME=yourdomain.com`
- Configure the custom domain in GitHub Pages.
- Configure DNS for the domain.
- Enable HTTPS in GitHub Pages.

## Build output

The GitHub Pages artifact must upload `dist/client`.

That folder contains:

- prerendered canonical pages
- prerendered resource article pages
- `sitemap.xml`
- `robots.txt`
- `404.html`
- static legacy forwarding pages for old short URLs

## Local testing

Run:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
```

To test the current custom-domain production setup locally, build with:

```bash
VITE_SITE_URL=https://waymakerskills.com VITE_BASE_PATH=/ VITE_PAGES_CNAME=waymakerskills.com npm run build
```

To test the old project-site base path locally, build with:

```bash
VITE_SITE_URL=https://ironcoremepuae.github.io/waymaker-pathways-studio VITE_BASE_PATH=/waymaker-pathways-studio/ npm run build
```

To serve the static output locally, use any simple static server against `dist/client`.

Example:

```bash
npx serve dist/client
```

## Post-deploy routes to test

- `/`
- `/about-waymaker-skills`
- `/human-development-programs`
- `/resources/why-human-development-matters`
- `/resources/emotional-intelligence-future-success`
- `/about`
- `/programs`

For the project site, prepend `/waymaker-pathways-studio`.

## SEO checks after deployment

Verify:

- canonical URLs use the correct domain
- `sitemap.xml` uses the correct absolute URLs
- `robots.txt` points to the correct sitemap
- Open Graph tags render the expected URL and image
- JSON-LD is present
- deep-route refresh works on canonical and article pages
- old short routes forward to canonical routes

## Contact form limitation

The current contact form is UI-only.

It validates in the browser, but it does not send email or persist submissions. Add a separate email or backend integration before relying on it for real enquiries.

## Troubleshooting

- Blank page after deploy: `VITE_BASE_PATH` is wrong for the Pages URL.
- Asset 404s: Vite `base` and router base path are misaligned.
- Direct route refresh 404: confirm the prerendered route exists in `dist/client`, and keep `404.html` in the uploaded artifact.
- Wrong sitemap domain: update `VITE_SITE_URL`.
- Wrong canonical URLs: update `VITE_SITE_URL`.
- Old short URLs are not true 301s on GitHub Pages: this is expected. GitHub Pages cannot do server-side redirects for these static paths, so the repo ships canonicalized forwarding pages instead.
