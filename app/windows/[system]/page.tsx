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
  'floor-to-ceiling': {
    name: 'Floor-to-Ceiling Windows',
    tag: 'Most Specified',
    description: 'Full-height glazing that transforms a wall into an uninterrupted view. Manufactured from sill to soffit in single bays or continuous runs — the defining element of contemporary residential architecture.',
    body: 'Architects specify floor-to-ceiling glazing to fundamentally change how a room relates to its site. At SIGNATURESPAN, each unit is produced to your exact height and width — no compromise on proportion, no off-the-shelf sight lines. Available in fixed, tilt-turn, or tilt-slide configurations to suit the ventilation and acoustic requirements of each project.',
    specs: [
      { k: 'Max Width',     v: '4,200 mm per unit' },
      { k: 'Max Height',    v: '3,600 mm per unit' },
      { k: 'Glass',         v: 'Double or Triple Glazed · Low-E' },
      { k: 'Thermal Break', v: 'Class A Aluminium Profile' },
      { k: 'Operation',     v: 'Fixed · Tilt-Turn · Tilt-Slide' },
    ],
    image: '/images/caledon-house-interrior-1.jpg',
    imageAlt: 'Floor-to-ceiling windows in a contemporary Ontario home — interior view to landscape',
    related: [
      { href: '/windows/picture-windows', name: 'Picture Windows' },
      { href: '/windows/corner-glass', name: 'Corner Glass Systems' },
      { href: '/windows/fixed-panels', name: 'Fixed Glass Panels' },
    ],
    keywords: ['floor to ceiling windows', 'floor to ceiling glass wall', 'large format windows GTA', 'architectural windows Ontario', 'custom floor to ceiling windows Toronto'],
  },
  'picture-windows': {
    name: 'Picture Windows',
    tag: null,
    description: 'Fixed, frameless glazing sized to the view — not the catalogue. A picture window creates a composition that never changes.',
    body: "Picture windows are the purest form of architectural glazing: a fixed pane of glass, precisely framed, that captures a view like a painting on a wall. Because they're non-operable, the frame can be reduced to near-zero — maximising visible glass area and eliminating the visual noise of hinges, handles, and seals. SIGNATURESPAN manufactures picture windows to any rectangular dimension, with interior- or exterior-flush frame options.",
    specs: [
      { k: 'Form',          v: 'Fixed · Non-operable' },
      { k: 'Frame Profile', v: 'Slim-line or flush rebated' },
      { k: 'Glass',         v: 'Any spec — low-iron available' },
      { k: 'Finish',        v: 'Any RAL · Anodised · Dual-colour' },
      { k: 'Custom Size',   v: 'Any rectangular dimension' },
    ],
    image: '/images/caledon-house-interrior-2.jpg',
    imageAlt: 'Custom picture window framing landscape view — slim profile aluminium frame',
    related: [
      { href: '/windows/floor-to-ceiling', name: 'Floor-to-Ceiling Windows' },
      { href: '/windows/corner-glass', name: 'Corner Glass Systems' },
      { href: '/windows/fixed-panels', name: 'Fixed Glass Panels' },
    ],
    keywords: ['picture windows', 'fixed windows custom size', 'frameless picture windows GTA', 'modern picture window Toronto', 'slim profile window Ontario'],
  },
  'corner-glass': {
    name: 'Corner Glass Systems',
    tag: 'Architect Favourite',
    description: 'Two glazing panels meeting at a 90° corner with no intermediate post. The structural challenge has been solved. What remains is pure transparency.',
    body: "A true frameless corner requires the structural work to be done in the frame itself — not masked by a post or column. SIGNATURESPAN's corner glass systems eliminate the intermediate mullion entirely, allowing two full-height panes to meet at the corner of a building with only a hairline joint. The result is an uninterrupted panoramic view in two directions simultaneously. Available as a fixed system or integrated with our lift & slide door range for operable corner openings.",
    specs: [
      { k: 'Corner Type', v: '90° internal · 90° external' },
      { k: 'Post',        v: 'None — frameless junction' },
      { k: 'Max Height',  v: '3,200 mm' },
      { k: 'Integration', v: 'Fixed or Lift & Slide operable' },
      { k: 'Finish',      v: 'Powder Coat · Anodised · RAL' },
    ],
    image: '/images/caledon-house-interrior-3.jpg',
    imageAlt: 'Frameless corner glass system — two panels meeting at 90° with no intermediate post',
    related: [
      { href: '/windows/floor-to-ceiling', name: 'Floor-to-Ceiling Windows' },
      { href: '/windows/picture-windows', name: 'Picture Windows' },
      { href: '/sliding-doors', name: 'Lift & Slide Integration' },
    ],
    keywords: ['corner glass windows', 'frameless corner window system', 'corner glass GTA', '90 degree corner glazing', 'corner glass Ontario residential'],
  },
  'fixed-panels': {
    name: 'Fixed Glass Panels',
    tag: null,
    description: 'Architectural glazing for feature walls, interior partitions, commercial facades, and structural glass bays where the glass itself is the architecture.',
    body: "When glazing needs to span large structural openings, or serve as a building's primary facade material, fixed glass panels provide the scale and precision required. SIGNATURESPAN supplies structural glazing systems for both residential and commercial applications — from single large panes silicone-bonded into frames, to multi-panel grid facades. All panels are engineered to specification with full structural calculations available.",
    specs: [
      { k: 'Max Size',       v: '3,200 mm × 4,000 mm' },
      { k: 'System',         v: 'Capped · Semi-frameless · Structural sealant' },
      { k: 'Glass',          v: 'Toughened · Laminated · Fire-rated available' },
      { k: 'Applications',   v: 'Residential · Commercial · Interior' },
      { k: 'Certifications', v: 'NAFS Tested · CSA A440' },
    ],
    image: '/images/rural-house-roof-1.jpg',
    imageAlt: 'Fixed glass panel system on a residential facade — structural glazing',
    related: [
      { href: '/windows/floor-to-ceiling', name: 'Floor-to-Ceiling Windows' },
      { href: '/windows/corner-glass', name: 'Corner Glass Systems' },
      { href: '/folding-glass-walls', name: 'Folding Glass Walls' },
    ],
    keywords: ['fixed glass panels', 'structural glazing system', 'large glass panels GTA', 'commercial glass facade Ontario', 'fixed glass wall residential'],
  },
}

export async function generateStaticParams() {
  return Object.keys(SYSTEMS).map(system => ({ system }))
}

export async function generateMetadata({ params }: { params: { system: string } }): Promise<Metadata> {
  const data = SYSTEMS[params.system]
  if (!data) return {}
  return {
    title: `${data.name} — Architectural Windows`,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: `${data.name} — SIGNATURESPAN INC.`,
      description: data.description,
      images: [{ url: data.image, alt: data.imageAlt }],
    },
    alternates: { canonical: `https://signaturespan.com/windows/${params.system}` },
  }
}

export default function WindowSystemPage({ params }: { params: { system: string } }) {
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
              <li><Link href="/windows" className="hover:text-forma-gold transition-colors duration-200">Windows</Link></li>
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
          <p className="section-label mb-8">Also in Windows</p>
          <div className="flex flex-wrap gap-4">
            {data.related.map(({ href, name }) => (
              <Link key={href} href={href} className="btn-outline-gold">
                {name} <Arr />
              </Link>
            ))}
            <Link href="/windows" className="font-mono text-[10px] tracking-label uppercase text-forma-muted hover:text-forma-gold transition-colors duration-200 self-center ml-4">
              All Window Systems →
            </Link>
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
