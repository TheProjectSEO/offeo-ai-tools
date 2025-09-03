import Header from '@/components/Header'
import HeroToolsShowcase from '@/components/HeroToolsShowcase'
import FeaturedToolsGrid from '@/components/FeaturedToolsGrid'
import ToolsDirectory from '@/components/ToolsDirectory'
import BubioPartnership from '@/components/BubioPartnership'
import BubioCharacterCards from '@/components/BubioCharacterCards'
import Toolkit from '@/components/Toolkit'
import Testimonials from '@/components/Testimonials'
import AITools from '@/components/AITools'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroToolsShowcase />
      <FeaturedToolsGrid />
      <ToolsDirectory />
      <BubioPartnership />
      <BubioCharacterCards />
      <Toolkit />
      <Testimonials />
      <AITools />
      <Footer />
    </div>
  );
}
