import { useState, FormEvent } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hotelName: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    console.log('Form submitted:', formData);
    
    // Fake delay for realistic feel
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        hotelName: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-zinc-900 to-stone-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-amber-200/10 border border-amber-200/30 rounded-full text-amber-100 text-sm font-semibold">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent">
              Let's Transform
            </span>
            <br />
            <span className="text-stone-100">Your Hotel Business</span>
          </h2>

          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Book a free consultation and discover how we can help you achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6 animate-pulse" />
                  <h3 className="text-2xl font-bold text-stone-100 mb-4">Thank You!</h3>
                  <p className="text-stone-400 max-w-md mx-auto">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">
                        Hotel Name
                      </label>
                      <input
                        type="text"
                        name="hotelName"
                        value={formData.hotelName}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Your Hotel Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-300 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-stone-100 focus:outline-none focus:border-amber-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Hotel Website Development">Hotel Website Development</option>
                      <option value="Hotel SEO">Hotel SEO</option>
                      <option value="Hotel Digital Marketing">Hotel Digital Marketing</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Google Business Management">Google Business Management</option>
                      <option value="Hotel Photography">Hotel Photography</option>
                      <option value="Hotel Booking Engine">Hotel Booking Engine</option>
                      <option value="Other Services">Other Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-200 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-amber-200 to-yellow-300 text-stone-900 font-bold rounded-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info - UNCHANGED */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-stone-100 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 hover:scale-[1.02] transition-transform duration-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-stone-900" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-400 mb-1">Phone</div>
                    <div className="space-y-1">
                      <a href="tel:+917508639613" className="block text-lg font-semibold text-stone-100 hover:text-amber-200 transition-colors">
                        +91 75086 39613
                      </a>
                      <a href="tel:+917710584886" className="block text-lg font-semibold text-stone-100 hover:text-amber-200 transition-colors">
                        +91 77105 84886
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover:scale-[1.02] transition-transform duration-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-stone-900" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-400 mb-1">Email</div>
                    <a href="mailto:support.clickinroom@gmail.com" className="text-lg font-semibold text-stone-100 hover:text-amber-200 transition-colors">
                      support.clickinroom@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover:scale-[1.02] transition-transform duration-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-stone-900" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-400 mb-1">Address</div>
                    <p className="text-lg font-semibold text-stone-100 leading-relaxed">
                      Hotel Green Garden<br />
                      Opp. Govt. ITI College, Civil Lines<br />
                      Ludhiana, Punjab 141001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-stone-100 mb-4">Business Hours</h3>
              <div className="space-y-3 text-stone-300">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Monday - Friday</span>
                  <span className="text-amber-200 font-semibold">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Saturday</span>
                  <span className="text-amber-200 font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Sunday</span>
                  <span className="text-stone-500">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-amber-200/5 to-yellow-300/5">
              <h3 className="text-xl font-bold text-stone-100 mb-3">Free Consultation</h3>
              <p className="text-stone-300 mb-6">
                Schedule a free 30-minute consultation to discuss your hotel's digital transformation.
              </p>
              <a
                href="tel:+917508639613"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-200 to-yellow-300 text-stone-900 font-bold rounded-lg hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 group"
              >
                <span>Call Now</span>
                <Phone className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
