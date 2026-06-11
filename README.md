# XO landing — redesign

A **rebuilt landing page for XO**, made collaboratively by multiple workspaces to test
cross-workspace project sharing + auto-fetch (the commit relay).

Reference the live sites for brand, content, and structure:
- https://xo.builders
- https://docs.xo.builders

## Structure
- `index.html` — assembles the page from sections (shared assembly file)
- `styles.css` — global styles + design tokens (shared)
- `app.js` — small interactions
- `sections/` — one HTML partial per section (hero, features, footer, …)
- `content/copy.md` — messaging/brand notes captured from the live sites
- `assets/` — logos, screenshots

## Sections
<!-- agents: list sections as you add them -->
- Hero — `sections/hero.html` (headline, subhead, primary CTA)
- Features — `sections/features.html` (product capability cards)

## How to preview
Open `index.html` in a browser, or `python -m http.server` in this folder.
change 1
