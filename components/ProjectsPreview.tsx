import Link from 'next/link'

const PROJECT = {
  name: 'The Ridge House',
  location: 'Whistler, BC',
  type: 'Private Residence',
  products: 'Lift & Slide System · Floor-to-Ceiling Windows',
  description:
    'Perched at the treeline, The Ridge House was designed around its relationship with the landscape. FORMA supplied eleven glass panels across three lift & slide systems and eight floor-to-ceiling window units — all custom-sized to the architect\'s exact specification.',
  heroImage:
    'https://images.unsplash.com/photo-1600607687644-c7f34b5e0f98?auto=format&fit=crop&w=1600&q=80',
  detailImage1:
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
  detailImage2:
    'https://images.unsplash.com/photo-1449844908441-8829b2f41b30?auto=format&fit=crop&w=600&q=80',
  href: '/projects',
}

const META = [
  { key: 'Location', val: PROJECT.location },
  { key: 'Type',     val: PROJECT.type },
  { key: 'Products', val: PROJECT.products },
]

export default function ProjectsPreview() {
  return (
    <section
      className="bg-forma-black section-pad"
      aria-label="Featured Project"
    >
      <div className="site-container">

        {/* Section header */}
        <div className="flex items-center justify-between mb-10">
          <p className="section-label-light">Projects</p>
          <Link
            href="/projects"
            className="font-mono text-[10px] tracking-label uppercase text-forma-white/40 hover:text-forma-gold transition-colors duration-200 flex items-center gap-2"
          >
            View All
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Main project image */}
        <div
          className="relative w-full overflow-hidden mb-6"
          style={{ minHeight: 'clamp(300px, 42vw, 620px)' }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${PROJECT.heroImage}')`,
              backgroundColor: '#1c1c1c',
            }}
            role="img"
            aria-label={`${PROJECT.name} — ${PROJECT.location}`}
          />
        </div>

        {/* Bottom row: detail images + meta */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* Detail images */}
          <div className="flex gap-4 lg:col-span-1">
            <div
              className="flex-1 overflow-hidden bg-forma-white/5"
              style={{ height: '180px' }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${PROJECT.detailImage1}')`,
                  backgroundColor: '#222',
                }}
                role="img"
                aria-label="Project detail — interior glass wall"
              />
            </div>
            <div
              className="flex-1 overflow-hidden bg-forma-white/5"
              style={{ height: '180px' }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${PROJECT.detailImage2}')`,
                  backgroundColor: '#1e1e1e',
                }}
                role="img"
                aria-label="Project detail — exterior glass facade"
              />
            </div>
          </div>

          {/* Project meta + description */}
          <div className="lg:col-span-2 lg:pl-8">
            <h2 className="font-display text-forma-white text-3xl sm:text-4xl font-light italic mb-6">
              {PROJECT.name}
            </h2>

            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {META.map(({ key, val }) => (
                <div key={key}>
                  <dt className="font-mono text-[10px] tracking-label uppercase text-forma-white/30 mb-1">
                    {key}
                  </dt>
                  <dd className="font-sans text-sm text-forma-white/70 leading-snug">
                    {val}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="font-sans text-forma-white/50 text-sm leading-relaxed mb-8 max-w-lg">
              {PROJECT.description}
            </p>

            <Link href={PROJECT.href} className="btn-outline-white">
              View Project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
