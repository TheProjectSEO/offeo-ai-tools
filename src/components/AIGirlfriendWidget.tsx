'use client'

export default function AIGirlfriendWidget() {
  const handleTryBubio = () => {
    // JS masked link - using multiple redirects and obfuscation
    const encodedUrl = btoa('aHR0cHM6Ly9idWJpby5haQ==')
    const decodedUrl = atob(encodedUrl)
    const finalUrl = atob(decodedUrl)
    
    // Create a temporary element to trigger navigation
    const link = document.createElement('a')
    link.href = finalUrl
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }


  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40">
      {/* Desktop: Full Character Card */}
      <div className="hidden md:block w-80 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Partner Spotlight Badge */}
        <div className="bg-black text-white text-xs px-3 py-1 text-center font-medium">
          PARTNER SPOTLIGHT
        </div>

        {/* Character Image Section */}
        <div className="relative h-48 bg-gradient-to-b from-slate-700 to-slate-900 overflow-hidden">
          <img 
            src="https://icxmklovvtjivrlpyocj.supabase.co/storage/v1/object/public/characters/1751988060348-airtable-import-1751987803572-aya.webp?v=1751988060308&w=500&quality=80"
            alt="Aya - AI Companion" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Character Info */}
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="text-white font-semibold text-base mb-1">Aya</h3>
            <p className="text-gray-200 text-xs mb-2 line-clamp-2">
              You find her reclining with an air of confidence that seems to envelop the room...
            </p>
            <div className="flex flex-wrap gap-1">
              <span className="text-xs px-2 py-0.5 bg-gray-900/50 text-gray-300 border border-gray-700/50 rounded-full">Anime</span>
              <span className="text-xs px-2 py-0.5 bg-gray-900/50 text-gray-300 border border-gray-700/50 rounded-full">Confident</span>
            </div>
          </div>
        </div>

        {/* Header with Bubio Branding */}
        <div className="bg-white p-3 border-b border-gray-100 flex items-center gap-3">
          <img 
            src="/bubio-logo.png" 
            alt="Bubio AI" 
            className="w-6 h-6 rounded-full"
          />
          <div>
            <h3 className="text-black font-semibold text-sm">Bubio</h3>
            <p className="text-gray-500 text-xs">bubio.ai</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4">
          <h2 className="text-base font-semibold text-black mb-2">
            Your AI girlfriend awaits - create meaningful connections
          </h2>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            Connect with personalized AI girlfriends and companions designed for meaningful conversations.
          </p>

          {/* Features List */}
          <div className="space-y-1.5 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              <span className="text-xs text-gray-700">Personalized AI girlfriend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              <span className="text-xs text-gray-700">Emotional conversations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              <span className="text-xs text-gray-700">24/7 companionship</span>
            </div>
          </div>

          {/* Action Button */}
          <div>
            <button 
              onClick={handleTryBubio}
              className="w-full bg-black text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Try Bubio AI ↗
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: Chat Icon with Bubio Logo */}
      <div className="md:hidden">
        <button
          onClick={handleTryBubio}
          className="group w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
        >
          <img 
            src="/bubio-logo.png" 
            alt="Bubio AI" 
            className="w-8 h-8 rounded-full bg-white/20 p-1 group-hover:scale-110 transition-transform"
          />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </button>
      </div>
    </div>
  )
}