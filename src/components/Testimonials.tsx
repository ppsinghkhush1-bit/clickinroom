import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Mehta',
      role: 'General Manager, The Grand Palace Hotel',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'ClickInRoom transformed our digital presence completely. Within 3 months, we saw a 150% increase in direct bookings. Their team understands hospitality like no other agency.',
    },
    {
      name: 'Priya Sharma',
      role: 'Owner, Serenity Beach Resort',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'The website they built for us is absolutely stunning. Our guests constantly compliment it. The booking engine works flawlessly and has reduced our OTA dependency by 40%.',
    },
    {
      name: 'Amit Verma',
      role: 'Marketing Head, Luxury Hotels Group',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Professional, responsive, and results-driven. ClickInRoom\'s SEO and digital marketing strategies have positioned our properties at the top of search results. Highly recommended!',
    },
    {
      name: 'Kavita Desai',
      role: 'Director, Heritage Boutique Hotels',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Their hotel photography service is exceptional. The images capture the essence of our properties perfectly. Combined with their social media marketing, our brand visibility has skyrocketed.',
    },
    {
      name: 'Vikram Singh',
      role: 'CEO, Royal Resorts & Spa',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'From pre-launch marketing to ongoing reputation management, ClickInRoom has been instrumental in our success. Their holistic approach delivers measurable ROI.',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-black to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-semibold">
              Client Success Stories
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Trusted by</span>
            <br />
            <span className="text-gradient">India's Leading Hotels</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-morphism rounded-2xl p-8 md:p-12">
            <Quote className="w-16 h-16 text-yellow-400/30 mb-6" />

            <div className="flex items-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex items-center space-x-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
              />
              <div>
                <div className="text-lg font-bold text-white">{testimonials[currentIndex].name}</div>
                <div className="text-gray-400">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="p-3 glass-morphism rounded-full hover:bg-yellow-400/20 transition-all group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-yellow-400" />
            </button>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-yellow-400'
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 glass-morphism rounded-full hover:bg-yellow-400/20 transition-all group"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-yellow-400" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">500+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">98%</div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">1000+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
