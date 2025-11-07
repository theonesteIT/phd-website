function EventsPage() {
 
  return (
    <section className="section bg-white">
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

export default EventsPage


