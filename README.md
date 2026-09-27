# Kostas Sakellariou Portfolio

Personal portfolio site for [konstantinos-sakellariou.github.io](https://konstantinos-sakellariou.github.io).

The site is built with React, Vite, Tailwind CSS, and GitHub Pages. It is a single-page profile positioning Kostas as a data science and AI leader, covering:

- headline metrics and selected business impact
- leadership approach and career journey (toward Chief AI Officer)
- perspectives on AI leadership
- hands-on projects from GitHub

## Stack

- React 19
- Vite
- Tailwind CSS 4
- Lucide React
- React Icons

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
src/
  App.jsx
  App.css
  index.css
  components/
    PortfolioSections.jsx
    SportsBall.jsx
  content/
    portfolio.js
```

## Deployment

Deployment runs automatically through GitHub Actions when changes are pushed to `main`.

The workflow:

1. installs dependencies
2. builds the site
3. uploads the `dist/` output
4. deploys to GitHub Pages

Workflow file:

`/.github/workflows/deploy.yml`

## Notes

- Content lives in `src/content/portfolio.js`
- Any content item with `draft: true` shows a visible "Draft" tag on the page. Replace the illustrative value with a real one and remove the flag before relying on it publicly.
- Social preview image: `public/og-image.png` (1200×630); page metadata lives in `index.html`
- Global look and motion live in `src/index.css` and `src/App.css`
- The hero sports ball animation is implemented in `src/components/SportsBall.jsx`
