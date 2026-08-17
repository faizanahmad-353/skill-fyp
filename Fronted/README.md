# Skill Swapper

A React + TypeScript + Vite application for managing skill swap details and interactions.

## Overview

`skill-swapper` is built with Vite, React, Tailwind CSS, and React Router.
The app currently renders a skill swap detail page and includes support for user actions like scheduling, canceling, and submitting feedback.

## Built with

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- lucide-react icons
- react-hot-toast

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the production app:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

## Project structure

- `src/main.tsx` — application entry point
- `src/App.tsx` — top-level component
- `src/pages/SwapDetail.tsx` — current rendered swap detail page
- `src/components/` — reusable UI components
- `src/index.css` / `src/App.css` — global styles

## Notes

- The app currently renders `SwapDetail` directly from `App.tsx`.
- Routing is configured in `main.tsx` using `BrowserRouter`, so additional routes can be enabled later.
- Tailwind is configured through `@tailwindcss/vite` and the current CSS files.

## License

This project is private by default as specified in `package.json`.
# skill-swapper
