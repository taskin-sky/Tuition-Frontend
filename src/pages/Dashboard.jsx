import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);
  const [userData, setUserData] = useState(null);
  const [showRoleSelector, setShowRoleSelector] = useState(false);

  // Mock user data - In real app, get from auth context/state
  useEffect(() => {
    // Simulate fetching current user from authentication
    const currentUser = {
      id: 1,
      name: 'Demo User',
      email: 'demo@example.com',
      role: 'guardian', // 'admin', 'teacher', or 'guardian'
      isLoggedIn: true,
    };

    setUserRole(currentUser.role);
    setUserData(currentUser);
  }, []);

  const dashboardConfig = {
    admin: {
      title: 'Admin Dashboard',
      description: 'Complete platform management and analytics',
      icon: '👑',
      gradient: 'from-purple-600 to-pink-600',
      path: '/dashboard_a',
      features: [
        'Platform Analytics & Reports',
        'User Management',
        'Tuition Post Moderation',
        'Payment Overview',
        'System Settings',
        'User Verification',
      ],
      stats: {
        totalUsers: '1,248',
        activePosts: '156',
        totalRevenue: '৳125,000',
        pendingApprovals: '23',
      },
    },
    teacher: {
      title: 'Teacher Dashboard',
      description: 'Manage your teaching career and students',
      icon: '👨‍🏫',
      gradient: 'from-blue-600 to-cyan-600',
      path: '/dashboard_t',
      features: [
        'Find & Apply to Tuitions',
        'Track Applications',
        'Manage Active Classes',
        'View Earnings',
        'Schedule Management',
        'Student Progress Reports',
      ],
      stats: {
        activeStudents: '5',
        totalEarnings: '৳45,000',
        pendingApplications: '3',
        completedClasses: '28',
      },
    },
    guardian: {
      title: 'Guardian Dashboard',
      description: "Manage your children's education",
      icon: '👨‍👩‍👧',
      gradient: 'from-green-600 to-emerald-600',
      path: '/dashboard_g',
      features: [
        'Post Tuition Requirements',
        'Review Teacher Applications',
        'Track Active Tutors',
        'Monitor Child Progress',
        'Make Payments',
        'View Learning Reports',
      ],
      stats: {
        activeTuitions: '2',
        totalSpent: '৳45,000',
        pendingApplications: '4',
        activeTutors: '2',
      },
    },
  };

  const handleGoToDashboard = (role) => {
    navigate(dashboardConfig[role].path);
  };

  const handleSwitchRole = (role) => {
    setUserRole(role);
    setShowRoleSelector(false);
    // In real app, update user context/state
  };

  const currentDashboard = dashboardConfig[userRole];

  // If no user is logged in, show login prompt
  if (!userData?.isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="text-6xl mb-4">🔐</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome Back!
          </h2>
          <p className="text-gray-500 mb-6">
            Please login to access your dashboard
          </p>
          <Link
            to="/login"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition"
          >
            Login to Your Account
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600">
              Register here
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard Hub</h1>
              <p className="text-blue-100">Welcome back, {userData.name}!</p>
            </div>
            <div className="flex items-center gap-4">
              {/* Role Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowRoleSelector(!showRoleSelector)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition"
                >
                  <span>{dashboardConfig[userRole]?.icon}</span>
                  <span>{dashboardConfig[userRole]?.title}</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showRoleSelector && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl z-50 overflow-hidden">
                    {Object.entries(dashboardConfig).map(([role, config]) => (
                      <button
                        key={role}
                        onClick={() => handleSwitchRole(role)}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition ${
                          userRole === role ? 'bg-blue-50' : ''
                        }`}
                      >
                        <span className="text-2xl">{config.icon}</span>
                        <div className="text-left">
                          <p className="font-semibold text-gray-800">
                            {config.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            {config.description}
                          </p>
                        </div>
                        {userRole === role && (
                          <svg
                            className="w-5 h-5 text-blue-600 ml-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* User Menu */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center font-bold text-lg">
                  {userData.name.charAt(0)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Current Dashboard Highlight */}
        <div className="mb-8">
          <div
            className={`bg-gradient-to-r ${currentDashboard.gradient} rounded-2xl p-8 text-white relative overflow-hidden`}
          >
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              ></div>
            </div>
            <div className="relative flex justify-between items-center">
              <div>
                <div className="text-5xl mb-3">{currentDashboard.icon}</div>
                <h2 className="text-3xl font-bold mb-2">
                  {currentDashboard.title}
                </h2>
                <p className="text-white/90 mb-4">
                  {currentDashboard.description}
                </p>
                <button
                  onClick={() => handleGoToDashboard(userRole)}
                  className="px-6 py-2 bg-white text-gray-800 rounded-xl font-semibold hover:shadow-lg transition transform hover:scale-105"
                >
                  Go to Dashboard →
                </button>
              </div>
              <div className="hidden lg:block text-right">
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(currentDashboard.stats).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-3"
                      >
                        <p className="text-2xl font-bold">{value}</p>
                        <p className="text-xs text-white/80 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Dashboards Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Platform Dashboards
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Admin Dashboard Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-3xl mb-2">👑</div>
                    <h3 className="text-xl font-bold">Admin Dashboard</h3>
                    <p className="text-purple-100 text-sm">
                      Complete platform control
                    </p>
                  </div>
                  {userRole === 'admin' && (
                    <span className="px-2 py-1 bg-white/20 rounded-lg text-xs">
                      Current
                    </span>
                  )}
                </div>
              </div>
              <div className="p-5">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Total Users</span>
                    <span className="font-semibold text-gray-800">1,248</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Active Posts</span>
                    <span className="font-semibold text-gray-800">156</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Revenue</span>
                    <span className="font-semibold text-green-600">
                      ৳125,000
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {dashboardConfig.admin.features
                    .slice(0, 3)
                    .map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <span className="text-purple-500">✓</span> {feature}
                      </li>
                    ))}
                </ul>
                <button
                  onClick={() => handleGoToDashboard('admin')}
                  className="w-full py-2 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition"
                >
                  Access Admin Panel
                </button>
              </div>
            </div>

            {/* Teacher Dashboard Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-3xl mb-2">👨‍🏫</div>
                    <h3 className="text-xl font-bold">Teacher Dashboard</h3>
                    <p className="text-blue-100 text-sm">
                      Manage teaching career
                    </p>
                  </div>
                  {userRole === 'teacher' && (
                    <span className="px-2 py-1 bg-white/20 rounded-lg text-xs">
                      Current
                    </span>
                  )}
                </div>
              </div>
              <div className="p-5">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Active Students</span>
                    <span className="font-semibold text-gray-800">5</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Total Earnings</span>
                    <span className="font-semibold text-green-600">
                      ৳45,000
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Applications</span>
                    <span className="font-semibold text-yellow-600">
                      3 Pending
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {dashboardConfig.teacher.features
                    .slice(0, 3)
                    .map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <span className="text-blue-500">✓</span> {feature}
                      </li>
                    ))}
                </ul>
                <button
                  onClick={() => handleGoToDashboard('teacher')}
                  className="w-full py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Access Teacher Panel
                </button>
              </div>
            </div>

            {/* Guardian Dashboard Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-3xl mb-2">👨‍👩‍👧</div>
                    <h3 className="text-xl font-bold">Guardian Dashboard</h3>
                    <p className="text-green-100 text-sm">
                      Manage children's education
                    </p>
                  </div>
                  {userRole === 'guardian' && (
                    <span className="px-2 py-1 bg-white/20 rounded-lg text-xs">
                      Current
                    </span>
                  )}
                </div>
              </div>
              <div className="p-5">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Active Tuitions</span>
                    <span className="font-semibold text-gray-800">2</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Total Spent</span>
                    <span className="font-semibold text-green-600">
                      ৳45,000
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Applications</span>
                    <span className="font-semibold text-yellow-600">
                      4 Pending
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {dashboardConfig.guardian.features
                    .slice(0, 3)
                    .map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <span className="text-green-500">✓</span> {feature}
                      </li>
                    ))}
                </ul>
                <button
                  onClick={() => handleGoToDashboard('guardian')}
                  className="w-full py-2 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
                >
                  Access Guardian Panel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Stats Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Platform Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl mb-2">👥</div>
              <div className="text-2xl font-bold text-gray-800">2,500+</div>
              <div className="text-sm text-gray-500">Total Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📝</div>
              <div className="text-2xl font-bold text-gray-800">350+</div>
              <div className="text-sm text-gray-500">Active Tuitions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">👨‍🏫</div>
              <div className="text-2xl font-bold text-gray-800">150+</div>
              <div className="text-sm text-gray-500">Verified Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-gray-800">4.8/5</div>
              <div className="text-sm text-gray-500">Avg. Rating</div>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
          <h3 className="font-bold text-gray-800 mb-2">💡 Quick Tips</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <span className="text-blue-500">➡️</span>
              <span>Switch between dashboards using the dropdown menu</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-500">➡️</span>
              <span>Complete your profile to get verified badge</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-500">➡️</span>
              <span>Enable notifications to never miss updates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
