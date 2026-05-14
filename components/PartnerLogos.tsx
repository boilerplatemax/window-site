const PARTNERS = [
  {
    name: 'Reynaers Aluminium',
    href: 'https://www.reynaers.com/',
    image: '/images/partner-reynaers.png',
  },
  {
    name: 'Schüco',
    href: 'https://www.schueco.com/com',
    image: '/images/partner-schuco.png',
  },
  {
    name: 'Procural Aluminium Systems',
    href: 'https://procural-group.com/en/products/windows/',
    image: '/images/partner-procural.png',
  },
]

export default function PartnerLogos() {
  return (
    <section
      className="bg-forma-white section-pad border-t border-forma-divider"
      aria-label="Our partners and suppliers"
    >
      <div className="site-container">
        <div className="text-center mb-12">
          <p className="section-label mb-4">Trusted Partners</p>
          <h2 className="font-display text-forma-text text-3xl sm:text-4xl font-light leading-tight">
            Built with <em>industry-leading</em> systems.
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PARTNERS.map((partner) => (
            <li key={partner.name}>
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.name} (opens in a new tab)`}
                className="group flex h-32 sm:h-36 items-center justify-center bg-white border border-forma-divider px-8 py-6 transition-all duration-300 hover:border-forma-gold hover:shadow-sm"
              >
                <img
                  src={partner.image}
                  alt={`${partner.name} logo`}
                  loading="lazy"
                  className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
