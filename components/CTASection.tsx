import Link from 'next/link'

interface Props {
  headline?: string
  subheadline?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  dark?: boolean
}

export default function CTASection({
  headline     = 'Ready to open up\nyour project?',
  subheadline  = 'Whether you\'re at concept stage or ready to order, our team works directly with architects, builders, and homeowners to specify the right system for every opening.',
  primaryLabel = 'Request a Quote',
  primaryHref  = '/contact',
  secondaryLabel = 'Speak to a Specialist',
  secondaryHref  = '/contact',
  dark = true,
}: Props) {
  const lines = headline.split('\n')

  return (
    <section
      className={`section-pad ${dark ? 'bg-forma-black' : 'bg-forma-white'}`}
      aria-label="Call to action"
      style={
        dark
          ? {
              backgroundImage:
                "linear-gradient(135deg, rgba(10,10,10,0.97) 60%, rgba(200,169,110,0.07) 100%)",
            }
          : undefined
      }
    >
      <div className="site-container text-center">
        {/* Gold rule */}
        <span className="gold-line mx-auto mb-10 block" aria-hidden="true" />

        {/* Headline */}
        <h2
          className={`font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-tight mb-7 ${
            dark ? 'text-forma-white' : 'text-forma-text'
          }`}
        >
          {lines.map((line, i) => (
            <span key={i} className={i === 1 ? 'italic' : ''}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* Sub */}
        <p
          className={`font-sans text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-12 ${
            dark ? 'text-forma-white/55' : 'text-forma-muted'
          }`}
        >
          {subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={primaryHref} className="btn-primary">
            {primaryLabel}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            href={secondaryHref}
            className={dark ? 'btn-outline-white' : 'btn-outline-gold'}
          >
            {secondaryLabel}
          </Link>
        </div>

        {/* Microcopy */}
        <p
          className={`font-mono text-[10px] tracking-label uppercase mt-8 ${
            dark ? 'text-forma-white/25' : 'text-forma-muted/50'
          }`}
        >
          No obligation · We respond within 1 business day
        </p>
      </div>
    </section>
  )
}
