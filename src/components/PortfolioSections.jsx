import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  ExternalLink,
  Mail,
  Radar,
  Target,
  Workflow,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SportsBall from './SportsBall'

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono-ui text-[11px] uppercase tracking-[0.32em] text-[var(--accent)]">
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
      <div className="grid gap-12 px-6 py-14 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center lg:gap-16 lg:px-12 lg:py-20">
        <div>
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.34em] text-[var(--accent)]">
            {hero.eyebrow}
          </p>
          <h1 className="font-display mt-5 text-5xl leading-none text-[var(--ink)] sm:text-6xl lg:text-[4.8rem]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-2xl leading-tight text-[var(--ink)] sm:text-[2rem]">
            {hero.tagline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
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
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-2 py-3 text-sm text-[var(--muted)] transition hover:text-[var(--ink)]"
            >
              {hero.tertiaryCta.label}
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {hero.focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative min-h-[32rem] overflow-hidden rounded-[2rem] border border-[var(--line-strong)] bg-[linear-gradient(180deg,rgba(11,24,50,0.94),rgba(5,11,24,0.96))] px-6 py-8 shadow-[0_28px_80px_rgba(2,6,23,0.34)] sm:px-8">
            <div className="absolute inset-x-8 top-8 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.18),transparent)]" />
            <div className="absolute inset-y-8 right-8 w-px bg-[linear-gradient(180deg,transparent,rgba(125,211,252,0.12),transparent)]" />

            <div className="hidden max-w-[14rem] gap-3 sm:absolute sm:left-6 sm:top-6 sm:grid">
              {hero.notes.map((note, index) => (
                <div
                  key={note.label}
                  className="hero-note rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-4 py-3 shadow-[0_14px_30px_rgba(2,6,23,0.28)]"
                  style={{ animationDelay: `${index * 1.4}s` }}
                >
                  <p className="font-mono-ui text-[10px] uppercase tracking-[0.28em] text-[var(--signal)]">
                    {note.label}
                  </p>
                  <p className="mt-1 text-sm text-[var(--ink)]">{note.value}</p>
                </div>
              ))}
            </div>

            <SportsBall className="sm:absolute sm:right-6 sm:top-6 sm:z-10" />

            <div className="mx-auto mt-6 max-w-xs rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-4 shadow-[0_18px_40px_rgba(2,6,23,0.28)] sm:ml-0 sm:mt-[16.5rem]">
              <p className="font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
                Build signature
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Systems that blend data products, recommender thinking, and AI-native workflows
                without losing sight of how decisions actually get made.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:hidden" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProofStrip({ proofPoints }) {
  return (
    <section
      data-nav="hero"
      className="scroll-mt-24 border-x border-b border-[var(--line)] bg-[var(--panel-soft)]"
    >
      <div className="grid gap-px bg-[var(--line)] md:grid-cols-2 xl:grid-cols-4">
        {proofPoints.map((point) => (
          <article
            key={point.label}
            className="bg-[var(--panel)] px-6 py-6 sm:px-8 sm:py-7"
          >
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
              {point.label}
            </p>
            <p className="mt-3 text-xl leading-tight text-[var(--ink)]">{point.value}</p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{point.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function CaseStudyCard({ project, index }) {
  return (
    <article className="rounded-[2rem] border border-[var(--line-strong)] bg-[var(--panel)] p-6 shadow-[0_24px_60px_rgba(2,6,23,0.34)] sm:p-8">
      <div className="flex flex-col gap-4 border-b border-[var(--line)] pb-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            {String(index + 1).padStart(2, '0')} / {project.highlight}
          </p>
          <h3 className="font-display mt-3 text-2xl text-[var(--ink)] sm:text-[2rem]">
            {project.title}
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">
            {project.summary}
          </p>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-full border border-[var(--line)] bg-[var(--panel-strong)] px-4 py-2 text-sm text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
        >
          View repository
          <ExternalLink size={15} />
        </a>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <div>
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.26em] text-[var(--signal)]">
              Problem
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{project.problem}</p>
          </div>
          <div>
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.26em] text-[var(--signal)]">
              Role
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{project.role}</p>
          </div>
          <div>
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.26em] text-[var(--signal)]">
              Approach
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{project.approach}</p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.26em] text-[var(--accent)]">
              Outcome
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{project.outcome}</p>
          </div>
          <div>
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.26em] text-[var(--accent)]">
              Key takeaway
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{project.takeaway}</p>
          </div>
          <div>
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.26em] text-[var(--muted)]">
              Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--line)] bg-[var(--accent-soft)] px-3 py-2 text-xs font-medium text-[var(--ink)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export function FeaturedProjectsSection({ projects }) {
  return (
    <section
      id="featured-work"
      data-nav="featured-work"
      className="scroll-mt-24 border-x border-b border-[var(--line)] bg-[var(--panel-soft)] px-6 py-14 sm:px-8 sm:py-16 lg:px-12"
    >
      <SectionHeading
        eyebrow="Featured work"
        title="The projects that represent my strongest work right now."
        description="A smaller set of case studies that feel the most relevant, polished, and representative of how I think."
      />

      <div className="mt-10 space-y-8">
        {projects.map((project, index) => (
          <CaseStudyCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export function ArchiveSection({ projects }) {
  return (
    <section
      data-nav="featured-work"
      className="scroll-mt-24 border-x border-b border-[var(--line)] bg-[var(--panel-soft)] px-6 py-14 sm:px-8 sm:py-16 lg:px-12"
    >
      <SectionHeading
        eyebrow="Project archive"
        title="Other projects I still want visible, just with lighter framing."
        description="Useful supporting work and earlier experiments that add range, without needing the same level of documentation as the featured case studies."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex h-full flex-col rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_18px_42px_rgba(2,6,23,0.3)]"
          >
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.26em] text-[var(--muted)]">
              {project.summaryTag}
            </p>
            <h3 className="font-display mt-3 text-2xl text-[var(--ink)]">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--line)] bg-[var(--panel-strong)] px-3 py-2 text-xs text-[var(--ink)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-strong)] transition hover:text-[var(--accent)]"
            >
              Open repository
              <ExternalLink size={15} />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export function AboutSection({ about }) {
  return (
    <section
      id="about"
      data-nav="about"
      className="scroll-mt-24 border-x border-b border-[var(--line)] bg-[var(--panel-soft)] px-6 py-14 sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.85fr)] lg:gap-14">
        <div>
          <SectionHeading
            eyebrow="About / trajectory"
            title={about.title}
            description={about.intro}
          />
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            {about.detail}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {about.signatureAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--line)] bg-[var(--signal-soft)] px-4 py-2 text-sm text-[var(--ink)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {about.panels.map((panel) => (
            <article
              key={panel.label}
              className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_16px_36px_rgba(2,6,23,0.3)]"
            >
              <p className="font-mono-ui text-[11px] uppercase tracking-[0.26em] text-[var(--accent)]">
                {panel.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{panel.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const capabilityIcons = [BarChart3, BrainCircuit, Target, Workflow, Radar]

export function CapabilitiesSection({ capabilities }) {
  return (
    <section
      data-nav="about"
      className="scroll-mt-24 border-x border-b border-[var(--line)] bg-[var(--panel-soft)] px-6 py-14 sm:px-8 sm:py-16 lg:px-12"
    >
      <SectionHeading
        eyebrow="Capabilities"
        title="What I’m strongest at building and improving."
        description="Not just a stack inventory. These are the kinds of systems and problems I like to own."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {capabilities.map((capability, index) => {
          const Icon = capabilityIcons[index % capabilityIcons.length]

          return (
            <article
              key={capability.title}
              className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_18px_42px_rgba(2,6,23,0.28)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                <Icon size={22} />
              </div>
              <h3 className="font-display mt-5 text-lg leading-tight text-[var(--ink)] sm:text-xl">
                {capability.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{capability.description}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                {capability.tools}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export function ExploringSection({ explorations }) {
  return (
    <section
      id="exploring"
      data-nav="exploring"
      className="scroll-mt-24 border-x border-b border-[var(--line)] bg-[var(--panel-soft)] px-6 py-14 sm:px-8 sm:py-16 lg:px-12"
    >
      <SectionHeading
        eyebrow="Exploring now"
        title="Ideas I keep returning to because they feel strategically interesting."
        description="This section is less about unfinished work and more about where my curiosity is compounding."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {explorations.map((item, index) => {
          const toneClass =
            index % 2 === 0
              ? 'bg-[rgba(15,118,110,0.06)] text-[var(--accent-strong)]'
              : 'bg-[rgba(197,108,43,0.09)] text-[var(--signal-strong)]'

          return (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_18px_42px_rgba(2,6,23,0.28)]"
            >
              <span className={`inline-flex rounded-full px-3 py-2 text-xs uppercase tracking-[0.22em] ${toneClass}`}>
                {item.tag}
              </span>
              <h3 className="font-display mt-4 text-2xl text-[var(--ink)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.summary}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

const contactIconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: Mail,
}

export function ContactSection({ contact }) {
  return (
    <section
      id="contact"
      data-nav="contact"
      className="scroll-mt-24 border-x border-b border-[var(--line)] bg-[linear-gradient(180deg,rgba(10,20,41,0.88),rgba(5,11,24,0.98))] px-6 py-14 sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)] lg:gap-14">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title={contact.title}
            description={contact.description}
          />
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            {contact.note}
          </p>
          <a
            href={contact.primaryCta.href}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent-strong)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent)]"
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
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)] transition group-hover:bg-[rgba(15,118,110,0.16)]">
                  <Icon size={22} />
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold text-[var(--ink)]">{link.label}</p>
                  <p className="mt-1 text-sm leading-7 text-[var(--muted)]">{link.description}</p>
                </div>
                <ExternalLink
                  size={16}
                  className="text-[var(--muted)] transition group-hover:text-[var(--ink)]"
                />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] px-4 py-8 text-center sm:px-6 lg:px-8">
      <p className="text-sm text-[var(--muted)]">
        Designed and built with React, Tailwind CSS, and GitHub Pages.
      </p>
    </footer>
  )
}
