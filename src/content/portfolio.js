// All site copy lives here. Pages: home (4 blocks), about, projects, writing.

const email = 'mailto:konstantinossakellariou4@gmail.com'
const linkedin = 'https://www.linkedin.com/in/konstantinos-sakellariou-85b155126/'
const github = 'https://github.com/Konstantinos-Sakellariou'

export const site = {
  name: 'Kostas Sakellariou',
  role: 'Head of Data Science & AI',
  links: { email, linkedin, github },
}

export const navigation = [
  { id: 'impact', label: 'Impact', href: '/#impact' },
  { id: 'leadership', label: 'Leadership', href: '/#leadership' },
  { id: 'about', label: 'About', href: '/about/' },
  { id: 'projects', label: 'Projects', href: '/projects/' },
  { id: 'writing', label: 'Writing', href: '/writing/' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
]

export const hero = {
  eyebrow: 'Data Science & AI leadership',
  location: 'Netherlands',
  title: 'Kostas Sakellariou',
  tagline: 'I lead data science and AI teams that improve revenue, retention, and safer play.',
  description:
    'Head of Data Science & AI at Entain NCE, where I built and lead the data science team. My focus is turning AI from pilots into products the business runs on: a clear strategy, measurable value, and responsible by design.',
  primaryCta: { label: 'See the impact', href: '#impact' },
  secondaryCta: { label: 'Connect on LinkedIn', href: linkedin },
  quote: {
    label: 'Operating belief',
    text: 'AI earns its seat at the leadership table when it moves a P&L line, not when it wins a demo.',
  },
}

// Add real figures as `value` when available; items without a value render as text.
export const highlights = [
  { value: '5', label: 'Direct reports', text: 'In the data science team I built and lead.' },
  { value: '4', label: 'Focus domains', text: 'Retention, personalisation, safer gambling, and GenAI.' },
  { value: 'NL', label: 'Regulated market', text: 'Building AI under Dutch duty-of-care and EU AI Act rules.' },
]

export const impact = [
  {
    tag: 'Retention',
    title: 'Churn and lifetime value that CRM actually uses',
    context:
      'CRM budget was spread broadly, and much of it went to players who would have stayed anyway.',
    led: 'Led the team building churn-risk and predicted-LTV scores, wired them into CRM segmentation, and insisted on holdout groups so impact was measured rather than assumed.',
    result: 'Retention uplift measured against holdouts, and CRM spend focused on players at real risk of leaving.',
  },
  {
    tag: 'Safer gambling',
    title: 'Earlier detection of at-risk play',
    context:
      'Dutch duty-of-care rules require operators to spot risky behaviour early and act on evidence, not gut feel.',
    led: 'Partnered with compliance and responsible-gambling teams on ML risk signals from behavioural data, with explainable outputs and a human in the loop for every intervention.',
    result: 'Earlier, evidence-based interventions, with every decision reviewable by a person.',
  },
  {
    tag: 'Personalisation',
    title: 'Smarter bonus and promotion spend',
    context:
      'Generic bonuses are expensive, attract bonus abuse, and rarely change what players actually do.',
    led: 'Shifted promotion targeting to uplift modelling, so offers go where they change behaviour, and paired it with abuse-detection rules the trading team could trust.',
    result: 'Lower bonus cost for the same engagement, and less exposure to bonus abuse.',
  },
  {
    tag: 'GenAI',
    title: 'From GenAI curiosity to governed adoption',
    context:
      'Teams were experimenting with LLMs ad hoc, with no shared view on data, risk, or which use cases were worth it.',
    led: 'Set up a use-case intake and prioritisation flow, drafted AI usage guidelines with EU AI Act readiness in mind, and shipped the first internal assistants for analysts and operations.',
    result: 'Approved tools and clear guidelines in place, with a prioritised pipeline of use cases.',
  },
]

export const leadership = {
  title: 'Six things a data and AI function needs to create value at scale.',
  description:
    'The model is rarely the bottleneck. Strategy, people, operating model, and trust usually are.',
  pillars: [
    {
      title: 'AI strategy',
      text: 'A roadmap tied to business outcomes, run as a portfolio of bets, including the discipline to stop what is not paying off.',
    },
    {
      title: 'Team & talent',
      text: 'Hiring for judgement as much as technique, clear growth paths, and a culture where shipping and learning both count.',
    },
    {
      title: 'Operating model',
      text: 'One front door for requests, prioritisation by value and feasibility, and value tracking that continues after launch.',
    },
    {
      title: 'Platform & MLOps',
      text: 'Reproducible pipelines, monitoring, and shared definitions with data engineering and BI, so models survive production.',
    },
    {
      title: 'Responsible AI',
      text: 'Governance, explainability, and safer-gambling principles designed in from the start, not bolted on at review time.',
    },
    {
      title: 'AI literacy',
      text: 'Helping business teams and leaders ask better questions of data and AI, so it becomes a shared language.',
    },
  ],
}

export const contact = {
  title: 'Happy to connect.',
  description:
    'I enjoy talking with people who are scaling data and AI in regulated, data-rich businesses, whether that is a shared challenge, an idea, or a collaboration.',
  note: 'Based in the Netherlands. CV available on request by email.',
  primaryCta: { label: 'Send an email', href: email },
  links: [
    { type: 'linkedin', label: 'LinkedIn', description: 'Career history, recommendations, and posts.', href: linkedin },
    { type: 'github', label: 'GitHub', description: 'The projects I build outside work.', href: github },
    { type: 'email', label: 'Email', description: 'Conversations, collaboration, or a copy of my CV.', href: email },
  ],
}

export const about = {
  title: 'About',
  intro:
    'I am a data science and AI leader based in the Netherlands. Today I am Head of Data Science & AI at Entain NCE, where I built and lead the data science team.',
  detail:
    'My work sits where data science meets the business: deciding which AI problems are worth solving, building the team and platform to solve them, and making sure the result is measured, trusted, and used. Regulated markets like iGaming have taught me that responsible AI and fast delivery are not opposites.',
  timeline: [
    {
      period: 'Now',
      role: 'Head of Data Science & AI',
      org: 'Entain NCE',
      detail:
        'Built and lead the data science team. Own the data science and AI roadmap across retention, personalisation, safer gambling, and GenAI adoption.',
    },
    {
      period: 'Before',
      role: 'Data Analytics Lead',
      org: 'Earlier roles to be added',
      detail: 'Hands-on analytics and machine learning leadership across sports and iGaming data.',
    },
  ],
  motivation: {
    title: 'What motivates me',
    text: 'The work I find most rewarding is helping an organisation create value with AI end to end: strategy, people, platforms, and governance working together rather than in silos.',
    points: [
      'Connecting AI initiatives to company-wide priorities',
      'Governance that builds trust with regulators and customers',
      'Growing AI literacy beyond the data team',
    ],
  },
  beyondWork: {
    title: 'Beyond work',
    text: 'Basketball and football are where my interest in data started, and they are still where I test new ideas: prediction models, fantasy tools, and live products for friends and leagues.',
  },
}

export const projects = {
  title: 'Projects',
  intro:
    'I still build. Staying hands-on keeps my judgement sharp about what AI can and cannot do yet, and it is how I try out ideas before bringing them to a team.',
  items: [
    {
      tag: 'Product · Live',
      title: 'Euroleague Draft',
      summary:
        'A real-time fantasy draft platform: live draft rooms with websocket sync, enforced roster rules, pick clocks, queues and autopick, private leagues, and accounts. Built as a production product, not a prototype.',
      stack: ['FastAPI', 'Next.js', 'WebSockets', 'Postgres'],
      links: [{ label: 'Website', href: 'https://www.euroleaguedraft.com' }],
    },
    {
      tag: 'Sports analytics · Live demo',
      title: 'Courtside Analytics',
      summary:
        'A basketball score-prediction model evaluated on 35,000 games across 12 leagues. It shows the full track record next to the recommended strategy, each against its break-even point, because an honest baseline matters more than a flattering one.',
      stack: ['Python', 'Dash', 'Plotly', 'CI'],
      links: [
        { label: 'Live demo', href: 'https://betting-dashboard.onrender.com' },
        { label: 'Code', href: `${github}/betting-dashboard` },
      ],
    },
    {
      tag: 'Sports analytics · Live app',
      title: 'NBA Fantasy Dashboard',
      summary:
        'Decision support for head-to-head fantasy leagues: z-score rankings over nine seasons, a matchup projector, waiver recommendations, and a Yahoo integration that loads your own league.',
      stack: ['Python', 'Dash', 'pandas', 'Yahoo API'],
      links: [{ label: 'Live app', href: 'https://nbafantasydashboard.onrender.com' }],
    },
    {
      tag: 'AI literacy',
      title: 'Daily AI Digest',
      summary:
        'An agentic newsletter that keeps an analytics and engineering team current on AI. The weekly editorial plan is human-approved; daily editions are then drafted and sent autonomously within that scope.',
      stack: ['Python', 'LLM agents', 'SendGrid'],
      links: [{ label: 'Code', href: `${github}/agentic_emailing_system.` }],
    },
    {
      tag: 'Agentic workflows',
      title: 'Claude Team Kit',
      summary:
        'A drop-in AI team for coding agents: an orchestrator routing work to 15 specialised agents, with rules, hooks, and durable memory so agent-assisted work stays reviewable.',
      stack: ['Claude Code', 'Agents', 'Automation'],
      links: [{ label: 'Code', href: `${github}/claude-team-kit` }],
    },
  ],
}

export const writing = {
  title: 'Writing',
  intro: 'A few principles that guide how I lead data and AI work. Longer articles will appear here as I publish them.',
  principles: [
    {
      title: 'AI strategy is a portfolio, not a project',
      text: 'Some bets compound, some should be stopped early. Managing that portfolio is the real leadership job.',
    },
    {
      title: 'In regulated markets, responsible AI is a growth lever',
      text: 'Trust from regulators and customers is exactly what lets you ship faster, not a tax on shipping.',
    },
    {
      title: 'GenAI adoption is change management',
      text: 'The model is the easy part. Workflows, incentives, and skills decide whether anything changes.',
    },
    {
      title: 'Measure value after launch, not at the pitch',
      text: 'Holdouts and value tracking are what turn a data science team from a cost centre into an investment.',
    },
  ],
  // { title, date: 'YYYY-MM-DD', summary, href }
  articles: [],
}
