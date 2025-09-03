import Link from 'next/link'

export default function ExploreMoreTools() {
  const tools = [
    {
      title: "AI Image Generator",
      description: "Generate any image from text descriptions",
      href: "/image-creation",
      icon: "🖼️",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Character Generator", 
      description: "Create unique characters and personas",
      href: "/character-generation",
      icon: "👤",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Background Removal",
      description: "Remove backgrounds from images instantly", 
      href: "/background-removal",
      icon: "✂️",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Image Upscale",
      description: "Enhance image resolution and quality",
      href: "/image-upscale", 
      icon: "📈",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Logo Generator",
      description: "Design professional logos with AI",
      href: "/logo-generation",
      icon: "⭐",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Anime Generator",
      description: "Create beautiful anime-style artwork",
      href: "/anime-generation",
      icon: "🎭",
      gradient: "from-pink-500 to-rose-500"
    }
  ]

  return (
    <section className="py-16 md:py-24" style={{background: '#FAFAFA'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4" style={{color: '#111111'}}>
            Explore more AI tools
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            Expand your creative toolkit with our comprehensive suite of AI-powered design tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Link key={index} href={tool.href} className="group">
              <div className="bg-white rounded-2xl p-6 h-full shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{tool.icon}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2" style={{color: '#111111'}}>
                  {tool.title}
                </h3>
                
                <p className="text-sm leading-relaxed" style={{color: '#666666'}}>
                  {tool.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm font-medium" style={{color: '#111111'}}>
                  <span>Try it now</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{background: '#F5F1EA'}}>
            <span className="text-sm font-medium" style={{color: '#111111'}}>🚀 New tools added regularly</span>
          </div>
        </div>
      </div>
    </section>
  )
}