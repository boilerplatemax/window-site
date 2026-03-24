import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import ProductCategoryGrid from '@/components/ProductCategoryGrid'
import FeatureSection from '@/components/FeatureSection'
import FeaturedProduct from '@/components/FeaturedProduct'
import ProjectsPreview from '@/components/ProjectsPreview'
import ProductHighlights from '@/components/ProductHighlights'
import TrustSection from '@/components/TrustSection'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'SIGNATURESPAN — Light. Space. Structure.',
  description:
    'Large-format windows, sliding glass systems, folding glass walls, and architectural entry doors for residential and commercial projects across North America.',
  openGraph: {
    title: 'SIGNATURESPAN — Light. Space. Structure.',
    description:
      'Large-format windows, sliding glass systems, folding glass walls, and architectural entry doors.',
    url: 'https://signaturespan.com',
  },
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — full viewport, dark */}
      <HeroSection />

      {/* 2. Product category grid — 2×2 image cards */}
      <ProductCategoryGrid />

      {/* 3. Brand manifesto — editorial text, warm white */}
      <FeatureSection variant="manifesto" />

      {/* 4. Value propositions — 4 columns, dark bg */}
      <FeatureSection variant="values" />

      {/* 5. Featured product (Lift & Slide) — light bg, specs table */}
      <FeaturedProduct />

      {/* 6. Featured project — dark bg, hero image */}
      <ProjectsPreview />

      {/* 7. Product highlights strip — 3 cards, light bg */}
      <ProductHighlights />

      {/* 8. Trust signals — stats, testimonials, certifications */}
      <TrustSection />

      {/* 9. CTA banner — dark bg, conversion close */}
      <CTASection />
    </>
  )
}
