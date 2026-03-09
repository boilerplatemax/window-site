import Link from 'next/link'

const PROJECT = {
  name:        'The Ridge House',
  location:    'Whistler, BC',
  type:        'Private Residence',
  architect:   'Studio Eleven Architecture',
  products:    'Lift & Slide System · Floor-to-Ceiling Windows',
  description: 'Perched at the treeline, The Ridge House was designed around its relationship with the surrounding forest. FORMA supplied eleven glass panels across three lift & slide systems and eight floor-to-ceiling window units — all custom-specified to the architect\'s exact dimensions.',
  heroImage:   'https://images.unsplash.com/photo-1600607687644-c7f34b5e0f98?auto=format&fit=crop&w=1800&q=85',
  detailImg1:  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80',
  detailImg2:  'https://images.unsplash.com/photo-1449844908441-8829b2f41b30?auto=format&fit=crop&w=700&q=80',
  href:        '/projects',
}

const META = [
  { key: 'Location',  val: PROJECT.location },
  { key: 'Type',      val: PROJECT.type },
  { key: 'Architect', val: PROJECT.architect },
  { key: 'Systems',   val: PROJECT.products },
]

export default function ProjectsPreview() {
  return (
    <section className="bg-forma-black" aria-label="Featured Project">

      {/* ── Section header — sits above the image ── */}
      <div className="site-container pt-24 lg:pt-32 pb-8">
        <div className="flex items-center justify-between">
          <p className="section-label-light">Featured Project</p>
          <Link
            href="/projects"
            className="font-mono text-[10px] tracking-label uppercase text-forma-white/35 hover:text-forma-gold transition-colors duration-300 flex items-center gap-2"
          >
            View All Projects
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* ── Cinematic hero image — edge-to-edge ── */}
      <div
        className="relative w-full overflow-hidden group"
        style={{ height: 'clamp(380px, 52vw, 740px)' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          style={{ backgroundImage: `url('${PROJECT.heroImage}')`, backgroundColor: '#1c1c1c' }}
          role="img"
          aria-label={`${PROJECT.name} — ${PROJECT.location}`}
        />

        {/* Project name overlaid on image — bottom left */}
        <div className="absolute inset-0 bg-gradient-to-t from-forma-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 site-container pb-10">
          <h2 className="font-display text-forma-white font-light italic text-display-md">
            {PROJECT.name}
          </h2>
          <p className="font-mono text-[10px] tracking-label uppercase text-forma-white/50 mt-2">
            {PROJECT.location} · {PROJECT.type}
          </p>
        </div>
      </div>

      {/* ── Detail strip: 2 images + meta ── */}
      <div className="site-container pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.2fr] gap-5 mt-5 items-start">

          {/* Detail image 1 */}
          <div className="overflow-hidden" style={{ height: 'clamp(200px, 18vw, 280px)' }}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${PROJECT.detailImg1}')`, backgroundColor: '#222' }}
              role="img"
              aria-label="Interior — floor-to-ceiling glass"
            />
          </div>

          {/* Detail image 2 */}
          <div className="overflow-hidden" style={{ height: 'clamp(200px, 18vw, 280px)' }}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${PROJECT.detailImg2}')`, backgroundColor: '#1e1e1e' }}
              role="img"
              aria-label="Exterior — glass facade"
            />
          </div>

          {/* Project meta */}
          <div className="lg:pl-8 pt-4 lg:pt-0">
            <dl className="space-y-4 mb-8">
              {META.map(({ key, val }) => (
                <div key={key} className="flex flex-col gap-0.5">
                  <dt className="font-mono text-[9px] tracking-label uppercase text-forma-white/25">{key}</dt>
                  <dd className="font-sans text-sm text-forma-white/65 leading-snug">{val}</dd>
                </div>
              ))}
            </dl>

            <p className="font-sans text-forma-white/40 text-[13px] leading-relaxed mb-8">
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
