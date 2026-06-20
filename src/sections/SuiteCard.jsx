import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const SuiteCard = ({ suite }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === suite.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? suite.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="section-fade bg-secondary rounded-2xl overflow-hidden shadow-lg card-hover group">
      <div className="relative h-72 overflow-hidden">

        {/* Current Image */}
        <img
          src={suite.images[currentImage]}
          alt={suite.name}
          className="w-full h-full object-cover transition-all duration-500"
        />

        {/* Prev Button */}
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        {/* Price */}
        <div className="absolute top-4 right-4 bg-accent text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          {suite.price}/night
        </div>

        {/* Availability */}
        {/* <div
          className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-semibold ${
            suite.available
              ? 'bg-green-500 text-white'
              : 'bg-red-500 text-white'
          }`}
        >
          {suite.available
            ? `${suite.roomsLeft} Room(s) Left`
            : 'Fully Booked'}
        </div> */}

        {/* Gradient */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent h-32" />

        {/* Title */}
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="font-display text-2xl font-bold">
            {suite.name}
          </h3>
          <p className="text-white/80 text-sm">
            {suite.type}
          </p>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {suite.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                currentImage === index
                  ? 'bg-white'
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {suite.features.map((feature, idx) => (
            <span
              key={idx}
              className="bg-white px-3 py-1.5 rounded-full text-sm text-primary border border-gray-200 flex items-center"
            >
              <FontAwesomeIcon
                icon={feature.icon}
                className="mr-1.5 text-accent"
              />
              {feature.label}
            </span>
          ))}
        </div>

        <a
          href={`https://wa.me/2348167696546?text=Hi, I'm interested in booking ${encodeURIComponent(
            suite.name
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3 rounded-xl text-center font-semibold block ${
            suite.available
              ? 'btn-primary text-white'
              : 'bg-gray-400 text-white cursor-not-allowed pointer-events-none'
          }`}
        >
          {suite.available
            ? 'Book This Suite'
            : 'Unavailable'}
        </a>
      </div>
    </div>
  );
};

export default SuiteCard;