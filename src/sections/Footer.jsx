import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faBolt, faShieldHalved, faUtensils, faWifi, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#listings', label: 'Our Suites' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  const services = [
    { icon: faHouseUser, label: 'Premium Shortlet' },
    { icon: faBolt, label: '24/7 Power' },
    { icon: faShieldHalved, label: 'Gated Security' },
    { icon: faUtensils, label: 'Chef-Ready Kitchen' },
    { icon: faWifi, label: 'High-Speed WiFi' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-primary pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-primary font-bold text-xl font-display">ASA</span>
              </div>
              <span className="text-white font-display font-semibold text-xl">Ace Service Apartments</span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6">
              Delivering premium, highly rated short-let experiences with unmatched cleanliness and security in Abuja.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-accent hover:text-primary transition-all">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-accent hover:text-primary transition-all">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://wa.me/2348167696546" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-accent hover:text-primary transition-all">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-white/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-white/60 flex items-center">
                  <FontAwesomeIcon icon={service.icon} className="text-accent mr-2 text-sm" />
                  {service.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faLocationDot} className="text-accent mt-1" />
                <span className="text-white/60">301 Dipo Fisho Street, Durumi, Abuja 900103, FCT, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPhone} className="text-accent" />
                <a href="tel:+2348167696546" className="text-white/60 hover:text-accent transition-colors">+234 816 769 6546</a>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-accent" />
                <a href="mailto:info@aceserviceapartments.com" className="text-white/60 hover:text-accent transition-colors">info@aceserviceapartments.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            © 2026 Ace Service Apartments. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/40 hover:text-white/60 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white/60 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;