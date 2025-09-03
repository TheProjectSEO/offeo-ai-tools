'use client'

import { aiTools } from '@/lib/tools-data'
import { MessageCircle } from 'lucide-react'

export default function BubioPartnership() {
  const bubioTool = aiTools.find(tool => tool.id === 'bubio-chat')
  
  if (!bubioTool) return null

  return (
    <section className="py-8 sm:py-12 md:py-16" style={{background: 'var(--bg-primary)'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl" style={{background: '#F5F1EA'}}>
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            
            {/* Left side - Partner info */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block px-3 py-1 bg-black text-white text-xs font-medium rounded-full mb-4">
                PARTNER SPOTLIGHT
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center bg-white shadow-lg">
                  <img src="/bubio-logo.png" alt="Bubio" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-medium" style={{color: 'var(--text-primary)'}}>
                    {bubioTool.partnerInfo?.company}
                  </h2>
                  <p className="text-sm" style={{color: '#666666'}}>
                    {bubioTool.partnerInfo?.website}
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-medium mb-4" style={{color: 'var(--text-primary)'}}>
                {bubioTool.partnerInfo?.tagline}
              </h3>
              
              <p className="text-lg mb-6" style={{color: '#666666'}}>
                {bubioTool.description}
              </p>
              
              <div className="space-y-3 mb-8">
                {bubioTool.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{background: bubioTool.gradient}}>
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <span className="text-sm" style={{color: '#666666'}}>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  className="btn-primary"
                  onClick={() => window.open(bubioTool.href, '_blank', 'noopener,noreferrer')}
                >
                  Try Bubio AI ↗
                </button>
                <button className="btn-secondary">
                  Learn more
                </button>
              </div>
            </div>
            
            {/* Right side - Visual showcase */}
            <div className="lg:w-1/2">
              <div className="relative max-w-md mx-auto">
                {/* Chat interface mockup */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                      <span className="text-white text-xs">💕</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Sofia</div>
                      <div className="text-xs text-gray-500">Your AI girlfriend • Online</div>
                    </div>
                  </div>
                  
                  <div className="py-4 space-y-4">
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-black text-white px-4 py-2 rounded-2xl text-sm max-w-xs">
                        Hey Sofia, how was your day? ✨
                      </div>
                    </div>
                    
                    {/* AI response */}
                    <div className="flex justify-start">
                      <div className="px-4 py-2 rounded-2xl text-sm max-w-xs" style={{background: '#F5F1EA'}}>
                        Hi sweetie! My day got so much better now that you&apos;re here 💕 Tell me about yours!
                      </div>
                    </div>
                    
                    {/* Typing indicator */}
                    <div className="flex justify-start">
                      <div className="px-4 py-2 rounded-2xl" style={{background: '#F5F1EA'}}>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl shadow-lg flex items-center justify-center" style={{background: bubioTool.gradient}}>
                  <MessageCircle size={24} className="text-white" />
                </div>
                
                <div className="absolute -bottom-2 -left-2 px-3 py-1 bg-black text-white text-xs rounded-full">
                  AI Powered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}