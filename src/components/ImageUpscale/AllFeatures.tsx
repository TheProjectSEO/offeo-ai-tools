export default function AllFeatures() {
  const features = [
    {
      title: "4x Resolution Boost",
      description: "Increase image resolution by up to 4 times while maintaining exceptional quality and detail",
      icon: "📈"
    },
    {
      title: "Smart Detail Enhancement",
      description: "AI algorithms identify and enhance important details, textures, and patterns in your images",
      icon: "🔍"
    },
    {
      title: "Noise Reduction",
      description: "Automatically remove grain, artifacts, and noise while upscaling for cleaner results",
      icon: "✨"
    },
    {
      title: "Edge Sharpening", 
      description: "Preserve and enhance sharp edges, lines, and boundaries for professional-quality output",
      icon: "⚡"
    },
    {
      title: "Batch Processing",
      description: "Upload and enhance multiple images at once to save time on large projects",
      icon: "📚"
    },
    {
      title: "Format Flexibility",
      description: "Support for JPG, PNG, and WebP formats with lossless quality preservation",
      icon: "🖼️"
    },
    {
      title: "Print-Ready Output",
      description: "Generate high-resolution images perfect for printing, publishing, and professional use",
      icon: "🖨️"
    },
    {
      title: "Instant Processing",
      description: "Fast AI processing delivers enhanced images in under 60 seconds for most files",
      icon: "🚀"
    }
  ]

  return (
    <section className="py-16 md:py-24" style={{background: '#FFFDF9'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4" style={{color: '#111111'}}>
            Professional image enhancement
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            Comprehensive features designed to transform your images into high-quality, professional-grade visuals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-6 h-full shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-3" style={{color: '#111111'}}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{color: '#666666'}}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
            <h3 className="text-2xl font-semibold mb-4" style={{color: '#111111'}}>
              Transform your images today
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto" style={{color: '#666666'}}>
              Join photographers, designers, and creators who trust our AI to enhance their visual content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-colors text-lg">
                Start Upscaling Now
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-gray-300 transition-colors text-lg">
                View Examples
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}