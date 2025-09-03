export default function AllFeatures() {
  const features = [
    {
      title: "Multiple Art Styles",
      description: "Generate art in impressionist, abstract, realism, surrealism, and dozens of other artistic movements",
      icon: "🎨"
    },
    {
      title: "High Resolution Output",
      description: "Download your creations in high resolution, perfect for printing and professional use",
      icon: "📐"
    },
    {
      title: "Instant Generation",
      description: "Create stunning artwork in seconds with our lightning-fast AI processing",
      icon: "⚡"
    },
    {
      title: "Unlimited Creativity", 
      description: "No limits on your imagination - describe any concept and watch it come to life",
      icon: "∞"
    },
    {
      title: "Commercial Use Rights",
      description: "Use your generated artwork for personal and commercial projects without restrictions",
      icon: "💼"
    },
    {
      title: "Style Mixing",
      description: "Combine different artistic styles to create unique, never-before-seen art pieces",
      icon: "🔄"
    },
    {
      title: "Color Palette Control",
      description: "Specify exact colors or let AI choose harmonious palettes for your artwork",
      icon: "🌈"
    },
    {
      title: "Artistic References",
      description: "Reference famous artists, art movements, or specific techniques in your prompts",
      icon: "📚"
    }
  ]

  return (
    <section className="py-16 md:py-24" style={{background: '#FFFDF9'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4" style={{color: '#111111'}}>
            Everything you need to create art
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            Powerful features designed to unleash your creativity and bring your artistic visions to life
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
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12">
            <h3 className="text-2xl font-semibold mb-4" style={{color: '#111111'}}>
              Ready to start creating?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto" style={{color: '#666666'}}>
              Join thousands of artists, designers, and creators who are using AI to bring their visions to life
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors text-lg">
              Start Creating Art Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}