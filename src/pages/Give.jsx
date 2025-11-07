import { useState } from 'react'
import { Copy, Check, X, Phone, Heart, Globe, Target } from 'lucide-react'

function GivePage() {
  const [showMomoModal, setShowMomoModal] = useState(false)
  const [copied, setCopied] = useState(false)



  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Partner With Us
          </h1>
          <div className="mx-auto h-1 w-20 sm:w-32 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full" />
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Your giving helps us reach more people with the Gospel, care for vurnulable peaple, and expand God's kingdom.
          </p>
        </div>

        {/* Mobile Money Modal */}
        {showMomoModal && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowMomoModal(false)}
          >
            <div 
              className="bg-white rounded-3xl w-full max-w-md border border-gray-200 shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Mobile Money</h2>
                  <button
                    onClick={() => setShowMomoModal(false)}
                    className="text-gray-400 hover:text-gray-900 transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
                    aria-label="Close"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* MOMO Icon */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center border-2 border-orange-200 shadow-lg">
                      <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500" />
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5 border border-gray-200">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="text-orange-500">📝</span>
                      How to Give
                    </h3>
                    <ol className="space-y-3 text-gray-700 text-sm sm:text-base">
                      <li className="flex items-start gap-3">
                        <span className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">1</span>
                        <span className="leading-relaxed">Dial the MOMO code on your mobile phone</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">2</span>
                        <span className="leading-relaxed">Enter the amount you wish to donate</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">3</span>
                        <span className="leading-relaxed">Confirm the transaction with your PIN</span>
                      </li>
                    </ol>
                  </div>

                  {/* MOMO Code */}
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-5 border-2 border-orange-200">
                    <p className="text-sm text-gray-600 mb-3 text-center font-medium">Dial this code:</p>
                    <div className="bg-white rounded-xl p-4 sm:p-5 border-2 border-orange-300 shadow-inner">
                      <p className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-center text-gray-900 tracking-wider break-all">
                        *182*8*1*032088#
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard('*182*8*1*032088#')}
                      className="mt-4 w-full py-3 px-6 bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-semibold transition-all border-2 border-gray-200 hover:border-orange-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                    >
                      {copied ? (
                        <>
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Account Info */}
                  <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl p-5 border border-orange-300">
                    <p className="text-sm text-orange-900 text-center">
                      <span className="font-bold block mb-1">Registered to:</span>
                      <span className="text-base">PHD Ministry</span>
                    </p>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setShowMomoModal(false)}
                    className="w-full py-3 sm:py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payment Method Card */}
        <div className="mb-12 sm:mb-16 max-w-md mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8">Give Now</h2>
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 hover:border-orange-300 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center border-2 border-orange-200 shadow-lg">
                <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-3">Mobile Money</h3>
            <p className="text-gray-600 text-center mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              Quick and secure mobile payments via MTN Mobile Money
            </p>
            <button
              onClick={() => setShowMomoModal(true)}
              className="w-full py-3 sm:py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
            >
              Give Now
            </button>
          </div>
        </div>

        

        {/* Impact Statement */}
        <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl p-6 sm:p-8 md:p-12 text-center border border-orange-200 shadow-xl mx-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Our Impact</h2>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-3 mb-6 sm:mb-8">
            <div className="text-center bg-white rounded-2xl p-4 sm:p-6 shadow-md">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-2">500+</div>
              <p className="text-gray-600 text-sm sm:text-base">Lives Transformed</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-4 sm:p-6 shadow-md">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-2">50+</div>
              <p className="text-gray-600 text-sm sm:text-base">Community Programs</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-4 sm:p-6 shadow-md">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-2">10+</div>
              <p className="text-gray-600 text-sm sm:text-base">Nations Reached</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Each contribution is securely processed and goes directly to ministry work and community outreach. 
            Together, we're making a difference in the world for God's kingdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/contact" 
              className="py-3 px-6 sm:px-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all inline-block shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Contact Us
            </a>
            <a 
              href="/about" 
              className="py-3 px-6 sm:px-8 bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-semibold transition-all inline-block border-2 border-gray-200 hover:border-orange-300 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GivePage