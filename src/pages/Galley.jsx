import { useState } from 'react'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const imagesPerPage = 12

  // Gallery images with categories
  const galleryImages = [
    // Worship & Services
    { id: 1, url: '/images/events-worked/food1.jpg', category: 'worship', title: 'Sunday Worship Service', description: 'Praising God together' },
    { id: 2, url: '/images/events-worked/food3.jpg', category: 'worship', title: 'Youth Worship Night', description: 'Young hearts for Jesus' },
    { id: 3, url: '/images/events-worked/ood2.jpg', category: 'worship', title: 'Prayer Meeting', description: 'United in prayer' },
    { id: 4, url: '/images/events-worked/women1.jpg', category: 'worship', title: 'Worship Team', description: 'Leading with passion' },
    
    // Community Outreach
    { id: 5, url: '/images/events-worked/women2.jpg', category: 'outreach', title: 'Community Feeding', description: 'Serving with love' },
    { id: 6, url: '/images/events-worked/women3.jpg', category: 'outreach', title: 'Medical Outreach', description: 'Healing hands ministry' },
    { id: 7, url: '/images/events-worked/women4.jpg', category: 'outreach', title: 'Street Evangelism', description: 'Reaching the lost' },
    { id: 8, url: '/images/events-worked/women5.jpg', category: 'outreach', title: 'Village Outreach', description: 'Taking hope to rural areas' },
    
    // Youth & Children
    { id: 9, url: '/images/events-worked/women6.jpg', category: 'youth', title: 'Kids Church', description: 'Training young disciples' },
    { id: 10, url: '/images/events-worked/women7.jpg', category: 'youth', title: 'Youth Conference', description: 'Empowering the next generation' },
    { id: 11, url: '/images/events-worked/women8.jpg', category: 'youth', title: 'Bible Study', description: 'Growing in the Word' },
    { id: 12, url: '/images/events-worked/women9.jpg', category: 'youth', title: 'Youth Sports Day', description: 'Fellowship and fun' },
    
    // Conferences & Events
    { id: 13, url: '/images/events-worked/photo10.jpg', category: 'events', title: 'Annual Conference', description: 'Gathering of believers' },
    { id: 14, url: '/images/events-worked/photo11.jpg', category: 'events', title: 'Leadership Summit', description: 'Equipping leaders' },
    { id: 15, url: '/image15.jpg', category: 'events', title: 'Easter Celebration', description: 'He is risen!' },
    { id: 16, url: '/image16.jpg', category: 'events', title: 'Christmas Service', description: 'Celebrating the Savior' },
    
    // // Baptisms & Dedications
    // { id: 17, url: '/image17.jpg', category: 'baptism', title: 'Water Baptism', description: 'New life in Christ' },
    // { id: 18, url: '/image18.jpg', category: 'baptism', title: 'Baby Dedication', description: 'Blessing the children' },
    // { id: 19, url: '/image19.jpg', category: 'baptism', title: 'Mass Baptism', description: 'Declaring faith publicly' },
    // { id: 20, url: '/image20.jpg', category: 'baptism', title: 'Confirmation Service', description: 'Standing firm in faith' },
    
    // // Missions
    // { id: 21, url: '/image21.jpg', category: 'missions', title: 'Mission Trip Uganda', description: 'Cross-border ministry' },
    // { id: 22, url: '/image22.jpg', category: 'missions', title: 'Church Planting', description: 'Establishing new congregations' },
    // { id: 23, url: '/image23.jpg', category: 'missions', title: 'Tanzania Outreach', description: 'Spreading the Gospel' },
    // { id: 24, url: '/image24.jpg', category: 'missions', title: 'Mission Team', description: 'Sent ones for the harvest' },
    
    // // Additional Worship
    // { id: 25, url: '/image25.jpg', category: 'worship', title: 'Night of Worship', description: 'Encountering His presence' },
    // { id: 26, url: '/image26.jpg', category: 'worship', title: 'Choir Performance', description: 'Singing His praises' },
    
    // // Additional Outreach
    // { id: 27, url: '/image27.jpg', category: 'outreach', title: 'Prison Ministry', description: 'Hope behind bars' },
    // { id: 28, url: '/image28.jpg', category: 'outreach', title: 'Hospital Visitation', description: 'Bringing comfort' },
    
    // // Additional Youth
    // { id: 29, url: '/image29.jpg', category: 'youth', title: 'Youth Camp', description: 'Building character' },
    // { id: 30, url: '/image30.jpg', category: 'youth', title: 'Mentorship Program', description: 'Guiding young lives' },
  ]

  const categories = [
    { id: 'all', name: 'All Photos', icon: '🖼️' },

  ]

  // Filter images by category
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  // Pagination logic
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage)
  const startIndex = (currentPage - 1) * imagesPerPage
  const currentImages = filteredImages.slice(startIndex, startIndex + imagesPerPage)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateLightbox = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredImages.length
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Photo Gallery
          </h1>
          <div className="mx-auto h-1 w-32 bg-orange-500 mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing moments of faith, fellowship, and transformation at PHD Ministry
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-orange-500 hover:text-orange-500'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {currentImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-200 aspect-square cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-900 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1
              // Show first page, last page, current page, and pages around current
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-full font-semibold transition-all ${
                      currentPage === page
                        ? 'bg-orange-500 text-white shadow-lg scale-110'
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500'
                    }`}
                  >
                    {page}
                  </button>
                )
              } else if (page === currentPage - 2 || page === currentPage + 2) {
                return (
                  <span key={page} className="text-gray-400 px-2">
                    ...
                  </span>
                )
              }
              return null
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-900 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Results Info */}
        <div className="text-center mt-8 text-gray-600">
          Showing {startIndex + 1}-{Math.min(startIndex + imagesPerPage, filteredImages.length)} of {filteredImages.length} photos
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox('prev')
              }}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox('next')
              }}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image Container */}
            <div
              className="max-w-6xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h2>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery