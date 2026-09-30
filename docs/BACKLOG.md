# Backlog

Single list of open work for the portfolio and personal brand. Keep items short. Move
done items to the bottom with a date.

**Owner:** `K` = Kostas (needs your input or account access) · `C` = can be done by
Claude in a session.
**Priority:** P1 = do next · P2 = soon · P3 = later.

## Website

| ID | Item | Owner | Priority | Notes |
| --- | --- | --- | --- | --- |
| W-01 | Merge `claude/loving-darwin-eo0wu9` to `main` via a pull request | K + C | P1 | Deploys automatically to GitHub Pages on merge |
| W-02 | Real figures for the home highlights and impact results | K | P1 | Add `value` fields in `src/content/portfolio.js`; results are text until then |
| W-03 | Remove any impact example not actually led; adjust "4 focus domains" to match | K | P1 | `impact` and `highlights` in `src/content/portfolio.js` |
| W-04 | Confirm what can be said publicly about Entain (revenue, safer-gambling details) | K | P1 | Check the social media / external communication policy |
| W-05 | Earlier roles for the About journey | K | P2 | `about.timeline` |
| W-06 | Decide on Launch Foundry / Claude Team Kit visibility (side-business rules) | K | P2 | If not OK, remove the Team Kit card |
| W-07 | Buy a domain and connect it to GitHub Pages | K + C | P2 | e.g. `kostassakellariou.com`; add `public/CNAME`, update canonical/OG URLs in the four HTML files |
| W-08 | Privacy-friendly analytics (e.g. GoatCounter) | K + C | P2 | K creates the account; C adds the script |
| W-09 | Social preview image per theme decision | C | P3 | `public/og-image.png` (1200×630); currently dark style |
| W-10 | About page photo (professional headshot) | K | P3 | Add to About only, not the home page |
| W-11 | Recommendation quotes (2) from LinkedIn | K + C | P2 | New "What colleagues say" strip on home or About |
| W-12 | Check on a real iPhone (Safari) after merge | K | P1 | Only Chromium emulation was available for testing |

## GitHub profile

| ID | Item | Owner | Priority | Notes |
| --- | --- | --- | --- | --- |
| G-01 | Rewrite the profile README to match the site's positioning | K + C | P1 | Repo `Konstantinos-Sakellariou/Konstantinos-Sakellariou`; still says "Data Analytics Lead / Data Scientist & AI Explorer" |
| G-02 | Rename `agentic_emailing_system.` (drop the trailing dot) | K | P2 | Then update the link in `projects.items` |
| G-03 | Consider making `nba_fantasy_dashboard` and `euroleague-draft-app` public | K | P3 | The site links to their live websites, so this is optional |
| G-04 | Pin: Courtside Analytics, NBA Fantasy Dashboard, Daily AI Digest, Euroleague Draft or Team Kit | K | P2 | |
| G-05 | Archive the student repos | K | P3 | Plant CNN, No Data Science App, Expedia recommender, RNN mood, Evoman, Serie A scraping, GeneticAlgorithm fork, old `NBA_Fantasy` |

## LinkedIn

| ID | Item | Owner | Priority | Notes |
| --- | --- | --- | --- | --- |
| L-01 | Update headline to match the site | K | P1 | e.g. "Head of Data Science & AI @ Entain · AI strategy · responsible AI · GenAI adoption" |
| L-02 | Add the site to Featured and to Contact info | K | P1 | After W-01 |
| L-03 | Ask two people for recommendations | K | P2 | Feeds W-11 |
| L-04 | Start the newsletter | K + C | P1 | See [WRITING_PLAN.md](WRITING_PLAN.md) |

## Showcase projects to build

Each project should be public, small enough to finish in 3–6 weekends, and paired with an
article. Order is a suggestion: P-01 and P-02 are the most relevant to the target roles.

### P-01 · EU AI Act readiness checker (P1)

- **What:** a small web tool. Describe an AI use case in a short questionnaire and get its
  likely risk tier (prohibited / high-risk / limited / minimal), the obligations that
  apply, and a checklist to take to legal and compliance.
- **Why it helps:** shows governance and regulatory thinking, the part of AI leadership
  most candidates cannot show in code. Timely as the high-risk obligations phase in.
- **MVP scope:** 10–15 questions, rule-based classification with the article references
  shown, a printable summary, and a clear "not legal advice" disclaimer. Optional LLM
  helper that explains an answer in plain language.
- **Stack:** React + Vite (same as this site), static hosting; no user data stored.
- **Done when:** public repo, live link, README with methodology and limitations, and
  listed on the Projects page.
- **Pairs with:** article "In regulated markets, responsible AI is a growth lever".

### P-02 · Safer-gambling risk model on synthetic data (P1)

- **What:** open reference implementation of an at-risk-play detector on a synthetic
  player-behaviour dataset (generated in the repo, no real or employer data).
- **Why it helps:** your own domain, and shows responsible AI end to end: features,
  model, explanations (SHAP), fairness and stability checks, and a human-in-the-loop
  decision flow.
- **MVP scope:** data generator, baseline model plus one stronger model, evaluation
  report (precision at the intervention budget, calibration, subgroup checks), a model
  card, and a small dashboard showing why a player was flagged.
- **Stack:** Python, scikit-learn / LightGBM, SHAP, Dash or Streamlit; CI like
  `betting-dashboard`.
- **Done when:** public repo, model card, live demo, listed on the Projects page.
- **Pairs with:** article on explainable, human-in-the-loop AI in regulated markets.
- **Check first:** that a public synthetic example does not conflict with employer
  policy (W-04).

### P-03 · Evaluation harness for an analytics copilot (P2)

- **What:** measure how well an LLM answers business questions or writes SQL over a
  public dataset (e.g. a public sports or retail dataset), comparing prompts or models on
  accuracy, cost and latency.
- **Why it helps:** "measure value, not demos" in practice; shows how you would decide
  whether a GenAI tool is good enough to roll out.
- **MVP scope:** 50–100 question/answer test set, automatic grading (execution match for
  SQL plus an LLM judge for text), results table and a short findings write-up.
- **Stack:** Python, DuckDB, one or two LLM APIs, a simple results page.
- **Pairs with:** article "Measure value after launch, not at the pitch".

### P-04 · Uplift-modelling playbook (P3)

- **What:** notebook and short report on the public Criteo uplift dataset showing why
  targeting by predicted response wastes budget, and how uplift models and Qini curves
  fix it.
- **Why it helps:** connects directly to bonus/promotion spend without using employer
  data; strong material for a practical article.
- **MVP scope:** baseline vs two uplift approaches, Qini/uplift curves, a
  budget-allocation example, and a one-page executive summary.
- **Stack:** Python, scikit-uplift or causalml.
- **Pairs with:** article on smarter promotion spend.

## Done

| Date | Item |
| --- | --- |
| 2026-09-27 | Hero sports ball rendering and layout fixed; CTA contrast fixed |
| 2026-09-27 | Repositioned as Data Science & AI leader; meta, OG image, favicon |
| 2026-09-27 | Humbler wording (no public CAIO claim); Inter typography; mobile polish; sticky header fix |
| 2026-09-29 | Four-block home page plus About, Projects, Writing pages; recent projects; "Happy to connect" |
| 2026-09-30 | Dark and light themes with a toggle (follows system by default); project cards link to live websites |
