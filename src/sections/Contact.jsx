import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser, faEnvelope, faPhone, faCalendar, faUsers, faMessage, faMapMarkerAlt, faBed } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const sectionRef = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    suite: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello Ace Service Apartments!%0A%0A` +
      `*New Booking Inquiry*%0A%0A` +
      `👤 *Name:* ${formData.name}%0A` +
      `📧 *Email:* ${formData.email}%0A` +
      `📞 *Phone:* ${formData.phone}%0A` +
      `📅 *Check-in:* ${formData.checkIn}%0A` +
      `📅 *Check-out:* ${formData.checkOut}%0A` +
      `👥 *Guests:* ${formData.guests}%0A` +
      `🏠 *Preferred Suite:* ${formData.suite || 'Any Available'}%0A` +
      `💬 *Message:* ${formData.message || 'N/A'}%0A%0A` +
      `Please confirm availability. Thank you!`;

    window.open(`https://wa.me/2348167696546?text=${text}`, '_blank');
  };

  const suites = [
    'The Sapphire Suite',
    'The Emerald Suite', 
    'The Diamond Suite',
    'The Platinum Penthouse'
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-secondary relative overflow-hidden" ref={sectionRef}>
      {/* Floating 3D Background Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-float hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float-delayed hidden lg:block" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-accent/10 rounded-lg rotate-12 animate-float-slow hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 section-fade">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <FontAwesomeIcon icon={faPaperPlane} className="text-accent" />
            <span className="text-primary text-sm font-semibold">Get in Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Book Your <span className="gold-gradient-text">Stay</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Fill out the form below and we'll respond via WhatsApp with availability and confirmation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 section-fade">
            <div className="bg-primary rounded-2xl p-8 text-white h-full">
              <h3 className="font-display text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faPhone} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Phone</p>
                    <a href="tel:+2348167696546" className="text-white hover:text-accent transition-colors">+234 816 769 6546</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Email</p>
                    <a href="mailto:info@aceserviceapartments.com" className="text-white hover:text-accent transition-colors">info@aceserviceapartments.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faMessage} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">WhatsApp</p>
                    <a href="https://wa.me/2348167696546" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">+234 816 769 6546</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Address</p>
                    <p className="text-white">301 Dipo Fisho Street, Durumi, Abuja 900103, FCT, Nigeria</p>
                  </div>
                </div>
              </div>

              {/* Floating 3D Icon */}
              <div className="mt-8 flex justify-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center animate-float">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-4xl text-accent" />
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 section-fade">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FontAwesomeIcon icon={faUser} className="mr-2 text-accent" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-accent" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FontAwesomeIcon icon={faPhone} className="mr-2 text-accent" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="+234 800 000 0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FontAwesomeIcon icon={faUsers} className="mr-2 text-accent" />
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  >
                    {[1,2,3,4,5,6].map(n => (
                      <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FontAwesomeIcon icon={faCalendar} className="mr-2 text-accent" />
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    required
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FontAwesomeIcon icon={faCalendar} className="mr-2 text-accent" />
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    required
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FontAwesomeIcon icon={faBed} className="mr-2 text-accent" />
                    Preferred Suite
                  </label>
                  <select
                    name="suite"
                    value={formData.suite}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  >
                    <option value="">Select a suite...</option>
                    {suites.map(suite => (
                      <option key={suite} value={suite}>{suite}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FontAwesomeIcon icon={faMessage} className="mr-2 text-accent" />
                    Special Requests
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    placeholder="Any special requests or questions..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-accent text-white w-full py-4 rounded-xl text-base font-semibold inline-flex items-center justify-center space-x-2 mt-6"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                <span>Send Inquiry via WhatsApp</span>
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Your inquiry will be sent directly to our WhatsApp for instant response.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;