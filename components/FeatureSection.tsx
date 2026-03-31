const VALUE_PROPS = [
  {
    num: '01',
    headline: 'Made to your opening.',
    body: 'Standard sizes are a starting point. Every SIGNATURESPAN system is specified to your exact opening — width, height, sill depth, and profile finish.',
  },
  {
    num: '02',
    headline: 'Engineered for climate.',
    body: 'Thermally broken aluminium frames, triple-glazed options, and low-E coatings rated for cold climates — without sacrificing the view.',
  },
  {
    num: '03',
    headline: 'Spec-ready for architects.',
    body: 'Full technical documentation, CAD details, energy performance data, and physical samples available for every system in our range.',
  },
  {
    num: '04',
    headline: 'Factory direct. No markup.',
    body: 'We supply architects, builders, and homeowners directly. Shorter lead times, better pricing, one point of contact from order to delivery.',
  },
]

interface Props {
  variant: 'manifesto' | 'values'
}

export default function FeatureSection({ variant }: Props) {

  /* ── Manifesto variant — editorial two-column layout ── */
  if (variant === 'manifesto') {
    return (
      <section className="bg-forma-white overflow-hidden" aria-label="Brand philosophy">
        {/* Full-width top rule */}
        <div className="w-full h-px bg-forma-divider" />

        <div className="site-container py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0 lg:gap-0 items-start">

            {/* Left — large quote */}
            <div className="lg:pr-16">
              <span className="gold-line mb-10 block" aria-hidden="true" />
              <blockquote>
                <p className="font-display text-forma-text font-light italic leading-[1.14] text-display-lg text-balance">
                  "A window is not a hole in a wall. It is a decision about how
                  a building meets the world."
                </p>
              </blockquote>
            </div>

            {/* Centre — vertical gold rule (desktop only) */}
            <div className="hidden lg:block w-px self-stretch bg-forma-divider mx-12" aria-hidden="true" />

            {/* Right — supporting copy + attribution */}
            <div className="lg:pt-16 mt-12 lg:mt-0">
              <p className="font-sans text-forma-muted text-base sm:text-lg leading-relaxed mb-10">
                SIGNATURESPAN engineers large-format glass systems for architects, builders,
                and homeowners who understand that light is the material — and that
                every opening should be deliberate.
              </p>

              <p className="font-sans text-forma-muted text-sm leading-relaxed mb-12">
                We don't manufacture windows. We manufacture the conditions for great
                architecture — systems that disappear into the building and let the
                view do the work.
              </p>

              <p className="font-mono text-[10px] tracking-label uppercase text-forma-gold">
                — SIGNATURESPAN INC.
              </p>
            </div>
          </div>
        </div>

        {/* Full-width bottom rule */}
        <div className="w-full h-px bg-forma-divider" />
      </section>
    )
  }

  /* ── Values variant — numbered 4-column, dark bg ── */
  return (
    <section className="bg-forma-black" aria-label="Why SIGNATURESPAN">
      {/* Top border full width */}
      <div className="w-full h-px bg-forma-white/8" />

      <div className="site-container py-28 lg:py-36">

        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 lg:mb-24">
          <div>
            <p className="section-label-light mb-5">Why SIGNATURESPAN</p>
            <h2 className="font-display text-forma-white font-light text-display-md">
              Built for the demands
              <br />
              <em>of serious construction.</em>
            </h2>
          </div>
          <div className="lg:flex lg:items-end">
            <p className="font-sans text-forma-white/40 text-sm leading-relaxed max-w-sm">
              Four principles that separate a reliable glass supplier from an
              extraordinary one. Every project, every order, every time.
            </p>
          </div>
        </div>

        {/* 4-column values — separated by vertical rules on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-forma-white/8">
          {VALUE_PROPS.map((v) => (
            <div key={v.num} className="group py-10 sm:py-0 lg:px-8 first:lg:pl-0 last:lg:pr-0">
              {/* Number + top rule */}
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[10px] tracking-label uppercase text-forma-gold">{v.num}</span>
                <span className="flex-1 h-px bg-forma-white/10" />
              </div>

              <h3 className="font-display text-forma-white text-2xl font-light leading-snug mb-5 group-hover:text-forma-gold transition-colors duration-400">
                {v.headline}
              </h3>
              <p className="font-sans text-forma-white/45 text-sm leading-relaxed">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
