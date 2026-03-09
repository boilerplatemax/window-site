import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Large Format Windows — Architectural Windows',
  description:
    'Explore FORMA\'s range of large-format architectural windows — floor-to-ceiling, picture windows, corner glass systems, and fixed panels. Custom sized, thermally broken.',
  keywords: ['large format windows', 'architectural windows', 'floor to ceiling windows', 'custom windows residential'],
}

const PRODUCTS = [
  {
    id: 'floor-to-ceiling',
    href: '/windows/floor-to-ceiling',
    name: 'Floor-to-Ceiling Windows',
    description:
      'Full-height glazing that transforms a wall into a view. Available from sill to soffit in custom widths up to 4,200mm.',
    tag: 'Most Specified',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'picture-windows',
    href: '/windows/picture-windows',
    name: 'Picture Windows',
    description:
      'Fixed, frameless glazing that frames the landscape like a living artwork. Zero sight lines, maximum glass.',
    tag: null,
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'corner-glass',
    href: '/windows/corner-glass',
    name: 'Corner Glass Systems',
    description:
      'Two panes intersecting at a frameless corner — no post, no interruption. The defining feature of modern architecture.',
    tag: 'Architect Favourite',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fixed-panels',
    href: '/windows/fixed-panels',
    name: 'Fixed Glass Panels',
    description:
      'Large-format fixed glazing for interior partitions, commercial facades, and feature walls. Custom dimensions.',
    tag: null,
    image:
      'https://images.unsplash.com/photo-1449844908441-8829b2f41b30?auto=format&fit=crop&w=800&q=80',
  },
]

const SPECS = [
  { key: 'Max Width',      val: 'Up to 4,200 mm' },
  { key: 'Max Height',     val: 'Up to 3,600 mm' },
  { key: 'Frame Material', val: 'Thermally Broken Aluminium' },
  { key: 'Glass Options',  val: 'Double / Triple Glazed · Low-E' },
  { key: 'Finishes',       val: 'Powder Coat · Anodised · RAL Custom' },
  { key: 'Standards',      val: 'NAFS Tested · CSA A440 Compliant' },
]

export default function WindowsPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative min-h-[60vh] flex items-end bg-forma-black"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 100%), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="site-container w-full pb-20 pt-40">
          <p className="section-label-light mb-5">Products</p>
          <h1 className="font-display text-forma-white text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-6">
            Windows
          </h1>
          <p className="font-sans text-forma-white/60 text-lg max-w-lg leading-relaxed">
            Expansive glazing systems designed to dissolve the boundary between architecture
            and landscape. Every window specified to your exact opening.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-forma-white section-pad" aria-label="Window products">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {PRODUCTS.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="group block"
                aria-label={`Explore ${product.name}`}
              >
                <div
                  className="relative overflow-hidden mb-5"
                  style={{ height: 'clamp(240px, 26vw, 400px)' }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                    style={{ backgroundImage: `url('${product.image}')`, backgroundColor: '#1a1a1a' }}
                    role="img"
                    aria-label={product.name}
                  />
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-forma-gold text-forma-black font-mono text-[9px] tracking-label uppercase px-3 py-1.5">
                      {product.tag}
                    </span>
                  )}
                </div>
                <h2 className="font-display text-forma-text text-2xl lg:text-3xl font-light mb-2 group-hover:text-forma-gold transition-colors duration-300">
                  {product.name}
                </h2>
                <p className="font-sans text-forma-muted text-sm leading-relaxed mb-3">{product.description}</p>
                <span className="font-mono text-[10px] tracking-label uppercase text-forma-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore System →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* System Specs */}
      <section className="bg-forma-surface section-pad-sm border-t border-forma-divider" aria-label="Technical specifications">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-5">Technical Overview</p>
              <h2 className="font-display text-forma-text text-4xl font-light leading-tight">
                Engineered to specification,
                <br />
                <em>not compromise.</em>
              </h2>
            </div>
            <div>
              {SPECS.map(({ key, val }) => (
                <div key={key} className="spec-row">
                  <span className="spec-key">{key}</span>
                  <span className="spec-val">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline={"Specify your\nwindow system."}
        subheadline="Tell us about your project and we'll help you select the right system, size, and specification."
        primaryLabel="Request a Quote"
        secondaryLabel="Download Spec Sheets"
        secondaryHref="/contact"
      />
    </>
  )
}
