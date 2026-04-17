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
      <div className="editorial-grid pointer-events-none fixed inset-0 -z-20 opacity-70" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_18%_12%,rgba(15,118,110,0.18),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(197,108,43,0.18),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.45),transparent)]" />

      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(244,240,232,0.86)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="group">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[rgba(255,253,248,0.96)] shadow-[0_12px_28px_rgba(17,24,39,0.06)] transition-transform duration-300 group-hover:-translate-y-0.5">
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
                      ? 'bg-[var(--accent-soft)] text-[var(--accent-strong)] shadow-[inset_0_0_0_1px_rgba(15,118,110,0.14)]'
                      : 'text-[var(--muted)] hover:bg-[rgba(255,253,248,0.95)] hover:text-[var(--ink)]'
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,253,248,0.88)] text-[var(--ink)] transition hover:border-[var(--line-strong)] hover:bg-white md:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-[var(--line)] bg-[rgba(255,253,248,0.95)] px-4 py-4 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleNavClick}
                  className={`rounded-2xl px-4 py-3 text-sm transition ${
                    activeSection === item.id
                      ? 'bg-[var(--accent-soft)] text-[var(--accent-strong)]'
                      : 'text-[var(--muted)] hover:bg-[rgba(15,118,110,0.08)] hover:text-[var(--ink)]'
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
