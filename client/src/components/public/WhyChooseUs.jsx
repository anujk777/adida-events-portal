import React from 'react';
import { ShieldCheck, Star, Wallet } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Experienced Team',
      description: 'We ensure seamless execution with meticulous attention to detail.',
      icon: <Star className="w-6 h-6" />, 
    },
    {
      title: 'End-to-End Management',
      description: 'We ensure seamless execution with meticulous attention to detail.',
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: 'Budget-Friendly Packages',
      description: 'We ensure seamless execution with meticulous attention to detail.',
      icon: <Wallet className="w-6 h-6" />,
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      {/* Container with static gradient */}
      
      {/* Background Atmospheric Glows (Static) */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Why{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
              Choose Us
            </span>
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-white/50 group relative overflow-hidden flex flex-col"
            >
              {/* Static Top Border on Hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex items-center space-x-4 mb-4">
                {/* Icon Container: Transforms to a static gradient on hover */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-purple-100/80 text-purple-600 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-purple-500 group-hover:text-white transition-all duration-500 group-hover:shadow-lg group-hover:shadow-purple-500/30 group-hover:scale-110">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;