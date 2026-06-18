import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Img1 from '../assets/house4.jpg';
import Img2 from '../assets/house8.jpg';
import Img3 from '../assets/house7.jpg';
import Img4 from '../assets/house5.jpg';
import Img5 from '../assets/house13.jpg';
import Img6 from '../assets/house2.jpg';

const Gallery = () => {
  const sectionRef = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: Img1,
      title: 'Living Room',
      category: 'Interior',
    },
    {
      src: Img2,
      title: 'Master Bedroom',
      category: 'Bedroom',
    },
    {
      src: Img3,
      title: 'Modern Bathroom',
      category: 'Bathroom',
    },
    {
      src: Img4,
      title: 'Dining Area',
      category: 'Dining',
    },
    {
      src: Img5,
      title: 'Rooftop Terrace',
      category: 'Outdoor',
    },
    {
      src: Img6,
      title: 'Kitchen Space',
      category: 'Kitchen',
    },
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-secondary" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 section-fade">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <FontAwesomeIcon icon={faImages} className="text-accent" />
            <span className="text-primary text-sm font-semibold">Gallery</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Explore Our <span className="gold-gradient-text">Spaces</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Take a visual tour of our beautifully designed apartments and facilities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`section-fade gallery-item relative rounded-2xl overflow-hidden cursor-pointer group ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-accent text-sm font-medium">{image.category}</span>
                <h3 className="text-white font-display text-xl font-bold">{image.title}</h3>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FontAwesomeIcon icon={faImages} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white z-10"
          >
            <FontAwesomeIcon icon={faTimes} className="text-3xl" />
          </button>

          <button 
            onClick={prevImage}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
          </button>

          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
          </button>

          <div className="max-w-5xl w-full">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <span className="text-accent text-sm">{selectedImage.category}</span>
              <h3 className="text-white font-display text-2xl font-bold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;