export default function ProductShowcase() {
  return (
    <section className="py-12 md:py-16" style={{background: '#F5F1EA'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-black text-white text-xs font-medium rounded-full mb-4">
                FEATURED
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6" style={{color: '#111111'}}>
                Turn product images into revenue at scale
              </h2>
            </div>
            
            <p className="text-lg mb-8 max-w-lg mx-auto lg:mx-0" style={{color: '#666666'}}>
              Transform ordinary product photos into compelling marketing visuals that drive sales. Our AI understands what makes products sell and creates images that convert.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{background: 'linear-gradient(135deg, #FFC4BC, #FFB4A8)'}}>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium mb-1" style={{color: '#111111'}}>Automated background removal</div>
                  <div className="text-sm" style={{color: '#666666'}}>Remove backgrounds instantly with AI precision</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{background: 'linear-gradient(135deg, #A6D8FF, #8CC8FF)'}}>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium mb-1" style={{color: '#111111'}}>Smart scene generation</div>
                  <div className="text-sm" style={{color: '#666666'}}>Place products in professional environments</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{background: 'linear-gradient(135deg, #E8F5E8, #D4F4D4)'}}>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium mb-1" style={{color: '#111111'}}>Brand-consistent styling</div>
                  <div className="text-sm" style={{color: '#666666'}}>Maintain your brand identity across all visuals</div>
                </div>
              </div>
            </div>
            
            <button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
              Try it free
            </button>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Main product showcase grid */}
              <div className="grid grid-cols-3 gap-4">
                {/* Column 1 */}
                <div className="space-y-4">
                  <div 
                    className="w-full h-32 rounded-2xl shadow-lg relative overflow-hidden"
                    style={{background: 'linear-gradient(135deg, #E8F5E8, #D4F4D4)'}}
                  >
                    <div className="absolute bottom-2 left-2 w-8 h-8 bg-white rounded-lg shadow-sm"></div>
                  </div>
                  <div 
                    className="w-full h-24 rounded-2xl shadow-lg"
                    style={{background: 'linear-gradient(135deg, #F3E8FF, #E5D3FF)'}}
                  ></div>
                </div>
                
                {/* Column 2 */}
                <div className="space-y-4 pt-8">
                  <div 
                    className="w-full h-28 rounded-2xl shadow-lg relative overflow-hidden"
                    style={{background: 'linear-gradient(135deg, #FFC4BC, #FFB4A8)'}}
                  >
                    <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full shadow-sm"></div>
                  </div>
                  <div 
                    className="w-full h-20 rounded-2xl shadow-lg"
                    style={{background: '#FFFDF9', border: '2px solid #F5F1EA'}}
                  ></div>
                </div>
                
                {/* Column 3 */}
                <div className="space-y-4">
                  <div 
                    className="w-full h-36 rounded-2xl shadow-lg relative overflow-hidden"
                    style={{background: 'linear-gradient(135deg, #A6D8FF, #8CC8FF)'}}
                  >
                    <div className="absolute bottom-3 left-3 w-12 h-6 bg-white rounded shadow-sm"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating action indicators */}
              <div className="absolute -top-2 right-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg" style={{background: '#111111'}}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="absolute bottom-4 -left-2">
                <div className="px-3 py-1 bg-black text-white text-xs rounded-full">
                  +3 variants
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}