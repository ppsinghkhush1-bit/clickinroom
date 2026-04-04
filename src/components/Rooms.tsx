import { useState } from 'react';
import { Bed, Users, Maximize, Star, ArrowRight, X, Send } from 'lucide-react';

// Define the Room interface
interface Room {
  id: number;
  category: string;
  name: string;
  image: string;
  price: string;
  rating: number;
  size: string;
  guests: number;
  description: string;
}

// Define Form Data interface
interface FormData {
  name: string;
  email: string;
  phone: string;
  hotelName: string;
  roomName: string;
  message: string;
}

const Rooms = () => {
  const [filter, setFilter] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    hotelName: '',
    roomName: '',
    message: ''
  });

  const rooms: Room[] = [
    {
      id: 1,
      category: 'deluxe',
      name: 'Deluxe Suite',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹8,999',
      rating: 4.9,
      size: '450 sq ft',
      guests: 2,
      description: 'Elegant suite with city views and premium amenities',
    },
    {
      id: 2,
      category: 'premium',
      name: 'Presidential Suite',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹24,999',
      rating: 5.0,
      size: '1200 sq ft',
      guests: 4,
      description: 'Ultimate luxury with panoramic views and private terrace',
    },
    {
      id: 3,
      category: 'standard',
      name: 'Executive Room',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹5,499',
      rating: 4.7,
      size: '320 sq ft',
      guests: 2,
      description: 'Comfortable room perfect for business travelers',
    },
    {
      id: 4,
      category: 'deluxe',
      name: 'Royal Deluxe',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹12,999',
      rating: 4.8,
      size: '580 sq ft',
      guests: 3,
      description: 'Spacious luxury room with contemporary design',
    },
    {
      id: 5,
      category: 'premium',
      name: 'Penthouse Suite',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹34,999',
      rating: 5.0,
      size: '1800 sq ft',
      guests: 6,
      description: 'Top-floor luxury with private pool and butler service',
    },
    {
      id: 6,
      category: 'standard',
      name: 'Superior Room',
      image: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹4,299',
      rating: 4.6,
      size: '280 sq ft',
      guests: 2,
      description: 'Cozy and affordable with all essential amenities',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Rooms' },
    { id: 'standard', name: 'Standard' },
    { id: 'deluxe', name: 'Deluxe' },
    { id: 'premium', name: 'Premium' },
  ];

  const filteredRooms = filter === 'all' ? rooms : rooms.filter(room => room.category === filter);

  // Open Modal and set selected room
  const handleBookNow = (room: Room) => {
    setSelectedRoom(room);
    setFormData(prev => ({ ...prev, roomName: room.name }));
    setIsModalOpen(true);
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking Request:', formData);
    alert(`Thank you! Your request for ${formData.roomName} has been received.`);
    setIsModalOpen(false);
    // Reset form
    setFormData({ name: '', email: '', phone: '', hotelName: '', roomName: '', message: '' });
  };

  return (
    <>
      <section id="rooms" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-black to-gray-900"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-semibold">
                Luxury Accommodations
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Experience</span>
              <br />
              <span className="text-gradient">Unparalleled Comfort</span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Choose from our selection of meticulously designed rooms and suites
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-600 text-black'
                      : 'glass-morphism text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room, index) => (
              <div
                key={room.id}
                className="group glass-morphism rounded-xl overflow-hidden hover:scale-105 transition-all duration-500"
                style={{
                  animation: `slideUp 0.6s ease-out forwards ${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 glass-morphism-dark px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-semibold text-sm">{room.rating}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {room.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {room.description}
                  </p>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Maximize className="w-4 h-4" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{room.guests} Guests</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bed className="w-4 h-4" />
                      <span>King Bed</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <div className="text-sm text-gray-400">Starting from</div>
                      <div className="text-2xl font-bold text-gradient">{room.price}</div>
                    </div>
                    
                    {/* Updated Button to open Modal */}
                    <button 
                      onClick={() => handleBookNow(room)}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-600 text-black font-semibold rounded-lg hover:shadow-xl transition-all"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-morphism rounded-2xl p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">Book Your Stay</h3>
              <p className="text-gray-400">Fill in your details for <span className="text-yellow-400 font-semibold">{selectedRoom?.name}</span></p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Your Name *</label>
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
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Email Address *</label>
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Phone */}
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Phone Number *</label>
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
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Hotel Name</label>
                  <input
                    type="text"
                    name="hotelName"
                    placeholder="Your Hotel Name"
                    value={formData.hotelName}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>
              </div>

              {/* Room Name (Read Only) */}
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">Room Selected</label>
                <input
                  type="text"
                  name="roomName"
                  value={formData.roomName}
                  readOnly
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-yellow-400 font-semibold cursor-not-allowed focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows={3}
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
      )}
    </>
  );
};

export default Rooms;
