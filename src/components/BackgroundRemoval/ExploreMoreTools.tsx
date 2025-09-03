export default function ExploreMoreTools() {
  const tools = [
    {
      title: "Object Eraser",
      description: "Remove unwanted objects from photos instantly",
      icon: "🗑️",
      gradient: "linear-gradient(135deg, #FFC4BC, #FFB4A8)",
      bgColor: "#FFF5F5",
      badge: "Popular"
    },
    {
      title: "AI Enhance",
      description: "Improve image quality with AI upscaling",
      icon: "✨",
      gradient: "linear-gradient(135deg, #A6D8FF, #8CC8FF)",
      bgColor: "#F0F9FF",
      badge: "New"
    },
    {
      title: "Photo Restore",
      description: "Fix old and damaged photos automatically",
      icon: "🔄",
      gradient: "linear-gradient(135deg, #E8F5E8, #D4F4D4)",
      bgColor: "#F0FDF4",
      badge: null
    },
    {
      title: "Smart Crop",
      description: "Automatically crop images for different formats",
      icon: "📐",
      gradient: "linear-gradient(135deg, #F3E8FF, #E5D3FF)",
      bgColor: "#FEFBFF",
      badge: null
    },
    {
      title: "Color Pop",
      description: "Make specific colors stand out in your photos",
      icon: "🎨",
      gradient: "linear-gradient(135deg, #FFE4E6, #FFD1D5)",
      bgColor: "#FFF7F8",
      badge: "Coming Soon"
    },
    {
      title: "Shadow Add",
      description: "Add realistic shadows to transparent objects",
      icon: "🌑",
      gradient: "linear-gradient(135deg, #E0F2FE, #BAE6FD)",
      bgColor: "#F0F9FF",
      badge: "Beta"
    }
  ]

  return (
    <section className="py-12 md:py-16" style={{background: '#FFFDF9'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4" style={{color: '#111111'}}>
            Explore more AI-powered tools
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            Complete your creative workflow with our suite of professional photo editing tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl p-6 border border-white/50 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
              style={{background: tool.bgColor}}
            >
              {/* Badge */}
              {tool.badge && (
                <div className="absolute top-4 right-4">
                  <span 
                    className={`px-2 py-1 text-xs font-medium rounded-full text-white ${
                      tool.badge === 'Popular' ? 'bg-orange-500' :
                      tool.badge === 'New' ? 'bg-green-500' :
                      tool.badge === 'Beta' ? 'bg-blue-500' :
                      'bg-gray-500'
                    }`}
                  >
                    {tool.badge}
                  </span>
                </div>
              )}
              
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform shadow-sm"
                style={{background: tool.gradient}}
              >
                {tool.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-medium mb-3" style={{color: '#111111'}}>
                {tool.title}
              </h3>
              
              <p className="text-sm leading-relaxed mb-6" style={{color: '#666666'}}>
                {tool.description}
              </p>
              
              {/* Action */}
              <div className="flex items-center justify-between">
                <button 
                  className="text-sm font-medium hover:underline"
                  style={{color: '#111111'}}
                  disabled={tool.badge === 'Coming Soon'}
                >
                  {tool.badge === 'Coming Soon' ? 'Coming Soon' : 'Try now →'}
                </button>
                
                <div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-white/50 transition-colors" style={{background: '#F5F1EA'}}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" style={{color: '#111111'}} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm mb-6" style={{color: '#666666'}}>
            All tools work seamlessly together in your OFFEO workspace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
              View all tools
            </button>
            <button className="px-8 py-3 border-2 border-gray-200 text-sm font-medium rounded-full hover:border-gray-300 transition-colors" style={{color: '#111111'}}>
              Join our community
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}