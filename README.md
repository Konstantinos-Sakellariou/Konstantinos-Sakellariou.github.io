# Kostas Sakellariou Portfolio

Personal portfolio site for [konstantinos-sakellariou.github.io](https://konstantinos-sakellariou.github.io).

The site is built with React, Vite, Tailwind CSS, and GitHub Pages. It is a small multi-page site positioning Kostas as a data science and AI leader:

- `/` home: hero and highlights, selected impact, how I lead, contact
- `/about/`: background, journey, what motivates me
- `/projects/`: hands-on projects
- `/writing/`: principles and (soon) articles

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
index.html, about/, projects/, writing/   one HTML entry per page (title + meta)
src/
  main.jsx               mounts <App page=...>, sets the design
  App.jsx                page switch + header/footer
  index.css              design tokens and component styles
  App.css                sports ball animation
  components/            SiteChrome (header/footer), SportsBall, ui helpers
  pages/                 HomePage, SubPages (About, Projects, Writing)
  content/portfolio.js   all copy
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
- Design preview: append `?design=b` (dark) or `?design=c` (light) to any page. The default is `site.design` in `src/content/portfolio.js`.
- To add an article, append `{ title, date, summary, href }` to `writing.articles`.
- Social preview image: `public/og-image.png` (1200×630); page metadata lives in `index.html`
- Global look and motion live in `src/index.css` and `src/App.css`
- The sports ball animation is implemented in `src/components/SportsBall.jsx`
