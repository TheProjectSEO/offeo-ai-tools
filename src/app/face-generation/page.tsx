'use client'

import { useState } from 'react'
import { User, Sparkles, Download, Copy, ChevronDown, ChevronUp } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AIGirlfriendWidget from '@/components/AIGirlfriendWidget'

export default function FaceGenerationPage() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [provider, setProvider] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a description for your AI face')
      return
    }

    setIsGenerating(true)
    setError(null)
    
    try {
      const response = await fetch('/api/generate-face', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate face')
      }

      const data = await response.json()
      setGeneratedImage(data.imageUrl)
      setProvider(data.provider)
    } catch (err) {
      setError('Failed to generate face. Please try again.')
      console.error('Error generating face:', err)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a')
      link.href = generatedImage
      link.download = 'generated-face.png'
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
      <section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{background: 'var(--accent-warm)'}}>
            <Sparkles className="w-4 h-4" style={{color: 'var(--text-primary)'}} />
            <span className="text-sm font-medium" style={{color: 'var(--text-primary)'}}>AI Face Generator</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-4" style={{color: 'var(--text-primary)'}}>
            AI Face Generator
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{color: '#666666'}}>
            Create unique human faces with AI technology. Perfect for character design, creative projects, game development, and digital art.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="pb-8 md:pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-3xl p-6 md:p-8 shadow-xl" style={{background: 'var(--accent-warm)'}}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Input Section */}
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                  Describe your AI face
                </h2>
                
                <div className="relative mb-4">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="A young woman with curly brown hair and green eyes, smiling softly, with natural lighting and warm skin tones..."
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
                      Creating Face...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate Face
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
                <h2 className="text-xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                  Generated Face
                </h2>
                
                <div className="aspect-square rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden" style={{background: '#FFFFFF'}}>
                  {generatedImage ? (
                    <>
                      <img 
                        src={generatedImage} 
                        alt="Generated face" 
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <button
                        onClick={handleDownload}
                        className="absolute top-4 right-4 p-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
                        title="Download face"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <div className="text-center">
                      <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">Your generated face will appear here</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 md:py-16" style={{background: 'var(--accent-warm)'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-3" style={{color: 'var(--text-primary)'}}>
              Creative Face Generation in Seconds
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
              Generate unique human faces with AI. Perfect for character design, game development, digital art, and creative projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{background: 'linear-gradient(135deg, #6366f1, #8b5cf6)'}}>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Advanced AI Technology</h3>
              <p className="text-sm" style={{color: '#666666'}}>Cutting-edge AI creates unique and realistic human faces</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{background: 'linear-gradient(135deg, #10b981, #059669)'}}>
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Character Design</h3>
              <p className="text-sm" style={{color: '#666666'}}>Perfect for games, stories, and creative projects</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{background: 'linear-gradient(135deg, #f59e0b, #d97706)'}}>
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Instant Download</h3>
              <p className="text-sm" style={{color: '#666666'}}>High-resolution faces ready for immediate use</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Feature 1: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                Realistic Face Creation
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Our AI face generator uses state-of-the-art neural networks to create photorealistic human faces from scratch. 
                Each generated face is unique and can be customized with specific features, expressions, and characteristics to match your creative vision.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Photorealistic facial features and textures</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Natural skin tones and lighting effects</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Diverse age ranges and ethnicities</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)'}}>
                <img 
                  src="/headshot-images/generated-headshot.png" 
                  alt="AI-generated realistic face example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div className="lg:order-2">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                Character Design & Gaming
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Perfect for game developers, digital artists, and storytellers who need unique character faces. 
                Generate NPCs, protagonists, or background characters with specific traits that fit your game world or narrative.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Game character and NPC creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Story and novel character visualization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Concept art and character sheets</span>
                </li>
              </ul>
            </div>
            <div className="lg:order-1 relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)'}}>
                <img 
                  src="/headshot-images/generated-headshot (2).png" 
                  alt="Character design face example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 3: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                Customizable Features & Styles
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Fine-tune every aspect of your generated face with detailed prompts. Control hair color and style, eye color, 
                facial expressions, age, ethnicity, and artistic style to create exactly the face you envision.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Hair color, texture, and styling options</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Eye color and facial expressions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Age, ethnicity, and artistic style control</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)'}}>
                <img 
                  src="/headshot-images/generated-headshot (3).png" 
                  alt="Customized AI face with unique features" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 4: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div className="lg:order-2">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                Digital Art & Creative Projects
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Enhance your digital art projects with unique AI-generated faces. Perfect for concept artists, illustrators, 
                and designers who need diverse human faces for their creative work and artistic compositions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Digital art and illustration reference</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Concept art and storyboarding</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Creative portfolio and showcase pieces</span>
                </li>
              </ul>
            </div>
            <div className="lg:order-1 relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #fef3c7, #fde68a)'}}>
                <img 
                  src="/headshot-images/generated-headshot (4).png" 
                  alt="Artistic AI-generated face for creative projects" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 5: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                High-Quality Output & Versatility
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Generate unlimited unique faces with consistent high quality. Each face is created with attention to detail, 
                proper proportions, and realistic features that work perfectly for any creative or commercial application.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>1024x1024 high-resolution output</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Unlimited unique face variations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Commercial and personal use ready</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #fce7f3, #fbcfe8)'}}>
                <img 
                  src="/headshot-images/generated-headshot (5).png" 
                  alt="High-quality AI face generation example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-8 md:py-16" style={{background: 'var(--accent-warm)'}}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6" style={{color: 'var(--text-primary)'}}>
              Advanced AI Face Generator
            </h2>
            
            <div className="space-y-4" style={{color: '#444444'}}>
              <p className="text-lg leading-relaxed">
                Our AI face generator represents the cutting edge of artificial intelligence in digital art and character creation. 
                Using advanced generative AI models trained on diverse datasets, this tool creates unique, photorealistic human faces 
                that are perfect for game development, digital art, storytelling, and creative projects of all kinds.
              </p>
              
              <h3 className="text-2xl font-semibold mt-6 mb-3" style={{color: 'var(--text-primary)'}}>
                Revolutionary Face Generation Technology
              </h3>
              <p className="leading-relaxed">
                Unlike traditional face generation methods, our AI creates completely original faces that don't exist in reality. 
                Each generated face is unique, with natural proportions, realistic skin textures, and authentic human features. 
                The technology understands facial anatomy, lighting principles, and artistic composition to produce consistently 
                high-quality results suitable for professional use.
              </p>
              
              <h3 className="text-2xl font-semibold mt-6 mb-3" style={{color: 'var(--text-primary)'}}>
                Creative Applications and Use Cases
              </h3>
              <p className="leading-relaxed">
                AI-generated faces have countless applications in creative industries. Game developers use them for NPCs and character 
                creation, digital artists incorporate them into artwork and illustrations, writers visualize their characters, and 
                designers create diverse human representations for projects. The faces work perfectly for concept art, storyboarding, 
                character sheets, and any project requiring unique human faces.
              </p>
              
              <h3 className="text-2xl font-semibold mt-6 mb-3" style={{color: 'var(--text-primary)'}}>
                Customization and Creative Control
              </h3>
              <p className="leading-relaxed">
                Generate faces with precise control over appearance characteristics through detailed text prompts. Specify age ranges, 
                ethnicities, hair colors and styles, eye colors, facial expressions, and artistic styles. The AI responds to complex 
                descriptions, allowing you to create faces that perfectly match your creative vision and project requirements.
              </p>
              
              <h3 className="text-2xl font-semibold mt-6 mb-3" style={{color: 'var(--text-primary)'}}>
                Quality and Technical Excellence
              </h3>
              <p className="leading-relaxed">
                Every generated face maintains professional quality with high resolution output suitable for both digital and print 
                applications. The AI ensures proper facial proportions, natural skin tones, realistic lighting effects, and 
                authentic human features. Results are immediately ready for use in professional projects, creative portfolios, 
                and commercial applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-3" style={{color: 'var(--text-primary)'}}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg" style={{color: '#666666'}}>
              Everything you need to know about AI face generation
            </p>
          </div>
          
          <div className="space-y-3">
            {[
              {
                question: "How realistic are AI-generated faces?",
                answer: "Our AI generates highly realistic faces that are virtually indistinguishable from real photography. The technology produces natural skin textures, authentic lighting, and professional-quality composition suitable for all creative applications."
              },
              {
                question: "What resolution are the generated faces?",
                answer: "All faces are generated in high resolution (1024x1024 pixels) suitable for professional use including digital art, game development, character design, and print applications."
              },
              {
                question: "Can I specify facial features and characteristics?",
                answer: "Yes, you can customize various aspects including age, ethnicity, hair color and style, eye color, facial expressions, and artistic style through detailed prompt descriptions to create faces that match your specific requirements."
              },
              {
                question: "How long does it take to generate a face?",
                answer: "AI face generation typically takes 10-30 seconds depending on server load. This is significantly faster than traditional character design processes while maintaining exceptional quality standards."
              },
              {
                question: "Are the faces suitable for commercial use?",
                answer: "Yes, our AI-generated faces are suitable for various commercial applications including game development, digital art, marketing materials, character design, and creative projects. The faces are original creations by our AI system."
              },
              {
                question: "Can I generate multiple variations of similar faces?",
                answer: "Yes, you can generate unlimited variations by running the same or modified prompts multiple times. This allows you to explore different expressions, angles, and characteristics to find the perfect face for your project."
              }
            ].map((faq, index) => (
              <div key={index} className="border rounded-xl overflow-hidden" style={{background: 'var(--accent-warm)', borderColor: '#e5e7eb'}}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 text-left flex justify-between items-center hover:bg-black/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold" style={{color: 'var(--text-primary)'}}>
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5" style={{color: 'var(--text-primary)'}} />
                  ) : (
                    <ChevronDown className="w-5 h-5" style={{color: 'var(--text-primary)'}} />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4">
                    <p style={{color: '#666666'}}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Linking Section */}
      <section className="py-8 md:py-16" style={{background: 'var(--accent-warm)'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-3" style={{color: 'var(--text-primary)'}}>
              Explore Related AI Tools
            </h2>
            <p className="text-lg" style={{color: '#666666'}}>
              Discover more AI-powered tools for your creative and professional needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/headshot-generation" className="group block p-4 rounded-2xl border hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-lg" style={{background: 'linear-gradient(135deg, #ffffff, #f8f9fa)', borderColor: '#d1d5db'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'}}>
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-primary)'}}>AI Headshot Generator</h3>
                <p className="text-sm mb-3" style={{color: '#666666'}}>Create professional business headshots and portraits</p>
                <div className="flex items-center" style={{color: 'var(--text-primary)'}}>
                  <span className="text-sm font-medium">AI Headshot Generator</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
            
            <a href="/character-generation" className="group block p-4 rounded-2xl border hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-lg" style={{background: 'linear-gradient(135deg, #ffffff, #f8f9fa)', borderColor: '#d1d5db'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #f59e0b, #d97706)'}}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-primary)'}}>AI Character Generator</h3>
                <p className="text-sm mb-3" style={{color: '#666666'}}>Design unique characters for creative projects</p>
                <div className="flex items-center" style={{color: 'var(--text-primary)'}}>
                  <span className="text-sm font-medium">AI Character Generator</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
            
            <a href="/logo-generation" className="group block p-4 rounded-2xl border hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-lg" style={{background: 'linear-gradient(135deg, #ffffff, #f8f9fa)', borderColor: '#d1d5db'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #eab308, #ca8a04)'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-primary)'}}>AI Logo Generator</h3>
                <p className="text-sm mb-3" style={{color: '#666666'}}>Create professional logos and brand identities</p>
                <div className="flex items-center" style={{color: 'var(--text-primary)'}}>
                  <span className="text-sm font-medium">AI Logo Generator</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
            
            <a href="/image-creation" className="group block p-4 rounded-2xl border hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-lg" style={{background: 'linear-gradient(135deg, #ffffff, #f8f9fa)', borderColor: '#d1d5db'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #ea580c, #dc2626)'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-primary)'}}>AI Image Generator</h3>
                <p className="text-sm mb-3" style={{color: '#666666'}}>Generate custom images from text descriptions</p>
                <div className="flex items-center" style={{color: 'var(--text-primary)'}}>
                  <span className="text-sm font-medium">AI Image Generator</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
            
            <a href="/art-generation" className="group block p-4 rounded-2xl border hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-lg" style={{background: 'linear-gradient(135deg, #ffffff, #f8f9fa)', borderColor: '#d1d5db'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-yellow-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #f59e0b, #eab308)'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-primary)'}}>AI Art Generator</h3>
                <p className="text-sm mb-3" style={{color: '#666666'}}>Create artistic masterpieces with AI</p>
                <div className="flex items-center" style={{color: 'var(--text-primary)'}}>
                  <span className="text-sm font-medium">AI Art Generator</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
            
            <a href="/background-removal" className="group block p-4 rounded-2xl border hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-lg" style={{background: 'linear-gradient(135deg, #ffffff, #f8f9fa)', borderColor: '#d1d5db'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #9333ea, #c026d3)'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Background Removal</h3>
                <p className="text-sm mb-3" style={{color: '#666666'}}>Remove backgrounds from images instantly</p>
                <div className="flex items-center" style={{color: 'var(--text-primary)'}}>
                  <span className="text-sm font-medium">Background Removal</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      
      <AIGirlfriendWidget />
    </div>
  )
}