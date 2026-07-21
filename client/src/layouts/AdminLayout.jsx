import { Outlet, Link } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, FileText, Settings, LogOut } from 'lucide-react';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-slate-700">
          Adida Events
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link to="/admin" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg transition-colors">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/admin/events" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg transition-colors">
            <Calendar size={20} /> Events
          </Link>
          <Link to="/admin/customers" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg transition-colors">
            <Users size={20} /> Customers
          </Link>
          <Link to="/admin/enquiries" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg transition-colors">
            <FileText size={20} /> Enquiries
          </Link>
          <Link to="/admin/settings" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg transition-colors">
            <Settings size={20} /> Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-700">
          <button className="flex items-center gap-3 p-3 w-full hover:bg-red-600 rounded-lg transition-colors text-left">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Admin Portal</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome, Admin</span>
            <div className="w-10 h-10 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold">A</div>
          </div>
        </header>
        <div className="p-6 overflow-y-auto flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;