'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronUp, ExternalLink, Clock, Calendar, User } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface BlogPost {
  title: string
  content: string
  publishedAt: string
  readingTime: string
  author: string
  metaDescription: string
  faqs?: FAQ[]
  tableOfContents: Array<{
    id: string
    title: string
    level: number
  }>
}

interface RelatedPost {
  slug: string
  title: string
}

const colorPaletteRelatedPosts: RelatedPost[] = [
  { slug: 'home-color-palettes', title: 'Home Color Palettes: Create Perfect Interior Harmony' },
  { slug: 'earth-tone-color-palettes', title: 'Earth Tone Color Palettes for Natural Design' },
  { slug: 'blue-color-palette', title: 'Blue Color Palette: From Ocean to Sky Inspirations' },
  { slug: 'rustic-color-palettes', title: 'Rustic Color Palettes for Vintage Design Appeal' },
  { slug: 'food-color-palette', title: 'Food Color Palette: Delicious Design Inspirations' },
  { slug: 'neon-color-palette', title: 'Neon Color Palette: Vibrant Electric Design Ideas' }
]

const serviceLandingPages = [
  { title: 'AI Logo Generator', href: '/logo-generation' },
  { title: 'AI Art Generator', href: '/art-generation' },
  { title: 'AI Image Generator', href: '/image-creation' },
  { title: 'Background Removal Tool', href: '/background-removal' },
  { title: 'AI Text Generator', href: '/text-generation' }
]

// Sample blog post data - replace with actual data fetching
const samplePost: BlogPost = {
  title: "30 Trendy Color Palettes for Modern Design",
  content: `
    <h2 id="introduction">Introduction</h2>
    <p>Color palettes are the foundation of exceptional design. Whether you're working on a website, creating brand materials, or designing digital artwork, the right color combination can make or break your project.</p>
    
    <h2 id="what-are-color-palettes">What are Color Palettes?</h2>
    <p>A color palette is a curated selection of colors that work harmoniously together. These combinations are carefully chosen to evoke specific emotions, convey brand messages, and create visual appeal.</p>
    
    <h3 id="types-of-palettes">Types of Color Palettes</h3>
    <p>There are several types of color palettes, each serving different purposes in design.</p>
    
    <h4 id="monochromatic">Monochromatic Palettes</h4>
    <p>These palettes use different shades, tints, and tones of a single color.</p>
    
    <h2 id="trending-palettes">30 Trending Color Palettes</h2>
    <p>Here are the most popular color combinations that designers are using this year.</p>
    
    <h3 id="minimalist-palettes">Minimalist Palettes</h3>
    <p>Clean and simple color combinations for modern designs.</p>
    
    <h3 id="vibrant-palettes">Vibrant Palettes</h3>
    <p>Bold and energetic color schemes that make a statement.</p>
    
    <h2 id="how-to-choose">How to Choose the Right Palette</h2>
    <p>Selecting the perfect color palette depends on your project goals and target audience.</p>
    
    <h2 id="conclusion">Conclusion</h2>
    <p>The right color palette can transform your design from ordinary to extraordinary. Use these trending combinations as inspiration for your next project.</p>
  `,
  publishedAt: "2024-01-15",
  readingTime: "8 min read",
  author: "Offeo",
  metaDescription: "Discover 30 trending color palettes for modern design. Get inspired with curated color combinations for websites, branding, and digital artwork.",
  faqs: [
    {
      question: "What makes a good color palette?",
      answer: "A good color palette has harmony between colors, appropriate contrast for readability, and aligns with the brand or project's emotional goals."
    },
    {
      question: "How many colors should be in a palette?",
      answer: "Most effective palettes contain 3-5 colors including a primary color, secondary colors, and neutral tones for balance."
    },
    {
      question: "Can I use these palettes for commercial projects?",
      answer: "Yes, color combinations cannot be copyrighted. However, ensure your final design is original and doesn't infringe on existing trademarks."
    }
  ],
  tableOfContents: [
    { id: 'introduction', title: 'Introduction', level: 2 },
    { id: 'what-are-color-palettes', title: 'What are Color Palettes?', level: 2 },
    { id: 'types-of-palettes', title: 'Types of Color Palettes', level: 3 },
    { id: 'monochromatic', title: 'Monochromatic Palettes', level: 4 },
    { id: 'trending-palettes', title: '30 Trending Color Palettes', level: 2 },
    { id: 'minimalist-palettes', title: 'Minimalist Palettes', level: 3 },
    { id: 'vibrant-palettes', title: 'Vibrant Palettes', level: 3 },
    { id: 'how-to-choose', title: 'How to Choose the Right Palette', level: 2 },
    { id: 'conclusion', title: 'Conclusion', level: 2 }
  ]
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [activeSection, setActiveSection] = useState<string>('')
  const [showScrollTop, setShowScrollTop] = useState(false)
  
  // In a real app, you would fetch the blog post based on params.slug
  const post = samplePost

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
      
      // Update active section based on scroll position
      const sections = post.tableOfContents.map(item => item.id)
      let current = ''
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            current = section
          }
        }
      }
      
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [post.tableOfContents])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const generateFAQSchema = (faqs: FAQ[]) => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  }

  return (
    <>
      {post.faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(post.faqs))
          }}
        />
      )}
      
      <div className="min-h-screen" style={{background: 'var(--bg-primary)'}}>
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="max-w-4xl">
                {/* Article Header */}
                <header className="mb-8 pb-8 border-b border-gray-200">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{color: 'var(--text-primary)'}}>
                    {post.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm" style={{color: 'var(--text-secondary)'}}>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>By {post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </header>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none"
                  style={{color: 'var(--text-primary)'}}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* FAQs Section */}
                {post.faqs && post.faqs.length > 0 && (
                  <section className="mt-12 pt-8 border-t border-gray-200">
                    <h2 className="text-2xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {post.faqs.map((faq, index) => (
                        <details key={index} className="group border border-gray-200 rounded-lg p-4">
                          <summary className="font-semibold cursor-pointer list-none flex justify-between items-center" style={{color: 'var(--text-primary)'}}>
                            {faq.question}
                            <ChevronUp className="w-5 h-5 transform group-open:rotate-180 transition-transform" />
                          </summary>
                          <div className="mt-3 pt-3 border-t border-gray-100" style={{color: 'var(--text-secondary)'}}>
                            {faq.answer}
                          </div>
                        </details>
                      ))}
                    </div>
                  </section>
                )}

                {/* Author Section */}
                <section className="mt-12 pt-8 border-t border-gray-200 text-center">
                  <h3 className="text-xl font-bold mb-2" style={{color: 'var(--text-primary)'}}>
                    Written by Offeo
                  </h3>
                  <p className="text-sm mb-4" style={{color: 'var(--text-secondary)'}}>
                    Offeo is a leading platform for AI-powered design tools and creative solutions.
                  </p>
                </section>

                {/* Service Landing Pages */}
                <section className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold mb-4" style={{color: 'var(--text-primary)'}}>
                    Explore Our AI Tools
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceLandingPages.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                        style={{color: 'var(--text-primary)'}}
                      >
                        <span className="font-medium">{service.title}</span>
                        <ExternalLink size={16} />
                      </a>
                    ))}
                  </div>
                </section>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Table of Contents */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-bold mb-4" style={{color: 'var(--text-primary)'}}>
                    Table of Contents
                  </h3>
                  <nav>
                    <ul className="space-y-2">
                      {post.tableOfContents.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className={`block text-sm hover:text-blue-600 transition-colors ${
                              activeSection === item.id ? 'text-blue-600 font-medium' : 'text-gray-600'
                            }`}
                            style={{
                              paddingLeft: `${(item.level - 2) * 12}px`
                            }}
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Babio.io Widget */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6 text-center">
                  <h4 className="text-lg font-bold mb-2 text-blue-900">
                    Need More Design Resources?
                  </h4>
                  <p className="text-sm text-blue-700 mb-4">
                    Discover premium design tools and templates at Babio.io
                  </p>
                  <a
                    href="https://babio.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Visit Babio.io
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Internal Links */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h4 className="text-lg font-bold mb-4" style={{color: 'var(--text-primary)'}}>
                    Related Articles
                  </h4>
                  <ul className="space-y-3">
                    {colorPaletteRelatedPosts.map((relatedPost, index) => (
                      <li key={index}>
                        <a
                          href={`/blog/${relatedPost.slug}`}
                          className="text-sm text-gray-600 hover:text-blue-600 transition-colors line-clamp-2"
                        >
                          {relatedPost.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
          >
            <ChevronUp size={20} />
          </button>
        )}

        <Footer />
      </div>
    </>
  )
}