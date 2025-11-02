# Arbill Landing Page

A responsive marketing experience for the Arbill safety platform, built with React, Vite, Material UI, and React Router.

## Prerequisites

- Node.js 18+
- npm 9+

## Setup

Install dependencies (updates `node_modules` and refreshes the lockfile):

```bash
npm install
```

## Available Pages

- `/` – Home overview with hero, feature highlights, testimonials, pricing, and call to action
- `/about` – Company mission, values, and safety track record
- `/how-it-works` – Step-by-step platform workflow, solution spotlight, and FAQs
- `/contact` – Demo request form and direct contact channels

## Development

Run the local dev server:

```bash
npm run dev
```

Run the local dev server with Docker environment

```bash
docker run --rm -it -v ${PWD}:/app -w /app -p 127.0.0.1:5173:5173 node:latest npm run dev --host
```

The app is served at http://localhost:5173/ by default.

## Production Build

Create an optimized build:

```bash
npm run build
```

Preview the production output locally:

```bash
npm run preview
```

## Internationalization

The landing page copy is centralized under `src/i18n/`:

- `src/i18n/locales/en.js` stores all English strings grouped by feature (navigation, pages, legal copy, resources, etc.).
- `src/i18n/index.js` exposes helpers for resolving the active locale and registering additional languages.
- `src/content.js` reads the locale messages and merges them with non-translatable data (images, URLs) before passing copy to components.

To add a new locale:

1. Duplicate `src/i18n/locales/en.js`, translate the string values, and export it from `src/i18n/index.js` via `registerLocale`.
2. For CTAs that reference shared URLs, keep the `linkKey` values so routing still resolves through `content.js`.
3. If new copy is introduced in components, add matching keys to the locale file rather than hard-coding strings.

Components now expect structured content (for example `joinAudienceContent.heading`, `contactContent.form.fields`) so supplying translations for those fields is enough to localize the UI.

## References
- Photo source: [Unsplash](https://unsplash.com/)
