import { useEffect, useState } from 'react'
import { Mail, Menu, Moon, Sun, X } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Container, ExternalLink } from './ui'
import { navigation, site } from '../content/portfolio'

// On the home page, highlight the section in view; on other pages, the page itself.
function useActiveNav(page) {
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    if (page !== 'home') {
      return undefined
    }

    const sections = Array.from(document.querySelectorAll('section[data-nav]'))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveSection(visible[0].target.dataset.nav)
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.2, 0.35, 0.5, 0.7] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [page])

  return page === 'home' ? activeSection : page
}

// The initial theme is applied by the inline script in each page's <head>.
function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme ?? 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  // Follow system changes until the visitor picks a theme themselves.
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = (event) => {
      let saved = null
      try {
        saved = localStorage.getItem('theme')
      } catch {
        // Storage can be unavailable (private mode); fall through to the system theme.
      }
      if (!saved) {
        setTheme(event.matches ? 'light' : 'dark')
      }
    }

    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Not persisted; the choice still applies for this page view.
    }
  }

  return [theme, toggle]
}

function ThemeToggle() {
  const [theme, toggle] = useTheme()
  const nextLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={nextLabel}
      title={nextLabel}
      className="icon-button"
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}

export function SiteHeader({ page }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveNav(page)

  return (
    <header className="site-header sticky top-0 z-50">
      <Container className="flex items-center justify-between py-3">
        <a href="/" className="flex items-center gap-3">
          <span className="monogram">KS</span>
          <span className="text-sm font-semibold">{site.name}</span>
        </a>

        <nav className="ml-auto mr-2 hidden items-center gap-1 lg:flex" aria-label="Main">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="nav-link"
              aria-current={active === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="icon-button lg:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <nav className="rule border-t lg:hidden" aria-label="Main">
          <Container className="flex flex-col py-3">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="nav-link py-3"
                aria-current={active === item.id ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="section py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} {site.name} · {site.role}
        </p>
        <div className="text-muted flex items-center gap-5">
          <ExternalLink href={site.links.linkedin} aria-label="LinkedIn" className="hover:text-[var(--ink)]">
            <FaLinkedin size={18} />
          </ExternalLink>
          <ExternalLink href={site.links.github} aria-label="GitHub" className="hover:text-[var(--ink)]">
            <FaGithub size={18} />
          </ExternalLink>
          <a href={site.links.email} aria-label="Email" className="hover:text-[var(--ink)]">
            <Mail size={18} />
          </a>
        </div>
      </Container>
    </footer>
  )
}
