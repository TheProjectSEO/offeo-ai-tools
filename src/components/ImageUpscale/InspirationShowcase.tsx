export default function InspirationShowcase() {
  const beforeAfterExamples = [
    {
      title: "Portrait Photography",
      description: "Enhanced facial details and skin texture clarity",
      beforeSize: "480x640",
      afterSize: "1920x2560",
      improvement: "4x resolution"
    },
    {
      title: "Landscape Photography", 
      description: "Sharper details in mountains, trees, and sky",
      beforeSize: "640x480",
      afterSize: "2560x1920",
      improvement: "4x resolution"
    },
    {
      title: "Product Images",
      description: "Enhanced product details for e-commerce",
      beforeSize: "512x512",
      afterSize: "2048x2048",
      improvement: "4x resolution"
    },
    {
      title: "Artwork & Paintings",
      description: "Preserved brush strokes and color accuracy",
      beforeSize: "600x800", 
      afterSize: "2400x3200",
      improvement: "4x resolution"
    },
    {
      title: "Historical Photos",
      description: "Restored old photos with enhanced clarity",
      beforeSize: "300x400",
      afterSize: "1200x1600",
      improvement: "4x resolution"
    },
    {
      title: "Screenshots & Graphics",
      description: "Crisp text and sharp interface elements",
      beforeSize: "800x600",
      afterSize: "3200x2400",
      improvement: "4x resolution"
    }
  ]

  return (
    <section className="py-16 md:py-24" style={{background: '#FAFAFA'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4" style={{color: '#111111'}}>
            See the transformation
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            Discover how AI upscaling enhances different types of images while preserving their original character
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterExamples.map((example, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                {/* Before/After visual representation */}
                <div className="relative overflow-hidden rounded-xl aspect-video mb-4 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="absolute inset-0 flex">
                    {/* Before section */}
                    <div className="w-1/2 bg-gradient-to-br from-red-100 to-red-200 relative">
                      <div className="absolute inset-2 bg-white/50 rounded-l-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-10 bg-red-300 rounded mx-auto mb-1"></div>
                          <div className="text-xs text-red-600 font-medium">Before</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* After section */}
                    <div className="w-1/2 bg-gradient-to-br from-blue-100 to-blue-200 relative">
                      <div className="absolute inset-2 bg-white/50 rounded-r-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-10 bg-blue-400 rounded mx-auto mb-1"></div>
                          <div className="text-xs text-blue-600 font-medium">After</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Divider line */}
                  <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white transform -translate-x-0.5"></div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold" style={{color: '#111111'}}>
                    {example.title}
                  </h3>
                  
                  <p className="text-sm" style={{color: '#666666'}}>
                    {example.description}
                  </p>

                  <div className="flex items-center justify-between text-xs" style={{color: '#666666'}}>
                    <div className="space-y-1">
                      <div>From: {example.beforeSize}</div>
                      <div>To: {example.afterSize}</div>
                    </div>
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                      {example.improvement}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm mb-4" style={{color: '#666666'}}>
            Ready to enhance your images?
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transition-colors">
            Start Upscaling
          </button>
        </div>
      </div>
    </section>
  )
}