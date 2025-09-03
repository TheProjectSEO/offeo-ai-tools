export default function ProVisuals() {
  return (
    <section className="py-12 md:py-16" style={{background: '#FFFDF9'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {/* Left column - lifestyle photos */}
              <div className="space-y-4">
                <div 
                  className="w-full h-48 rounded-2xl shadow-lg relative overflow-hidden"
                  style={{background: 'linear-gradient(135deg, #FFC4BC, #FFB4A8)'}}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-xs font-medium">Lifestyle</div>
                  </div>
                </div>
                
                <div 
                  className="w-full h-32 rounded-2xl shadow-lg relative overflow-hidden"
                  style={{background: 'linear-gradient(135deg, #E8F5E8, #D4F4D4)'}}
                >
                  <div className="absolute bottom-4 left-4">
                    <div className="text-xs font-medium">Product Focus</div>
                  </div>
                </div>
              </div>
              
              {/* Right column - promotional content */}
              <div className="space-y-4 pt-8">
                <div 
                  className="w-full h-36 rounded-2xl shadow-lg relative overflow-hidden"
                  style={{background: 'linear-gradient(135deg, #A6D8FF, #8CC8FF)'}}
                >
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-xs font-medium">Social Ready</div>
                  </div>
                </div>
                
                <div 
                  className="w-full h-28 rounded-2xl shadow-lg relative overflow-hidden"
                  style={{background: 'linear-gradient(135deg, #F3E8FF, #E5D3FF)'}}
                >
                  <div className="absolute bottom-4 left-4">
                    <div className="text-xs font-medium">Ad Creative</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6" style={{color: '#111111'}}>
              Pro visuals without the pro budget
            </h2>
            <p className="text-lg mb-8 max-w-lg mx-auto lg:mx-0" style={{color: '#666666'}}>
              Get studio-quality product photos and marketing visuals at a fraction of the cost. No expensive equipment or photo shoots required.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 rounded-full border-2 border-white" style={{background: 'linear-gradient(135deg, #FFC4BC, #FFB4A8)'}}></div>
                  <div className="w-6 h-6 rounded-full border-2 border-white" style={{background: 'linear-gradient(135deg, #A6D8FF, #8CC8FF)'}}></div>
                  <div className="w-6 h-6 rounded-full border-2 border-white" style={{background: 'linear-gradient(135deg, #E8F5E8, #D4F4D4)'}}></div>
                  <div className="w-6 h-6 rounded-full border-2 border-white" style={{background: 'linear-gradient(135deg, #F3E8FF, #E5D3FF)'}}></div>
                </div>
                <div className="text-sm" style={{color: '#666666'}}>
                  <span className="font-medium" style={{color: '#111111'}}>20+ styles</span> ready to use
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background: '#F5F1EA'}}>
                  <div className="text-sm">⚡</div>
                </div>
                <div className="text-sm" style={{color: '#666666'}}>
                  <span className="font-medium" style={{color: '#111111'}}>3 seconds</span> average processing time
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background: '#F5F1EA'}}>
                  <div className="text-sm">✨</div>
                </div>
                <div className="text-sm" style={{color: '#666666'}}>
                  <span className="font-medium" style={{color: '#111111'}}>4K resolution</span> output quality
                </div>
              </div>
            </div>
            
            <button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
              Start for free
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}