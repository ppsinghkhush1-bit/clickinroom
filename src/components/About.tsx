import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Gradient matching Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-zinc-900 to-stone-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-amber-200/10 border border-amber-200/30 rounded-full text-amber-100 text-sm font-semibold">
                About ClickInRoom
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-stone-100">Transforming Hotels Into</span>
              <br />
              <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent">
                Digital Success Stories
              </span>
            </h2>

            <p className="text-stone-300 text-lg mb-6 leading-relaxed">
              ClickInRoom is a leading hospitality digital solutions provider in India, dedicated to helping hotels grow, perform, and stand out in the digital world. We specialize in hotel marketing, website development, and revenue optimization—delivering smart, result-driven strategies tailored for the hospitality industry.

With a perfect blend of advanced technology and deep industry expertise, we help hotels increase their online visibility, drive more direct bookings, and build strong, lasting relationships with guests.
            </p>

            <p className="text-stone-400 mb-8 leading-relaxed">
              Having successfully partnered with over 500 hotels across India—from boutique stays to luxury resorts—we are committed to delivering measurable growth and exceptional ROI through data-driven solutions.

Join us to elevate your hotel and make it truly exceptional.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-stone-900" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-stone-100 mb-1">500+</div>
                  <div className="text-stone-400 text-sm">Hotels Served</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-stone-900" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-stone-100 mb-1">50+</div>
                  <div className="text-stone-400 text-sm">Expert Team</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-stone-900" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-stone-100 mb-1">Pan India</div>
                  <div className="text-stone-400 text-sm">Coverage</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-stone-900" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-stone-100 mb-1">300%</div>
                  <div className="text-stone-400 text-sm">Avg ROI Growth</div>
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

            {/* Floating Card 1 */}
            <div className="absolute -bottom-8 -left-8 bg-stone-900/80 backdrop-blur-md border border-white/10 p-6 rounded-xl max-w-xs">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-stone-100">Live Project Success</span>
              </div>
              <p className="text-stone-400 text-sm">
                Helping The Oberoi achieve 45% increase in direct bookings
              </p>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -top-8 -right-8 bg-stone-900/80 backdrop-blur-md border border-white/10 p-6 rounded-xl">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-yellow-100 bg-clip-text text-transparent mb-1">98%</div>
              <p className="text-stone-400 text-sm">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
