import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-black to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-semibold">
                About ClickInRoom
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Transforming Hotels Into</span>
              <br />
              <span className="text-gradient">Digital Success Stories</span>
            </h2>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              ClickInRoom is India's premier hospitality digital solutions provider, specializing in comprehensive
              hotel marketing, web development, and revenue optimization. We blend cutting-edge technology with
              deep industry expertise to help hotels thrive in the digital age.
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed">
              From boutique properties to luxury resorts, our team has helped over 500 hotels across India
              maximize their online presence, increase direct bookings, and build lasting guest relationships.
              Our data-driven approach ensures measurable results and exceptional ROI.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">500+</div>
                  <div className="text-gray-400 text-sm">Hotels Served</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-gray-400 text-sm">Expert Team</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">Pan India</div>
                  <div className="text-gray-400 text-sm">Coverage</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">300%</div>
                  <div className="text-gray-400 text-sm">Avg ROI Growth</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury Hotel"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            <div className="absolute -bottom-8 -left-8 glass-morphism-dark p-6 rounded-xl max-w-xs">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-white">Live Project Success</span>
              </div>
              <p className="text-gray-400 text-sm">
                Helping The Oberoi achieve 45% increase in direct bookings
              </p>
            </div>

            <div className="absolute -top-8 -right-8 glass-morphism-dark p-6 rounded-xl">
              <div className="text-3xl font-bold text-gradient mb-1">98%</div>
              <p className="text-gray-400 text-sm">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
