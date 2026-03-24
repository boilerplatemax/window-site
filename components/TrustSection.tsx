const STATS = [
  { number: '850+', label: 'Projects Supplied' },
  { number: '12+',  label: 'Years in Operation' },
  { number: '38',   label: 'States & Provinces Served' },
  { number: '6m',   label: 'Max Panel Width' },
]

const TESTIMONIALS = [
  {
    quote:
      "SIGNATURESPAN's technical team understood our specification before we finished explaining it. Product arrived on schedule, damage-free, and sized to the millimetre. We're specifying them on our next four projects.",
    name: 'Principal Architect',
    company: 'Studio Eleven Architecture, Vancouver BC',
  },
  {
    quote:
      "We've sourced from a lot of suppliers. SIGNATURESPAN is the first one we actually call back.",
    name: 'Project Manager',
    company: 'Northfield Build Group',
  },
]

const CERTIFICATIONS = [
  'NAFS (North American Fenestration Standard) Tested',
  'Thermally Broken Aluminum — Class A Profile',
  'Energy Star Eligible Products',
  'CSA A440 Compliant',
  'LEED-Contributing Specifications Available',
]

export default function TrustSection() {
  return (
    <section
      className="bg-forma-surface section-pad border-t border-forma-divider"
      aria-label="Trust signals and credentials"
    >
      <div className="site-container">

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-16 mb-16 border-b border-forma-divider">
          {STATS.map(({ number, label }) => (
            <div key={label} className="text-center lg:text-left">
              <p className="font-display text-forma-text text-5xl lg:text-6xl font-light mb-1">
                {number}
              </p>
              <p className="font-mono text-[10px] tracking-label uppercase text-forma-muted">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials + Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Testimonials — takes 2 cols */}
          <div className="lg:col-span-2">
            <p className="section-label mb-10">What They Say</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {TESTIMONIALS.map((t, i) => (
                <figure key={i} className="border-l-2 border-forma-gold pl-6">
                  <blockquote>
                    <p className="font-sans text-forma-text text-sm leading-relaxed mb-5 italic">
                      "{t.quote}"
                    </p>
                  </blockquote>
                  <figcaption>
                    <p className="font-mono text-[10px] tracking-label uppercase text-forma-muted">
                      {t.name}
                    </p>
                    <p className="font-mono text-[10px] tracking-label uppercase text-forma-muted/60 mt-0.5">
                      {t.company}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="section-label mb-10">Tested & Certified</p>
            <ul className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert} className="flex items-start gap-3">
                  <span className="block w-1.5 h-1.5 rounded-full bg-forma-gold flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <span className="font-sans text-sm text-forma-muted leading-snug">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
