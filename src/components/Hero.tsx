'use client'

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{background: 'var(--bg-primary)'}}>
      {/* Premium gradient background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute -inset-4 rounded-full blur-3xl" 
          style={{background: 'linear-gradient(to right, var(--accent-coral), var(--accent-blue))'}}
        ></div>
      </div>
      
      <main className="relative z-10 px-6 pt-12 pb-24 md:pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Floating decorative cards */}
              <div className="absolute -top-8 -left-4 w-24 h-32 rounded-2xl shadow-lg hidden md:block" style={{background: 'var(--accent-warm)', transform: 'rotate(-15deg)'}}></div>
              <div className="absolute top-16 -right-8 w-20 h-24 rounded-xl shadow-lg hidden md:block" style={{background: 'linear-gradient(135deg, var(--accent-coral), var(--accent-blue))', transform: 'rotate(12deg)'}}></div>
              
              <div className="relative">
                <div className="w-64 h-96 md:w-80 md:h-[28rem] bg-black rounded-3xl mx-auto relative overflow-hidden shadow-2xl">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  
                  {/* Screen content */}
                  <div className="absolute top-4 left-4 right-4 bottom-4 rounded-2xl overflow-hidden" style={{background: 'var(--bg-primary)'}}>
                    <div className="h-full flex flex-col">
                      {/* Top bar */}
                      <div className="flex justify-between items-center p-4 border-b border-gray-100">
                        <div className="text-sm font-medium">Photo Editor</div>
                        <div className="w-6 h-6 bg-black rounded-full"></div>
                      </div>
                      
                      {/* Main image area */}
                      <div className="flex-1 p-4">
                        <div className="w-full h-48 rounded-xl mb-4" style={{background: 'linear-gradient(135deg, #E8F5E8, #D4F4D4)'}}></div>
                        
                        {/* Tool buttons */}
                        <div className="grid grid-cols-4 gap-2">
                          <div className="h-12 rounded-lg" style={{background: 'var(--accent-warm)'}}></div>
                          <div className="h-12 rounded-lg" style={{background: 'var(--accent-coral)'}}></div>
                          <div className="h-12 rounded-lg" style={{background: 'var(--accent-blue)'}}></div>
                          <div className="h-12 rounded-lg" style={{background: 'linear-gradient(135deg, var(--accent-coral), var(--accent-blue))'}}></div>
                        </div>
                      </div>
                      
                      {/* Bottom action */}
                      <div className="p-4">
                        <div className="w-full h-12 bg-black rounded-xl flex items-center justify-center">
                          <div className="text-white text-sm font-medium">Create Magic</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="w-12 h-8 rounded opacity-60" style={{background: '#111111'}}></div>
                <div className="w-16 h-8 rounded opacity-60" style={{background: '#111111'}}></div>
                <div className="w-14 h-8 rounded opacity-60" style={{background: '#111111'}}></div>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6" style={{color: 'var(--text-primary)'}}>
                Create pro visuals that sell
              </h1>
              <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0" style={{color: 'var(--text-primary)', opacity: '0.7'}}>
                Free AI-powered tools for product photos, social posts, and ads that grow your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="btn-primary">
                  Start creating for free
                </button>
                <button className="btn-secondary">
                  See how it works
                </button>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-4 mt-12">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-pink-400 to-pink-600"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-green-400 to-green-600"></div>
                </div>
                <div className="text-sm" style={{color: '#666666'}}>
                  <span className="font-medium" style={{color: '#111111'}}>4.9/5</span> from over 50,000 users
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}