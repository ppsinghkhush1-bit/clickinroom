import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Booking from './components/Booking'; // Import the Booking component

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
        <Navigation scrolled={scrolled} />
        
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Rooms />
              <Gallery />
              <Testimonials />
              <Contact />
            </>
          } />
          
          {/* Booking Page Route */}
          <Route path="/booking" element={<Booking />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
