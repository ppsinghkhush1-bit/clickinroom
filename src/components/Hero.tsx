import { ChevronDown, Sparkles, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-400 font-medium tracking-widest uppercase text-sm">Luxury Redefined</span>
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <span className="text-gradient">Premium Hotel</span>
          <br />
          <span className="text-white">Digital Solutions</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
          Elevate your hospitality business with cutting-edge digital marketing, stunning web development, and comprehensive hotel management solutions
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <a
            href="#contact"
            className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-600 text-black font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <span>Book Consultation</span>
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
          <a
            href="#services"
            className="px-8 py-4 glass-morphism text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 border border-yellow-400/30"
          >
            Explore Services
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '1s' }}>
          <div className="glass-morphism p-6 rounded-xl">
            <div className="text-4xl font-bold text-gradient mb-2">500+</div>
            <div className="text-gray-400">Hotels Served</div>
          </div>
          <div className="glass-morphism p-6 rounded-xl">
            <div className="text-4xl font-bold text-gradient mb-2">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="glass-morphism p-6 rounded-xl">
            <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-yellow-400" />
      </a>
    </section>
  );
};

export default Hero;
