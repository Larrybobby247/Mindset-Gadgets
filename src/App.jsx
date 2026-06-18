import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Amenities from './sections/Amenities';
import Gallery from './sections/Gallery';
import Listings from './sections/Listings';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-secondary text-gray-800 antialiased">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Amenities />
      <Gallery />
      <Listings />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;