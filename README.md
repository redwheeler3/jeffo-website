# Your Online Hub

A lightweight personal website for Jeff Oriecuia built with React, TypeScript, and Vite. It functions as a simple online profile and link hub with social links, featured projects, and a short bio.

**Live URL**: https://www.jeffo.net

## Project Overview

This repo contains a small single-page application that includes:

- A profile layout with avatar, intro text, and social icons
- Featured outbound links to projects and resources
- Google Analytics tracking for outbound link clicks
- Responsive styling for desktop and mobile
- Static deployment via GitHub Pages with a custom domain

## Architecture

### Technology Stack

- **Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 7.3
- **Routing**: React Router v6 with `HashRouter`
- **Styling**: Tailwind CSS
- **UI Layer**: Custom components plus shadcn/ui dependencies in the project
- **Analytics**: Google Analytics (`gtag.js`)

### Project Structure

```text
src/
├── components/       # Reusable UI building blocks
├── assets/           # Static assets such as the profile image
├── pages/            # Route components
│   ├── Index.tsx     # Main landing page
│   └── NotFound.tsx  # Fallback route
├── hooks/            # Shared hooks/utilities
├── lib/              # Helper functions
├── App.tsx           # Providers and routes
└── main.tsx          # App entry point
```

## Analytics

Google Analytics is loaded in `index.html`. Outbound click tracking is implemented in:

- `src/components/LinkButton.tsx`
- `src/components/SocialIcon.tsx`

These components send a `link_click` event with `link_url`, `link_text`, and `link_domain` when users click external links.

## Development

### Prerequisites

- Node.js 18+ recommended
- npm

### Setup

```sh
git clone https://github.com/redwheeler3/your-online-hub.git
cd your-online-hub
npm install
npm run dev
```

The dev server runs at `http://localhost:8080`.

### Available Scripts

```sh
npm run dev      # Start the dev server
npm run build    # Production build
npm run build:dev
npm run preview  # Preview the build locally
npm run lint     # Run ESLint
npm run deploy   # Deploy dist/ to GitHub Pages
```

## Deployment

The site uses static-hosting-friendly settings:

- `vite.config.ts` uses `base: "./"`
- `package.json` includes `gh-pages` deployment scripts
- `public/CNAME` sets the production domain to `www.jeffo.net`

## Content Notes

The featured links are currently defined in `src/pages/Index.tsx` and include Jeff's resume, the Penta Housing Co-op site, the Amazon EventBridge Pipes workshop, and music.jeffo.net.

## Repository

- **GitHub**: https://github.com/redwheeler3/your-online-hub
- **Live Site**: https://www.jeffo.net

## Credits

Website by [Jeff Oriecuia](https://www.jeffo.net)
