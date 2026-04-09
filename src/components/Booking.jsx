import { useRef, useState, FormEvent } from 'react';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Booking = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const SERVICE_ID = 'service_hu0fejb';
  const TEMPLATE_ID = 'template_4wtjpte';
  const PUBLIC_KEY = 'NSNP7QM8QEpLBGzy1';

  const services = [
    'Hotel Website Development',
    'Hotel SEO',
    'Hotel Digital Marketing',
    'Social Media Marketing',
    'Google Business Management',
    'Hotel Audit Express',
    'OTA Setup',
    'Google Hotels Listing',
    'Pre-Launch Marketing',
    'Hotel Photography',
    'Influencer Marketing',
    'Reputation Management',
    'Hotel Booking Engine',
    'Luxury Stays & Accommodations',
    'Event Management',
    'Travel & Concierge Services'
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsLoading(true);

    try {
      const response = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      console.log('SUCCESS!', response.status, response.text);
      alert('Thank you! Your request has been received. We will contact you shortly.');
      formRef.current.reset();
    } catch (error) {
      console.error('EMAILJS ERROR:', error);
      alert('Email failed. Please open browser console and check the exact error.');
    } finally {
      setIsLoading(false);
    }
  };

  const currentTime = new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return (
    <section className="py-24 relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-800"></div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Book Your</span>
            <span className="text-gradient"> Service</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Fill out the form below and our team will contact you shortly.
          </p>
        </div>

        <div className="glass-morphism rounded-xl p-8 md:p-12">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden fields for EmailJS */}
            <input type="hidden" name="to_email" value="support.clickinroom@gmail.com" />
            <input type="hidden" name="current_time" value={currentTime} />

            <div>
              <label className="block text-gray-300 mb-2 font-medium">Your Name *</label>
              <input
                type="text"
                name="customer_name"
                placeholder="John Doe"
                required
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">Email Address *</label>
              <input
                type="email"
                name="customer_email"
                placeholder="john@example.com"
                required
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">Phone Number *</label>
              <input
                type="tel"
                name="customer_mobile"
                placeholder="+91 98765 43210"
                required
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">Hotel Name</label>
              <input
                type="text"
                name="hotel_name"
                placeholder="Your Hotel Name"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">Service Interested In *</label>
              <select
                name="service_type"
                required
                defaultValue=""
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.5em'
                }}
              >
                <option value="" disabled>Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service} className="bg-gray-800 text-white">
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">Message</label>
              <textarea
                name="message_content"
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-600 text-black font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
