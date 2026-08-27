# Ganesh A. — 4D Interactive Developer Portfolio

An interactive, scroll-driven developer portfolio built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**.

## 🚀 Features

- **4D Scroll Engine**: Smooth, scroll-driven RAF animation tracking mission trajectories, multi-layered parallax starfields, and spacecraft physics.
- **HUD Telemetry**: Real-time mission metrics, vectors, and scroll-progress indicators.
- **Interactive Case Studies**: Detailed modal dialog overlays for featured systems (Focus Tourism, Client Hunter, ChatG, Namma Kanakku, TRMS).
- **Reaction Story**: Dynamic energy burst storytelling component.
- **Recruiter Channel**: Direct email contact launcher with honeypot spam protection.
- **Modular Component Architecture**: Decoupled, strongly typed components, data sets, custom hooks, and types.

---

## 🛠️ Project Structure

```
├── app/
│   ├── components/
│   │   ├── icons/
│   │   │   └── ArrowIcon.tsx       # Reusable SVG Arrow
│   │   ├── BurstStory.tsx          # Energy reaction burst story
│   │   ├── CareerSection.tsx       # Education & experience cards
│   │   ├── ContactSection.tsx      # Recruiter contact form
│   │   ├── Footer.tsx              # Footer
│   │   ├── Hero.tsx                # Opening hero with coordinates & title
│   │   ├── MissionJourney.tsx      # 4D spacecraft flight & HUD
│   │   ├── Navbar.tsx              # Nav header & mobile menu
│   │   ├── PageEffects.tsx         # Film grain & progress bar
│   │   ├── ProjectDialog.tsx       # Accessible modal dialog
│   │   ├── ProjectsSection.tsx     # Selected systems grid
│   │   └── SystemsSection.tsx      # Skills & about block
│   ├── data/
│   │   ├── career.ts               # Education, experience & certifications
│   │   ├── projects.ts             # Featured projects data
│   │   ├── siteConfig.ts           # Site configuration & personal info
│   │   └── skills.ts               # Skill taxonomy
│   ├── hooks/
│   │   └── useScrollTelemetry.ts   # Scroll progress & IntersectionObserver hook
│   ├── types/
│   │   └── portfolio.ts            # TypeScript interfaces
│   ├── globals.css                 # Design system & CSS animations
│   ├── layout.tsx                  # Root layout & SEO metadata
│   └── page.tsx                    # Composed main page
├── public/                         # Static assets (images, icons, favicons)
└── dist/                           # Static production export with index.html
```

---

## 💻 Available Scripts

- **`npm run dev`**: Starts the local development server at `http://localhost:3000`.
- **`npm run build`**: Generates the static production build into the `dist/` directory (complete with `index.html`).
- **`npm run start`**: Runs the production server.
- **`npm run lint`**: Runs ESLint across the codebase.

---

## 📦 Tech Stack

- **Framework**: Next.js 16 / React 19
- **Styling**: Tailwind CSS v4 + Vanilla CSS Custom Properties
- **Language**: TypeScript
