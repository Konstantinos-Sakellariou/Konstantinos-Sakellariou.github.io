import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import './App.css'
import {
  AboutSection,
  ArchiveSection,
  CapabilitiesSection,
  ContactSection,
  ExploringSection,
  FeaturedProjectsSection,
  HeroSection,
  ProofStrip,
  SiteFooter,
} from './components/PortfolioSections'
import {
  about,
  archiveProjects,
  capabilities,
  contact,
  explorations,
  featuredProjects,
  hero,
  navigation,
  proofPoints,
} from './content/portfolio'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[data-nav]'))

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.dataset.nav ?? 'hero')
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleNavClick = () => setMobileMenuOpen(false)

  return (
    <div className="relative isolate overflow-x-hidden bg-[var(--paper)] text-[var(--ink)]">
      <div className="cosmos-stars pointer-events-none fixed inset-0 -z-30 opacity-60" />
      <div className="editorial-grid pointer-events-none fixed inset-0 -z-20 opacity-60" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(56,189,248,0.28),transparent_26%),radial-gradient(circle_at_82%_8%,rgba(99,102,241,0.2),transparent_32%),radial-gradient(circle_at_50%_120%,rgba(14,165,233,0.16),transparent_38%)]" />

      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--panel-nav)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="group">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--panel-strong)] shadow-[0_12px_28px_rgba(2,6,23,0.36)] transition-transform duration-300 group-hover:-translate-y-0.5">
                <span className="font-display text-lg font-semibold tracking-[0.16em] text-[var(--ink)]">
                  KS
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="font-mono-ui text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
                  Portfolio
                </p>
                <p className="text-sm text-[var(--ink)]">
                  AI, analytics, and intelligent systems
                </p>
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {navigation.map((item) => {
              const isActive = activeSection === item.id

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-[var(--accent-soft)] text-[var(--accent-strong)] shadow-[inset_0_0_0_1px_rgba(103,232,249,0.18)]'
                      : 'text-[var(--muted)] hover:bg-[var(--panel-strong)] hover:text-[var(--ink)]'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel-strong)] text-[var(--ink)] transition hover:border-[var(--line-strong)] hover:bg-[var(--surface)] md:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-[var(--line)] bg-[var(--panel-strong)] px-4 py-4 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleNavClick}
                  className={`rounded-2xl px-4 py-3 text-sm transition ${
                    activeSection === item.id
                      ? 'bg-[var(--accent-soft)] text-[var(--accent-strong)]'
                      : 'text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--ink)]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <HeroSection hero={hero} />
        <ProofStrip proofPoints={proofPoints} />
        <FeaturedProjectsSection projects={featuredProjects} />
        <ArchiveSection projects={archiveProjects} />
        <AboutSection about={about} />
        <CapabilitiesSection capabilities={capabilities} />
        <ExploringSection explorations={explorations} />
        <ContactSection contact={contact} />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
