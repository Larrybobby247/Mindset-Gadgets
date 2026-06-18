import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faBullseye, faWandSparkles, faBolt, faHeadset, faShieldHalved, faAward } from '@fortawesome/free-solid-svg-icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Img from '../assets/house12.jpg';

const About = () => {
  const sectionRef = useScrollAnimation();

  const values = [
    { icon: faWandSparkles, label: 'Spotless Cleanliness' },
    { icon: faBolt, label: 'Uninterrupted Power' },
    { icon: faHeadset, label: 'Proactive Service' },
    { icon: faShieldHalved, label: 'Absolute Security' },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="section-fade relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={Img}
                alt="Luxury Apartment Interior" 
                className="w-full h-[500px] object-cover image-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faAward} className="text-accent text-xl" />
                </div>
                <div>
                  <div className="font-bold text-primary">Top Rated</div>
                  <div className="text-sm text-gray-500">Short-Let in Abuja</div>
                </div>
              </div>
            </div>
            {/* Floating 3D Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-full animate-float hidden lg:block" />
            <div className="absolute top-1/2 -right-8 w-12 h-12 border-2 border-accent/20 rounded-lg animate-float-delayed hidden lg:block" />
          </div>

          <div className="section-fade">
            <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
              <FontAwesomeIcon icon={faInfoCircle} className="text-accent" />
              <span className="text-primary text-sm font-semibold">About Us</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Where Comfort Meets <span className="gold-gradient-text">Luxury</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Ace Service Apartments offers exceptional short-let accommodations in the heart of Abuja, known for pristine cleanliness and highly responsive hospitality.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              We bridge the gap between home comfort and luxury hotel services. Our highly rated properties look exactly like their photos, ensuring zero booking surprises.
            </p>

            <div className="bg-secondary rounded-xl p-6 mb-8 border-l-4 border-accent">
              <h3 className="font-semibold text-primary mb-2 flex items-center">
                <FontAwesomeIcon icon={faBullseye} className="text-accent mr-2" />
                Our Mission
              </h3>
              <p className="text-gray-600">To deliver a seamless, stress-free lodging experience where safety, comfort, and functionality meet perfectly.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={value.icon} className="text-accent" />
                  </div>
                  <span className="text-sm font-medium text-primary">{value.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;