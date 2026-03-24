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
  'pivot': {
    name: 'Pivot Entry Doors',
    tag: 'Statement Product',
    description: 'A pivot door rotates on a floor-to-ceiling axis rather than side-hung hinges — allowing panels up to 1,400mm wide and 3,500mm tall to open with effortless precision.',
    body: "The pivot door is one of the few product categories where the mechanism itself is the design statement. The door doesn't swing on a hinge at its edge — it rotates on a central or off-centre axis, pivoting from floor plate to overhead carrier with perfect balance regardless of panel size or weight. At scale, pivot doors are architecturally transformative: a 1,200mm wide, 3,200mm tall glass and aluminium panel opening in a single smooth rotation redefines what an entrance feels like. SIGNATURESPAN pivot doors are available with glass infill panels, solid aluminium, or a combination of both — in any RAL colour with matching or contrasting hardware.",
    specs: [
      { k: 'Max Width',       v: 'Up to 1,400 mm' },
      { k: 'Max Height',      v: 'Up to 3,500 mm' },
      { k: 'Pivot Type',      v: 'Central or offset axis' },
      { k: 'Panel Options',   v: 'Full glass · Solid · Composite' },
      { k: 'Locking',         v: 'Integrated multipoint — flush lever or pull bar' },
      { k: 'Finish',          v: 'Any RAL powder coat · Anodised · Natural Aluminium' },
    ],
    image: '/images/caledon-house-exterior-1.jpg',
    imageAlt: 'Large pivot entry door on a contemporary Ontario residence — matte black aluminium',
    related: [
      { href: '/entry-doors/steel-glass', name: 'Steel & Glass Entry' },
      { href: '/entry-doors/aluminum', name: 'Aluminum Entry Doors' },
      { href: '/windows/fixed-panels', name: 'Fixed Glass Panels' },
    ],
    keywords: ['pivot door', 'large pivot door Ontario', 'pivot entry door GTA', 'architectural pivot door Toronto', 'oversized entry door residential'],
  },
  'steel-glass': {
    name: 'Steel & Glass Entry',
    tag: null,
    description: 'Cold-rolled steel profiles with architectural glass infills — the industrial-modern aesthetic executed with precision engineering and long-term durability.',
    body: 'Steel and glass entry doors appeal to a particular architectural sensibility: the honest expression of industrial materials, refined to a residential or commercial standard. Cold-rolled steel profiles are inherently slimmer than aluminium equivalents at the same structural performance, making them ideal where sight lines matter as much as the glass itself. SIGNATURESPAN steel & glass entry systems are powder coated in any RAL colour, with the option for contrasting interior and exterior finishes. Side panels, transoms, and full-height sidelights integrate with the same profile system for a unified entrance composition.',
    specs: [
      { k: 'Frame Material',  v: 'Cold-rolled steel' },
      { k: 'Profile Depth',   v: 'From 40 mm — slimmer than equivalent aluminium' },
      { k: 'Glass Options',   v: 'Clear · Frosted · Tinted · Patterned' },
      { k: 'Sidelights',      v: 'Fixed panels · Matching profile system' },
      { k: 'Hardware',        v: 'Surface-mounted or flush — custom options' },
      { k: 'Finish',          v: 'Any RAL · Dual-colour interior/exterior available' },
    ],
    image: '/images/caledon-house-exterior-2.jpg',
    imageAlt: 'Steel and glass entry door system on a modern residential facade',
    related: [
      { href: '/entry-doors/pivot', name: 'Pivot Entry Doors' },
      { href: '/entry-doors/aluminum', name: 'Aluminum Entry Doors' },
      { href: '/windows/fixed-panels', name: 'Fixed Glass Panels' },
    ],
    keywords: ['steel glass entry door', 'steel glass door Ontario', 'industrial entry door GTA', 'modern steel door Toronto', 'steel glass front door residential'],
  },
  'aluminum': {
    name: 'Aluminum Entry Doors',
    tag: null,
    description: 'Thermally broken aluminium entry doors for high-traffic residential entrances and commercial applications — precision hardware, low maintenance, long performance life.',
    body: 'Aluminium entry doors are the workhorse of the modern entry door category: dimensionally stable, corrosion-resistant, available in any colour, and capable of accommodating large glass areas without compromising structural performance. SIGNATURESPAN aluminium entry doors are manufactured from thermally broken profiles — the same profile system used in our window range — ensuring consistent thermal performance between door and adjacent glazing. Commercial-grade multipoint locking is standard, with options for access control, panic hardware, and motorised operators for commercial entrances.',
    specs: [
      { k: 'Frame Material',  v: 'Thermally broken 6063-T5 aluminium alloy' },
      { k: 'Max Door Width',  v: 'Up to 1,200 mm single leaf · 2,400 mm double' },
      { k: 'Max Height',      v: 'Up to 3,000 mm' },
      { k: 'Locking',         v: 'Multipoint — up to 5 lock points as standard' },
      { k: 'Hardware',        v: 'Architectural grade · Stainless or powder coat' },
      { k: 'Applications',    v: 'Residential · Commercial · Access-controlled' },
    ],
    image: '/images/caledon-house-exterior-1.jpg',
    imageAlt: 'Thermally broken aluminium entry door — residential contemporary architecture',
    related: [
      { href: '/entry-doors/pivot', name: 'Pivot Entry Doors' },
      { href: '/entry-doors/steel-glass', name: 'Steel & Glass Entry' },
      { href: '/windows/floor-to-ceiling', name: 'Floor-to-Ceiling Windows' },
    ],
    keywords: ['aluminum entry door', 'aluminium front door Ontario', 'modern aluminum door GTA', 'thermally broken entry door Toronto', 'commercial entry door residential'],
  },
}

export async function generateStaticParams() {
  return Object.keys(SYSTEMS).map(system => ({ system }))
}

export async function generateMetadata({ params }: { params: { system: string } }): Promise<Metadata> {
  const data = SYSTEMS[params.system]
  if (!data) return {}
  return {
    title: `${data.name} — Architectural Entry Doors`,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: `${data.name} — SIGNATURESPAN INC.`,
      description: data.description,
      images: [{ url: data.image, alt: data.imageAlt }],
    },
    alternates: { canonical: `https://signaturespan.com/entry-doors/${params.system}` },
  }
}

export default function EntryDoorSystemPage({ params }: { params: { system: string } }) {
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
              <li><Link href="/entry-doors" className="hover:text-forma-gold transition-colors duration-200">Entry Doors</Link></li>
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
                <em>every entrance.</em>
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
          <p className="section-label mb-8">Also in Entry Doors</p>
          <div className="flex flex-wrap gap-4">
            {data.related.map(({ href, name }) => (
              <Link key={href} href={href} className="btn-outline-gold">
                {name} <Arr />
              </Link>
            ))}
            <Link href="/entry-doors" className="font-mono text-[10px] tracking-label uppercase text-forma-muted hover:text-forma-gold transition-colors duration-200 self-center ml-4">
              All Entry Door Systems →
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        headline={"Specify your\nentry door."}
        subheadline="Tell us about your project and we'll select the right door system, dimensions, and finish for your entrance."
        primaryLabel="Request a Quote"
        secondaryLabel="View Projects"
        secondaryHref="/projects"
      />
    </>
  )
}
