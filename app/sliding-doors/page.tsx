import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Sliding Door Systems — Lift & Slide, Multi-Panel, Pocket',
  description:
    'Large-format sliding glass door systems from FORMA — lift & slide, multi-panel, and pocket sliding doors. Custom widths up to 6m for residential and commercial projects.',
  keywords: ['sliding glass doors', 'lift and slide doors', 'large sliding glass doors', 'aluminum sliding door system'],
}

const PRODUCTS = [
  {
    id: 'lift-and-slide',
    href: '/sliding-doors/lift-and-slide',
    name: 'Lift & Slide System',
    description:
      'Panels lift off the sill seal as the handle turns, then glide effortlessly on hardened steel rollers. Up to 6m wide in a single push.',
    tag: 'Most Popular',
    specs: ['Max 6,000mm wide', 'Max 3,200mm tall', 'Panels to 400kg'],
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'multi-panel',
    href: '/sliding-doors/multi-panel',
    name: 'Multi-Panel Sliding',
    description:
      'Two, three, or four panels sliding in parallel tracks — ideal for wide openings where panels stack out of the way.',
    tag: null,
    specs: ['2–4 panel configurations', 'Max 8,000mm total width', 'Flush sill option'],
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pocket-doors',
    href: '/sliding-doors/pocket-doors',
    name: 'Pocket Sliding Doors',
    description:
      'Panels disappear entirely into a concealed wall pocket, leaving zero visual trace. The cleanest indoor-outdoor connection available.',
    tag: 'Architect Favourite',
    specs: ['Fully concealed in wall', 'Single or double pocket', 'Custom pocket framing kits'],
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
  },
]

const COMPARE_ROWS = [
  { label: 'Max Opening Width', vals: ['6,000mm', '8,000mm', '3,600mm'] },
  { label: 'Panel Visibility Closed', vals: ['Visible', 'Visible', 'Hidden'] },
  { label: 'Thermal Performance', vals: ['★★★★★', '★★★★', '★★★★'] },
  { label: 'Best For', vals: ['Single large opening', 'Wide panoramic run', 'Seamless wall effect'] },
]

export default function SlidingDoorsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end bg-forma-black"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,10,10,0.85) 30%, rgba(10,10,10,0.3) 100%), url('https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="site-container w-full pb-20 pt-40">
          <p className="section-label-light mb-5">Products</p>
          <h1 className="font-display text-forma-white text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-6">
            Sliding Door
            <br />
            <em>Systems</em>
          </h1>
          <p className="font-sans text-forma-white/60 text-lg max-w-lg leading-relaxed">
            Open the wall. From precision lift & slide mechanisms to fully concealed pocket
            systems — engineered for openings that make a statement.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="bg-forma-white section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <Link key={product.id} href={product.href} className="group block" aria-label={product.name}>
                <div className="relative overflow-hidden mb-5" style={{ height: '280px' }}>
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
                <h2 className="font-display text-forma-text text-2xl font-light mb-2 group-hover:text-forma-gold transition-colors duration-300">
                  {product.name}
                </h2>
                <p className="font-sans text-forma-muted text-sm leading-relaxed mb-4">{product.description}</p>
                <ul className="space-y-1 mb-4">
                  {product.specs.map(spec => (
                    <li key={spec} className="font-mono text-[10px] tracking-label uppercase text-forma-muted/70 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-forma-gold flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-forma-black section-pad-sm">
        <div className="site-container">
          <p className="section-label-light mb-10">System Comparison</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-forma-white/10">
                  <th className="text-left pb-4 font-mono text-[10px] tracking-label uppercase text-forma-white/30 w-1/4"></th>
                  {PRODUCTS.map(p => (
                    <th key={p.id} className="text-left pb-4 font-mono text-[10px] tracking-label uppercase text-forma-gold">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(row => (
                  <tr key={row.label} className="border-b border-forma-white/5">
                    <td className="py-4 font-mono text-[10px] tracking-label uppercase text-forma-white/40">{row.label}</td>
                    {row.vals.map((v, i) => (
                      <td key={i} className="py-4 font-sans text-sm text-forma-white/70">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        headline={"Specify your\nsliding system."}
        subheadline="Share your opening dimensions and we'll recommend the right system and panel configuration for your project."
      />
    </>
  )
}
