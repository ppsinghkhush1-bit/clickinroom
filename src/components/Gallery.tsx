import { useState, useEffect } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedHotel, setSelectedHotel] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hotel Data List
  const hotels = [
    {
      id: 1,
      name: 'Hotel Mezbaan',
      // Main image
      mainImage: '/hotel mezbaan/436c0fb1-a443-409f-980f-9b88cff5ae44.jpeg',
      gallery: [
        '/hotel mezbaan/436c0fb1-a443-409f-980f-9b88cff5ae44.jpeg',
        '/hotel mezbaan/948953f7-3d4a-4f71-a50a-63cf3fe6943c.jpeg',
        '/hotel mezbaan/WhatsApp Image 2026-01-31 at 12.26.21.jpeg',
        '/hotel mezbaan/WhatsApp Image 2026-01-31 at 12.26.22.jpeg',
        '/hotel mezbaan/WhatsApp Image 2026-01-31 at 12.26.23.jpeg',
        '/hotel mezbaan/WhatsApp Image 2026-01-31 at 12.26.24.jpeg',
        '/hotel mezbaan/WhatsApp Image 2026-01-31 at 12.26.27.jpeg',
        '/hotel mezbaan/WhatsApp Image 2026-01-31 at 12.26.28.jpeg',
        '/hotel mezbaan/WhatsApp Image 2026-01-31 at 12.26.29.jpeg',
        '/hotel mezbaan/WhatsApp Image 2026-01-31 at 12.26.31.jpeg',
        '/hotel mezbaan/WhatsApp Image 2026-01-31 at 12.26.32.jpeg',
      ],
    },
    {
      id: 2,
      name: 'Grand Luxury Suite',
      mainImage: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
    {
      id: 3,
      name: 'Ocean View Resort',
      mainImage: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
  ];

  const openLightbox = (hotel: any) => {
    setSelectedHotel(hotel);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedHotel(null);
    setCurrentImageIndex(0);
  };

  const goToNext = () => {
    if (!selectedHotel) return;
    const totalImages = selectedHotel.gallery.length;
    setCurrentImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const goToPrevious = () => {
    if (!selectedHotel) return;
    const totalImages = selectedHotel.gallery.length;
    setCurrentImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedHotel) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedHotel]);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-800"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-semibold">
              Our Properties
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Explore Our</span>
            <br />
            <span className="text-white">Hotels</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Select a property to view the full gallery
          </p>
        </div>

        {/* Hotel List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer h-[400px]"
              onClick={() => openLightbox(hotel)}
            >
              <img
                src={encodeURI(hotel.mainImage)}
                alt={hotel.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-90 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-2xl font-bold mb-2">{hotel.name}</h3>
                <div className="flex items-center text-yellow-400 text-sm font-medium">
                  <ZoomIn className="w-4 h-4 mr-2" />
                  <span>View Gallery ({hotel.gallery.length} Photos)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedHotel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all z-50"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8 text-white" />
          </button>

          <button
            className="absolute left-4 md:left-8 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all z-50"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <button
            className="absolute right-4 md:right-8 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all z-50"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          <div className="relative max-w-5xl w-full flex flex-col items-center">
            {/* FIX: Added encodeURI to handle spaces in filenames */}
            <img
              src={encodeURI(selectedHotel.gallery[currentImageIndex])}
              alt={`Gallery Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold">{selectedHotel.name}</h3>
              <p className="text-gray-400 text-sm mt-1">
                Photo {currentImageIndex + 1} of {selectedHotel.gallery.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
