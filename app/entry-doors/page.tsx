import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Architectural Entry Doors — Pivot, Steel & Glass, Aluminum',
  description:
    'Modern architectural entry doors from SIGNATURESPAN — oversized pivot doors, steel and glass entry systems, and thermally broken aluminium doors for residential and commercial projects.',
  keywords: [
    'modern entry doors', 'pivot door', 'large pivot door', 'steel glass entry door',
    'aluminum entry door', 'architectural front door', 'oversized entry door',
    'architectural entry door residential',
  ],
  openGraph: {
    title: 'Architectural Entry Doors — Pivot, Steel & Glass — SIGNATURESPAN',
    description: 'Modern architectural entry doors — oversized pivot doors, steel and glass entry systems, and thermally broken aluminium doors.',
    images: [{ url: '/images/hero.jpg', width: 1920, height: 1080, alt: 'Large pivot entry door on a modern architectural residence' }],
  },
  alternates: { canonical: 'https://signaturespan.com/entry-doors' },
}

const Arr = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PRODUCTS = [
  {
    id: 'pivot',
    num: '01',
    href: '/entry-doors/pivot',
    name: 'Pivot Entry Doors',
    tag: 'Statement Product',
    description:
      'A pivot door rotates on a floor-to-ceiling axis rather than side-hung hinges — allowing panels up to 1,400mm wide and 3,500mm tall to open with effortless precision.',
    body:
      'The pivot door is one of the few product categories where the mechanism itself is the design statement. The door doesn\'t swing on a hinge at its edge — it rotates on a central or off-centre axis, pivoting from floor plate to overhead carrier with perfect balance regardless of panel size or weight. At scale, pivot doors are architecturally transformative: a 1,200mm wide, 3,200mm tall glass and aluminium panel opening in a single smooth rotation redefines what an entrance feels like. SIGNATURESPAN pivot doors are available with glass infill panels, solid aluminium, or a combination of both — in any RAL colour with matching or contrasting hardware.',
    specs: [
      { k: 'Max Width',       v: 'Up to 1,400 mm' },
      { k: 'Max Height',      v: 'Up to 3,500 mm' },
      { k: 'Pivot Type',      v: 'Central or offset axis' },
      { k: 'Panel Options',   v: 'Full glass · Solid · Composite' },
      { k: 'Locking',         v: 'Integrated multipoint — flush lever or pull bar' },
      { k: 'Finish',          v: 'Any RAL powder coat · Anodised · Natural Aluminium' },
    ],
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1100&q=85',
  },
  {
    id: 'steel-glass',
    num: '02',
    href: '/entry-doors/steel-glass',
    name: 'Steel & Glass Entry',
    tag: null,
    description:
      'Cold-rolled steel profiles with architectural glass infills — the industrial-modern aesthetic executed with precision engineering and long-term durability.',
    body:
      'Steel and glass entry doors appeal to a particular architectural sensibility: the honest expression of industrial materials, refined to a residential or commercial standard. Cold-rolled steel profiles are inherently slimmer than aluminium equivalents at the same structural performance, making them ideal where sight lines matter as much as the glass itself. SIGNATURESPAN steel & glass entry systems are powder coated in any RAL colour, with the option for contrasting interior and exterior finishes. Side panels, transoms, and full-height sidelights integrate with the same profile system for a unified entrance composition.',
    specs: [
      { k: 'Frame Material',  v: 'Cold-rolled steel' },
      { k: 'Profile Depth',   v: 'From 40 mm — slimmer than equivalent aluminium' },
      { k: 'Glass Options',   v: 'Clear · Frosted · Tinted · Patterned' },
      { k: 'Sidelights',      v: 'Fixed panels · Matching profile system' },
      { k: 'Hardware',        v: 'Surface-mounted or flush — custom options' },
      { k: 'Finish',          v: 'Any RAL · Dual-colour interior/exterior available' },
    ],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1100&q=85',
  },
  {
    id: 'aluminum',
    num: '03',
    href: '/entry-doors/aluminum',
    name: 'Aluminum Entry Doors',
    tag: null,
    description:
      'Thermally broken aluminium entry doors for high-traffic residential entrances and commercial applications — precision hardware, low maintenance, long performance life.',
    body:
      'Aluminium entry doors are the workhorse of the modern entry door category: dimensionally stable, corrosion-resistant, available in any colour, and capable of accommodating large glass areas without compromising structural performance. SIGNATURESPAN aluminium entry doors are manufactured from thermally broken profiles — the same profile system used in our window range — ensuring consistent thermal performance between door and adjacent glazing. Commercial-grade multipoint locking is standard, with options for access control, panic hardware, and motorised operators for commercial entrances.',
    specs: [
      { k: 'Frame Material',  v: 'Thermally broken 6063-T5 aluminium alloy' },
      { k: 'Max Door Width',  v: 'Up to 1,200 mm single leaf · 2,400 mm double' },
      { k: 'Max Height',      v: 'Up to 3,000 mm' },
      { k: 'Locking',         v: 'Multipoint — up to 5 lock points as standard' },
      { k: 'Hardware',        v: 'Architectural grade · Stainless or powder coat' },
      { k: 'Applications',    v: 'Residential · Commercial · Access-controlled' },
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1100&q=85',
  },
]

const BENEFITS = [
  {
    num: '01',
    headline: 'The entrance sets the tone.',
    body: 'An entrance door is the first physical interaction a person has with a building. It communicates the quality and character of everything that follows. An undersized, off-the-shelf door in an architecturally considered building is a contradiction — it undermines the design intent before the visitor has stepped inside.',
  },
  {
    num: '02',
    headline: 'Security without compromise.',
    body: 'Large-format entry doors demand hardware that matches their scale. SIGNATURESPAN entry systems use commercial-grade multipoint locking mechanisms — not consumer-grade single-point locks — distributed across the full height of the door leaf. The result is a panel that seals against the frame under equal pressure at every point.',
  },
  {
    num: '03',
    headline: 'Specified to the project, not the catalogue.',
    body: 'Door dimensions, glass configuration, hardware position, panel division, colour, and threshold detail are all specified individually for each project. SIGNATURESPAN does not offer package deals. We offer the right door for the building — and the technical documentation to prove it meets the specification.',
  },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Consultation', body: 'Share your project drawings or opening dimensions. We review the structural requirements, entry orientation, and design intent.' },
  { step: '02', title: 'Specification', body: 'Our team produces a complete door specification: system selection, dimensions, glass type, hardware schedule, and finish.' },
  { step: '03', title: 'Technical Package', body: 'You receive a full technical drawing set, performance data, and hardware specifications for your documentation package.' },
  { step: '04', title: 'Production & Delivery', body: 'Manufactured to your specification and delivered to site with installation guidance and post-delivery technical support.' },
]

export default function EntryDoorsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex flex-col justify-end bg-forma-black overflow-hidden"
        style={{ minHeight: '72vh' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/caledon-house-exterior-1.jpg')" }}
          role="img"
          aria-label="Large pivot entry door on a modern architectural residence"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forma-black/94 via-forma-black/60 to-forma-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-forma-black/90 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, #C8A96E, #C8A96E44 40%, transparent 70%)' }} />
        <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-forma-black/90 to-transparent" aria-hidden="true" />

        <div className="relative z-10 site-container w-full pb-20 pt-44">
          <p className="font-mono text-[11px] tracking-label uppercase text-forma-white/85 mb-6">Entry Door Systems</p>
          <h1 className="font-display text-forma-white font-light text-balance mb-7 text-display-lg">
            The entrance
            <br />
            <em>is the first sentence.</em>
          </h1>
          <p className="font-sans text-forma-white/90 text-base sm:text-lg max-w-[420px] leading-relaxed mb-10">
            Pivot doors, steel & glass entry systems, and aluminium doors —
            engineered to make the right impression, every time.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Quote <Arr />
          </Link>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="bg-forma-white">
        <div className="w-full h-px bg-forma-divider" />
        <div className="site-container py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
            <div>
              <p className="section-label mb-6">Entry Doors</p>
              <h2 className="font-display text-forma-text font-light text-display-md text-balance">
                The door that earns
                <br />
                <em>its position.</em>
              </h2>
            </div>
            <div className="space-y-5 lg:pt-4">
              <p className="font-sans text-forma-muted text-base sm:text-[17px] leading-relaxed">
                In modern architectural practice, the entry door is rarely treated as a standard
                component. It is a compositional element — scaled to the facade, proportioned
                to the opening, and finished in a way that signals the quality of the building
                behind it.
              </p>
              <p className="font-sans text-forma-muted text-base leading-relaxed">
                SIGNATURESPAN entry door systems are designed for architects and builders who understand
                this. We offer three distinct product families — pivot, steel & glass, and
                aluminium — each with different structural characteristics, aesthetic registers,
                and performance profiles. All are custom-specified. None are off-the-shelf.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-forma-divider" />
      </section>

      {/* ── Product Highlights ── */}
      <section className="bg-forma-white" aria-label="Entry door systems">
        {PRODUCTS.map((p, i) => (
          <div key={p.id} id={p.id}>
            <div className={`site-container py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="relative overflow-hidden" style={{ minHeight: 'clamp(340px, 40vw, 580px)' }}>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${p.image}')`, backgroundColor: '#1a1a1a' }}
                  role="img" aria-label={p.name}
                />
                {p.tag && (
                  <span className="absolute top-5 left-5 font-mono text-[9px] tracking-label uppercase bg-forma-gold text-forma-black px-3 py-1.5">
                    {p.tag}
                  </span>
                )}
                <span className="absolute bottom-5 right-5 font-mono text-[10px] tracking-label uppercase text-forma-white/30">{p.num}</span>
              </div>

              <div>
                <p className="section-label mb-4">Entry Doors · {p.num}</p>
                <h2 className="font-display text-forma-text font-light text-display-md mb-5">{p.name}</h2>
                <p className="font-sans text-forma-text/80 text-base font-medium leading-relaxed mb-4">{p.description}</p>
                <p className="font-sans text-forma-muted text-sm leading-relaxed mb-8">{p.body}</p>
                <div className="mb-8">
                  {p.specs.map(({ k, v }) => (
                    <div key={k} className="spec-row">
                      <span className="spec-key">{k}</span>
                      <span className="spec-val">{v}</span>
                    </div>
                  ))}
                </div>
                <Link href={p.href} className="btn-outline-gold">
                  Explore System <Arr />
                </Link>
              </div>
            </div>
            {i < PRODUCTS.length - 1 && <div className="w-full h-px bg-forma-divider" />}
          </div>
        ))}
      </section>

      {/* ── Benefits — dark ── */}
      <section className="bg-forma-black">
        <div className="w-full h-px bg-forma-white/8" />
        <div className="site-container py-28 lg:py-36">
          <div className="mb-20">
            <p className="section-label-light mb-5">Why Entry Door Quality Matters</p>
            <h2 className="font-display text-forma-white font-light text-display-md max-w-xl">
              Three reasons the entry
              <br />
              <em>defines the building.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-forma-white/8">
            {BENEFITS.map(b => (
              <div key={b.num} className="py-10 lg:py-0 lg:px-10 first:lg:pl-0 last:lg:pr-0">
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-[10px] tracking-label uppercase text-forma-gold">{b.num}</span>
                  <span className="flex-1 h-px bg-forma-white/10" />
                </div>
                <h3 className="font-display text-forma-white text-2xl font-light leading-snug mb-5">{b.headline}</h3>
                <p className="font-sans text-forma-white/45 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-forma-surface border-t border-forma-divider">
        <div className="site-container py-24 lg:py-28">
          <p className="section-label mb-10">Our Process</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {HOW_IT_WORKS.map(s => (
              <div key={s.step} className="border-t-2 border-forma-gold pt-6">
                <p className="font-mono text-[10px] tracking-label uppercase text-forma-gold mb-4">{s.step}</p>
                <h3 className="font-display text-forma-text text-xl font-light leading-snug mb-3">{s.title}</h3>
                <p className="font-sans text-forma-muted text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={"Design your\nentrance."}
        subheadline="Share your project drawings or opening dimensions and we'll specify the right door system, configuration, and finish for your building's entrance."
        primaryLabel="Request a Quote"
        secondaryLabel="View Projects"
        secondaryHref="/projects"
      />
    </>
  )
}
