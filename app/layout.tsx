import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Fonts are loaded via CSS @import in globals.css (Cormorant Garamond, DM Sans, DM Mono)
// CSS custom properties --font-cormorant, --font-dm-sans, --font-dm-mono are defined there

export const metadata: Metadata = {
  metadataBase: new URL('https://formaglass.com'),
  title: {
    template: '%s | FORMA Architectural Glass',
    default: 'FORMA Architectural Glass — Large Format Windows & Glass Systems',
  },
  description:
    'FORMA supplies large-format architectural windows, sliding glass door systems, folding glass walls, and entry doors — custom-specified for residential and commercial projects across Canada and the US.',
  keywords: [
    'architectural windows', 'large format windows', 'modern aluminum windows',
    'sliding glass doors', 'lift and slide doors', 'folding glass walls',
    'floor to ceiling windows', 'corner glass systems', 'pivot doors',
    'custom glass systems', 'architectural glazing', 'thermally broken aluminum windows',
  ],
  authors: [{ name: 'FORMA Architectural Glass', url: 'https://formaglass.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'FORMA Architectural Glass',
    title: 'FORMA Architectural Glass — Large Format Windows & Glass Systems',
    description:
      'Custom large-format windows, sliding glass doors, folding glass walls, and entry doors for residential and commercial projects.',
    images: [{ url: '/images/hero.jpg', width: 1920, height: 1080, alt: 'FORMA Architectural Glass — modern home with floor-to-ceiling windows' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FORMA Architectural Glass — Large Format Windows & Glass Systems',
    description:
      'Custom large-format windows, sliding glass doors, folding glass walls, and entry doors.',
    images: ['/images/hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://formaglass.com' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'FORMA Architectural Glass',
  description: 'Supplier of large-format architectural windows, sliding glass door systems, folding glass walls, and entry doors for residential and commercial projects.',
  url: 'https://formaglass.com',
  telephone: '+16045550192',
  email: 'hello@formaglass.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vancouver',
    addressRegion: 'BC',
    addressCountry: 'CA',
  },
  areaServed: ['Canada', 'United States'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Architectural Glass Systems',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Large Format Windows' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Sliding Glass Door Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Folding Glass Walls' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Architectural Entry Doors' } },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
