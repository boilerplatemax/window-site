import Link from 'next/link'

const CATEGORIES = [
  {
    id: 'windows',
    num: '01',
    href: '/windows',
    label: 'Windows',
    count: '4 systems',
    headline: ['Expansive glazing,', 'precisely framed.'],
    image: '/images/caledon-house-interrior-1.jpg',
    bg: '#141414',
  },
  {
    id: 'sliding-doors',
    num: '02',
    href: '/sliding-doors',
    label: 'Sliding Doors',
    count: '3 systems',
    headline: ['Open the wall.', 'Close the distance.'],
    image: '/images/mississauga-house-exterior-1.jpg',
    bg: '#111111',
  },
  {
    id: 'folding-walls',
    num: '03',
    href: '/folding-glass-walls',
    label: 'Folding Glass Walls',
    count: '2 systems',
    headline: ['No threshold', 'between in and out.'],
    image: '/images/caledon-house-backyard-1.jpg',
    bg: '#0f0f0f',
  },
  {
    id: 'entry-doors',
    num: '04',
    href: '/entry-doors',
    label: 'Entry Doors',
    count: '3 systems',
    headline: ['First impressions', 'that last.'],
    image: '/images/caledon-house-exterior-1.jpg',
    bg: '#131313',
  },
]

export default function ProductCategoryGrid() {
  return (
    <section aria-label="Product categories">
      {/* 2×2 flush grid — cards bleed edge-to-edge */}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={cat.href}
            className="group relative flex flex-col justify-end overflow-hidden hover-gold-border"
            style={{ minHeight: 'clamp(380px, 44vw, 620px)' }}
            aria-label={`Explore ${cat.label}`}
          >
            {/* Background — zooms on hover */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              style={{ backgroundImage: `url('${cat.image}')`, backgroundColor: cat.bg }}
            />

            {/* Gradient: strong bottom, fades to nothing at 40% */}
            <div className="absolute inset-0 bg-gradient-to-t from-forma-black/96 via-forma-black/60 to-transparent transition-opacity duration-500 group-hover:from-black" />

            {/* Top-right counter */}
            <span
              className="absolute top-6 right-7 font-mono text-[10px] tracking-label uppercase text-forma-white/25 group-hover:text-forma-white/50 transition-colors duration-300"
              aria-hidden="true"
            >
              {cat.num}
            </span>

            {/* Content */}
            <div className="relative z-10 p-8 lg:p-11">
              <p className="section-label mb-4 flex items-center gap-3">
                <span>{cat.label}</span>
                <span className="text-forma-white/50" aria-hidden="true">·</span>
                <span className="text-forma-white/70 normal-case font-sans text-[11px] tracking-normal">{cat.count}</span>
              </p>

              <h3 className="font-display text-forma-white font-light text-display-md">
                {cat.headline[0]}
                <br />
                <em>{cat.headline[1]}</em>
              </h3>

              {/* Hover CTA — slides up */}
              <div className="mt-5 flex items-center gap-2.5 text-forma-gold font-mono text-[10px] tracking-label uppercase translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                Explore System
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
