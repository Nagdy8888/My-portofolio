# Mustafa Alnagdy — Portfolio

Personal portfolio site for **Mustafa Abdel-Rahman Alnagdy**, focused on data science,
AI agents, and machine learning for industrial and process-system data.

## Tech stack

- **Astro 5** — static site, file-based routing
- **Tailwind CSS v4** — styling via `@tailwindcss/vite`
- **TypeScript** — project data and types
- **Static SVG architecture** — accessible diagrams without a client runtime
- **Astro Sitemap** — enabled when `SITE_URL` is configured

## Project structure

```text
src/
├── components/       # Layout and section components
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Highlights.astro
│   ├── Experience.astro
│   ├── Projects.astro    # Featured projects (home)
│   ├── Skills.astro
│   ├── Education.astro
│   ├── Contact.astro
│   └── Footer.astro
├── data/
│   └── projects.ts       # Single source of truth for all projects
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro       # Home (one-page sections)
│   ├── robots.txt.ts     # Environment-aware robots response
│   └── projects/
│       ├── index.astro  # All projects + category filter
│       └── [slug].astro # Project detail (Problem / Approach / Results)
└── styles/
    └── global.css       # Tailwind + theme + animations

public/
├── images/              # Optimized portrait, logos, and real project visuals
├── Mustafa-Alnagdy-CV.pdf
├── favicon.svg
└── favicon.ico

scripts/
└── validate-content.mjs # Checks public asset paths and casing
```

## Commands

| Command           | Action                                      |
| ----------------- | ------------------------------------------- |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `http://localhost:4321` |
| `npm run build`   | Build for production to `./dist/`            |
| `npm run preview` | Preview the production build locally        |
| `npm run check`   | Run Astro and TypeScript diagnostics         |
| `npm run validate:content` | Validate referenced public assets |
| `npm run qa:local` | Crawl local routes and assets while dev server runs |
| `npm run verify`  | Run checks, content validation, and build    |

## Adding a project

Edit **`src/data/projects.ts`** and add an object to the `projects` array:

```typescript
{
  slug: "my-project",
  title: "My Project Title",
  shortDescription: "One sentence for cards.",
  fullDescription: "Full paragraph for the detail page.",
  tags: ["Python", "ML"],
  featured: true,
  featuredRank: 3,
  categories: ["Machine Learning"],
  keyResult: "Optional one-line result",
  dateLabel: "July 2026",
  role: "Your role",
  scope: "Dataset or system scope",
  metrics: [
    { label: "Verified metric", value: "Measured value" },
  ],
  problem: "Optional",
  approach: "Optional",
  results: "Optional",
  tools: ["Python", "Pandas"],
  image: "/images/projects/my-project.webp",
  imageAlt: "Describe what the project image shows",
  imageWidth: 1600,
  imageHeight: 900,
  github: "https://github.com/...",
  liveUrl: "https://...",
}
```

- The project appears on **/projects** and gets a detail page at **/projects/my-project**.
- If `featured: true`, it also appears in the Featured Projects section on the home page.
- Keep only 3–4 projects featured and assign their order with `featuredRank`.
- Omit unavailable links and metrics. Do not publish placeholders or estimated performance.

## Theme and design

- Industrial-AI positioning with a focused gradient hero, light/dark themes, and blue accents.
- Design tokens and category badge colors live in `src/styles/global.css`.
- Scroll animations use `animate-on-scroll` and a no-JS fallback (`.no-js`).
- Keyboard focus, reduced motion, and dialog focus management are included.

## Production metadata

Set the canonical production origin before building:

```bash
SITE_URL=https://your-domain.example
```

Use `.env.example` as the deployment reference. Without `SITE_URL`, the site still builds,
but canonical URLs and sitemap generation are intentionally omitted.

See `CONTENT_CHECKLIST.md` for facts and evidence that still require verification.

## Requirements

- **Node.js** 18+ (e.g. v22.x)
- **npm** 9+

## License

Private portfolio. All rights reserved.
