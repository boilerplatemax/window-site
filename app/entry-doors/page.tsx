import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Architectural Entry Doors — Pivot, Steel & Glass, Aluminum',
  description:
    'Modern architectural entry doors from FORMA — pivot doors, steel and glass entry doors, and aluminum door systems for residential and commercial projects.',
  keywords: ['modern entry doors', 'pivot door', 'steel glass entry door', 'aluminum entry door', 'architectural front door'],
}

const PRODUCTS = [
  {
    id: 'pivot',
    href: '/entry-doors/pivot',
    name: 'Pivot Entry Doors',
    tag: 'Signature Statement',
    description:
      'A pivot door rotates on a floor-to-ceiling axis rather than side-hung hinges — allowing panels up to 1,400mm wide and 3,500mm tall to open with a single fingertip touch.',
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    keyFeatures: ['Up to 1,400mm wide panels', 'Integrated multipoint locking', 'Concealed pivot mechanism', 'Glass or solid panel options'],
  },
  {
    id: 'steel-glass',
    href: '/entry-doors/steel-glass',
    name: 'Steel & Glass Entry',
    tag: null,
    description:
      'Cold-rolled steel profiles with architectural glass infills — the industrial-modern aesthetic done with precision. Powder coated in any RAL colour.',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
    keyFeatures: ['Cold-rolled steel construction', 'Any RAL powder coat finish', 'Clear, frosted, or tinted glass', 'Side panels and transoms available'],
  },
  {
    id: 'aluminum',
    href: '/entry-doors/aluminum',
    name: 'Aluminum Entry Doors',
    tag: null,
    description:
      'The precision and longevity of thermally broken aluminium for high-traffic residential and commercial entrances. Low maintenance, high performance.',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    keyFeatures: ['Thermally broken profiles', 'Commercial-grade hardware', 'Flush or rebated threshold options', 'Multipoint locking as standard'],
  },
]

export default function EntryDoorsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end bg-forma-black"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.35) 100%), url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="site-container w-full pb-20 pt-40">
          <p className="section-label-light mb-5">Products</p>
          <h1 className="font-display text-forma-white text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-6">
            Entry Door
            <br />
            <em>Systems</em>
          </h1>
          <p className="font-sans text-forma-white/60 text-lg max-w-md leading-relaxed">
            The first statement a building makes. Entry doors that balance presence,
            security, and precision engineering.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-forma-white section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {PRODUCTS.map((product) => (
              <article key={product.id} className="group">
                <Link href={product.href} aria-label={`Explore ${product.name}`}>
                  <div className="relative overflow-hidden mb-6" style={{ height: '340px' }}>
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
                  <h2 className="font-display text-forma-text text-2xl lg:text-3xl font-light mb-3 group-hover:text-forma-gold transition-colors duration-300">
                    {product.name}
                  </h2>
                </Link>

                <p className="font-sans text-forma-muted text-sm leading-relaxed mb-5">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {product.keyFeatures.map(f => (
                    <li key={f} className="flex items-center gap-2 font-mono text-[10px] tracking-label uppercase text-forma-muted/70">
                      <span className="w-1 h-1 rounded-full bg-forma-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href={product.href} className="btn-outline-gold inline-flex">
                  Explore {product.name.split(' ')[0]}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={"Design your\nentrance."}
        subheadline="From pivot to aluminum, our team will specify the right door system for your building's first impression."
      />
    </>
  )
}
