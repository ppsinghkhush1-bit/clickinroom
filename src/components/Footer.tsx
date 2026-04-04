import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-black">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gradient text-xl font-bold tracking-wider">ClickInRoom</span>
                <span className="text-xs text-gray-400">Hotel Digital Marketing Agency, Ludhiana</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              India's premier hospitality digital solutions provider, transforming hotels into digital success stories.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 glass-morphism rounded-lg flex items-center justify-center hover:bg-yellow-400/20 transition-all group"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-yellow-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass-morphism rounded-lg flex items-center justify-center hover:bg-yellow-400/20 transition-all group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-yellow-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass-morphism rounded-lg flex items-center justify-center hover:bg-yellow-400/20 transition-all group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-yellow-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass-morphism rounded-lg flex items-center justify-center hover:bg-yellow-400/20 transition-all group"
              >
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-yellow-400" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#rooms" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Accommodations
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  SEO & Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Social Media
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Hotel Photography
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Reputation Management
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Booking Engine
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Business District, Mumbai, Maharashtra 400001, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href="tel:+917508639613" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  +91 75086 39613
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href="mailto:contact@clickinroom.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  support.clickinroom@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 ClickInRoom. All rights reserved. | Designed with excellence
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50"
      >
        <ArrowUp className="w-6 h-6 text-black" />
      </button>
    </footer>
  );
};

export default Footer;
