/**
 * FeatureSection — two roles in one component:
 *  1. "manifesto" variant: full-width brand statement on warm white
 *  2. "values"   variant: 4-column value propositions on near-black
 *
 * Usage in page.tsx:
 *   <FeatureSection variant="manifesto" />
 *   <FeatureSection variant="values" />
 */

const VALUE_PROPS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
        <rect x="3" y="3" width="22" height="22" rx="0.5"/>
        <line x1="3" y1="14" x2="25" y2="14"/>
        <line x1="14" y1="3" x2="14" y2="25"/>
      </svg>
    ),
    headline: 'Made to your opening.',
    body: 'Standard sizes are a starting point. Every FORMA system is specified to your exact opening — width, height, sill depth, and profile finish.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
        <circle cx="14" cy="14" r="10"/>
        <path d="M14 4v4M14 20v4M4 14h4M20 14h4"/>
        <circle cx="14" cy="14" r="4"/>
      </svg>
    ),
    headline: 'Engineered for climate.',
    body: 'Thermally broken aluminum frames, triple-glazed options, and low-E coatings rated for cold climates — without compromising the view.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
        <path d="M6 22V10l8-6 8 6v12H6z"/>
        <rect x="10" y="14" width="8" height="8"/>
      </svg>
    ),
    headline: 'Spec-ready for architects.',
    body: 'Full technical documentation, CAD details, energy performance data, and physical samples available for every system in our range.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
        <path d="M3 20h22M6 20V12l8-7 8 7v8"/>
        <path d="M19 14l3 3M19 17l3-3"/>
      </svg>
    ),
    headline: 'Factory direct. No markup.',
    body: 'We supply architects, builders, and homeowners directly. Shorter lead times, better pricing, and one point of contact from order to delivery.',
  },
]

interface Props {
  variant: 'manifesto' | 'values'
}

export default function FeatureSection({ variant }: Props) {
  if (variant === 'manifesto') {
    return (
      <section
        className="bg-forma-white section-pad"
        aria-label="Brand philosophy"
      >
        <div className="site-container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="gold-line mx-auto mb-10 block" aria-hidden="true" />

            <blockquote>
              <p className="font-display text-forma-text text-4xl sm:text-5xl lg:text-6xl font-light italic leading-[1.18] text-balance mb-10">
                "We believe a window is not a hole in a wall. It is a decision about how
                a building meets the world."
              </p>
            </blockquote>

            <p className="font-sans text-forma-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              FORMA engineers large-format glass systems for architects, builders, and
              homeowners who understand that light is the material — and that every
              opening should be intentional.
            </p>

            <p className="font-mono text-[11px] tracking-label uppercase text-forma-gold mt-10">
              — FORMA Architectural Glass
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className="bg-forma-black section-pad"
      aria-label="Why FORMA"
    >
      <div className="site-container">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p className="section-label-light mb-4">Why FORMA</p>
          <h2 className="font-display text-forma-white text-4xl sm:text-5xl font-light leading-tight max-w-lg">
            Built for the demands
            <br />
            <em>of serious construction.</em>
          </h2>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {VALUE_PROPS.map((v, i) => (
            <div key={i} className="group">
              {/* Icon */}
              <div className="text-forma-gold mb-6 transition-transform duration-300 group-hover:-translate-y-1">
                {v.icon}
              </div>

              {/* Rule */}
              <span className="gold-line mb-5 block opacity-40" />

              {/* Text */}
              <h3 className="font-display text-forma-white text-xl font-light leading-snug mb-4">
                {v.headline}
              </h3>
              <p className="font-sans text-forma-white/50 text-sm leading-relaxed">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
