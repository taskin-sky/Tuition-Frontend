import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [teacherData, setTeacherData] = useState(null);
  const [applications, setApplications] = useState([]);
  const [activeTuitions, setActiveTuitions] = useState([]);
  const [earnings, setEarnings] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Mock data - In real app, fetch from API
  useEffect(() => {
    // Teacher profile data
    setTeacherData({
      id: 1,
      name: 'Rahman Khan',
      email: 'rahman@example.com',
      phone: '01712345678',
      subject: 'Mathematics',
      experience: '5 years',
      qualification: 'M.Sc in Mathematics',
      university: 'University of Dhaka',
      bio: 'Experienced mathematics teacher with a passion for making complex concepts simple. Specialized in SSC and HSC level preparation.',
      rating: 4.8,
      totalStudents: 45,
      completedClasses: 328,
      joinDate: 'January 2024',
      profileImage: null,
      location: 'Dhaka, Bangladesh',
      languages: ['Bengali', 'English'],
      availability: 'Weekdays: 4 PM - 9 PM, Weekends: 10 AM - 6 PM',
      hourlyRate: 500,
    });

    // Applications sent by teacher
    setApplications([
      {
        id: 1,
        tuitionId: 1,
        title: 'Math Teacher Needed for SSC Student',
        subject: 'Mathematics',
        location: 'Dhaka',
        salary: '8000-12000',
        status: 'pending',
        appliedDate: '2024-03-10',
        guardian: 'Sarah Ahmed',
      },
      {
        id: 2,
        tuitionId: 2,
        title: 'Physics & Chemistry Specialist',
        subject: 'Physics',
        location: 'Rajshahi',
        salary: '10000-15000',
        status: 'approved',
        appliedDate: '2024-03-05',
        guardian: 'Nadia Sultana',
      },
      {
        id: 3,
        tuitionId: 3,
        title: 'Advanced Mathematics Tutor',
        subject: 'Mathematics',
        location: 'Chattogram',
        salary: '9000-13000',
        status: 'rejected',
        appliedDate: '2024-03-01',
        guardian: 'Fatima Begum',
      },
      {
        id: 4,
        tuitionId: 4,
        title: 'ICT Teacher for HSC',
        subject: 'ICT',
        location: 'Sylhet',
        salary: '7000-11000',
        status: 'pending',
        appliedDate: '2024-03-12',
        guardian: 'Kamal Hossain',
      },
    ]);

    // Active tuition classes
    setActiveTuitions([
      {
        id: 1,
        student: 'Rafiq Ahmed',
        subject: 'Mathematics',
        class: 'Class 10',
        schedule: 'Mon, Wed, Fri - 5:00 PM',
        duration: '2 hours',
        hourlyRate: 500,
        totalSessions: 12,
        completedSessions: 8,
        nextClass: 'Today, 5:00 PM',
        status: 'ongoing',
      },
      {
        id: 2,
        student: 'Tahmina Begum',
        subject: 'Physics',
        class: 'HSC 1st Year',
        schedule: 'Tue, Thu - 4:00 PM',
        duration: '1.5 hours',
        hourlyRate: 550,
        totalSessions: 20,
        completedSessions: 5,
        nextClass: 'Tomorrow, 4:00 PM',
        status: 'ongoing',
      },
      {
        id: 3,
        student: 'Shahidul Islam',
        subject: 'Chemistry',
        class: 'HSC 2nd Year',
        schedule: 'Sat, Sun - 3:00 PM',
        duration: '2 hours',
        hourlyRate: 600,
        totalSessions: 8,
        completedSessions: 8,
        nextClass: 'Completed',
        status: 'completed',
      },
    ]);

    // Earnings history
    setEarnings([
      { month: 'March 2024', amount: 24500, sessions: 42, students: 3 },
      { month: 'February 2024', amount: 21000, sessions: 38, students: 2 },
      { month: 'January 2024', amount: 18000, sessions: 32, students: 2 },
      { month: 'December 2023', amount: 15000, sessions: 28, students: 2 },
    ]);

    // Notifications
    setNotifications([
      {
        id: 1,
        message:
          'Your application for "Math Teacher Needed" has been approved!',
        time: '2 hours ago',
        read: false,
        type: 'success',
      },
      {
        id: 2,
        message:
          'New tuition post matches your subject: "Physics Teacher Required"',
        time: '5 hours ago',
        read: false,
        type: 'info',
      },
      {
        id: 3,
        message: 'Payment of 12,000 BDT has been credited to your account',
        time: '1 day ago',
        read: true,
        type: 'success',
      },
      {
        id: 4,
        message: 'Upcoming class with Rafiq Ahmed at 5:00 PM today',
        time: '1 day ago',
        read: true,
        type: 'reminder',
      },
    ]);
  }, []);

  const totalEarnings = earnings.reduce((sum, month) => sum + month.amount, 0);
  const pendingApplications = applications.filter(
    (app) => app.status === 'pending'
  ).length;
  const approvedApplications = applications.filter(
    (app) => app.status === 'approved'
  ).length;

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'approved':
        return 'bg-green-100 text-green-700';
      case 'rejected':
        return 'bg-red-100 text-red-700';
      case 'ongoing':
        return 'bg-blue-100 text-blue-700';
      case 'completed':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'profile', label: 'My Profile', icon: '👨‍🏫' },
    { id: 'applications', label: 'My Applications', icon: '📋' },
    { id: 'active-classes', label: 'Active Classes', icon: '🎓' },
    { id: 'earnings', label: 'Earnings', icon: '💰' },
    { id: 'schedule', label: 'Schedule', icon: '📅' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Teacher Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white sticky top-0 z-20 shadow-lg">
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
                <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
                <p className="text-blue-100 text-sm">
                  Manage your teaching journey
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <div className="relative group">
                <button className="text-white hover:bg-white/10 p-2 rounded-full transition relative">
                  🔔
                  {notifications.filter((n) => !n.read).length > 0 && (
                    <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                  )}
                </button>
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl hidden group-hover:block z-50">
                  <div className="p-3 border-b">
                    <p className="font-semibold text-gray-800">Notifications</p>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-3 border-b hover:bg-gray-50 ${!notif.read ? 'bg-blue-50' : ''}`}
                      >
                        <p className="text-sm text-gray-700">{notif.message}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {notif.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Teacher Profile */}
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center font-bold text-lg">
                  {teacherData?.name.charAt(0)}
                </div>
                <div className="hidden md:block">
                  <p className="font-semibold">{teacherData?.name}</p>
                  <p className="text-xs text-blue-100">
                    {teacherData?.subject} Teacher
                  </p>
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
            {/* Teacher Stats Card */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white text-center mb-6">
              <div className="flex justify-center mb-2">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl">
                  👨‍🏫
                </div>
              </div>
              <p className="font-semibold">{teacherData?.name}</p>
              <p className="text-xs text-blue-100">
                {teacherData?.subject} Specialist
              </p>
              <div className="flex justify-center gap-1 mt-2">
                <span>⭐</span>
                <span className="text-sm font-semibold">
                  {teacherData?.rating}
                </span>
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
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white mb-8">
                <h2 className="text-2xl font-bold mb-2">
                  Welcome back, {teacherData?.name}! 👋
                </h2>
                <p className="text-blue-100">
                  Here's what's happening with your teaching journey today.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-500 text-sm">Total Earnings</p>
                      <p className="text-3xl font-bold text-gray-800">
                        ৳{totalEarnings.toLocaleString()}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                      💰
                    </div>
                  </div>
                  <div className="text-sm text-green-600">
                    ↑ 15% from last month
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-500 text-sm">Active Students</p>
                      <p className="text-3xl font-bold text-gray-800">
                        {teacherData?.totalStudents}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                      👥
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">+5 this month</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-500 text-sm">Applications</p>
                      <p className="text-3xl font-bold text-gray-800">
                        {pendingApplications}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-2xl">
                      📋
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {approvedApplications} approved
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-500 text-sm">Classes Completed</p>
                      <p className="text-3xl font-bold text-gray-800">
                        {teacherData?.completedClasses}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
                      🎓
                    </div>
                  </div>
                  <div className="text-sm text-green-600">+42 this month</div>
                </div>
              </div>

              {/* Today's Schedule & Recent Activity */}
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                {/* Today's Classes */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-4">
                    Today's Schedule
                  </h3>
                  <div className="space-y-3">
                    {activeTuitions
                      .filter((t) => t.nextClass !== 'Completed')
                      .slice(0, 2)
                      .map((tuition) => (
                        <div
                          key={tuition.id}
                          className="flex items-center justify-between p-3 bg-blue-50 rounded-xl"
                        >
                          <div>
                            <p className="font-semibold text-gray-800">
                              {tuition.student}
                            </p>
                            <p className="text-sm text-gray-600">
                              {tuition.subject} • {tuition.class}
                            </p>
                            <p className="text-xs text-blue-600 mt-1">
                              {tuition.nextClass}
                            </p>
                          </div>
                          <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                            Start Class
                          </button>
                        </div>
                      ))}
                  </div>
                  <Link
                    to="/teacher/schedule"
                    className="block text-center mt-4 text-blue-600 text-sm hover:underline"
                  >
                    View Full Schedule →
                  </Link>
                </div>

                {/* Recent Notifications */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-4">
                    Recent Notifications
                  </h3>
                  <div className="space-y-3">
                    {notifications.slice(0, 3).map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-3 rounded-xl ${!notif.read ? 'bg-blue-50' : 'bg-gray-50'}`}
                      >
                        <p className="text-sm text-gray-700">{notif.message}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {notif.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid md:grid-cols-3 gap-6">
                <Link
                  to="/tuition"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white hover:shadow-xl transition transform hover:scale-105"
                >
                  <div className="text-3xl mb-2">🔍</div>
                  <h3 className="font-bold text-lg mb-1">Find New Tuition</h3>
                  <p className="text-sm text-blue-100">
                    Browse and apply to new opportunities
                  </p>
                </Link>
                <Link
                  to="/teacher/schedule"
                  className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white hover:shadow-xl transition transform hover:scale-105"
                >
                  <div className="text-3xl mb-2">📅</div>
                  <h3 className="font-bold text-lg mb-1">Manage Schedule</h3>
                  <p className="text-sm text-purple-100">
                    View and organize your classes
                  </p>
                </Link>
                <Link
                  to="/teacher/earnings"
                  className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white hover:shadow-xl transition transform hover:scale-105"
                >
                  <div className="text-3xl mb-2">💰</div>
                  <h3 className="font-bold text-lg mb-1">Withdraw Earnings</h3>
                  <p className="text-sm text-green-100">
                    Withdraw your available balance
                  </p>
                </Link>
              </div>
            </>
          )}

          {activeTab === 'profile' && teacherData && (
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
                <p className="text-gray-500 mt-1">
                  View and manage your profile information
                </p>
              </div>
              <div className="p-6">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Profile Image Section */}
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-5xl mx-auto mb-4">
                      {teacherData.name.charAt(0)}
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                      Change Photo
                    </button>
                  </div>

                  {/* Profile Details */}
                  <div className="flex-1">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Full Name
                        </label>
                        <p className="text-gray-600">{teacherData.name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Email
                        </label>
                        <p className="text-gray-600">{teacherData.email}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Phone
                        </label>
                        <p className="text-gray-600">{teacherData.phone}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Subject Specialization
                        </label>
                        <p className="text-gray-600">{teacherData.subject}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Experience
                        </label>
                        <p className="text-gray-600">
                          {teacherData.experience}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Qualification
                        </label>
                        <p className="text-gray-600">
                          {teacherData.qualification}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          University
                        </label>
                        <p className="text-gray-600">
                          {teacherData.university}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Location
                        </label>
                        <p className="text-gray-600">{teacherData.location}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Hourly Rate
                        </label>
                        <p className="text-gray-600">
                          ৳{teacherData.hourlyRate}/hour
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Languages
                        </label>
                        <p className="text-gray-600">
                          {teacherData.languages.join(', ')}
                        </p>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Bio
                        </label>
                        <p className="text-gray-600">{teacherData.bio}</p>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Availability
                        </label>
                        <p className="text-gray-600">
                          {teacherData.availability}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Edit Profile
                      </button>
                      <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                        Change Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">
                  My Applications
                </h2>
                <p className="text-gray-500 mt-1">
                  Track your tuition applications
                </p>
              </div>
              <div className="divide-y divide-gray-200">
                {applications.map((app) => (
                  <div key={app.id} className="p-6 hover:bg-gray-50 transition">
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 mb-2">
                          {app.title}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-gray-600 mb-3">
                          <span>📚 {app.subject}</span>
                          <span>📍 {app.location}</span>
                          <span>💰 {app.salary} BDT</span>
                          <span>👤 {app.guardian}</span>
                        </div>
                        <p className="text-xs text-gray-400">
                          Applied: {app.appliedDate}
                        </p>
                      </div>
                      <div className="text-right">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}
                        >
                          {app.status.toUpperCase()}
                        </span>
                        {app.status === 'approved' && (
                          <button className="block mt-2 text-sm text-blue-600 hover:underline">
                            Contact Guardian
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'active-classes' && (
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">
                  Active Classes
                </h2>
                <p className="text-gray-500 mt-1">
                  Manage your ongoing and completed classes
                </p>
              </div>
              <div className="divide-y divide-gray-200">
                {activeTuitions.map((tuition) => (
                  <div
                    key={tuition.id}
                    className="p-6 hover:bg-gray-50 transition"
                  >
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-gray-800">
                            {tuition.student}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tuition.status)}`}
                          >
                            {tuition.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-600 mb-3">
                          <span>📚 {tuition.subject}</span>
                          <span>🎓 {tuition.class}</span>
                          <span>⏰ {tuition.duration}</span>
                          <span>📅 {tuition.schedule}</span>
                          <span>💰 ৳{tuition.hourlyRate}/hour</span>
                          <span>
                            📊 Progress:{' '}
                            {Math.round(
                              (tuition.completedSessions /
                                tuition.totalSessions) *
                                100
                            )}
                            %
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{
                              width: `${(tuition.completedSessions / tuition.totalSessions) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        {tuition.status === 'ongoing' && (
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                            Join Class
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'earnings' && (
            <div className="space-y-6">
              {/* Earnings Summary */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Total Earnings</h3>
                <p className="text-4xl font-bold">
                  ৳{totalEarnings.toLocaleString()}
                </p>
                <p className="text-green-100 mt-2">
                  Available for withdrawal: ৳12,500
                </p>
                <button className="mt-4 px-6 py-2 bg-white text-green-700 rounded-lg font-semibold hover:shadow-lg">
                  Withdraw Funds
                </button>
              </div>

              {/* Earnings History */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Earnings History
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Month
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Sessions
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Students
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {earnings.map((month, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-800">
                            {month.month}
                          </td>
                          <td className="px-6 py-4 text-green-600 font-semibold">
                            ৳{month.amount.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {month.sessions}
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {month.students}
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-blue-600 hover:text-blue-800 text-sm">
                              Download
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Account Settings
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Notification Preferences
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-gray-700">
                        Email notifications for new tuition posts
                      </span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-gray-700">
                        Application status updates
                      </span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-gray-700">
                        Marketing and promotional emails
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Payment Settings
                  </label>
                  <select className="w-full px-4 py-2 border rounded-xl">
                    <option>bKash</option>
                    <option>Nagad</option>
                    <option>Bank Transfer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Account Status
                  </label>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      Active
                    </span>
                    <button className="text-red-600 hover:text-red-700 text-sm">
                      Deactivate Account
                    </button>
                  </div>
                </div>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
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

export default TeacherDashboard;
