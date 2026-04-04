import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
}

const Navigation = ({ scrolled }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Review', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-morphism-dark shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
              <img 
                  src="/click in rrom.png" 
                  alt="ClickInRoom Logo" 
                  className="w-full h-full object-contain"
                />
            </div>
            <div className="flex flex-col">
              <span className="text-gradient text-xl font-bold tracking-wider">ClickInRoom</span>
              <span className="text-xs text-gray-400">Hotel Digital Marketing Agency, Ludhiana</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919876543210" className="flex items-center text-sm text-gray-300 hover:text-yellow-400 transition">
              <Phone className="w-4 h-4 mr-2" />
              <span>+91 75086 39613</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-amber-600 text-black font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass-morphism"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-morphism-dark">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <a href="tel:+917508639613" className="flex items-center px-4 py-2 text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 75086 39613</span>
              </a>
              <a
                href="#contact"
                className="block px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-600 text-black font-semibold rounded-lg text-center"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
