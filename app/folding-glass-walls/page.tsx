import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Folding Glass Walls — Bi-Fold & Corner Opening Systems',
  description:
    'FORMA folding glass wall systems — bi-fold glass walls and corner opening systems. Open entire wall faces to create seamless indoor-outdoor connections. Custom widths, thermally broken aluminium.',
  keywords: [
    'folding glass walls', 'bi fold glass doors', 'glass wall system',
    'accordion glass wall', 'bi fold glass wall residential', 'corner opening system',
  ],
}

const Arr = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PRODUCTS = [
  {
    id: 'bi-fold',
    num: '01',
    href: '/folding-glass-walls/bi-fold',
    name: 'Bi-Fold Glass Wall System',
    tag: 'Most Popular',
    description:
      'Accordion-style panels that fold and stack to one or both sides of the opening — dissolving an entire wall face when fully open.',
    body:
      'The bi-fold glass wall system works by folding panels in alternating directions along a top-hung track, compressing them into a stack at one or both ends of the opening. With configurations from 2 to 8 panels and stack directions tailored to the building layout, a FORMA bi-fold system can open a 10-metre wall face to the outdoors in a matter of seconds. The panels are top-hung — no bottom track to step over — and the threshold seal maintains weathertightness without creating a physical obstacle to the floor plane.',
    specs: [
      { k: 'Panel Count',      v: '2 to 8 panels' },
      { k: 'Max Opening Width',v: 'Up to 10,000 mm' },
      { k: 'Max Panel Height', v: '3,000 mm' },
      { k: 'Stack Direction',  v: 'Left, Right, or Split both sides' },
      { k: 'Track',            v: 'Top-hung — no bottom guide rail' },
      { k: 'Thermal Break',    v: 'Yes — Class A Aluminium Profile' },
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1100&q=85',
  },
  {
    id: 'corner',
    num: '02',
    href: '/folding-glass-walls/corner',
    name: 'Corner Opening System',
    tag: 'Architect Favourite',
    description:
      'Two independent runs of folding panels meeting at a corner — when fully open, the corner of the building disappears entirely, creating a panoramic opening in two directions simultaneously.',
    body:
      'A corner opening system is the most architecturally dramatic glass wall product available. It requires two runs of folding panels — typically one per wall face — that stack away from the corner in opposite directions. When both runs are open, what was a structural corner becomes a void: the outdoors and indoors are continuous on two axes. FORMA corner systems are engineered with concealed or minimal corner posts that disappear visually into the open building. The structural loading at the corner is handled by the frame above — not an intermediate post.',
    specs: [
      { k: 'Configuration',   v: 'Two independent panel runs' },
      { k: 'Corner Post',     v: 'Concealed or slim exposed' },
      { k: 'Corner Angle',    v: '90° internal · 90° external · Custom' },
      { k: 'Max Per Run',     v: 'Up to 6,000 mm per panel run' },
      { k: 'Max Height',      v: '3,000 mm per panel' },
      { k: 'Finish Options',  v: 'Powder Coat · Anodised · RAL · Dual-colour' },
    ],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1100&q=85',
  },
]

const BENEFITS = [
  {
    num: '01',
    headline: 'The most complete opening available.',
    body: 'No other product type opens a wall face as completely as a folding glass system. Sliding systems leave panels stacked to the side. Pocket systems are limited in width. A bi-fold system folds its panels into a compact stack — leaving the entire width of the opening clear.',
  },
  {
    num: '02',
    headline: 'Designed for the indoor-outdoor lifestyle.',
    body: 'Folding glass walls are the natural specification choice for living spaces that spill onto terraces, pool areas, or garden rooms. They\'re equally common in restaurants, retail spaces, and commercial hospitality environments where the ability to open or close based on weather or occupancy is essential.',
  },
  {
    num: '03',
    headline: 'Structural engineering included.',
    body: 'Opening an entire wall face has structural implications. FORMA provides full structural calculations and engineering data for every folding wall system — including corner configurations — to support the architect\'s documentation package and building consent applications.',
  },
]

const FAQS = [
  {
    q: 'Are bi-fold glass walls weathertight when closed?',
    a: 'Yes. FORMA bi-fold systems use full-perimeter compression seals and multi-point locking on every panel. They\'re tested to NAFS air infiltration and water resistance standards and are suitable for exposed coastal and cold-climate installations.',
  },
  {
    q: 'How do bi-fold walls perform thermally?',
    a: 'Thermally broken aluminium profiles are standard across our bi-fold range. Glass packages up to triple-glazed with low-E coatings are available. We provide U-value data for every configured system to support energy code compliance.',
  },
  {
    q: 'Can panels be ordered in different sizes within one system?',
    a: 'Yes, but with limitations. For the best operation and visual consistency, panel sizes should be equal or in two alternating widths. Our specification team can advise on the practical limits for your specific opening.',
  },
  {
    q: 'What structural support is needed for a corner opening system?',
    a: 'Corner systems require a structural header beam capable of spanning the full width of the opening on each wall face — the corner post is not a load-bearing element. FORMA provides beam load calculations as part of the specification package.',
  },
]

export default function FoldingGlassWallsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex flex-col justify-end bg-forma-black overflow-hidden"
        style={{ minHeight: '72vh' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80')" }}
          role="img"
          aria-label="Bi-fold glass wall system fully open to exterior terrace"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forma-black/94 via-forma-black/60 to-forma-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-forma-black/90 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, #C8A96E, #C8A96E44 40%, transparent 70%)' }} />

        <div className="relative z-10 site-container w-full pb-20 pt-44">
          <p className="font-mono text-[11px] tracking-label uppercase text-forma-white/85 mb-6">Folding Systems</p>
          <h1 className="font-display text-forma-white font-light text-balance mb-7 text-display-lg">
            An entire wall face,
            <br />
            <em>dissolved.</em>
          </h1>
          <p className="font-sans text-forma-white/90 text-base sm:text-lg max-w-[420px] leading-relaxed mb-10">
            Bi-fold glass walls and corner opening systems — the most complete
            indoor-outdoor connection in architecture.
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
              <p className="section-label mb-6">Folding Glass Walls</p>
              <h2 className="font-display text-forma-text font-light text-display-md text-balance">
                No threshold between
                <br />
                <em>in and out.</em>
              </h2>
            </div>
            <div className="space-y-5 lg:pt-4">
              <p className="font-sans text-forma-muted text-base sm:text-[17px] leading-relaxed">
                A folding glass wall system removes the distinction between inside and outside
                more completely than any other product. When the panels are folded back and
                stacked, the wall simply isn't there anymore — the floor continues, the ceiling
                continues, and the room extends into the garden, terrace, or landscape beyond.
              </p>
              <p className="font-sans text-forma-muted text-base leading-relaxed">
                This is architecture without compromise. FORMA folding systems are specified for
                projects where the relationship between built space and outdoor space is the
                primary design intention — and where getting that relationship right matters enough
                to invest in the engineering that makes it work.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-forma-divider" />
      </section>

      {/* ── Products — large alternating showcase ── */}
      <section className="bg-forma-white" aria-label="Folding wall systems">
        {PRODUCTS.map((p, i) => (
          <div key={p.id}>
            <div className={`site-container py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="relative overflow-hidden" style={{ minHeight: 'clamp(320px, 40vw, 580px)' }}>
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
                <p className="section-label mb-4">Folding Systems · {p.num}</p>
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
            <p className="section-label-light mb-5">Why Folding Glass Walls</p>
            <h2 className="font-display text-forma-white font-light text-display-md max-w-xl">
              The most complete opening
              <br />
              <em>in modern architecture.</em>
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

      {/* ── FAQ ── */}
      <section className="bg-forma-surface border-t border-forma-divider">
        <div className="site-container py-24 lg:py-28">
          <p className="section-label mb-10">Common Questions</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-t border-forma-divider pt-8">
                <h3 className="font-display text-forma-text text-xl font-light leading-snug mb-4">{faq.q}</h3>
                <p className="font-sans text-forma-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={"Open your wall\nentirely."}
        subheadline="Send us your opening dimensions and panel count requirements. We'll design the right system, stack direction, and glass specification for your project."
        primaryLabel="Request a Quote"
        secondaryLabel="View Projects"
        secondaryHref="/projects"
      />
    </>
  )
}
