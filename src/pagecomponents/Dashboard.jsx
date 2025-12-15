import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  YAxis,
  ResponsiveContainer
} from "recharts";

export default function Dashboard() {

    const usersData = [
    { month: "Jan", users: 400 },
    { month: "Feb", users: 600 },
    { month: "Mar", users: 800 },
    { month: "Apr", users: 1200 },
    { month: "May", users: 1500 },
    { month: "Jun", users: 2000 },
  ];

  const earningsData = [
    { month: "Jan", earnings: 12000 },
    { month: "Feb", earnings: 19000 },
    { month: "Mar", earnings: 15000 },
    { month: "Apr", earnings: 22000 },
    { month: "May", earnings: 30000 },
    { month: "Jun", earnings: 28000 },
  ];


  return (
    <div>
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <p className="mb-6">Welcome to AIBHAGYA Admin Dashboard.</p>

      {/* ---- Top Cards ---- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Reports */}
        <div className="p-5 rounded-xl shadow bg-white border border-gray-300">
          <h3 className="text-lg font-semibold text-primary">Reports</h3>
          <p className="text-2xl font-bold mt-3">125</p>
          <p className="text-sm text-gray-500">Total Reports</p>
        </div>

        {/* Users */}
        <div className="p-5 rounded-xl shadow bg-white border border-gray-300">
          <h3 className="text-lg font-semibold text-primary">Users</h3>
          <p className="text-2xl font-bold mt-3">4,820</p>
          <p className="text-sm text-gray-500">Active Users</p>
        </div>

        {/* Ads Watched */}
        <div className="p-5 rounded-xl shadow bg-white border border-gray-300">
          <h3 className="text-lg font-semibold text-primary">Ads Watched</h3>
          <p className="text-2xl font-bold mt-3">32,480</p>
          <p className="text-sm text-gray-500">Total Views</p>
        </div>

        {/* Earnings */}
        <div className="p-5 rounded-xl shadow bg-white border border-gray-300">
          <h3 className="text-lg font-semibold text-primary">Earnings</h3>
          <p className="text-2xl font-bold mt-3">₹52,340</p>
          <p className="text-sm text-gray-500">Total Revenue</p>
        </div>

      </div>

      {/* ----- Charts Section ----- */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-5 bg-white border rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-3 text-primary">
            Users Growth (Monthly)
          </h3>
          <div className="h-72 flex items-center justify-center text-gray-400">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={usersData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#6312A0"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-5 bg-white border rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-3 text-primary">
            Earnings Overview
          </h3>
          <div className="h-72 flex items-center justify-center text-gray-400">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="earnings" fill="#6312A0" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
