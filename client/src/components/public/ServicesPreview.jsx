import React from 'react';
import { PartyPopper, Briefcase, Camera, Music } from 'lucide-react';

const ServicesPreview = () => {
  const services = [
    { title: 'Wedding Planning', icon: <PartyPopper size={36} />, desc: 'Complete wedding coordination, design, and execution for your special day.', color: 'from-pink-500 to-rose-500', shadow: 'shadow-pink-200' },
    { title: 'Corporate Events', icon: <Briefcase size={36} />, desc: 'Professional conferences, seminars, and corporate gatherings handled seamlessly.', color: 'from-blue-500 to-indigo-500', shadow: 'shadow-blue-200' },
    { title: 'Exhibitions', icon: <Camera size={36} />, desc: 'Stunning exhibition stalls, setup, and end-to-end event management.', color: 'from-emerald-400 to-teal-500', shadow: 'shadow-emerald-200' },
    { title: 'Celebrity Management', icon: <Music size={36} />, desc: 'Artist booking, security, and complete VIP hospitality management.', color: 'from-purple-500 to-fuchsia-500', shadow: 'shadow-purple-200' },
  ];

  return (
    <section className="py-24 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Services</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-500 text-lg">We bring expertise, creativity, and flawless execution to every event.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg ${service.shadow} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group`}>
              <div className={`w-20 h-20 bg-gradient-to-br ${service.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-md transform group-hover:rotate-6 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;