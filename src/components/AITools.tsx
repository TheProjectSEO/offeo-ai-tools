import { aiTools } from '@/lib/tools-data'
import ToolCard from './ToolCard'

export default function AITools() {
  // Show a selection of available tools (excluding coming soon)
  const availableTools = aiTools.filter(tool => tool.status === 'available').slice(0, 6)

  return (
    <section className="py-8 sm:py-12 md:py-16" style={{background: 'var(--bg-primary)'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4" style={{color: 'var(--text-primary)'}}>
            Discover more AI tools
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            Expand your creative toolkit with our growing collection of AI-powered tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {availableTools.map((tool) => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              size="medium"
              showFeatures={false}
            />
          ))}
        </div>
        
        <div className="text-center">
          <button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
            See all {aiTools.length} tools
          </button>
        </div>
      </div>
    </section>
  )
}