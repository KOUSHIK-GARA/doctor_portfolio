# Doctor Website — React + TypeScript + Vite

A single-page portfolio site for an interventional pulmonology & sleep medicine
practice. All content is authored in one typed TypeScript module and rendered by
small, focused React components.

## Requirements

- Node.js 18+ (CI and local dev use Node 20 — see `.nvmrc`)
- npm

## Getting started

```bash
npm install
npm run dev
```

Then open the URL shown by Vite (normally `http://localhost:5173`).

## Scripts

| Script              | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the Vite development server            |
| `npm run build`     | Type-check (`tsc --noEmit`) and build to `dist/` |
| `npm run preview`   | Preview the production build locally         |
| `npm run typecheck` | Run the TypeScript compiler without emitting |

## Editing content

All website copy lives in a single typed module:

```text
src/data/portfolio.ts
```

The exported `portfolio` object is typed against the `PortfolioData` contract in
`src/types/portfolio.ts`, so invalid or missing fields are caught by the compiler.
Update the values and the UI updates automatically — no component changes required.

Top-level content keys:

- `doctor` — profile, credentials and contact information
- `hero` — hero eyebrow label and highlight stats
- `about` — the about-section lead paragraph and clinic photo
- `expertise` — areas of expertise (`title` + optional `details`)
- `gallery` — "in practice" photos (`src`, `alt`, `caption`)
- `education` — qualifications (`year`, `degree`, `institution`)
- `experience` — roles & fellowships (`period`, `role`, `organization`)
- `achievements` — awards and recognitions
- `memberships` — professional memberships

> The `phone`, `email` and `address` fields in `doctor` are placeholders —
> replace them with the clinic's real contact details before publishing.

## Deployment (GitHub Pages)

This repo ships a workflow at `.github/workflows/deploy.yml` that builds the site
and publishes it to GitHub Pages on every push to `main`.

One-time setup:

1. Push the project to a GitHub repository.
2. In the repo, go to **Settings → Pages → Build and deployment** and set
   **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).

The site will be available at `https://<user>.github.io/<repo>/`. The Vite
`base` is set to `./` (relative paths), so the build works under that subpath
without any repo-name configuration.

To preview the production build locally:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├─ main.tsx                 # App bootstrap (mounts React)
├─ App.tsx                  # Page composition
├─ styles.css               # Global styles
├─ vite-env.d.ts            # Vite ambient types
├─ types/
│  └─ portfolio.ts          # Shared content types
├─ data/
│  └─ portfolio.ts          # Website content (edit here)
├─ constants/
│  └─ navigation.ts         # Header navigation links
├─ hooks/
│  └─ useDisclosure.ts      # Open/close state helper
└─ components/
   ├─ layout/               # Header, Footer
   ├─ sections/             # Hero, About, Expertise, Gallery, Experience, Appointment
   └─ ui/                   # ChatButton
```

## Architecture

```text
portfolio.ts (typed) → App → section components → Browser
```

The content is imported directly at build time, so the Vite dev server is the
only process needed during development. No backend or API calls are required.
