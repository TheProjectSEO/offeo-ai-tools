export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 md:py-16" style={{background: '#FFFDF9', color: '#111111'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6">
              <div className="mb-4">
                <img src="/offeo-logo.png" alt="Offeo" className="h-10 sm:h-12 md:h-14 w-auto" />
              </div>
              <p className="text-sm opacity-70 max-w-xs">
                AI-powered tools for modern creators and brands.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">AI Tools</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Background Remover</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Smart Copy</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Color Magic</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Logo Studio</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Image Enhancer</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Brand Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Resources</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Creative Guides</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Video Tutorials</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Templates</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Case Studies</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Company</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Press Kit</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Support</a></li>
              <li><a href="https://Bubio.ai" className="hover:opacity-100 transition-opacity" target="_blank" rel="noopener noreferrer">Bubio - AI Chat Companions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Legal</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">GDPR</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Accessibility</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Licenses</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-black/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm opacity-60 mb-4 md:mb-0">
            © 2024 OFFEO. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-sm opacity-70">Made with ❤️ for creators</div>
            <button 
              className="px-4 py-2 text-xs font-medium rounded-full transition-all hover:scale-105"
              style={{background: '#F5F1EA', color: '#111111'}}
            >
              ↑ Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}