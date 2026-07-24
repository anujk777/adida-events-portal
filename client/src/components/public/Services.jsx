// src/pages/Services.jsx
import React from 'react';

const servicesData = [
  {
    id: 1,
    title: "Corporate Events",
    description: "Professional setups for conferences, seminars, and company retreats.",
    icon: "🏢"
  },
  {
    id: 2,
    title: "Wedding Planning",
    description: "Make your special day unforgettable with our complete wedding packages.",
    icon: "💍"
  },
  {
    id: 3,
    title: "Private Parties",
    description: "Birthdays, anniversaries, and custom celebrations tailored to you.",
    icon: "🎉"
  },
  {
    id: 4,
    title: "Live Concerts",
    description: "Stage setups, lighting, and sound management for live performances.",
    icon: "🎸"
  }
];

const Services = () => {
  return (
    /* Main wrapper with the running gradient */
    <div className="min-h-screen py-20 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Experience world-class event management tailored specifically to your needs. 
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            /* Glassmorphism Card */
            <div 
              key={service.id} 
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Services;