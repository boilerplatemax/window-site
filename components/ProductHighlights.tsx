import Link from 'next/link'

const HIGHLIGHTS = [
  {
    id: 'corner-glass',
    href: '/windows/corner-glass',
    label: 'Windows',
    name: 'Corner Glass Systems',
    body: 'Two panes meeting at a frameless corner — no post, no interruption, no compromise on the view.',
    image: '/images/home-Corner Glass Systems.webp',
  },
  {
    id: 'bi-fold',
    href: '/folding-glass-walls/bi-fold',
    label: 'Folding Walls',
    name: 'Bi-Fold Glass Walls',
    body: 'Accordion-style panels that fold and stack to dissolve an entire wall face into open air.',
    image: '/images/home-bi-fold glass walls.webp',
  },
  {
    id: 'pivot-doors',
    href: '/entry-doors/pivot',
    label: 'Entry Doors',
    name: 'Pivot Entry Doors',
    body: 'A pivot door changes how a building is entered. Oversized, balanced, and precisely engineered.',
    image: '/images/home-pivot entry doors.webp',
  },
]

export default function ProductHighlights() {
  return (
    <section
      className="bg-forma-white section-pad"
      aria-label="More from the range"
    >
      <div className="site-container">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="section-label mb-4">Also in the Range</p>
            <h2 className="font-display text-forma-text text-4xl sm:text-5xl font-light leading-tight">
              Every opening,
              <br />
              <em>considered.</em>
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-2 font-mono text-[10px] tracking-label uppercase text-forma-muted hover:text-forma-gold transition-colors duration-200"
          >
            View Projects
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {HIGHLIGHTS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group block"
              aria-label={`Explore ${item.name}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden mb-5" style={{ height: 'clamp(220px, 24vw, 360px)' }}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                    backgroundColor: '#1a1a1a',
                  }}
                  role="img"
                  aria-label={item.name}
                />
              </div>

              {/* Text */}
              <p className="section-label mb-2">{item.label}</p>
              <h3 className="font-display text-forma-text text-2xl font-light leading-snug mb-2 group-hover:text-forma-gold transition-colors duration-300">
                {item.name}
              </h3>
              <p className="font-sans text-forma-muted text-sm leading-relaxed mb-4">
                {item.body}
              </p>
              <span className="font-mono text-[10px] tracking-label uppercase text-forma-gold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
