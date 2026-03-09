import Link from 'next/link'

const SPECS = [
  { key: 'Max Panel Width',  val: '3,000 mm' },
  { key: 'Max Panel Height', val: '3,200 mm' },
  { key: 'Frame Depth',      val: '78 mm' },
  { key: 'Glass Options',    val: 'Double / Triple Glazed' },
  { key: 'Thermal Break',    val: 'Class A Profile' },
  { key: 'Finishes',         val: 'Powder Coat · Anodised · RAL' },
]

export default function FeaturedProduct() {
  return (
    <section
      className="bg-forma-white section-pad"
      aria-label="Featured System — Lift & Slide Doors"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div
            className="relative overflow-hidden"
            style={{ minHeight: 'clamp(360px, 40vw, 600px)' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/caledon-house-backyard-1.jpg')",
                backgroundColor: '#1a1a1a',
              }}
              role="img"
              aria-label="Lift and slide door system installed in a modern home"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-forma-black/10" />
          </div>

          {/* Content */}
          <div>
            <p className="section-label mb-5">Featured System</p>

            <h2 className="font-display text-forma-text text-4xl sm:text-5xl lg:text-[52px] font-light leading-tight mb-6">
              Lift & Slide
              <br />
              <em>Door System</em>
            </h2>

            <p className="font-sans text-forma-muted text-base leading-relaxed mb-10 max-w-sm">
              When a door opens, a wall should disappear. Our lift &amp; slide system glides
              panels up to 6 metres wide with fingertip ease — creating a seamless transition
              between interior living and outdoor space without compromising thermal performance.
            </p>

            {/* Spec table */}
            <div className="mb-10">
              {SPECS.map(({ key, val }) => (
                <div key={key} className="spec-row">
                  <span className="spec-key">{key}</span>
                  <span className="spec-val">{val}</span>
                </div>
              ))}
            </div>

            <Link href="/sliding-doors/lift-and-slide" className="btn-primary">
              View System Details
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
