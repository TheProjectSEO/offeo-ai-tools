'use client'

import { useState } from 'react'
import { Hash, Sparkles, Download, Copy } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CaptionGenerationPage() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCaptions, setGeneratedCaptions] = useState<string[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [provider, setProvider] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please describe your content or post')
      return
    }

    setIsGenerating(true)
    setError(null)
    
    try {
      const response = await fetch('/api/generate-caption', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate captions')
      }

      const data = await response.json()
      setGeneratedCaptions(data.captions)
      setProvider(data.provider)
    } catch (err) {
      setError('Failed to generate captions. Please try again.')
      console.error('Error generating captions:', err)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleCopyCaption = (caption: string) => {
    navigator.clipboard.writeText(caption)
  }

  const handleCopyAll = () => {
    if (generatedCaptions) {
      navigator.clipboard.writeText(generatedCaptions.join('\n\n'))
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
            <span className="text-sm font-medium" style={{color: 'var(--text-primary)'}}>AI Caption Generator</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6" style={{color: 'var(--text-primary)'}}>
            AI Caption Generator
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12" style={{color: '#666666'}}>
            Create engaging social media captions with hashtags. Perfect for Instagram, Facebook, Twitter, and other platforms to boost your engagement.
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
                  Describe your post or content
                </h2>
                
                <div className="relative mb-6">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="A photo of delicious homemade pasta with fresh basil and tomatoes for a food blog..."
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
                      Generate Captions
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
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold" style={{color: 'var(--text-primary)'}}>
                    Generated Captions
                  </h2>
                  {generatedCaptions && (
                    <button
                      onClick={handleCopyAll}
                      className="p-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors text-xs"
                      title="Copy all captions"
                    >
                      Copy All
                    </button>
                  )}
                </div>
                
                <div className="min-h-96 rounded-xl border-2 border-dashed border-gray-300 flex items-start justify-start p-4 relative overflow-auto" style={{background: '#FFFFFF'}}>
                  {generatedCaptions && generatedCaptions.length > 0 ? (
                    <div className="w-full space-y-4">
                      {generatedCaptions.map((caption, index) => (
                        <div key={index} className="group p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <span className="text-xs text-gray-500 font-medium">Caption {index + 1}</span>
                            <button
                              onClick={() => handleCopyCaption(caption)}
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                              title="Copy caption"
                            >
                              <Copy className="w-4 h-4 text-gray-500" />
                            </button>
                          </div>
                          <p className="text-sm text-gray-900 whitespace-pre-wrap leading-relaxed">{caption}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="w-full text-center flex flex-col items-center justify-center h-full">
                      <Hash className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">Your generated captions will appear here</p>
                    </div>
                  )}
                </div>
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
              Boost Your Social Media Engagement
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
              Our AI caption generator creates engaging social media captions with relevant hashtags. Increase your reach and engagement across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(135deg, #6366f1, #8b5cf6)'}}>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Engaging Content</h3>
              <p className="text-sm" style={{color: '#666666'}}>AI-powered captions that drive engagement</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(135deg, #10b981, #059669)'}}>
                <Hash className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Smart Hashtags</h3>
              <p className="text-sm" style={{color: '#666666'}}>Relevant hashtags for maximum reach</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(135deg, #f59e0b, #d97706)'}}>
                <Copy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Multi-Platform</h3>
              <p className="text-sm" style={{color: '#666666'}}>Perfect for all social media platforms</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}