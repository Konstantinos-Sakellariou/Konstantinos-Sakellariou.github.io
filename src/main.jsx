import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter/opsz.css'
import '@fontsource-variable/source-serif-4/opsz.css'
import './index.css'
import App from './App.jsx'
import { site } from './content/portfolio'

const root = document.getElementById('root')
const requestedDesign = new URLSearchParams(window.location.search).get('design')
document.documentElement.dataset.design = ['b', 'c'].includes(requestedDesign) ? requestedDesign : site.design

createRoot(root).render(
  <StrictMode>
    <App page={root.dataset.page ?? 'home'} />
  </StrictMode>,
)
