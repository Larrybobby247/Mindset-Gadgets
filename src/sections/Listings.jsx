import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faSnowflake, faTv, faKitchenSet, faShirt, faCar, faBriefcase, faBolt, faHotTubPerson, faMountainCity, faGem, faKey } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Img1 from '../assets/house1.jpg';
import Img2 from '../assets/house8.jpg';
import Img3 from '../assets/house10.jpg';
import Img4 from '../assets/house11.jpg';


const Listings = () => {
  const sectionRef = useScrollAnimation();

  const suites = [
    {
      id: 1,
      name: 'Serviced Apartment Durumi',
      type: 'Luxery 2-Bedroom Serviced Apartment',
      price: '₦100,000',
      image: Img1,
      features: [
        { icon: faMountainCity, label: 'Private Balcony' },
        { icon: faSnowflake, label: 'Turbo AC' },
        { icon: faTv, label: 'Smart TV + Netflix' },
        { icon: faCar, label: 'Free Parking' },
        { icon: faBolt, label: '24/7 Electricity' },
        { icon: faKitchenSet, label: 'Fully Equipped Kitchen' },
      ],
    },
    {
      id: 2,
      name: 'Serviced 2 Bedroom Apartment Durumi',
      type: 'Luxery 2-Bedroom Premium En-Suite',
      price: '₦100,000',
      image: Img2,
      features: [
        { icon: faKitchenSet, label: 'Fully Equipped Kitchen' },
        { icon: faBolt, label: '24/7 Electricity' },
        { icon: faShirt, label: 'In-unit Washer' },
        { icon: faCar, label: 'Free Parking' },
      ],
    },
    {
      id: 3,
      name: '2 Bedroom Airbnb Apartment Durumi',
      type: 'Airbnb Apartment in Durumi Abuja',
      price: '₦100,000',
      image: Img3,
      features: [
        { icon: faBriefcase, label: 'Work-friendly Desk' },
        { icon: faBolt, label: '24/7 Electricity' },
        { icon: faBolt, label: '24/7 Power Block' },
        { icon: faHotTubPerson, label: 'Water Heater' },
        { icon: faCar, label: 'Free Parking' },
      ],
    },
    {
      id: 4,
      name: '2 Bedroom En-Suite Apartment Durumi',
      type: 'Luxery 2-Bedroom Premium En-Suite',
      price: '₦100,000',
      image: Img4,
      features: [
        { icon: faKitchenSet, label: 'Fully Equipped Kitchen' },
        { icon: faBolt, label: '24/7 Electricity' },
        { icon: faShirt, label: 'In-unit Washer' },
        { icon: faCar, label: 'Free Parking' },
      ],
    },
  ];

  return (
    <section id="listings" className="py-20 sm:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 section-fade">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <FontAwesomeIcon icon={faBed} className="text-accent" />
            <span className="text-primary text-sm font-semibold">Our Suites</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Choose Your Perfect <span className="gold-gradient-text">Suite</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Each apartment is meticulously maintained and fully equipped for your comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {suites.map((suite) => (
            <div key={suite.id} className="section-fade bg-secondary rounded-2xl overflow-hidden shadow-lg card-hover group">
              <div className="relative h-72 overflow-hidden">
                <img src={suite.image} alt={suite.name} className="w-full h-full object-cover image-zoom" />
                <div className="absolute top-4 right-4 bg-accent text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {suite.price}/night
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent h-32" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-display text-2xl font-bold">{suite.name}</h3>
                  <p className="text-white/80 text-sm">{suite.type}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {suite.features.map((feature, idx) => (
                    <span key={idx} className="bg-white px-3 py-1.5 rounded-full text-sm text-primary border border-gray-200 flex items-center">
                      <FontAwesomeIcon icon={feature.icon} className="mr-1.5 text-accent" />
                      {feature.label}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/2348167696546?text=Hi, I'm interested in booking ${encodeURIComponent(suite.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-white w-full py-3 rounded-xl text-center font-semibold block inline-flex items-center justify-center space-x-2"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                  <span>Book This Suite</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listings;