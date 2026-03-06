# Mustafa Alnagdy — Portfolio

Personal portfolio site for **Mustafa Abdel-Rahman Alnagdy**: Aspiring Data Scientist and Petrochemical Process Systems Engineering student. Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

## Tech stack

- **Astro 5** — static site, file-based routing
- **Tailwind CSS v4** — styling via `@tailwindcss/vite`
- **TypeScript** — project data and types

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
│   ├── index.astro      # Home (one-page sections)
│   └── projects/
│       ├── index.astro  # All projects + category filter
│       └── [slug].astro # Project detail (Problem / Approach / Results)
└── styles/
    └── global.css       # Tailwind + theme + animations

public/
├── images/              # Photo, logos, project thumbnails
│   └── projects/        # Placeholder or real project images
├── Mustafa-Alnagdy-CV.pdf
├── favicon.svg
└── favicon.ico
```

## Commands

| Command           | Action                                      |
| ----------------- | ------------------------------------------- |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `http://localhost:4321` |
| `npm run build`   | Build for production to `./dist/`            |
| `npm run preview` | Preview the production build locally        |

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
  category: "Machine Learning",  // or Data Analysis, Process Engineering, Automation, AI Agent
  keyResult: "Optional one-line result",
  problem: "Optional",
  approach: "Optional",
  results: "Optional",
  tools: ["Python", "Pandas"],
  image: "/images/projects/my-project.svg",
  github: "https://github.com/...",
  liveUrl: "https://...",
}
```

- The project appears on **/projects** and gets a detail page at **/projects/my-project**.
- If `featured: true`, it also appears in the Featured Projects section on the home page.

## Theme and design

- **Option B** (Gradient Hero + light sections): gradient hero, white/light gray sections, royal blue accent, dark footer.
- Design tokens and category badge colors live in `src/styles/global.css`.
- Scroll animations use `animate-on-scroll` and a no-JS fallback (`.no-js`).

## Requirements

- **Node.js** 18+ (e.g. v22.x)
- **npm** 9+

## License

Private portfolio. All rights reserved.
