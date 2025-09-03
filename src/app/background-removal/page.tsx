import Header from '@/components/Header'
import BackgroundRemovalHero from '@/components/BackgroundRemoval/BackgroundRemovalHero'
import HowToSteps from '@/components/BackgroundRemoval/HowToSteps'
import PopularTools from '@/components/BackgroundRemoval/PopularTools'
import InspirationShowcase from '@/components/BackgroundRemoval/InspirationShowcase'
import ProductPhotography from '@/components/BackgroundRemoval/ProductPhotography'
import EditingWithoutHassle from '@/components/BackgroundRemoval/EditingWithoutHassle'
import AllFeatures from '@/components/BackgroundRemoval/AllFeatures'
import FAQ from '@/components/BackgroundRemoval/FAQ'
import AppDownload from '@/components/BackgroundRemoval/AppDownload'
import ExploreMoreTools from '@/components/BackgroundRemoval/ExploreMoreTools'
import Footer from '@/components/Footer'

export default function BackgroundRemovalPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <BackgroundRemovalHero />
      <HowToSteps />
      <PopularTools />
      <InspirationShowcase />
      <ProductPhotography />
      <EditingWithoutHassle />
      <AllFeatures />
      <FAQ />
      <AppDownload />
      <ExploreMoreTools />
      <Footer />
    </div>
  );
}