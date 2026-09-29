import './App.css'
import { SiteFooter, SiteHeader } from './components/SiteChrome'
import HomePage, { Contact } from './pages/HomePage'
import { AboutPage, ProjectsPage, WritingPage } from './pages/SubPages'

const pages = {
  home: HomePage,
  about: AboutPage,
  projects: ProjectsPage,
  writing: WritingPage,
}

function App({ page }) {
  const Page = pages[page] ?? HomePage

  return (
    <div className="relative isolate min-h-svh overflow-x-clip">
      <div className="page-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem]" />
      <SiteHeader page={page} />
      <main>
        <Page />
        {page !== 'home' ? <Contact /> : null}
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
