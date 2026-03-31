import Link from 'next/link'

const PRODUCTS = [
  { href: '/windows',             label: 'Windows' },
  { href: '/sliding-doors',       label: 'Sliding Doors' },
  { href: '/folding-glass-walls', label: 'Folding Glass Walls' },
  { href: '/entry-doors',         label: 'Entry Doors' },
]

const COMPANY = [
  { href: '/projects', label: 'Projects' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
]

const LEGAL = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms',   label: 'Terms of Use' },
]

export default function Footer() {
  return (
    <footer className="bg-forma-black text-forma-white">
      <div className="site-container py-20 lg:py-24">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-forma-white/10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <p className="font-display text-2xl tracking-[0.28em] uppercase text-forma-gold mb-4">
              FORMA
            </p>
            <p className="font-sans text-forma-white/70 text-sm leading-relaxed max-w-xs mb-8">
              Large-format windows, sliding systems, folding glass walls, and architectural
              entry doors — engineered for residential and commercial projects.
            </p>
            <p className="section-label-light mb-2">Contact</p>
            <a
              href="mailto:hello@formaglass.com"
              className="font-sans text-sm text-forma-white/85 hover:text-forma-gold transition-colors duration-200 block mb-1"
            >
              hello@formaglass.com
            </a>
            <a
              href="tel:+16045550192"
              className="font-sans text-sm text-forma-white/85 hover:text-forma-gold transition-colors duration-200 block"
            >
              +1 (604) 555-0192
            </a>
          </div>

          {/* Products */}
          <div>
            <p className="section-label-light mb-6">Products</p>
            <ul className="space-y-3">
              {PRODUCTS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-sm text-forma-white/80 hover:text-forma-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="section-label-light mb-6">Company</p>
            <ul className="space-y-3">
              {COMPANY.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-sm text-forma-white/80 hover:text-forma-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="section-label-light mt-8 mb-4">Quote</p>
            <Link
              href="/contact"
              className="font-sans text-sm text-forma-gold hover:text-forma-gold-dark transition-colors duration-200"
            >
              Request a Quote →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="font-mono text-[10px] tracking-label uppercase text-forma-white/55">
            © {new Date().getFullYear()} FORMA Architectural Glass. All rights reserved.
          </p>
          <div className="flex gap-6">
            {LEGAL.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-mono text-[10px] tracking-label uppercase text-forma-white/55 hover:text-forma-white/60 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
