import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CTASection from '@/components/CTASection'

const Arr = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

type SystemData = {
  name: string
  tag: string | null
  description: string
  body: string
  specs: { k: string; v: string }[]
  image: string
  imageAlt: string
  related: { href: string; name: string }[]
  keywords: string[]
}

const SYSTEMS: Record<string, SystemData> = {
  'lift-and-slide': {
    name: 'Lift & Slide System',
    tag: 'Most Specified',
    description: 'The benchmark for large-format sliding doors. Panels lift off the sill seal as the handle turns, then travel on hardened steel rollers with fingertip ease — regardless of panel weight.',
    body: 'The lift & slide mechanism solves the fundamental problem of large glass panels: the heavier the panel, the harder it becomes to slide. By lifting the panel 3mm off its seal when the handle rotates, the full weight transfers to the roller carriage — allowing panels weighing up to 400kg to glide as smoothly as a bedroom door. FORMA lift & slide systems are available in 2, 3, and 4-panel configurations with fixed light and stacking options on either or both sides.',
    specs: [
      { k: 'Max Panel Width',  v: '3,000 mm per panel' },
      { k: 'Max Panel Height', v: '3,200 mm' },
      { k: 'Max Panel Weight', v: '400 kg' },
      { k: 'Max Opening',      v: '6,000 mm (2-panel) · 8,000 mm (4-panel)' },
      { k: 'Thermal Break',    v: 'Yes — Class A Aluminium Profile' },
      { k: 'Glazing',          v: 'Double or Triple Glazed · Low-E' },
    ],
    image: '/images/caledon-house-backyard-1.jpg',
    imageAlt: 'Lift and slide door system open to outdoor terrace — large format aluminium sliding doors',
    related: [
      { href: '/sliding-doors/multi-panel', name: 'Multi-Panel Sliding' },
      { href: '/sliding-doors/pocket-doors', name: 'Pocket Sliding Doors' },
      { href: '/folding-glass-walls/bi-fold', name: 'Bi-Fold Glass Walls' },
    ],
    keywords: ['lift and slide doors', 'lift slide door system Ontario', 'large sliding glass doors GTA', 'lift slide door Toronto', 'architectural sliding doors residential'],
  },
  'multi-panel': {
    name: 'Multi-Panel Sliding',
    tag: null,
    description: 'Two, three, or four panels sliding in parallel tracks — designed for wide openings where maximum glass area is required and panels stack neatly out of the way.',
    body: 'Multi-panel sliding systems allow a single wide opening to be divided across several lighter, more manageable panels that slide and stack at one or both ends. This makes them ideal for wide indoor-outdoor transitions in open-plan living areas, restaurant terraces, and commercial hospitality spaces. Panels can stack internally to one side, externally, or into a recessed pocket. A flush-threshold option is available for seamless indoor-outdoor continuity.',
    specs: [
      { k: 'Panel Count',      v: '2, 3, or 4 panels' },
      { k: 'Max Total Width',  v: 'Up to 10,000 mm' },
      { k: 'Max Panel Height', v: '3,000 mm' },
      { k: 'Stacking',         v: 'Left, Right, or Both — internal or external' },
      { k: 'Threshold',        v: 'Low-profile or flush' },
      { k: 'Applications',     v: 'Residential · Commercial · Hospitality' },
    ],
    image: '/images/caledon-house-backyard-1.jpg',
    imageAlt: 'Multi-panel sliding door system — wide opening with panels stacked to the side',
    related: [
      { href: '/sliding-doors/lift-and-slide', name: 'Lift & Slide System' },
      { href: '/sliding-doors/pocket-doors', name: 'Pocket Sliding Doors' },
      { href: '/folding-glass-walls/bi-fold', name: 'Bi-Fold Glass Walls' },
    ],
    keywords: ['multi panel sliding doors', 'wide sliding glass door Ontario', 'multi panel glass wall GTA', 'panoramic sliding doors Toronto', 'large opening glass doors residential'],
  },
  'pocket-doors': {
    name: 'Pocket Sliding Doors',
    tag: 'Architect Favourite',
    description: 'Panels slide entirely into a concealed wall cavity — leaving no visible frame, no stacked glass, nothing but an open threshold when the doors are retracted.',
    body: 'A pocket sliding system demands precise structural coordination but delivers the cleanest possible indoor-outdoor connection. When the panels are retracted, the wall reads as solid on both sides — the glass has simply disappeared. FORMA pocket systems include custom framing kits that integrate into timber frame, steel frame, or concrete construction. Single and double-pocket (meeting in the middle) configurations are available for symmetrical openings.',
    specs: [
      { k: 'Pocket Type',      v: 'Single or Double (opposing)' },
      { k: 'Max Panel Width',  v: '1,800 mm per panel' },
      { k: 'Max Panel Height', v: '3,000 mm' },
      { k: 'Wall Depth',       v: 'Minimum 120 mm cavity required' },
      { k: 'Frame Kits',       v: 'Timber · Steel · Concrete integration' },
      { k: 'Glazing',          v: 'Double Glazed · Low-E · Acoustic options' },
    ],
    image: '/images/caledon-house-interrior-1.jpg',
    imageAlt: 'Pocket sliding door system — concealed within wall cavity for invisible transition',
    related: [
      { href: '/sliding-doors/lift-and-slide', name: 'Lift & Slide System' },
      { href: '/sliding-doors/multi-panel', name: 'Multi-Panel Sliding' },
      { href: '/windows/fixed-panels', name: 'Fixed Glass Panels' },
    ],
    keywords: ['pocket sliding doors', 'concealed sliding glass door Ontario', 'pocket door system GTA', 'invisible sliding doors Toronto', 'glass pocket door residential'],
  },
}

export async function generateStaticParams() {
  return Object.keys(SYSTEMS).map(system => ({ system }))
}

export async function generateMetadata({ params }: { params: { system: string } }): Promise<Metadata> {
  const data = SYSTEMS[params.system]
  if (!data) return {}
  return {
    title: `${data.name} — Sliding Door Systems`,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: `${data.name} — FORMA Architectural Glass`,
      description: data.description,
      images: [{ url: data.image, alt: data.imageAlt }],
    },
    alternates: { canonical: `https://formaglass.com/sliding-doors/${params.system}` },
  }
}

export default function SlidingDoorSystemPage({ params }: { params: { system: string } }) {
  const data = SYSTEMS[params.system]
  if (!data) notFound()

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex flex-col justify-end bg-forma-black overflow-hidden"
        style={{ minHeight: '70vh' }}
        aria-label={`${data.name} hero`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${data.image}')`, backgroundColor: '#111' }}
          role="img"
          aria-label={data.imageAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forma-black/94 via-forma-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forma-black/90 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-forma-black/90 to-transparent" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, #C8A96E, #C8A96E44 40%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 site-container w-full pb-20 pt-44">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-[10px] tracking-label uppercase text-forma-white/65">
              <li><Link href="/sliding-doors" className="hover:text-forma-gold transition-colors duration-200">Sliding Doors</Link></li>
              <li aria-hidden="true" className="text-forma-white/35">→</li>
              <li className="text-forma-white/85">{data.name}</li>
            </ol>
          </nav>
          {data.tag && (
            <p className="font-mono text-[11px] tracking-label uppercase text-forma-gold mb-4">{data.tag}</p>
          )}
          <h1 className="font-display text-forma-white font-light text-balance text-display-lg mb-5">
            {data.name.split(' ').slice(0, -1).join(' ')}
            <br />
            <em>{data.name.split(' ').slice(-1)[0]}.</em>
          </h1>
          <p className="font-sans text-forma-white/90 text-base sm:text-lg max-w-[440px] leading-relaxed mb-10">
            {data.description}
          </p>
          <Link href="/contact" className="btn-primary">Request a Quote <Arr /></Link>
        </div>
      </section>

      {/* ── Detail ── */}
      <section className="bg-forma-white section-pad" aria-label="System details">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
            <div>
              <p className="section-label mb-5">System Overview</p>
              <h2 className="font-display text-forma-text font-light text-display-md text-balance mb-8">
                Engineered for
                <br />
                <em>every opening.</em>
              </h2>
              <p className="font-sans text-forma-muted text-base leading-relaxed mb-6">{data.body}</p>
              <Link href="/contact" className="btn-outline-gold inline-flex">
                Discuss Your Project <Arr />
              </Link>
            </div>
            <div className="lg:pt-4">
              <p className="section-label mb-5">Specification</p>
              <div className="mb-10">
                {data.specs.map(({ k, v }) => (
                  <div key={k} className="spec-row">
                    <span className="spec-key">{k}</span>
                    <span className="spec-val text-right max-w-[55%]">{v}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">Request a Quote <Arr /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related systems ── */}
      <section className="bg-forma-surface border-y border-forma-divider" aria-label="Related systems">
        <div className="site-container py-16">
          <p className="section-label mb-8">Also in Sliding Doors</p>
          <div className="flex flex-wrap gap-4">
            {data.related.map(({ href, name }) => (
              <Link key={href} href={href} className="btn-outline-gold">
                {name} <Arr />
              </Link>
            ))}
            <Link href="/sliding-doors" className="font-mono text-[10px] tracking-label uppercase text-forma-muted hover:text-forma-gold transition-colors duration-200 self-center ml-4">
              All Sliding Systems →
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        headline={"Specify your\nsliding system."}
        subheadline="Tell us about your project and we'll select the right system, configuration, and glass specification for every opening."
        primaryLabel="Request a Quote"
        secondaryLabel="View Projects"
        secondaryHref="/projects"
      />
    </>
  )
}
