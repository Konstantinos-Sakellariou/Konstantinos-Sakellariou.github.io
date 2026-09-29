import { ArrowRight, ArrowUpRight } from 'lucide-react'
import SportsBall from '../components/SportsBall'
import { Container, ExternalLink, Section, SectionHeading } from '../components/ui'
import { about, projects, site, writing } from '../content/portfolio'

function PageIntro({ eyebrow, title, intro, aside }) {
  return (
    <section className="pt-14 pb-12 sm:pt-20 sm:pb-16">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="heading mt-4 text-4xl leading-tight sm:text-6xl">{title}</h1>
          <p className="text-soft mt-6 text-lg leading-8 sm:text-xl sm:leading-9">{intro}</p>
        </div>
        {aside}
      </Container>
    </section>
  )
}

export function AboutPage() {
  return (
    <>
      <PageIntro eyebrow={site.role} title={about.title} intro={about.intro} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="text-muted text-base leading-8 sm:text-lg">{about.detail}</p>

            <h2 className="eyebrow mt-12">Journey</h2>
            <ol className="rule mt-6 space-y-8 border-l pl-6">
              {about.timeline.map((entry) => (
                <li key={entry.role} className="relative">
                  <span className="absolute top-2 -left-[1.95rem] h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]" />
                  <p className="eyebrow text-muted">{entry.period}</p>
                  <h3 className="heading mt-1 text-2xl">{entry.role}</h3>
                  <p className="text-soft mt-1 text-sm font-semibold">{entry.org}</p>
                  <p className="text-muted mt-3 text-[0.95rem] leading-7">{entry.detail}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-10">
            <div className="card-solid p-6 sm:p-8">
              <h2 className="heading text-2xl">{about.motivation.title}</h2>
              <p className="text-muted mt-4 text-[0.95rem] leading-7">{about.motivation.text}</p>
              <ul className="mt-6 space-y-3">
                {about.motivation.points.map((point) => (
                  <li key={point} className="text-soft flex gap-3 text-[0.95rem] leading-6">
                    <ArrowRight size={16} className="text-accent mt-1 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card flex items-start gap-5">
              <SportsBall className="shrink-0" />
              <div>
                <h2 className="heading text-2xl">{about.beyondWork.title}</h2>
                <p className="text-muted mt-3 text-[0.95rem] leading-7">{about.beyondWork.text}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export function ProjectsPage() {
  return (
    <>
      <PageIntro eyebrow="Hands-on" title={projects.title} intro={projects.intro} />

      <Section>
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {projects.items.map((project) => (
            <article key={project.title} className="card flex flex-col">
              <p className="eyebrow">{project.tag}</p>
              <h2 className="heading mt-3 text-2xl">{project.title}</h2>
              <p className="text-muted mt-3 flex-1 text-[0.95rem] leading-7">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
              {project.links.length ? (
                <div className="mt-5 flex flex-wrap gap-6">
                  {project.links.map((link) => (
                    <ExternalLink key={link.label} href={link.href} className="link-arrow text-sm">
                      {link.label} <ArrowUpRight size={15} />
                    </ExternalLink>
                  ))}
                </div>
              ) : (
                <p className="text-muted mt-5 text-sm">Private repository · demo on request</p>
              )}
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}

export function WritingPage() {
  return (
    <>
      <PageIntro eyebrow="Perspectives" title={writing.title} intro={writing.intro} />

      {writing.articles.length ? (
        <Section>
          <SectionHeading eyebrow="Articles" title="Recent writing" />
          <ul className="rule mt-10 divide-y border-y [&>li]:border-[var(--line)]">
            {writing.articles.map((article) => (
              <li key={article.href}>
                <ExternalLink href={article.href} className="group grid gap-2 py-6 sm:grid-cols-[8rem_1fr_auto] sm:gap-8">
                  <span className="text-muted text-sm">{article.date}</span>
                  <span>
                    <span className="heading block text-xl group-hover:underline">{article.title}</span>
                    <span className="text-muted mt-1 block text-[0.95rem] leading-7">{article.summary}</span>
                  </span>
                  <ArrowUpRight size={18} className="text-muted hidden sm:block" />
                </ExternalLink>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section>
        <SectionHeading eyebrow="Principles" title="How I think about AI leadership." />
        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {writing.principles.map((item, index) => (
            <article key={item.title} className="card">
              <p className="metric text-accent text-sm">{String(index + 1).padStart(2, '0')}</p>
              <h2 className="heading mt-2 text-2xl leading-snug">{item.title}</h2>
              <p className="text-muted mt-3 text-[0.95rem] leading-7">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
