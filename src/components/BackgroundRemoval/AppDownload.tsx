export default function AppDownload() {
  return (
    <section className="py-12 md:py-16" style={{background: '#F5F1EA'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{background: '#FFFDF9'}}>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm font-medium" style={{color: '#111111'}}>Mobile App</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] mb-6" style={{color: '#111111'}}>
              Take OFFEO with you everywhere
            </h2>
            
            <p className="text-lg leading-relaxed mb-8" style={{color: '#666666'}}>
              Edit photos on the go with our mobile app. Same powerful AI, optimized for touch and perfect for quick edits anywhere, anytime.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background: '#A6D8FF'}}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium" style={{color: '#111111'}}>Offline processing after download</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background: '#E8F5E8'}}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium" style={{color: '#111111'}}>Camera integration for instant editing</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background: '#FFC4BC'}}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium" style={{color: '#111111'}}>Share directly to social media</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-3 px-6 py-3 bg-black text-white text-sm font-medium rounded-2xl hover:bg-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <span>App Store</span>
              </button>
              
              <button className="flex items-center justify-center gap-3 px-6 py-3 bg-black text-white text-sm font-medium rounded-2xl hover:bg-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span>Google Play</span>
              </button>
            </div>
          </div>
          
          {/* Right visual */}
          <div className="relative">
            <div className="relative max-w-sm mx-auto">
              {/* Phone mockup */}
              <div 
                className="relative rounded-[3rem] p-2 shadow-2xl"
                style={{background: 'linear-gradient(135deg, #111111, #333333)'}}
              >
                <div 
                  className="relative rounded-[2.5rem] overflow-hidden aspect-[9/19.5]"
                  style={{background: '#FFFDF9'}}
                >
                  {/* Screen content */}
                  <div className="p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-8 h-8 rounded-2xl" style={{background: '#111111'}}></div>
                      <div className="text-xs font-medium" style={{color: '#111111'}}>OFFEO</div>
                      <div className="w-8 h-8 rounded-full" style={{background: '#F5F1EA'}}></div>
                    </div>
                    
                    {/* Main content area */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div 
                        className="w-24 h-24 rounded-3xl mb-4 flex items-center justify-center"
                        style={{background: 'repeating-conic-gradient(#f0f0f0 0% 25%, transparent 0% 50%) 50% / 12px 12px'}}
                      >
                        <div className="w-12 h-16 bg-white/60 rounded-lg shadow-sm"></div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs font-medium mb-1" style={{color: '#111111'}}>Background removed!</div>
                        <div className="text-xs" style={{color: '#666666'}}>Ready to download</div>
                      </div>
                    </div>
                    
                    {/* Bottom action */}
                    <div className="mt-auto">
                      <div className="w-full h-10 bg-black rounded-2xl flex items-center justify-center">
                        <div className="text-xs text-white font-medium">Download PNG</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl shadow-lg" style={{background: '#A6D8FF'}}></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-2xl shadow-lg" style={{background: '#E8F5E8'}}></div>
              
              {/* Rating badge */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl p-3 shadow-xl border">
                <div className="text-center">
                  <div className="flex text-yellow-400 text-xs mb-1">★★★★★</div>
                  <div className="text-xs font-bold" style={{color: '#111111'}}>4.9</div>
                  <div className="text-xs" style={{color: '#666666'}}>50k+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}