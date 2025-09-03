export default function TechnicalSpecs() {
  const specs = [
    {
      title: "Upscaling Factor",
      value: "2x - 4x",
      description: "Increase resolution by 2x to 4x the original size",
      icon: "📏"
    },
    {
      title: "Supported Formats",
      value: "JPG, PNG, WebP",
      description: "Works with all major image formats",
      icon: "🖼️"
    },
    {
      title: "Max File Size",
      value: "10MB",
      description: "Upload images up to 10 megabytes",
      icon: "📦"
    },
    {
      title: "Processing Time", 
      value: "15-60 seconds",
      description: "Fast AI processing for quick results",
      icon: "⚡"
    },
    {
      title: "Output Quality",
      value: "Lossless",
      description: "No quality degradation during upscaling",
      icon: "💎"
    },
    {
      title: "AI Model",
      value: "ESRGAN",
      description: "Enhanced Super-Resolution GAN technology",
      icon: "🤖"
    }
  ]

  return (
    <section className="py-16 md:py-24" style={{background: '#FAFAFA'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4" style={{color: '#111111'}}>
            Technical specifications
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            Powered by cutting-edge AI technology to deliver professional-grade image enhancement results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl mb-4">{spec.icon}</div>
                
                <h3 className="text-lg font-semibold mb-2" style={{color: '#111111'}}>
                  {spec.title}
                </h3>
                
                <div className="text-2xl font-bold mb-3 text-blue-600">
                  {spec.value}
                </div>
                
                <p className="text-sm leading-relaxed" style={{color: '#666666'}}>
                  {spec.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4" style={{color: '#111111'}}>
              Why our AI upscaling is superior
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h4 className="font-semibold mb-2" style={{color: '#111111'}}>Deep Learning</h4>
                <p className="text-sm" style={{color: '#666666'}}>
                  Trained on millions of high-quality images to understand patterns and textures
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold mb-2" style={{color: '#111111'}}>Edge Preservation</h4>
                <p className="text-sm" style={{color: '#666666'}}>
                  Maintains sharp edges and fine details that traditional methods lose
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold mb-2" style={{color: '#111111'}}>Real-time Processing</h4>
                <p className="text-sm" style={{color: '#666666'}}>
                  Optimized algorithms for fast processing without compromising quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}