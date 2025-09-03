export default function MultiDevice() {
  return (
    <section className="py-12 md:py-16" style={{background: '#F5F1EA'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6" style={{color: '#111111'}}>
              Create visuals across all devices
            </h2>
            <p className="text-lg mb-8 max-w-lg mx-auto lg:mx-0" style={{color: '#666666'}}>
              From quick mobile edits to detailed desktop workflows, OFFEO adapts to how you work. Start on one device, finish on another.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-8 h-8 rounded-2xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #FFC4BC, #FFB4A8)'}}>
                  <span className="text-sm">📱</span>
                </div>
                <span className="text-sm font-medium" style={{color: '#111111'}}>Mobile-first design</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-8 h-8 rounded-2xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #A6D8FF, #8CC8FF)'}}>
                  <span className="text-sm">💻</span>
                </div>
                <span className="text-sm font-medium" style={{color: '#111111'}}>Desktop power tools</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-8 h-8 rounded-2xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #E8F5E8, #D4F4D4)'}}>
                  <span className="text-sm">☁️</span>
                </div>
                <span className="text-sm font-medium" style={{color: '#111111'}}>Cloud synchronization</span>
              </div>
            </div>
            
            <button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
              Try on any device
            </button>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative flex items-end justify-center gap-6">
              {/* Mobile phone */}
              <div className="w-24 h-48 bg-black rounded-2xl shadow-xl relative">
                <div className="absolute top-1 left-1 right-1 bottom-1 rounded-xl overflow-hidden" style={{background: '#FFFDF9'}}>
                  <div className="h-full flex flex-col">
                    <div className="flex-1 p-2">
                      <div className="w-full h-8 rounded mb-2" style={{background: 'linear-gradient(135deg, #FFC4BC, #FFB4A8)'}}></div>
                      <div className="grid grid-cols-2 gap-1">
                        <div className="h-6 rounded" style={{background: '#F5F1EA'}}></div>
                        <div className="h-6 rounded" style={{background: 'linear-gradient(135deg, #A6D8FF, #8CC8FF)'}}></div>
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="w-full h-6 bg-black rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tablet */}
              <div className="w-32 h-44 bg-black rounded-2xl shadow-xl relative">
                <div className="absolute top-1 left-1 right-1 bottom-1 rounded-xl overflow-hidden" style={{background: '#FFFDF9'}}>
                  <div className="h-full flex flex-col">
                    <div className="p-2 border-b border-gray-100">
                      <div className="w-full h-4 rounded" style={{background: '#F5F1EA'}}></div>
                    </div>
                    <div className="flex-1 p-2">
                      <div className="w-full h-16 rounded mb-2" style={{background: 'linear-gradient(135deg, #E8F5E8, #D4F4D4)'}}></div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="h-4 rounded" style={{background: '#F5F1EA'}}></div>
                        <div className="h-4 rounded" style={{background: 'linear-gradient(135deg, #FFC4BC, #FFB4A8)'}}></div>
                        <div className="h-4 rounded" style={{background: 'linear-gradient(135deg, #A6D8FF, #8CC8FF)'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Laptop */}
              <div className="w-40 h-24 relative">
                <div className="w-full h-20 rounded-t-lg shadow-xl" style={{background: '#F5F1EA'}}>
                  <div className="p-2 h-full">
                    <div className="w-full h-full rounded" style={{background: '#FFFDF9'}}>
                      <div className="p-1">
                        <div className="w-full h-2 rounded mb-1" style={{background: '#F5F1EA'}}></div>
                        <div className="grid grid-cols-4 gap-0.5">
                          <div className="h-3 rounded" style={{background: 'linear-gradient(135deg, #FFC4BC, #FFB4A8)'}}></div>
                          <div className="h-3 rounded" style={{background: 'linear-gradient(135deg, #A6D8FF, #8CC8FF)'}}></div>
                          <div className="h-3 rounded" style={{background: 'linear-gradient(135deg, #E8F5E8, #D4F4D4)'}}></div>
                          <div className="h-3 rounded" style={{background: 'linear-gradient(135deg, #F3E8FF, #E5D3FF)'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-4 rounded-b-2xl shadow-sm" style={{background: '#FFFDF9'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}