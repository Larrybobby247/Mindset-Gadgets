import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faStar } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.jpg'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#listings', label: 'Ensuites' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src={logo} alt={logo} className='rounded-full'/>
              {/* <span className="text-primary font-bold text-lg font-display">ASA</span> */}
            </div>
            <span className="text-white font-display font-semibold text-xl hidden sm:block">Ace Service Apartments</span>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="nav-link text-white/90 hover:text-white text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/2348167696546"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-white px-6 py-2.5 rounded-full text-sm font-semibold inline-flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>Book Now</span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-white p-2"
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 w-80 h-full bg-primary  shadow-2xl z-50 lg:hidden transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white"
          >
            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
          </button>
          <div className="mt-16 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-white text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/2348167696546"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-white px-6 py-3 rounded-full text-center font-semibold block mt-8 inline-flex items-center justify-center space-x-2 w-full"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>Book on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;