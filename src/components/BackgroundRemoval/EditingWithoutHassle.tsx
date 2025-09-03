export default function EditingWithoutHassle() {
  const features = [
    {
      icon: "🚀",
      title: "Lightning fast",
      description: "Process images in under 5 seconds",
      gradient: "linear-gradient(135deg, #FFC4BC, #FFB4A8)"
    },
    {
      icon: "🎯",
      title: "Pixel perfect",
      description: "AI precision for flawless edges",
      gradient: "linear-gradient(135deg, #A6D8FF, #8CC8FF)"
    },
    {
      icon: "📱",
      title: "Works everywhere",
      description: "Desktop, mobile, and tablets",
      gradient: "linear-gradient(135deg, #E8F5E8, #D4F4D4)"
    },
    {
      icon: "💾",
      title: "High quality",
      description: "Download in multiple formats",
      gradient: "linear-gradient(135deg, #F3E8FF, #E5D3FF)"
    }
  ]

  return (
    <section className="py-12 md:py-16" style={{background: '#FFFDF9'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div 
                className="w-full aspect-square rounded-3xl shadow-2xl relative overflow-hidden"
                style={{background: '#F5F1EA'}}
              >
                {/* Before/After comparison */}
                <div className="absolute inset-6 grid grid-cols-2 gap-4">
                  {/* Before */}
                  <div className="relative">
                    <div 
                      className="w-full h-full rounded-2xl relative overflow-hidden"
                      style={{background: 'linear-gradient(135deg, #E0E7FF, #C7D2FE)'}}
                    >
                      <div className="absolute inset-4 bg-white/20 rounded-xl"></div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-2">
                          <div className="text-xs text-white font-medium">Original</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="relative">
                    <div 
                      className="w-full h-full rounded-2xl relative overflow-hidden"
                      style={{background: 'repeating-conic-gradient(#f0f0f0 0% 25%, transparent 0% 50%) 50% / 15px 15px'}}
                    >
                      <div className="absolute inset-4 flex items-center justify-center">
                        <div className="w-16 h-20 bg-white/60 rounded-lg shadow-lg"></div>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="bg-black/80 backdrop-blur-sm rounded-lg p-2">
                          <div className="text-xs text-white font-medium">Transparent</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Center divider */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200">
                  <div className="w-3 h-3 border-r-2 border-t-2 border-gray-400 transform rotate-45"></div>
                </div>
              </div>
              
              {/* Floating quality badge */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border">
                <div className="text-center">
                  <div className="text-sm font-bold text-green-600 mb-1">99.9%</div>
                  <div className="text-xs" style={{color: '#666666'}}>Accuracy</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{background: '#F5F1EA'}}>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium" style={{color: '#111111'}}>No Hassle Editing</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] mb-6" style={{color: '#111111'}}>
              Photo editing without the complexity
            </h2>
            
            <p className="text-lg leading-relaxed mb-8" style={{color: '#666666'}}>
              Skip the learning curve of complex software. Our AI handles the technical work so you can focus on creativity. No tutorials, no subscriptions, just results.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-2xl" style={{background: '#F5F1EA'}}>
                  <div 
                    className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{background: feature.gradient}}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1" style={{color: '#111111'}}>
                      {feature.title}
                    </h4>
                    <p className="text-sm" style={{color: '#666666'}}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
                Try for free
              </button>
              <button className="px-8 py-3 border-2 border-gray-200 text-sm font-medium rounded-full hover:border-gray-300 transition-colors" style={{color: '#111111'}}>
                See examples
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}