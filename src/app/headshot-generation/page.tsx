'use client'

import { useState } from 'react'
import { User, Sparkles, Download, Copy, ChevronDown, ChevronUp } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AIGirlfriendWidget from '@/components/AIGirlfriendWidget'

export default function HeadshotGenerationPage() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [provider, setProvider] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a description for your headshot')
      return
    }

    setIsGenerating(true)
    setError(null)
    
    try {
      const response = await fetch('/api/generate-headshot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate headshot')
      }

      const data = await response.json()
      setGeneratedImage(data.imageUrl)
      setProvider(data.provider)
    } catch (err) {
      setError('Failed to generate headshot. Please try again.')
      console.error('Error generating headshot:', err)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a')
      link.href = generatedImage
      link.download = 'generated-headshot.png'
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
            <span className="text-sm font-medium" style={{color: 'var(--text-primary)'}}>AI Headshot Generator</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-4" style={{color: 'var(--text-primary)'}}>
            AI Face Generator
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{color: '#666666'}}>
            Generate professional headshots with AI. Perfect for LinkedIn profiles, business cards, and professional portfolios.
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
                  Describe your headshot
                </h2>
                
                <div className="relative mb-4">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Professional business headshot of a confident person in a navy blue suit, smiling warmly, with clean background lighting..."
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
                      Creating Headshot...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate Headshot
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
                  Generated Headshot
                </h2>
                
                <div className="aspect-square rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden" style={{background: '#FFFFFF'}}>
                  {generatedImage ? (
                    <>
                      <img 
                        src={generatedImage} 
                        alt="Generated headshot" 
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <button
                        onClick={handleDownload}
                        className="absolute top-4 right-4 p-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
                        title="Download headshot"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <div className="text-center">
                      <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">Your generated headshot will appear here</p>
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
              Professional Headshots in Seconds
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
              Create stunning professional headshots with AI. Perfect for corporate profiles, social media, and business presentations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{background: 'linear-gradient(135deg, #6366f1, #8b5cf6)'}}>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>AI Portrait Technology</h3>
              <p className="text-sm" style={{color: '#666666'}}>Advanced AI creates realistic professional portraits</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{background: 'linear-gradient(135deg, #10b981, #059669)'}}>
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Business Ready</h3>
              <p className="text-sm" style={{color: '#666666'}}>Professional quality for corporate use</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{background: 'linear-gradient(135deg, #f59e0b, #d97706)'}}>
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>High Resolution</h3>
              <p className="text-sm" style={{color: '#666666'}}>Download in professional quality formats</p>
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
                Professional Portrait Generation
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Our AI headshot generator uses advanced neural networks to create studio-quality professional portraits. 
                Generate multiple variations with different poses, expressions, and lighting setups to find your perfect headshot.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Multiple professional poses and expressions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Studio-quality lighting and composition</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Business attire and professional styling</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)'}}>
                <img 
                  src="/headshot-images/generated-headshot.png" 
                  alt="Professional business headshot example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div className="lg:order-2">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                Corporate & LinkedIn Ready
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Create headshots that meet corporate standards and LinkedIn profile requirements. 
                Perfect for executives, professionals, and entrepreneurs who need polished portraits for business purposes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>LinkedIn profile optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Corporate website integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Executive presentation materials</span>
                </li>
              </ul>
            </div>
            <div className="lg:order-1 relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)'}}>
                <img 
                  src="/headshot-images/generated-headshot (2).png" 
                  alt="Professional corporate headshot example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 3: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                Customizable Styling Options
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Fine-tune your headshot with various styling options including business attire, background settings, 
                and professional grooming. Create headshots that align with your industry and personal brand.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Professional wardrobe selection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Background and environment options</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Industry-specific styling</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)'}}>
                <img 
                  src="/headshot-images/generated-headshot (3).png" 
                  alt="Professional female executive headshot example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 4: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div className="lg:order-2">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                Instant High-Resolution Output
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Generate professional headshots in seconds and download them in high resolution. 
                Perfect for immediate use across all your professional platforms and marketing materials.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>1024x1024 high-resolution output</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Instant download in multiple formats</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Print-ready quality for business cards</span>
                </li>
              </ul>
            </div>
            <div className="lg:order-1 relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #fef3c7, #fde68a)'}}>
                <img 
                  src="/headshot-images/generated-headshot (4).png" 
                  alt="High-resolution professional headshot example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 5: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                AI-Powered Realism & Quality
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Our advanced AI technology ensures photorealistic results with natural skin tones, authentic expressions, 
                and professional-grade image quality that rivals traditional photography studios.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Photorealistic skin textures and lighting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Natural expressions and eye contact</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Studio-quality depth and composition</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #fce7f3, #fbcfe8)'}}>
                <img 
                  src="/headshot-images/generated-headshot (5).png" 
                  alt="AI-powered realistic professional headshot example" 
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
              Professional AI Headshot Generator
            </h2>
            
            <div className="space-y-4" style={{color: '#444444'}}>
              <p className="text-lg leading-relaxed">
                Our AI headshot generator revolutionizes professional portrait creation by leveraging cutting-edge artificial intelligence 
                to produce studio-quality headshots in seconds. Whether you need a professional LinkedIn profile picture, corporate 
                website photo, or executive portrait, our advanced AI technology delivers exceptional results that rival traditional 
                photography studios.
              </p>
              
              <h3 className="text-2xl font-semibold mt-6 mb-3" style={{color: 'var(--text-primary)'}}>
                Why Choose AI-Generated Headshots?
              </h3>
              <p className="leading-relaxed">
                Traditional professional photography can be expensive, time-consuming, and scheduling-dependent. AI headshot generation 
                offers an innovative alternative that provides instant results, unlimited variations, and consistent professional quality. 
                Our AI understands professional photography principles, including proper lighting, composition, and business-appropriate styling.
              </p>
              
              <h3 className="text-2xl font-semibold mt-6 mb-3" style={{color: 'var(--text-primary)'}}>
                Professional Applications
              </h3>
              <p className="leading-relaxed">
                AI-generated headshots are perfect for various professional applications including LinkedIn profiles, company websites, 
                business cards, press releases, conference speaker profiles, and executive team pages. The technology ensures consistent 
                quality and professional appearance across all platforms, helping maintain a polished brand image.
              </p>
              
              <h3 className="text-2xl font-semibold mt-6 mb-3" style={{color: 'var(--text-primary)'}}>
                Advanced AI Technology
              </h3>
              <p className="leading-relaxed">
                Our headshot generator utilizes state-of-the-art generative AI models trained on millions of professional portraits. 
                The technology understands facial features, professional styling, lighting techniques, and composition rules to create 
                headshots that meet corporate standards. Each generated image maintains photorealistic quality with natural skin tones, 
                authentic expressions, and professional-grade resolution.
              </p>
              
              <h3 className="text-2xl font-semibold mt-6 mb-3" style={{color: 'var(--text-primary)'}}>
                Customization and Control
              </h3>
              <p className="leading-relaxed">
                Generate headshots tailored to your specific needs with detailed prompt customization. Specify business attire, 
                background preferences, facial expressions, and styling elements to create headshots that align with your industry 
                and personal brand. The AI responds to detailed descriptions, allowing for precise control over the final result.
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
              Everything you need to know about AI headshot generation
            </p>
          </div>
          
          <div className="space-y-3">
            {[
              {
                question: "How realistic are AI-generated faces?",
                answer: "Our AI generates highly realistic faces that are virtually indistinguishable from real photography. The technology produces natural skin textures, authentic lighting, and professional-quality composition suitable for all business applications."
              },
              {
                question: "What resolution are the generated faces?",
                answer: "All faces are generated in high resolution (1024x1024 pixels) suitable for professional use including LinkedIn profiles, business websites, marketing materials, and print applications like business cards."
              },
              {
                question: "Can I specify facial features and styling preferences?",
                answer: "Yes, you can customize various aspects including facial features, expressions, styling, background settings, and other preferences through detailed prompt descriptions to create faces that match your specific requirements."
              },
              {
                question: "How long does it take to generate a face?",
                answer: "AI face generation typically takes 10-30 seconds depending on server load. This is significantly faster than traditional photography or design processes while maintaining professional quality standards."
              },
              {
                question: "Are the faces suitable for commercial use?",
                answer: "Yes, our AI-generated faces are suitable for various commercial applications including marketing materials, avatars, character design, and creative projects. The faces are original creations by our AI system."
              },
              {
                question: "Can I generate multiple variations?",
                answer: "Yes, you can generate unlimited variations by running the same or modified prompts multiple times. This allows you to explore different expressions, angles, and styling options to find your perfect face."
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
            <a href="/face-generation" className="group block p-4 rounded-2xl border hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-lg" style={{background: 'linear-gradient(135deg, #ffffff, #f8f9fa)', borderColor: '#d1d5db'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #d97706, #92400e)'}}>
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-primary)'}}>AI Face Generator</h3>
                <p className="text-sm mb-3" style={{color: '#666666'}}>Create realistic human faces with advanced AI technology</p>
                <div className="flex items-center" style={{color: 'var(--text-primary)'}}>
                  <span className="text-sm font-medium">AI Face Generator</span>
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
            
            <a href="/image-generation" className="group block p-4 rounded-2xl border hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-lg" style={{background: 'linear-gradient(135deg, #ffffff, #f8f9fa)', borderColor: '#d1d5db'}}>
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
            
            <a href="/image-upscale" className="group block p-4 rounded-2xl border hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-lg" style={{background: 'linear-gradient(135deg, #ffffff, #f8f9fa)', borderColor: '#d1d5db'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-stone-50/50 to-neutral-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #78716c, #57534e)'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-primary)'}}>AI Image Upscale</h3>
                <p className="text-sm mb-3" style={{color: '#666666'}}>Enhance images with AI upscaling technology</p>
                <div className="flex items-center" style={{color: 'var(--text-primary)'}}>
                  <span className="text-sm font-medium">AI Image Upscale</span>
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
