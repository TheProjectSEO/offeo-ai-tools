'use client'

import { AITool } from '@/types/tools'
import * as LucideIcons from 'lucide-react'

interface ToolCardProps {
  tool: AITool
  size?: 'small' | 'medium' | 'large'
  showFeatures?: boolean
}

export default function ToolCard({ tool, size = 'medium', showFeatures = true }: ToolCardProps) {
  const isExternal = tool.href?.startsWith('http')
  
  const sizeClasses = {
    small: 'p-3 sm:p-4',
    medium: 'p-4 sm:p-6', 
    large: 'p-6 sm:p-8'
  }
  
  const iconSizes = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-20 h-20'
  }

  const lucideIconSizes = {
    small: 24,
    medium: 32,
    large: 40
  }

  // Get the Lucide icon component
  const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[tool.icon] || LucideIcons.CircleHelp

  const handleClick = () => {
    if (tool.href) {
      if (isExternal) {
        window.open(tool.href, '_blank', 'noopener,noreferrer')
      } else {
        window.location.href = tool.href
      }
    }
  }

  return (
    <div 
      className={`rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center cursor-pointer relative ${sizeClasses[size]}`}
      style={{background: 'var(--accent-warm)'}}
      onClick={handleClick}
    >
      {/* Partner Badge */}
      {tool.isPartner && (
        <div className="absolute -top-2 -right-2 px-2 py-1 bg-black text-white text-xs font-medium rounded-full">
          Partner
        </div>
      )}
      
      {/* Status Badge */}
      {tool.status !== 'available' && (
        <div className="absolute -top-2 -left-2 px-2 py-1 text-xs font-medium rounded-full"
             style={{
               background: tool.status === 'beta' ? 'var(--accent-blue)' : 'var(--accent-coral)',
               color: 'var(--text-primary)'
             }}>
          {tool.status === 'coming-soon' ? 'Soon' : 'Beta'}
        </div>
      )}

      <div className="mb-6">
        <div 
          className={`${iconSizes[size]} rounded-2xl flex items-center justify-center mb-4 mx-auto`}
          style={{background: tool.gradient}}
        >
          <IconComponent 
            size={lucideIconSizes[size]} 
            className="text-white drop-shadow-sm" 
          />
        </div>
        <h3 className="text-lg sm:text-xl font-medium mb-2" style={{color: 'var(--text-primary)'}}>{tool.name}</h3>
        <p className="text-sm mb-4" style={{color: '#666666'}}>
          {tool.shortDescription || tool.description}
        </p>
      </div>
      
      {showFeatures && tool.features.length > 0 && (
        <ul className="space-y-2 mb-6 text-left">
          {tool.features.slice(0, 4).map((feature, index) => (
            <li key={index} className="text-sm flex items-center" style={{color: '#666666'}}>
              <div className="w-1.5 h-1.5 bg-black rounded-full mr-3 flex-shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      <div className="mt-auto">
        {tool.status === 'available' ? (
          <button className="w-full px-4 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
            {tool.isPartner ? 'Try Now' : 'Use Tool'}
            {isExternal && (
              <span className="ml-1">↗</span>
            )}
          </button>
        ) : (
          <button className="w-full px-4 py-3 text-sm font-medium rounded-full transition-colors opacity-60 cursor-not-allowed"
                  style={{background: '#E5E7EB', color: 'var(--text-primary)'}}>
            {tool.status === 'beta' ? 'Join Beta' : 'Coming Soon'}
          </button>
        )}
      </div>
      
      {tool.isPartner && tool.partnerInfo && (
        <div className="mt-3 text-xs" style={{color: '#666666'}}>
          by {tool.partnerInfo.company}
        </div>
      )}
    </div>
  )
}