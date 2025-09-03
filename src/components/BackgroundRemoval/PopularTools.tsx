export default function PopularTools() {
  const tools = [
    {
      title: "AI Background",
      description: "Smart background replacement",
      icon: "🎨"
    },
    {
      title: "Object Eraser",
      description: "Remove unwanted objects",
      icon: "🗑️"
    },
    {
      title: "Restore Image",
      description: "Fix old and damaged photos",
      icon: "🔄"
    },
    {
      title: "AI Enhance",
      description: "Improve image quality",
      icon: "✨"
    },
    {
      title: "Image Background",
      description: "Change photo backgrounds",
      icon: "🌄"
    }
  ]

  return (
    <section className="py-12 md:py-16" style={{background: '#FFFDF9'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4" style={{color: '#111111'}}>
            Other popular tools
          </h2>
        </div>
        
        <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="flex-shrink-0 text-center group cursor-pointer p-4 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{background: '#F5F1EA'}}
            >
              <div 
                className="w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center text-2xl shadow-sm"
                style={{background: '#FFFDF9'}}
              >
                {tool.icon}
              </div>
              <h3 className="text-sm font-medium mb-1" style={{color: '#111111'}}>{tool.title}</h3>
              <p className="text-xs" style={{color: '#666666'}}>{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}