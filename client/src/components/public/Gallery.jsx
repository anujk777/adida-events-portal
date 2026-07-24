import React from 'react';

const Gallery = () => {
  // Array of event-related high-quality placeholder images
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-NcdG9mK3PBY?auto=format&fit=crop&q=80&w=800https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Live Concert & Stage Lighting",
      category: "Live Events"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      alt: "Elegant Wedding Setup",
      category: "Weddings"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
      alt: "Corporate Conference",
      category: "Corporate"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
      alt: "Vibrant Private Party",
      category: "Parties"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&q=80&w=800",
      alt: "Atmospheric Venue Decoration",
      category: "Decor"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=800",
      alt: "Outdoor Festival Crowd",
      category: "Festivals"
    }
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      
      {/* --- Atmospheric Background Glows (Light Theme) --- */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-40 right-1/4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Event{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
              Gallery
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the unforgettable moments and spectacular venues we have crafted.
          </p>
        </div>

        {/* Grid Image Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            /* Card Wrapper for Hover Border Effect */
            <div 
              key={image.id} 
              className="group relative rounded-2xl p-[2px] bg-white/50 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-purple-600 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Inner Card Content */}
              <div className="relative overflow-hidden rounded-2xl bg-white aspect-[4/3] w-full h-full">
                
                {/* Image */}
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Light Glassmorphism Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-purple-700 uppercase bg-purple-100/80 backdrop-blur-md rounded-full border border-purple-200 shadow-sm">
                      {image.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;