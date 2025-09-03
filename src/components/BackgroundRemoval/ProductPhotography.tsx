export default function ProductPhotography() {
  return (
    <section className="py-12 md:py-16" style={{background: '#F5F1EA'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{background: '#FFFDF9'}}>
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span className="text-sm font-medium" style={{color: '#111111'}}>Product Photography</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] mb-6" style={{color: '#111111'}}>
              Improve your product photos in seconds
            </h2>
            
            <p className="text-lg leading-relaxed mb-8" style={{color: '#666666'}}>
              Transform ordinary product shots into professional catalog-ready images. Remove distracting backgrounds and let your products shine with crystal-clear transparency.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{background: '#A6D8FF'}}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium mb-1" style={{color: '#111111'}}>Instant background removal</h4>
                  <p className="text-sm" style={{color: '#666666'}}>AI detects your product automatically</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{background: '#E8F5E8'}}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium mb-1" style={{color: '#111111'}}>Preserve fine details</h4>
                  <p className="text-sm" style={{color: '#666666'}}>Keep textures, edges, and reflections intact</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{background: '#FFC4BC'}}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium mb-1" style={{color: '#111111'}}>Batch processing available</h4>
                  <p className="text-sm" style={{color: '#666666'}}>Process hundreds of images at once</p>
                </div>
              </div>
            </div>
            
            <button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
              Start improving photos
            </button>
          </div>
          
          {/* Right visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div 
                className="aspect-square"
                style={{background: 'repeating-conic-gradient(#f0f0f0 0% 25%, transparent 0% 50%) 50% / 20px 20px'}}
              >
                <div className="absolute inset-8 flex items-center justify-center">
                  <div 
                    className="w-32 h-40 rounded-2xl shadow-lg relative"
                    style={{background: 'linear-gradient(135deg, #FFC4BC, #FFB4A8)'}}
                  >
                    <div className="absolute inset-2 bg-white/20 rounded-xl"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-white/40 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl shadow-lg" style={{background: '#A6D8FF'}}></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-2xl shadow-lg" style={{background: '#E8F5E8'}}></div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1" style={{color: '#111111'}}>2.3s</div>
                <div className="text-xs" style={{color: '#666666'}}>Average processing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}