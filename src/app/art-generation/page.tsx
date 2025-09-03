import { Metadata } from 'next'
import Header from '@/components/Header'
import ArtGenerationHero from '@/components/ArtGeneration/ArtGenerationHero'
import HowToSteps from '@/components/ArtGeneration/HowToSteps'
import PopularTools from '@/components/ArtGeneration/PopularTools'
import InspirationShowcase from '@/components/ArtGeneration/InspirationShowcase'
import ArtStylesShowcase from '@/components/ArtGeneration/ArtStylesShowcase'
import CreativeProcess from '@/components/ArtGeneration/CreativeProcess'
import AllFeatures from '@/components/ArtGeneration/AllFeatures'
import FAQ from '@/components/ArtGeneration/FAQ'
import AppDownload from '@/components/ArtGeneration/AppDownload'
import ExploreMoreTools from '@/components/ArtGeneration/ExploreMoreTools'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI Art Generator - Create Stunning Digital Artwork | Offeo',
  description: 'Transform your ideas into breathtaking digital art with our AI art generator. Create masterpieces in impressionist, abstract, realism and more artistic styles. Perfect for artists and creatives.',
  keywords: 'AI art generator, digital art creation, artificial intelligence art, art styles, creative AI, digital masterpieces, artistic expression',
  openGraph: {
    title: 'AI Art Generator - Create Stunning Digital Artwork | Offeo',
    description: 'Transform your ideas into breathtaking digital art with our AI art generator. Create masterpieces in multiple artistic styles.',
    type: 'website',
    url: 'https://offeo.com/art-generation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Art Generator - Create Stunning Digital Artwork | Offeo',
    description: 'Transform your ideas into breathtaking digital art with our AI art generator. Create masterpieces in multiple artistic styles.',
  }
}

export default function ArtGenerationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ArtGenerationHero />
      <HowToSteps />
      <PopularTools />
      <InspirationShowcase />
      <ArtStylesShowcase />
      <CreativeProcess />
      <AllFeatures />
      <FAQ />
      <AppDownload />
      <ExploreMoreTools />
      <Footer />
    </div>
  );
}
