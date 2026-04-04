import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ------------------------------------------------------------------
    // EMAILJS CONFIGURATION
    // Replace the placeholders below with your actual EmailJS credentials
    // ------------------------------------------------------------------
    const serviceId = 'YOUR_SERVICE_ID';       // e.g., service_xxxxxxx
    const templateId = 'YOUR_TEMPLATE_ID';     // e.g., template_xxxxxxx
    const publicKey = 'YOUR_PUBLIC_KEY';      // e.g., user_xxxxxxx

    // Prepare the template parameters
    // Ensure these keys match the variables in your EmailJS template (e.g., {{from_name}})
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      hotel_name: formData.hotelName,
      service: formData.service,
      message: formData.message,
    };

    // Send the email
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            hotelName: '',
            service: '',
            message: '',
          });
        }, 3000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send the message. Please check your connection and try again.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
            <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent">Let's Transform</span>
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
                  <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-stone-100 mb-4">Thank You!</h3>
                  <p className="text-stone-400">
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-200 transition-colors"
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-200 transition-colors"
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-200 transition-colors"
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-200 transition-colors"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-stone-100 focus:outline-none focus:border-amber-200 transition-colors"
                    >
                      <option value="" className="bg-stone-900">Select a service</option>
                      <option value="website" className="bg-stone-900">Hotel Website Development</option>
                      <option value="seo" className="bg-stone-900">Hotel SEO</option>
                      <option value="digital-marketing" className="bg-stone-900">Digital Marketing</option>
                      <option value="social-media" className="bg-stone-900">Social Media Marketing</option>
                      <option value="photography" className="bg-stone-900">Hotel Photography</option>
                      <option value="booking-engine" className="bg-stone-900">Booking Engine</option>
                      <option value="other" className="bg-stone-900">Other Services</option>
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-200 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-amber-200 to-yellow-300 text-stone-900 font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-stone-100 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-stone-900" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-400 mb-1">Phone</div>
                    <div className="space-y-1">
                      <a href="tel:+917508639613" className="block text-lg text-stone-100 hover:text-amber-200 transition-colors">
                        +91 75086 39613
                      </a>
                      <a href="tel:+917710584886" className="block text-lg text-stone-100 hover:text-amber-200 transition-colors">
                        +91 77105 84886
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-stone-900" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-400 mb-1">Email</div>
                    <a href="mailto:support.clickinroom@gmail.com" className="text-lg text-stone-100 hover:text-amber-200 transition-colors">
                      support.clickinroom@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-stone-900" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-400 mb-1">Address</div>
                    <p className="text-lg text-stone-100">
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
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-amber-200">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-amber-200">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-stone-500">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-amber-200/5 to-yellow-300/5">
              <h3 className="text-xl font-bold text-stone-100 mb-3">Free Consultation</h3>
              <p className="text-stone-300 mb-4">
                Schedule a free 30-minute consultation to discuss your hotel's digital transformation.
              </p>
              <a
                href="tel:+917508639613"
                className="inline-block px-6 py-3 bg-gradient-to-r from-amber-200 to-yellow-300 text-stone-900 font-bold rounded-lg hover:shadow-xl transition-all"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
