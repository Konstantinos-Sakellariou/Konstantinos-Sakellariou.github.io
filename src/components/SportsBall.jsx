import { useEffect, useState } from 'react'

function BasketballGraphic() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="sports-ball-svg"
      role="img"
      aria-label="Basketball"
    >
      <defs>
        <radialGradient id="basketballFill" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#f7a13d" />
          <stop offset="65%" stopColor="#e1771d" />
          <stop offset="100%" stopColor="#b95a10" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="52" fill="url(#basketballFill)" />
      <path d="M60 8c16 14 25 32 25 52s-9 38-25 52" fill="none" stroke="#1c120b" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M60 8c-16 14-25 32-25 52s9 38 25 52" fill="none" stroke="#1c120b" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M8 60c14-16 32-25 52-25s38 9 52 25" fill="none" stroke="#1c120b" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M8 60c14 16 32 25 52 25s38-9 52-25" fill="none" stroke="#1c120b" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="45" cy="35" r="10" fill="rgba(255,255,255,0.18)" />
    </svg>
  )
}

function SoccerGraphic() {
  return (
    <svg viewBox="0 0 120 120" className="sports-ball-svg" role="img" aria-label="Soccer ball">
      <defs>
        <radialGradient id="soccerFill" cx="38%" cy="30%" r="72%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dde3ea" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="52" fill="url(#soccerFill)" />
      <polygon points="60,37 47,46 52,61 68,61 73,46" fill="#1e293b" />
      <polygon points="36,49 25,57 30,72 44,69 47,55" fill="#1e293b" />
      <polygon points="84,49 73,55 76,69 90,72 95,57" fill="#1e293b" />
      <polygon points="44,72 32,76 36,90 52,95 58,82" fill="#1e293b" />
      <polygon points="76,72 62,82 68,95 84,90 88,76" fill="#1e293b" />
      <path d="M47 46 36 49M73 46 84 49M52 61 44 69M68 61 76 69M58 82 52 95M62 82 68 95" fill="none" stroke="#576579" strokeWidth="3" strokeLinecap="round" />
      <circle cx="44" cy="34" r="8" fill="rgba(255,255,255,0.35)" />
    </svg>
  )
}

export default function SportsBall() {
  const [variant, setVariant] = useState('basketball')

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setVariant((current) => (current === 'basketball' ? 'soccer' : 'basketball'))
    }, 9000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="hero-ball-shell" aria-hidden="true">
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
