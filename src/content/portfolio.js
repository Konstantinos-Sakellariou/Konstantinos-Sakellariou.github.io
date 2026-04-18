export const navigation = [
  { id: 'hero', label: 'Intro' },
  { id: 'featured-work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'exploring', label: 'Exploring' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  eyebrow: 'Portfolio / AI, analytics, systems',
  title: 'Kostas Sakellariou',
  tagline: 'Data Analytics Lead building ML and analytics systems that turn noisy data into sharper decisions.',
  description:
    'I’m a Data Analytics Lead working across sports analytics, iGaming, and AI-native tooling. I am especially interested in Data Scientist and Data Analytics Lead opportunities where experimentation, decision support, and production-minded execution all matter.',
  primaryCta: {
    label: 'See featured work',
    href: '#featured-work',
  },
  secondaryCta: {
    label: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/konstantinos-sakellariou-85b155126/',
  },
  tertiaryCta: {
    label: 'Browse GitHub',
    href: 'https://github.com/Konstantinos-Sakellariou',
  },
  focusAreas: ['Sports analytics', 'iGaming', 'Agentic systems', 'Decision support'],
  notes: [
    { label: 'Sports', value: 'Signal-rich analytics' },
    { label: 'iGaming', value: 'Sharper decision systems' },
  ],
}

export const proofPoints = [
  {
    label: 'Current role',
    value: 'Data Analytics Lead',
    description:
      'Public positioning centered on analytics leadership with hands-on depth in modeling, experimentation, and technical delivery.',
  },
  {
    label: 'Build style',
    value: 'Experimentation tied to practical use',
    description:
      'I like moving from analysis and model testing into systems, workflows, and tools that actually support better decisions.',
  },
  {
    label: 'Domain blend',
    value: 'Sports, iGaming, and intelligent systems',
    description:
      'A portfolio shaped by competitive data environments, probabilistic thinking, and products that need to help people act.',
  },
  {
    label: 'Target roles',
    value: 'Data Scientist and Data Analytics Lead',
    description:
      'The site is written to speak clearly to roles that value both analytical depth and leadership-minded execution.',
  },
]

export const featuredProjects = [
  {
    title: 'NBA Fantasy Analytics Dashboard',
    highlight: 'Sports analytics / Decision support',
    summary:
      'A fantasy-basketball analytics workspace combining data collection, exploratory analysis, and predictive modeling into one decision-support flow.',
    problem:
      'Fantasy choices often depend on fragmented stats, shifting context, and noisy historical performance. I wanted a cleaner way to evaluate players without relying on scattered spreadsheets and intuition alone.',
    role:
      'Built the workflow end to end: data collection, cleaning, exploratory analysis, feature discovery, and predictive modeling experiments.',
    approach:
      'Created Python-based pipelines for player-level data preparation, compared signals across fantasy-relevant contexts, and tested model directions that could support ranking, monitoring, and sharper weekly decisions.',
    outcome:
      'Produced a reusable analytics base for evaluating players and iterating on forecasting ideas, turning a one-off analysis exercise into a more durable sports decision-support asset.',
    takeaway:
      'In sports analytics, better decisions often come from stronger feature framing and context handling before model complexity becomes the differentiator.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Feature engineering', 'EDA'],
    link: 'https://github.com/Konstantinos-Sakellariou/NBA_Fantasy',
  },
  {
    title: 'Claude Code Team Kit',
    highlight: 'Developer workflows / Agentic systems',
    summary:
      'A workflow and tooling kit for building with coding agents in a more structured, team-friendly, and reusable way.',
    problem:
      'As agentic development becomes more common, teams quickly run into inconsistent setup, unclear collaboration patterns, and brittle handoff processes.',
    role:
      'Packaged conventions, tooling, and workflow ideas into a more repeatable development kit for agent-based coding and automation work.',
    approach:
      'Focused on practical scaffolding, collaboration patterns, and developer ergonomics so agent-driven work feels more reliable and easier to extend across projects.',
    outcome:
      'Turned a set of useful agentic workflow ideas into a reusable kit that better reflects how I think about AI-assisted development in practice.',
    takeaway:
      'AI tooling becomes more valuable when the surrounding workflow is designed as deliberately as the prompts or models themselves.',
    tech: ['Shell', 'Automation', 'Developer tooling', 'Agentic workflows'],
    link: 'https://github.com/Konstantinos-Sakellariou/claude-team-kit',
  },
  {
    title: 'Agentic Emailing System',
    highlight: 'AI systems / Workflow orchestration',
    summary:
      'An AI-assisted outreach workflow that combines LLM reasoning with more structured orchestration for drafting and follow-up.',
    problem:
      'Manual outbound work is repetitive, but fully automated outreach often becomes generic or brittle. The interesting challenge was building a flow that still felt controlled and intentional.',
    role:
      'Designed the agentic workflow, prompt structure, orchestration logic, and the overall shape of how the system generated and handled messaging steps.',
    approach:
      'Combined Claude and OpenAI capabilities with workflow rules so the system could draft, adapt, and sequence email communication with more consistency than ad hoc prompting alone.',
    outcome:
      'Created a repeatable base for AI-assisted emailing that emphasizes controlled automation, clearer handoffs, and a more product-like approach to agentic behavior.',
    takeaway:
      'Agentic systems become genuinely useful when orchestration, guardrails, and task boundaries are treated as design problems instead of just prompt problems.',
    tech: ['Python', 'OpenAI', 'Claude', 'Prompt design', 'Workflow automation'],
    link: 'https://github.com/Konstantinos-Sakellariou/agenic_emailing_system',
  },
]

export const archiveProjects = [
  {
    title: 'Hotel Recommendation System',
    summaryTag: 'Recommendation systems / Earlier project',
    summary:
      'A collaborative-filtering and feature-engineering project around preference modeling, ranking, and the sparse-data challenges behind travel recommendations.',
    tech: ['Machine learning', 'Collaborative filtering', 'Feature engineering'],
    link: 'https://github.com/Konstantinos-Sakellariou/Recommender-system-Expedia-competition',
  },
  {
    title: 'Plant Health Detection CNN',
    summaryTag: 'Computer vision / Earlier applied ML work',
    summary:
      'A TensorFlow-based plant classification project with a desktop GUI that makes model predictions easier to inspect and use.',
    tech: ['TensorFlow', 'Python', 'Tkinter'],
    link: 'https://github.com/Konstantinos-Sakellariou/Detecting-healthy-plants-CNN-and-GUI-framework-with-Tkinter',
  },
  {
    title: 'No Data Science App',
    summaryTag: 'Tooling / Accessibility to ML',
    summary:
      'A project aimed at lowering the barrier to ML and exploratory reporting by making model creation more accessible to non-coders.',
    tech: ['Python', 'ML automation', 'Web framework'],
    link: 'https://github.com/Konstantinos-Sakellariou/nodatascienceapp',
  },
]

export const about = {
  title: 'I like building systems that help people decide with more confidence.',
  intro:
    'What draws me in is the moment when a model, dataset, or workflow stops being interesting only technically and starts becoming genuinely useful.',
  detail:
    'That is why I’m drawn to analytics products, sports and iGaming problems, recommender logic, and AI-native systems. They all reward a mix of experimentation, judgment, and thoughtful implementation. I am most motivated by the full arc of the work: framing the problem, shaping the signal, testing approaches, and packaging the result into something people can actually use.',
  signatureAreas: [
    'Decision quality over dashboard theater',
    'Production-minded experimentation',
    'Hybrid analytics + AI systems',
  ],
  panels: [
    {
      label: 'Today',
      text: 'Working as a Data Analytics Lead with a bias toward clarity, usefulness, and outputs that can actually influence decisions.',
    },
    {
      label: 'How I build',
      text: 'Comfortable moving from notebooks and model experiments into structured tools, workflows, and interfaces that feel more operational and decision-ready.',
    },
    {
      label: 'Where I lean in',
      text: 'Data Scientist and Data Analytics Lead work in sports analytics, behavioral data, recommender-style problems, and AI systems where orchestration matters as much as model choice.',
    },
  ],
}

export const capabilities = [
  {
    title: 'Analytics systems',
    description:
      'Turning raw and messy inputs into cleaner views of performance, behavior, and decision context.',
    tools: 'Python, SQL, pandas, data modeling',
  },
  {
    title: 'ML experimentation',
    description:
      'Testing models, evaluating signal quality, and choosing approaches that match the real problem instead of chasing novelty.',
    tools: 'Scikit-learn, TensorFlow, feature engineering',
  },
  {
    title: 'Recommender logic',
    description:
      'Thinking about sparse user signals, ranking, and preference modeling in systems where behavior matters more than static rules.',
    tools: 'Collaborative filtering, ranking, evaluation',
  },
  {
    title: 'Agentic workflows',
    description:
      'Designing AI-assisted systems with clearer task boundaries, orchestration rules, and useful human-control points.',
    tools: 'OpenAI, Claude, prompt design, workflow logic',
  },
  {
    title: 'Production-minded tooling',
    description:
      'Building things in a way that supports iteration, reuse, and communication instead of leaving the work trapped in one experiment.',
    tools: 'Git, Docker, Jupyter, automation',
  },
]

export const explorations = [
  {
    tag: 'Sports',
    title: 'Probabilistic betting and edge models',
    summary:
      'I’m interested in systems that combine market data, uncertainty, and disciplined modeling rather than simplistic prediction-first framing.',
  },
  {
    tag: 'Agents',
    title: 'Multi-agent orchestration patterns',
    summary:
      'The most interesting agentic work to me is not “more autonomy” by default, but better collaboration, handoffs, and bounded responsibility.',
  },
  {
    tag: 'Products',
    title: 'Real-time analytics surfaces',
    summary:
      'I keep returning to interfaces that help people sense change quickly, especially when the underlying environment is noisy or fast-moving.',
  },
  {
    tag: 'LLMs',
    title: 'Evaluation-focused AI systems',
    summary:
      'I’m curious about setups where prompt strategy, guardrails, and evaluation design matter more than just selecting the latest model.',
  },
  {
    tag: 'Research',
    title: 'Neural architecture experimentation',
    summary:
      'There is still a lot of value in exploring how modeling choices shape tradeoffs, especially when paired with strong domain framing.',
  },
  {
    tag: 'Interfaces',
    title: 'Decision support, not just dashboards',
    summary:
      'I’m especially motivated by products that help users choose and act, rather than only observe metrics after the fact.',
  },
]

export const contact = {
  title: 'Let’s talk if you’re hiring for data science or analytics leadership with real hands-on depth.',
  description:
    'I’m especially happy to talk about Data Scientist and Data Analytics Lead roles, product thinking around data, sports or iGaming problems, and experimental AI systems that need stronger structure.',
  note:
    'If there is an interesting role with real ownership, or a collaboration that sits at the intersection of analytics, ML, and intelligent workflows, I’d love to hear about it.',
  primaryCta: {
    label: 'Send an email',
    href: 'mailto:konstantinossakellariou4@gmail.com',
  },
  links: [
    {
      type: 'linkedin',
      label: 'LinkedIn',
      description: 'Follow my professional path and reach out directly.',
      href: 'https://www.linkedin.com/in/konstantinos-sakellariou-85b155126/',
      external: true,
    },
    {
      type: 'github',
      label: 'GitHub',
      description: 'Browse the repositories behind the portfolio.',
      href: 'https://github.com/Konstantinos-Sakellariou',
      external: true,
    },
    {
      type: 'email',
      label: 'Email',
      description: 'Best for role discussions, collaboration ideas, or direct contact.',
      href: 'mailto:konstantinossakellariou4@gmail.com',
      external: false,
    },
  ],
}
