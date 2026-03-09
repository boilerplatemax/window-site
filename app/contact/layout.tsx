import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request a Quote — Architectural Glass Systems',
  description:
    'Get in touch with FORMA Architectural Glass to request a quote for large-format windows, sliding glass door systems, folding glass walls, or entry doors. We respond within 1 business day.',
  keywords: [
    'architectural glass quote', 'custom window quote Canada', 'sliding door quote',
    'glass wall estimate', 'large format window pricing', 'FORMA contact',
  ],
  openGraph: {
    title: 'Request a Quote — FORMA Architectural Glass',
    description: 'Tell us about your project and we\'ll respond within one business day with a specification recommendation and pricing.',
  },
  alternates: { canonical: 'https://formaglass.com/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
