export default function ArtStylesShowcase() {
  const artStyles = [
    {
      name: "Impressionism",
      description: "Soft brushstrokes, light effects, and vibrant colors reminiscent of Monet and Renoir",
      features: ["Light & color focus", "Visible brushstrokes", "Atmospheric effects"],
      gradient: "from-blue-200 via-purple-200 to-pink-200"
    },
    {
      name: "Abstract Expressionism", 
      description: "Bold, dynamic compositions with emotional intensity and non-representational forms",
      features: ["Emotional expression", "Bold colors", "Dynamic composition"],
      gradient: "from-red-200 via-orange-200 to-yellow-200"
    },
    {
      name: "Renaissance",
      description: "Classical techniques with perfect proportions, realistic details, and religious themes",
      features: ["Perfect proportions", "Realistic details", "Classical composition"],
      gradient: "from-amber-200 via-orange-200 to-red-200"
    },
    {
      name: "Surrealism",
      description: "Dream-like imagery, unexpected juxtapositions, and subconscious exploration",
      features: ["Dream-like imagery", "Unexpected elements", "Symbolic meaning"],
      gradient: "from-purple-200 via-pink-200 to-indigo-200"
    },
    {
      name: "Minimalism",
      description: "Simple forms, clean lines, and reduced color palettes for maximum impact",
      features: ["Simple forms", "Clean lines", "Reduced palette"],
      gradient: "from-gray-200 via-slate-200 to-zinc-200"
    },
    {
      name: "Pop Art",
      description: "Bright colors, bold graphics, and contemporary culture references",
      features: ["Bright colors", "Bold graphics", "Cultural references"],
      gradient: "from-cyan-200 via-blue-200 to-purple-200"
    }
  ]

  return (
    <section className="py-16 md:py-24" style={{background: '#FFFDF9'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4" style={{color: '#111111'}}>
            Master every artistic style
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            Our AI understands the nuances of different art movements and styles, from classical to contemporary
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artStyles.map((style, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className={`w-full h-32 rounded-xl bg-gradient-to-br ${style.gradient} mb-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-2xl font-bold text-gray-700">{style.name.split('')[0]}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3" style={{color: '#111111'}}>
                  {style.name}
                </h3>
                
                <p className="text-sm mb-4 leading-relaxed" style={{color: '#666666'}}>
                  {style.description}
                </p>

                <div className="space-y-2">
                  {style.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-xs" style={{color: '#666666'}}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-xl font-semibold mb-3" style={{color: '#111111'}}>
              Don't see your preferred style?
            </h3>
            <p className="text-sm mb-6" style={{color: '#666666'}}>
              Our AI can interpret and recreate almost any artistic style. Just describe it in your prompt, and watch the magic happen.
            </p>
            <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-900 transition-colors">
              Try Custom Styles
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}