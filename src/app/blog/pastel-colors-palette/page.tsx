'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronUp, ExternalLink, Clock, Calendar, User, Copy, Check } from 'lucide-react'

interface ColorPalette {
  name: string
  colors: Array<{
    name: string
    hex: string
  }>
  imageUrl: string
  description: string
}

const colorPalettes: ColorPalette[] = [
  {
    name: "Candies Be Love",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de21b64ad313ae0044c3_02-1.jpeg",
    description: "With its soft pinks and blues, this color palette would look fabulous inside a cute cafe or bakery or maybe a nursery. If you want to borrow it, go ahead.",
    colors: [
      { name: "Yellow", hex: "#F7F6CF" },
      { name: "Pale Turquoise", hex: "#B6D8F2" },
      { name: "Linen", hex: "#F4CFDF" },
      { name: "Steel Blue", hex: "#5784BA" },
      { name: "Sky Blue", hex: "#9AC8EB" }
    ]
  },
  {
    name: "Love-caroon",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de21f9f9971a0f693ec2_12-1.jpeg",
    description: "This pastel color palette is a tad bit warmer. It has a sophisticated look to it and would look great if used in a photo album, or Instagram theme.",
    colors: [
      { name: "Pale Leaf", hex: "#CCD4BF" },
      { name: "Burly Wood", hex: "#E7CBA9" },
      { name: "Zinnwaldite", hex: "#EEBAB2" },
      { name: "Ecru White", hex: "#F5F3E7" },
      { name: "Vanilla Ice", hex: "#F5E2E4" }
    ]
  },
  {
    name: "Sugary-Colored Pills",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de21dbe8cd360780c82e_09-1.jpeg",
    description: "Yellow, pink, blue, purple, and orange, this palette has diluted every bright color. It is similar to candies be love and would work well for a kid-themed room, cafe, or a bakery too. But it would also be a great packaging color theme for teen-related products.",
    colors: [
      { name: "Azalea", hex: "#F5BFD2" },
      { name: "Jungle Mist", hex: "#E5DB9C" },
      { name: "Zombie", hex: "#D0BCAC" },
      { name: "Chatelle", hex: "#BEB4C5" },
      { name: "Tonys Pink", hex: "#E6A57E" }
    ]
  },
  {
    name: "Mint to Be",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de21913760c13e96d537_10-1.jpeg",
    description: "Mint to be is all blue and pink and would be useful in creating a palette for a food blog or fashion blog.",
    colors: [
      { name: "Sea Green", hex: "#218B82" },
      { name: "Light Blue", hex: "#9AD9DB" },
      { name: "Gainsboro", hex: "#E5DBD9" },
      { name: "Dark Sea Green", hex: "#98D4BB" },
      { name: "Pink", hex: "#EB96AA" }
    ]
  },
  {
    name: "Donut Move",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de21abbfdd9cf4b41042_03-1.jpeg",
    description: "Donut Pink may have a lot of pinks, but the grey-blue and the medium sea green, give it a cooler look. It provides a decadent touch but also suggests something frilly.",
    colors: [
      { name: "Grey Blue", hex: "#C6C9D0" },
      { name: "Indian Red", hex: "#C54B6C" },
      { name: "Plum", hex: "#E5B3BB" },
      { name: "Rosy Brown", hex: "#C47482" },
      { name: "Indian Sea Green", hex: "#D5E4C3" }
    ]
  },
  {
    name: "Fleeting Thoughts",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de22edc629c5406b62f9_18-1.jpeg",
    description: "If you are a lover of TV shows, then you must have heard about Gilmore Girls. Fleeting thoughts are a palette that has been inspired by the color palette that Lorelai suggests to Luke for his diner. It is a bit warmer and a bit spicier.",
    colors: [
      { name: "Salmon", hex: "#F9968B" },
      { name: "Tomato", hex: "#F27348" },
      { name: "Dark Slate Grey", hex: "#26474E" },
      { name: "Medium Aquamarine", hex: "#76CDCD" },
      { name: "Medium Turquoise", hex: "#2CCED2" }
    ]
  },
  {
    name: "Fly Awe-way",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de21d9c686bee572ac5a_04-1.jpeg",
    description: "Fly awe-way screams blues. Not just in the colors but in the mood as well. It can be used as a pastel color palette for an apartment, or even an office.",
    colors: [
      { name: "Pale Turquoise", hex: "#B8E0F6" },
      { name: "Light Blue", hex: "#A4CCE3" },
      { name: "Dark Slate Blue", hex: "#37667E" },
      { name: "Light Steel Pink", hex: "#DEC4D6" },
      { name: "Light Slate Grey", hex: "#7B92AA" }
    ]
  },
  {
    name: "Crystallized Beauty",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de21353b9b1900b04603_01-1.jpeg",
    description: "Crystalized Beauty looks more romantic than other palettes because it has more purple and pink. It would be a classy color scheme for an Instagram fashion page.",
    colors: [
      { name: "Powder Blue", hex: "#DDF2F4" },
      { name: "Light Steel Blue", hex: "#84A6D6" },
      { name: "Steel Blue", hex: "#4382BB" },
      { name: "Thistle", hex: "#E4CEE0" },
      { name: "Rosy Brown", hex: "#A15D98" }
    ]
  },
  {
    name: "Ice See You Cream",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de218f2e5262648c4c3c_05-1.jpeg",
    description: "I see you cream has more fall colors that lend in a richness. The color palette would make a lovely theme for a cozy home, homestay, or villa.",
    colors: [
      { name: "New York Pink", hex: "#DC828F" },
      { name: "Rajah", hex: "#F7CE76" },
      { name: "Dust Storm", hex: "#E8D6CF" },
      { name: "Mountbatten Pink", hex: "#8C7386" },
      { name: "Barley Corn", hex: "#9C9359" }
    ]
  },
  {
    name: "Sippin' Sweet",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de22560f5cfa50c53807_15-1.jpeg",
    description: "Sipping Sweet is quite similar to Donut Move, but it has Gold in the palette, which makes it brighter and louder. You can go ahead and use it as you see fit because it has got a universal appeal.",
    colors: [
      { name: "Gold", hex: "#F4C815" },
      { name: "Antique White", hex: "#F9CAD7" },
      { name: "Rosy Brown", hex: "#A57283" },
      { name: "Light Steel Blue", hex: "#C1D5DE" },
      { name: "Light Steel Blue", hex: "#DEEDE6" }
    ]
  },
  {
    name: "Mini Pastel Pops",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de22353b9b00bfb04682_11-1.jpeg",
    description: "Mini pastel pops is a color scheme you would find mostly in many travel pages on Instagram. It has just the right amount of pink, yellow, and green to make it look appealing and not cheesy.",
    colors: [
      { name: "Indian Red", hex: "#E9BBB5" },
      { name: "Burly Wood", hex: "#E7CBA9" },
      { name: "Light Steel Blue", hex: "#AAD9CD" },
      { name: "Light Khaki", hex: "#E8D595" },
      { name: "Dark Sea Green", hex: "#8DA47E" }
    ]
  },
  {
    name: "Slip to Sleep",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de26c1de8ca0285a0a63_06-1.jpeg",
    description: "Slip to sleep has a collection of calming colors that add some mood wherever they are used. It can be an appropriate color scheme for an adult bedroom because it has balancing neutrals like a Silver chalice and quill grey.",
    colors: [
      { name: "Skeptic", hex: "#CAE7E3" },
      { name: "Silver Chalice", hex: "#B2B2B2" },
      { name: "Beauty Bush", hex: "#EEB8C5" },
      { name: "Quill Gray", hex: "#DCDBD9" },
      { name: "Your Pink", hex: "#FEC7BC" }
    ]
  },
  {
    name: "Minimalistic Fine Pastel",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de221fd606b9c03a74b8_17-1.jpeg",
    description: "Minimalistic delicate pastel has warmer colors that add a bit of character wherever you them. It is a beautiful idea for a living room color scheme or a personal library.",
    colors: [
      { name: "Antique White", hex: "#FBECDB" },
      { name: "Wheat", hex: "#F3CBBD" },
      { name: "Turquoise Green", hex: "#90CDC3" },
      { name: "Rosy Brown", hex: "#AF8C72" },
      { name: "Dark Olive Green", hex: "#938F43" }
    ]
  },
  {
    name: "Wood You Pick Me Up?",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de2221b0e15e03e5a77a_14-1.jpeg",
    description: "Wood, you pick me up is a pastel color palette for people who don't want to be obvious pastel color users. The colors are greyish and look used up, but these color patterns look elegant.",
    colors: [
      { name: "Rosy Brown", hex: "#B8A390" },
      { name: "Rosy Brown", hex: "#E6D1D2" },
      { name: "Light Grey", hex: "#DAD5D6" },
      { name: "Dark Slate Grey", hex: "#B2B5B9" },
      { name: "Light Slate Grey", hex: "#8FA2A6" }
    ]
  },
  {
    name: "Way Back to Hue",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de22353b9bfbccb0468f_19-1.jpeg",
    description: "Way back to Hue pastel color scheme will transport you to the street of Greece, with whitewashed houses and blue ocean. This color scheme would look appealing if used correctly.",
    colors: [
      { name: "Light Steel Blue", hex: "#8EA4C8" },
      { name: "Rosy Brown", hex: "#C3B8AA" },
      { name: "Light Steel Blue", hex: "#DEDCE4" },
      { name: "Pink", hex: "#DB93A5" },
      { name: "Olive", hex: "#C7CDC5" }
    ]
  },
  {
    name: "Shades of Us",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de2286ee4338676a73f0_07-1.jpeg",
    description: "Shades of us like Wood, you pick me up has more mature tones to it. The color scheme can be used in installing kitchen tiles or bathroom tiles to give your place spruce.",
    colors: [
      { name: "Lynch", hex: "#698396" },
      { name: "Opal", hex: "#A9C8C0" },
      { name: "Brandy", hex: "#DBBC8E" },
      { name: "Del Rio", hex: "#AE8A8C" },
      { name: "Bali Hai", hex: "#7C98AB" }
    ]
  },
  {
    name: "Anchoring Gates",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de2201880bc2fe58728a_08-1.jpeg",
    description: "Anchoring gates color palette has both a warm and cool touch, as it has both orange and blue in balance. It makes a lively color scheme and can be used in packaging and product designing.",
    colors: [
      { name: "Ziggurat", hex: "#C2D9E1" },
      { name: "Tan", hex: "#D29F8C" },
      { name: "Light Grey", hex: "#D9D3D2" },
      { name: "Steel Blue", hex: "#81B1CC" },
      { name: "Sienna", hex: "#FFD9CF" }
    ]
  },
  {
    name: "Lookin' A(Door)able",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de23586a2a319751714c_13-1.jpeg",
    description: "Looking adorable is a tan, beige and blue, but the vibrancy is added by thistle- a pale blush pink. It is a classy and understated color theme that can be used in designing a website.",
    colors: [
      { name: "Tan", hex: "#C6AC85" },
      { name: "Beige", hex: "#E2E5CB" },
      { name: "Thistle", hex: "#D9C2BD" },
      { name: "Light Steel Blue", hex: "#A2C4C6" },
      { name: "Cadet Blue", hex: "#82B2B8" }
    ]
  },
  {
    name: "The Road Less Travelled",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de23f30e9a5da5e07ca0_20-1.jpeg",
    description: "The road less traveled may lack, pinks, and blues that do not make in any less of a pastel palette. It is an elegant color scheme of fall colors that lend a refined look.",
    colors: [
      { name: "Sienna", hex: "#874741" },
      { name: "Rosy Brown", hex: "#CA9C95" },
      { name: "Dim Grey", hex: "#40393E" },
      { name: "Gainsboro", hex: "#E5E4E5" },
      { name: "Gray", hex: "#897C87" }
    ]
  },
  {
    name: "50 Shades of Feminism",
    imageUrl: "https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6167de23b0241d2068350b60_16-1.jpeg",
    description: "Fifty shades of feminism have enough pink to call it feminine, and enough brown to call it rebellious. It is a tasteful color scheme that would look sophisticated in any way. But its neutral colors would look particularly good when used smartly in fashion.",
    colors: [
      { name: "Dark Olive Green", hex: "#46302B" },
      { name: "Dim Gray", hex: "#76504E" },
      { name: "Light Grey", hex: "#D3CCCA" },
      { name: "Rosy Brown", hex: "#A37E7E" },
      { name: "Gray", hex: "#86736C" }
    ]
  }
]

const tableOfContents = [
  { id: 'toc-what-are-pastel-colors-', title: 'What are Pastel Colors?', level: 2 },
  { id: 'toc-what-is-pastel-color-palette-', title: 'What is Pastel Color Palette?', level: 2 },
  { id: 'toc-20-best-pastel-color-schemes-to-use-in-your-designs', title: '20 Best Pastel Color Schemes To Use In Your Designs', level: 2 },
  ...colorPalettes.map((palette, index) => ({
    id: `toc--${index + 1}-${palette.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}`,
    title: `#${index + 1} – ${palette.name}`,
    level: 3
  })),
  { id: 'toc-faqs-pastel-color-palettes', title: 'FAQs: Pastel Color Palettes', level: 2 },
  { id: 'toc-are-pastel-colors-warm-or-cool-', title: 'Are pastel colors warm or cool?', level: 3 },
  { id: 'toc-what-effects-do-pastel-colors-have-on-your-audience-', title: 'What effects do pastel colors have on your audience?', level: 3 },
  { id: 'toc-what-are-the-uses-of-pastel-colors-palette-', title: 'What are the uses of pastel colors palette?', level: 3 },
  { id: 'toc-what-are-the-benefits-of-a-pastel-color-palette-', title: 'What are the benefits of a pastel color palette?', level: 3 },
  { id: 'toc-pastel-color-palette-the-rage-of-the-roaring-twenties', title: 'Pastel color palette - the rage of the roaring twenties', level: 3 }
]

const faqs = [
  {
    question: "Are pastel colors warm or cool?",
    answer: "There is no such thing as warm or cold pastel colors. The warmness of a color is determined by the amount of orange in it, and the coolness of a color is determined by the amount of blue in it. Pastel colors are made by just adding some white to colors, like lavender is the pastel of purple and peach is the pastel of orange. So peach (pastel orange) is warm, while baby blue (pastel blue) is cool."
  },
  {
    question: "What effects do pastel colors have on your audience?",
    answer: "Pastel colors have unique effects on people including: inducing calmness and peace due to their subtle hue, uplifting moods like spring with their association to blooming flowers, renewing romance with subtle pinks and washed-out reds, and making things feel classy and elegant with their moderate and earthy tones."
  },
  {
    question: "What are the uses of pastel colors palette?",
    answer: "Pastel color palettes are widely used in branding to create soft brand statements, in photography for aesthetic appeal, on Instagram to improve feed aesthetics, in interior design as the new neutrals, in fashion trends for refined looks, and in website designs to create gentle, eye-friendly interfaces."
  },
  {
    question: "What are the benefits of a pastel color palette?",
    answer: "Benefits of pastel color palettes include: they are beautiful and add flavor to mundane things, they are mood boosters with soothing effects, they are versatile with a diverse range of colors to choose from, and they add a contemporary feel to places and objects while being considered modern and stylish."
  }
]

const relatedColorPosts = [
  { slug: 'home-color-palettes', title: 'Home Color Palettes: Create Perfect Interior Harmony' },
  { slug: 'earth-tone-color-palettes', title: 'Earth Tone Color Palettes for Natural Design' },
  { slug: 'blue-color-palette', title: 'Blue Color Palette: From Ocean to Sky Inspirations' },
  { slug: 'rustic-color-palettes', title: 'Rustic Color Palettes for Vintage Design Appeal' },
  { slug: 'food-color-palette', title: 'Food Color Palette: Delicious Design Inspirations' },
  { slug: 'neon-color-palette', title: 'Neon Color Palette: Vibrant Electric Design Ideas' },
  { slug: 'nude-color-palette', title: 'Nude Color Palette: Elegant Neutral Tones' },
  { slug: 'winter-color-palette', title: 'Winter Color Palette: Cool Season Inspirations' }
]

const serviceLandingPages = [
  { title: 'AI Logo Generator', href: '/logo-generation' },
  { title: 'AI Art Generator', href: '/art-generation' },
  { title: 'AI Image Generator', href: '/image-creation' },
  { title: 'Background Removal Tool', href: '/background-removal' },
  { title: 'AI Text Generator', href: '/text-generation' }
]

function ColorSwatch({ color, onCopy }: { color: { name: string; hex: string }, onCopy: (hex: string) => void }) {
  return (
    <div 
      className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer group"
      onClick={() => onCopy(color.hex)}
    >
      <div 
        className="w-8 h-8 rounded-md border border-gray-200 flex-shrink-0"
        style={{ backgroundColor: color.hex }}
      ></div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-900">{color.name}</div>
        <div className="text-xs text-gray-500 font-mono">{color.hex}</div>
      </div>
      <Copy size={16} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  )
}

export default function PastelColorsPage() {
  const [activeSection, setActiveSection] = useState<string>('')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [copiedColor, setCopiedColor] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
      
      const sections = tableOfContents.map(item => item.id)
      let current = ''
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            current = section
          }
        }
      }
      
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex)
    setCopiedColor(hex)
    setTimeout(() => setCopiedColor(''), 2000)
  }

  const generateFAQSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema())
        }}
      />
      
      <div className="min-h-screen" style={{background: 'var(--bg-primary)'}}>
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="max-w-4xl">
                {/* Article Header */}
                <header className="mb-8 pb-8 border-b border-gray-200">
                  <img 
                    src="https://web.archive.org/web/20240223073634im_/https://assets-global.website-files.com/614716f50b4f49202fdd0087/6169493b0332618cc5ce9b16_shutterstock_1579314958.jpeg"
                    alt="Pastel color schemes and palettes showcase"
                    className="w-full h-64 sm:h-80 object-cover rounded-xl mb-6"
                  />
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{color: 'var(--text-primary)'}}>
                    20 Best Pastel Color Schemes To Use In Your Designs
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm" style={{color: 'var(--text-secondary)'}}>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>By Offeo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>January 15, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>12 min read</span>
                    </div>
                  </div>
                </header>

                {/* Introduction */}
                <div className="prose prose-lg max-w-none mb-12" style={{color: 'var(--text-primary)'}}>
                  <p>As creatives, we don't just stick to a color palette with a certain fixed saturation and hue level. We appreciate colors that are less saturated and muted at times too.</p>
                  
                  <p>Whether it's in clothes, decorations, or structures, we feel that highly saturated colors can sometimes take too much away from the natural beauty of its raw colors.</p>
                  
                  <p>This is why pastel colors are a growing trend especially in the world of fashion and even <a href="/logo-generation">logo design</a>.</p>
                  
                  <p>They were originally considered to be too chic or pre-teen, but through time, designers and consumers alike have learnt to appreciate the splendor of soft pastel hues.</p>
                  
                  <p>Take a stroll around the city and you're sure to see examples of these tones. It's absolutely a beautiful shade that is most suited for the Spring or Summer season.</p>
                  
                  <p>The basic colors still exist, but they are presented in washed out or dusted up shades, which makes them more appealing to the naked eye. Its elegance is magnified through their subtlety.</p>
                  
                  <p>Pastel tones look great when they're mixed together. Imagine seeing a mural or a scenic view with splashes of mint green, baby blue, light grey, peach, and lavender in the background.</p>
                  
                  <p>We can't explain exactly how or why, but it just seems to emit a soothing aura that draws people to them. Perhaps, it would be better to simply marvel at their desaturation.</p>
                </div>

                {/* What are Pastel Colors Section */}
                <section className="mb-12" id="toc-what-are-pastel-colors-">
                  <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
                    What are Pastel Colors?
                  </h2>
                  <div className="prose prose-lg max-w-none" style={{color: 'var(--text-primary)'}}>
                    <p>Pastel colors are colors that have enough white mixed into them to take away the saturation and turn them into a pale version of colors.</p>
                    <p>The most popular pastel colors of the year have been millennial pink, light azure, creamy mint, and whimsy yellow. All these colors are just a slight variation from the standard pattern of colors.</p>
                    <p>The old color palette is still very much valid, as it is the source of other colors. But pastel colors are the ones which are in trend now, may it be in <a href="/blog/home-color-palettes">home decor</a> or fashion, everyone wants something in pastel.</p>
                  </div>
                </section>

                {/* What is Pastel Color Palette Section */}
                <section className="mb-12" id="toc-what-is-pastel-color-palette-">
                  <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
                    What is Pastel Color Palette?
                  </h2>
                  <div className="prose prose-lg max-w-none" style={{color: 'var(--text-primary)'}}>
                    <p>Pastel color palette is a sequence of pastel colors that go together or are in sync with each other. Pastel colors are used to decorate a home, or design an outfit or editing a picture, etc. There are many uses of a pastel color palette, and there are several options to choose from.</p>
                    <p>We have prepared 20 best pastels colors with images and their respective color codes (Hex codes) for your inspirations to take place freely!</p>
                  </div>
                </section>

                {/* Color Palettes Section */}
                <section className="mb-12" id="toc-20-best-pastel-color-schemes-to-use-in-your-designs">
                  <h2 className="text-3xl font-bold mb-8" style={{color: 'var(--text-primary)'}}>
                    20 Best Pastel Color Schemes To Use In Your Designs
                  </h2>
                  
                  <div className="space-y-12">
                    {colorPalettes.map((palette, index) => (
                      <div 
                        key={index}
                        className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                        id={`toc--${index + 1}-${palette.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}`}
                      >
                        <img 
                          src={palette.imageUrl}
                          alt={`${palette.name} color palette inspiration`}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>
                            #{index + 1} – {palette.name}
                          </h3>
                          <p className="text-gray-600 mb-6">{palette.description}</p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                            {palette.colors.map((color, colorIndex) => (
                              <ColorSwatch 
                                key={colorIndex} 
                                color={color} 
                                onCopy={copyToClipboard}
                              />
                            ))}
                          </div>
                          
                          {copiedColor && palette.colors.some(c => c.hex === copiedColor) && (
                            <div className="flex items-center gap-2 mt-4 text-green-600 text-sm">
                              <Check size={16} />
                              <span>Color {copiedColor} copied to clipboard!</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs Section */}
                <section className="mb-12" id="toc-faqs-pastel-color-palettes">
                  <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
                    FAQs: Pastel Color Palettes
                  </h2>
                  
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} id={`toc-${faq.question.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}-`}>
                        <h3 className="text-xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                          {faq.question}
                        </h3>
                        <div className="prose max-w-none" style={{color: 'var(--text-primary)'}}>
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Additional FAQ Content */}
                  <div className="mt-8 space-y-8" id="toc-what-effects-do-pastel-colors-have-on-your-audience-">
                    <div>
                      <h3 className="text-xl font-semibold mb-4" style={{color: 'var(--text-primary)'}}>
                        What effects do pastel colors have on your audience?
                      </h3>
                      <div className="prose max-w-none" style={{color: 'var(--text-primary)'}}>
                        <p>We are aware of color psychology and how it affects the human brain. Various colors incite different behavior from humans.</p>
                        <p>When someone uses pastel colors, it uniquely affects people. Here are the different ways in which pastel color affects your audience:</p>
                        
                        <h4><strong>Induces calmness and peace</strong></h4>
                        <p>Pastel shades have a subtle hue. These colors aren't loud and gaudy as the rest, so whenever someone gazes into anything with pastel colors, they feel peaceful and calm.</p>
                        
                        <h4><strong>It uplifts like its spring</strong></h4>
                        <p>Spring may be short, but it is the most loved season of all. Pastel colors remind people of blooms and spring. It sets a happy tone for the color scheme.</p>
                        
                        <h4><strong>Renew the romance</strong></h4>
                        <p>Pastels are now associated with romance. The subtle pinks and washed-out reds are colors of romance, and people adore these colors.</p>
                        
                        <h4><strong>Makes feel things classy and elegant</strong></h4>
                        <p>Pastel color palettes lend an elegant and classy feel. No matter you use the colors in your wardrobe, in your room, or your website, they always have the same feel.</p>
                      </div>
                    </div>

                    <div id="toc-what-are-the-uses-of-pastel-colors-palette-">
                      <h3 className="text-xl font-semibold mb-4" style={{color: 'var(--text-primary)'}}>
                        What are the uses of pastel colors palette?
                      </h3>
                      <div className="prose max-w-none" style={{color: 'var(--text-primary)'}}>
                        <p>The way the colorful pastels affect the audience is the reason why it is used so widely in today's world. Below are some uses of the pastels colors palette:</p>
                        
                        <h4><strong>Branding</strong></h4>
                        <p>Many brands use pastel colors for their branding to make a bold brand statement while maintaining elegance and sophistication.</p>
                        
                        <h4><strong>Pastels in Photography</strong></h4>
                        <p>Creative photographers use pastel color palettes to create ethereal and dreamy compositions that garner significant following on social media.</p>
                        
                        <h4><strong>To Up your Instagram game</strong></h4>
                        <p>Pastels work wonders on Instagram and can improve your feed's aesthetic appeal significantly.</p>
                        
                        <h4><strong>Spruce up your Interior</strong></h4>
                        <p>Interior designing has shifted from neutrals to pastels, and it seems like pastels are the new neutrals for modern homes.</p>
                        
                        <h4><strong>New Fashion Trends</strong></h4>
                        <p>Fashion and color are deeply embedded, and pastel palettes have become a major trend in contemporary fashion design.</p>
                        
                        <h4><strong>Website Designs</strong></h4>
                        <p>Pastel colors in website designing create gentle, eye-friendly interfaces that are pleasant to look at and navigate.</p>
                      </div>
                    </div>

                    <div id="toc-what-are-the-benefits-of-a-pastel-color-palette-">
                      <h3 className="text-xl font-semibold mb-4" style={{color: 'var(--text-primary)'}}>
                        What are the benefits of a pastel color palette?
                      </h3>
                      <div className="prose max-w-none" style={{color: 'var(--text-primary)'}}>
                        <p>Here are some benefits of using pastel colors:</p>
                        
                        <h4><strong>They are beautiful</strong></h4>
                        <p>Pastel is beautiful; the muted tones add a touch of flavor in the most mundane of things. It looks great on walls, on paintings and even in photographs.</p>
                        
                        <h4><strong>They are mood boosters</strong></h4>
                        <p>These colors have a soothing feel, so whenever someone gazes at the color, it seems peaceful. Pastel adds an uplifting vibe to the place.</p>
                        
                        <h4><strong>They are versatile</strong></h4>
                        <p>The pastel color palette is diverse; there is a range of colors to choose from. Whether you want to add a splash of color or mute the overtly bold colors, pastel can always help you out.</p>
                        
                        <h4><strong>They add a contemporary feel</strong></h4>
                        <p>Designers are embracing the pastel color palette. The softer hues give a contemporary feel to a place or object.</p>
                      </div>
                    </div>

                    <div id="toc-pastel-color-palette-the-rage-of-the-roaring-twenties">
                      <h3 className="text-xl font-semibold mb-4" style={{color: 'var(--text-primary)'}}>
                        Pastel color palette - the rage of the roaring twenties
                      </h3>
                      <div className="prose max-w-none" style={{color: 'var(--text-primary)'}}>
                        <p>It isn't just Instagram that has a pastel color trend going on, but everyone is following the trend. For the past couple of years, the mood has shifted from bright kooky palettes to softer hues of pastel.</p>
                        <p>From photographers to fashion designers, everyone is using pastel shades for their creation. Colors are cyclical, and while earlier pastel color was considered old-fashioned, it now adds a contemporary vibe.</p>
                        <p>The delicate pinks, baby blues, pale lilacs, and mint tints may lack the chromatic content, but they add a soothing effect. Every creator is jumping in on the pastel color trend from fashion designers like Marc Jacobs to filmmakers like Sofia Coppola.</p>
                        <p>This decade is going to witness a lot of pastel color, and even brands are changing their packaging designs to pastel.</p>
                        <p>It seems likes pastel is here to stay.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Author Section */}
                <section className="mt-12 pt-8 border-t border-gray-200 text-center">
                  <h3 className="text-xl font-bold mb-2" style={{color: 'var(--text-primary)'}}>
                    Written by Offeo
                  </h3>
                  <p className="text-sm mb-4" style={{color: 'var(--text-secondary)'}}>
                    Offeo is a leading platform for AI-powered design tools and creative solutions.
                  </p>
                </section>

                {/* Service Landing Pages */}
                <section className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold mb-4" style={{color: 'var(--text-primary)'}}>
                    Explore Our AI Tools
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceLandingPages.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                        style={{color: 'var(--text-primary)'}}
                      >
                        <span className="font-medium">{service.title}</span>
                        <ExternalLink size={16} />
                      </a>
                    ))}
                  </div>
                </section>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Table of Contents */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-bold mb-4" style={{color: 'var(--text-primary)'}}>
                    Table of Contents
                  </h3>
                  <nav>
                    <ul className="space-y-2">
                      {tableOfContents.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className={`block text-sm hover:text-blue-600 transition-colors ${
                              activeSection === item.id ? 'text-blue-600 font-medium' : 'text-gray-600'
                            }`}
                            style={{
                              paddingLeft: `${(item.level - 2) * 12}px`
                            }}
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Babio.io Widget */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6 text-center">
                  <h4 className="text-lg font-bold mb-2 text-blue-900">
                    Need More Design Resources?
                  </h4>
                  <p className="text-sm text-blue-700 mb-4">
                    Discover premium design tools and templates at Babio.io
                  </p>
                  <a
                    href="https://babio.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Visit Babio.io
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Related Articles */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h4 className="text-lg font-bold mb-4" style={{color: 'var(--text-primary)'}}>
                    Related Articles
                  </h4>
                  <ul className="space-y-3">
                    {relatedColorPosts.map((post, index) => (
                      <li key={index}>
                        <a
                          href={`/blog/${post.slug}`}
                          className="text-sm text-gray-600 hover:text-blue-600 transition-colors line-clamp-2"
                        >
                          {post.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
          >
            <ChevronUp size={20} />
          </button>
        )}

        <Footer />
      </div>
    </>
  )
}