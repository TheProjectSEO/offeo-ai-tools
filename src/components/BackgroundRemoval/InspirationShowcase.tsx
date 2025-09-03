export default function InspirationShowcase() {
  const showcaseItems = [
    {
      title: "E-commerce Products",
      description: "Create stunning product catalogs with transparent backgrounds",
      image: "linear-gradient(135deg, #FFC4BC, #FFB4A8)",
      tag: "Commerce"
    },
    {
      title: "Profile Pictures", 
      description: "Professional headshots with clean transparent backgrounds",
      image: "linear-gradient(135deg, #A6D8FF, #8CC8FF)",
      tag: "Personal"
    },
    {
      title: "Marketing Materials",
      description: "Design eye-catching ads and social media content",
      image: "linear-gradient(135deg, #E8F5E8, #D4F4D4)",
      tag: "Marketing"
    },
    {
      title: "Creative Projects",
      description: "Unleash your creativity with unlimited possibilities",
      image: "linear-gradient(135deg, #F3E8FF, #E5D3FF)",
      tag: "Creative"
    }
  ]

  return (
    <section className="py-12 md:py-16" style={{background: '#FFFDF9'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4" style={{color: '#111111'}}>
            Endless creative possibilities
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            From e-commerce to social media, see how transparent backgrounds transform your visuals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {showcaseItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-4 aspect-square">
                <div 
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                  style={{background: item.image}}
                >
                  <div className="absolute inset-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <div className="w-12 h-16 bg-white/60 rounded-lg shadow-lg"></div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span 
                    className="px-2 py-1 text-xs font-medium rounded-full text-white"
                    style={{background: '#111111'}}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2" style={{color: '#111111'}}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{color: '#666666'}}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
            Explore all use cases
          </button>
        </div>
      </div>
    </section>
  )
}