'use client'

import { useState } from 'react'
import { Palette, Sparkles, Download, Copy } from 'lucide-react'
import AIGirlfriendWidget from '@/components/AIGirlfriendWidget'

export default function ArtGenerationHero() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [provider, setProvider] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a description for your artwork')
      return
    }

    setIsGenerating(true)
    setError(null)
    
    try {
      const response = await fetch('/api/generate-art', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate artwork')
      }

      const data = await response.json()
      setGeneratedImage(data.imageUrl)
      setProvider(data.provider)
    } catch (err) {
      setError('Failed to generate artwork. Please try again.')
      console.error('Error generating artwork:', err)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a')
      link.href = generatedImage
      link.download = 'ai-generated-art.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt)
  }

  return (
    <div className="relative min-h-screen overflow-hidden pt-20" style={{background: '#FFFDF9'}}>
      {/* Premium gradient background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div 
          className="absolute -inset-4 rounded-full blur-3xl" 
          style={{background: 'linear-gradient(to right, #FF6B95, #8B5FBF, #4ECDC4)'}}
        ></div>
      </div>
      
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main heading */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{background: '#F5F1EA'}}>
              <Palette className="w-3 h-3 text-purple-500" />
              <span className="text-sm font-medium" style={{color: '#111111'}}>AI Art Generator</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6" style={{color: '#111111'}}>
              Create stunning digital<br />artwork with AI
            </h1>
            
            <p className="text-lg max-w-2xl mx-auto mb-8" style={{color: '#666666'}}>
              Transform your imagination into breathtaking digital art. Generate masterpieces in impressionist, abstract, realism, and countless other artistic styles.
            </p>
          </div>

          {/* Generator interface */}
          <div className="max-w-4xl mx-auto mb-12">
            <div 
              className="relative border-2 border-dashed border-gray-300 rounded-3xl p-8 md:p-12 bg-white/50 backdrop-blur-sm"
              style={{minHeight: '400px'}}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Input Section */}
                <div>
                  <h2 className="text-xl font-semibold mb-4" style={{color: '#111111'}}>
                    Describe your artwork
                  </h2>
                  
                  <div className="relative mb-6">
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="A vibrant abstract painting with flowing colors of blue and gold, reminiscent of Van Gogh's swirling style, featuring a serene landscape at sunset..."
                      className="w-full h-32 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none resize-none transition-colors"
                      style={{background: '#FFFFFF', color: '#111111'}}
                    />
                    <div className="absolute bottom-3 right-3 flex items-center gap-2">
                      <button
                        onClick={handleCopyPrompt}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Copy prompt"
                      >
                        <Copy className="w-4 h-4 text-gray-500" />
                      </button>
                      <span className="text-xs text-gray-400">{prompt.length}/500</span>
                    </div>
                  </div>

                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating || !prompt.trim()}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Creating Masterpiece...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Generate Art
                      </>
                    )}
                  </button>

                  {error && (
                    <div className="mt-4 p-3 bg-red-100 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}
                </div>

                {/* Preview Section */}
                <div>
                  <h2 className="text-xl font-semibold mb-4" style={{color: '#111111'}}>
                    Generated Artwork
                  </h2>
                  
                  <div className="aspect-square rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden" style={{background: '#FFFFFF'}}>
                    {generatedImage ? (
                      <>
                        <img 
                          src={generatedImage} 
                          alt="Generated artwork" 
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <button
                          onClick={handleDownload}
                          className="absolute top-4 right-4 p-3 bg-black/80 text-white rounded-full hover:bg-black transition-colors"
                          title="Download artwork"
                        >
                          <Download className="w-5 h-5" />
                        </button>
                      </>
                    ) : (
                      <div className="text-center">
                        <Palette className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 mb-2">Your AI-generated artwork will appear here</p>
                        <p className="text-sm text-gray-400">Express your creativity with words</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Art style examples */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-sm mb-6" style={{color: '#666666'}}>
              Try these artistic styles
            </p>
            
            <div className="flex justify-center gap-4 flex-wrap">
              {[
                { style: 'Impressionist', color: '#FFB5A7' },
                { style: 'Abstract', color: '#A8E6CF' },
                { style: 'Renaissance', color: '#DCEDC1' },
                { style: 'Surreal', color: '#FFE156' },
                { style: 'Minimalist', color: '#B4A7D6' },
                { style: 'Pop Art', color: '#FFD93D' }
              ].map((item) => (
                <button
                  key={item.style}
                  onClick={() => setPrompt(`A beautiful ${item.style.toLowerCase()} painting of `)}
                  className="px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-transform cursor-pointer border-2 border-gray-200 hover:border-gray-300"
                  style={{background: item.color, color: '#111111'}}
                >
                  {item.style}
                </button>
              ))}
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 text-sm flex-wrap" style={{color: '#666666'}}>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
              <span>Multiple art styles</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
              <span>High-resolution output</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              <span>Instant generation</span>
            </div>
          </div>
        </div>
      </main>
      
      <AIGirlfriendWidget />
    </div>
  )
}