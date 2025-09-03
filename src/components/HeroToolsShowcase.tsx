'use client'

import { featuredTools } from '@/lib/tools-data'
import { Scissors, Palette, PenTool, MessageCircle } from 'lucide-react'

const getIcon = (iconName: string) => {
  const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    'Scissors': Scissors,
    'Palette': Palette,
    'PenTool': PenTool,
    'MessageCircle': MessageCircle
  }
  
  const IconComponent = icons[iconName]
  return IconComponent ? <IconComponent size={24} className="text-white" /> : <div className="w-6 h-6 bg-white/20 rounded"></div>
}

export default function HeroToolsShowcase() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{background: 'var(--bg-primary)'}}>
      {/* Premium gradient background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute -inset-4 rounded-full blur-3xl" 
          style={{background: 'linear-gradient(to right, var(--accent-coral), var(--accent-blue))'}}
        ></div>
      </div>
      
      <main className="relative z-10 px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-20 md:pt-24 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left side - Tools showcase grid */}
            <div className="relative">
              {/* Floating decorative elements */}
              <div className="absolute -top-8 -left-4 w-24 h-32 rounded-2xl shadow-lg hidden md:block" style={{background: 'var(--accent-warm)', transform: 'rotate(-15deg)'}}></div>
              <div className="absolute top-16 -right-8 w-20 h-24 rounded-xl shadow-lg hidden md:block" style={{background: 'linear-gradient(135deg, var(--accent-coral), var(--accent-blue))', transform: 'rotate(12deg)'}}></div>
              
              <div className="relative">
                {/* Main tools showcase */}
                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                  {featuredTools.slice(0, 4).map((tool, index) => (
                    <div 
                      key={tool.id}
                      className={`rounded-2xl p-4 shadow-lg text-center cursor-pointer hover:scale-105 transition-all duration-300 ${
                        index === 1 ? 'mt-6' : index === 2 ? '-mt-6' : ''
                      }`}
                      style={{background: 'var(--accent-warm)'}}
                    >
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-auto text-lg"
                        style={{background: tool.gradient}}
                      >
                        {getIcon(tool.icon)}
                      </div>
                      <div className="text-xs font-medium mb-1" style={{color: 'var(--text-primary)'}}>
                        {tool.name}
                      </div>
                      <div className="text-xs" style={{color: '#666666'}}>
                        {tool.shortDescription}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating indicators */}
              <div className="absolute -top-2 right-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg" style={{background: '#111111'}}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="absolute bottom-4 -left-2">
                <div className="px-3 py-1 bg-black text-white text-xs rounded-full">
                  {featuredTools.length}+ AI tools
                </div>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="w-12 h-8 rounded opacity-60" style={{background: '#111111'}}></div>
                <div className="w-16 h-8 rounded opacity-60" style={{background: '#111111'}}></div>
                <div className="w-14 h-8 rounded opacity-60" style={{background: '#111111'}}></div>
              </div>
            </div>
            
            {/* Right side - Main content */}
            <div className="text-center md:text-left order-first md:order-last">
              <div className="inline-block px-3 py-1 bg-black text-white text-xs font-medium rounded-full mb-6">
                AI TOOLS DIRECTORY
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6" style={{color: 'var(--text-primary)'}}>
                Explore AI tools that boost your creativity
              </h1>
              
              <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0" style={{color: 'var(--text-primary)', opacity: '0.7'}}>
                Discover powerful AI tools for image editing, content creation, and automation. All in one place, ready to use.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="btn-primary">
                  Explore all tools
                </button>
                <button className="btn-secondary">
                  Try background removal
                </button>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-4 mt-12">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-pink-400 to-pink-600"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-green-400 to-green-600"></div>
                </div>
                <div className="text-sm" style={{color: '#666666'}}>
                  <span className="font-medium" style={{color: '#111111'}}>Trusted</span> by creative professionals
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}