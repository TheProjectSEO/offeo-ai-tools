export default function InspirationShowcase() {
  const artworks = [
    {
      prompt: "Abstract cosmic symphony with swirling galaxies in purple and gold",
      style: "Abstract Expressionism",
      colors: ["#4C1D95", "#7C3AED", "#F59E0B", "#FDE047"]
    },
    {
      prompt: "Serene Japanese garden with cherry blossoms in watercolor style", 
      style: "Watercolor",
      colors: ["#FCA5A5", "#86EFAC", "#7DD3FC", "#C7D2FE"]
    },
    {
      prompt: "Futuristic cityscape with neon lights in cyberpunk art style",
      style: "Digital Art",
      colors: ["#06B6D4", "#8B5CF6", "#F59E0B", "#EF4444"]
    },
    {
      prompt: "Renaissance portrait of a woman with flowing hair and gentle expression",
      style: "Classical Renaissance",
      colors: ["#92400E", "#F59E0B", "#FEF3C7", "#78716C"]
    },
    {
      prompt: "Minimalist mountain landscape at sunset with geometric shapes",
      style: "Minimalist",
      colors: ["#FF6B6B", "#FFE66D", "#4ECDC4", "#45B7D1"]
    },
    {
      prompt: "Pop art portrait with bold colors and comic book style",
      style: "Pop Art", 
      colors: ["#FF6B95", "#4ECDC4", "#45B7D1", "#FFA07A"]
    }
  ]

  return (
    <section className="py-16 md:py-24" style={{background: '#FAFAFA'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4" style={{color: '#111111'}}>
            Art inspiration gallery
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            Discover the endless possibilities of AI-generated art across different styles and themes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-square mb-4 bg-gradient-to-br" 
                   style={{background: `linear-gradient(135deg, ${artwork.colors.join(', ')})`}}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                
                {/* Placeholder art representation */}
                <div className="absolute inset-4 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-3 bg-white/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <div className="text-xs font-medium opacity-90">{artwork.style}</div>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-xs font-medium text-gray-700">{artwork.style}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium" style={{color: '#111111'}}>
                  "{artwork.prompt}"
                </p>
                <div className="flex gap-2">
                  {artwork.colors.map((color, colorIndex) => (
                    <div 
                      key={colorIndex}
                      className="w-4 h-4 rounded-full border border-gray-200"
                      style={{backgroundColor: color}}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm mb-4" style={{color: '#666666'}}>
            Ready to create your own masterpiece?
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors">
            Start Creating Art
          </button>
        </div>
      </div>
    </section>
  )
}