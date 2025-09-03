import Link from 'next/link'

export default function PopularTools() {
  const tools = [
    {
      title: "AI Image Generator", 
      href: "/image-creation",
      gradient: "from-blue-500 to-purple-600",
      description: "Create any image from text"
    },
    {
      title: "Logo Generator",
      href: "/logo-generation", 
      gradient: "from-green-500 to-teal-600",
      description: "Design professional logos"
    },
    {
      title: "Character Generator",
      href: "/character-generation",
      gradient: "from-pink-500 to-rose-600", 
      description: "Create unique characters"
    },
    {
      title: "Background Remover",
      href: "/background-removal",
      gradient: "from-orange-500 to-red-600",
      description: "Remove backgrounds instantly"
    }
  ]

  return (
    <section className="py-16 md:py-24" style={{background: '#FFFDF9'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4" style={{color: '#111111'}}>
            Explore more AI tools
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            Enhance your creative workflow with our comprehensive suite of AI-powered design tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Link key={index} href={tool.href} className="group">
              <div className="relative overflow-hidden rounded-2xl h-40 transition-transform group-hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient}`}></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative h-full p-6 flex flex-col justify-end text-white">
                  <h3 className="text-lg font-semibold mb-1">{tool.title}</h3>
                  <p className="text-sm opacity-90">{tool.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}