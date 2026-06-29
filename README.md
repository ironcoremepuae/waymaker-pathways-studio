# WayMaker Skillsâ„¢ Company Website

This repository contains the WayMaker Skillsâ„¢ company website.

`sanjo.in` is the founder's separate personal brand and profile site, not this company website.

## Local development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run lint
npm run typecheck
```

## Build

```bash
npm run build
```

The production-ready static output for GitHub Pages is written to `dist/client`.

## GitHub Pages

This repo is configured for static GitHub Pages deployment through GitHub Actions.

- Workflow: `.github/workflows/deploy-pages.yml`
- Deployment guide: `DEPLOYMENT_GITHUB_PAGES.md`

For the detected project-site URL, use:

- `VITE_SITE_URL=https://waymakerskills.com`
- `VITE_BASE_PATH=/`
- `VITE_PAGES_CNAME=waymakerskills.com`
