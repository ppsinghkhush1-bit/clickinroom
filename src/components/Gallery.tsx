import { useState, useEffect } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  // State to track the index of the currently selected image
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Update these paths to match the files in your 'public/hotel mezbaan/' folder
  const images = [
    {
      url: '/hotel mezbaan/436c0fb1-a443-409f-980f-9b88cff5ae44.jpeg',
      title: 'Hotel Exterior',
    },
    {
      url: '/hotel mezbaan/948953f7-3d4a-4f71-a50a-63cf3fe6943c.jpeg',
      title: 'Lobby & Reception',
    },
    {
      url: '/hotel mezbaan/3.jpg',
      title: 'Luxury Pool',
    },
    {
      url: '/hotel mezbaan/4.jpg',
      title: 'Presidential Suite',
    },
    {
      url: '/hotel mezbaan/5.jpg',
      title: 'Fine Dining',
    },
    {
      url: '/hotel mezbaan/6.jpg',
      title: 'Spa & Wellness',
    },
    {
      url: '/hotel mezbaan/7.jpg',
      title: 'Conference Hall',
    },
    {
      url: '/hotel mezbaan/8.jpg',
      title: 'Deluxe Room',
    },
  ];

  // Navigation functions for the Lightbox
  const goToPrevious = () => {
    if (currentIndex === null) return;
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    if (currentIndex === null) return;
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCurrentIndex(null);
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    if (currentIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-800"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-semibold">
              Visual Experience
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Explore Hotel</span>
            <br />
            <span className="text-white">Mezbaan</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Take a visual tour through our exquisite facilities and accommodations
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer h-64"
              onClick={() => setCurrentIndex(index)}
              style={{
                animation: `fadeIn 0.6s ease-out forwards ${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <ZoomIn className="w-12 h-12 text-yellow-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setCurrentIndex(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 p-2 glass-morphism rounded-full hover:bg-white/20 transition-all z-50"
            onClick={() => setCurrentIndex(null)}
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 md:left-8 p-2 glass-morphism rounded-full hover:bg-white/20 transition-all z-50"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 md:right-8 p-2 glass-morphism rounded-full hover:bg-white/20 transition-all z-50"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {/* Main Image */}
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Image Title Caption */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold">{images[currentIndex].title}</h3>
              <p className="text-gray-400 text-sm mt-1">{currentIndex + 1} / {images.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
