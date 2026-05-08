import type { Metadata } from 'next'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'About — Architectural Glass Supplier',
  description:
    'SIGNATURESPAN INC. is a direct-supply specialist in large-format windows, sliding systems, folding glass walls, and entry doors for residential and commercial projects.',
  keywords: ['architectural glass supplier', 'custom window door company', 'glass wall manufacturer'],
}

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Consultation',
    body: 'We start by understanding your project — the site, the opening, the brief. Phone, email, or in-person.',
  },
  {
    num: '02',
    title: 'Specification',
    body: 'Our team produces a full specification: system selection, sizing, glass type, frame finish, and hardware.',
  },
  {
    num: '03',
    title: 'Quotation',
    body: 'A detailed, fixed-price quote. No surprises. We include freight to your project site.',
  },
  {
    num: '04',
    title: 'Production',
    body: 'Manufactured to your specification. We provide production updates and confirm delivery windows.',
  },
  {
    num: '05',
    title: 'Delivery & Support',
    body: 'Delivered to site. Our technical team is available for installation questions and post-delivery support.',
  },
]

const VALUES = [
  {
    headline: 'Precision over volume.',
    body: 'We\'d rather supply one project right than fifty projects carelessly. Every specification is reviewed by a technical team member before production.',
  },
  {
    headline: 'Direct. Always.',
    body: 'No dealers, no intermediaries. You work with us from first conversation to final delivery. That\'s how we keep quality high and lead times honest.',
  },
  {
    headline: 'Architecture deserves better.',
    body: 'The glazing industry has historically under-served architects. SIGNATURESPAN was built to fix that — with real technical depth, proper documentation, and products that match the brief.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[55vh] flex items-end bg-forma-black"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.5) 60%, rgba(10,10,10,0.2) 100%), url('https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="site-container w-full pb-20 pt-40">
          <p className="section-label-light mb-5">Company</p>
          <h1 className="font-display text-forma-white text-5xl sm:text-6xl lg:text-7xl font-light leading-tight max-w-2xl">
            About
            <br />
            <em>SIGNATURESPAN</em>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-forma-white section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="section-label mb-8">Our Story</p>
              <h2 className="font-display text-forma-text text-4xl sm:text-5xl font-light leading-tight mb-8">
                Built from
                <br />
                <em>a gap in the market.</em>
              </h2>
              <div className="space-y-5 font-sans text-forma-muted text-base leading-relaxed">
                <p>
                  SIGNATURESPAN was founded by a team with backgrounds in architecture and construction
                  who were frustrated by the same problem: extraordinary buildings being let down
                  by ordinary glazing.
                </p>
                <p>
                  Too many suppliers prioritised standard sizes over custom solutions,
                  offered poor technical support, and left architects navigating complex
                  specifications alone.
                </p>
                <p>
                  We built SIGNATURESPAN to be the supplier we always wished existed — technically
                  fluent, direct to deal with, and obsessive about getting the specification right.
                </p>
                <p>
                  Today we supply large-format glass systems to architects, builders, developers,
                  and homeowners across North America, from single residential projects to
                  multi-building commercial developments.
                </p>
              </div>
            </div>

            <div className="lg:pt-20">
              {VALUES.map((v, i) => (
                <div key={i} className={`pb-8 ${i < VALUES.length - 1 ? 'mb-8 border-b border-forma-divider' : ''}`}>
                  <h3 className="font-display text-forma-text text-2xl font-light italic mb-3">{v.headline}</h3>
                  <p className="font-sans text-forma-muted text-sm leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-forma-black section-pad">
        <div className="site-container">
          <div className="mb-16">
            <p className="section-label-light mb-5">How We Work</p>
            <h2 className="font-display text-forma-white text-4xl sm:text-5xl font-light leading-tight">
              From first call
              <br />
              <em>to delivered product.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className="border-t border-forma-white/10 pt-6">
                <p className="font-mono text-[10px] tracking-label uppercase text-forma-gold mb-4">{step.num}</p>
                <h3 className="font-display text-forma-white text-xl font-light mb-3">{step.title}</h3>
                <p className="font-sans text-forma-white/45 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage + Stats */}
      <section className="bg-forma-surface section-pad-sm border-t border-forma-divider">
        <div className="site-container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { n: '75+',     l: 'Projects Supplied' },
              { n: '10+',     l: 'Years in Business' },
              { n: 'Ontario', l: 'Wide Coverage' },
              { n: '100%',    l: 'Direct Supply' },
            ].map(({ n, l }) => (
              <div key={l}>
                <p className="font-display text-forma-text text-5xl font-light mb-1">{n}</p>
                <p className="font-mono text-[10px] tracking-label uppercase text-forma-muted">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={"Work with\nus directly."}
        subheadline="Architects, builders, developers, and homeowners — we work with all of them, all the time. Get in touch."
        primaryLabel="Start a Conversation"
        secondaryLabel="View Projects"
        secondaryHref="/projects"
      />
    </>
  )
}
