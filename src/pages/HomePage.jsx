import { ArrowRight, ExternalLink as ExternalIcon, Mail, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SportsBall from '../components/SportsBall'
import { Container, ExternalLink, Section, SectionHeading } from '../components/ui'
import { contact, hero, highlights, impact, leadership } from '../content/portfolio'

function Hero() {
  return (
    <section id="hero" data-nav="hero" className="pt-14 pb-16 sm:pt-20 sm:pb-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow flex flex-wrap items-center gap-x-4 gap-y-2">
              <span>{hero.eyebrow}</span>
              <span className="text-muted inline-flex items-center gap-1.5">
                <MapPin size={13} aria-hidden="true" />
                {hero.location}
              </span>
            </p>
            <h1 className="heading mt-5 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem]">
              {hero.title}
            </h1>
            <p className="text-soft mt-6 max-w-2xl text-xl leading-snug sm:text-2xl">{hero.tagline}</p>
            <p className="text-muted mt-5 max-w-2xl text-base leading-7 sm:text-[1.05rem] sm:leading-8">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={hero.primaryCta.href} className="btn-primary">
                {hero.primaryCta.label}
                <ArrowRight size={16} />
              </a>
              <ExternalLink href={hero.secondaryCta.href} className="btn-secondary">
                {hero.secondaryCta.label}
                <ExternalIcon size={15} />
              </ExternalLink>
            </div>
          </div>

          <figure className="card-solid relative p-6 sm:p-8">
            <SportsBall className="absolute -top-10 right-2 sm:-top-14 sm:right-4" />
            <blockquote className="quote mt-12 sm:mt-20">
              <p className="eyebrow text-muted">{hero.quote.label}</p>
              <p className="quote-text heading mt-3 text-xl leading-snug sm:text-2xl">
                {hero.quote.text}
              </p>
            </blockquote>
          </figure>
        </div>

        <dl className="rule mt-14 grid gap-8 border-t pt-10 sm:mt-20 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label}>
              <dt className="eyebrow text-muted">{item.label}</dt>
              {item.value ? <dd className="metric mt-3 text-4xl sm:text-5xl">{item.value}</dd> : null}
              <dd className="text-muted mt-2 text-sm leading-6">{item.text}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

function Impact() {
  return (
    <Section id="impact">
      <SectionHeading
        eyebrow="Selected impact"
        title="AI that shows up in the numbers the business already tracks."
        description="A few examples of what my team and I have delivered: the situation, what I led, and the result."
      />
      <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
        {impact.map((item, index) => (
          <article key={item.title} className="card flex flex-col">
            <p className="eyebrow">
              {String(index + 1).padStart(2, '0')} · {item.tag}
            </p>
            <h3 className="heading mt-3 text-2xl leading-snug">{item.title}</h3>
            <p className="text-muted mt-4 text-[0.95rem] leading-7">{item.context}</p>
            <p className="text-soft mt-3 text-[0.95rem] leading-7">{item.led}</p>
            <div className="mt-auto pt-5">
              <p className="rule border-t pt-4 text-[0.95rem] leading-7">
                <span className="eyebrow mr-2">Result</span>
                <span className="text-soft">{item.result}</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Leadership() {
  return (
    <Section id="leadership">
      <SectionHeading eyebrow="How I lead" title={leadership.title} description={leadership.description} />
      <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {leadership.pillars.map((pillar, index) => (
          <div key={pillar.title} className="card">
            <p className="metric text-accent text-sm">{String(index + 1).padStart(2, '0')}</p>
            <h3 className="heading mt-2 text-xl">{pillar.title}</h3>
            <p className="text-muted mt-3 text-[0.95rem] leading-7">{pillar.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-10">
        <a href="/writing/" className="link-arrow">
          How I think about AI leadership <ArrowRight size={16} />
        </a>
        <a href="/projects/" className="link-arrow">
          What I build outside work <ArrowRight size={16} />
        </a>
      </div>
    </Section>
  )
}

const contactIcons = { linkedin: FaLinkedin, github: FaGithub, email: Mail }

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Contact" title={contact.title} description={contact.description} />
          <p className="text-muted mt-4 text-base leading-7">{contact.note}</p>
          <a href={contact.primaryCta.href} className="btn-primary mt-8">
            {contact.primaryCta.label}
            <ArrowRight size={16} />
          </a>
        </div>
        <ul className="rule divide-y self-start border-y [&>li]:border-[var(--line)]">
          {contact.links.map((link) => {
            const Icon = contactIcons[link.type]

            return (
              <li key={link.label}>
                <ExternalLink href={link.href} className="group flex items-center gap-4 py-5">
                  <Icon size={20} className="text-accent shrink-0" />
                  <span className="flex-1">
                    <span className="block font-semibold">{link.label}</span>
                    <span className="text-muted block text-sm leading-6">{link.description}</span>
                  </span>
                  <ArrowRight size={16} className="text-muted transition group-hover:translate-x-1" />
                </ExternalLink>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Impact />
      <Leadership />
      <Contact />
    </>
  )
}
