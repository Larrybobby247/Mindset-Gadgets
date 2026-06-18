import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConciergeBell, faHouseUser, faBolt, faShieldHalved, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Img1 from '../assets/house10.jpg';
import Img3 from '../assets/house6.jpg';
import Img4 from '../assets/house7.jpg';

const Services = () => {
  const sectionRef = useScrollAnimation();

  const services = [
    {
      id: 1,
      title: 'Premium Shortlet Lodging',
      icon: faHouseUser,
      desc: 'Fully en-suite 2-bedroom apartments featuring modern living spaces and private balconies.',
      image: Img1,
    },
    {
      id: 2,
      title: '24/7 Uninterrupted Power',
      icon: faBolt,
      desc: 'Dual-source backup power grids ensuring zero downtime for your appliances and air conditioning.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    },
    {
      id: 3,
      title: 'Gated Estate Security',
      icon: faShieldHalved,
      desc: 'Round-the-clock physical security guards and access control points for complete peace of mind.',
      image: Img3,
    },
    {
      id: 4,
      title: 'Chef-Ready Kitchens',
      icon: faUtensils,
      desc: 'Fully equipped kitchens with modern cookers, refrigerators, microwaves, and complete dinnerware sets.',
      image: Img4,
    },
    {
      id: 5,
      title: 'High-Speed Connectivity',
      icon: faWifi,
      desc: 'Dedicated high-bandwidth Wi-Fi networks perfect for remote corporate work and HD streaming.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
      featured: true,
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-secondary" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 section-fade">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <FontAwesomeIcon icon={faConciergeBell} className="text-accent" />
            <span className="text-primary text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Premium Amenities for a <span className="gold-gradient-text">Seamless Stay</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Every detail is designed to ensure your comfort, security, and productivity during your stay in Abuja.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`section-fade bg-white rounded-2xl overflow-hidden shadow-lg card-hover group ${
                service.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {service.featured ? (
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-1/2 h-56 md:h-auto overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover image-zoom" />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary/60 to-transparent" />
                  </div>
                  <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg mb-4">
                      <FontAwesomeIcon icon={service.icon} className="text-primary text-xl" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="relative h-56 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover image-zoom" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                        <FontAwesomeIcon icon={service.icon} className="text-primary text-xl" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;