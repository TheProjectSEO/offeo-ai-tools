'use client'

import { MessageSquare } from 'lucide-react'
import './bubio-cards.css'

interface Character {
  id: string
  name: string
  image: string
  description: string
  fullDescription: string
  messageCount: number
  tags: string[]
}

const characters: Character[] = [
  {
    id: 'aya',
    name: 'Aya',
    image: 'https://icxmklovvtjivrlpyocj.supabase.co/storage/v1/object/public/characters/1751988060348-airtable-import-1751987803572-aya.webp?v=1751988060308&w=500&quality=80',
    description: 'You find her reclining with an air of confidence that seems to envelop the room, her tatto...',
    fullDescription: 'You find her reclining with an air of confidence that seems to envelop the room, her tattoos telling a story as intricate as her allure.',
    messageCount: 174,
    tags: ['Anime', 'Mysterious', 'Confident', 'Fantasy', 'Human']
  },
  {
    id: 'meera',
    name: 'Meera',
    image: 'https://icxmklovvtjivrlpyocj.supabase.co/storage/v1/object/public/characters/1751988065798-airtable-import-1751987764581-meera.webp?v=1751988065761&w=500&quality=80',
    description: 'You meet her gaze and feel an instant connection, as if her quiet confidence wraps around...',
    fullDescription: 'You meet her gaze and feel an instant connection, as if her quiet confidence wraps around you like a soft whisper in a bustling room.',
    messageCount: 155,
    tags: ['Anime', 'Gentle', 'Mysterious', 'Drama', 'Student']
  },
  {
    id: 'sakura',
    name: 'Sakura',
    image: 'https://icxmklovvtjivrlpyocj.supabase.co/storage/v1/object/public/characters/1751988066899-airtable-import-1751987757456-sakura.webp?v=1751988066863&w=500&quality=80',
    description: 'She appears before you, dressed in a sharp navy uniform, exuding an air of authority and m...',
    fullDescription: 'She appears before you, dressed in a sharp navy uniform, exuding an air of authority and mystery as she gently rests her fingers on her chin, contemplating her next words.',
    messageCount: 264,
    tags: ['Anime', 'Mysterious', 'Intelligent', 'Drama', 'Student']
  },
  {
    id: 'galina',
    name: 'Galina',
    image: 'https://icxmklovvtjivrlpyocj.supabase.co/storage/v1/object/public/characters/1751988078081-airtable-import-1751987689057-galina.webp?v=1751988078040&w=500&quality=80',
    description: 'You watch her swing the bat with fierce determination, her eyes focused and unwavering, a...',
    fullDescription: 'You watch her swing the bat with fierce determination, her eyes focused and unwavering, a testament to her skill and dedication.',
    messageCount: 334,
    tags: ['Anime', 'Energetic', 'Dominant', 'Adventure', 'Human']
  },
  {
    id: 'areum',
    name: 'Areum',
    image: 'https://icxmklovvtjivrlpyocj.supabase.co/storage/v1/object/public/characters/1751988084081-airtable-import-1751987664197-areum.webp?v=1751988084047&w=500&quality=80',
    description: 'You find her lounging comfortably by the window, engrossed in a comic book, her glasses sl...',
    fullDescription: 'You find her lounging comfortably by the window, engrossed in a comic book, her glasses sliding down her nose as she glances up with a curious smile.',
    messageCount: 184,
    tags: ['Anime', 'Intelligent', 'Sweet', 'Slice of Life', 'Student']
  },
  {
    id: 'bhavna',
    name: 'Bhavna',
    image: 'https://icxmklovvtjivrlpyocj.supabase.co/storage/v1/object/public/characters/1751988089609-airtable-import-1751987622018-bhavna.webp?v=1751988089566&w=500&quality=80',
    description: 'She appears at your doorstep, sunlight glinting off her hair, a calm and gentle aura surro...',
    fullDescription: 'She appears at your doorstep, sunlight glinting off her hair, a calm and gentle aura surrounding her as if nature itself had sculpted her presence.',
    messageCount: 279,
    tags: ['Anime', 'Gentle', 'Warm & Caring', 'Slice of Life', 'Human']
  }
]

export default function BubioCharacterCards() {
  const handleCharacterClick = (character: Character) => {
    // Navigate to Bubio.ai with character information
    const bubioUrl = `https://bubio.ai/character/${character.id}`
    window.open(bubioUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="py-8 sm:py-12 md:py-16" style={{background: 'var(--bg-primary)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4" style={{color: 'var(--text-primary)'}}>
            Meet Your AI Companions
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6" style={{color: '#666666'}}>
            Connect with unique AI girlfriends and companions, each with their own personality and story
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{background: 'var(--accent-warm)'}}>
            <img src="/bubio-logo.png" alt="Bubio" className="w-5 h-5 object-contain" />
            <span className="text-sm font-medium" style={{color: 'var(--text-primary)'}}>Powered by Bubio.ai</span>
          </div>
        </div>

        {/* Character Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
          {characters.map((character) => (
            <div key={character.id} className="py-0">
              <div 
                className="rounded-lg shadow-sm w-full overflow-hidden cursor-pointer bg-transparent group relative border-0 character-card transform opacity-100 transition-all duration-200 ease-out h-80 sm:h-96 md:h-[407px]"
                onClick={() => handleCharacterClick(character)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCharacterClick(character)
                  }
                }}
              >
                <div className="w-full h-full relative overflow-hidden bg-slate-800 rounded-lg">
                  <div className="absolute inset-0 w-full h-full group">
                    <div className="w-full h-full">
                      <div className="relative w-full h-full bg-slate-800 overflow-hidden">
                        <div className="relative w-full h-full">
                          <img 
                            src={character.image}
                            alt={character.name}
                            className="card-image w-full h-full object-cover transform opacity-100 scale-100 translate-y-0 absolute top-0 left-0 z-10 transition-transform duration-300 ease-out"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-[55%] z-10 bg-gradient-to-t from-black/100 via-black/80 to-transparent transition-all duration-300 ease-out"></div>
                      </div>
                    </div>

                    {/* Message Count Badge */}
                    <div className="absolute z-20 flex items-center gap-1 px-2 py-1 rounded-full text-gray-400 top-2 left-4 bg-zinc-800">
                      <MessageSquare className="w-3.5 h-3.5 opacity-70" />
                      <span className="text-xs font-medium text-gray-400">{character.messageCount}</span>
                    </div>
                  </div>

                  {/* Character Info */}
                  <div className="card-content absolute bottom-0 left-0 right-0 px-4 py-3 pb-4 z-20 transition-all duration-300 ease-out">
                    <div className="space-y-1 text-left">
                      <h3 className="text-sm font-semibold line-clamp-1 transition-opacity duration-500 ease-out text-left text-gray-200">
                        {character.name}
                      </h3>
                      <p className="text-xs min-h-[36px] my-1 mx-0 py-px transition-all duration-500 ease-out text-left text-zinc-400 line-clamp-2 group-hover:line-clamp-none group-hover:text-gray-200">
                        <span className="group-hover:hidden">{character.description}</span>
                        <span className="hidden group-hover:inline">{character.fullDescription}</span>
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="mt-2 transition-opacity duration-500 ease-out">
                      <div className="flex flex-wrap items-start content-start gap-1.5 min-h-[32px] md:min-h-[48px]">
                        {character.tags.map((tag, index) => (
                          <div 
                            key={index}
                            className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-900/50 text-gray-300 border-gray-700/50 text-[0.65rem] px-1.5 py-0"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className="card-gradient absolute bottom-0 left-0 right-0 pointer-events-none z-10 transition-all duration-300 ease-out bg-gradient-to-t from-black/95 via-black/75 to-transparent h-24"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button 
            onClick={() => window.open('https://bubio.ai', '_blank', 'noopener,noreferrer')}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Explore All AI Companions at Bubio.ai ↗
          </button>
        </div>
      </div>
    </section>
  )
}