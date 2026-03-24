import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Large Format Architectural Windows',
  description:
    'Floor-to-ceiling windows, picture windows, corner glass systems, and fixed panels — custom-sized, thermally broken aluminium for residential and commercial projects.',
  keywords: [
    'large format windows', 'floor to ceiling windows', 'architectural windows',
    'corner glass systems', 'picture windows', 'modern aluminum windows',
    'custom windows residential', 'thermally broken aluminum windows',
  ],
  openGraph: {
    title: 'Large Format Architectural Windows — SIGNATURESPAN',
    description: 'Floor-to-ceiling windows, picture windows, corner glass systems, and fixed panels — custom-sized thermally broken aluminium.',
    images: [{ url: '/images/hero.jpg', width: 1920, height: 1080, alt: 'Floor-to-ceiling glass wall in a modern residence' }],
  },
  alternates: { canonical: 'https://signaturespan.com/windows' },
}

const Arr = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PRODUCTS = [
  {
    id: 'floor-to-ceiling',
    num: '01',
    href: '/windows/floor-to-ceiling',
    name: 'Floor-to-Ceiling Windows',
    tag: 'Most Specified',
    description:
      'Full-height glazing that transforms a wall into an uninterrupted view. Manufactured from sill to soffit in single bays or continuous runs — the defining element of contemporary residential architecture.',
    body:
      'Architects specify floor-to-ceiling glazing to fundamentally change how a room relates to its site. At SIGNATURESPAN, each unit is produced to your exact height and width — no compromise on proportion, no off-the-shelf sight lines. Available in fixed, tilt-turn, or tilt-slide configurations to suit the ventilation and acoustic requirements of each project.',
    specs: [
      { k: 'Max Width',    v: '4,200 mm per unit' },
      { k: 'Max Height',   v: '3,600 mm per unit' },
      { k: 'Glass',        v: 'Double or Triple Glazed · Low-E' },
      { k: 'Thermal Break',v: 'Class A Aluminium Profile' },
      { k: 'Operation',    v: 'Fixed · Tilt-Turn · Tilt-Slide' },
    ],
    image: '/images/caledon-house-interrior-1.jpg',
  },
  {
    id: 'picture-windows',
    num: '02',
    href: '/windows/picture-windows',
    name: 'Picture Windows',
    tag: null,
    description:
      'Fixed, frameless glazing sized to the view — not the catalogue. A picture window creates a composition that never changes.',
    body:
      'Picture windows are the purest form of architectural glazing: a fixed pane of glass, precisely framed, that captures a view like a painting on a wall. Because they\'re non-operable, the frame can be reduced to near-zero — maximising visible glass area and eliminating the visual noise of hinges, handles, and seals. SIGNATURESPAN manufactures picture windows to any rectangular dimension, with interior- or exterior-flush frame options.',
    specs: [
      { k: 'Form',         v: 'Fixed · Non-operable' },
      { k: 'Frame Profile',v: 'Slim-line or flush rebated' },
      { k: 'Glass',        v: 'Any spec — low-iron available' },
      { k: 'Finish',       v: 'Any RAL · Anodised · Dual-colour' },
      { k: 'Custom Size',  v: 'Any rectangular dimension' },
    ],
    image: '/images/caledon-house-interrior-2.jpg',
  },
  {
    id: 'corner-glass',
    num: '03',
    href: '/windows/corner-glass',
    name: 'Corner Glass Systems',
    tag: 'Architect Favourite',
    description:
      'Two glazing panels meeting at a 90° corner with no intermediate post. The structural challenge has been solved. What remains is pure transparency.',
    body:
      'A true frameless corner requires the structural work to be done in the frame itself — not masked by a post or column. SIGNATURESPAN\'s corner glass systems eliminate the intermediate mullion entirely, allowing two full-height panes to meet at the corner of a building with only a hairline joint. The result is an uninterrupted panoramic view in two directions simultaneously. Available as a fixed system or integrated with our lift & slide door range for operable corner openings.',
    specs: [
      { k: 'Corner Type',  v: '90° internal · 90° external' },
      { k: 'Post',         v: 'None — frameless junction' },
      { k: 'Max Height',   v: '3,200 mm' },
      { k: 'Integration',  v: 'Fixed or Lift & Slide operable' },
      { k: 'Finish',       v: 'Powder Coat · Anodised · RAL' },
    ],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1100&q=85',
  },
  {
    id: 'fixed-panels',
    num: '04',
    href: '/windows/fixed-panels',
    name: 'Fixed Glass Panels',
    tag: null,
    description:
      'Architectural glazing for feature walls, interior partitions, commercial facades, and structural glass bays where the glass itself is the architecture.',
    body:
      'When glazing needs to span large structural openings, or serve as a building\'s primary facade material, fixed glass panels provide the scale and precision required. SIGNATURESPAN supplies structural glazing systems for both residential and commercial applications — from single large panes silicone-bonded into frames, to multi-panel grid facades. All panels are engineered to specification with full structural calculations available.',
    specs: [
      { k: 'Max Size',     v: '3,200 mm × 4,000 mm' },
      { k: 'System',       v: 'Capped · Semi-frameless · Structural sealant' },
      { k: 'Glass',        v: 'Toughened · Laminated · Fire-rated available' },
      { k: 'Applications', v: 'Residential · Commercial · Interior' },
      { k: 'Certifications',v: 'NAFS Tested · CSA A440' },
    ],
    image: '/images/rural-house-roof-1.jpg',
  },
]

const BENEFITS = [
  {
    num: '01',
    headline: 'Daylight as the primary material.',
    body: 'The quality of natural light in a room is determined almost entirely by the size, position, and glass specification of the windows. SIGNATURESPAN systems are designed to maximise visible light transmission while giving architects control over solar heat gain, glare, and thermal comfort through glass selection.',
  },
  {
    num: '02',
    headline: 'Thermal performance you can specify.',
    body: 'Thermally broken aluminium profiles, warm-edge spacer bars, and triple-glazed options are standard across our range. We provide U-value performance data and energy ratings for every system — essential for passive house projects, LEED certification, and energy code compliance in cold climates.',
  },
  {
    num: '03',
    headline: 'Manufactured to your specification.',
    body: 'We don\'t stock from warehouses. Every SIGNATURESPAN window is manufactured to your exact opening dimensions, chosen profile depth, and glass specification — with production timelines measured in weeks. Changes to sizing or specification are accommodated until the point of manufacture.',
  },
]

export default function WindowsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex flex-col justify-end bg-forma-black overflow-hidden"
        style={{ minHeight: '72vh' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/caledon-house-interrior-1.jpg')",
          }}
          role="img"
          aria-label="Floor-to-ceiling glass wall in a modern residence"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forma-black/94 via-forma-black/60 to-forma-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-forma-black/90 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, #C8A96E, #C8A96E44 40%, transparent 70%)' }} />
        <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-forma-black/90 to-transparent" aria-hidden="true" />

        <div className="relative z-10 site-container w-full pb-20 pt-44">
          <p className="font-mono text-[11px] tracking-label uppercase text-forma-white/85 mb-6">Product Range</p>
          <h1 className="font-display text-forma-white font-light text-balance mb-7 text-display-lg">
            Light without
            <br />
            <em>limitation.</em>
          </h1>
          <p className="font-sans text-forma-white/90 text-base sm:text-lg max-w-[420px] leading-relaxed mb-10">
            Architectural windows specified to your exact opening — from standard
            residential bays to floor-to-ceiling glass systems spanning 4,200mm.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Quote <Arr />
          </Link>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="bg-forma-white" aria-label="Introduction">
        <div className="w-full h-px bg-forma-divider" />
        <div className="site-container py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
            <div>
              <p className="section-label mb-6">Windows</p>
              <h2 className="font-display text-forma-text font-light text-display-md text-balance">
                A window is a compositional
                <br />
                <em>decision.</em>
              </h2>
            </div>
            <div className="space-y-5 lg:pt-4">
              <p className="font-sans text-forma-muted text-base sm:text-[17px] leading-relaxed">
                Before the furniture, before the finishes — the scale, position, and quality of
                glazing determines how a space lives. It shapes where morning light falls, how
                the landscape is framed at dusk, and whether a room feels anchored or open.
              </p>
              <p className="font-sans text-forma-muted text-base leading-relaxed">
                SIGNATURESPAN designs and manufactures large-format windows for architects, builders,
                and homeowners who treat glass as a building material — not an afterthought.
                Every system is custom-sized, thermally broken, and delivered with full
                specification documentation.
              </p>
              <div className="flex items-center gap-10 pt-4">
                {[['4,200mm', 'Max Width'], ['3,600mm', 'Max Height'], ['12+', 'Years Supplying']].map(([n, l]) => (
                  <div key={l}>
                    <p className="font-display text-forma-text text-3xl font-light">{n}</p>
                    <p className="font-mono text-[10px] tracking-label uppercase text-forma-muted mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-forma-divider" />
      </section>

      {/* ── Product Highlights — alternating layout ── */}
      <section className="bg-forma-white" aria-label="Window systems">
        {PRODUCTS.map((p, i) => (
          <div key={p.id} id={p.id}>
            <div className={`site-container py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>

              {/* Image */}
              <div className="relative overflow-hidden" style={{ minHeight: 'clamp(300px, 36vw, 520px)' }}>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${p.image}')`, backgroundColor: '#1a1a1a' }}
                  role="img"
                  aria-label={p.name}
                />
                {p.tag && (
                  <span className="absolute top-5 left-5 font-mono text-[9px] tracking-label uppercase bg-forma-gold text-forma-black px-3 py-1.5">
                    {p.tag}
                  </span>
                )}
                <span className="absolute bottom-5 right-5 font-mono text-[10px] tracking-label uppercase text-forma-white/30">{p.num}</span>
              </div>

              {/* Content */}
              <div>
                <p className="section-label mb-4">Windows · {p.num}</p>
                <h2 className="font-display text-forma-text font-light text-display-md mb-5">
                  {p.name}
                </h2>
                <p className="font-sans text-forma-text/80 text-base font-medium leading-relaxed mb-4">
                  {p.description}
                </p>
                <p className="font-sans text-forma-muted text-sm leading-relaxed mb-8">
                  {p.body}
                </p>

                {/* Mini spec table */}
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

            {/* Section divider between products */}
            {i < PRODUCTS.length - 1 && <div className="w-full h-px bg-forma-divider" />}
          </div>
        ))}
      </section>

      {/* ── Architectural Benefits — dark bg ── */}
      <section className="bg-forma-black" aria-label="Architectural benefits">
        <div className="w-full h-px bg-forma-white/8" />
        <div className="site-container py-28 lg:py-36">
          <div className="mb-20">
            <p className="section-label-light mb-5">Why Glazing Quality Matters</p>
            <h2 className="font-display text-forma-white font-light text-display-md max-w-xl">
              Three reasons architects
              <br />
              <em>specify SIGNATURESPAN windows.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-forma-white/8">
            {BENEFITS.map((b) => (
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

      {/* ── Materials & Glass overview ── */}
      <section className="bg-forma-surface border-t border-forma-divider" aria-label="Materials overview">
        <div className="site-container py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-5">Materials & Finishes</p>
              <h2 className="font-display text-forma-text font-light text-3xl lg:text-4xl mb-6">
                Every specification,
                <br />
                <em>considered.</em>
              </h2>
              <p className="font-sans text-forma-muted text-sm leading-relaxed max-w-sm">
                SIGNATURESPAN frames are manufactured from thermally broken aluminium alloy. Glass
                is independently sourced from certified European and North American suppliers,
                specified by the project — not by stock availability.
              </p>
            </div>
            <div>
              {[
                { k: 'Frame Material',    v: 'Thermally broken 6063-T5 aluminium alloy' },
                { k: 'Glass Standards',   v: 'NAFS Tested · CSA A440 · IGMA Certified' },
                { k: 'Glass Options',     v: 'Clear · Low-iron · Tinted · Frosted · Ceramic frit' },
                { k: 'Glazing Types',     v: 'DGU · TGU · Laminated · Acoustic · Fire-rated' },
                { k: 'Frame Finishes',    v: 'Any RAL powder coat · Anodised · Dual-colour' },
                { k: 'Hardware',          v: 'Architectural grade · Stainless or black powder coat' },
              ].map(({ k, v }) => (
                <div key={k} className="spec-row">
                  <span className="spec-key">{k}</span>
                  <span className="spec-val text-right max-w-[55%]">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline={"Specify your\nwindow system."}
        subheadline="Tell us about your project and we'll select the right system, size, and glass specification for every opening."
        primaryLabel="Request a Quote"
        secondaryLabel="View Projects"
        secondaryHref="/projects"
      />
    </>
  )
}
