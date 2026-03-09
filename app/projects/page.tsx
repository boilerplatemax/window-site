import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Projects & Inspiration — Architectural Glass Installations',
  description:
    'Explore completed FORMA projects — residential and commercial installations featuring large-format windows, sliding door systems, folding glass walls, and architectural entry doors across the Pacific Northwest and beyond.',
  keywords: [
    'architectural glass projects', 'modern window installation', 'glass wall residential project',
    'luxury home glass doors', 'modern coastal house windows', 'glass pavilion architecture',
  ],
}

const FEATURED = {
  id: 'ridge-house',
  name: 'The Ridge House',
  location: 'Whistler, BC',
  type: 'Private Residence',
  architect: 'Studio Eleven Architecture',
  products: 'Lift & Slide · Floor-to-Ceiling Windows',
  description:
    'Perched at the treeline, The Ridge House was designed around its relationship with the surrounding forest. FORMA supplied eleven glass panels across three lift & slide systems and eight floor-to-ceiling window units — all custom-specified to the architect\'s exact dimensions.',
  image: 'https://images.unsplash.com/photo-1600607687644-c7f34b5e0f98?auto=format&fit=crop&w=1800&q=85',
}

const PROJECTS = [
  {
    id: 'coastal-house',
    name: 'Modern Coastal House',
    location: 'Tofino, BC',
    type: 'Residential',
    tag: 'Residential',
    products: 'Bi-Fold Glass Walls · Picture Windows',
    description: 'A weatherboard home on the Pacific coast designed to frame the ocean without interruption. Eight bi-fold panels open a 9-metre wall to the beach terrace.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80',
    span: 'col-span-1 sm:col-span-2',
  },
  {
    id: 'glass-pavilion',
    name: 'Minimalist Glass Pavilion',
    location: 'Salt Spring Island, BC',
    type: 'Residential',
    tag: 'Residential',
    products: 'Corner Opening System · Fixed Panels',
    description: 'A single-storey pavilion with frameless corner glass on three sides. When open, no barrier remains between the interior and surrounding meadow.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
    span: 'col-span-1',
  },
  {
    id: 'hillside-home',
    name: 'Luxury Hillside Home',
    location: 'West Vancouver, BC',
    type: 'Residential',
    tag: 'Residential',
    products: 'Lift & Slide · Corner Glass · Pivot Entry',
    description: 'A cantilevered hillside residence with unobstructed views of Howe Sound. FORMA supplied the full glazing package: corner windows, lift & slide systems, and a 3.2-metre pivot entry door.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80',
    span: 'col-span-1',
  },
  {
    id: 'pacific-pavilion',
    name: 'Pacific Pavilion',
    location: 'North Vancouver, BC',
    type: 'Residential',
    tag: 'Residential',
    products: 'Bi-Fold Glass Walls · Corner Glass',
    description: 'A woodland pavilion where the glazing system was specified to disappear — allowing the interior to read as an extension of the forest floor.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80',
    span: 'col-span-1',
  },
  {
    id: 'kala-studio',
    name: 'Kala Creative Studio',
    location: 'Seattle, WA',
    type: 'Commercial',
    tag: 'Commercial',
    products: 'Multi-Panel Sliding · Fixed Glass Panels',
    description: 'A commercial creative studio with an interior glass partition system that divides or opens the space for different uses throughout the day.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
    span: 'col-span-1',
  },
  {
    id: 'cedar-retreat',
    name: 'Cedar Retreat',
    location: 'Sonoma, CA',
    type: 'Residential',
    tag: 'Residential',
    products: 'Pivot Entry Door · Picture Windows',
    description: 'A wine country retreat where material honesty was the design brief. Cedar cladding and a blackened steel pivot door with clear glass panel frame the view from the entry threshold.',
    image: 'https://images.unsplash.com/photo-1449844908441-8829b2f41b30?auto=format&fit=crop&w=900&q=80',
    span: 'col-span-1 sm:col-span-2',
  },
]

const STATS = [
  { num: '200+', label: 'Projects completed' },
  { num: '12', label: 'Years supplying' },
  { num: '4', label: 'Countries served' },
  { num: '100%', label: 'Custom specified' },
]

export default function ProjectsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex flex-col justify-end bg-forma-black overflow-hidden"
        style={{ minHeight: '65vh' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${FEATURED.image}')` }}
          role="img"
          aria-label="The Ridge House — Whistler, BC"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forma-black/94 via-forma-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forma-black via-forma-black/20 to-transparent" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, #C8A96E, #C8A96E44 40%, transparent 70%)' }}
        />

        <div className="relative z-10 site-container w-full pb-20 pt-44">
          <p className="font-mono text-[11px] tracking-label uppercase text-forma-white/85 mb-6">Projects & Inspiration</p>
          <h1 className="font-display text-forma-white font-light text-balance mb-7 text-display-lg">
            Work that speaks
            <br />
            <em>for itself.</em>
          </h1>
          <p className="font-sans text-forma-white/90 text-base sm:text-lg max-w-[420px] leading-relaxed">
            Residential and commercial installations across the Pacific Northwest
            and beyond — every project custom-specified to the site and the architect.
          </p>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-forma-black border-b border-forma-white/8">
        <div className="site-container py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {STATS.map(({ num, label }) => (
              <div key={label} className="text-center sm:text-left">
                <p className="font-display text-forma-white text-3xl font-light">{num}</p>
                <p className="font-mono text-[10px] tracking-label uppercase text-forma-white/40 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Filter strip ── */}
      <div className="bg-forma-black border-b border-forma-white/10 sticky top-[72px] z-30">
        <div className="site-container flex gap-8 py-4 overflow-x-auto">
          {['All Projects', 'Residential', 'Commercial'].map((f, i) => (
            <button
              key={f}
              className={`font-mono text-[10px] tracking-label uppercase whitespace-nowrap transition-colors duration-200 ${
                i === 0 ? 'text-forma-gold' : 'text-forma-white/40 hover:text-forma-white/70'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── Featured Project ── */}
      <section className="bg-forma-black pt-16 pb-0" aria-label="Featured project">
        <div className="site-container mb-5">
          <p className="section-label-light">Featured Project</p>
        </div>
        <Link
          href={`/projects/${FEATURED.id}`}
          className="group relative block w-full overflow-hidden"
          style={{ height: 'clamp(320px, 42vw, 600px)' }}
          aria-label={`View ${FEATURED.name} project`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            style={{ backgroundImage: `url('${FEATURED.image}')`, backgroundColor: '#111' }}
            role="img"
            aria-label={`${FEATURED.name}, ${FEATURED.location}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forma-black/85 via-forma-black/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 site-container pb-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] tracking-label uppercase text-forma-gold mb-2">{FEATURED.location} · {FEATURED.type}</p>
                <h2 className="font-display text-forma-white font-light italic text-display-md">{FEATURED.name}</h2>
                <p className="font-mono text-[10px] tracking-label uppercase text-forma-white/50 mt-2">{FEATURED.products}</p>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-label uppercase text-forma-gold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                View Project
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* ── Project Grid ── */}
      <section className="bg-forma-black pt-5 pb-24 lg:pb-32" aria-label="All projects">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className={`group relative overflow-hidden hover-gold-border ${project.span ?? ''}`}
                style={{ height: 'clamp(280px, 28vw, 420px)' }}
                aria-label={`View ${project.name} project`}
              >
                {/* Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  style={{ backgroundImage: `url('${project.image}')`, backgroundColor: '#111' }}
                  role="img"
                  aria-label={`${project.name}, ${project.location}`}
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-forma-black/88 via-forma-black/30 to-transparent transition-opacity duration-500 group-hover:from-forma-black/94" />

                {/* Tag */}
                <span className="absolute top-5 right-5 font-mono text-[9px] tracking-label uppercase bg-forma-black/55 backdrop-blur-sm text-forma-white/70 px-2.5 py-1.5">
                  {project.tag}
                </span>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <p className="font-mono text-[9px] tracking-label uppercase text-forma-gold mb-1.5">{project.location}</p>
                  <h3 className="font-display text-forma-white font-light text-xl lg:text-2xl leading-snug mb-1">
                    {project.name}
                  </h3>
                  <p className="font-sans text-forma-white/45 text-xs mb-4">{project.products}</p>

                  {/* Hover reveal */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-500 ease-out">
                    <p className="font-sans text-forma-white/65 text-[12px] leading-relaxed pb-1">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[10px] tracking-label uppercase text-forma-gold mt-3 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    View Project
                    <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process strip ── */}
      <section className="bg-forma-surface border-y border-forma-divider">
        <div className="site-container py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-5">How We Work</p>
              <h2 className="font-display text-forma-text font-light text-display-md text-balance">
                Every project starts
                <br />
                <em>with a conversation.</em>
              </h2>
            </div>
            <div className="space-y-5">
              <p className="font-sans text-forma-muted text-base leading-relaxed">
                We work directly with architects, builders, and homeowners — from initial
                specification through to delivery. No middlemen, no catalogue constraints.
                Every system is selected and sized for the specific project.
              </p>
              <Link href="/contact" className="btn-outline-gold inline-flex">
                Start a Project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline={"Start your\nproject."}
        subheadline="Join the architects, builders, and homeowners who trust FORMA to supply the glass systems that define their projects."
        dark={false}
        primaryLabel="Request a Quote"
        secondaryLabel="Contact the Team"
        secondaryHref="/contact"
      />
    </>
  )
}
