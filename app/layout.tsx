import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Fonts are loaded via CSS @import in globals.css (Cormorant Garamond, DM Sans, DM Mono)
// CSS custom properties --font-cormorant, --font-dm-sans, --font-dm-mono are defined there

export const metadata: Metadata = {
  title: {
    template: '%s | FORMA Architectural Glass',
    default: 'FORMA Architectural Glass — Light. Space. Structure.',
  },
  description:
    'Large-format windows, sliding glass systems, folding glass walls, and architectural entry doors for residential and commercial projects.',
  keywords: [
    'architectural windows',
    'large format windows',
    'sliding glass doors',
    'folding glass walls',
    'lift and slide doors',
    'pivot doors',
    'floor to ceiling windows',
    'custom glass systems',
  ],
  authors: [{ name: 'FORMA Architectural Glass' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'FORMA Architectural Glass',
    title: 'FORMA Architectural Glass — Light. Space. Structure.',
    description:
      'Large-format windows, sliding glass systems, folding glass walls, and architectural entry doors.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FORMA Architectural Glass',
    description:
      'Large-format windows, sliding glass systems, folding glass walls, and architectural entry doors.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
