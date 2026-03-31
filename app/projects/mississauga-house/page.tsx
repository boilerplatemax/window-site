import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Mississauga Residence — Bi-Fold Glass Walls, Pivot Entry Door',
  description:
    'Bi-fold glass walls, picture windows, and a 3-metre pivot entry door for a contemporary ravine-lot residence in Mississauga, Ontario — supplied and specified by SIGNATURESPAN INC.',
  keywords: [
    'Mississauga architectural glass', 'bi fold glass wall Ontario', 'pivot entry door residential',
    'modern windows Mississauga', 'large format windows Greater Toronto Area',
    'glass wall ravine home',
  ],
  openGraph: {
    title: 'The Mississauga Residence — SIGNATURESPAN INC.',
    description: 'Bi-fold glass walls, picture windows, and a 3-metre pivot entry door for a ravine-lot residence in Mississauga, Ontario.',
    images: [{ url: '/images/mississauga-house-hero.jpg', width: 1800, height: 1000, alt: 'The Mississauga Residence — bi-fold glass walls open to ravine deck' }],
  },
  alternates: { canonical: 'https://signaturespan.com/projects/mississauga-house' },
}

const Arr = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SPECS = [
  { k: 'Location',         v: 'Mississauga, Ontario' },
  { k: 'Project Type',     v: 'Private Residence' },
  { k: 'Completion',       v: '2024' },
  { k: 'Systems Supplied', v: 'Bi-Fold Glass Walls · Picture Windows · Pivot Entry Door' },
  { k: 'Frame Finish',     v: 'Champagne Anodised Aluminium' },
  { k: 'Glass Spec',       v: 'Double Glazed · Low-E · Warm-edge spacer' },
  { k: 'Bi-Fold Opening',  v: '7,600 mm wide · 6 panels · Top-hung' },
  { k: 'Pivot Door',       v: '1,100 mm × 3,050 mm · Offset axis' },
]

const GALLERY = [
  { src: '/images/mississauga-house-interior-1.jpg', alt: 'The Mississauga Residence — bi-fold glass wall interior looking out to ravine deck' },
  { src: '/images/caledon-house-backyard-1.jpg', alt: 'Residential glass wall system — backyard view with lift & slide doors open' },
]

export default function MississaugaHousePage() {
  return (
    <article>
      {/* ── Hero ── */}
      <section
        className="relative flex flex-col justify-end bg-forma-black overflow-hidden"
        style={{ minHeight: '80vh' }}
        aria-label="The Mississauga Residence hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/mississauga-house-exterior-1.jpg')" }}
          role="img"
          aria-label="The Mississauga Residence — bi-fold glass wall system open to outdoor deck"
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
              <li className="text-forma-white/85">The Mississauga Residence</li>
            </ol>
          </nav>
          <p className="font-mono text-[11px] tracking-label uppercase text-forma-gold mb-4">Mississauga, Ontario · Private Residence</p>
          <h1 className="font-display text-forma-white font-light text-balance text-display-lg mb-5">
            The Mississauga
            <br />
            <em>Residence.</em>
          </h1>
          <p className="font-sans text-forma-white/85 text-base sm:text-lg max-w-[440px] leading-relaxed">
            Bi-fold glass walls, picture windows, and a statement pivot entry door — bringing
            the ravine into a contemporary home on the edge of the GTA.
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="bg-forma-white" aria-label="Project overview">
        <div className="site-container py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
            <div>
              <p className="section-label mb-6">The Project</p>
              <h2 className="font-display text-forma-text font-light text-display-md text-balance mb-8">
                The ravine brought
                <br />
                <em>inside.</em>
              </h2>
              <div className="space-y-5 font-sans text-forma-muted text-base leading-relaxed">
                <p>
                  Situated on a ravine lot in south Mississauga, this contemporary residence
                  was designed to dissolve the boundary between the interior living spaces and
                  the mature woodland below. The clients wanted to feel connected to the
                  ravine in every season — from summer entertaining to winter light.
                </p>
                <p>
                  SIGNATURESPAN supplied a 7,600mm bi-fold glass wall system across the rear of the
                  main living level — six top-hung panels that compress into a stack at the
                  south end of the opening. When fully open, the living and dining rooms
                  become continuous with a cantilevered deck, with no threshold to step over.
                </p>
                <p>
                  The street elevation is anchored by an offset-axis pivot entry door:
                  1,100mm wide, 3,050mm tall, with a champagne anodised aluminium frame
                  and a clear glass infill. The balance of the pivot mechanism allows it
                  to open and close with a single finger despite the panel weight.
                </p>
              </div>
            </div>

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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {GALLERY.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-forma-black/40"
                style={{ height: 'clamp(240px, 28vw, 480px)' }}
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
              { href: '/folding-glass-walls', label: 'Bi-Fold Glass Wall System', body: '7,600 mm opening — 6 panels, top-hung, stacking to the south. Champagne anodised aluminium, double-glazed low-E.' },
              { href: '/windows', label: 'Picture Windows', body: 'Fixed picture windows on the ravine-facing elevation — slim rebated frames, maximum visible glass, custom sizing.' },
              { href: '/entry-doors', label: 'Pivot Entry Door', body: '1,100 mm × 3,050 mm offset-axis pivot. Clear glass infill, matching champagne anodised frame, flush threshold.' },
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

      {/* ── Back to projects ── */}
      <section className="bg-forma-black" aria-label="Back to projects">
        <div className="w-full h-px bg-forma-white/8" />
        <div className="site-container py-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="section-label-light mb-2">All Projects</p>
            <p className="font-display text-forma-white font-light italic text-2xl">View the full portfolio</p>
          </div>
          <Link href="/projects" className="btn-outline-gold">
            All Projects <Arr />
          </Link>
        </div>
      </section>
    </article>
  )
}
