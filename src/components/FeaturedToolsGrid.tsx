import { featuredTools } from '@/lib/tools-data'
import ToolCard from './ToolCard'

export default function FeaturedToolsGrid() {
  return (
    <section className="py-8 sm:py-12 md:py-16" style={{background: 'var(--bg-primary)'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block px-3 py-1 bg-black text-white text-xs font-medium rounded-full mb-4">
            FEATURED TOOLS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4" style={{color: 'var(--text-primary)'}}>
            Start with these popular AI tools
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            Our most-used AI tools for content creation, image editing, and automation. Perfect for getting started.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {featuredTools.map((tool) => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              size="medium"
              showFeatures={true}
            />
          ))}
        </div>
        
        <div className="text-center">
          <button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
            View all tools
          </button>
        </div>
      </div>
    </section>
  )
}