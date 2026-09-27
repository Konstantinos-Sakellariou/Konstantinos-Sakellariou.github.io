// Any item with `draft: true` renders a visible "Draft" tag on the page.
// Replace the illustrative value with a real one, then delete the flag.

export const navigation = [
  { id: 'impact', label: 'Impact' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'journey', label: 'Journey' },
  { id: 'perspectives', label: 'Perspectives' },
  { id: 'hands-on', label: 'Hands-on' },
  { id: 'contact', label: 'Contact' },
]

export const site = {
  brandLine: 'Data Science & AI leadership',
  footer: 'Designed and built with React, Tailwind CSS, and GitHub Pages.',
}

export const hero = {
  eyebrow: 'Data Science & AI leadership · Netherlands',
  title: 'Kostas Sakellariou',
  tagline:
    'I lead data science and AI that moves revenue, retention, and safer play, and I’m building toward the Chief AI Officer seat.',
  description:
    'Head of Data Science & AI at Entain NCE, where I built and lead the data science team. My focus is turning AI from pilots into products the business runs on: a clear strategy, measurable value, and responsible by design.',
  primaryCta: {
    label: 'See the impact',
    href: '#impact',
  },
  secondaryCta: {
    label: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/konstantinos-sakellariou-85b155126/',
  },
  tertiaryCta: {
    label: 'Email me',
    href: 'mailto:konstantinossakellariou4@gmail.com',
  },
  focusAreas: ['AI strategy', 'Team leadership', 'GenAI adoption', 'Responsible AI', 'iGaming & sports'],
  notes: [
    { label: 'Now', value: 'Head of Data Science & AI, Entain NCE' },
    { label: 'Next', value: 'Chief AI Officer track' },
  ],
  signature: {
    label: 'Operating belief',
    text: 'AI earns its seat at the leadership table when it moves a P&L line, not when it wins a demo.',
  },
}

export const metrics = [
  {
    value: '5',
    label: 'Direct reports',
    description: 'In the data science team I built and lead.',
  },
  {
    value: '€2.5M',
    label: 'Annual value',
    description: 'Incremental revenue attributed to models in production.',
    draft: true,
  },
  {
    value: '10+',
    label: 'Models in production',
    description: 'Across retention, personalisation, and safer gambling.',
    draft: true,
  },
  {
    value: '3×',
    label: 'Faster delivery',
    description: 'From idea to production after standardising the ML workflow.',
    draft: true,
  },
]

export const impact = [
  {
    tag: 'Retention',
    title: 'Churn and lifetime value that CRM actually uses',
    context:
      'CRM budget was spread broadly, and much of it went to players who would have stayed anyway.',
    led: 'Led the team building churn-risk and predicted-LTV scores, wired them into CRM segmentation, and insisted on holdout groups so impact was measured rather than assumed.',
    metric: { value: '+8%', label: '90-day retention in targeted segments', draft: true },
  },
  {
    tag: 'Safer gambling',
    title: 'Earlier detection of at-risk play',
    context:
      'Dutch duty-of-care rules require operators to spot risky behaviour early and act on evidence, not gut feel.',
    led: 'Partnered with compliance and responsible-gambling teams on ML risk signals from behavioural data, with explainable outputs and a human in the loop for every intervention.',
    metric: { value: '2×', label: 'earlier flagging of at-risk behaviour', draft: true },
  },
  {
    tag: 'Personalisation',
    title: 'Smarter bonus and promotion spend',
    context:
      'Generic bonuses are expensive, attract bonus abuse, and rarely change what players actually do.',
    led: 'Shifted promotion targeting to uplift modelling, so offers go where they change behaviour, and paired it with abuse-detection rules the trading team could trust.',
    metric: { value: '−15%', label: 'bonus cost at equal engagement', draft: true },
  },
  {
    tag: 'GenAI',
    title: 'From GenAI curiosity to governed adoption',
    context:
      'Teams were experimenting with LLMs ad hoc, with no shared view on data, risk, or which use cases were worth it.',
    led: 'Set up a use-case intake and prioritisation flow, drafted AI usage guidelines with EU AI Act readiness in mind, and shipped the first internal assistants for analysts and operations.',
    metric: { value: '100+', label: 'colleagues onboarded to approved AI tools', draft: true },
  },
]

export const leadership = [
  {
    title: 'AI strategy',
    description:
      'A roadmap tied to business outcomes, run as a portfolio of bets, including the discipline to stop the ones that are not paying off.',
    practice: 'Quarterly roadmap owned together with commercial leads',
  },
  {
    title: 'Team & talent',
    description:
      'Hiring for judgement as much as technique, clear growth paths, and a team culture where shipping and learning both count.',
    practice: 'Built the data science team, 5 direct reports',
  },
  {
    title: 'Operating model',
    description:
      'One front door for requests, prioritisation by value and feasibility, and value tracking that continues after launch.',
    practice: 'Intake → prioritise → ship → measure',
  },
  {
    title: 'Platform & MLOps',
    description:
      'Reproducible pipelines, monitoring, and shared definitions with data engineering and BI, so models survive contact with production.',
    practice: 'Standard path from notebook to production',
  },
  {
    title: 'Responsible AI',
    description:
      'Governance, explainability, and safer-gambling principles designed in from the start, not bolted on at review time.',
    practice: 'EU AI Act and duty-of-care ready',
  },
  {
    title: 'AI literacy',
    description:
      'Helping non-technical leaders ask better questions of data and AI, so it becomes a shared language instead of a specialist one.',
    practice: 'Enablement for leadership and business teams',
  },
]

export const journey = {
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
      org: 'Previous roles to be added',
      detail:
        'Hands-on analytics and machine learning leadership across sports and iGaming data.',
      draft: true,
    },
  ],
  northStar: {
    label: 'North star',
    title: 'Chief AI Officer',
    text: 'I want to own how an organisation creates value with AI end to end: strategy, people, platforms, and governance. Every role until then is a deliberate step toward that.',
    steps: [
      'Enterprise AI strategy across business units',
      'AI governance and risk at board level',
      'AI literacy at scale across the organisation',
    ],
  },
}

export const perspectives = [
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
]

export const handsOn = {
  intro:
    'Staying hands-on keeps my judgement sharp about what AI can and cannot do yet.',
  projects: [
    {
      tag: 'Agentic workflows',
      title: 'Claude Code Team Kit',
      summary:
        'Conventions and tooling that make agent-assisted development repeatable and team-friendly.',
      tech: ['Shell', 'Automation', 'Agentic workflows'],
      link: 'https://github.com/Konstantinos-Sakellariou/claude-team-kit',
    },
    {
      tag: 'AI systems',
      title: 'Agentic Emailing System',
      summary:
        'LLM-driven outreach with orchestration rules and guardrails instead of ad hoc prompting.',
      tech: ['Python', 'OpenAI', 'Claude'],
      link: 'https://github.com/Konstantinos-Sakellariou/agenic_emailing_system',
    },
    {
      tag: 'Sports analytics',
      title: 'NBA Fantasy Analytics',
      summary:
        'Data collection, feature discovery, and predictive modelling for weekly fantasy decisions.',
      tech: ['Python', 'Pandas', 'Scikit-learn'],
      link: 'https://github.com/Konstantinos-Sakellariou/NBA_Fantasy',
    },
    {
      tag: 'Recommender systems',
      title: 'Hotel Recommendation System',
      summary:
        'Collaborative filtering and ranking for sparse travel preferences (Expedia competition).',
      tech: ['Collaborative filtering', 'Ranking'],
      link: 'https://github.com/Konstantinos-Sakellariou/Recommender-system-Expedia-competition',
    },
    {
      tag: 'Computer vision',
      title: 'Plant Health Detection CNN',
      summary: 'TensorFlow image classification with a desktop GUI for inspecting predictions.',
      tech: ['TensorFlow', 'Tkinter'],
      link: 'https://github.com/Konstantinos-Sakellariou/Detecting-healthy-plants-CNN-and-GUI-framework-with-Tkinter',
    },
    {
      tag: 'ML tooling',
      title: 'No Data Science App',
      summary: 'Lowering the barrier to modelling and exploratory reporting for non-coders.',
      tech: ['Python', 'AutoML'],
      link: 'https://github.com/Konstantinos-Sakellariou/nodatascienceapp',
    },
  ],
}

export const contact = {
  title: 'Let’s talk about data and AI leadership.',
  description:
    'Open to senior roles such as Head of AI, Director of Data & AI, and Chief AI Officer, and to conversations with leaders scaling AI in regulated, data-rich businesses.',
  note: 'Based in the Netherlands and open to the right opportunity elsewhere. CV available on request by email.',
  primaryCta: {
    label: 'Send an email',
    href: 'mailto:konstantinossakellariou4@gmail.com',
  },
  links: [
    {
      type: 'linkedin',
      label: 'LinkedIn',
      description: 'Career history, recommendations, and posts.',
      href: 'https://www.linkedin.com/in/konstantinos-sakellariou-85b155126/',
      external: true,
    },
    {
      type: 'github',
      label: 'GitHub',
      description: 'The hands-on projects behind this page.',
      href: 'https://github.com/Konstantinos-Sakellariou',
      external: true,
    },
    {
      type: 'email',
      label: 'Email',
      description: 'Role conversations, collaboration, or a copy of my CV.',
      href: 'mailto:konstantinossakellariou4@gmail.com',
      external: false,
    },
  ],
}
