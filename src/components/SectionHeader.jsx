import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SectionHeader = ({ icon, label, title, highlight, description, dark = false }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 section-fade">
      <div className={`inline-flex items-center space-x-2 ${dark ? 'bg-white/10 border border-white/20' : 'bg-accent/10'} rounded-full px-4 py-2 mb-6`}>
        <FontAwesomeIcon icon={icon} className="text-accent" />
        <span className={`text-sm font-semibold ${dark ? 'text-white' : 'text-primary'}`}>{label}</span>
      </div>
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${dark ? 'text-white' : 'text-primary'}`}>
        {title} <span className="gold-gradient-text">{highlight}</span>
      </h2>
      {description && (
        <p className={`text-lg ${dark ? 'text-white/70' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;