import { useState } from 'react'

function SectionHeading({ title, accent, isDark = false }) {
  return (
    <div className="mb-10 text-center">
      <h2 className={`text-3xl md:text-4xl font-extrabold ${isDark ? 'text-white' : 'text-black'}`}>
        <span className="text-orange-500">{accent}</span> {title}
      </h2>
      <div className="mx-auto mt-3 h-1 w-24 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500" />
    </div>
  )
}

function NewsCard({ article, featured = false }) {
  const [imageError, setImageError] = useState(false)
  
  return (
    <article className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
      featured ? 'bg-white' : 'bg-white'
    } border border-gray-100 hover:border-orange-500/30`}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        {/* Image */}
        <div className={`relative overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
          {!imageError ? (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center">
              <span className="text-6xl">📰</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              article.category === 'Ministry Update' ? 'bg-orange-500 text-white' :
              article.category === 'Event' ? 'bg-yellow-400 text-black' :
              article.category === 'Community' ? 'bg-green-500 text-white' :
              'bg-blue-500 text-white'
            }`}>
              {article.category}
            </span>
          </div>
          
          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500 text-white">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <span>📅</span>
            <time>{article.date}</time>
            <span>•</span>
            <span>{article.readTime} read</span>
          </div>
          
          <h3 className={`font-bold mb-3 group-hover:text-orange-500 transition-colors duration-300 ${
            featured ? 'text-xl' : 'text-lg'
          }`}>
            {article.title}
          </h3>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center">
                <span className="text-sm font-bold text-black">{article.author.charAt(0)}</span>
              </div>
              <span className="text-sm text-gray-600">{article.author}</span>
            </div>
            
            <button className="text-orange-500 hover:text-yellow-500 font-semibold text-sm transition-colors duration-300 flex items-center gap-1 group">
              Read More
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

function News() {
  const newsArticles = [
    {
      id: 1,
      title: "PHDM Empowers Women Through Ibitenge Support Program",
      excerpt: "We're proud to support women in our community through a new initiative that provides ibitenge, promoting unity, self-confidence, and empowerment.",
      image: "/images/events-worked/women1.jpg",
      category: "Ministry Update",
      date: "December 15, 2024",
      readTime: "3 min",
      author: "Prayer"
    },
    {
      id: 2,
      title: "PHDM Spreads Love and Rest Through Mattress Distribution for Women",
      excerpt: "Join us as we come together to celebrate the true meaning of Christmas — love, hope, and giving. This special day will include heartful worship, a joyful community feast, and gift distribution to bless families in need.",
      image: "/images/events-worked/women6.jpg",
      category: "Event",
      date: "December 12, 2024",
      readTime: "2 min",
      author: "Prayer"
    },
    {
      id: 3,
      title: "Sharing God's Care — PHDM Provides Mutuelle de Santé for Families",
      excerpt: "PHDM is proud to support vulnerable families by providing Mutuelle de Santé health insurance. This initiative ensures that every family has access to essential healthcare services, promoting dignity, security, and hope for a healthier future.",
      image: "/images/news/3.jpg",
      category: "Community",
      date: "December 10, 2024",
      readTime: "4 min",
      author: "Prayer"
    }
  ]

  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Ministry Update', 'Event', 'Community']

  const filteredNews = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-orange-500/20 to-yellow-400/30 py-20">
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Latest <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">News</span> & Updates
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Stay informed about the latest happenings, ministry updates, and community events at PHDM. 
            Discover how God is moving in our community and beyond.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-yellow-400 hover:text-black border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Article */}
          {selectedCategory === 'All' && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-black mb-8 text-center">Featured Story</h3>
              <div className="max-w-4xl mx-auto">
                <NewsCard article={newsArticles[0]} featured={true} />
              </div>
            </div>
          )}

          {/* News Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNews.slice(selectedCategory === 'All' ? 1 : 0).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Load More News
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-orange-500/10 to-yellow-400/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-6">Stay Updated</h3>
          <p className="text-black/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Subscribe to our newsletter to receive the latest news, ministry updates, and event announcements directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors duration-300"
            />
            <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News