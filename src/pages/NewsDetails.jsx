import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function NewsDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(0)

  // Detailed news data with multiple images
  const newsData = {
    1: {
      title: "PHDM Empowers Women Through Ibitenge Support Program",
      category: "Ministry Update",
      date: "December 15, 2024",
      readTime: "3 min",
      author: "Prayer",
      mainImage: "/images/events-worked/women1.jpg",
      gallery: [
        "/images/events-worked/women1.jpg",
        "/images/events-worked/women2.jpg",
        "/images/events-worked/women3.jpg",
        
      ],
      content: [
        {
          heading: "Empowering Women Through Unity and Dignity",
          text: "At PHDM, we believe that empowering women is essential to building stronger communities and families. Our Ibitenge Support Program is designed to provide women with traditional Rwandan fabric (ibitenge) that not only celebrates our cultural heritage but also promotes unity, self-confidence, and dignity."
        },
        {
          heading: "The Significance of Ibitenge",
          text: "Ibitenge is more than just fabric—it's a symbol of Rwandan identity, strength, and togetherness. By providing ibitenge to women in our community, we're helping them embrace their cultural roots while fostering a sense of belonging and pride. This initiative recognizes the important role women play in society and honors their contributions to their families and communities."
        },
        {
          heading: "Building Confidence and Community",
          text: "Through this program, women receive beautiful ibitenge fabric that they can wear during church services, community events, and special occasions. This creates a visible bond of unity among participants and helps build lasting friendships. Many women have shared how receiving ibitenge has boosted their confidence and made them feel valued and seen."
        },
        {
          heading: "Impact and Future Plans",
          text: "Since launching this initiative, we've distributed ibitenge to over 150 women across multiple communities. The feedback has been overwhelming, with participants expressing gratitude for both the practical support and the emotional encouragement. We plan to expand this program to reach even more women in the coming months, continuing to spread love, dignity, and empowerment throughout our communities."
        }
      ],
      relatedArticles: [2, 3]
    },
    2: {
      title: "PHDM Spreads Love and Rest Through Mattress Distribution for Women",
      category: "Event",
      date: "December 12, 2024",
      readTime: "2 min",
      author: "Prayer",
      mainImage: "/images/events-worked/women6.jpg",
      gallery: [
        "/images/events-worked/women6.jpg",
        "/images/events-worked/women5.jpg",
        "/images/events-worked/women7.jpg",
        
      ],
      content: [
        {
          heading: "The Gift of Rest and Comfort",
          text: "PHDM recently organized a special mattress distribution event as part of our Christmas outreach program. We believe that everyone deserves a good night's rest, and for many vulnerable women in our community, having a proper mattress has been a luxury they couldn't afford. This initiative aims to provide physical comfort while demonstrating God's love and care."
        },
        {
          heading: "A Joyful Celebration",
          text: "The distribution event was filled with joy, worship, and thanksgiving. Women from various neighborhoods gathered together to receive their mattresses, and the atmosphere was electric with gratitude. We also shared a community meal, prayed together, and celebrated the true meaning of Christmas—giving to those in need and showing compassion to our neighbors."
        },
        {
          heading: "Testimonies of Transformation",
          text: "Many recipients shared heartfelt testimonies about how this gift would change their lives. One mother of four tearfully explained that she had been sleeping on cardboard for over a year. Another widow shared that this mattress represented more than comfort—it showed her that she hadn't been forgotten by her community and by God."
        },
        {
          heading: "Community Partnership",
          text: "This initiative was made possible through generous donations from church members and local businesses. We distributed over 100 mattresses during this event, and we're already planning future distributions to reach even more families in need. Together, we're building a community where everyone feels loved, supported, and cared for."
        }
      ],
      relatedArticles: [1, 3]
    },
    3: {
      title: "Sharing God's Care — PHDM Provides Mutuelle de Santé for Families",
      category: "Community",
      date: "December 10, 2024",
      readTime: "4 min",
      author: "Prayer",
      mainImage: "/images/news/3.jpg",
      gallery: [
        "/images/news/3.jpg",
        "/images/news/1.jpg",
        "/images/news/2.jpg",
        "/images/news/4.jpg"
      ],
      content: [
        {
          heading: "Healthcare Access for All",
          text: "Access to healthcare is a fundamental right, yet many vulnerable families in our community struggle to afford basic health insurance. PHDM's Mutuelle de Santé initiative addresses this critical need by providing health insurance coverage to families who cannot afford it on their own. This program ensures that no one has to choose between medical care and other essential needs."
        },
        {
          heading: "The Importance of Mutuelle de Santé",
          text: "Rwanda's community-based health insurance system (Mutuelle de Santé) has been instrumental in improving healthcare access across the country. However, the most vulnerable families still face barriers to enrollment. Our program covers the annual insurance fees for qualifying families, ensuring they can access medical services, medications, and hospital care without financial hardship."
        },
        {
          heading: "Holistic Community Care",
          text: "This health insurance initiative is part of PHDM's broader commitment to holistic care. We believe that healthy communities are strong communities. By removing financial barriers to healthcare, we're enabling families to seek preventive care, treat illnesses promptly, and maintain their overall wellbeing. This investment in health creates ripple effects throughout our community."
        },
        {
          heading: "Looking Ahead",
          text: "Since launching this program six months ago, we've provided Mutuelle de Santé coverage for over 75 families, benefiting approximately 300 individuals. We've heard numerous stories of lives saved and health restored because families could access medical care without delay. Our goal is to expand this program to cover 200 families by the end of next year, ensuring that healthcare is accessible to all members of our community."
        }
      ],
      relatedArticles: [1, 2]
    }
  }

  const article = newsData[id] || newsData[1]
  const [imageError, setImageError] = useState({})

  const handleImageError = (index) => {
    setImageError(prev => ({ ...prev, [index]: true }))
  }

  const relatedNews = article.relatedArticles.map(relId => ({
    id: relId,
    ...newsData[relId]
  }))

  const handleBackClick = () => {
    navigate('/news')
  }

  const handleRelatedClick = (relatedId) => {
    setSelectedImage(0)
    setImageError({})
    navigate(`/news/${relatedId}`)
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-300 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          Back to News
        </button>
      </div>

      {/* Article Header */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
              article.category === 'Ministry Update' ? 'bg-orange-500 text-white' :
              article.category === 'Event' ? 'bg-yellow-400 text-black' :
              'bg-green-500 text-white'
            }`}>
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center">
                <span className="text-lg font-bold text-black">{article.author.charAt(0)}</span>
              </div>
              <span className="font-semibold text-black">{article.author}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <span>📅</span>
              <time>{article.date}</time>
            </div>
            <span>•</span>
            <span>{article.readTime} read</span>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl h-96 md:h-[500px]">
            {!imageError[selectedImage] ? (
              <img
                src={article.gallery[selectedImage]}
                alt={article.title}
                className="w-full h-full object-cover"
                onError={() => handleImageError(selectedImage)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center">
                <span className="text-9xl">📰</span>
              </div>
            )}
          </div>

          {/* Image Gallery Thumbnails */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            {article.gallery.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative overflow-hidden rounded-lg h-24 transition-all duration-300 ${
                  selectedImage === index
                    ? 'ring-4 ring-orange-500 scale-105'
                    : 'ring-2 ring-gray-200 hover:ring-orange-300'
                }`}
              >
                {!imageError[`thumb-${index}`] ? (
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(`thumb-${index}`)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center">
                    <span className="text-3xl">📷</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {article.content.map((section, index) => (
              <div key={index} className={index > 0 ? 'mt-10' : ''}>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  {section.heading}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}

            {/* Social Share */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-black mb-4">Share this article</h3>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Facebook
                </button>
                <button className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300">
                  Twitter
                </button>
                <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-gradient-to-r from-orange-500/10 to-yellow-400/10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Related Articles</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {relatedNews.map((related) => (
              <article
                key={related.id}
                onClick={() => handleRelatedClick(related.id)}
                className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-500/30"
              >
                <div className="relative h-48 overflow-hidden">
                  {!imageError[`related-${related.id}`] ? (
                    <img
                      src={related.mainImage}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={() => handleImageError(`related-${related.id}`)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center">
                      <span className="text-6xl">📰</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      related.category === 'Ministry Update' ? 'bg-orange-500 text-white' :
                      related.category === 'Event' ? 'bg-yellow-400 text-black' :
                      'bg-green-500 text-white'
                    }`}>
                      {related.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>📅</span>
                    <time>{related.date}</time>
                  </div>
                  <h3 className="text-lg font-bold text-black group-hover:text-orange-500 transition-colors duration-300">
                    {related.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsDetails;