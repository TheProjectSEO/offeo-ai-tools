export default function AppDownload() {
  return (
    <section className="py-16 md:py-24" style={{background: '#FFFDF9'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl overflow-hidden">
          <div className="px-8 md:px-16 py-12 md:py-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Upscale images anywhere
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Take our powerful AI upscaling technology with you. Enhance image quality on your phone, tablet, or desktop.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="#" className="inline-flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-900 transition-colors">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
              
              <a href="#" className="inline-flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-900 transition-colors">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <h3 className="font-semibold mb-2">Mobile Optimization</h3>
                <p className="text-sm opacity-90">Optimized interface for touch devices and mobile workflows</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-2">🔄</div>
                <h3 className="font-semibold mb-2">Sync Across Devices</h3>
                <p className="text-sm opacity-90">Access your enhanced images on all your devices</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold mb-2">Offline Processing</h3>
                <p className="text-sm opacity-90">Process images locally without internet connection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}