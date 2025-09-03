import { Metadata } from 'next'
import Header from '@/components/Header'
import ImageUpscaleHero from '@/components/ImageUpscale/ImageUpscaleHero'
import HowToSteps from '@/components/ImageUpscale/HowToSteps'
import PopularTools from '@/components/ImageUpscale/PopularTools'
import InspirationShowcase from '@/components/ImageUpscale/InspirationShowcase'
import QualityComparison from '@/components/ImageUpscale/QualityComparison'
import TechnicalSpecs from '@/components/ImageUpscale/TechnicalSpecs'
import AllFeatures from '@/components/ImageUpscale/AllFeatures'
import FAQ from '@/components/ImageUpscale/FAQ'
import AppDownload from '@/components/ImageUpscale/AppDownload'
import ExploreMoreTools from '@/components/ImageUpscale/ExploreMoreTools'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI Image Upscale - Enhance Resolution & Quality | Offeo',
  description: 'Enhance image quality with AI upscaling. Increase resolution by 4x while preserving details. Perfect for photographers, designers, and print-ready images.',
  keywords: 'AI image upscale, enhance image quality, increase resolution, image enhancement, photo upscaling, AI enhancement, high resolution images',
  openGraph: {
    title: 'AI Image Upscale - Enhance Resolution & Quality | Offeo',
    description: 'Enhance image quality with AI upscaling. Increase resolution by 4x while preserving details.',
    type: 'website',
    url: 'https://offeo.com/image-upscale',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Image Upscale - Enhance Resolution & Quality | Offeo',
    description: 'Enhance image quality with AI upscaling. Increase resolution by 4x while preserving details.',
  }
}

export default function ImageUpscalePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ImageUpscaleHero />
      <HowToSteps />
      <PopularTools />
      <InspirationShowcase />
      <QualityComparison />
      <TechnicalSpecs />
      <AllFeatures />
      <FAQ />
      <AppDownload />
      <ExploreMoreTools />
      <Footer />
    </div>
  );
}