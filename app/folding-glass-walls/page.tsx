import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Folding Glass Walls — Bi-Fold & Corner Opening Systems',
  description:
    'FORMA folding glass wall systems — bi-fold glass walls and corner opening systems for residential and commercial projects. Custom widths, thermally broken aluminum.',
  keywords: ['folding glass walls', 'bi-fold glass doors', 'glass wall system', 'accordion glass wall', 'bi fold glass wall residential'],
}

const PRODUCTS = [
  {
    id: 'bi-fold',
    href: '/folding-glass-walls/bi-fold',
    name: 'Bi-Fold Glass Wall System',
    description:
      'Accordion-style panels that fold and stack to one or both sides, opening an entire wall face to the outside. Available in 2–8 panel configurations.',
    specs: [
      { k: 'Panel Configurations', v: '2 to 8 panels' },
      { k: 'Max Opening Width',    v: '10,000 mm' },
      { k: 'Max Panel Height',     v: '3,000 mm' },
      { k: 'Stack Direction',      v: 'Left, Right, or Both' },
      { k: 'Thermal Break',        v: 'Yes — Class A' },
    ],
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'corner',
    href: '/folding-glass-walls/corner',
    name: 'Corner Opening Systems',
    description:
      'Two runs of folding panels meeting at a corner — when open, the building\'s corner disappears entirely. The most dramatic glass opening available.',
    specs: [
      { k: 'Corner Angle',         v: '90° standard · Custom available' },
      { k: 'Max Panel Height',     v: '3,000 mm' },
      { k: 'Panel Material',       v: 'Thermally Broken Aluminium' },
      { k: 'Corner Post',          v: 'Concealed or Exposed options' },
      { k: 'Finish Options',       v: 'Powder Coat · Anodised · RAL' },
    ],
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80',
  },
]

export default function FoldingGlassWallsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end bg-forma-black"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.35) 100%), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="site-container w-full pb-20 pt-40">
          <p className="section-label-light mb-5">Products</p>
          <h1 className="font-display text-forma-white text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-6">
            Folding Glass
            <br />
            <em>Walls</em>
          </h1>
          <p className="font-sans text-forma-white/60 text-lg max-w-md leading-relaxed">
            No threshold between inside and out. Folding glass wall systems that open
            entire wall faces to the landscape.
          </p>
        </div>
      </section>

      {/* Products — stacked, alternating layout */}
      <section className="bg-forma-white section-pad">
        <div className="site-container space-y-24">
          {PRODUCTS.map((product, i) => (
            <div
              key={product.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}
                style={{ minHeight: 'clamp(320px, 36vw, 520px)' }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${product.image}')`, backgroundColor: '#1a1a1a' }}
                  role="img"
                  aria-label={product.name}
                />
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <p className="section-label mb-5">Folding Systems</p>
                <h2 className="font-display text-forma-text text-4xl lg:text-[44px] font-light leading-tight mb-6">
                  {product.name}
                </h2>
                <p className="font-sans text-forma-muted text-base leading-relaxed mb-8 max-w-sm">
                  {product.description}
                </p>

                <div className="mb-8">
                  {product.specs.map(({ k, v }) => (
                    <div key={k} className="spec-row">
                      <span className="spec-key">{k}</span>
                      <span className="spec-val">{v}</span>
                    </div>
                  ))}
                </div>

                <Link href={product.href} className="btn-primary">
                  Explore System
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        headline={"Open your\nwall entirely."}
        subheadline="Send us your opening dimensions and we'll design the right panel count, stack direction, and specification for your project."
      />
    </>
  )
}
