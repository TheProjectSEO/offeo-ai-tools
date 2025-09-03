'use client'

export default function BackgroundRemovalHero() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-20" style={{background: '#FFFDF9'}}>
      {/* Premium gradient background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div 
          className="absolute -inset-4 rounded-full blur-3xl" 
          style={{background: 'linear-gradient(to right, #FFC4BC, #A6D8FF)'}}
        ></div>
      </div>
      
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main heading */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{background: '#F5F1EA'}}>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium" style={{color: '#111111'}}>AI-Powered</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6" style={{color: '#111111'}}>
              Make your photo&rsquo;s<br />background transparent
            </h1>
            
            <p className="text-lg max-w-2xl mx-auto mb-8" style={{color: '#666666'}}>
              Remove image backgrounds automatically in just one click. Our AI instantly detects the subject and creates perfect transparent backgrounds.
            </p>
          </div>

          {/* Upload interface */}
          <div className="max-w-2xl mx-auto mb-12">
            <div 
              className="relative border-2 border-dashed border-gray-300 rounded-3xl p-12 bg-white/50 backdrop-blur-sm hover:border-gray-400 transition-colors cursor-pointer group"
              style={{minHeight: '320px'}}
            >
              {/* Before/After images */}
              <div className="flex items-center justify-center gap-8 mb-8">
                {/* Before image */}
                <div className="relative">
                  <div 
                    className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-lg relative overflow-hidden"
                    style={{background: 'linear-gradient(135deg, #E8F5E8, #D4F4D4)'}}
                  >
                    <div className="absolute inset-2 bg-white rounded-xl flex items-center justify-center">
                      <div className="w-8 h-12 rounded-lg" style={{background: '#FFC4BC'}}></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="px-2 py-1 bg-gray-800 text-white text-xs rounded">Before</div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="text-2xl text-gray-400">→</div>
                
                {/* After image */}
                <div className="relative">
                  <div 
                    className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-lg relative overflow-hidden"
                    style={{background: 'repeating-conic-gradient(#f0f0f0 0% 25%, transparent 0% 50%) 50% / 20px 20px'}}
                  >
                    <div className="absolute inset-2 flex items-center justify-center">
                      <div className="w-8 h-12 rounded-lg" style={{background: '#FFC4BC'}}></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="px-2 py-1 bg-gray-800 text-white text-xs rounded">After</div>
                  </div>
                </div>
              </div>

              {/* Upload area */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{background: '#F5F1EA'}}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" style={{color: '#111111'}} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-medium mb-2" style={{color: '#111111'}}>
                  Drop an image here, or click to browse
                </h3>
                <p className="text-sm mb-6" style={{color: '#666666'}}>
                  Supports JPG, PNG, WebP • Max 10MB
                </p>
                
                <button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
                  Choose from computer
                </button>
              </div>
            </div>
          </div>

          {/* Sample images */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-sm mb-6" style={{color: '#666666'}}>
              Or try with these sample images
            </p>
            
            <div className="flex justify-center gap-4 flex-wrap">
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  key={i}
                  className="w-16 h-16 rounded-xl shadow-sm hover:scale-110 transition-transform cursor-pointer"
                  style={{background: `linear-gradient(135deg, ${i === 1 ? '#FFC4BC, #FFB4A8' : i === 2 ? '#A6D8FF, #8CC8FF' : i === 3 ? '#E8F5E8, #D4F4D4' : i === 4 ? '#F3E8FF, #E5D3FF' : '#FFE4E6, #FFD1D5'})`}}
                ></button>
              ))}
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 text-sm" style={{color: '#666666'}}>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              <span>100% automatic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              <span>5-second processing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
              <span>HD quality</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}