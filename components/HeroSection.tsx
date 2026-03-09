import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-end bg-forma-black overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80')",
        }}
        role="img"
        aria-label="Modern home interior with floor-to-ceiling glass wall and sliding door system"
      />

      {/* Layered gradients — left-to-right darkness + bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-forma-black/80 via-forma-black/40 to-forma-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-forma-black/90 via-transparent to-forma-black/20" />

      {/* Content */}
      <div className="relative z-10 site-container w-full pb-20 lg:pb-28">
        {/* Gold accent rule */}
        <span className="gold-line mb-8 block" aria-hidden="true" />

        <h1 className="font-display text-forma-white font-light leading-[1.02] tracking-tight mb-7 text-balance">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[84px]">
            The architecture
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[84px] italic">
            of openness.
          </span>
        </h1>

        <p className="font-sans text-forma-white/65 text-base sm:text-lg max-w-md mb-12 leading-relaxed">
          Large-format windows, sliding systems, folding glass walls,
          and entry doors — engineered for the modern build.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Link href="/windows" className="btn-primary">
            Explore Products
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="/projects" className="btn-ghost-white mt-1">
            View Projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 lg:right-16 flex flex-col items-center gap-2 text-forma-white/40"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-label uppercase [writing-mode:vertical-rl] rotate-180">
          Scroll
        </span>
        <span className="block w-px h-12 bg-forma-white/20" />
      </div>
    </section>
  )
}
