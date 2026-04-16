import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('weekly');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [users, setUsers] = useState([]);
  const [tuitionPosts, setTuitionPosts] = useState([]);
  const [applications, setApplications] = useState([]);

  // Mock data - In real app, fetch from API
  useEffect(() => {
    // Simulate fetching data
    setUsers([
      {
        id: 1,
        name: 'Sarah Ahmed',
        email: 'sarah@example.com',
        role: 'guardian',
        status: 'active',
        joined: '2024-01-15',
        posts: 3,
      },
      {
        id: 2,
        name: 'Rahman Khan',
        email: 'rahman@example.com',
        role: 'teacher',
        status: 'active',
        joined: '2024-01-20',
        posts: 5,
      },
      {
        id: 3,
        name: 'Fatima Begum',
        email: 'fatima@example.com',
        role: 'guardian',
        status: 'inactive',
        joined: '2024-02-01',
        posts: 1,
      },
      {
        id: 4,
        name: 'Kamal Hossain',
        email: 'kamal@example.com',
        role: 'teacher',
        status: 'active',
        joined: '2024-02-10',
        posts: 8,
      },
      {
        id: 5,
        name: 'Nadia Sultana',
        email: 'nadia@example.com',
        role: 'guardian',
        status: 'suspended',
        joined: '2024-01-25',
        posts: 2,
      },
    ]);

    setTuitionPosts([
      {
        id: 1,
        title: 'Math Teacher Needed',
        guardian: 'Sarah Ahmed',
        subject: 'Mathematics',
        location: 'Dhaka',
        salary: '8000-12000',
        status: 'active',
        applications: 12,
        posted: '2024-03-01',
      },
      {
        id: 2,
        title: 'English Tutor',
        guardian: 'Fatima Begum',
        subject: 'English',
        location: 'Chattogram',
        salary: '6000-9000',
        status: 'active',
        applications: 8,
        posted: '2024-03-05',
      },
      {
        id: 3,
        title: 'Physics Specialist',
        guardian: 'Nadia Sultana',
        subject: 'Physics',
        location: 'Rajshahi',
        salary: '10000-15000',
        status: 'filled',
        applications: 24,
        posted: '2024-02-28',
      },
      {
        id: 4,
        title: 'ICT Teacher',
        guardian: 'Sarah Ahmed',
        subject: 'ICT',
        location: 'Sylhet',
        salary: '7000-11000',
        status: 'active',
        applications: 5,
        posted: '2024-03-07',
      },
    ]);

    setApplications([
      {
        id: 1,
        tuition: 'Math Teacher Needed',
        teacher: 'Rahman Khan',
        status: 'pending',
        applied: '2024-03-02',
      },
      {
        id: 2,
        tuition: 'English Tutor',
        teacher: 'Kamal Hossain',
        status: 'approved',
        applied: '2024-03-06',
      },
      {
        id: 3,
        tuition: 'Physics Specialist',
        teacher: 'Rahman Khan',
        status: 'rejected',
        applied: '2024-03-01',
      },
    ]);
  }, []);

  const stats = {
    totalUsers: 1248,
    activeUsers: 987,
    totalTeachers: 456,
    totalGuardians: 792,
    totalPosts: 234,
    activePosts: 156,
    totalApplications: 567,
    completedTutoring: 89,
    revenue: 125000,
    platformGrowth: 23.5,
  };

  const recentActivities = [
    {
      id: 1,
      user: 'Sarah Ahmed',
      action: 'posted a new tuition',
      time: '5 minutes ago',
      icon: '📝',
    },
    {
      id: 2,
      user: 'Rahman Khan',
      action: 'applied for Math Teacher',
      time: '1 hour ago',
      icon: '📋',
    },
    {
      id: 3,
      user: 'Admin',
      action: 'approved user verification',
      time: '3 hours ago',
      icon: '✓',
    },
    {
      id: 4,
      user: 'Fatima Begum',
      action: 'updated profile',
      time: '5 hours ago',
      icon: '👤',
    },
    {
      id: 5,
      user: 'Kamal Hossain',
      action: 'completed tutoring session',
      time: '1 day ago',
      icon: '🎓',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'inactive':
        return 'bg-gray-100 text-gray-700';
      case 'suspended':
        return 'bg-red-100 text-red-700';
      case 'filled':
        return 'bg-blue-100 text-blue-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'approved':
        return 'bg-green-100 text-green-700';
      case 'rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'users', label: 'User Management', icon: '👥' },
    { id: 'posts', label: 'Tuition Posts', icon: '📝' },
    { id: 'applications', label: 'Applications', icon: '📋' },
    { id: 'reports', label: 'Reports', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white sticky top-0 z-20">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-white text-2xl"
              >
                ☰
              </button>
              <div>
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <p className="text-blue-100 text-sm">
                  Manage your tuition platform
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <button className="text-white hover:bg-white/10 p-2 rounded-full transition">
                  🔔
                </button>
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center font-bold">
                  AD
                </div>
                <div className="hidden md:block">
                  <p className="font-semibold">Admin User</p>
                  <p className="text-xs text-blue-100">Super Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`${sidebarOpen ? 'block' : 'hidden'} lg:block w-64 bg-white shadow-lg min-h-screen fixed lg:relative z-10 transition-all duration-300`}
        >
          <div className="p-4">
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white text-center">
                <p className="text-sm">Platform Status</p>
                <p className="text-2xl font-bold">Active</p>
                <p className="text-xs mt-2">98.5% Uptime</p>
              </div>
            </div>
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {activeTab === 'overview' && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-500 text-sm">Total Users</p>
                      <p className="text-3xl font-bold text-gray-800">
                        {stats.totalUsers}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                      👥
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-600">
                      ↑ {stats.platformGrowth}%
                    </span>
                    <span className="text-gray-400">vs last month</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-500 text-sm">Active Tuitions</p>
                      <p className="text-3xl font-bold text-gray-800">
                        {stats.activePosts}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
                      📝
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Total: {stats.totalPosts} posts
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-500 text-sm">Applications</p>
                      <p className="text-3xl font-bold text-gray-800">
                        {stats.totalApplications}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                      📋
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Pending: 45 applications
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-500 text-sm">Revenue (BDT)</p>
                      <p className="text-3xl font-bold text-gray-800">
                        {stats.revenue.toLocaleString()}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">
                      💰
                    </div>
                  </div>
                  <div className="text-sm text-green-600">↑ 15.3% growth</div>
                </div>
              </div>

              {/* Charts and Activity Section */}
              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                {/* User Distribution */}
                <div className="bg-white rounded-2xl p-6 shadow-sm lg:col-span-1">
                  <h3 className="font-bold text-gray-800 mb-4">
                    User Distribution
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Teachers</span>
                        <span className="font-semibold">
                          {stats.totalTeachers}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{
                            width: `${(stats.totalTeachers / stats.totalUsers) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Guardians</span>
                        <span className="font-semibold">
                          {stats.totalGuardians}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{
                            width: `${(stats.totalGuardians / stats.totalUsers) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Active Users</span>
                        <span className="font-semibold text-green-600">
                          {stats.activeUsers}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Inactive Users</span>
                        <span className="font-semibold text-gray-600">
                          {stats.totalUsers - stats.activeUsers}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl p-6 shadow-sm lg:col-span-2">
                  <h3 className="font-bold text-gray-800 mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    {recentActivities.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition"
                      >
                        <div className="text-2xl">{activity.icon}</div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-semibold">
                              {activity.user}
                            </span>{' '}
                            {activity.action}
                          </p>
                          <p className="text-xs text-gray-400">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid md:grid-cols-3 gap-6">
                <Link
                  to="/admin/users"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white hover:shadow-xl transition transform hover:scale-105"
                >
                  <div className="text-3xl mb-2">👥</div>
                  <h3 className="font-bold text-lg mb-1">Manage Users</h3>
                  <p className="text-sm text-blue-100">
                    View and manage all platform users
                  </p>
                </Link>
                <Link
                  to="/admin/posts"
                  className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white hover:shadow-xl transition transform hover:scale-105"
                >
                  <div className="text-3xl mb-2">📝</div>
                  <h3 className="font-bold text-lg mb-1">Manage Posts</h3>
                  <p className="text-sm text-purple-100">
                    Review and moderate tuition posts
                  </p>
                </Link>
                <Link
                  to="/admin/reports"
                  className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white hover:shadow-xl transition transform hover:scale-105"
                >
                  <div className="text-3xl mb-2">📊</div>
                  <h3 className="font-bold text-lg mb-1">Generate Reports</h3>
                  <p className="text-sm text-green-100">
                    Download platform analytics
                  </p>
                </Link>
              </div>
            </>
          )}

          {activeTab === 'users' && (
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      User Management
                    </h2>
                    <p className="text-gray-500 mt-1">
                      Manage all registered users
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                      Add User
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Joined
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Posts
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium text-gray-800">
                              {user.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {user.email}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              user.role === 'teacher'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-purple-100 text-purple-700'
                            }`}
                          >
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {user.joined}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {user.posts}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              ✏️
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              🗑️
                            </button>
                            <button className="text-green-600 hover:text-green-800">
                              👁️
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'posts' && (
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Tuition Posts
                    </h2>
                    <p className="text-gray-500 mt-1">
                      Manage all tuition postings
                    </p>
                  </div>
                  <select className="px-4 py-2 border border-gray-200 rounded-xl">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Filled</option>
                    <option>Expired</option>
                  </select>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {tuitionPosts.map((post) => (
                  <div
                    key={post.id}
                    className="p-6 hover:bg-gray-50 transition"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-gray-800">
                            {post.title}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}
                          >
                            {post.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-3">
                          <span>👤 {post.guardian}</span>
                          <span>📚 {post.subject}</span>
                          <span>📍 {post.location}</span>
                          <span>💰 {post.salary} BDT</span>
                        </div>
                        <div className="flex gap-4 text-sm">
                          <span className="text-blue-600">
                            📋 {post.applications} applications
                          </span>
                          <span className="text-gray-500">
                            📅 Posted: {post.posted}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                          View
                        </button>
                        <button className="px-3 py-1 text-sm border border-red-500 text-red-500 rounded-lg hover:bg-red-50">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">
                  Applications
                </h2>
                <p className="text-gray-500 mt-1">
                  Review teacher applications
                </p>
              </div>
              <div className="divide-y divide-gray-200">
                {applications.map((app) => (
                  <div key={app.id} className="p-6 hover:bg-gray-50 transition">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-gray-800">
                          {app.tuition}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Applied by: {app.teacher}
                        </p>
                        <p className="text-xs text-gray-400">
                          Applied: {app.applied}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}
                        >
                          {app.status}
                        </span>
                        {app.status === 'pending' && (
                          <div className="flex gap-2">
                            <button className="px-3 py-1 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700">
                              Approve
                            </button>
                            <button className="px-3 py-1 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700">
                              Reject
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Platform Reports
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold mb-3">Date Range</h3>
                  <div className="space-y-3">
                    <input
                      type="date"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                    <input
                      type="date"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                      Generate Report
                    </button>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold mb-3">Quick Reports</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg">
                      📊 User Growth Report
                    </button>
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg">
                      📝 Popular Subjects Report
                    </button>
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg">
                      💰 Revenue Report
                    </button>
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg">
                      📍 Location-wise Analysis
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Platform Settings
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Platform Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Tuition Rajshahi"
                    className="w-full px-4 py-2 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    defaultValue="admin@tuitionrajshahi.com"
                    className="w-full px-4 py-2 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Commission Rate (%)
                  </label>
                  <input
                    type="number"
                    defaultValue="10"
                    className="w-full px-4 py-2 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Maintenance Mode
                  </label>
                  <select className="w-full px-4 py-2 border rounded-xl">
                    <option>Disabled</option>
                    <option>Enabled</option>
                  </select>
                </div>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
