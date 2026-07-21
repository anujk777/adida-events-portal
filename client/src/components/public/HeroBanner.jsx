import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic Event Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform scale-105 motion-safe:animate-pulse"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop')" }}
      ></div>
      
      {/* Rich Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-900/90 via-purple-900/80 to-indigo-900/90"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-300 mb-6 drop-shadow-2xl tracking-tight">
          Crafting Extraordinary <br className="hidden md:block" /> Experiences
        </h1>
        <p className="text-lg md:text-2xl text-purple-100 mb-10 max-w-2xl mx-auto font-light">
          Delhi's premier event management company. We handle the chaos, so you can live the moment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-pink-500/30 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
            Plan Your Event
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
            View Portfolio
          </button>
        </div>
      </div>

      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,152.47,143.62,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroBanner;