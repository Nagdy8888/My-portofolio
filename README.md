# Mustafa Alnagdy — Portfolio

An Astro portfolio for AI engineering clients and employers. The engineering showcase uses real project interfaces, focused case studies, and career information from the supplied October 2026 CV.

## Run locally

- `npm install` installs dependencies.
- `npm run dev` starts the site at http://localhost:4321.
- `npm run verify` runs Astro/TypeScript diagnostics, validates asset paths, and builds the static site.
- `npm run preview` serves the production build.
- `npm run qa:local` crawls local project routes and assets. Set `QA_ORIGIN` to test another local port.

## Structure

- `src/pages/index.astro`: homepage, selected work, background, practice, experience, education, and contact.
- `src/pages/projects/index.astro`: project archive; category filtering is reflected in the URL and browser history.
- `src/pages/projects/[slug].astro`: case studies, screenshot galleries, native dialog viewer, related work, and architecture diagrams.
- `src/data/projects.ts`: typed project content shared by the archive and detail routes.
- `src/components/Navbar.astro` and `Footer.astro`: shared navigation and footer.
- `src/layouts/Layout.astro`: metadata, structured data, persistent theme, and skip navigation.
- `src/styles/global.css`: shared responsive design system.
- `public/fonts`: self-hosted variable Manrope, with its OFL license.

`PRODUCT.md` records product truth. `DESIGN.md` records the implemented visual system. `.impeccable/home-brief.md` records the confirmed design direction. Browser verification captures are in `.impeccable/review/`.

## Content and evidence

`public/Mustafa-Alnagdy-CV.pdf` is copied from the newest supplied `Mustafa_CV.pdf`. Older CV source files remain intact.

Smart RAG is in final development and evaluation. Its case study describes capabilities checked against the local project README and implementation. It makes no accuracy or production-readiness claim. Three actual browser captures from the running local app on 23 October 2026 show:

- `public/images/projects/smart-rag/ask.jpg`: a restored conversation displaying a document-derived comparison table.
- `public/images/projects/smart-rag/citation-page.jpg`: an original PDF citation page with highlighted evidence.
- `public/images/projects/smart-rag/figure.jpg`: an extracted original figure opened in the diagram viewer.

The displayed PDF and figure are source material from *Building Applications with AI Agents*. They demonstrate the app's handling of documents; authorship of that source material is not claimed. JPEG metadata and asset sidecars retain screenshot and pre-existing-asset provenance. No synthetic product screenshots ship.

## Deployment

Build output is `dist/`. Set `SITE_URL` to the actual public portfolio URL in the hosting environment to enable canonical URLs, social image URLs, and the sitemap. This redesign has been verified locally; publishing is a separate action.

## Smart RAG architecture diagrams

`src/data/smartRagDiagrams.ts` contains three Mermaid flowcharts: the application architecture, the company-document answer workflow, and the knowledge-graph source/evidence flow. Their explanations distinguish graph relationships from canonical document evidence. The case study displays pre-rendered SVGs in the portfolio palette and provides expandable Mermaid source. Narrow screens can scroll each diagram using keyboard or touch.

## Diagram validation and regeneration

`npm run verify` parses all seven Mermaid sources and checks their generated SVGs, source hashes, and dimensions. `npm run diagrams:render` regenerates diagrams for Smart RAG, Reel, and Image Analysis; `diagrams:reel` remains an alias. All diagrams ship as static images and work without client-side Mermaid or JavaScript. The renderer uses installed Chrome/Edge on Windows; set `MERMAID_BROWSER_PATH` to select another installed Chromium executable. Source remains expandable on each case-study page.

The October 24 refinement tightens section spacing, moves the CV action beside the main action, removes supporting screenshot sleeves, and increases metadata readability. The approved navy/mint engineering-editorial theme uses unframed product imagery, ruled project articles, and mint caption and contact accents.
