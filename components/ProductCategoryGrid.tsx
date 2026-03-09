import Link from 'next/link'

const CATEGORIES = [
  {
    id: 'windows',
    href: '/windows',
    label: 'Windows',
    headline: ['Expansive glazing,', 'precisely framed.'],
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
    fallbackBg: '#141414',
  },
  {
    id: 'sliding-doors',
    href: '/sliding-doors',
    label: 'Sliding Doors',
    headline: ['Open the wall.', 'Close the distance.'],
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80',
    fallbackBg: '#111111',
  },
  {
    id: 'folding-walls',
    href: '/folding-glass-walls',
    label: 'Folding Glass Walls',
    headline: ['No threshold', 'between in and out.'],
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
    fallbackBg: '#0f0f0f',
  },
  {
    id: 'entry-doors',
    href: '/entry-doors',
    label: 'Entry Doors',
    headline: ['First impressions', 'that last.'],
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80',
    fallbackBg: '#131313',
  },
]

export default function ProductCategoryGrid() {
  return (
    <section aria-label="Product Categories">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={cat.href}
            className="group relative flex items-end overflow-hidden"
            style={{ minHeight: 'clamp(320px, 38vw, 560px)' }}
            aria-label={`Explore ${cat.label}`}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
              style={{
                backgroundImage: `url('${cat.image}')`,
                backgroundColor: cat.fallbackBg,
              }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-forma-black/85 via-forma-black/25 to-transparent group-hover:from-forma-black/90 transition-all duration-500" />

            {/* Card content */}
            <div className="relative z-10 p-8 lg:p-10 w-full">
              <p className="section-label mb-3">{cat.label}</p>
              <h3 className="font-display text-forma-white font-light text-3xl lg:text-4xl leading-snug">
                {cat.headline[0]}
                <br />
                {cat.headline[1]}
              </h3>

              {/* Hover reveal arrow */}
              <div className="mt-4 flex items-center gap-2 text-forma-gold font-mono text-[10px] tracking-label uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Explore
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
