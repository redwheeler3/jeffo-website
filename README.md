# Jeffo Website

A static personal website for Jeff Oriecuia: a short professional profile, featured links, and outbound-link analytics.

**Live URL:** https://www.jeffo.net

## Architecture

The site intentionally has no application framework or client-side rendering.

```text
index.html          Page content, metadata, and Google Analytics loader
styles.css          Responsive presentation and interaction styles
analytics.js        Delegated outbound-link tracking
scripts/build.mjs   Copies the site and public assets to dist/
public/             Resume, profile image, social preview, icons, CNAME, and robots.txt
```

All visible content is present in `index.html`, so it is available before JavaScript runs. `analytics.js` is the only site JavaScript and sends a Google Analytics `link_click` event for every link marked with `data-track`, preserving the event fields `link_url`, `link_text`, and `link_domain`.

## Development and deployment

Requirements: Node.js 18+ and npm.

```sh
npm install
npm run build
npm run preview
npm run deploy
```

`npm run build` produces `dist/`, copying `index.html` to both `dist/index.html` and `dist/404.html`. The latter preserves the GitHub Pages fallback used by the previous deployment. `npm run deploy` publishes `dist/` through `gh-pages`; `public/CNAME` keeps the custom domain set to `www.jeffo.net`.

`npm run preview` rebuilds the site and serves it at http://localhost:8080.

## Repository

- GitHub: https://github.com/redwheeler3/jeffo-website
- Live site: https://www.jeffo.net

## License

The MIT License in [`LICENSE`](./LICENSE) applies to this repository except for the personal and branding materials described below.

The MIT License does **not** apply to personal photos, profile images, favicons, logos, biography text, resumes, and trademark-like identifiers associated with Jeff Oriecuia or jeffo.net. All rights are reserved for those materials unless you receive separate written permission from the rights holder.

Third-party services, links, fonts, analytics, and externally hosted assets referenced by this repository are subject to their own licenses or terms and are not relicensed under this repository's MIT License.
