import { useEffect, useState } from 'react'

function BasketballGraphic() {
  return (
    <svg
      viewBox="0 0 160 160"
      className="sports-ball-svg"
      role="img"
      aria-label="Basketball"
    >
      <defs>
        <radialGradient id="basketballFill" cx="34%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#f7b04d" />
          <stop offset="55%" stopColor="#e47f26" />
          <stop offset="100%" stopColor="#a24c0f" />
        </radialGradient>
        <radialGradient id="basketballGloss" cx="28%" cy="22%" r="52%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <pattern id="basketballPebble" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.9" fill="rgba(67,28,8,0.22)" />
          <circle cx="7.5" cy="3.5" r="0.8" fill="rgba(67,28,8,0.2)" />
          <circle cx="4.5" cy="7.5" r="0.85" fill="rgba(67,28,8,0.22)" />
        </pattern>
      </defs>
      <circle cx="80" cy="80" r="69" fill="url(#basketballFill)" />
      <circle cx="80" cy="80" r="69" fill="url(#basketballPebble)" opacity="0.32" />
      <circle cx="80" cy="80" r="69" fill="url(#basketballGloss)" opacity="0.55" />
      <circle cx="80" cy="80" r="69" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
      <path d="M80 11c20 18 31 41 31 69s-11 51-31 69" fill="none" stroke="#1c120b" strokeWidth="6" strokeLinecap="round" />
      <path d="M80 11c-20 18-31 41-31 69s11 51 31 69" fill="none" stroke="#1c120b" strokeWidth="6" strokeLinecap="round" />
      <path d="M11 80c18-20 41-31 69-31s51 11 69 31" fill="none" stroke="#1c120b" strokeWidth="6" strokeLinecap="round" />
      <path d="M11 80c18 20 41 31 69 31s51-11 69-31" fill="none" stroke="#1c120b" strokeWidth="6" strokeLinecap="round" />
      <circle cx="55" cy="45" r="12" fill="rgba(255,255,255,0.18)" />
    </svg>
  )
}

function SoccerGraphic() {
  return (
    <svg viewBox="0 0 160 160" className="sports-ball-svg" role="img" aria-label="Soccer ball">
      <defs>
        <radialGradient id="soccerFill" cx="34%" cy="28%" r="74%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#cfd8e5" />
        </radialGradient>
        <clipPath id="soccerClip">
          <circle cx="80" cy="80" r="69" />
        </clipPath>
      </defs>
      <circle cx="80" cy="80" r="69" fill="url(#soccerFill)" />
      <g clipPath="url(#soccerClip)">
        <path d="M80 49 58 64 66 88 94 88 102 64Z" fill="#111827" />
        <path d="M80 49 58 64 43 45 60 26 82 30Z" fill="#111827" />
        <path d="M80 49 102 64 118 45 100 26 82 30Z" fill="#111827" />
        <path d="M58 64 32 70 27 98 46 112 66 88Z" fill="#111827" />
        <path d="M102 64 128 70 133 98 114 112 94 88Z" fill="#111827" />
        <path d="M66 88 46 112 57 136 80 143 103 136 114 112 94 88Z" fill="#111827" />
        <path d="M80 11v19M43 45 24 41M118 45l18-4M57 136l-7 20M103 136l7 20" stroke="#64748b" strokeWidth="3.5" strokeLinecap="round" opacity="0.65" />
        <path d="M58 64 43 45M102 64l16-19M66 88l-20 24M94 88l20 24M80 49l2-19M80 143l0 18M32 70 24 41M128 70l8-29" stroke="#94a3b8" strokeWidth="2.6" strokeLinecap="round" opacity="0.45" />
      </g>
      <circle cx="80" cy="80" r="69" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="3" />
      <circle cx="56" cy="44" r="11" fill="rgba(255,255,255,0.24)" />
    </svg>
  )
}

export default function SportsBall({ className = '' }) {
  const [variant, setVariant] = useState('basketball')

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setVariant((current) => (current === 'basketball' ? 'soccer' : 'basketball'))
    }, 9000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className={`hero-ball-shell ${className}`.trim()} aria-hidden="true">
      <div className="hero-ball-shadow" />
      <div className="hero-ball-orbit">
        <div
          className={`sports-ball-face ${variant === 'basketball' ? 'is-visible' : 'is-hidden'}`}
        >
          <BasketballGraphic />
        </div>
        <div
          className={`sports-ball-face ${variant === 'soccer' ? 'is-visible' : 'is-hidden'}`}
        >
          <SoccerGraphic />
        </div>
      </div>
    </div>
  )
}
