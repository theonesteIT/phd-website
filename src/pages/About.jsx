import { useState } from 'react'
import { Mail, Phone, Linkedin } from 'lucide-react'

function TeamMemberCard({ member, index }) {
  const [imageError, setImageError] = useState(false)
  
  return (
    <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-yellow-400/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-400/10 to-orange-500/10 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500" />
      
      <div className="relative p-8">
        {/* Avatar Section */}
        <div className="relative mx-auto w-40 h-40 mb-6">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500 via-yellow-400 to-orange-600 p-1 group-hover:scale-105 transition-transform duration-300 shadow-lg">
            <div className="w-full h-full rounded-3xl bg-white p-2">
              {!imageError ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-2xl object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                  <span className="text-5xl font-bold text-orange-500">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          {/* Active Status Badge */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="px-4 py-1 bg-green-500 rounded-full text-white text-xs font-bold shadow-lg flex items-center gap-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Active
            </div>
          </div>
        </div>

        {/* Member Info */}
        <div className="text-center mt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
            {member.name}
          </h3>
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mb-3">
            <p className="text-white font-bold text-sm">
              {member.position}
            </p>
          </div>
          {member.role && (
            <p className="text-gray-600 text-sm font-medium mb-6">
              {member.role}
            </p>
          )}
          
          {/* Divider */}
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mx-auto mb-6" />
          
          {/* Social Links */}
          <div className="flex justify-center gap-3">
            <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-500 text-gray-600 hover:text-white transition-all duration-300 flex items-center justify-center group/btn">
              <Mail className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-500 text-gray-600 hover:text-white transition-all duration-300 flex items-center justify-center group/btn">
              <Phone className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-500 text-gray-600 hover:text-white transition-all duration-300 flex items-center justify-center group/btn">
              <Linkedin className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  )
}

function AboutPage() {
  const [welcomeImageError, setWelcomeImageError] = useState(false)
  
  const boardMembers = [
    {
      name: "MUTETELI Eugenie",
      position: "President",
      image:"images/events-worked/paster1.jpg",
    },
    {
      name: "NIMEPATA MUHOZI Paul",
      position: "Vice President", 
      image:"images/events-worked/paster22.jpg",
    }
  ]

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-20 text-center py-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">About</span> PHD Ministry
          </h1>
          <div className="mx-auto h-1 w-32 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500" />
        </div>

        {/* Welcome Section with Image */}
        <div className="mb-24">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-96 md:h-auto">
                {!welcomeImageError ? (
                  <img
                    src="/images/events-worked/ministry.jpg"
                    alt="PHD Ministry Welcome"
                    className="w-full h-full object-cover"
                    onError={() => setWelcomeImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <span className="text-6xl mb-4 block">⛪</span>
                      <h3 className="text-3xl font-bold">Welcome Home</h3>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              </div>
              
              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-sm font-bold rounded-full">
                    Welcome to PHDM
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  A Place to Call <span className="text-orange-500">Home</span>
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  We are a Christ-centered Ministry devoted to worship, discipleship,
                  and service. Our Goal is to see people transformed by the Gospel and
                  equipped to impact the world.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Join us for vibrant services, authentic community, and opportunities
                  to serve. We believe our ministry is a family where everyone has a role to play.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#service-times" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300">
                    Join Us This Week
                  </a>
                  <a href="/contact" className="px-6 py-3 bg-white border-2 border-orange-500 text-orange-500 font-bold rounded-xl hover:bg-orange-50 transition-all duration-300">
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2 mb-24">
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/5 to-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🎯</span>
                </div>
                <h2 className="text-3xl font-bold text-black">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To equip community members with knowledge of God's Words, skills for social well-bieng and strategies
                for personal development.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/5 to-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">👁️</span>
                </div>
                <h2 className="text-3xl font-bold text-black">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
               To ensure the members of community prosper in spirit ,soul and body. " 3 Johns 3:2"
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/5 to-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-500/5 to-yellow-400/5 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-2xl">🙏</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-2">Faith</h3>
                      <p className="text-gray-600">Trusting in God's promises and walking by faith, not by sight</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-2xl">💫</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-2">Prayer</h3>
                      <p className="text-gray-600">Communion with our Father through constant prayer and intercession</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-2xl">❤️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-2">Healing</h3>
                      <p className="text-gray-600">Restoration and wholeness through the power of the Holy Spirit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-2xl">📖</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-2">Discipleship</h3>
                      <p className="text-gray-600">Growing in Christ through teaching and mentorship</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 md:col-span-2 max-w-md mx-auto">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-2">Compassion</h3>
                      <p className="text-gray-600">Love in action, serving others with kindness and grace</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Church History & Leadership */}
        <div className="grid gap-8 md:grid-cols-2 mb-24">
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-500/5 to-yellow-400/5 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-500" />
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-3xl">📖</span>
                </div>
                <h3 className="text-2xl font-bold text-black">Our Story</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In 2016, our story began not in a large auditorium, but in a humble  room. It started as a small prayer group—a handful of faithful hearts who believed in the transformative 
                power of the Holy Spirit. We gathered with a simple, yet bold vision: to see lives radically changed by the love of Jesus Christ.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we serve thousands across our community, providing spiritual guidance,for social economic empowerment, healing, and hope for all.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-500/5 to-yellow-400/5 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-500" />
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-black">Leadership</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our ministry is led by dedicated pastors and leaders who are committed to serving God and His people with integrity and compassion.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe in raising up the next generation of leaders through mentorship, training, and spiritual development.
              </p>
            </div>
          </div>
        </div>

        {/* Board Members Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
              Meet Our <span className="text-orange-500">Leaders</span>
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our board members are committed leaders who guide PHDM's strategic direction, ensuring we remain faithful to our mission while adapting to the evolving needs of our community.
            </p>
          </div>

          {/* Board Members Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 mb-16 max-w-4xl mx-auto">
            {boardMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>

          {/* Leadership Statement */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-orange-500/10 via-yellow-400/10 to-orange-500/10 rounded-3xl shadow-xl p-10 md:p-14 border border-orange-200">
              <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-8">Our Leadership Commitment</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                Our Leaders serves with integrity, wisdom, and a deep commitment to our community. 
                Together, they ensure that PHDM remains a beacon of hope, healing, and transformation for all who seek God's love and purpose.
              </p>
              <div className="grid gap-8 sm:grid-cols-3">
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center shadow-lg">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h4 className="font-bold text-xl bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-3">Vision</h4>
                  <p className="text-gray-600">Strategic direction and long-term planning</p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center shadow-lg">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h4 className="font-bold text-xl bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-3">Stewardship</h4>
                  <p className="text-gray-600">Responsible oversight and governance</p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center shadow-lg">
                    <span className="text-3xl">❤️</span>
                  </div>
                  <h4 className="font-bold text-xl bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-3">Service</h4>
                  <p className="text-gray-600">Dedicated service to our community</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Times */}
        <div id="service-times" className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl p-10 md:p-14 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-yellow-400/20 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-yellow-400/20 to-orange-500/20 rounded-full -ml-32 -mb-32" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Join Us This Week</h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">Experience the presence of God with us</p>
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center shadow-2xl">
                  <span className="text-4xl">⛪</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Sunday Service</h3>
                <p className="text-white font-bold text-xl mb-2">10:00 AM - 12:00 PM</p>
                <p className="text-gray-300">Worship, Word, and Fellowship</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center shadow-2xl">
                  <span className="text-4xl">🙏</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Wednesday Prayer</h3>
                <p className="text-white font-bold text-xl mb-2">10:00 AM - 4:00 PM</p>
                <p className="text-gray-300">Corporate Prayer and Intercession</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center shadow-2xl">
                  <span className="text-4xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Friday Service</h3>
                <p className="text-white font-bold text-xl mb-2">6:00 PM - 7:30 PM</p>
                <p className="text-gray-300">Corporate Prayer and Intercession</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-6">Join Our Mission</h3>
            <p className="text-gray-700 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Be part of the transformation happening in our community. Whether through prayer, service, or support, your involvement makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-10 py-5 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 text-lg">
                Get Involved
              </a>
              <a href="/give" className="px-10 py-5 bg-white text-orange-500 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-orange-500 text-lg">
                Support Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage