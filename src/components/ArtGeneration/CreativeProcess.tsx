export default function CreativeProcess() {
  return (
    <section className="py-16 md:py-24" style={{background: '#FAFAFA'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{background: '#F5F1EA'}}>
              <span className="text-sm font-medium" style={{color: '#111111'}}>Creative Process</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-6" style={{color: '#111111'}}>
              From concept to<br />masterpiece in seconds
            </h2>
            
            <p className="text-lg leading-relaxed mb-8" style={{color: '#666666'}}>
              Our advanced AI art generator combines multiple neural networks trained on millions of artistic masterpieces to understand style, composition, and technique.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">🧠</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{color: '#111111'}}>AI Understanding</h3>
                  <p className="text-sm" style={{color: '#666666'}}>
                    Analyzes your prompt to understand artistic intent, mood, and style preferences
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">🎨</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{color: '#111111'}}>Style Application</h3>
                  <p className="text-sm" style={{color: '#666666'}}>
                    Applies artistic techniques from classical to contemporary movements
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">✨</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{color: '#111111'}}>Masterpiece Creation</h3>
                  <p className="text-sm" style={{color: '#666666'}}>
                    Generates unique, high-quality artwork that captures your vision
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1" style={{color: '#111111'}}>10M+</div>
                  <div className="text-xs" style={{color: '#666666'}}>Training Images</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1" style={{color: '#111111'}}>50+</div>
                  <div className="text-xs" style={{color: '#666666'}}>Art Styles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1" style={{color: '#111111'}}>&lt;30s</div>
                  <div className="text-xs" style={{color: '#666666'}}>Generation Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              {/* Creative process visualization */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 text-sm font-bold">1</span>
                  </div>
                  <div className="flex-1 h-2 bg-gradient-to-r from-purple-200 to-purple-400 rounded-full"></div>
                  <span className="text-sm font-medium" style={{color: '#111111'}}>Prompt Analysis</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-bold">2</span>
                  </div>
                  <div className="flex-1 h-2 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full"></div>
                  <span className="text-sm font-medium" style={{color: '#111111'}}>Style Processing</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-sm font-bold">3</span>
                  </div>
                  <div className="flex-1 h-2 bg-gradient-to-r from-green-200 to-green-400 rounded-full"></div>
                  <span className="text-sm font-medium" style={{color: '#111111'}}>Art Generation</span>
                </div>
              </div>

              {/* Artistic representation */}
              <div className="mt-8 aspect-square rounded-2xl bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 relative overflow-hidden">
                <div className="absolute inset-4 rounded-xl bg-white/50 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎭</div>
                    <div className="text-sm font-medium" style={{color: '#111111'}}>AI Art Magic</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-200 rounded-2xl rotate-12 opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}