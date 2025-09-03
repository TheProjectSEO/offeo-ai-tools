'use client'

import { useState } from 'react'
import { toolCategories, aiTools } from '@/lib/tools-data'
import ToolCard from './ToolCard'

export default function ToolsDirectory() {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const filteredTools = activeCategory === 'all' 
    ? aiTools 
    : aiTools.filter(tool => tool.category === activeCategory)

  const categories = [
    { id: 'all', name: 'All Tools', count: aiTools.length },
    ...toolCategories.map(cat => ({ 
      id: cat.id, 
      name: cat.name, 
      count: cat.tools.length 
    }))
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16" style={{background: '#F5F1EA'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4" style={{color: 'var(--text-primary)'}}>
            Complete AI Tools Directory
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            Browse our comprehensive collection of AI tools organized by category. Find the perfect tool for your creative needs.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
        
        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredTools.map((tool) => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              size="medium"
              showFeatures={true}
            />
          ))}
        </div>
        
        {/* Coming Soon Banner */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-4 rounded-2xl" style={{background: 'var(--bg-primary)'}}>
            <h3 className="text-lg font-medium mb-2" style={{color: 'var(--text-primary)'}}>
              More tools coming soon
            </h3>
            <p className="text-sm mb-4" style={{color: '#666666'}}>
              We&apos;re constantly adding new AI tools to help boost your creativity and productivity.
            </p>
            <button className="px-6 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
              Get notified of new tools
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}