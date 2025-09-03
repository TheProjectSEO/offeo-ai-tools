export default function QualityComparison() {
  return (
    <section className="py-16 md:py-24" style={{background: '#FFFDF9'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{background: '#F5F1EA'}}>
              <span className="text-sm font-medium" style={{color: '#111111'}}>Quality Enhancement</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-6" style={{color: '#111111'}}>
              Dramatically improve<br />image quality
            </h2>
            
            <p className="text-lg leading-relaxed mb-8" style={{color: '#666666'}}>
              Our AI upscaling technology doesn't just make images bigger – it makes them better. Advanced algorithms analyze patterns and enhance details that traditional scaling methods lose.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">🔍</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{color: '#111111'}}>Edge Enhancement</h3>
                  <p className="text-sm" style={{color: '#666666'}}>
                    Sharpen and refine edges while maintaining natural appearance
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">🎨</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{color: '#111111'}}>Texture Preservation</h3>
                  <p className="text-sm" style={{color: '#666666'}}>
                    Maintain and enhance textures, patterns, and fine details
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">⚡</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{color: '#111111'}}>Noise Reduction</h3>
                  <p className="text-sm" style={{color: '#666666'}}>
                    Remove artifacts and noise while upscaling for cleaner results
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1" style={{color: '#111111'}}>4x</div>
                  <div className="text-xs" style={{color: '#666666'}}>Resolution Boost</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1" style={{color: '#111111'}}>95%</div>
                  <div className="text-xs" style={{color: '#666666'}}>Detail Preserved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1" style={{color: '#111111'}}>&lt;60s</div>
                  <div className="text-xs" style={{color: '#666666'}}>Processing Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual comparison */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              {/* Comparison slider visualization */}
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                {/* Before section */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-200">
                  <div className="absolute inset-4 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-20 bg-red-300 rounded-lg mx-auto mb-2 relative">
                        <div className="absolute inset-1 bg-red-400 rounded opacity-50"></div>
                      </div>
                      <div className="text-sm font-medium text-red-600">Low Resolution</div>
                      <div className="text-xs text-red-500">Pixelated • Blurry</div>
                    </div>
                  </div>
                </div>
                
                {/* After section (partially visible) */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200" 
                     style={{clipPath: 'polygon(60% 0%, 100% 0%, 100% 100%, 60% 100%)'}}>
                  <div className="absolute inset-4 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-20 bg-blue-400 rounded-lg mx-auto mb-2 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600"></div>
                      </div>
                      <div className="text-sm font-medium text-blue-600">High Resolution</div>
                      <div className="text-xs text-blue-500">Sharp • Detailed</div>
                    </div>
                  </div>
                </div>
                
                {/* Slider handle */}
                <div className="absolute top-1/2 left-3/5 w-8 h-8 bg-white rounded-full shadow-lg transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center cursor-pointer">
                  <div className="w-1 h-4 bg-gray-400 rounded"></div>
                </div>
                
                {/* Divider line */}
                <div className="absolute inset-y-0 left-3/5 w-0.5 bg-white transform -translate-x-0.5"></div>
              </div>

              {/* Labels */}
              <div className="flex justify-between mt-4 text-sm">
                <div className="text-red-600 font-medium">Before</div>
                <div className="text-blue-600 font-medium">After</div>
              </div>
            </div>

            {/* Floating enhancement badges */}
            <div className="absolute -top-4 -left-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              +300% Detail
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              4K Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}