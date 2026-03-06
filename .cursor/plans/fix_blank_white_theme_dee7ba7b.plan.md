---
name: Fix blank white theme
overview: "Fix two issues: (1) Add @source directive to global.css so Tailwind v4 scans .astro files and generates utility classes, (2) add a no-JS fallback for the scroll animations so content is never hidden."
todos:
  - id: fix-source
    content: Add @source directive to global.css so Tailwind scans .astro and .ts files
    status: completed
  - id: fix-animation
    content: Add no-JS fallback for animate-on-scroll visibility
    status: completed
isProject: false
---

# Fix Blank White Theme

## Root cause

Tailwind v4's `@tailwindcss/vite` plugin is not detecting utility classes in `.astro` files, so **zero utility CSS is generated**. The page renders as raw unstyled HTML on a white background.

## Fix 1: Add `@source` to [src/styles/global.css](src/styles/global.css)

Add a `@source` directive right after the `@import` line to explicitly tell Tailwind v4 where to scan for utility classes:

```css
@import "tailwindcss";
@source "../../src/**/*.{astro,ts}";
```

This tells Tailwind to scan all `.astro` and `.ts` files under `src/` for class names. Without this, Tailwind generates an empty stylesheet.

## Fix 2: Animation safety fallback

Several sections use `animate-on-scroll` which sets `opacity: 0`. If the JS doesn't fire, those sections stay invisible. Add a `<noscript>` fallback and improve the script timing in [src/layouts/Layout.astro](src/layouts/Layout.astro):

- Wrap animation initialization in `DOMContentLoaded` or use Astro's `is:inline` directive to ensure timing
- Add a CSS fallback: `.no-js .animate-on-scroll { opacity: 1; transform: none; }`

## Files to change

- **[src/styles/global.css](src/styles/global.css)** -- Add `@source` directive (1 line)
- **[src/layouts/Layout.astro](src/layouts/Layout.astro)** -- Add no-JS animation fallback
