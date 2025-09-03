'use client'

import { useState } from 'react'
import { BookOpen, Sparkles, Download, Copy } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function StoryGenerationPage() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedStory, setGeneratedStory] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [provider, setProvider] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a story idea or prompt')
      return
    }

    setIsGenerating(true)
    setError(null)
    
    try {
      const response = await fetch('/api/generate-story', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate story')
      }

      const data = await response.json()
      setGeneratedStory(data.story)
      setProvider(data.provider)
    } catch (err) {
      setError('Failed to generate story. Please try again.')
      console.error('Error generating story:', err)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleCopyStory = () => {
    if (generatedStory) {
      navigator.clipboard.writeText(generatedStory)
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
            <span className="text-sm font-medium" style={{color: 'var(--text-primary)'}}>AI Story Generator</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6" style={{color: 'var(--text-primary)'}}>
            AI Story Generator
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12" style={{color: '#666666'}}>
            Create captivating stories with AI. From short tales to epic adventures, generate compelling narratives for any genre or purpose.
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
                  Describe your story idea
                </h2>
                
                <div className="relative mb-6">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="A young wizard discovers a magical portal in their grandmother's attic that leads to..."
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
                      Generate Story
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
                  Generated Story
                </h2>
                
                <div className="min-h-96 rounded-xl border-2 border-dashed border-gray-300 flex items-start justify-start p-4 relative" style={{background: '#FFFFFF'}}>
                  {generatedStory ? (
                    <>
                      <div className="w-full">
                        <div className="text-sm text-gray-900 whitespace-pre-wrap leading-relaxed">
                          {generatedStory}
                        </div>
                      </div>
                      <button
                        onClick={handleCopyStory}
                        className="absolute top-4 right-4 p-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
                        title="Copy story"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <div className="w-full text-center flex flex-col items-center justify-center h-full">
                      <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">Your generated story will appear here</p>
                    </div>
                  )}
                </div>
                
                {/* Provider info below the story */}
                {generatedStory && provider && (
                  <div className="mt-3 text-center">
                    <span className="text-xs text-gray-500">
                      Generated with {provider.charAt(0).toUpperCase() + provider.slice(1)}
                    </span>
                  </div>
                )}
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
              Craft Amazing Stories with AI
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
              Our AI story generator creates engaging narratives across all genres. Perfect for writers, content creators, and storytellers looking for inspiration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(135deg, #6366f1, #8b5cf6)'}}>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Creative AI</h3>
              <p className="text-sm" style={{color: '#666666'}}>Advanced AI models for compelling storytelling</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(135deg, #10b981, #059669)'}}>
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Multiple Genres</h3>
              <p className="text-sm" style={{color: '#666666'}}>Fantasy, sci-fi, romance, mystery, and more</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(135deg, #f59e0b, #d97706)'}}>
                <Copy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Instant Results</h3>
              <p className="text-sm" style={{color: '#666666'}}>Generate stories in seconds</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}