import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Projects — Residential & Commercial Glass Installations',
  description:
    'Explore completed FORMA projects — residential and commercial installations featuring large-format windows, sliding door systems, folding glass walls, and architectural entry doors.',
  keywords: ['architectural glass projects', 'modern window installation', 'glass wall residential project', 'luxury home glass doors'],
}

const PROJECTS = [
  {
    id: 'ridge-house',
    name: 'The Ridge House',
    location: 'Whistler, BC',
    type: 'Residential',
    products: 'Lift & Slide · Floor-to-Ceiling Windows',
    image: 'https://images.unsplash.com/photo-1600607687644-c7f34b5e0f98?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pacific-pavilion',
    name: 'Pacific Pavilion',
    location: 'West Vancouver, BC',
    type: 'Residential',
    products: 'Bi-Fold Glass Walls · Corner Glass',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kala-studio',
    name: 'Kala Studio',
    location: 'Seattle, WA',
    type: 'Commercial',
    products: 'Multi-Panel Sliding · Fixed Glass Panels',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cedar-retreat',
    name: 'Cedar Retreat',
    location: 'Sonoma, CA',
    type: 'Residential',
    products: 'Pivot Entry Door · Picture Windows',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'form-residence',
    name: 'Form Residence',
    location: 'Portland, OR',
    type: 'Residential',
    products: 'Corner Opening System · Lift & Slide',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'north-loft',
    name: 'North Loft',
    location: 'Toronto, ON',
    type: 'Commercial',
    products: 'Steel & Glass Entry · Fixed Panels',
    image: 'https://images.unsplash.com/photo-1449844908441-8829b2f41b30?auto=format&fit=crop&w=800&q=80',
  },
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forma-black pt-40 pb-20">
        <div className="site-container">
          <p className="section-label-light mb-5">Our Work</p>
          <h1 className="font-display text-forma-white text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-6 max-w-2xl">
            Projects &
            <br />
            <em>Inspiration</em>
          </h1>
          <p className="font-sans text-forma-white/55 text-lg max-w-md leading-relaxed">
            Every project is a collaboration between the building, the site, and the glass.
            Browse our completed residential and commercial installations.
          </p>
        </div>
      </section>

      {/* Filter strip — visual only (static) */}
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

      {/* Project grid */}
      <section className="bg-forma-white section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PROJECTS.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group block"
                aria-label={`View ${project.name} project`}
              >
                {/* Image */}
                <div className="relative overflow-hidden mb-4" style={{ height: 'clamp(220px, 22vw, 340px)' }}>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                    style={{ backgroundImage: `url('${project.image}')`, backgroundColor: '#1a1a1a' }}
                    role="img"
                    aria-label={`${project.name}, ${project.location}`}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="font-mono text-[9px] tracking-label uppercase bg-forma-black/60 backdrop-blur-sm text-forma-white/80 px-2.5 py-1.5">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Meta */}
                <p className="font-mono text-[10px] tracking-label uppercase text-forma-muted mb-1">
                  {project.location}
                </p>
                <h2 className="font-display text-forma-text text-xl lg:text-2xl font-light mb-1 group-hover:text-forma-gold transition-colors duration-300">
                  {project.name}
                </h2>
                <p className="font-sans text-forma-muted/70 text-xs">{project.products}</p>
              </Link>
            ))}
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
