import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rahul Gupta",
      role: "Owner, Jaipur Heritage Hotel",
      rating: 5,
      text: "ClickInRoom helped us increase our direct bookings within a few months. Their team understands the Indian hotel market very well.",
    },
    {
      name: "Anita Kapoor",
      role: "Manager, Goa Beach Stay",
      rating: 5,
      text: "Our new website looks amazing and works perfectly for bookings. We are getting more guests directly from Google.",
    },
    {
      name: "Sandeep Malhotra",
      role: "Director, Delhi City Hotel",
      rating: 5,
      text: "Professional team with great digital marketing skills. Our hotel visibility online has improved a lot.",
    },
    {
      name: "Vikas Sharma",
      role: "Owner, Shimla Mountain Retreat",
      rating: 5,
      text: "They helped us reduce OTA dependency and get more direct bookings from our website.",
    },
    {
      name: "Neha Patel",
      role: "Marketing Head, Ahmedabad Boutique Hotel",
      rating: 5,
      text: "Their SEO and marketing strategies helped our hotel appear higher in search results and attract more guests.",
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
              Client Reviews
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Trusted by</span>
            <br />
            <span className="text-gradient">Hotels Across India</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real feedback from hotel owners and managers we work with
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-morphism rounded-2xl p-8 md:p-12">
            <Quote className="w-16 h-16 text-yellow-400/30 mb-6" />

            <div className="flex items-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </p>

            <div>
              <div className="text-lg font-bold text-white">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-gray-400">
                {testimonials[currentIndex].role}
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
                      ? "w-8 bg-yellow-400"
                      : "w-2 bg-gray-600 hover:bg-gray-500"
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
            <div className="text-4xl font-bold text-gradient mb-2">200+</div>
            <div className="text-gray-400">Hotels Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">95%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">500+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
