import Link from 'next/link'

const PROJECT = {
  name:        'The Caledon House',
  location:    'Caledon, ON',
  type:        'Private Residence',
  architect:   'Custom Build',
  products:    'Lift & Slide · Floor-to-Ceiling Windows · Corner Glass',
  description: 'A private estate in Caledon designed to frame sweeping views of the Niagara Escarpment. FORMA supplied lift & slide systems, corner glass, and floor-to-ceiling windows across the main living wing — all custom-specified to the architect\'s exact dimensions.',
  heroImage:   '/images/caledon-house-exterior-2.jpg',
  detailImg1:  '/images/caledon-house-interrior-1.jpg',
  detailImg2:  '/images/caledon-house-backyard-1.jpg',
  href:        '/projects/caledon-house',
}

const META = [
  { key: 'Location',  val: PROJECT.location },
  { key: 'Type',      val: PROJECT.type },
  { key: 'Build',     val: PROJECT.architect },
  { key: 'Systems',   val: PROJECT.products },
]

export default function ProjectsPreview() {
  return (
    <section className="bg-forma-black" aria-label="Featured Project — The Caledon House">

      {/* ── Section header ── */}
      <div className="site-container pt-24 lg:pt-32 pb-8">
        <div className="flex items-center justify-between">
          <p className="section-label-light">Featured Project</p>
          <Link
            href="/projects"
            className="font-mono text-[10px] tracking-label uppercase text-forma-white/55 hover:text-forma-gold transition-colors duration-300 flex items-center gap-2"
          >
            View All Projects
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* ── Cinematic hero image — edge-to-edge ── */}
      <Link
        href={PROJECT.href}
        className="group relative block w-full overflow-hidden"
        style={{ height: 'clamp(380px, 52vw, 740px)' }}
        aria-label={`View ${PROJECT.name} project`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          style={{ backgroundImage: `url('${PROJECT.heroImage}')`, backgroundColor: '#1c1c1c' }}
          role="img"
          aria-label={`${PROJECT.name} — ${PROJECT.location}, rear elevation with lift & slide glass walls`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-forma-black/75 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 site-container pb-10">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-forma-white font-light italic text-display-md">
                {PROJECT.name}
              </h2>
              <p className="font-mono text-[10px] tracking-label uppercase text-forma-white/65 mt-2">
                {PROJECT.location} · {PROJECT.type}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] tracking-label uppercase text-forma-gold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
              View Project
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </Link>

      {/* ── Detail strip: 2 images + meta ── */}
      <div className="site-container pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.2fr] gap-5 mt-5 items-start">

          {/* Detail image 1 — interior */}
          <div className="overflow-hidden" style={{ height: 'clamp(200px, 18vw, 280px)' }}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${PROJECT.detailImg1}')`, backgroundColor: '#222' }}
              role="img"
              aria-label="The Caledon House — interior view through floor-to-ceiling windows"
            />
          </div>

          {/* Detail image 2 — backyard/exterior */}
          <div className="overflow-hidden" style={{ height: 'clamp(200px, 18vw, 280px)' }}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${PROJECT.detailImg2}')`, backgroundColor: '#1e1e1e' }}
              role="img"
              aria-label="The Caledon House — backyard with lift & slide glass wall systems"
            />
          </div>

          {/* Project meta */}
          <div className="lg:pl-8 pt-4 lg:pt-0">
            <dl className="space-y-4 mb-8">
              {META.map(({ key, val }) => (
                <div key={key} className="flex flex-col gap-0.5">
                  <dt className="font-mono text-[9px] tracking-label uppercase text-forma-white/45">{key}</dt>
                  <dd className="font-sans text-sm text-forma-white/80 leading-snug">{val}</dd>
                </div>
              ))}
            </dl>

            <p className="font-sans text-forma-white/65 text-[13px] leading-relaxed mb-8">
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
