# niil-portfolio — Dibya Ranjan Sahu

Personal portfolio for a mobile-first full-stack engineer. Dark, single-accent "technical dossier" aesthetic with interactive 3D.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · framer-motion · three.js / @react-three/fiber / drei / postprocessing.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Project structure

```
src/
  data/          content — edit these to update the site
    profile.ts     name, role, links, stats, CV path
    skills.ts      8 skill domains + their tech "vectors" (the Skill Constellation)
    projects.ts    all projects (drives the grid, 3D showcase, Mobile section)
    experience.ts  roles, education, AI toolkit
  lib/
    sections.ts    section order + the telemetry nav
  components/
    *.tsx          sections + UI
    ui/            Reveal, Section primitives
    three/         3D scenes (HeroScene, DeviceScene, screenTexture)
  app/
    layout.tsx     fonts + metadata
    page.tsx       page composition
    globals.css    design tokens (@theme) — the single place colors live
    icon.svg       favicon
```

## Theming (change the whole palette in one place)

All colors are tokens in `src/app/globals.css` under `@theme`:

```css
--color-accent:  #3ad18a;  /* primary accent */
--color-accent2: #7fae9b;  /* secondary */
--color-bg / --color-ink / --color-muted / ...
```

The 3D scenes (`components/three/*`) hold a few hard-coded hexes that mirror the accent — swap them alongside the tokens when changing palette.

## Adding content

- **A project** → add an entry to `src/data/projects.ts`.
  - `device: "mobile"` → it auto-appears in the **Mobile** section
  - `featured: true` → it appears in the **3D Work Showcase**
- **Real app screenshots** → drop images in `public/shots/` and set `shot` on the project, then map the texture in `components/three/screenTexture.ts`.
- **CV** → put the PDF at `public/Dibya_Ranjan_Sahu_Resume.pdf` (wired to the "Download CV" button).

## Deploy (Vercel)

1. Push this folder to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new) — Next.js is auto-detected, no config needed.
3. Deploy. (Add the CV PDF to `public/` first if you want the download button live.)
