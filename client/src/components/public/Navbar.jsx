import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.svg'; // Aapka naya SVG logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 fixed w-full z-50 top-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center mt-2">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img 
                src={logo} 
                alt="Adida Events Logo" 
                className="h-12 md:h-14 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 font-semibold transition-colors">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-purple-600 font-semibold transition-colors">Services</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-purple-600 font-semibold transition-colors">Gallery</Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 font-semibold transition-colors">Contact</Link>
            
            {/* Added Sign Up Link */}
            <Link to="/signup" className="text-gray-700 hover:text-purple-600 font-semibold transition-colors">Sign Up</Link>
            
            {/* Updated path to /login */}
            <Link to="/login" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-0.5 transition-all">
              Admin Login
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-purple-600 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link to="/" className="block px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-600 rounded-xl font-semibold transition-colors">Home</Link>
            <Link to="/services" className="block px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-600 rounded-xl font-semibold transition-colors">Services</Link>
            <Link to="/gallery" className="block px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-600 rounded-xl font-semibold transition-colors">Gallery</Link>
            <Link to="/contact" className="block px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-600 rounded-xl font-semibold transition-colors">Contact</Link>
            
            {/* Added Mobile Sign Up Link */}
            <Link to="/signup" className="block px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-600 rounded-xl font-semibold transition-colors">Sign Up</Link>
            
            {/* Updated Mobile path to /login */}
            <Link to="/login" className="block px-4 py-3 mt-4 text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-bold shadow-md">
              Admin Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;