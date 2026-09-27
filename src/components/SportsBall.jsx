import { useEffect, useState } from 'react'

const CENTER = 80
const RADIUS = 69

// Only the seams/panels spin; gradients and gloss stay fixed so the light source doesn't rotate.
function BallShading({ id }) {
  return (
    <>
      <circle cx={CENTER} cy={CENTER} r={RADIUS} fill={`url(#${id}Shade)`} />
      <ellipse cx="56" cy="46" rx="22" ry="14" fill={`url(#${id}Gloss)`} transform="rotate(-30 56 46)" />
      <circle cx={CENTER} cy={CENTER} r={RADIUS - 0.75} fill="none" stroke="rgba(2,6,23,0.35)" strokeWidth="1.5" />
    </>
  )
}

function ShadingDefs({ id }) {
  return (
    <>
      <radialGradient id={`${id}Shade`} cx="36%" cy="30%" r="75%">
        <stop offset="55%" stopColor="rgba(2,6,23,0)" />
        <stop offset="100%" stopColor="rgba(2,6,23,0.45)" />
      </radialGradient>
      <radialGradient id={`${id}Gloss`}>
        <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </radialGradient>
      <clipPath id={`${id}Clip`}>
        <circle cx={CENTER} cy={CENTER} r={RADIUS} />
      </clipPath>
    </>
  )
}

function BasketballGraphic() {
  return (
    <svg viewBox="0 0 160 160" className="sports-ball-svg" role="img" aria-label="Basketball">
      <defs>
        <radialGradient id="basketballFill" cx="36%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#f6a24a" />
          <stop offset="60%" stopColor="#e0701f" />
          <stop offset="100%" stopColor="#9a430d" />
        </radialGradient>
        <pattern id="basketballPebble" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.7" fill="rgba(67,28,8,0.35)" />
          <circle cx="4.5" cy="4.5" r="0.7" fill="rgba(67,28,8,0.35)" />
        </pattern>
        <ShadingDefs id="basketball" />
      </defs>
      <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="url(#basketballFill)" />
      <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="url(#basketballPebble)" opacity="0.5" />
      <g clipPath="url(#basketballClip)">
        <g className="sports-ball-pattern" fill="none" stroke="#1f140c" strokeWidth="4" strokeLinecap="round">
          <path d="M80 8V152M8 80H152" />
          <path d="M36 27C60 50 60 110 36 133M124 27C100 50 100 110 124 133" />
        </g>
      </g>
      <BallShading id="basketball" />
    </svg>
  )
}

function polygon(cx, cy, r, rotationDeg, sides = 5) {
  return Array.from({ length: sides }, (_, k) => {
    const a = ((rotationDeg + (360 / sides) * k) * Math.PI) / 180
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)]
  })
}

const toPath = (points) => `M${points.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join('L')}Z`

// Classic top-down football: centre pentagon, five outer pentagons, hexagon seams between them.
const centrePentagon = polygon(CENTER, CENTER, 21, -90)
const outerPentagons = centrePentagon.map((_, k) => {
  const angle = -90 + 72 * k
  const rad = (angle * Math.PI) / 180
  return polygon(CENTER + 60 * Math.cos(rad), CENTER + 60 * Math.sin(rad), 20, angle + 180)
})
const soccerSeams = [
  ...centrePentagon.map(([x, y], k) => `M${x.toFixed(1)} ${y.toFixed(1)}L${outerPentagons[k][0].map((v) => v.toFixed(1)).join(' ')}`),
  ...outerPentagons.map((pent, k) => {
    const next = outerPentagons[(k + 1) % 5]
    const [ax, ay] = pent[4]
    const [bx, by] = next[1]
    return `M${ax.toFixed(1)} ${ay.toFixed(1)}L${bx.toFixed(1)} ${by.toFixed(1)}`
  }),
].join('')

function SoccerGraphic() {
  return (
    <svg viewBox="0 0 160 160" className="sports-ball-svg" role="img" aria-label="Football">
      <defs>
        <radialGradient id="soccerFill" cx="36%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#e5eaf2" />
          <stop offset="100%" stopColor="#b8c2d3" />
        </radialGradient>
        <ShadingDefs id="soccer" />
      </defs>
      <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="url(#soccerFill)" />
      <g clipPath="url(#soccerClip)">
        <g className="sports-ball-pattern">
          <path d={soccerSeams} fill="none" stroke="#475569" strokeWidth="1.6" strokeLinecap="round" />
          <path d={[centrePentagon, ...outerPentagons].map(toPath).join('')} fill="#111827" />
        </g>
      </g>
      <BallShading id="soccer" />
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
