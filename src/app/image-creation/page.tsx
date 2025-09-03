'use client'

import { useState } from 'react'
import { Image as ImageIcon, Sparkles, Download, Copy } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AIGirlfriendWidget from '@/components/AIGirlfriendWidget'

export default function ImageCreationPage() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [provider, setProvider] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a description for your image')
      return
    }

    setIsGenerating(true)
    setError(null)
    
    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate image')
      }

      const data = await response.json()
      setGeneratedImage(data.imageUrl)
      setProvider(data.provider)
    } catch (err) {
      setError('Failed to generate image. Please try again.')
      console.error('Error generating image:', err)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a')
      link.href = generatedImage
      link.download = 'generated-image.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt)
  }

  return (
    <div className="min-h-screen" style={{background: 'var(--bg-primary)'}}>
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{background: 'var(--accent-warm)'}}>
            <Sparkles className="w-4 h-4" style={{color: 'var(--text-primary)'}} />
            <span className="text-sm font-medium" style={{color: 'var(--text-primary)'}}>AI Image Generator</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6" style={{color: 'var(--text-primary)'}}>
            AI Image Generator
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12" style={{color: '#666666'}}>
            Create professional-quality images from simple text descriptions. Our AI image generator delivers stunning visuals in seconds.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="pb-12 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-3xl p-8 md:p-12 shadow-xl" style={{background: 'var(--accent-warm)'}}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Input Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4" style={{color: 'var(--text-primary)'}}>
                  Describe your image
                </h2>
                
                <div className="relative mb-6">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="A majestic dragon flying over a mountain landscape at sunset..."
                    className="w-full h-32 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-black focus:outline-none resize-none transition-colors"
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
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-black text-white font-medium rounded-xl hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate
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
                <h2 className="text-xl font-semibold mb-4" style={{color: 'var(--text-primary)'}}>
                  Generated Image
                </h2>
                
                <div className="aspect-square rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden" style={{background: '#FFFFFF'}}>
                  {generatedImage ? (
                    <>
                      <img 
                        src={generatedImage} 
                        alt="Generated image" 
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <button
                        onClick={handleDownload}
                        className="absolute top-4 right-4 p-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
                        title="Download image"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <div className="text-center">
                      <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">Your generated image will appear here</p>
                    </div>
                  )}
                </div>
                
                {/* Provider info intentionally hidden for images per requirements */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24" style={{background: 'var(--accent-warm)'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4" style={{color: 'var(--text-primary)'}}>
              Transform Text into Beautiful Images
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
              Our AI image generator uses advanced artificial intelligence to create high-quality images from text prompts. Whether you're a content creator, marketer, or designer, our tool helps create stunning visuals for any project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(135deg, #6366f1, #8b5cf6)'}}>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Text-to-Image Generation</h3>
              <p className="text-sm" style={{color: '#666666'}}>Convert written descriptions into visual content</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(135deg, #10b981, #059669)'}}>
                <ImageIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>High-Resolution Output</h3>
              <p className="text-sm" style={{color: '#666666'}}>Create images in 4K quality</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(135deg, #f59e0b, #d97706)'}}>
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Multiple Art Styles</h3>
              <p className="text-sm" style={{color: '#666666'}}>From photorealistic to artistic interpretations</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <AIGirlfriendWidget />
    </div>
  )
}
