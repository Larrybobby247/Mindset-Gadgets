import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Img from '../assets/house13.jpg';

const Hero = () => {
  const stats = [
    { value: '4+', label: 'Luxury Suites' },
    { value: '24/7', label: 'Power & Security' },
    { value: '100%', label: 'Guest Satisfaction' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)' }}
      ><img src={Img} alt="" className='h-full object-cover w-full'/></div>
      <div className="gradient-overlay absolute inset-0" />

      {/* Floating 3D Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-accent/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-lg animate-float-delayed hidden lg:block" />
      <div className="absolute bottom-40 left-20 w-24 h-24 border border-accent/15 rounded-full animate-float-slow hidden lg:block" />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-accent/5 rotate-45 animate-float hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl section-fade visible">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <FontAwesomeIcon icon={faStar} className="text-accent text-sm" />
            <span className="text-white/90 text-sm font-medium">Premium Short-Let Apartments in Abuja</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Your Spotless & Secure <span className="gold-gradient-text">Home Away From Home</span> in Abuja
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            Experience premium hospitality in Durumi. Fully serviced 2-bedroom en-suite apartments featuring 24/7 power, high-speed Wi-Fi, and top-tier security.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/2348167696546"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-white px-8 py-4 rounded-full text-base font-semibold inline-flex items-center justify-center space-x-2"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
              <span>Book on WhatsApp</span>
            </a>
            <a
              href="#listings"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#listings')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full text-base font-semibold inline-flex items-center justify-center space-x-2 hover:bg-white/20 transition-all"
            >
              <span>Explore Suites</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl sm:text-4xl font-bold text-accent font-display">{stat.value}</div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-white/50 hover:text-white transition-colors"
        >
          <FontAwesomeIcon icon={faChevronDown} className="text-2xl" />
        </a>
      </div>
    </section>
  );
};

export default Hero;