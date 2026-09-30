export function Container({ className = '', children }) {
  return <div className={`mx-auto max-w-6xl px-5 sm:px-8 ${className}`.trim()}>{children}</div>
}

export function Section({ id, className = '', children }) {
  return (
    <section id={id} data-nav={id} className={`section scroll-mt-20 py-16 sm:py-24 ${className}`.trim()}>
      <Container>{children}</Container>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="heading mt-4 text-3xl leading-tight sm:text-[2.6rem] sm:leading-[1.1]">{title}</h2>
      {description ? (
        <p className="text-muted mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export function ExternalLink({ href, className = '', children, ...props }) {
  const external = /^https?:/.test(href)

  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  )
}
