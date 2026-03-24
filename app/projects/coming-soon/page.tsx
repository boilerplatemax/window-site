import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Project Details Coming Soon',
  description: 'Full project documentation and photography for this SIGNATURESPAN INC. installation will be available soon.',
  robots: { index: false, follow: false },
}

export default function ComingSoonPage() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-forma-black text-center px-6"
      aria-label="Project coming soon"
    >
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, #C8A96E, #C8A96E44 40%, transparent 70%)' }}
        aria-hidden="true"
      />

      <span className="gold-line mb-10 mx-auto block" aria-hidden="true" />

      <p className="font-mono text-[11px] tracking-label uppercase text-forma-gold mb-6">
        Projects
      </p>
      <h1 className="font-display text-forma-white font-light text-display-md text-balance mb-6">
        Project details
        <br />
        <em>coming soon.</em>
      </h1>
      <p className="font-sans text-forma-white/70 text-base max-w-sm leading-relaxed mb-12">
        We're preparing the full documentation and photography for this project.
        In the meantime, browse our completed work or get in touch to discuss your project.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/projects" className="btn-outline-gold">
          All Projects
        </Link>
        <Link href="/contact" className="btn-primary">
          Start a Project
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </section>
  )
}
