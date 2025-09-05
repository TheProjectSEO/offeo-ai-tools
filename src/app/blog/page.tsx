import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  readingTime: string
  category: string
  author: string
}

// Sample blog posts data - replace with actual data fetching
const blogPosts: BlogPost[] = [
  {
    slug: '30-trendy-color-palettes',
    title: '30 Trendy Color Palettes for Modern Design',
    excerpt: 'Discover the most popular color combinations that designers are using this year. From minimalist palettes to vibrant schemes.',
    publishedAt: '2024-01-15',
    readingTime: '8 min read',
    category: 'Design',
    author: 'Offeo'
  },
  {
    slug: 'home-color-palettes',
    title: 'Home Color Palettes: Create Perfect Interior Harmony',
    excerpt: 'Transform your living space with these carefully curated home color palettes that create beautiful interior harmony.',
    publishedAt: '2024-01-10',
    readingTime: '6 min read',
    category: 'Interior Design',
    author: 'Offeo'
  },
  {
    slug: 'earth-tone-color-palettes',
    title: 'Earth Tone Color Palettes for Natural Design',
    excerpt: 'Embrace nature-inspired design with these warm and grounding earth tone color combinations.',
    publishedAt: '2024-01-05',
    readingTime: '5 min read',
    category: 'Design',
    author: 'Offeo'
  },
  {
    slug: 'blue-color-palette',
    title: 'Blue Color Palette: From Ocean to Sky Inspirations',
    excerpt: 'Explore the calming and versatile world of blue color palettes, from deep ocean blues to soft sky tones.',
    publishedAt: '2023-12-28',
    readingTime: '7 min read',
    category: 'Color Theory',
    author: 'Offeo'
  },
  {
    slug: 'rustic-color-palettes',
    title: 'Rustic Color Palettes for Vintage Design Appeal',
    excerpt: 'Create timeless designs with these rustic color combinations that evoke warmth and vintage charm.',
    publishedAt: '2023-12-20',
    readingTime: '6 min read',
    category: 'Design',
    author: 'Offeo'
  },
  {
    slug: 'food-color-palette',
    title: 'Food Color Palette: Delicious Design Inspirations',
    excerpt: 'Get inspired by the appetizing colors of food for your next design project. From fresh fruits to rich spices.',
    publishedAt: '2023-12-15',
    readingTime: '5 min read',
    category: 'Design',
    author: 'Offeo'
  }
]

const categories = ['All', 'Design', 'Color Theory', 'Interior Design']

export default function BlogPage() {
  return (
    <div className="min-h-screen" style={{background: 'var(--bg-primary)'}}>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>
            Design Blog
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{color: 'var(--text-primary)', opacity: '0.7'}}>
            Discover the latest trends in color palettes, design inspiration, and creative techniques to elevate your projects.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-gray-300 hover:border-black transition-colors"
              style={{color: 'var(--text-primary)'}}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full" style={{color: 'var(--text-primary)'}}>
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 line-clamp-2" style={{color: 'var(--text-primary)'}}>
                  <a 
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </a>
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </div>
                
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  Read more
                  <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            Load More Articles
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}