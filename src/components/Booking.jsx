import { useState, FormEvent, ChangeEvent } from 'react';
import { Send } from 'lucide-react';

// Define the shape of our form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  hotelName: string;
  service: string;
  message: string;
}

const Booking = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    hotelName: '',
    service: '',
    message: ''
  });

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

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you! Your request has been received. We will contact you shortly.');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      hotelName: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="py-24 relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-800"></div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Book Your</span>
            <span className="text-gradient"> Service</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Fill out the form below and our team will contact you shortly.
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-morphism rounded-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Your Name *</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            {/* Hotel Name */}
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Hotel Name</label>
              <input
                type="text"
                name="hotelName"
                placeholder="Your Hotel Name"
                value={formData.hotelName}
                onChange={handleChange}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            {/* Service Interested In */}
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Service Interested In *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
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

            {/* Message */}
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-600 text-black font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
