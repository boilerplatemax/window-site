'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/windows',            label: 'Windows' },
  { href: '/sliding-doors',      label: 'Sliding Doors' },
  { href: '/folding-glass-walls',label: 'Folding Walls' },
  { href: '/entry-doors',        label: 'Entry Doors' },
  { href: '/projects',           label: 'Projects' },
  { href: '/about',              label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? 'bg-forma-black/95 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="site-container h-[72px] flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="font-display text-forma-white text-xl tracking-[0.28em] uppercase hover:text-forma-gold transition-colors duration-300"
            aria-label="FORMA Architectural Glass — Home"
          >
            FORMA
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + '/')
              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-sans text-[11px] tracking-wide-2 uppercase transition-colors duration-300 ${
                    active
                      ? 'text-forma-gold'
                      : 'text-forma-white hover:text-forma-gold'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 font-sans text-[11px] tracking-wide-2 uppercase border border-forma-gold text-forma-gold px-5 py-2.5 hover:bg-forma-gold hover:text-forma-black transition-all duration-300"
          >
            Request a Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 group"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-px bg-forma-white transition-all duration-300 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-[4px]' : ''
              }`}
            />
            <span
              className={`block h-px bg-forma-white transition-all duration-300 ${
                mobileOpen ? 'w-0 opacity-0' : 'w-5'
              }`}
            />
            <span
              className={`block w-6 h-px bg-forma-white transition-all duration-300 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-[4px]' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-forma-black flex flex-col transition-opacity duration-400 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="site-container flex flex-col justify-center h-full pt-[72px] pb-16">
          <nav className="flex flex-col gap-8">
            {NAV_LINKS.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                className={`font-display text-forma-white text-4xl sm:text-5xl font-light italic transition-all duration-300 hover:text-forma-gold ${
                  mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-12 pt-8 border-t border-forma-white/10">
            <Link
              href="/contact"
              className="btn-outline-gold"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
