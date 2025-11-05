import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react"; // modern icons

function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* === Main Footer Section === */}
      <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* === Column 1: Ministry Info === */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">PHD Ministry</h2>
          <p className="text-sm text-brandYellow">
            Prayer • Healing • Discipleship
          </p>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Empowering lives through faith, healing, and discipleship.
          </p>
        </div>

        {/* === Column 2: Visit & Contact === */}
        <div>
          <h4 className="font-semibold text-brandOrange text-lg mb-3">
            Visit Us
          </h4>
          <p className="text-sm text-gray-200 mb-5">
            Kigali Kanombe, City, Rwanda
          </p>

          <h4 className="font-semibold text-brandOrange text-lg mb-3">
            Contact
          </h4>
          <p className="text-sm text-gray-200 mb-1">
            📧 phdmministry@gmail.com
          </p>
          <p className="text-sm text-gray-200">📞 +250 788 560 756</p>
        </div>

        {/* === Column 3: Google Map === */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d517.8889369608336!2d30.141329889783577!3d-2.0132904952767854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca948d3b52825%3A0x628cae646f43c5aa!2sPHD%20Ministry!5e1!3m2!1sen!2srw!4v1762265109751!5m2!1sen!2srw"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PHD Ministry Map"
          ></iframe>
        </div>
      </div>

      {/* === Divider === */}
      <div className="border-t border-white/10"></div>

      {/* === Social Bar === */}
      <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} PHD Ministry. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="http://facebook.com/PHD-Ministry-Rwanda-101293981804906"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brandYellow transition-transform transform hover:scale-110"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="http://instagram.com/phdministyrwanda"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brandYellow transition-transform transform hover:scale-110"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/@phdwisdomtv3801"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brandYellow transition-transform transform hover:scale-110"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
