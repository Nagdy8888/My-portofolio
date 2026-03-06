---
name: Portfolio from CV
overview: A single-page portfolio website for Mustafa Alnagdy - Aspiring Data Scientist and Petrochemical Process Engineering student. Sections ordered by impact, professional corporate theme, built with Astro + Tailwind CSS v4. This plan is detailed enough for any LLM to implement.
todos: []
isProject: false
---

# Portfolio Website Plan - Mustafa Alnagdy (Detailed Implementation Guide)

This plan is written so that ANY coding LLM (even a less capable one) can follow it step-by-step and produce the full portfolio. Every command, file, content block, and design token is specified explicitly.

---

## 1. SCAFFOLDING (Step 1)

### 1.1 Shell commands to run (in order)

The project already exists at `C:\Nagdy\Mustafa\My-portofolio`. The user's images are already in the root of that folder. We scaffold Astro INSIDE a temp folder, then move files up.

```bash
cd "C:\Nagdy\Mustafa\My-portofolio"
npm create astro@latest . -- --template minimal --install --no-git --typescript strictest
```

If the CLI asks about existing files, choose to continue/overwrite non-image files.

Then install Tailwind CSS v4 via the Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite
```

### 1.2 Configure Astro to use Tailwind v4

Edit `astro.config.mjs` to add the Tailwind Vite plugin:

```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

### 1.3 Create `src/styles/global.css` with Tailwind v4 theme

```css
@import "tailwindcss";

@theme {
  --color-primary: #1e3a5f;
  --color-primary-hover: #2a4f7f;
  --color-text: #1a1a1a;
  --color-text-light: #475569;
  --color-bg: #ffffff;
  --color-bg-alt: #f8f9fa;
  --color-border: #e5e7eb;
  --font-family-sans: 'Inter', sans-serif;
}
```

### 1.4 Move user images into `public/images/`

Create `public/images/` directory, then move/copy these files from the project root into it:

- `My photo.jpg`
- `cairo_university_logo.jpeg`
- `enppi_logo.jpeg`
- `MIS.jpeg`
- `onspec_engineering_solutions_logo.jpeg`
- `petrojet_logo.jpeg`
- `Waste Marche.png`

The original files in the root can be deleted after copying.

---

## 2. LAYOUT (Step 2)

### 2.1 `src/layouts/Layout.astro`

This is the root HTML shell. It must:

- Set `lang="en"` on the `<html>` tag
- Include `<meta charset="utf-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Set `<title>Mustafa Alnagdy | Data Scientist & Process Engineer</title>`
- Add Open Graph meta tags: `og:title`, `og:description`, `og:type` (website), `og:image` (headshot path)
- Add `<meta name="description" content="Portfolio of Mustafa Alnagdy - Aspiring Data Scientist and Petrochemical Process Systems Engineering student. Python, ML, data analytics, process modeling.">`
- Link Google Fonts for Inter: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">`
- Import `../styles/global.css`
- Set `font-family: 'Inter', sans-serif` on `<body>` via Tailwind class `font-sans`
- Set body background to white and text to `--color-text`
- Render `<slot />` for page content

### 2.2 `src/components/Navbar.astro`

**Structure:**

```html
<nav> (sticky top-0, z-50, bg-white, border-bottom border-[--color-border], shadow-sm)
  <div> (max-w-[1100px], mx-auto, px-6, flex, justify-between, items-center, h-16)
    <a href="#" class="logo"> text: "Mustafa Alnagdy" (font-semibold, text-lg, color primary)
    <ul> (hidden on mobile, flex gap-8 on md+) 
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button id="menu-toggle"> (visible only on mobile, hamburger icon - 3 horizontal lines via SVG or spans)
  </div>
  <div id="mobile-menu"> (hidden by default, shown when toggle clicked, flex-col, bg-white, border-top)
    Same 6 links as above, stacked vertically, py-3, px-6, border-b
  </div>
</nav>
```

**Nav link styling:** `text-sm font-medium text-[--color-text-light] hover:text-[--color-primary] transition-colors`

**Script (at bottom of file, inside `<script>` tag):**

```javascript
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
toggle?.addEventListener('click', () => {
  menu?.classList.toggle('hidden');
});
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu?.classList.add('hidden');
  });
});
```

**Smooth scroll:** Add to `global.css`:

```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 5rem;
}
```

---

## 3. SECTION COMPONENTS (Step 3) - Exact content and structure for each

All sections use a wrapper: `<section id="sectionname" class="py-16 md:py-20">` with inner `<div class="max-w-[1100px] mx-auto px-6">`.

Alternating background: Hero = white, About = white, Highlights = `bg-[--color-bg-alt]`, Experience = white, Projects = `bg-[--color-bg-alt]`, Skills = white, Education = `bg-[--color-bg-alt]`, Contact = white.

### 3.1 `src/components/Hero.astro`

**Layout:** Two columns on desktop (text left, photo right), stacked on mobile (photo on top).

**Left column content:**

- Small label: `<p class="text-sm font-medium text-[--color-primary] mb-2">Aspiring Data Scientist</p>`
- Name: `<h1 class="text-4xl md:text-5xl font-bold text-[--color-text] mb-4">Mustafa Abdel-Rahman Alnagdy</h1>`
- Tagline: `<p class="text-lg text-[--color-text-light] mb-2">Petrochemical Process Systems Engineering Student</p>`
- Location: `<p class="text-sm text-[--color-text-light] mb-6">Banha, Qalyubia, Egypt</p>`
- Two buttons:
  - Primary: `<a href="/Mustafa-Alnagdy-CV.pdf" download class="inline-block bg-[--color-primary] text-white px-6 py-3 rounded-md font-medium hover:bg-[--color-primary-hover] transition-colors mr-4">Download CV</a>`
  - Secondary: `<a href="#contact" class="inline-block border-2 border-[--color-primary] text-[--color-primary] px-6 py-3 rounded-md font-medium hover:bg-[--color-primary] hover:text-white transition-colors">Contact Me</a>`
- LinkedIn icon link below buttons: `<a href="https://www.linkedin.com/in/mustafa-alnagdy" target="_blank" rel="noopener noreferrer">` with an inline SVG of the LinkedIn logo (24x24, fill with primary color).

**Right column:**

- `<img src="/images/My photo.jpg" alt="Mustafa Alnagdy - Data Scientist and Process Engineer" class="w-44 h-44 rounded-full object-cover border-4 border-[--color-bg-alt] shadow-lg mx-auto md:mx-0" />`

### 3.2 `src/components/About.astro`

**Section heading pattern (reuse for all sections):**

```html
<h2 class="text-2xl md:text-3xl font-bold text-[--color-text] mb-2">About Me</h2>
<div class="w-16 h-1 bg-[--color-primary] mb-8"></div>
```

**Content (derived from CV, condensed):**

```
<p class="text-base leading-relaxed text-[--color-text-light] mb-4">
  Aspiring Data Scientist and senior Petrochemical Process Systems Engineering student at Cairo University
  with strong capabilities in machine learning, process modeling, and data-driven engineering solutions.
  Experienced in Python, data analytics, and visualization, with hands-on work in process data integration,
  anomaly detection, simulation workflows, and AI-powered automation.
</p>
<p class="text-base leading-relaxed text-[--color-text-light] mb-4">
  Currently completing a Data Science Professional Certificate (DataCamp) to advance expertise in ML,
  statistical modeling, and scalable data pipelines. Passionate about applying advanced analytics and AI
  to optimize industrial processes and drive innovation.
</p>
<p class="text-sm text-[--color-text-light]">
  <span class="font-semibold">Languages:</span> Arabic (Native), English (Professional Proficiency)
</p>
```

### 3.3 `src/components/Highlights.astro`

**Layout:** 4-column grid on desktop, 2x2 on tablet, stacked on mobile.

```html
<section class="py-10 bg-[--color-bg-alt]">
  <div class="max-w-[1100px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

**4 items, each in a card:**

```html
<div class="bg-white rounded-md p-6 text-center border border-[--color-border]">
  <p class="text-2xl font-bold text-[--color-primary]">3.63</p>
  <p class="text-sm text-[--color-text-light] mt-1">Cumulative GPA</p>
</div>
```

Item 1: value `3.63`, label `Cumulative GPA`
Item 2: value `DS & AI`, label `Current Intern at MIS`
Item 3: value `4`, label `ML Industrial Projects`
Item 4: value `In Progress`, label `DataCamp DS Certificate`

### 3.4 `src/components/Experience.astro`

**Layout:** Vertical timeline. Each entry is a card.

**6 internships in this EXACT order (most recent first):**

**Entry 1:**

- Logo: `/images/MIS.jpeg`
- Role: `Data Science & AI Intern`
- Company: `MIS`
- Dates: `Aug 2025 - Present`
- Bullets:
  - Developing AI agents and RAG agents using n8n automation and Python
  - Building automated workflows for integrating and analyzing structured and unstructured datasets
  - Building ML models for predictive analytics on business data

**Entry 2:**

- Logo: `/images/Waste Marche.png`
- Role: `Social Media Intern`
- Company: `Waste Marche`
- Dates: `Jun 2025 - Jul 2025`
- Bullets:
  - Created LinkedIn carousel posts on sustainability, carbon footprint, and waste management
  - Applied data-driven content strategy to increase engagement and reach

**Entry 3:**

- Logo: `/images/enppi_logo.jpeg`
- Role: `Process Engineer Intern`
- Company: `ENPPI`
- Dates: `Jul 2024`
- Bullets:
  - Gained knowledge of towers, heat exchangers, and process safety protocols
  - Learned industry best practices for safe and efficient process operations

**Entry 4:**

- Logo: `/images/onspec_engineering_solutions_logo.jpeg`
- Role: `Process Engineer Intern`
- Company: `Onspec Engineering`
- Dates: `Aug 2024`
- Bullets:
  - Conducted unsteady-state process simulation in Aspen HYSYS
  - Studied different pump types, components, and performance calculations

**Entry 5:**

- Logo: `/images/petrojet_logo.jpeg`
- Role: `Process Engineer Intern`
- Company: `Petrojet`
- Dates: `Jul 2023 - Aug 2023`
- Bullets:
  - Designed and interpreted BFD, PFD, and P&ID diagrams using AutoCAD
  - Collaborated on process data handling and documentation for engineering projects

**Entry 6:**

- Logo: `/images/onspec_engineering_solutions_logo.jpeg`
- Role: `Process Engineer Intern`
- Company: `Onspec Engineering`
- Dates: `Aug 2023 - Sep 2023`
- Bullets:
  - Analyzed System Flow Diagrams (SFD) and utilities flow diagrams
  - Learned steady-state simulation techniques in Aspen HYSYS

**Each card HTML structure:**

```html
<div class="flex gap-4 items-start bg-white rounded-md p-6 border border-[--color-border]">
  <img src="/images/LOGO.jpeg" alt="Company Name logo" class="w-12 h-12 object-contain flex-shrink-0 rounded" />
  <div>
    <h3 class="font-semibold text-[--color-text]">Role Title</h3>
    <p class="text-sm text-[--color-primary] font-medium">Company Name</p>
    <p class="text-xs text-[--color-text-light] mb-3">Dates</p>
    <ul class="list-disc list-inside text-sm text-[--color-text-light] space-y-1">
      <li>Bullet 1</li>
      <li>Bullet 2</li>
    </ul>
  </div>
</div>
```

Cards are in a `flex flex-col gap-6` container.

### 3.5 PROJECT SYSTEM (data-driven, scalable)

Projects are NOT hardcoded in components. They live in a **data file** so the user can add new projects anytime by adding an object to an array. The system has 3 parts:

#### 3.5.1 `src/data/projects.ts` (the single source of truth)

To add a new project, the user adds a new object to this array. Nothing else needs to change.

```typescript
export interface Project {
  slug: string;           // URL-safe identifier, e.g. "anomaly-detection"
  title: string;          // Display title
  shortDescription: string; // Max ~20 words, shown on home page cards
  fullDescription: string;  // Full paragraph(s), shown on detail page
  tags: string[];          // Tech tags
  featured: boolean;       // If true, shown on home page
  github?: string;         // GitHub URL (optional, omit if not available yet)
  liveUrl?: string;        // Live demo URL (optional)
}

export const projects: Project[] = [
  {
    slug: "chemical-process-ml",
    title: "Chemical Process ML Model",
    shortDescription: "Predictive model to optimize chemical reaction yield using regression algorithms.",
    fullDescription: "Built a predictive Python model to optimize reaction yield using regression algorithms and preprocessing techniques. Applied feature engineering and model evaluation to identify optimal process parameters for maximizing chemical output.",
    tags: ["Python", "Scikit-learn", "Regression", "Preprocessing"],
    featured: true,
    // github: "https://github.com/username/repo",  // uncomment when available
    // liveUrl: "https://example.com",               // uncomment when available
  },
  {
    slug: "anomaly-detection-multiphase-flow",
    title: "Anomaly Detection in Multiphase Flow",
    shortDescription: "ML system detecting air leakage and blockage faults using 29 sensor variables.",
    fullDescription: "Developed an ML-based anomaly detection system for a multiphase air-water flow facility using 29 sensor variables. Performed data cleaning, feature engineering, and model comparison to identify normal vs abnormal operation and classify two fault types (air leakage and air blockage), improving detection accuracy.",
    tags: ["Python", "Classification", "Feature Engineering", "Anomaly Detection"],
    featured: true,
  },
  {
    slug: "gas-eur-prediction",
    title: "Gas EUR Prediction",
    shortDescription: "Regression model predicting gas recovery for 507 simulated horizontal wells.",
    fullDescription: "Built a regression model to predict gas Estimated Ultimate Recovery (EUR) for 507 simulated horizontal multistage fractured wells using geological, drilling, and completion attributes. Performed data preprocessing, feature engineering, and model evaluation to achieve high correlation with actual EUR values, while analyzing feature importance to identify the most influential well parameters.",
    tags: ["Python", "Regression", "Feature Importance", "Reservoir Engineering"],
    featured: true,
  },
  {
    slug: "steel-electrical-load-prediction",
    title: "Steel Electrical Load Prediction",
    shortDescription: "Multi-class model predicting electricity load levels for 35k+ steel production cycles.",
    fullDescription: "Developed a multi-class classification model to predict electricity load levels (Light, Medium, Maximum) for 35k+ steel production cycles using historical consumption data, time-based features, grid measurements, and power factor indicators. Performed feature engineering on timestamp variables, reactive power metrics, and usage patterns to improve predictive accuracy.",
    tags: ["Python", "Classification", "Time-Series", "Energy Optimization"],
    featured: true,
  },
];
```

**To add a new project later:** Copy any object above, change the fields, and append it to the array. If `featured: true`, it appears on the home page. It always appears on `/projects` and gets its own `/projects/[slug]` page automatically.

#### 3.5.2 `src/components/Projects.astro` (home page section - shows featured only)

This component imports from the data file and renders only featured projects. It also includes a "View All Projects" link.

**Structure:**

```astro
---
import { projects } from '../data/projects';
const featured = projects.filter(p => p.featured).slice(0, 6);
---

<section id="projects" class="py-16 md:py-20 bg-[--color-bg-alt]">
  <div class="max-w-[1100px] mx-auto px-6">
    <h2>Featured Projects</h2>
    <div class="w-16 h-1 bg-[--color-primary] mb-8"></div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {featured.map(project => (
        <a href={`/projects/${project.slug}`} class="card-link-wrapper">
          <div class="bg-white rounded-md p-6 border border-[--color-border] hover:shadow-md transition-shadow h-full">
            <h3 class="font-semibold text-lg text-[--color-text] mb-2">{project.title}</h3>
            <p class="text-sm text-[--color-text-light] mb-4">{project.shortDescription}</p>
            <div class="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span class="text-xs font-medium bg-[--color-bg-alt] text-[--color-primary] px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
    <div class="text-center">
      <a href="/projects" class="inline-block border-2 border-[--color-primary] text-[--color-primary] px-6 py-3 rounded-md font-medium hover:bg-[--color-primary] hover:text-white transition-colors">
        View All Projects
      </a>
    </div>
  </div>
</section>
```

Each card is now a clickable link (`<a>`) that goes to the project detail page.

#### 3.5.3 `src/pages/projects/index.astro` (listing page - shows ALL projects)

**URL:** `/projects`

```astro
---
import Layout from '../../layouts/Layout.astro';
import Navbar from '../../components/Navbar.astro';
import Footer from '../../components/Footer.astro';
import { projects } from '../../data/projects';
---

<Layout>
  <Navbar />
  <main class="py-16 md:py-20">
    <div class="max-w-[1100px] mx-auto px-6">
      <a href="/" class="text-sm text-[--color-primary] hover:underline mb-6 inline-block">&larr; Back to Home</a>
      <h1 class="text-3xl md:text-4xl font-bold text-[--color-text] mb-2">All Projects</h1>
      <div class="w-16 h-1 bg-[--color-primary] mb-8"></div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <a href={`/projects/${project.slug}`}>
            <div class="bg-white rounded-md p-6 border border-[--color-border] hover:shadow-md transition-shadow h-full">
              <h3 class="font-semibold text-lg text-[--color-text] mb-2">{project.title}</h3>
              <p class="text-sm text-[--color-text-light] mb-4">{project.shortDescription}</p>
              <div class="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span class="text-xs font-medium bg-[--color-bg-alt] text-[--color-primary] px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </main>
  <Footer />
</Layout>
```

#### 3.5.4 `src/pages/projects/[slug].astro` (individual detail page)

**URL:** `/projects/chemical-process-ml`, `/projects/anomaly-detection-multiphase-flow`, etc.

Astro generates one page per project at build time using `getStaticPaths()`.

```astro
---
import Layout from '../../layouts/Layout.astro';
import Navbar from '../../components/Navbar.astro';
import Footer from '../../components/Footer.astro';
import { projects } from '../../data/projects';
import type { Project } from '../../data/projects';

export function getStaticPaths() {
  return projects.map(project => ({
    params: { slug: project.slug },
    props: { project },
  }));
}

const { project } = Astro.props as { project: Project };
---

<Layout>
  <Navbar />
  <main class="py-16 md:py-20">
    <div class="max-w-[800px] mx-auto px-6">
      <a href="/projects" class="text-sm text-[--color-primary] hover:underline mb-6 inline-block">&larr; Back to All Projects</a>
      <h1 class="text-3xl md:text-4xl font-bold text-[--color-text] mb-4">{project.title}</h1>
      <div class="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
          <span class="text-xs font-medium bg-[--color-bg-alt] text-[--color-primary] px-3 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div class="prose prose-slate max-w-none mb-8">
        <p class="text-base leading-relaxed text-[--color-text-light]">{project.fullDescription}</p>
      </div>
      <div class="flex gap-4">
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center gap-2 bg-[--color-primary] text-white px-5 py-2.5 rounded-md font-medium hover:bg-[--color-primary-hover] transition-colors">
            <!-- GitHub SVG icon 20x20 -->
            <span>View on GitHub</span>
          </a>
        ) : (
          <span class="inline-flex items-center gap-2 bg-[--color-border] text-[--color-text-light] px-5 py-2.5 rounded-md font-medium cursor-default">
            <!-- GitHub SVG icon 20x20 -->
            <span>GitHub - Coming Soon</span>
          </span>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center gap-2 border-2 border-[--color-primary] text-[--color-primary] px-5 py-2.5 rounded-md font-medium hover:bg-[--color-primary] hover:text-white transition-colors">
            <!-- External link SVG icon 20x20 -->
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  </main>
  <Footer />
</Layout>
```

**Key behaviors:**

- If `github` is provided: shows a blue "View on GitHub" button linking to the repo
- If `github` is NOT provided: shows a grayed-out "GitHub - Coming Soon" badge (not clickable)
- If `liveUrl` is provided: shows a "Live Demo" outline button
- If `liveUrl` is NOT provided: button is simply not rendered

#### 3.5.5 How to add a new project (user instructions)

Open `src/data/projects.ts` and add a new object to the `projects` array:

```typescript
{
  slug: "my-new-project",             // URL-safe, lowercase, hyphens
  title: "My New Project Title",
  shortDescription: "One sentence description for the card.",
  fullDescription: "Full paragraph for the detail page.",
  tags: ["Python", "React", "API"],
  featured: true,                     // set false to hide from home page
  github: "https://github.com/...",   // optional
  liveUrl: "https://...",             // optional
},
```

Save the file. The project automatically appears on `/projects` and gets its own page at `/projects/my-new-project`. If `featured: true`, it also shows on the home page.

### 3.6 `src/components/Skills.astro`

**Layout:** Each skill group is a row with a label and tag pills.

**5 groups:**

1. **Programming:** Python, HTML/CSS
2. **Data Science & ML:** Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Regression, Classification, Clustering, Feature Engineering, Statistical Analysis
3. **Process Engineering:** Aspen HYSYS, PFD, P&ID, Process Safety
4. **Tools:** n8n Automation, Microsoft Office, Jupyter Notebook, AutoCAD
5. **Soft Skills:** Analytical Thinking, Problem-Solving, Communication, Team Collaboration

**Each group HTML:**

```html
<div class="mb-6">
  <h3 class="text-sm font-semibold text-[--color-text] uppercase tracking-wider mb-3">Group Name</h3>
  <div class="flex flex-wrap gap-2">
    <span class="text-sm bg-[--color-bg-alt] text-[--color-text-light] px-3 py-1.5 rounded-md border border-[--color-border]">Skill Name</span>
  </div>
</div>
```

### 3.7 `src/components/Education.astro`

**Two subsections: Degree and Certifications.**

**Degree:**

```html
<div class="flex gap-4 items-start mb-8">
  <img src="/images/cairo_university_logo.jpeg" alt="Cairo University logo" class="w-12 h-12 object-contain flex-shrink-0 rounded" />
  <div>
    <h3 class="font-semibold text-[--color-text]">B.Sc. Petrochemical Processing Systems Engineering</h3>
    <p class="text-sm text-[--color-primary] font-medium">Cairo University - Faculty of Engineering (CHS)</p>
    <p class="text-xs text-[--color-text-light]">2021 - Jun 2026 | GPA: 3.63</p>
  </div>
</div>
```

**Certifications subsection heading:**

```html
<h3 class="text-lg font-semibold text-[--color-text] mb-4">Certifications & Workshops</h3>
```

**4 items as a compact list:**

- Data Science Professional Certificate - DataCamp (In Progress)
- Circular Economy - Cairo University (Feb 2024)
- Process Safety - ENPPI (Sep 2023)
- Web Development - Udacity (Sep 2022)

Each item:

```html
<div class="flex justify-between items-center py-3 border-b border-[--color-border]">
  <div>
    <p class="font-medium text-sm text-[--color-text]">Certificate Name</p>
    <p class="text-xs text-[--color-text-light]">Issuing Organization</p>
  </div>
  <span class="text-xs text-[--color-text-light]">Date or Status</span>
</div>
```

### 3.8 `src/components/Contact.astro`

**Content:**

```html
<p class="text-base text-[--color-text-light] mb-8">
  Open to Data Science/ML internship and entry-level opportunities. Feel free to reach out.
</p>
<div class="flex flex-col sm:flex-row gap-6">
  <a href="mailto:mustafaalnagdy26@gmail.com" class="flex items-center gap-3 text-[--color-text] hover:text-[--color-primary] transition-colors">
    <!-- Email SVG icon (20x20) -->
    <span class="text-sm">mustafaalnagdy26@gmail.com</span>
  </a>
  <a href="https://www.linkedin.com/in/mustafa-alnagdy" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-[--color-text] hover:text-[--color-primary] transition-colors">
    <!-- LinkedIn SVG icon (20x20) -->
    <span class="text-sm">linkedin.com/in/mustafa-alnagdy</span>
  </a>
  <a href="tel:+201068878853" class="flex items-center gap-3 text-[--color-text] hover:text-[--color-primary] transition-colors">
    <!-- Phone SVG icon (20x20) -->
    <span class="text-sm">+20 106 887 8853</span>
  </a>
</div>
```

Use inline SVG icons from Lucide ([https://lucide.dev](https://lucide.dev)): `mail`, `linkedin`, `phone`.

### 3.9 `src/components/Footer.astro`

```html
<footer class="py-8 border-t border-[--color-border]">
  <div class="max-w-[1100px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
    <p class="text-sm text-[--color-text-light]">&copy; 2026 Mustafa Alnagdy. All rights reserved.</p>
    <div class="flex items-center gap-4">
      <a href="https://www.linkedin.com/in/mustafa-alnagdy" target="_blank" rel="noopener noreferrer" class="text-[--color-text-light] hover:text-[--color-primary] transition-colors">
        <!-- LinkedIn SVG 20x20 -->
      </a>
      <a href="mailto:mustafaalnagdy26@gmail.com" class="text-[--color-text-light] hover:text-[--color-primary] transition-colors">
        <!-- Mail SVG 20x20 -->
      </a>
      <a href="#" class="text-sm text-[--color-text-light] hover:text-[--color-primary] transition-colors">Back to top</a>
    </div>
  </div>
</footer>
```

---

## 4. INDEX PAGE (Step 3 continued)

### `src/pages/index.astro`

```astro
---
import Layout from '../layouts/Layout.astro';
import Navbar from '../components/Navbar.astro';
import Hero from '../components/Hero.astro';
import About from '../components/About.astro';
import Highlights from '../components/Highlights.astro';
import Experience from '../components/Experience.astro';
import Projects from '../components/Projects.astro';
import Skills from '../components/Skills.astro';
import Education from '../components/Education.astro';
import Contact from '../components/Contact.astro';
import Footer from '../components/Footer.astro';
---

<Layout>
  <Navbar />
  <main>
    <Hero />
    <About />
    <Highlights />
    <Experience />
    <Projects />
    <Skills />
    <Education />
    <Contact />
  </main>
  <Footer />
</Layout>
```

---

## 5. SCROLL ANIMATIONS (Step 5)

Add this to the bottom of `Layout.astro` inside a `<script>` tag:

```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
  observer.observe(el);
});
```

Add to `global.css`:

```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}

.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

Apply `class="animate-on-scroll"` to each section wrapper and each card/timeline item for staggered reveal.

---

## 6. IMAGE RULES

- Headshot (`My photo.jpg`): displayed in 176x176 container, `rounded-full`, `object-cover`, `border-4`, alt text: `"Mustafa Alnagdy - Data Scientist and Process Engineer"`
- Company logos: displayed in 48x48 container, `object-contain`, `rounded`, `flex-shrink-0`, alt text: `"[Company Name] logo"`
- Cairo University logo: same 48x48 rules as company logos
- All images served from `/images/` in `public/`

---

## 7. FILE STRUCTURE (final)

```text
My-portofolio/
|-- src/
|   |-- components/
|   |   |-- Navbar.astro
|   |   |-- Hero.astro
|   |   |-- About.astro
|   |   |-- Highlights.astro
|   |   |-- Experience.astro
|   |   |-- Projects.astro         # Home page featured projects grid + "View All" link
|   |   |-- Skills.astro
|   |   |-- Education.astro
|   |   |-- Contact.astro
|   |   `-- Footer.astro
|   |-- data/
|   |   `-- projects.ts            # SINGLE SOURCE OF TRUTH for all projects
|   |-- layouts/
|   |   `-- Layout.astro
|   |-- pages/
|   |   |-- index.astro            # Home page
|   |   `-- projects/
|   |       |-- index.astro        # /projects listing page (all projects)
|   |       `-- [slug].astro       # /projects/[slug] detail page (auto-generated per project)
|   `-- styles/
|       `-- global.css
|-- public/
|   |-- images/
|   |   |-- My photo.jpg
|   |   |-- cairo_university_logo.jpeg
|   |   |-- enppi_logo.jpeg
|   |   |-- MIS.jpeg
|   |   |-- onspec_engineering_solutions_logo.jpeg
|   |   |-- petrojet_logo.jpeg
|   |   `-- Waste Marche.png
|   `-- Mustafa-Alnagdy-CV.pdf
|-- astro.config.mjs
|-- package.json
`-- README.md
```

---

## 8. DESIGN TOKENS REFERENCE

Use these exact values everywhere:

- Primary: `#1e3a5f` (deep blue) - buttons, links, accents, nav active
- Primary hover: `#2a4f7f`
- Text: `#1a1a1a` (dark charcoal) - headings and body
- Text light: `#475569` (slate) - secondary text, descriptions, dates
- Background: `#ffffff` (white) - main sections
- Background alt: `#f8f9fa` (light gray) - alternating sections
- Border: `#e5e7eb` - card borders, dividers
- Font: Inter, weights 400 (body), 500 (medium), 600 (semibold), 700 (bold)
- Border radius: 6px for cards/buttons, full for headshot
- Max content width: 1100px
- Section padding: `py-16 md:py-20` (4rem / 5rem)
- Container: `max-w-[1100px] mx-auto px-6`

---

## 9. IMPLEMENTATION ORDER (step by step)

1. Run scaffold commands from Section 1.1
2. Configure `astro.config.mjs` as in Section 1.2
3. Create `src/styles/global.css` as in Section 1.3
4. Move images to `public/images/` as in Section 1.4
5. Create `src/layouts/Layout.astro` as in Section 2.1
6. Create `src/components/Navbar.astro` as in Section 2.2
7. Create `src/components/Hero.astro` as in Section 3.1
8. Create `src/components/About.astro` as in Section 3.2
9. Create `src/components/Highlights.astro` as in Section 3.3
10. Create `src/components/Experience.astro` as in Section 3.4
11. Create `src/data/projects.ts` as in Section 3.5.1 (data file FIRST)
12. Create `src/components/Projects.astro` as in Section 3.5.2 (home page featured grid)
13. Create `src/pages/projects/index.astro` as in Section 3.5.3 (listing page)
14. Create `src/pages/projects/[slug].astro` as in Section 3.5.4 (detail page)
15. Create `src/components/Skills.astro` as in Section 3.6
16. Create `src/components/Education.astro` as in Section 3.7
17. Create `src/components/Contact.astro` as in Section 3.8
18. Create `src/components/Footer.astro` as in Section 3.9
19. Create `src/pages/index.astro` as in Section 4
20. Add scroll animation CSS and script as in Section 5
21. Run `npm run dev` and verify home page sections render correctly
22. Navigate to `/projects` and verify all project cards appear
23. Click a project card and verify the detail page renders with full description, tags, and GitHub/link buttons
24. Test responsive behavior (resize browser to mobile width)
25. Test all links (nav anchors, Download CV, Contact Me, LinkedIn, email, phone, project links, back links)
26. Test keyboard navigation (Tab through all interactive elements)
27. Check contrast with browser dev tools

---

## 10. QUALITY CHECKLIST (verify before shipping)

**Home page:**

- All 9 sections visible and correctly ordered
- Headshot displays correctly (rounded, correct size)
- All 6 company logos display (correct size, not stretched)
- Cairo University logo displays in Education
- Nav links scroll to correct sections
- Mobile hamburger menu opens/closes
- Mobile menu closes when a link is clicked
- "Download CV" button works (or shows placeholder if no PDF yet)
- "Contact Me" scrolls to Contact section
- Featured project cards link to their detail pages
- "View All Projects" button links to `/projects`
- LinkedIn link opens in new tab
- Email link opens mail client
- Phone link is clickable
- Scroll animations fire on scroll (and are disabled with prefers-reduced-motion)

**Project pages:**

- `/projects` shows ALL projects from the data file (not just featured)
- Each project card on `/projects` links to `/projects/[slug]`
- Detail page shows: title, full description, tags, GitHub button (or "Coming Soon"), optional live link
- "Back to All Projects" link works on detail pages
- "Back to Home" link works on listing page
- Adding a new object to `src/data/projects.ts` creates a new project automatically

**Global:**

- Text is readable (min 16px body, sufficient contrast)
- Page works on mobile, tablet, and desktop widths
- No horizontal scrollbar at any viewport size
- All images have descriptive alt text
- `<title>` and `<meta description>` are set
- Lighthouse desktop scores >= 90 on all 4 categories

---

## Summary

This plan contains every command, every file, every CSS token, every content block, and every HTML structure needed to build the portfolio. The project system is data-driven: all projects live in `src/data/projects.ts`. Adding a new project = adding one object to that array. The system auto-generates a listing page (`/projects`) and individual detail pages (`/projects/[slug]`) for every entry.

An LLM implementing this should:

1. Follow sections 1-5 in order
2. Create the project data file (Section 3.5.1) BEFORE the components that consume it
3. Use exact design tokens from Section 8
4. Use exact content text from Section 3 (derived from CV)
5. Verify against the checklist in Section 10

