const Dashboard = () => {
  const stats = [
    { title: 'Total Enquiries', value: '142', color: 'bg-blue-500' },
    { title: 'Active Events', value: '12', color: 'bg-emerald-500' },
    { title: 'Monthly Revenue', value: '₹4.5L', color: 'bg-violet-500' },
    { title: 'Pending Payments', value: '₹85K', color: 'bg-rose-500' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full ${stat.color} flex-shrink-0`}></div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Enquiries</h3>
        <p className="text-gray-500 text-sm">Integration with GET /api/enquiries will display data here.</p>
        {/* A mapping of enquiry data would go here */}
      </div>
    </div>
  );
};

export default Dashboard;