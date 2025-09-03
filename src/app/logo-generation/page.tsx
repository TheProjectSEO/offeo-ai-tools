'use client'

import { useState } from 'react'
import { Zap, Sparkles, Download, Copy, ChevronDown, ChevronUp, Building, Briefcase } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AIGirlfriendWidget from '@/components/AIGirlfriendWidget'

export default function LogoGenerationPage() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [provider, setProvider] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please describe the logo you want to create')
      return
    }

    setIsGenerating(true)
    setError(null)
    
    try {
      const response = await fetch('/api/generate-logo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate logo')
      }

      const data = await response.json()
      setGeneratedImage(data.imageUrl)
      setProvider(data.provider)
    } catch (err) {
      setError('Failed to generate logo. Please try again.')
      console.error('Error generating logo:', err)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a')
      link.href = generatedImage
      link.download = 'generated-logo.png'
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
            <Zap className="w-4 h-4" style={{color: 'var(--text-primary)'}} />
            <span className="text-sm font-medium" style={{color: 'var(--text-primary)'}}>AI Logo Generator</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-4" style={{color: 'var(--text-primary)'}}>
            AI Brand Identity Creator
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{color: '#666666'}}>
            Generate professional logos and brand identities in seconds. Perfect for startups, businesses, and entrepreneurs building their brand.
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
                  Describe your logo concept
                </h2>
                
                <div className="relative mb-4">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Modern tech company logo with clean typography and geometric elements, incorporating blue and silver colors, professional and minimalist design..."
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
                      Creating Logo...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate Logo
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
                  Generated Logo
                </h2>
                
                <div className="aspect-square rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden" style={{background: '#FFFFFF'}}>
                  {generatedImage ? (
                    <>
                      <img 
                        src={generatedImage} 
                        alt="Generated logo" 
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <button
                        onClick={handleDownload}
                        className="absolute top-4 right-4 p-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
                        title="Download logo"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <div className="text-center">
                      <Zap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">Your generated logo will appear here</p>
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
              Professional Logo Design in Minutes
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
              Create stunning brand identities with AI-powered design tools that understand business aesthetics and market trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'}}>
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Business Ready</h3>
              <p className="text-sm" style={{color: '#666666'}}>Professional logos suitable for all business applications</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{background: 'linear-gradient(135deg, #10b981, #059669)'}}>
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Brand Identity</h3>
              <p className="text-sm" style={{color: '#666666'}}>Cohesive designs that represent your brand values</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{background: 'linear-gradient(135deg, #f59e0b, #d97706)'}}>
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Instant Creation</h3>
              <p className="text-sm" style={{color: '#666666'}}>Generate multiple logo concepts in seconds</p>
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
                Tech & Startup Logos
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Create modern, innovative logos perfect for technology companies, startups, and digital businesses. 
                Our AI understands contemporary design trends and creates logos that communicate innovation, trust, and professionalism.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Clean, minimalist design aesthetics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Modern typography and geometric elements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Tech-forward color palettes and gradients</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'}}>
                <img 
                  src="/logo-images/tech-logo.png" 
                  alt="Technology company logo example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div className="lg:order-2">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                Restaurant & Food Service
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Design appetizing logos for restaurants, cafes, food trucks, and culinary businesses. 
                Create brand identities that convey quality, taste, and hospitality to attract customers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Appetizing color schemes and food imagery</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Elegant typography for premium dining</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Cultural and cuisine-specific design elements</span>
                </li>
              </ul>
            </div>
            <div className="lg:order-1 relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #dc2626, #991b1b)'}}>
                <img 
                  src="/logo-images/restaurant-logo.png" 
                  alt="Restaurant logo design example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 3: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                Healthcare & Wellness
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Create trustworthy, professional logos for medical practices, wellness centers, and healthcare organizations. 
                Design logos that inspire confidence and communicate care, health, and reliability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Medical symbols and wellness imagery</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Calming, trustworthy color palettes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Professional, readable typography</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #10b981, #059669)'}}>
                <img 
                  src="/logo-images/healthcare-logo.png" 
                  alt="Healthcare logo design example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 4: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div className="lg:order-2">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                Creative & Design Services
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Generate artistic, expressive logos for creative agencies, design studios, photographers, and artistic professionals. 
                Create unique brand identities that showcase creativity and artistic vision.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Artistic elements and creative typography</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Vibrant colors and dynamic compositions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Unique, memorable design concepts</span>
                </li>
              </ul>
            </div>
            <div className="lg:order-1 relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'}}>
                <img 
                  src="/logo-images/creative-logo.png" 
                  alt="Creative agency logo design example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 5: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                Finance & Professional Services
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Design sophisticated logos for financial institutions, consulting firms, legal practices, and professional services. 
                Create authoritative brand identities that communicate expertise, stability, and trustworthiness.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Conservative, professional color schemes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Classic typography and elegant layouts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Symbols of stability and growth</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #1f2937, #111827)'}}>
                <img 
                  src="/logo-images/finance-logo.png" 
                  alt="Finance and professional services logo example" 
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
              AI Logo Generator for Professional Brand Identity
            </h2>
            
            <div className="space-y-4" style={{color: '#444444'}}>
              <p className="text-lg leading-relaxed">
                Our AI logo generator transforms brand creation by enabling businesses to design professional logos instantly. 
                Whether you're launching a startup, rebranding an existing company, or creating logos for clients, our advanced 
                AI technology understands design principles, brand psychology, and market positioning to create logos that 
                effectively represent your business identity.
              </p>
              
              <h3 className="text-2xl font-semibold mt-6 mb-3" style={{color: 'var(--text-primary)'}}>
                Professional Logo Design for Every Industry
              </h3>
              <p className="leading-relaxed">
                From technology startups to traditional businesses, our AI logo generator creates industry-appropriate designs 
                that resonate with target audiences. The system understands sector-specific design conventions while maintaining 
                originality and creativity. Each logo is optimized for various applications including business cards, websites, 
                signage, and digital marketing materials.
              </p>
              
              <h3 className="text-2xl font-semibold mt-6 mb-3" style={{color: 'var(--text-primary)'}}>
                Brand Psychology and Market Positioning
              </h3>
              <p className="leading-relaxed">
                Effective logo design goes beyond aesthetics to communicate brand values, target market appeal, and competitive 
                positioning. Our AI generator considers color psychology, typography impact, and visual hierarchy to create logos 
                that not only look professional but also support business objectives and brand messaging strategies.
              </p>
              
              <h3 className="text-2xl font-semibold mt-6 mb-3" style={{color: 'var(--text-primary)'}}>
                Scalable and Versatile Design Solutions
              </h3>
              <p className="leading-relaxed">
                Modern businesses need logos that work across multiple platforms and applications. Our AI-generated logos are 
                designed with scalability in mind, ensuring they remain clear and impactful from business card size to billboard 
                dimensions. Each design considers digital applications, print requirements, and social media profile usage.
              </p>
              
              <h3 className="text-2xl font-semibold mt-6 mb-3" style={{color: 'var(--text-primary)'}}>
                Cost-Effective Brand Development
              </h3>
              <p className="leading-relaxed">
                Traditional logo design can be expensive and time-consuming, especially for small businesses and startups. 
                AI logo generation provides professional-quality results at a fraction of the cost, enabling businesses to 
                allocate resources to other critical areas while still maintaining a strong brand presence. Generate multiple 
                concepts quickly to explore different brand directions before making final decisions.
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
              Everything you need to know about AI logo generation
            </p>
          </div>
          
          <div className="space-y-3">
            {[
              {
                question: "Can I use AI-generated logos for my business?",
                answer: "Yes, AI-generated logos are completely original creations suitable for commercial use. Each logo is unique and can be used for business branding, marketing materials, websites, and legal business documentation."
              },
              {
                question: "What file formats are provided?",
                answer: "Generated logos are provided in high-resolution PNG format suitable for both digital and print applications. The images are generated at 1024x1024 pixels, providing excellent quality for most business needs."
              },
              {
                question: "How do I create industry-specific logos?",
                answer: "Include industry-specific keywords in your prompt such as 'tech startup', 'restaurant', 'healthcare', or 'finance'. Describe your target audience, desired mood, and any specific elements that represent your business sector."
              },
              {
                question: "Can I specify colors and typography styles?",
                answer: "Yes, you can specify color preferences, typography styles, and design elements in your prompt. Include details like 'modern sans-serif font', 'blue and silver colors', or 'minimalist geometric design' for better results."
              },
              {
                question: "How many logo variations can I generate?",
                answer: "You can generate unlimited logo variations by running different prompts or modifying existing ones. This allows you to explore various design directions and find the perfect logo for your brand."
              },
              {
                question: "Are the logos suitable for trademark registration?",
                answer: "While our logos are original AI creations, trademark availability depends on your specific industry and region. We recommend conducting a trademark search before final business use to ensure uniqueness in your market."
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
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
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
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
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

            <a href="/headshot-generation" className="group block p-4 rounded-2xl border hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-lg" style={{background: 'linear-gradient(135deg, #ffffff, #f8f9fa)', borderColor: '#d1d5db'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-primary)'}}>AI Headshot Generator</h3>
                <p className="text-sm mb-3" style={{color: '#666666'}}>Create professional headshots for business use</p>
                <div className="flex items-center" style={{color: 'var(--text-primary)'}}>
                  <span className="text-sm font-medium">AI Headshot Generator</span>
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
