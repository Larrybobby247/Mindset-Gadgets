import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faSnowflake, faTv, faKitchenSet, faShirt, faCar, faBriefcase, faBolt, faHotTubPerson, faMountainCity, faGem, faKey } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SuiteCard from './SuiteCard';

import Img1a from '../assets/house1a.jpg';
import Img1b from '../assets/house1b.jpg';
import Img1c from '../assets/house1c.jpg';
import Img1d from '../assets/house1d.jpg';
import Img1e from '../assets/house1e.jpg';

import Img2a from '../assets/house2a.jpg';
import Img2b from '../assets/house2b.jpg';
import Img2c from '../assets/house2c.jpg';
import Img2d from '../assets/house2d.jpg';
import Img2e from '../assets/house2e.jpg';

import Img3a from '../assets/house3a.jpg';
import Img3b from '../assets/house3f.jpg';
import Img3c from '../assets/house3c.jpg';
import Img3d from '../assets/house3e.jpg';
import Img3e from '../assets/house3g.jpg';

import Img4a from '../assets/house4c.jpg';
import Img4b from '../assets/house4b.jpg';
import Img4c from '../assets/house4f.jpg';
import Img4d from '../assets/house4d.jpg';
import Img4e from '../assets/house4e.jpg';


const Listings = () => {
  const sectionRef = useScrollAnimation();

  const suites = [
    {
      id: 1,
      name: 'Serviced Apartment Durumi',
      type: 'Luxery 2-Bedroom Serviced Apartment',
      price: '₦100,000',
      available: true,
      images: [Img1a, Img1e, Img1b, Img1c, Img1d],
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
      available: true,
      images: [Img2a, Img2e, Img2b, Img2c, Img2d],
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
      available: true,
      images: [Img3a, Img3e, Img3b, Img3c, Img3d],
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
      available: true,
      images: [Img4a, Img4e, Img4b, Img4c, Img4d],
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
            <SuiteCard key={suite.id} suite={suite} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listings;