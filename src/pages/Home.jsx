import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SectionHeading({ title, accent, isDark = false }) {
  return (
    <div className="mb-10 text-center">
      <h2 className={`text-3xl md:text-4xl font-extrabold ${isDark ? 'text-white' : 'text-black'}`}>
        <span className="text-orange-500">{accent}</span> {title}
      </h2>
      <div className="mx-auto mt-3 h-1 w-24 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500" />
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="relative bg-black text-white overflow-hidden min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-orange-500/20 to-yellow-500/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Find Meaning. Find Hope.</span><br />
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              We are dedicated to transforming lives and renewing our community by proclaiming the Gospel of Jesus Christ
              and demonstrating His love through compassionate action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <a href="/event" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">Join Us This Sunday</a>
              <a href="/give" className="bg-white/10 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all duration-300 border-2 border-white/50">Give Online</a>
            </div>
            <blockquote className="text-lg text-white/80 italic border-l-4 border-yellow-500 pl-6 max-w-2xl mx-auto">
              "Build an Altar to the Lord your God." — Judges 6:26
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatWeDo() {
  const navigate = useNavigate()

  const programs = [
    {
      title: 'Evangelism & Worship',
      icon: '⛪',
      description: 'Spreading the Gospel and nurturing spiritual growth through worship and community outreach.',
      activities: [
        'Sunday worship services',
        'Prayer and healing sessions', 
        'Youth and children ministry',
        'Community outreach',
        'Discipleship training'
      ]
    },
    {
      title: 'Education Programmes',
      icon: '📚',
      description: 'Early Childhood Development initiatives focused on improving educational outcomes for vulnerable children.',
      activities: [
        'Establish Early Childhood Development centers',
        'Provide nutrition and school materials',
        'Pay school fees for children in need',
        'Support vulnerable families'
      ]
    },
    {
      title: 'Health Programmes',
      icon: '🏥',
      description: 'Community health engagement and mental wellness support for holistic healing and restoration.',
      activities: [
        'Community health education and wellness promotion',
        'Support for teen mothers through capacity building',
        'Mental health and emotional restoration programs',
        'Physical and social well-being initiatives'
      ]
    },
    {
      title: 'Women & Girls Empowerment',
      icon: '👩‍💼',
      description: 'Empowering women and girls through education, vocational training, and financial independence.',
      activities: [
        'Education and vocational training for teen mothers',
        'Re-entry programs for school dropouts',
        'Financial empowerment through savings groups',
        'Small business training and income generation'
      ]
    }
  ]

  return (
    <section id="what-we-do" className="py-20 bg-gradient-to-br from-yellow-500/5 to-orange-500/5">
      <div className="container mx-auto px-4">
        <SectionHeading accent="What" title="We Do" />
        <p className="mx-auto mb-16 max-w-3xl text-center text-black/80 text-lg leading-relaxed">
          Through our comprehensive programs, we are transforming lives and building stronger communities across Rwanda. 
          Each initiative is designed to address critical needs while fostering hope, healing, and empowerment.
        </p>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {programs.map((program) => (
            <div key={program.title} className="bg-white rounded-3xl p-8 shadow-lg group hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{program.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-3">{program.title}</h3>
                  <p className="text-black/80 leading-relaxed mb-4">{program.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-black mb-3">Key Activities:</h4>
                <ul className="space-y-2">
                  {program.activities.map((activity, index) => (
                    <li key={index} className="flex items-start text-black/75">
                      <span className="text-yellow-500 mr-3 mt-1">•</span>
                      <span className="leading-relaxed">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-3xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-4">Our Impact</h3>
          <p className="text-black/80 text-lg leading-relaxed max-w-4xl mx-auto">
            Through these integrated programs, PHDM is building a foundation of hope, healing, and empowerment. 
            We work with vulnerable families and communities to create lasting change that transforms not just individuals, 
            but entire communities for generations to come.
          </p>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">Join Us This Week</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: '⛪', title: 'Sunday Service', time: '10:00 AM - 12:00 PM' },
              { icon: '🙏', title: 'Wednesday Prayer', time: '10:00 AM - 4:00 PM' },
              { icon: '👨‍👩‍👧‍👦', title: 'Friday Service', time: '5:30 PM - 7:30 PM' }
            ].map((service, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h4 className="font-bold text-lg bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">{service.title}</h4>
                <p className="text-black/80 font-medium">{service.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function LatestNews() {
  const navigate = useNavigate()

  const latestNews = [
    {
      id: 1,
      title: "PHDM Empowers Women Through Igitenge Support Program",
      excerpt: "We're proud to support women in our community through a new initiative that provides Igitenge, promoting unity, self-confidence, and empowerment.",
      image: "/images/events-worked/women1.jpg",
      category: "Ministry Update",
      date: "December 15, 2024",
      readTime: "3 min"
    },
    {
      id: 2,
      title: "PHDM Spreads Love Through Mattress Distribution for Single Mothers",
      excerpt: "PHDM is committed to transforming lives through our Support and Training Program. This initiative equips participants with practical skills, mentorship, and guidance to help them build sustainable livelihoods.",
      image: "/images/events-worked/women6.jpg",
      category: "Event",
      date: "December 12, 2024",
      readTime: "2 min"
    },
    {
      id: 3,
      title: "PHDM Provides Mutuelle de Santé for Families",
      excerpt: "PHDM continues to bring hope and comfort to families in need through our Mattress Support Initiative. This program provides single mothers with essential bedding to ensure a safe and restful environment for their children. Beyond meeting immediate needs, this act of love reflects our mission to restore dignity, promote well-being, and strengthen families in our community.",
      image: "/images/news/3.jpg",
      category: "Community",
      date: "December 10, 2024",
      readTime: "4 min"
    }
  ]

  return (
    <section id="latest-news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading accent="Latest" title="News & Updates" />
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {latestNews.map((article) => (
            <article key={article.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-500/30">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>📅</span>
                  <time>{article.date}</time>
                  <span>•</span>
                  <span>{article.readTime} read</span>
                </div>
                
                <h3 className="text-lg font-bold mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {article.excerpt}
                </p>

                <button
                  onClick={() => navigate(`/news/${article.id}`)}
                  className="text-orange-500 font-semibold hover:text-yellow-500 transition-colors duration-300"
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a href="/news" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg inline-block">
            View All News & Updates
          </a>
        </div>
      </div>
    </section>
  )
}

function Give() {
  return (
    <section id="give" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading accent="Support" title="the Ministry" isDark={true} />
        <p className="mx-auto max-w-2xl text-white/85">
          Your giving helps us reach more people with the Gospel, care for families, and expand God's kingdom.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a href="/give" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">Give Online</a>
          <a href="/give" className="bg-white/10 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all duration-300 border-2 border-white/50">Tithe & Offering</a>
          <a href="/give" className="bg-white/10 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all duration-300 border-2 border-white/50">Partner With Us</a>
        </div>
        <p className="mt-4 text-xs text-white/70">Each contribution is securely processed and goes directly to ministry work and community outreach.</p>
      </div>
    </section>
  )
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading accent="Get" title="In Touch" />
        <div className="mx-auto max-w-2xl">
          <div className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border-2 border-black/20 px-6 py-4 focus:border-orange-500 focus:outline-none transition-colors duration-300" 
                placeholder="Your Name" 
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border-2 border-black/20 px-6 py-4 focus:border-orange-500 focus:outline-none transition-colors duration-300" 
                placeholder="Your Email" 
              />
            </div>
            <textarea 
              rows="5" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border-2 border-black/20 px-6 py-4 focus:border-orange-500 focus:outline-none transition-colors duration-300" 
              placeholder="Your Message"
            ></textarea>
            <button 
              onClick={handleSubmit}
              type="button" 
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg w-full md:w-auto mx-auto"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <About />
      <LatestNews />
      <Give />
      <Contact />
    </>
  )
}

export default Home
