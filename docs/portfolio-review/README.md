# Portfolio review and redesign: working notes

Record of the review and redesign session (27–30 Sept 2026), so the work can continue in
any new session. All code changes are on branch `claude/loving-darwin-eo0wu9`. Nothing
is merged to `main` yet, so the live site is unchanged.

- Open work: [`../BACKLOG.md`](../BACKLOG.md)
- Writing plan: [`../WRITING_PLAN.md`](../WRITING_PLAN.md)

## Where things stand

- The site has a **dark theme** (former design B) and a **light theme** (former design C).
  It follows the visitor's system setting by default; the sun/moon button in the header
  switches and remembers the choice.
- **Next step:** review locally, then open a pull request to `main` (backlog W-01).

### Preview locally

```bash
npm install
npm run dev
# open http://localhost:5173/ and use the sun/moon button to switch themes
# pages: /, /about/, /projects/, /writing/
```

Screenshots are in [`screenshots/`](screenshots/):

| File | What it shows |
| --- | --- |
| `compare-desktop.png`, `compare-mobile.png` | A (original), B and C side by side |
| `A-*.png` | Design A: the single long page before the restructure |
| `B-*.png` | Now the **dark** theme: home, mobile, About, Projects, Writing |
| `C-*.png` | Now the **light** theme: home, mobile, About, Projects, Writing |

## Conversation log (what was asked and decided)

1. **Review and upgrade request.** The basketball/football in the hero rendered badly;
   the goal is to be positioned as a data strategy and AI leader.
   Interview answers: target Head of AI / Director / CAIO-track roles; based in the
   Netherlands, open to others; iGaming and sports focus; currently Head of Data Science
   & AI at Entain NCE, 5 direct reports, built the data science team; reports to the
   Director of Data & BI; no talks or articles yet; keep the sports ball; no photo on
   the home page; CV on request; no domain yet.
2. **Humbler tone.** CAIO is the long-term ambition but must not be stated publicly.
   Fonts should look more professional. Must work well on iPhone and Android.
3. **Three designs requested** (current, polished, new executive). The home page became
   4 blocks with separate pages for the rest; recent projects replaced student projects;
   "Happy to connect" wording; smaller ball and a stronger quote.
4. **Numbers.** Kostas was fine launching with placeholder numbers; Claude recommended
   against publishing invented figures next to the employer's name. The agreed approach:
   known facts in the highlights, results described in words, real numbers added later
   by Kostas.
5. **Themes.** Keep both B and C as a dark and a light theme with a toggle.
6. **Projects.** Show live websites for private repos (not GitHub links); Kostas may make
   repos public later. Showcase project ideas recorded in the backlog.
7. **Writing.** LinkedIn newsletter as the main channel, website as the index; a full
   plan is in `WRITING_PLAN.md`.

## What was done (commits on the branch)

1. **Hero sports ball fixed.** Unlayered custom CSS was overriding Tailwind utilities, so
   the ball sat on top of the note cards. The basketball seams and football panels were
   redrawn, and the lighting no longer rotates with the ball.
2. **CTA contrast fixed.** The same layering bug caused pale button text.
3. **Leader repositioning.** Content rewritten around data science and AI leadership.
   Page title, meta description, Open Graph tags, social preview image, KS favicon; unused
   template assets removed.
4. **Humbler tone.** No "Chief AI Officer" claims anywhere.
5. **Typography.** Self-hosted Inter (replacing Sora, Manrope and IBM Plex Mono from
   Google Fonts). The light theme uses Source Serif 4 for headings.
6. **Mobile polish and testing.** Checked on emulated iPhone SE, 15 Pro and 15 Pro Max,
   Pixel 7, Galaxy S9+, iPad Mini and desktop Chrome, in both themes and on every page:
   no horizontal overflow and no console errors. Real Safari was not available, so
   check once on a real iPhone (backlog W-12).
7. **Sticky header fixed.** `overflow-x-hidden` had broken `position: sticky`.
8. **Restructure.** Home page in 4 blocks (hero and highlights, impact, how I lead,
   contact) plus `/about/`, `/projects/` and `/writing/` (Vite multi-page build, one HTML
   entry per page with its own title and meta).
9. **Projects** show recent work: Euroleague Draft (www.euroleaguedraft.com), Courtside
   Analytics (live demo + code), NBA Fantasy Dashboard (nbafantasydashboard.onrender.com),
   Daily AI Digest (code), Claude Team Kit (code).
10. **Dark and light themes** with a header toggle. An inline script in each page's
    `<head>` applies the saved or system theme before first paint (no flash).

## How the code is organised

- All copy: `src/content/portfolio.js`
- Theme tokens and component styles: `src/index.css` (`[data-theme='dark']`,
  `[data-theme='light']`)
- Sports ball: `src/components/SportsBall.jsx`, animation in `src/App.css`
- Header (navigation, theme toggle) and footer: `src/components/SiteChrome.jsx`
- Pages: `src/pages/HomePage.jsx`, `src/pages/SubPages.jsx`
- Page entries: `index.html`, `about/index.html`, `projects/index.html`, `writing/index.html`

## Resuming in a new session

Open a new Claude Code session on this repo, check out `claude/loving-darwin-eo0wu9`, and
start with:

> Read `docs/portfolio-review/README.md`, `docs/BACKLOG.md` and `docs/WRITING_PLAN.md`.
> We are continuing the portfolio work. Next: [e.g. open the PR to main / add my real
> numbers / draft article 1].
