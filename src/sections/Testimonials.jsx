import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faStar } from '@fortawesome/free-solid-svg-icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const sectionRef = useScrollAnimation();

  const reviews = [
    {
      id: 1,
      name: 'Adaora Oke',
      initials: 'AO',
      role: 'Corporate Guest',
      text: 'I had the pleasure of staying in this beautiful apartment for two weeks and it truly felt like a home away from home.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Maryanthony Chidebe',
      initials: 'MC',
      role: 'Holiday Traveler',
      text: 'We had a truly fantastic stay at Ace apartment! It felt like home away from home the moment I walked in.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Chidi Anene',
      initials: 'CA',
      role: 'Staycationer',
      text: 'Great Apartment. As someone who values my money, I would say it is worth every penny',
      rating: 5,
    },
    {
      id: 4,
      name: 'Eboh Eboh',
      initials: 'EE',
      role: 'Frequent Diaspora Guest',
      text: 'Clean apartment. Just as seen in the photos. Quiet neighbourhood with Kaura Market close by.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-primary relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 border border-accent/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-accent/10 rotate-45 animate-float-delayed hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 section-fade">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20">
            <FontAwesomeIcon icon={faComments} className="text-accent" />
            <span className="text-white text-sm font-semibold">Guest Reviews</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Guests <span className="gold-gradient-text">Say</span>
          </h2>
          <p className="text-white/70 text-lg">
            Real experiences from real guests who have stayed at Ace Service Apartments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="section-fade testimonial-card rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent font-bold text-xl">{review.initials}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <p className="text-white/50 text-sm">{review.role}</p>
                </div>
                <div className="ml-auto flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-accent text-sm" />
                  ))}
                </div>
              </div>
              <p className="text-white/80 leading-relaxed italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;