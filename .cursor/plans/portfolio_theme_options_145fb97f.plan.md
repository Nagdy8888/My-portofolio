---
name: Portfolio Theme Options
overview: Three professional theme options for the portfolio -- Dark, Gradient-Light, and Hybrid -- each with full color palettes, section styling, and typography so the user can compare and choose one to implement.
todos: []
isProject: false
---

# Portfolio Theme Options -- Pick One

All three options reuse the same Astro + Tailwind v4 codebase. The only files that change are `src/styles/global.css` (design tokens + custom styles) and minor Tailwind class tweaks in the `.astro` components. The structure, content, and animations stay identical.

---

## Option A -- Full Dark Theme

A modern developer/data-science aesthetic. Dark backgrounds everywhere, light text, glowing accent highlights.

### Color Palette

- **Background main:** `#0f172a` (slate-900, deep navy)
- **Background alt (cards/sections):** `#1e293b` (slate-800)
- **Background card:** `#1e293b` with `border: 1px solid #334155`
- **Text primary:** `#f1f5f9` (slate-100, off-white)
- **Text secondary:** `#94a3b8` (slate-400, muted gray)
- **Accent:** `#38bdf8` (sky-400, electric blue) -- for buttons, links, underlines, tag pills
- **Accent hover:** `#0ea5e9` (sky-500)
- **Border:** `#334155` (slate-700)
- **Headshot border:** `#38bdf8` with subtle `box-shadow: 0 0 20px rgba(56,189,248,0.15)`

### Section Backgrounds

- Navbar: `bg-[#0f172a]/95 backdrop-blur-md` (semi-transparent with blur)
- Hero: `#0f172a` with a subtle radial gradient glow behind the headshot
- About: `#0f172a`
- Highlights: `#1e293b`
- Experience: `#0f172a`
- Projects: `#1e293b`
- Skills: `#0f172a`
- Education: `#1e293b`
- Contact: `#0f172a`
- Footer: `#0f172a` with top border `#334155`

### Typography

- Font: Inter (same)
- Headings: `#f1f5f9` (bright white)
- Body text: `#94a3b8` (muted)
- Links/accents: `#38bdf8`

### Button Styles

- Primary button: `bg-[#38bdf8] text-[#0f172a]` (bright accent on dark text) -- hover `bg-[#0ea5e9]`
- Secondary button: `border-2 border-[#38bdf8] text-[#38bdf8]` -- hover fills with accent
- Tag pills: `bg-[#334155] text-[#38bdf8]` with no border

### Vibe

Clean, modern, developer-focused. Think GitHub dark mode or Linear app. Good for data science / tech roles.

---

## Option B -- Gradient Hero + Elevated Light

Keeps a light base but adds a bold gradient hero banner, colored section accents, card shadows, and stronger visual hierarchy. Not plain white -- warm grays, subtle textures.

### Color Palette

- **Background main:** `#ffffff`
- **Background alt:** `#f1f5f9` (cool gray, not the near-white `#f8f9fa`)
- **Background card:** `#ffffff` with `shadow-md` and `border: 1px solid #e2e8f0`
- **Text primary:** `#0f172a` (very dark navy)
- **Text secondary:** `#64748b` (slate-500)
- **Accent:** `#2563eb` (blue-600, strong royal blue)
- **Accent hover:** `#1d4ed8` (blue-700)
- **Accent light:** `#dbeafe` (blue-100, for tag pill backgrounds)
- **Border:** `#e2e8f0` (slate-200)
- **Gradient:** `linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #0ea5e9 100%)` (navy to blue to cyan)

### Section Backgrounds

- Navbar: `bg-white/90 backdrop-blur-md shadow-sm`
- Hero: **Full gradient background** (`bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#0ea5e9]`) with ALL hero text in white
- About: `#ffffff`
- Highlights: `#f1f5f9` with cards having `shadow-md`
- Experience: `#ffffff`
- Projects: `#f1f5f9`
- Skills: `#ffffff`
- Education: `#f1f5f9`
- Contact: `#ffffff` with a subtle gradient top border (4px colored strip)
- Footer: `#0f172a` (dark footer for contrast, white text)

### Typography

- Font: Inter (same)
- Headings: `#0f172a`
- Body text: `#64748b`
- Section heading underline: gradient bar instead of solid color (`bg-gradient-to-r from-[#1e3a5f] to-[#0ea5e9]`)

### Button Styles

- Primary button (in hero, white on gradient): `bg-white text-[#1e3a5f]` -- hover `bg-white/90`
- Primary button (elsewhere): `bg-[#2563eb] text-white` -- hover `bg-[#1d4ed8]`
- Secondary button: `border-2 border-[#2563eb] text-[#2563eb]` -- hover fills
- Tag pills: `bg-[#dbeafe] text-[#2563eb]`

### Vibe

Professional, polished, corporate-friendly. Gradient hero makes a strong first impression. Great for recruiters / LinkedIn traffic. Think Stripe or Vercel marketing pages.

---

## Option C -- Dark Hero + Light Body (Hybrid)

Dramatic dark header/hero that transitions into clean light sections. Best of both worlds.

### Color Palette

- **Dark zone (navbar + hero):** `#0f172a` background, `#f1f5f9` text, `#38bdf8` accent
- **Light zone (all other sections):** `#ffffff` / `#f8fafc` alternating, `#0f172a` text, `#1e3a5f` accent
- **Card:** `#ffffff` with `shadow-sm border border-[#e2e8f0]`
- **Text primary (light zone):** `#0f172a`
- **Text secondary (light zone):** `#64748b`
- **Accent:** `#1e3a5f` (deep blue, same as current but used more boldly)
- **Accent highlight:** `#38bdf8` (used sparingly for hover states and the hero)
- **Border:** `#e2e8f0`

### Section Backgrounds

- Navbar: `bg-[#0f172a]` (always dark, even when scrolling over light sections)
- Hero: `bg-[#0f172a]` -- name and tagline in white, accent in `#38bdf8`, headshot with bright border
- **Transition:** A subtle wave/curve SVG divider or diagonal clip-path between hero and About
- About: `#ffffff`
- Highlights: `#f8fafc`
- Experience: `#ffffff`
- Projects: `#f8fafc`
- Skills: `#ffffff`
- Education: `#f8fafc`
- Contact: `#ffffff`
- Footer: `#0f172a` (dark, matching the hero for bookend effect)

### Typography

- Font: Inter (same)
- Hero headings: `#f1f5f9`
- Body headings: `#0f172a`
- Body text: `#64748b`
- Section underline: solid `#1e3a5f`

### Button Styles

- Hero primary: `bg-[#38bdf8] text-[#0f172a]` -- hover `bg-[#0ea5e9]`
- Hero secondary: `border-2 border-white text-white` -- hover `bg-white text-[#0f172a]`
- Body primary: `bg-[#1e3a5f] text-white` -- hover `bg-[#2a4f7f]`
- Body secondary: `border-2 border-[#1e3a5f] text-[#1e3a5f]`
- Tag pills: `bg-[#f1f5f9] text-[#1e3a5f]`

### Vibe

Dramatic entrance, readable content. The dark-to-light transition creates visual depth. Think Apple product pages or portfolio sites with a strong hero. Professional but not monotone.

---

## Comparison at a Glance

- **Option A (Full Dark):** Entire site is dark -- modern, developer-focused, high contrast. Best if you want to stand out as a tech/DS person.
- **Option B (Gradient Light):** Light site with a bold gradient hero and elevated card design. Best if you want recruiter-friendly, corporate-polished look.
- **Option C (Hybrid):** Dark hero + light body. Best balance of visual impact and readability. Professional but memorable.

## Implementation Effort

All three options require changing the same files:

- `src/styles/global.css` -- update `@theme` tokens and add new utility styles
- All `.astro` components -- update Tailwind classes for backgrounds, text colors, borders
- For Option C only -- add a wave/divider SVG between hero and content

Estimated implementation: ~1 hour for any option. No new dependencies needed.