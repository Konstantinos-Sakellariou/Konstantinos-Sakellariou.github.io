# Portfolio review and redesign: working notes

Record of the review and redesign session (Sept 2026) so the work can continue in any
new session. All code changes are on branch `claude/loving-darwin-eo0wu9`. Nothing is
merged to `main` yet, so the live site is unchanged.

## Where things stand

- **Waiting on Kostas:** choose design **B** (polished dark) or **C** (light editorial).
  Recommendation: **C**.
- After the choice: remove the other design and the `?design=` preview switch, regenerate
  `public/og-image.png` in the chosen style, then open a pull request to `main`.

### Preview the designs locally

```bash
npm install
npm run dev
# open http://localhost:5173/?design=b  or  http://localhost:5173/?design=c
# the same works on /about/, /projects/, /writing/
```

Screenshots are in [`screenshots/`](screenshots/):

| File | What it shows |
| --- | --- |
| `compare-desktop.png`, `compare-mobile.png` | A (current), B and C side by side |
| `A-*.png` | Design A: the single long page before the restructure |
| `B-*.png`, `C-*.png` | Home (hero and full page), mobile, About, Projects, Writing |

## What was done (commits on the branch)

1. **Hero sports ball fixed.** Unlayered custom CSS was overriding Tailwind utilities, so
   the ball sat on top of the note cards. The basketball seams and football panels were
   redrawn, and the lighting no longer rotates with the ball.
2. **CTA contrast fixed.** The same layering bug caused pale button text.
3. **Leader repositioning.** Content was rewritten around data science and AI
   leadership. Page title, meta description, Open Graph tags, a social preview
   image and a KS favicon were added; unused template assets were removed.
4. **Humbler tone.** Explicit "Chief AI Officer" claims were removed everywhere
   (Kostas's request: keep the ambition private).
5. **Typography.** Self-hosted Inter replaced Sora, Manrope and IBM Plex Mono from
   Google Fonts. Source Serif 4 is used for headings in design C.
6. **Mobile polish.** Checked on emulated iPhone SE, 15 Pro and 15 Pro Max, Pixel 7,
   Galaxy S9+, iPad Mini and desktop Chrome: no horizontal overflow and no console
   errors on any page in either design. Real Safari/WebKit was not available for
   testing, so check once on a real iPhone.
7. **Sticky header fixed.** `overflow-x-hidden` had broken `position: sticky`.
8. **Restructure.** The home page is now 4 blocks (hero and highlights, impact, how I
   lead, contact) plus separate pages `/about/`, `/projects/` and `/writing/` (Vite
   multi-page build).
9. **Projects updated** to recent work (see below). Older student projects were removed.

## Decisions and open questions

| Topic | Status |
| --- | --- |
| Positioning | Data Science & AI leader; CAIO ambition **not** stated publicly |
| Colours | Kostas liked the dark palette; C is a light alternative to compare |
| Photo | Not on home page; possibly on About/Bio later |
| CV | On request by email only |
| Contact tone | "Happy to connect", with no job-seeking language (Entain colleagues may read it) |
| Sports ball | Keep as a personal touch (smaller now) |
| Numbers | Invented figures were **not** published. Highlights use known facts; impact results are in words. Add real numbers as `value` fields in `src/content/portfolio.js` when available. |
| Impact examples | Illustrative. **Kostas to delete any he did not actually lead** and adjust the "4 focus domains" highlight to match. |
| Entain | Check what may be said publicly (revenue, safer-gambling details). "Entain NCE" is kept verbatim. |
| Journey | Earlier roles still to be added (`about.timeline`). |
| Euroleague Draft link | Is `euroleaguedraft.com` public enough to link? Currently "demo on request". |
| Launch Foundry | Paid side product; the Claude Team Kit README links to its pricing. Check employer side-business rules before featuring it; if not OK, drop the Team Kit card. |
| Domain | Not owned yet. Buy one (e.g. `kostassakellariou.com`), add `public/CNAME`, and set it in GitHub Pages settings. |

## GitHub profile cleanup (recommended)

- Make `nba_fantasy_dashboard` public; it supersedes the 2022 `NBA_Fantasy` repo.
- Rename `agentic_emailing_system.` to drop the trailing dot, then update the link in `src/content/portfolio.js`.
- Pin: Courtside Analytics (`betting-dashboard`), NBA Fantasy Dashboard, Daily AI Digest, and Claude Team Kit or Euroleague Draft.
- Archive the student repos: Plant CNN, No Data Science App, Expedia recommender, RNN mood, Evoman, Serie A scraping, the GeneticAlgorithm fork.
- Rewrite the profile README (`Konstantinos-Sakellariou/Konstantinos-Sakellariou`). It still says "Hallooo people… Data Analytics Lead / Data Scientist & AI Explorer". Match the site's positioning.

## Projects currently on the site

| Project | Repo | Notes |
| --- | --- | --- |
| Euroleague Draft | `euroleague-draft-app` (private) | Live beta; FastAPI, Next.js, websockets, accounts |
| Courtside Analytics | `betting-dashboard` (public) | Live demo on Render; honest track record (strategy vs full record) |
| NBA Fantasy Dashboard | `nba_fantasy_dashboard` (private) | Dash app, Yahoo integration, CI |
| Daily AI Digest | `agentic_emailing_system.` (public) | Reframed as an AI-literacy tool for the team |
| Claude Team Kit | `claude-team-kit` (public) | See the Launch Foundry question above |

## Project ideas to build next (each pairs with an article)

1. **EU AI Act readiness checker:** small web tool that classifies an AI use case by risk tier and lists obligations. Shows governance thinking.
2. **Safer-gambling risk model on synthetic data:** open-source, with explainability and a fairness report. Own domain, no employer data.
3. **Evaluation harness for an analytics copilot:** measure text-to-SQL or Q&A quality on a public dataset. Shows how to evaluate GenAI.
4. **Uplift-modelling playbook:** on the public Criteo uplift dataset, paired with an article on promotion and bonus spend.

## Writing plan

- **Primary channel:** a LinkedIn newsletter (reach recruiters and executives, subscribers get notified).
- **Site as the index:** add each article to `writing.articles` in `src/content/portfolio.js` (`{ title, date, summary, href }`); the Writing page lists it automatically.
- **Medium:** not recommended as primary (declining reach for leadership audiences; Towards Data Science left Medium in 2025). Optional cross-post later, pointing back to the original.
- **First four articles** (the Perspectives on the Writing page):
  1. AI strategy is a portfolio, not a project
  2. In regulated markets, responsible AI is a growth lever
  3. GenAI adoption is change management
  4. Measure value after launch, not at the pitch
- **Format:** 700–1,000 words, every two weeks, with a short LinkedIn post in between. Structure: situation → view → practical framework → question for readers. Keep the employer generic or get comms approval.
- **Link loop:** the site links to LinkedIn; each article ends with "More on my approach: [site]".

## Other recommendations

- **LinkedIn:** headline, e.g. "Head of Data Science & AI @ Entain | AI strategy · responsible AI · GenAI adoption". Add the site under Featured and contact info. Ask two people for recommendations and quote them on the site.
- **Analytics:** add privacy-friendly analytics (e.g. GoatCounter) to see recruiter visits.
- **Compatibility:** Tailwind v4 targets Safari 16.4+ / Chrome 111+. Very old iPhones may render imperfectly.

## Resuming in a new session

Open a new Claude Code session on this repo, check out `claude/loving-darwin-eo0wu9`, and start with:

> Read `docs/portfolio-review/README.md`. We are continuing the portfolio redesign.
> I choose design [B/C]. Remove the other design and the `?design=` switch, regenerate
> the OG image in that style, verify desktop and mobile, and open a PR to main.
