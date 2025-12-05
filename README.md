# Eslam Aly — Portfolio

Modern personal portfolio built with React and Vite. It highlights engineering experience, featured projects, publications, and includes an integrated contact form.

## Features
- Animated sections and tabbed project gallery powered by Framer Motion and React Tabs.
- Responsive layout styled with Tailwind CSS v4 (via the Vite plugin).
- Contact form backed by Web3Forms, with success modal and basic validation.
- Downloadable CV links and quick-scroll navigation with active section state.
- Project showcases with embedded demo videos.

## Tech Stack
- React 19 + Vite 7
- Tailwind CSS 4 (@tailwindcss/vite)
- Framer Motion, React Tabs, React Icons
- Deployed as a static build (`vite build`)

## Getting Started
Prerequisites: Node.js 18+ and npm.

Install dependencies:
```bash
npm install
```

Run the app locally:
```bash
npm run dev -- --host 127.0.0.1 --port 4173
```
The server logs a local URL you can open in the browser.

Run lint:
```bash
npm run lint
```

Create a production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Configuration Notes
- The contact form uses Web3Forms. Replace the `access_key` in `src/components/Contact.jsx` with your own before deploying.
- CV download links point to `/Eslam_Aly_CV_2025.pdf`; place the file in `public/` or update the path.
- Asset-heavy sections (project videos and hero image) load from `src/assets/`. Swap them with your own media as needed.

## Project Structure (high level)
- `src/App.jsx` — assembles page sections.
- `src/components/` — Navbar, Hero, About, Projects (tabbed gallery), Publications, Contact, Footer.
- `src/utilis/animationVariants.js` — shared Framer Motion variants.
- `public/` — static assets served as-is.
