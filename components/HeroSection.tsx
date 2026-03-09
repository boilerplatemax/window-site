import Link from 'next/link'

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col bg-forma-black overflow-hidden"
      style={{ minHeight: '100svh' }}
      aria-label="Hero"
    >
      {/* ── Full-bleed background ── */}
      <div
        className="img-cover"
        style={{
          backgroundImage: "url('/images/caledon-house-exterior-2.jpg')",
        }}
        role="img"
        aria-label="Modern interior with floor-to-ceiling glass wall and sliding door system"
      />

      {/* ── Layered gradients for depth ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-forma-black/92 via-forma-black/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-forma-black via-forma-black/25 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-forma-black/90 to-transparent" aria-hidden="true" />

      {/* ── Gold top accent line ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-10"
        style={{ background: 'linear-gradient(to right, #C8A96E 0%, #C8A96E55 35%, transparent 75%)' }}
        aria-hidden="true"
      />

      {/* ── Main content — bottom of viewport ── */}
      <div className="relative z-10 mt-auto site-container w-full pb-20 lg:pb-24">
        <p className="font-mono text-[11px] tracking-label uppercase text-forma-white/85 mb-7">Architectural Glass Systems</p>

        <h1 className="font-display text-forma-white font-light text-balance mb-10 text-hero">
          <span className="block">The architecture</span>
          <span className="block italic">of openness.</span>
        </h1>

        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-20">
          <p className="font-sans text-forma-white/90 text-base sm:text-[17px] max-w-[340px] leading-relaxed">
            Large-format windows, sliding systems, folding glass walls,
            and entry doors — engineered for the modern build.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link href="/windows" className="btn-primary">
              Explore Products <ArrowRight />
            </Link>
            <Link href="/projects" className="btn-outline-white">
              View Projects <ArrowRight />
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}
