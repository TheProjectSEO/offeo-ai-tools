export default function AllFeatures() {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Detection",
      description: "Advanced machine learning identifies subjects with 99.9% accuracy",
      gradient: "linear-gradient(135deg, #FFC4BC, #FFB4A8)",
      bgColor: "#FFF5F5"
    },
    {
      icon: "⚡",
      title: "Instant Processing",
      description: "Get results in under 5 seconds, no matter the image complexity",
      gradient: "linear-gradient(135deg, #A6D8FF, #8CC8FF)",
      bgColor: "#F0F9FF"
    },
    {
      icon: "🎨",
      title: "Edge Preservation",
      description: "Maintains fine details like hair, fur, and transparent objects",
      gradient: "linear-gradient(135deg, #E8F5E8, #D4F4D4)",
      bgColor: "#F0FDF4"
    },
    {
      icon: "📐",
      title: "Multiple Formats",
      description: "Download as PNG, JPG, WebP or PDF with transparent backgrounds",
      gradient: "linear-gradient(135deg, #F3E8FF, #E5D3FF)",
      bgColor: "#FEFBFF"
    },
    {
      icon: "📱",
      title: "Cross-Platform",
      description: "Works seamlessly on desktop, tablet, and mobile devices",
      gradient: "linear-gradient(135deg, #FFE4E6, #FFD1D5)",
      bgColor: "#FFF7F8"
    },
    {
      icon: "🔒",
      title: "Privacy First",
      description: "Images are processed securely and deleted automatically",
      gradient: "linear-gradient(135deg, #E0F2FE, #BAE6FD)",
      bgColor: "#F0F9FF"
    },
    {
      icon: "📦",
      title: "Batch Processing",
      description: "Upload and process up to 100 images simultaneously",
      gradient: "linear-gradient(135deg, #FEF3C7, #FDE68A)",
      bgColor: "#FFFDF7"
    },
    {
      icon: "🎯",
      title: "Smart Cropping",
      description: "Automatically centers and crops your subject for optimal results",
      gradient: "linear-gradient(135deg, #DBEAFE, #BFDBFE)",
      bgColor: "#F8FAFC"
    }
  ]

  return (
    <section className="py-12 md:py-16" style={{background: '#F5F1EA'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4" style={{color: '#111111'}}>
            Everything you need for perfect results
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            Professional-grade background removal powered by cutting-edge AI technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-white/50"
              style={{background: feature.bgColor}}
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl mb-4 shadow-sm"
                style={{background: feature.gradient}}
              >
                {feature.icon}
              </div>
              
              <h3 className="text-lg font-medium mb-3" style={{color: '#111111'}}>
                {feature.title}
              </h3>
              
              <p className="text-sm leading-relaxed" style={{color: '#666666'}}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl mb-8" style={{background: '#FFFDF9'}}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium" style={{color: '#111111'}}>Free forever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-sm font-medium" style={{color: '#111111'}}>No watermarks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <span className="text-sm font-medium" style={{color: '#111111'}}>No sign-up required</span>
            </div>
          </div>
          
          <button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
            Start removing backgrounds
          </button>
        </div>
      </div>
    </section>
  )
}