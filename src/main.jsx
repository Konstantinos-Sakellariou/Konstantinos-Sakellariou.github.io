import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter/opsz.css'
import '@fontsource-variable/source-serif-4/opsz.css'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')

createRoot(root).render(
  <StrictMode>
    <App page={root.dataset.page ?? 'home'} />
  </StrictMode>,
)
