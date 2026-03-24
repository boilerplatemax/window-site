import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Sliding Door Systems — Lift & Slide, Multi-Panel, Pocket',
  description:
    'Large-format sliding glass door systems from SIGNATURESPAN — lift & slide, multi-panel, and concealed pocket doors. Custom widths up to 8m. Thermally broken aluminium, residential and commercial.',
  keywords: [
    'sliding glass doors', 'lift and slide doors', 'large sliding glass doors',
    'lift slide door system', 'multi panel sliding doors', 'glass pocket doors',
    'modern sliding glass door system', 'architectural sliding doors',
  ],
  openGraph: {
    title: 'Sliding Glass Door Systems — Lift & Slide, Multi-Panel — SIGNATURESPAN',
    description: 'Large-format sliding glass door systems — lift & slide, multi-panel, and concealed pocket. Custom widths up to 8m.',
    images: [{ url: '/images/hero.jpg', width: 1920, height: 1080, alt: 'Lift and slide glass door system in modern residence' }],
  },
  alternates: { canonical: 'https://signaturespan.com/sliding-doors' },
}

const Arr = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PRODUCTS = [
  {
    id: 'lift-and-slide',
    num: '01',
    href: '/sliding-doors/lift-and-slide',
    name: 'Lift & Slide System',
    tag: 'Most Specified',
    description:
      'The benchmark for large-format sliding doors. Panels lift off the sill seal as the handle turns, then travel on hardened steel rollers with fingertip ease — regardless of panel weight.',
    body:
      'The lift & slide mechanism solves the fundamental problem of large glass panels: the heavier the panel, the harder it becomes to slide. By lifting the panel 3mm off its seal when the handle rotates, the full weight transfers to the roller carriage — allowing panels weighing up to 400kg to glide as smoothly as a bedroom door. SIGNATURESPAN lift & slide systems are available in 2, 3, and 4-panel configurations with fixed light and stacking options on either or both sides.',
    specs: [
      { k: 'Max Panel Width',  v: '3,000 mm per panel' },
      { k: 'Max Panel Height', v: '3,200 mm' },
      { k: 'Max Panel Weight', v: '400 kg' },
      { k: 'Max Opening',      v: '6,000 mm (2-panel) · 8,000 mm (4-panel)' },
      { k: 'Thermal Break',    v: 'Yes — Class A Aluminium Profile' },
      { k: 'Glazing',          v: 'Double or Triple Glazed · Low-E' },
    ],
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1100&q=85',
  },
  {
    id: 'multi-panel',
    num: '02',
    href: '/sliding-doors/multi-panel',
    name: 'Multi-Panel Sliding',
    tag: null,
    description:
      'Two, three, or four panels sliding in parallel tracks — designed for wide openings where maximum glass area is required and panels stack neatly out of the way.',
    body:
      'Multi-panel sliding systems allow a single wide opening to be divided across several lighter, more manageable panels that slide and stack at one or both ends. This makes them ideal for wide indoor-outdoor transitions in open-plan living areas, restaurant terraces, and commercial hospitality spaces. Panels can stack internally to one side, externally, or into a recessed pocket. A flush-threshold option is available for seamless indoor-outdoor continuity.',

    specs: [
      { k: 'Panel Count',      v: '2, 3, or 4 panels' },
      { k: 'Max Total Width',  v: 'Up to 10,000 mm' },
      { k: 'Max Panel Height', v: '3,000 mm' },
      { k: 'Stacking',         v: 'Left, Right, or Both — internal or external' },
      { k: 'Threshold',        v: 'Low-profile or flush' },
      { k: 'Applications',     v: 'Residential · Commercial · Hospitality' },
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1100&q=85',
  },
  {
    id: 'pocket-doors',
    num: '03',
    href: '/sliding-doors/pocket-doors',
    name: 'Pocket Sliding Doors',
    tag: 'Architect Favourite',
    description:
      'Panels slide entirely into a concealed wall cavity — leaving no visible frame, no stacked glass, nothing but an open threshold when the doors are retracted.',
    body:
      'A pocket sliding system demands precise structural coordination but delivers the cleanest possible indoor-outdoor connection. When the panels are retracted, the wall reads as solid on both sides — the glass has simply disappeared. SIGNATURESPAN pocket systems include custom framing kits that integrate into timber frame, steel frame, or concrete construction. Single and double-pocket (meeting in the middle) configurations are available for symmetrical openings.',
    specs: [
      { k: 'Pocket Type',      v: 'Single or Double (opposing)' },
      { k: 'Max Panel Width',  v: '1,800 mm per panel' },
      { k: 'Max Panel Height', v: '3,000 mm' },
      { k: 'Wall Depth',       v: 'Minimum 120 mm cavity required' },
      { k: 'Frame Kits',       v: 'Timber · Steel · Concrete integration' },
      { k: 'Glazing',          v: 'Double Glazed · Low-E · Acoustic options' },
    ],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1100&q=85',
  },
]

const BENEFITS = [
  {
    num: '01',
    headline: 'The indoor-outdoor connection, resolved.',
    body: 'A sliding door system is the architectural hinge between interior living space and the outdoors. When it works — when the panels glide, the threshold disappears, and the outside becomes part of the room — it changes how a home feels every day.',
  },
  {
    num: '02',
    headline: 'Performance in all seasons.',
    body: 'Large glass panels create large potential for heat loss. SIGNATURESPAN sliding systems use thermally broken aluminium profiles, multi-point locking hardware, and high-specification glass packages to achieve U-values suitable for cold-climate residential construction without compromising the view.',
  },
  {
    num: '03',
    headline: 'Specified, not estimated.',
    body: 'Our team works directly with your project drawings to select the right configuration — panel count, stack direction, threshold type, and glass specification. You receive a full technical package with system drawings, hardware schedules, and energy data before you commit to order.',
  },
]

const COMPARE = [
  { label: 'Best For',           vals: ['Single wide opening', 'Panoramic multi-bay run', 'Maximum visual purity'] },
  { label: 'Max Opening Width',  vals: ['8,000 mm', '10,000 mm', '3,600 mm'] },
  { label: 'Stacking',           vals: ['Side-stack', 'Left, right, or both', 'Concealed in wall'] },
  { label: 'Visible When Open',  vals: ['Stacked beside opening', 'Stacked at edge', 'Nothing — fully hidden'] },
  { label: 'Threshold',          vals: ['Low-profile or flush', 'Low-profile or flush', 'Flush — no track visible'] },
  { label: 'Thermal Performance',vals: ['★★★★★', '★★★★', '★★★★'] },
]

export default function SlidingDoorsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex flex-col justify-end bg-forma-black overflow-hidden"
        style={{ minHeight: '72vh' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=80')" }}
          role="img"
          aria-label="Large lift and slide door system in a modern home"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forma-black/94 via-forma-black/60 to-forma-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-forma-black/90 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, #C8A96E, #C8A96E44 40%, transparent 70%)' }} />
        <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-forma-black/90 to-transparent" aria-hidden="true" />

        <div className="relative z-10 site-container w-full pb-20 pt-44">
          <p className="font-mono text-[11px] tracking-label uppercase text-forma-white/85 mb-6">Sliding Systems</p>
          <h1 className="font-display text-forma-white font-light text-balance mb-7 text-display-lg">
            Open the wall.
            <br />
            <em>Close the distance.</em>
          </h1>
          <p className="font-sans text-forma-white/90 text-base sm:text-lg max-w-[420px] leading-relaxed mb-10">
            Lift & slide, multi-panel, and concealed pocket systems — engineered
            to dissolve the boundary between inside and out.
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
              <p className="section-label mb-6">Sliding Door Systems</p>
              <h2 className="font-display text-forma-text font-light text-display-md text-balance">
                When a door opens,
                <br />
                <em>a wall should disappear.</em>
              </h2>
            </div>
            <div className="space-y-5 lg:pt-4">
              <p className="font-sans text-forma-muted text-base sm:text-[17px] leading-relaxed">
                The sliding glass door is one of the most significant transitions in modern
                residential design — the moment where the interior and exterior become a
                single continuous space. Getting it right requires more than a large frame
                and adequate glass: it demands hardware that works under weight, seals that
                perform in all weather, and a threshold that doesn't interrupt the floor plane.
              </p>
              <p className="font-sans text-forma-muted text-base leading-relaxed">
                SIGNATURESPAN sliding systems are selected and specified for each project individually.
                We don't offer one-size-fits-all configurations — we offer the right system
                for your opening, your climate, and your architecture.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-forma-divider" />
      </section>

      {/* ── Product Highlights ── */}
      <section className="bg-forma-white" aria-label="Sliding door systems">
        {PRODUCTS.map((p, i) => (
          <div key={p.id} id={p.id}>
            <div className={`site-container py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              {/* Image */}
              <div className="relative overflow-hidden" style={{ minHeight: 'clamp(300px, 36vw, 520px)' }}>
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

              {/* Content */}
              <div>
                <p className="section-label mb-4">Sliding Systems · {p.num}</p>
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

      {/* ── Comparison table — dark ── */}
      <section className="bg-forma-black" aria-label="System comparison">
        <div className="w-full h-px bg-forma-white/8" />
        <div className="site-container py-24 lg:py-28">
          <p className="section-label-light mb-10">System Comparison</p>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-forma-white/10">
                  <th className="text-left pb-5 w-[28%]"></th>
                  {PRODUCTS.map(p => (
                    <th key={p.id} className="text-left pb-5 font-mono text-[10px] tracking-label uppercase text-forma-gold pr-4">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(row => (
                  <tr key={row.label} className="border-b border-forma-white/6">
                    <td className="py-4 font-mono text-[10px] tracking-label uppercase text-forma-white/35 pr-4">{row.label}</td>
                    {row.vals.map((v, i) => (
                      <td key={i} className="py-4 font-sans text-sm text-forma-white/65 pr-4">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-forma-black" aria-label="Architectural benefits">
        <div className="w-full h-px bg-forma-white/8" />
        <div className="site-container py-28 lg:py-36">
          <div className="mb-20">
            <p className="section-label-light mb-5">Why System Quality Matters</p>
            <h2 className="font-display text-forma-white font-light text-display-md max-w-xl">
              Three reasons the right sliding
              <br />
              <em>system changes everything.</em>
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

      <CTASection
        headline={"Specify your\nsliding system."}
        subheadline="Share your opening dimensions and project details. We'll recommend the right configuration, glass package, and hardware schedule."
        primaryLabel="Request a Quote"
        secondaryLabel="View Projects"
        secondaryHref="/projects"
      />
    </>
  )
}
