import {
  ArrowRight,
  BookOpen,
  Compass,
  ExternalLink,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SportsBall from './SportsBall'

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="font-label text-[11px] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--ink)] sm:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export function HeroSection({ hero }) {
  return (
    <section
      id="hero"
      data-nav="hero"
      className="scroll-mt-24 border-x border-b border-[var(--line)] bg-[var(--panel-soft)]"
    >
      <div className="grid gap-10 px-5 py-12 sm:gap-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center lg:gap-16 lg:px-12 lg:py-20">
        <div>
          <p className="font-label flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-[var(--accent)]">
            <span>{hero.eyebrow}</span>
            <span className="inline-flex items-center gap-1.5 text-[var(--muted)]">
              <MapPin size={13} aria-hidden="true" />
              {hero.location}
            </span>
          </p>
          <h1 className="font-display mt-5 text-[2.75rem] leading-none text-[var(--ink)] sm:text-6xl lg:text-[4.8rem]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-[1.5rem] leading-snug text-[var(--ink)] sm:text-[2rem] sm:leading-tight">
            {hero.tagline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] hover:text-slate-950"
            >
              {hero.primaryCta.label}
              <ArrowRight size={16} />
            </a>
            <a
              href={hero.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--panel-strong)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
            >
              {hero.secondaryCta.label}
              <ExternalLink size={16} />
            </a>
            <a
              href={hero.tertiaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-2 py-3 text-sm text-[var(--muted)] transition hover:text-[var(--ink)]"
            >
              {hero.tertiaryCta.label}
              <Mail size={14} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
            {hero.focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-sm sm:px-4 sm:py-2 text-[var(--muted)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative flex flex-col gap-6 overflow-hidden rounded-[2rem] border border-[var(--line-strong)] bg-[linear-gradient(180deg,rgba(11,24,50,0.94),rgba(5,11,24,0.96))] p-4 shadow-[0_28px_80px_rgba(2,6,23,0.34)] sm:min-h-[28rem] sm:p-8">
            <div className="pointer-events-none absolute inset-x-8 top-8 hidden h-px sm:block bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.18),transparent)]" />
            <div className="pointer-events-none absolute inset-y-8 right-8 hidden w-px sm:block bg-[linear-gradient(180deg,transparent,rgba(125,211,252,0.12),transparent)]" />

            <div className="relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:gap-6">
              <div className="grid gap-3">
                {hero.notes.map((note, index) => (
                  <div
                    key={note.label}
                    className="hero-note rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-3 py-2.5 sm:px-4 sm:py-3 shadow-[0_14px_30px_rgba(2,6,23,0.28)]"
                    style={{ animationDelay: `${index * 1.4}s` }}
                  >
                    <p className="font-label text-[10px] text-[var(--signal)]">
                      {note.label}
                    </p>
                    <p className="mt-1 text-sm text-[var(--ink)]">{note.value}</p>
                  </div>
                ))}
              </div>

              <SportsBall />
            </div>

            <div className="relative rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-4 shadow-[0_18px_40px_rgba(2,6,23,0.28)] sm:mt-auto">
              <p className="font-label text-[11px] text-[var(--muted)]">
                {hero.signature.label}
              </p>
              <p className="font-display mt-3 text-base leading-7 text-[var(--ink)]">
                {hero.signature.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function DraftTag() {
  return (
    <span
      title="Illustrative placeholder: replace with a real figure before publishing"
      className="inline-flex items-center rounded-full border border-dashed border-[var(--signal)] px-2 py-0.5 font-label text-[9px] text-[var(--signal)]"
    >
      Draft
    </span>
  )
}

function Section({ id, nav, className = '', children }) {
  return (
    <section
      id={id}
      data-nav={nav ?? id}
      className={`scroll-mt-24 border-x border-b border-[var(--line)] bg-[var(--panel-soft)] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 ${className}`.trim()}
    >
      {children}
    </section>
  )
}

export function MetricsStrip({ metrics }) {
  return (
    <section
      data-nav="hero"
      className="border-x border-b border-[var(--line)] bg-[var(--panel-soft)]"
    >
      <div className="grid gap-px bg-[var(--line)] sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <article key={metric.label} className="bg-[var(--panel)] px-5 py-5 sm:px-8 sm:py-7">
            <div className="flex items-center justify-between gap-3">
              <p className="font-label text-[11px] text-[var(--muted)]">
                {metric.label}
              </p>
              {metric.draft ? <DraftTag /> : null}
            </div>
            <p className="font-display mt-3 text-4xl text-[var(--accent)]">{metric.value}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{metric.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function ImpactSection({ impact }) {
  return (
    <Section id="impact">
      <SectionHeading
        eyebrow="Selected impact"
        title="AI that shows up in the numbers the business already tracks."
        description="A few examples of what my team and I have delivered, each framed as the situation, what I led, and the result."
      />

      <div className="mt-8 grid sm:mt-10 gap-6 lg:grid-cols-2">
        {impact.map((item, index) => (
          <article
            key={item.title}
            className="flex flex-col rounded-[1.75rem] border border-[var(--line-strong)] bg-[var(--panel)] p-5 shadow-[0_24px_60px_rgba(2,6,23,0.3)] sm:p-8"
          >
            <p className="font-label text-[11px] text-[var(--accent)]">
              {String(index + 1).padStart(2, '0')} / {item.tag}
            </p>
            <h3 className="font-display mt-3 text-2xl leading-tight text-[var(--ink)]">
              {item.title}
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--muted)]">
              <p>
                <span className="font-label mr-2 text-[11px] text-[var(--signal)]">
                  Context
                </span>
                {item.context}
              </p>
              <p>
                <span className="font-label mr-2 text-[11px] text-[var(--signal)]">
                  What I led
                </span>
                {item.led}
              </p>
            </div>

            <div className="mt-auto pt-6">
              <div className="flex items-end justify-between gap-4 border-t border-[var(--line)] pt-5">
                <div>
                  <p className="font-display text-3xl text-[var(--accent)]">{item.metric.value}</p>
                  <p className="mt-1 text-sm text-[var(--ink)]">{item.metric.label}</p>
                </div>
                {item.metric.draft ? <DraftTag /> : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

const leadershipIcons = [Compass, Users, Layers, BookOpen, ShieldCheck, GraduationCap]

export function LeadershipSection({ leadership }) {
  return (
    <Section id="leadership">
      <SectionHeading
        eyebrow="How I lead"
        title="Six things a data and AI function needs to create value at scale."
        description="The model is rarely the bottleneck. Strategy, people, operating model, and trust usually are."
      />

      <div className="mt-8 grid sm:mt-10 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {leadership.map((pillar, index) => {
          const Icon = leadershipIcons[index % leadershipIcons.length]

          return (
            <article
              key={pillar.title}
              className="flex flex-col rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_18px_42px_rgba(2,6,23,0.28)] sm:p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                <Icon size={22} />
              </div>
              <h3 className="font-display mt-5 text-xl leading-tight text-[var(--ink)]">
                {pillar.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[var(--muted)]">{pillar.description}</p>
              <p className="mt-5 border-t border-[var(--line)] pt-4 text-xs uppercase tracking-[0.16em] text-[var(--accent-strong)]">
                {pillar.practice}
              </p>
            </article>
          )
        })}
      </div>
    </Section>
  )
}

export function JourneySection({ journey }) {
  const { timeline, focus } = journey

  return (
    <Section id="journey">
      <SectionHeading
        eyebrow="Journey"
        title="Where I am today."
        description="The roles that shaped how I lead, and the work that motivates me."
      />

      <div className="mt-8 grid sm:mt-10 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:gap-12">
        <ol className="relative space-y-8 border-l border-[var(--line-strong)] pl-8">
          {timeline.map((entry) => (
            <li key={entry.role} className="relative">
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--paper)]" />
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-label text-[11px] text-[var(--accent)]">
                  {entry.period}
                </p>
                {entry.draft ? <DraftTag /> : null}
              </div>
              <h3 className="font-display mt-2 text-2xl text-[var(--ink)]">{entry.role}</h3>
              <p className="mt-1 text-sm font-semibold text-[var(--ink-soft)]">{entry.org}</p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">{entry.detail}</p>
            </li>
          ))}
        </ol>

        <article className="rounded-[1.75rem] border border-[var(--line-strong)] bg-[linear-gradient(160deg,rgba(56,189,248,0.12),rgba(10,20,41,0.9)_55%)] p-5 shadow-[0_24px_60px_rgba(2,6,23,0.34)] sm:p-8">
          <p className="font-label text-[11px] text-[var(--signal)]">
            {focus.label}
          </p>
          <h3 className="font-display mt-3 text-3xl text-[var(--ink)]">{focus.title}</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{focus.text}</p>
          <ul className="mt-6 space-y-3">
            {focus.steps.map((step) => (
              <li key={step} className="flex gap-3 text-sm leading-6 text-[var(--ink)]">
                <ArrowRight size={16} className="mt-1 shrink-0 text-[var(--accent)]" />
                {step}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  )
}

export function PerspectivesSection({ perspectives }) {
  return (
    <Section id="perspectives">
      <SectionHeading
        eyebrow="Perspectives"
        title="How I think about AI leadership."
        description="A few principles that guide my work."
      />

      <div className="mt-8 grid sm:mt-10 gap-6 md:grid-cols-2">
        {perspectives.map((item, index) => (
          <article
            key={item.title}
            className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_18px_42px_rgba(2,6,23,0.28)] sm:p-6"
          >
            <p className="font-label text-[11px] text-[var(--signal)]">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="font-display mt-3 text-xl leading-snug text-[var(--ink)]">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

export function HandsOnSection({ handsOn }) {
  return (
    <Section id="hands-on">
      <SectionHeading eyebrow="Hands-on" title="I still build." description={handsOn.intro} />

      <div className="mt-8 grid sm:mt-10 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {handsOn.projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--line-strong)]"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="font-label text-[11px] text-[var(--muted)]">
                {project.tag}
              </p>
              <FaGithub size={18} className="shrink-0 text-[var(--muted)] transition group-hover:text-[var(--ink)]" />
            </div>
            <h3 className="font-display mt-3 text-lg text-[var(--ink)]">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-[var(--muted)]">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--line)] bg-[var(--panel-strong)] px-3 py-1 text-xs text-[var(--ink-soft)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}

const contactIconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: Mail,
}

export function ContactSection({ contact }) {
  return (
    <Section
      id="contact"
      className="bg-[linear-gradient(180deg,rgba(10,20,41,0.88),rgba(5,11,24,0.98))]"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)] lg:gap-14">
        <div>
          <SectionHeading eyebrow="Contact" title={contact.title} description={contact.description} />
          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            {contact.note}
          </p>
          <a
            href={contact.primaryCta.href}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
          >
            {contact.primaryCta.label}
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid gap-4">
          {contact.links.map((link) => {
            const Icon = contactIconMap[link.type]

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-[1.6rem] border border-[var(--line)] bg-[var(--panel)] px-5 py-5 shadow-[0_16px_36px_rgba(2,6,23,0.3)] transition hover:-translate-y-0.5 hover:border-[var(--line-strong)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                  <Icon size={22} />
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold text-[var(--ink)]">{link.label}</p>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{link.description}</p>
                </div>
                {link.external ? (
                  <ExternalLink
                    size={16}
                    className="text-[var(--muted)] transition group-hover:text-[var(--ink)]"
                  />
                ) : (
                  <ArrowRight
                    size={16}
                    className="text-[var(--muted)] transition group-hover:text-[var(--ink)]"
                  />
                )}
              </a>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export function SiteFooter({ text }) {
  return (
    <footer className="border-t border-[var(--line)] px-4 py-8 text-center sm:px-6 lg:px-8">
      <p className="text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} Kostas Sakellariou · {text}
      </p>
    </footer>
  )
}
