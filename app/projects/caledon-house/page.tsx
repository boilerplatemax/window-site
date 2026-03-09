import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Caledon House — Lift & Slide Windows, Corner Glass',
  description:
    'Full glazing package for a private estate in Caledon, Ontario — lift & slide door systems, floor-to-ceiling windows, and corner glass supplied and specified by FORMA Architectural Glass.',
  keywords: [
    'Caledon house architectural glass', 'lift and slide doors Ontario',
    'floor to ceiling windows residential', 'corner glass system',
    'architectural windows Caledon', 'large format windows Ontario',
  ],
  openGraph: {
    title: 'The Caledon House — FORMA Architectural Glass',
    description: 'Full glazing package for a private estate in Caledon, Ontario — lift & slide systems, floor-to-ceiling windows, and corner glass.',
    images: [{ url: '/images/caledon-house-hero.jpg', width: 1800, height: 1000, alt: 'The Caledon House exterior — floor-to-ceiling windows and lift & slide doors' }],
  },
  alternates: { canonical: 'https://formaglass.com/projects/caledon-house' },
}

const Arr = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SPECS = [
  { k: 'Location',          v: 'Caledon, Ontario' },
  { k: 'Project Type',      v: 'Private Residence' },
  { k: 'Completion',        v: '2024' },
  { k: 'Systems Supplied',  v: 'Lift & Slide · Floor-to-Ceiling Windows · Corner Glass' },
  { k: 'Frame Finish',      v: 'Matte Black Powder Coat' },
  { k: 'Glass Spec',        v: 'Triple Glazed · Low-E · Argon Fill' },
  { k: 'Max Panel Width',   v: '3,200 mm (lift & slide)' },
  { k: 'Max Window Height', v: '3,600 mm' },
]

const GALLERY = [
  { src: '/images/caledon-house-exterior-2.jpg', alt: 'The Caledon House — rear elevation showing lift & slide glass wall systems' },
  { src: '/images/caledon-house-interrior-1.jpg', alt: 'The Caledon House — interior view through floor-to-ceiling windows to the Niagara Escarpment' },
  { src: '/images/caledon-house-interrior-2.jpg', alt: 'The Caledon House — interior detail of corner glass system at dining room' },
]

export default function CaledonHousePage() {
  return (
    <article>
      {/* ── Hero ── */}
      <section
        className="relative flex flex-col justify-end bg-forma-black overflow-hidden"
        style={{ minHeight: '80vh' }}
        aria-label="The Caledon House hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/caledon-house-exterior-1.jpg')" }}
          role="img"
          aria-label="The Caledon House — rear elevation with FORMA lift & slide glass wall systems"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forma-black/90 via-forma-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forma-black via-forma-black/20 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-forma-black/90 to-transparent" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, #C8A96E, #C8A96E44 40%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 site-container w-full pb-20 pt-44">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-[10px] tracking-label uppercase text-forma-white/65">
              <li><Link href="/projects" className="hover:text-forma-gold transition-colors duration-200">Projects</Link></li>
              <li aria-hidden="true" className="text-forma-white/35">→</li>
              <li className="text-forma-white/85">The Caledon House</li>
            </ol>
          </nav>
          <p className="font-mono text-[11px] tracking-label uppercase text-forma-gold mb-4">Caledon, Ontario · Private Residence</p>
          <h1 className="font-display text-forma-white font-light text-balance text-display-lg mb-5">
            The Caledon
            <br />
            <em>House.</em>
          </h1>
          <p className="font-sans text-forma-white/85 text-base sm:text-lg max-w-[440px] leading-relaxed">
            Lift & slide systems, floor-to-ceiling windows, and corner glass — a full
            glazing package for a private estate overlooking the Niagara Escarpment.
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="bg-forma-white" aria-label="Project overview">
        <div className="site-container py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
            {/* Description */}
            <div>
              <p className="section-label mb-6">The Project</p>
              <h2 className="font-display text-forma-text font-light text-display-md text-balance mb-8">
                Glass that frames
                <br />
                <em>the escarpment.</em>
              </h2>
              <div className="space-y-5 font-sans text-forma-muted text-base leading-relaxed">
                <p>
                  The Caledon House was designed around its relationship with the Niagara
                  Escarpment — a UNESCO World Biosphere Reserve visible from every major room.
                  The architect's brief was clear: the glazing should disappear, leaving only
                  the landscape.
                </p>
                <p>
                  FORMA supplied and specified a full glazing package across the main living
                  wing. Three lift & slide door systems open the kitchen, dining, and living
                  areas to a continuous rear terrace, with panels travelling on hardened steel
                  rollers to the full 3,200mm width of each bay.
                </p>
                <p>
                  The corner glass system at the dining room eliminates the intermediate post
                  entirely, allowing two full-height panels to meet without a visual break —
                  a frameless junction that disappears in the peripheral view. Floor-to-ceiling
                  window units in the bedroom wing run from sill to soffit in triple-glazed
                  aluminium, delivering a U-value of 0.8 W/m²K throughout.
                </p>
              </div>
            </div>

            {/* Spec table */}
            <div className="lg:pt-16">
              <p className="section-label mb-6">Project Specification</p>
              <div>
                {SPECS.map(({ k, v }) => (
                  <div key={k} className="spec-row">
                    <span className="spec-key">{k}</span>
                    <span className="spec-val text-right max-w-[55%]">{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/contact" className="btn-primary">
                  Start Your Project <Arr />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="bg-forma-black" aria-label="Project gallery">
        <div className="w-full h-px bg-forma-white/8" />
        <div className="site-container py-16 lg:py-20">
          <p className="section-label-light mb-10">Gallery</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-forma-black/40"
                style={{ height: 'clamp(220px, 22vw, 360px)' }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${img.src}')` }}
                  role="img"
                  aria-label={img.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products used ── */}
      <section className="bg-forma-surface border-y border-forma-divider" aria-label="Products used">
        <div className="site-container py-20 lg:py-24">
          <p className="section-label mb-8">Systems Supplied</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {[
              { href: '/sliding-doors', label: 'Lift & Slide System', body: 'Three bays — 2,400, 3,200 and 2,800 mm wide. Matte black thermally broken aluminium with triple-glazed units.' },
              { href: '/windows', label: 'Floor-to-Ceiling Windows', body: 'Bedroom wing — eight fixed units from sill to soffit. Triple glazed, low-E, argon fill. U-value 0.8 W/m²K.' },
              { href: '/windows', label: 'Corner Glass System', body: 'Dining room corner — frameless 90° junction, no intermediate post. Two panels, 3,200 mm each side.' },
            ].map(({ href, label, body }) => (
              <div key={label}>
                <h3 className="font-sans text-forma-text text-base font-medium mb-3">{label}</h3>
                <p className="font-sans text-forma-muted text-sm leading-relaxed mb-4">{body}</p>
                <Link href={href} className="inline-flex items-center gap-2 font-mono text-[10px] tracking-label uppercase text-forma-gold hover:text-forma-gold-dark transition-colors duration-200">
                  View System <Arr />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Next project ── */}
      <section className="bg-forma-black" aria-label="Next project">
        <div className="w-full h-px bg-forma-white/8" />
        <div className="site-container py-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="section-label-light mb-2">Next Project</p>
            <p className="font-display text-forma-white font-light italic text-2xl">The Mississauga Residence</p>
          </div>
          <Link href="/projects/mississauga-house" className="btn-outline-gold">
            View Project <Arr />
          </Link>
        </div>
      </section>
    </article>
  )
}
