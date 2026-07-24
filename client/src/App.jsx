import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout & Global Components
import Navbar from './components/public/Navbar';

// Import Page Sections for the Home Route
import HeroBanner from './components/public/HeroBanner';
import ServicesPreview from './components/public/ServicesPreview';
import WhyChooseUs from './components/public/WhyChooseUs';
import ContactForm from './components/public/ContactForm';

// Import Dedicated Pages
import Services from './components/public/Services';
import Login from './components/public/Login';
import Signup from './components/public/Signup';
// --- NEW: Import the Gallery component ---
import Gallery from './components/public/Gallery'; 

// A composite component for your landing page
const HomePage = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroBanner />
      <ServicesPreview />
      <WhyChooseUs /> {/* Your newly enhanced section sits here */}
      <ContactForm />
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
        {/* Navbar stays outside Routes so it remains visible on all pages */}
        <Navbar />
        
        {/* Main Routing Setup */}
        <div className="flex-grow">
          <Routes>
            {/* Primary Landing Page Route */}
            <Route path="/" element={<HomePage />} />
            
            {/* Dedicated Service Route */}
            <Route path="/services" element={<Services />} />
            
            {/* Authentication Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Standalone Contact Route (if needed) */}
            <Route path="/contact" element={<ContactForm />} />

            {/* --- NEW: Gallery Route --- */}
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;