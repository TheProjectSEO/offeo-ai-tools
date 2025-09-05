import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6 py-4 sm:py-6 md:py-8" style={{background: 'var(--bg-primary)'}}>
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <img src="/offeo-logo.png" alt="Offeo" className="h-10 sm:h-12 md:h-16 w-auto hover:opacity-80 transition-opacity" />
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <div className="relative group">
            <a href="#" className="hover:opacity-60 transition-colors" style={{color: 'var(--text-primary)'}}>AI Tools</a>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]">
              <div className="p-2">
                <a href="/text-generation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">AI Text Generator</a>
                <a href="/story-generation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">AI Story Generator</a>
                <a href="/dialogue-generation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">AI Dialogue Generator</a>
                <a href="/slogan-generation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">AI Slogan Generator</a>
                <a href="/caption-generation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">AI Caption Generator</a>
                <div className="border-t border-gray-100 my-2"></div>
                <a href="/image-creation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">AI Image Generator</a>
                <a href="/art-generation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">AI Art Generator</a>
                <a href="/logo-generation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">AI Logo Generator</a>
                <a href="/headshot-generation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">AI Headshot Generator</a>
                <a href="/character-generation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">AI Character Generator</a>
                <a href="/face-generation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">AI Face Generator</a>
                <a href="/anime-generation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">AI Anime Generator</a>
                <a href="/cartoon-generation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">AI Cartoon Generator</a>
                <a href="/pokemon-generation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">AI Pokemon Generator</a>
                <a href="/tattoo-generation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">AI Tattoo Generator</a>
                <div className="border-t border-gray-100 my-2"></div>
                <a href="/image-upscale" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">AI Image Upscale</a>
              </div>
            </div>
          </div>
          <a href="/background-removal" className="hover:opacity-60 transition-colors" style={{color: 'var(--text-primary)'}}>Background Removal</a>
          <a href="/blog" className="hover:opacity-60 transition-colors" style={{color: 'var(--text-primary)'}}>Blog</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="#tools-section" className="btn-primary">
            Tools Free
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button style={{color: 'var(--text-primary)'}}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}