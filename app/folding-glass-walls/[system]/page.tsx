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
  'bi-fold': {
    name: 'Bi-Fold Glass Wall System',
    tag: 'Most Popular',
    description: 'Accordion-style panels that fold and stack to one or both sides of the opening — dissolving an entire wall face when fully open.',
    body: 'The bi-fold glass wall system works by folding panels in alternating directions along a top-hung track, compressing them into a stack at one or both ends of the opening. With configurations from 2 to 8 panels and stack directions tailored to the building layout, a FORMA bi-fold system can open a 10-metre wall face to the outdoors in a matter of seconds. The panels are top-hung — no bottom track to step over — and the threshold seal maintains weathertightness without creating a physical obstacle to the floor plane.',
    specs: [
      { k: 'Panel Count',       v: '2 to 8 panels' },
      { k: 'Max Opening Width', v: 'Up to 10,000 mm' },
      { k: 'Max Panel Height',  v: '3,000 mm' },
      { k: 'Stack Direction',   v: 'Left, Right, or Split both sides' },
      { k: 'Track',             v: 'Top-hung — no bottom guide rail' },
      { k: 'Thermal Break',     v: 'Yes — Class A Aluminium Profile' },
    ],
    image: '/images/mississauga-house-exterior-1.jpg',
    imageAlt: 'Bi-fold glass wall system fully open to outdoor terrace — accordion panels stacked to the side',
    related: [
      { href: '/folding-glass-walls/corner', name: 'Corner Opening System' },
      { href: '/sliding-doors/lift-and-slide', name: 'Lift & Slide System' },
      { href: '/windows/fixed-panels', name: 'Fixed Glass Panels' },
    ],
    keywords: ['bi fold glass wall', 'bi fold glass wall Ontario', 'folding glass wall GTA', 'accordion glass wall Toronto', 'bi fold door system residential'],
  },
  'corner': {
    name: 'Corner Opening System',
    tag: 'Architect Favourite',
    description: 'Two independent runs of folding panels meeting at a corner — when fully open, the corner of the building disappears entirely, creating a panoramic opening in two directions simultaneously.',
    body: 'A corner opening system is the most architecturally dramatic glass wall product available. It requires two runs of folding panels — typically one per wall face — that stack away from the corner in opposite directions. When both runs are open, what was a structural corner becomes a void: the outdoors and indoors are continuous on two axes. FORMA corner systems are engineered with concealed or minimal corner posts that disappear visually into the open building. The structural loading at the corner is handled by the frame above — not an intermediate post.',
    specs: [
      { k: 'Configuration',   v: 'Two independent panel runs' },
      { k: 'Corner Post',     v: 'Concealed or slim exposed' },
      { k: 'Corner Angle',    v: '90° internal · 90° external · Custom' },
      { k: 'Max Per Run',     v: 'Up to 6,000 mm per panel run' },
      { k: 'Max Height',      v: '3,000 mm per panel' },
      { k: 'Finish Options',  v: 'Powder Coat · Anodised · RAL · Dual-colour' },
    ],
    image: '/images/caledon-house-interrior-3.jpg',
    imageAlt: 'Corner opening glass wall system — two panel runs meeting at 90° with no intermediate post',
    related: [
      { href: '/folding-glass-walls/bi-fold', name: 'Bi-Fold Glass Wall System' },
      { href: '/windows/corner-glass', name: 'Corner Glass Systems' },
      { href: '/sliding-doors/lift-and-slide', name: 'Lift & Slide System' },
    ],
    keywords: ['corner opening glass wall', 'corner folding glass system Ontario', 'corner glass wall GTA', 'corner bi fold system Toronto', 'architectural corner glass residential'],
  },
}

export async function generateStaticParams() {
  return Object.keys(SYSTEMS).map(system => ({ system }))
}

export async function generateMetadata({ params }: { params: { system: string } }): Promise<Metadata> {
  const data = SYSTEMS[params.system]
  if (!data) return {}
  return {
    title: `${data.name} — Folding Glass Walls`,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: `${data.name} — FORMA Architectural Glass`,
      description: data.description,
      images: [{ url: data.image, alt: data.imageAlt }],
    },
    alternates: { canonical: `https://formaglass.com/folding-glass-walls/${params.system}` },
  }
}

export default function FoldingWallSystemPage({ params }: { params: { system: string } }) {
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
              <li><Link href="/folding-glass-walls" className="hover:text-forma-gold transition-colors duration-200">Folding Glass Walls</Link></li>
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
          <p className="section-label mb-8">Also in Folding Glass Walls</p>
          <div className="flex flex-wrap gap-4">
            {data.related.map(({ href, name }) => (
              <Link key={href} href={href} className="btn-outline-gold">
                {name} <Arr />
              </Link>
            ))}
            <Link href="/folding-glass-walls" className="font-mono text-[10px] tracking-label uppercase text-forma-muted hover:text-forma-gold transition-colors duration-200 self-center ml-4">
              All Folding Systems →
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        headline={"Specify your\nfolding wall."}
        subheadline="Tell us about your project and we'll configure the right panel count, stack direction, and glass specification for your opening."
        primaryLabel="Request a Quote"
        secondaryLabel="View Projects"
        secondaryHref="/projects"
      />
    </>
  )
}
