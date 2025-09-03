export default function Toolkit() {
  const toolkitItems = [
    {
      title: "Edit",
      description: "Professional editing tools powered by AI",
      features: ["Background removal", "Object extraction", "Smart cropping", "Auto enhancement"],
      buttonText: "Try editing tools",
      icon: "🎨",
      gradient: "linear-gradient(135deg, #FFC4BC, #FFB4A8)"
    },
    {
      title: "Design", 
      description: "Create stunning visuals with templates",
      features: ["Product mockups", "Social media posts", "Marketing banners", "Brand templates"],
      buttonText: "Browse templates",
      icon: "✨",
      gradient: "linear-gradient(135deg, #A6D8FF, #8CC8FF)"
    },
    {
      title: "Batch",
      description: "Process multiple images efficiently",
      features: ["Bulk background removal", "Resize collections", "Apply filters", "Export formats"],
      buttonText: "Try batch tools",
      icon: "⚡",
      gradient: "linear-gradient(135deg, #E8F5E8, #D4F4D4)"
    },
    {
      title: "API",
      description: "Integrate AI tools into your apps",
      features: ["Developer tools", "Custom integrations", "Automation", "Scalable processing"],
      buttonText: "View documentation",
      icon: "🔧",
      gradient: "linear-gradient(135deg, #F3E8FF, #E5D3FF)"
    }
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16" style={{background: '#FFFDF9'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4" style={{color: '#111111'}}>
            Tools for every creative need
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            Comprehensive toolkit for content creation, from individual edits to enterprise workflows
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {toolkitItems.map((item, index) => (
            <div 
              key={index} 
              className="rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
              style={{background: '#F5F1EA'}}
            >
              <div className="mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto text-2xl"
                  style={{background: item.gradient}}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium mb-2" style={{color: '#111111'}}>{item.title}</h3>
                <p className="text-sm mb-4" style={{color: '#666666'}}>{item.description}</p>
              </div>
              
              <ul className="space-y-2 mb-6 text-left">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm flex items-center" style={{color: '#666666'}}>
                    <div className="w-1.5 h-1.5 bg-black rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full px-4 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm mb-6" style={{color: '#666666'}}>
            Trusted by creative professionals worldwide
          </p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="w-20 h-8 rounded" style={{background: '#111111'}}></div>
            <div className="w-24 h-8 rounded" style={{background: '#111111'}}></div>
            <div className="w-18 h-8 rounded" style={{background: '#111111'}}></div>
            <div className="w-22 h-8 rounded" style={{background: '#111111'}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}