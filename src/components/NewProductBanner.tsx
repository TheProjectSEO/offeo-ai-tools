export default function NewProductBanner() {
  return (
    <section className="py-12 md:py-16" style={{background: '#F5F1EA'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Product showcase cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div 
                    className="w-full h-32 rounded-2xl shadow-lg relative overflow-hidden"
                    style={{background: 'linear-gradient(135deg, #FFC4BC, #FFB4A8)'}}
                  >
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-full h-8 rounded-lg" style={{background: 'rgba(255,255,255,0.3)'}}></div>
                    </div>
                  </div>
                  <div 
                    className="w-full h-24 rounded-2xl shadow-lg"
                    style={{background: 'linear-gradient(135deg, #A6D8FF, #8CC8FF)'}}
                  ></div>
                </div>
                <div className="space-y-4 pt-8">
                  <div 
                    className="w-full h-28 rounded-2xl shadow-lg"
                    style={{background: 'linear-gradient(135deg, #E8F5E8, #D4F4D4)'}}
                  ></div>
                  <div 
                    className="w-full h-20 rounded-2xl shadow-lg"
                    style={{background: 'linear-gradient(135deg, #F3E8FF, #E5D3FF)'}}
                  ></div>
                </div>
              </div>
              
              {/* NEW PRODUCT badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="px-4 py-2 bg-black text-white text-xs font-medium rounded-full flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  NEW PRODUCT
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6" style={{color: '#111111'}}>
              Give your products the visuals they deserve
            </h2>
            <p className="text-lg mb-8 max-w-lg mx-auto lg:mx-0" style={{color: '#666666'}}>
              Create stunning product photos and marketing visuals in minutes. Our AI understands your brand and creates content that converts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
                Try it now
              </button>
              <button 
                className="px-8 py-3 text-black text-sm font-medium rounded-full transition-colors border border-gray-200"
                style={{background: '#FFFDF9'}}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}