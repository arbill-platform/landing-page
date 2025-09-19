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
docker run --rm -it -v ${PWD}:/app -w /app -p 5173:5173 node:latest npm run dev
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
