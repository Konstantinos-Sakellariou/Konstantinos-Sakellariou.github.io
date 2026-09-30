# Writing plan

How to start publishing, where, how often, what to write first, and how it connects
back to the website.

## 1. Goal

Build a visible track record of clear, practical thinking on data and AI leadership,
so that anyone who looks you up (recruiters, executives, peers) finds evidence of how
you think, not only what your title is.

**Audience, in order:** senior business and technology leaders; people hiring data and
AI leaders; data and AI peers.

**Voice:** practical, calm, specific. One idea per piece. Write from experience, never
from hype. No confidential numbers or names.

## 2. Channels

| Channel | Role | Why |
| --- | --- | --- |
| **LinkedIn newsletter** | Primary: full articles | Your audience is already there, and newsletter subscribers are notified of each issue |
| **LinkedIn posts** | Between articles: short takes (150–250 words) | Keeps you visible; each post can point to the latest article |
| **Website `/writing/`** | Index of everything | A permanent, professional home that links to each article |
| Medium / Substack | Optional, later | Only as copies of LinkedIn articles, with a line saying where the original was published |

**Setup (one-off):**

1. On LinkedIn, open the article editor (Write article) and create a newsletter.
   Availability and exact steps depend on your account; if the option is missing,
   start with regular LinkedIn articles and switch later.
2. Newsletter name, pick one: **Signal over Noise** · **Decision Grade** ·
   **The Value Layer**. Description: "Practical notes on leading data science and AI in
   regulated, data-rich businesses. Every two weeks."
3. Add the newsletter to your LinkedIn Featured section, next to the website.
4. Check your employer's social media / external communication policy. Add a short
   line to your LinkedIn About: "Views are my own."

## 3. Cadence and calendar

Articles every second Tuesday, short posts on the Tuesdays in between. Publish around
08:30 Amsterdam time.

| Date | What | Topic |
| --- | --- | --- |
| Tue 6 Oct 2026 | Post | Why you are starting to write (short intro, link to the website) |
| Tue 13 Oct 2026 | **Article 1** | AI strategy is a portfolio, not a project |
| Tue 20 Oct 2026 | Post | One lesson from Article 1 (e.g. "the kill criteria nobody writes down") |
| Tue 27 Oct 2026 | **Article 2** | GenAI adoption is change management |
| Tue 3 Nov 2026 | Post | The "adoption ladder" graphic from Article 2 |
| Tue 10 Nov 2026 | **Article 3** | Measure value after launch, not at the pitch |
| Tue 17 Nov 2026 | Post | A one-question checklist from Article 3 |
| Tue 24 Nov 2026 | **Article 4** | In regulated markets, responsible AI is a growth lever |
| Tue 1 Dec 2026 | Post | Recap of the first four articles; ask readers what to cover next |

After these four, pair articles with the showcase projects in [BACKLOG.md](BACKLOG.md)
(P-01 to P-04): build → write about what you learned → link both.

## 4. First four articles: briefs

Each article: 700–1,000 words, one framework or visual, ends with a question to readers.

### Article 1: AI strategy is a portfolio, not a project

- **Thesis:** most AI strategies fail because they are managed as one big programme.
  Treat them as a portfolio of bets with different horizons, and be explicit about when
  to stop a bet.
- **Outline:**
  1. The symptom: a long list of AI initiatives, none clearly paying off.
  2. The portfolio view: quick wins, core bets, exploratory options, and what share of
     capacity each should get.
  3. Kill criteria: decide up front what evidence ends a bet.
  4. How to review the portfolio each quarter with business leaders.
- **Visual:** a 2×2 of value vs feasibility with the three bet types.
- **Closing question:** "How does your organisation decide to stop an AI initiative?"

### Article 2: GenAI adoption is change management

- **Thesis:** rolling out an LLM tool is easy; changing how people work is the hard
  part. Adoption needs workflows, incentives, skills and guardrails, not only access.
- **Outline:**
  1. Why usage stalls after the launch email.
  2. An adoption ladder: access → first use → habit → workflow redesign → measured value.
  3. What leaders must provide at each step (use cases, guidelines, champions, time).
  4. Governance that enables rather than blocks (clear "yes" zones).
- **Visual:** the five-step adoption ladder.
- **Closing question:** "Which step is your team stuck on?"

### Article 3: Measure value after launch, not at the pitch

- **Thesis:** business cases are written before launch, but value is proven after it.
  Holdout groups and simple value tracking turn a data science team from a cost centre
  into an investment.
- **Outline:**
  1. The problem with "expected impact" slides.
  2. Holdouts: the cheapest way to know if a model changes anything.
  3. A lightweight value log: what shipped, what it changed, how it was measured.
  4. How this changes the conversation with finance and leadership.
- **Visual:** a one-row template of the value log.
- **Closing question:** "Do you measure models after launch? How?"

### Article 4: In regulated markets, responsible AI is a growth lever

- **Thesis:** in industries like iGaming, trust from regulators and customers is what
  allows you to ship faster. Responsible AI designed in from the start speeds delivery
  instead of slowing it.
- **Outline:**
  1. The false trade-off between speed and responsibility.
  2. What "designed in" means: explainability, human review points, documentation,
     monitoring.
  3. How it shortens approvals and prevents rework.
  4. Getting ready for the EU AI Act without a big programme.
- **Visual:** "bolted on" vs "designed in" timeline.
- **Keep generic:** no employer details; talk about the industry and principles.
- **Closing question:** "Where does responsible AI slow you down today?"

## 5. Workflow for each article

| When | Step |
| --- | --- |
| Day −10 | Outline: thesis, 3–4 sections, the visual, the closing question |
| Day −7 | First draft (Claude can help turn the outline into a draft; rewrite in your own voice) |
| Day −5 | Edit: cut 20%, make the first two lines strong, check that every claim is yours |
| Day −3 | Policy check: nothing confidential, employer kept generic |
| Day −1 | Prepare the visual and cover image; schedule the post |
| Day 0 | Publish at ~08:30; reply to comments during the first hour |
| Day 0 | Add the article to the website (see section 6) |
| Day +14 | Note results (see section 8) |

**Article template:**

```text
Title (a clear claim, under 70 characters)

Two-line opening: the problem, in the reader's words.

1. The situation
2. My view
3. A practical framework (with the visual)
4. What to do on Monday

Closing question for readers.

—
I write every two weeks about leading data science and AI in regulated businesses.
More on my approach: [website link]
```

## 6. Linking back to the website

1. After publishing, add the article to `writing.articles` in
   `src/content/portfolio.js`:

   ```js
   articles: [
     {
       title: 'AI strategy is a portfolio, not a project',
       date: '2026-10-13',
       summary: 'Why AI strategies stall when run as one programme, and how to manage them as a portfolio of bets.',
       href: 'https://www.linkedin.com/pulse/…',
     },
   ],
   ```

   The Writing page shows the list automatically. Commit and push to `main` to publish.
2. Every article ends with the footer line linking to the website (template above).
3. The website's Writing page and footer link to LinkedIn, so readers can go both ways.
4. Once there are 3+ articles, consider adding a "Latest writing" line to the home
   page hero (small change, can be done by Claude).

## 7. Using the showcase projects

Each project in the backlog produces two things: a public demo and an article about
what you learned building it. Publish the article when the demo is live, and link to
both from the Projects and Writing pages.

## 8. What to measure (monthly, 10 minutes)

- Newsletter subscribers and follower growth
- Profile views and search appearances on LinkedIn
- Inbound messages from recruiters, leaders, or peers (the real goal)
- Website visits from LinkedIn (after analytics is added, backlog W-08)

## 9. Topic ideas for later

- What I look for when hiring data scientists
- Building a data science team from scratch: the first 90 days
- One front door: an intake process for AI requests
- Why holdout groups are a leadership decision, not a technical one
- Explainability for business stakeholders, not data scientists
- The difference between a model in production and a model in use
- Lessons from sports analytics for business forecasting
- An honest track record: why showing your losses builds trust (Courtside Analytics)
