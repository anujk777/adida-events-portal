import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CalendarDays, 
  Users, 
  Briefcase, 
  MessageSquare, 
  FileText, 
  LogOut,
  ArrowLeft // Naya icon import kiya
} from 'lucide-react';
import logo from '../assets/logo.svg';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook for back navigation

  const menuItems = [
    { title: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { title: 'Enquiries', icon: <MessageSquare size={20} />, path: '/admin/enquiries' },
    { title: 'Events', icon: <CalendarDays size={20} />, path: '/admin/events' },
    { title: 'Customers', icon: <Users size={20} />, path: '/admin/customers' },
    { title: 'Vendors', icon: <Briefcase size={20} />, path: '/admin/vendors' },
    { title: 'Invoices', icon: <FileText size={20} />, path: '/admin/invoices' },
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col shadow-sm">
        <div className="h-20 flex items-center justify-center border-b border-gray-100">
          <img src={logo} alt="Adida Events" className="h-10 w-auto" />
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.title}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                  isActive 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md' 
                    : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                {item.icon}
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl w-full transition-colors font-medium">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Admin Header with Back Button */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
          <div className="flex items-center gap-4">
            {/* Back Button Implementation */}
            <button 
              onClick={() => navigate(-1)} 
              className="p-2 bg-gray-50 hover:bg-purple-50 text-gray-600 hover:text-purple-600 rounded-full transition-all border border-transparent hover:border-purple-200"
              title="Go Back"
            >
              <ArrowLeft size={22} />
            </button>
            <h2 className="text-xl font-bold text-gray-800">Admin Portal</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold shadow-md cursor-pointer hover:opacity-90 transition-opacity">
              A
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-gray-50/50">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;