export default function OnBrandVisuals() {
  return (
    <section className="py-12 md:py-16" style={{background: '#FFFDF9'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Main showcase card */}
              <div 
                className="w-full h-80 rounded-2xl shadow-2xl relative overflow-hidden"
                style={{background: 'linear-gradient(135deg, #E8F5E8, #D4F4D4)'}}
              >
                {/* Browser-like header */}
                <div className="flex items-center gap-2 p-4 border-b border-white/20">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 text-center text-sm font-medium opacity-70">
                    Brand Guidelines
                  </div>
                </div>
                
                {/* Content area */}
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-lg font-medium mb-2" style={{color: '#111111'}}>
                      Fresh & Organic
                    </div>
                    <div className="text-sm opacity-70">
                      Brand Identity System
                    </div>
                  </div>
                  
                  {/* Color palette */}
                  <div className="mb-6">
                    <div className="text-sm font-medium mb-3" style={{color: '#111111'}}>Colors</div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-lg" style={{background: 'linear-gradient(135deg, #E8F5E8, #D4F4D4)'}}></div>
                      <div className="w-8 h-8 rounded-lg" style={{background: 'linear-gradient(135deg, #FFC4BC, #FFB4A8)'}}></div>
                      <div className="w-8 h-8 rounded-lg" style={{background: 'linear-gradient(135deg, #A6D8FF, #8CC8FF)'}}></div>
                      <div className="w-8 h-8 rounded-lg" style={{background: '#FFFDF9'}}></div>
                    </div>
                  </div>
                  
                  {/* Typography */}
                  <div className="mb-6">
                    <div className="text-sm font-medium mb-3" style={{color: '#111111'}}>Typography</div>
                    <div className="space-y-1">
                      <div className="text-lg font-medium">Inter Medium</div>
                      <div className="text-sm opacity-70">Inter Regular</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating product examples */}
              <div className="absolute -right-4 top-8 w-20 h-24 rounded-xl shadow-lg" style={{background: 'linear-gradient(135deg, #FFC4BC, #FFB4A8)'}}></div>
              <div className="absolute -left-4 bottom-8 w-16 h-20 rounded-xl shadow-lg" style={{background: 'linear-gradient(135deg, #F3E8FF, #E5D3FF)'}}></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6" style={{color: '#111111'}}>
              On-brand visuals at scale made simple
            </h2>
            <p className="text-lg mb-8 max-w-lg mx-auto lg:mx-0" style={{color: '#666666'}}>
              Upload your brand guidelines once and let AI ensure every visual maintains perfect brand consistency across all your content.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{background: 'linear-gradient(135deg, #E8F5E8, #D4F4D4)'}}>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <div className="text-left">
                  <div className="font-medium mb-1" style={{color: '#111111'}}>Smart brand recognition</div>
                  <div className="text-sm" style={{color: '#666666'}}>AI learns your brand colors, fonts, and style automatically</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{background: 'linear-gradient(135deg, #FFC4BC, #FFB4A8)'}}>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <div className="text-left">
                  <div className="font-medium mb-1" style={{color: '#111111'}}>Consistent output</div>
                  <div className="text-sm" style={{color: '#666666'}}>Every visual follows your brand guidelines perfectly</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{background: 'linear-gradient(135deg, #A6D8FF, #8CC8FF)'}}>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <div className="text-left">
                  <div className="font-medium mb-1" style={{color: '#111111'}}>Team collaboration</div>
                  <div className="text-sm" style={{color: '#666666'}}>Share brand assets and maintain consistency across teams</div>
                </div>
              </div>
            </div>
            
            <button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
              Upload brand kit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}