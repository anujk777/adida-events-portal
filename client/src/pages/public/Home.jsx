import React from 'react';
import Navbar from '../../components/public/Navbar';
import HeroBanner from '../../components/public/HeroBanner';
import ServicesPreview from '../../components/public/ServicesPreview';
import { CheckCircle, MapPin, Phone, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* 1. Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero Banner */}
        <HeroBanner />

        {/* 3. Company Introduction */}
        <section className="py-20 px-4 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Adida Events</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Based in Shahdara, Delhi, Adida Events is a premier event management company dedicated to turning your visions into reality. From intimate gatherings to grand corporate affairs, we provide end-to-end solutions that guarantee unforgettable experiences.
          </p>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-blue-50 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {['Experienced Team', 'End-to-End Management', 'Budget-Friendly Packages'].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4 border border-gray-100">
                  <CheckCircle className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{item}</h4>
                    <p className="text-gray-600 text-sm">We ensure seamless execution with meticulous attention to detail.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Our Services */}
        <ServicesPreview />

        {/* 6. Featured Events / Gallery Preview */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Image Placeholders */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-64 bg-gray-200 rounded-xl overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 text-white font-semibold">Event Title {item}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Testimonials */}
        <section className="py-20 bg-slate-900 text-white px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
            <div className="italic text-lg md:text-xl text-gray-300 mb-6">
              "Adida Events made our wedding absolutely magical. Their attention to detail and professionalism took all the stress away!"
            </div>
            <div className="font-semibold">- Rahul & Priya, Delhi</div>
          </div>
        </section>

        {/* 8. Contact Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">Ready to plan your next big event? Contact us today for a free consultation and quotation.</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-700">
                  <MapPin className="text-blue-600" /> Shahdara, Delhi, India
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <Phone className="text-blue-600" /> +91 98765 43210
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <Mail className="text-blue-600" /> info@adidaevents.com
                </div>
              </div>
            </div>
            
            <form className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600" />
                <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600" />
                <textarea rows="4" placeholder="Event Details & Requirements" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600"></textarea>
                <button type="button" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer className="bg-slate-950 text-gray-400 py-12 text-center text-sm">
        <p>&copy; 2026 Adida Events. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;