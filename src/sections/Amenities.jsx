import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faWifi, faSwimmingPool, faDumbbell, faUtensils, faCalendarAlt, faConciergeBell, faTshirt, faParking } from '@fortawesome/free-solid-svg-icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Amenities = () => {
  const sectionRef = useScrollAnimation();

  const amenities = [
    { icon: faWifi, title: 'Free Wi-Fi', desc: 'High-speed fiber internet throughout the property', color: 'from-blue-500/20 to-blue-600/10' },
    { icon: faSwimmingPool, title: 'Swimming Pool', desc: 'Rooftop infinity pool with panoramic city views', color: 'from-cyan-500/20 to-cyan-600/10' },
    { icon: faDumbbell, title: 'Gym Center', desc: 'Fully equipped fitness center with modern equipment', color: 'from-red-500/20 to-red-600/10' },
    { icon: faUtensils, title: 'Restaurant & Bar', desc: 'On-site dining with continental and local cuisine', color: 'from-orange-500/20 to-orange-600/10' },
    { icon: faCalendarAlt, title: 'Event Hall', desc: 'Elegant space for meetings, parties, and celebrations', color: 'from-purple-500/20 to-purple-600/10' },
    { icon: faConciergeBell, title: '24/7 Concierge', desc: 'Round-the-clock guest assistance and services', color: 'from-accent/30 to-accent/10' },
    { icon: faTshirt, title: 'Laundry Service', desc: 'Professional washing, drying, and ironing services', color: 'from-green-500/20 to-green-600/10' },
    { icon: faParking, title: 'Secure Parking', desc: 'Covered parking with 24/7 surveillance and access control', color: 'from-gray-500/20 to-gray-600/10' },
  ];

  return (
    <section id="amenities" className="py-20 sm:py-28 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-accent/10 rounded-full animate-float hidden lg:block" />
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-accent/5 rotate-45 animate-float-delayed hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 section-fade">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <FontAwesomeIcon icon={faStar} className="text-accent" />
            <span className="text-primary text-sm font-semibold">Amenities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            World-Class <span className="gold-gradient-text">Amenities</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Enjoy premium facilities designed to elevate your stay to a five-star experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="section-fade amenity-card bg-secondary rounded-2xl p-8 text-center group cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              {/* Floating 3D Icon */}
              <div className="relative mb-6 flex justify-center">
                <div 
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${amenity.color} flex items-center justify-center shadow-lg amenity-icon-float group-hover:scale-110 transition-transform duration-300`}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  <FontAwesomeIcon 
                    icon={amenity.icon} 
                    className="text-3xl text-primary group-hover:text-accent transition-colors duration-300" 
                  />
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="font-display text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {amenity.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {amenity.desc}
              </p>

              {/* Floating particles */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent/30 rounded-full animate-float hidden lg:block" style={{ animationDelay: `${index * 0.3}s` }} />
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-accent/20 rounded-full animate-float-delayed hidden lg:block" style={{ animationDelay: `${index * 0.4}s` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;