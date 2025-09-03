'use client'

import { useState } from 'react'
import { Users, Sparkles, Download, Copy, ChevronDown, ChevronUp, Gamepad2, Palette } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AIGirlfriendWidget from '@/components/AIGirlfriendWidget'

export default function CharacterGenerationPage() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [provider, setProvider] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please describe the character you want to create')
      return
    }

    setIsGenerating(true)
    setError(null)
    
    try {
      const response = await fetch('/api/generate-character', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate character')
      }

      const data = await response.json()
      setGeneratedImage(data.imageUrl)
      setProvider(data.provider)
    } catch (err) {
      setError('Failed to generate character. Please try again.')
      console.error('Error generating character:', err)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a')
      link.href = generatedImage
      link.download = 'generated-character.png'
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
            <Users className="w-4 h-4" style={{color: 'var(--text-primary)'}} />
            <span className="text-sm font-medium" style={{color: 'var(--text-primary)'}}>AI Character Generator</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-4" style={{color: 'var(--text-primary)'}}>
            AI Character Designer
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{color: '#666666'}}>
            Create unique characters for games, stories, and creative projects. Perfect for fantasy worlds, sci-fi adventures, and original storytelling.
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
                  Describe your character
                </h2>
                
                <div className="relative mb-4">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="A mystical elf warrior with silver hair, wearing enchanted armor and wielding a glowing sword, standing in a magical forest with ethereal lighting..."
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
                      Creating Character...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate Character
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
                  Generated Character
                </h2>
                
                <div className="aspect-square rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden" style={{background: '#FFFFFF'}}>
                  {generatedImage ? (
                    <>
                      <img 
                        src={generatedImage} 
                        alt="Generated character" 
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <button
                        onClick={handleDownload}
                        className="absolute top-4 right-4 p-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
                        title="Download character"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <div className="text-center">
                      <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">Your generated character will appear here</p>
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
              Character Design Made Easy
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
              Create compelling characters for games, stories, and creative projects with AI-powered design tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'}}>
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Game Character Design</h3>
              <p className="text-sm" style={{color: '#666666'}}>Create heroes, villains, and NPCs for video games</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{background: 'linear-gradient(135deg, #06b6d4, #0891b2)'}}>
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Fantasy & Sci-Fi</h3>
              <p className="text-sm" style={{color: '#666666'}}>Design characters for fantasy and science fiction worlds</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{background: 'linear-gradient(135deg, #ec4899, #db2777)'}}>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>Creative Freedom</h3>
              <p className="text-sm" style={{color: '#666666'}}>Unlimited character variations and customization</p>
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
                Fantasy Character Creation
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Design mystical creatures, brave warriors, and magical beings for your fantasy worlds. 
                Our AI understands fantasy tropes and can create characters that fit perfectly into medieval, 
                magical, or mythological settings.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Elves, dwarves, orcs, and other fantasy races</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Medieval armor, robes, and magical accessories</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Enchanted weapons and mystical artifacts</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)'}}>
                <img 
                  src="/character-images/fantasy-character.png" 
                  alt="Fantasy character design example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div className="lg:order-2">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                Sci-Fi Character Design
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Create futuristic characters with advanced technology, cyberpunk aesthetics, and space-age designs. 
                Perfect for science fiction games, comics, and storytelling projects that explore the future.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Cybernetic enhancements and tech implants</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Futuristic armor and space suits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Alien races and extraterrestrial beings</span>
                </li>
              </ul>
            </div>
            <div className="lg:order-1 relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #06b6d4, #0891b2)'}}>
                <img 
                  src="/character-images/scifi-character.png" 
                  alt="Sci-fi character design example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 3: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                Game Character Development
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Design characters specifically for video games including protagonists, antagonists, and supporting cast. 
                Create consistent character designs that work across different game environments and storylines.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Main characters and protagonists</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Villains and boss characters</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>NPCs and background characters</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #f59e0b, #d97706)'}}>
                <img 
                  src="/character-images/game-character.png" 
                  alt="Game character design example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 4: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div className="lg:order-2">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                Story Character Creation
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Bring your written characters to life with visual representations perfect for novels, comics, and screenplays. 
                Create character designs that match your story's tone and setting.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Novel and book character visualization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Comic book and manga style characters</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Screenplay and film character concepts</span>
                </li>
              </ul>
            </div>
            <div className="lg:order-1 relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #10b981, #059669)'}}>
                <img 
                  src="/character-images/story-character.png" 
                  alt="Story character design example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 5: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                Customization & Variations
              </h3>
              <p className="text-lg mb-4" style={{color: '#666666'}}>
                Generate multiple variations of the same character with different poses, expressions, outfits, and settings. 
                Perfect for character development and exploring different design directions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Multiple poses and action stances</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Different outfits and costume variations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span style={{color: '#666666'}}>Facial expressions and emotional states</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative" style={{background: 'linear-gradient(135deg, #ec4899, #db2777)'}}>
                <img 
                  src="/character-images/character-variations.png" 
                  alt="Character variation examples" 
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
              AI Character Generator for Creative Projects
            </h2>
            
            <div className="space-y-4" style={{color: '#444444'}}>
              <p className="text-lg leading-relaxed">
                Our AI character generator revolutionizes character design by enabling creators to bring their imaginative characters to life 
                instantly. Whether you're developing video game characters, designing heroes for your novel, or creating unique personas for 
                creative projects, our advanced AI technology understands character design principles and generates compelling, original characters.
              </p>
              
              <h3 className="text-2xl font-semibold mt-6 mb-3" style={{color: 'var(--text-primary)'}}>
                Perfect for Game Developers and Storytellers
              </h3>
              <p className="leading-relaxed">
                Game developers, writers, comic book artists, and creative professionals rely on our AI character generator to quickly concept 
                and visualize character ideas. The tool excels at creating characters across multiple genres including fantasy, science fiction, 
                modern settings, and historical periods. Each generated character is unique and can serve as inspiration or final artwork for your projects.
              </p>
              
              <h3 className="text-2xl font-semibold mt-6 mb-3" style={{color: 'var(--text-primary)'}}>
                Fantasy and Sci-Fi Character Specialization
              </h3>
              <p className="leading-relaxed">
                Our AI has been trained extensively on fantasy and science fiction character archetypes, enabling it to create authentic-looking 
                elves, warriors, space marines, cyberpunk characters, and mystical beings. The generator understands genre conventions while 
                still producing original and creative character designs that stand out from typical stock characters.
              </p>
              
              <h3 className="text-2xl font-semibold mt-6 mb-3" style={{color: 'var(--text-primary)'}}>
                Professional Quality Character Design
              </h3>
              <p className="leading-relaxed">
                Each character is generated with professional-level detail including appropriate costumes, accessories, weapons, and environmental 
                context. The AI considers character backstory elements reflected in visual design, ensuring that generated characters feel authentic 
                and purposeful rather than randomly assembled. This makes them perfect for professional creative projects.
              </p>
              
              <h3 className="text-2xl font-semibold mt-6 mb-3" style={{color: 'var(--text-primary)'}}>
                Unlimited Creative Possibilities
              </h3>
              <p className="leading-relaxed">
                Generate endless character variations by adjusting descriptions, mixing genres, and experimenting with different character archetypes. 
                The AI can create characters ranging from realistic human portraits to fantastical creatures, robots, aliens, and hybrid beings. 
                This flexibility makes it an invaluable tool for creative professionals who need diverse character designs for their projects.
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
              Everything you need to know about AI character generation
            </p>
          </div>
          
          <div className="space-y-3">
            {[
              {
                question: "What types of characters can I create?",
                answer: "You can create any type of character including fantasy heroes, sci-fi warriors, modern characters, historical figures, anime-style characters, and completely original creations. The AI works with any character concept you can describe."
              },
              {
                question: "Are the generated characters original?",
                answer: "Yes, every character is uniquely generated by our AI and is completely original. The characters don't copy existing copyrighted characters but instead create new, unique designs based on your descriptions."
              },
              {
                question: "Can I use these characters commercially?",
                answer: "Yes, you can use AI-generated characters for commercial purposes including games, books, comics, and other creative projects. Each character is an original AI creation suitable for professional use."
              },
              {
                question: "How detailed can I make my character descriptions?",
                answer: "Very detailed! Include information about appearance, clothing, weapons, pose, background, genre, art style, and any specific features you want. More detailed prompts generally produce better results that match your vision."
              },
              {
                question: "Can I generate multiple versions of the same character?",
                answer: "Yes, you can generate multiple variations by running the same or similar prompts. You can also modify descriptions to create the same character in different poses, outfits, or settings."
              },
              {
                question: "What art styles are available?",
                answer: "The AI can generate characters in various styles including realistic, anime, cartoon, comic book, fantasy art, concept art, and many others. Simply specify the desired art style in your description."
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
                  <Users className="w-6 h-6 text-white" />
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
                  <Users className="w-6 h-6 text-white" />
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