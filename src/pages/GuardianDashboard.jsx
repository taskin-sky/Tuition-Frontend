import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GuardianDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [guardianData, setGuardianData] = useState(null);
  const [tuitionPosts, setTuitionPosts] = useState([]);
  const [applications, setApplications] = useState([]);
  const [activeTutors, setActiveTutors] = useState([]);
  const [payments, setPayments] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [showPostForm, setShowPostForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    subject: '',
    classLevel: '',
    salary: '',
    location: '',
    schedule: '',
    duration: '',
    description: '',
    requirements: '',
  });

  // Mock data - In real app, fetch from API
  useEffect(() => {
    // Guardian profile data
    setGuardianData({
      id: 1,
      name: 'Sarah Ahmed',
      email: 'sarah@example.com',
      phone: '01712345678',
      location: 'Dhaka, Bangladesh',
      children: 2,
      activeTuitions: 2,
      totalSpent: 45000,
      joinDate: 'January 2024',
      profileImage: null,
    });

    // Tuition posts by guardian
    setTuitionPosts([
      {
        id: 1,
        title: 'Mathematics Expert Needed for SSC Student',
        subject: 'Mathematics',
        classLevel: 'Class 10 (SSC)',
        location: 'Dhaka, Banasree',
        salary: '8,000 - 12,000 BDT/month',
        schedule: '5 days/week',
        duration: '2 hours/day',
        status: 'active',
        applications: 12,
        postedDate: '2024-03-01',
        deadline: '2024-03-30',
        description:
          'Looking for an experienced math teacher for my son who is preparing for SSC exams. Must have strong concept on algebra and geometry.',
      },
      {
        id: 2,
        title: 'English Language & Literature Tutor',
        subject: 'English',
        classLevel: 'Class 8',
        location: 'Dhaka, Banasree',
        salary: '6,000 - 9,000 BDT/month',
        schedule: '4 days/week',
        duration: '1.5 hours/day',
        status: 'active',
        applications: 8,
        postedDate: '2024-03-05',
        deadline: '2024-04-05',
        description:
          'Need an English tutor focusing on grammar, literature, and creative writing skills for my daughter.',
      },
      {
        id: 3,
        title: 'Physics & Chemistry Specialist',
        subject: 'Science',
        classLevel: 'HSC 1st Year',
        location: 'Dhaka, Banasree',
        salary: '10,000 - 15,000 BDT/month',
        schedule: '6 days/week',
        duration: '2 hours/day',
        status: 'filled',
        applications: 24,
        postedDate: '2024-02-20',
        deadline: '2024-03-15',
        description:
          'Experienced science teacher needed for HSC candidate. Focus on Physics and Chemistry.',
      },
    ]);

    // Applications received for tuition posts
    setApplications([
      {
        id: 1,
        tuitionId: 1,
        tuitionTitle: 'Mathematics Expert Needed',
        teacherName: 'Rahman Khan',
        teacherQualification: 'M.Sc in Mathematics',
        experience: '5 years',
        expectedSalary: '10000',
        status: 'pending',
        appliedDate: '2024-03-10',
        message:
          'I have 5 years of experience teaching SSC students. I can help your son achieve excellent results.',
      },
      {
        id: 2,
        tuitionId: 1,
        tuitionTitle: 'Mathematics Expert Needed',
        teacherName: 'Fatima Begum',
        teacherQualification: 'B.Sc in Mathematics',
        experience: '3 years',
        expectedSalary: '9000',
        status: 'pending',
        appliedDate: '2024-03-11',
        message:
          'Experienced in teaching mathematics with proven track record.',
      },
      {
        id: 3,
        tuitionId: 2,
        tuitionTitle: 'English Language Tutor',
        teacherName: 'Kamal Hossain',
        teacherQualification: 'MA in English',
        experience: '4 years',
        expectedSalary: '8000',
        status: 'approved',
        appliedDate: '2024-03-06',
        message: 'I specialize in English literature and grammar.',
      },
      {
        id: 4,
        tuitionId: 2,
        tuitionTitle: 'English Language Tutor',
        teacherName: 'Nadia Sultana',
        teacherQualification: 'BA in English',
        experience: '2 years',
        expectedSalary: '7500',
        status: 'rejected',
        appliedDate: '2024-03-07',
        message: 'Passionate about teaching English to young learners.',
      },
    ]);

    // Active tutors currently teaching
    setActiveTutors([
      {
        id: 1,
        name: 'Rahman Khan',
        subject: 'Mathematics',
        studentName: 'Rafiq (Son)',
        schedule: 'Mon, Wed, Fri - 5:00 PM',
        progress: 75,
        sessionsCompleted: 15,
        totalSessions: 20,
        rating: 4.8,
        nextClass: 'Today, 5:00 PM',
      },
      {
        id: 2,
        name: 'Kamal Hossain',
        subject: 'English',
        studentName: 'Tahmina (Daughter)',
        schedule: 'Tue, Thu - 4:00 PM',
        progress: 60,
        sessionsCompleted: 12,
        totalSessions: 20,
        rating: 4.9,
        nextClass: 'Tomorrow, 4:00 PM',
      },
    ]);

    // Payment history
    setPayments([
      {
        id: 1,
        tutor: 'Rahman Khan',
        amount: 12000,
        month: 'March 2024',
        status: 'paid',
        date: '2024-03-15',
        method: 'bKash',
      },
      {
        id: 2,
        tutor: 'Kamal Hossain',
        amount: 8000,
        month: 'March 2024',
        status: 'pending',
        date: '2024-03-20',
        method: 'Nagad',
      },
      {
        id: 3,
        tutor: 'Rahman Khan',
        amount: 10000,
        month: 'February 2024',
        status: 'paid',
        date: '2024-02-15',
        method: 'bKash',
      },
    ]);

    // Notifications
    setNotifications([
      {
        id: 1,
        message: 'New application received for "Mathematics Expert Needed"',
        time: '2 hours ago',
        read: false,
        type: 'application',
      },
      {
        id: 2,
        message: 'Payment of 12,000 BDT to Rahman Khan was successful',
        time: '1 day ago',
        read: true,
        type: 'payment',
      },
      {
        id: 3,
        message: 'Reminder: Class with Rahman Khan at 5:00 PM today',
        time: '1 day ago',
        read: true,
        type: 'reminder',
      },
      {
        id: 4,
        message: 'Your tuition post "English Language Tutor" has expired',
        time: '3 days ago',
        read: false,
        type: 'warning',
      },
    ]);
  }, []);

  const pendingApplications = applications.filter(
    (app) => app.status === 'pending'
  ).length;
  const activePosts = tuitionPosts.filter(
    (post) => post.status === 'active'
  ).length;
  const totalSpent = payments
    .filter((p) => p.status === 'paid')
    .reduce((sum, p) => sum + p.amount, 0);

  const handleCreatePost = (e) => {
    e.preventDefault();
    // In real app, send to API
    console.log('New Post:', newPost);
    setShowPostForm(false);
    // Add to local state
    const post = {
      id: tuitionPosts.length + 1,
      ...newPost,
      status: 'active',
      applications: 0,
      postedDate: new Date().toISOString().split('T')[0],
    };
    setTuitionPosts([post, ...tuitionPosts]);
    setNewPost({
      title: '',
      subject: '',
      classLevel: '',
      salary: '',
      location: '',
      schedule: '',
      duration: '',
      description: '',
      requirements: '',
    });
  };

  const handleApplicationAction = (applicationId, action) => {
    // In real app, send to API
    setApplications(
      applications.map((app) =>
        app.id === applicationId ? { ...app, status: action } : app
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'filled':
        return 'bg-blue-100 text-blue-700';
      case 'expired':
        return 'bg-gray-100 text-gray-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'approved':
        return 'bg-green-100 text-green-700';
      case 'rejected':
        return 'bg-red-100 text-red-700';
      case 'paid':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'my-posts', label: 'My Tuition Posts', icon: '📝' },
    { id: 'applications', label: 'Applications', icon: '📋' },
    { id: 'active-tutors', label: 'Active Tutors', icon: '👨‍🏫' },
    { id: 'payments', label: 'Payments', icon: '💰' },
    { id: 'children', label: 'Children', icon: '👧' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Guardian Header */}
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
                <h1 className="text-2xl font-bold">Guardian Dashboard</h1>
                <p className="text-blue-100 text-sm">
                  Manage your children's education
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

              {/* Guardian Profile */}
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center font-bold text-lg">
                  {guardianData?.name.charAt(0)}
                </div>
                <div className="hidden md:block">
                  <p className="font-semibold">{guardianData?.name}</p>
                  <p className="text-xs text-blue-100">Parent/Guardian</p>
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
            {/* Guardian Stats Card */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white text-center mb-6">
              <div className="flex justify-center mb-2">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl">
                  👨‍👩‍👧
                </div>
              </div>
              <p className="font-semibold">{guardianData?.name}</p>
              <p className="text-xs text-blue-100">{guardianData?.location}</p>
              <div className="mt-2 text-sm">
                <span>{guardianData?.children} Children</span>
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
                  Welcome back, {guardianData?.name}! 👋
                </h2>
                <p className="text-blue-100">
                  Track your children's progress, manage tuition posts, and
                  connect with the best tutors.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-500 text-sm">Active Tuitions</p>
                      <p className="text-3xl font-bold text-gray-800">
                        {activePosts}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                      📝
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Total: {tuitionPosts.length} posts
                  </div>
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
                  <div className="text-sm text-gray-500">Pending review</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-500 text-sm">Active Tutors</p>
                      <p className="text-3xl font-bold text-gray-800">
                        {activeTutors.length}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                      👨‍🏫
                    </div>
                  </div>
                  <div className="text-sm text-green-600">
                    Currently teaching
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-500 text-sm">Total Spent</p>
                      <p className="text-3xl font-bold text-gray-800">
                        ৳{totalSpent.toLocaleString()}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
                      💰
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">This year</div>
                </div>
              </div>

              {/* Recent Activity & Quick Actions */}
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                {/* Recent Applications */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-4">
                    Recent Applications
                  </h3>
                  <div className="space-y-3">
                    {applications
                      .filter((a) => a.status === 'pending')
                      .slice(0, 3)
                      .map((app) => (
                        <div
                          key={app.id}
                          className="flex items-center justify-between p-3 bg-yellow-50 rounded-xl"
                        >
                          <div>
                            <p className="font-semibold text-gray-800">
                              {app.teacherName}
                            </p>
                            <p className="text-sm text-gray-600">
                              Applied for: {app.tuitionTitle}
                            </p>
                            <p className="text-xs text-gray-400">
                              {app.appliedDate}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() =>
                                handleApplicationAction(app.id, 'approved')
                              }
                              className="px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700"
                            >
                              Accept
                            </button>
                            <button
                              onClick={() =>
                                handleApplicationAction(app.id, 'rejected')
                              }
                              className="px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700"
                            >
                              Reject
                            </button>
                          </div>
                        </div>
                      ))}
                    {pendingApplications === 0 && (
                      <p className="text-gray-500 text-center py-4">
                        No pending applications
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => setActiveTab('applications')}
                    className="block text-center mt-4 text-blue-600 text-sm hover:underline w-full"
                  >
                    View All Applications →
                  </button>
                </div>

                {/* Upcoming Classes */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-4">
                    Upcoming Classes
                  </h3>
                  <div className="space-y-3">
                    {activeTutors.map((tutor) => (
                      <div
                        key={tutor.id}
                        className="flex items-center justify-between p-3 bg-blue-50 rounded-xl"
                      >
                        <div>
                          <p className="font-semibold text-gray-800">
                            {tutor.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {tutor.subject} - {tutor.studentName}
                          </p>
                          <p className="text-xs text-blue-600 mt-1">
                            {tutor.nextClass}
                          </p>
                        </div>
                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                          Join
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid md:grid-cols-3 gap-6">
                <button
                  onClick={() => setShowPostForm(true)}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white hover:shadow-xl transition transform hover:scale-105 text-left"
                >
                  <div className="text-3xl mb-2">➕</div>
                  <h3 className="font-bold text-lg mb-1">Post New Tuition</h3>
                  <p className="text-sm text-blue-100">
                    Find the perfect tutor for your child
                  </p>
                </button>
                <Link
                  to="/tuition"
                  className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white hover:shadow-xl transition transform hover:scale-105"
                >
                  <div className="text-3xl mb-2">🔍</div>
                  <h3 className="font-bold text-lg mb-1">Browse Tutors</h3>
                  <p className="text-sm text-purple-100">
                    Find available tutors directly
                  </p>
                </Link>
                <Link
                  to="/guardian/payments"
                  className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white hover:shadow-xl transition transform hover:scale-105"
                >
                  <div className="text-3xl mb-2">💳</div>
                  <h3 className="font-bold text-lg mb-1">Make Payment</h3>
                  <p className="text-sm text-green-100">
                    Pay for tuition services
                  </p>
                </Link>
              </div>
            </>
          )}

          {activeTab === 'my-posts' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    My Tuition Posts
                  </h2>
                  <p className="text-gray-500 mt-1">
                    Manage your tuition requirements
                  </p>
                </div>
                <button
                  onClick={() => setShowPostForm(true)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 flex items-center gap-2"
                >
                  ➕ Post New Tuition
                </button>
              </div>

              {/* Create Post Modal */}
              {showPostForm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                  <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="p-6 border-b sticky top-0 bg-white">
                      <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold text-gray-800">
                          Create Tuition Post
                        </h3>
                        <button
                          onClick={() => setShowPostForm(false)}
                          className="text-gray-400 hover:text-gray-600 text-2xl"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                    <form onSubmit={handleCreatePost} className="p-6 space-y-4">
                      <input
                        type="text"
                        placeholder="Post Title"
                        className="w-full px-4 py-2 border rounded-xl"
                        value={newPost.title}
                        onChange={(e) =>
                          setNewPost({ ...newPost, title: e.target.value })
                        }
                        required
                      />
                      <input
                        type="text"
                        placeholder="Subject"
                        className="w-full px-4 py-2 border rounded-xl"
                        value={newPost.subject}
                        onChange={(e) =>
                          setNewPost({ ...newPost, subject: e.target.value })
                        }
                        required
                      />
                      <input
                        type="text"
                        placeholder="Class Level"
                        className="w-full px-4 py-2 border rounded-xl"
                        value={newPost.classLevel}
                        onChange={(e) =>
                          setNewPost({ ...newPost, classLevel: e.target.value })
                        }
                        required
                      />
                      <input
                        type="text"
                        placeholder="Salary (e.g., 8000-12000 BDT/month)"
                        className="w-full px-4 py-2 border rounded-xl"
                        value={newPost.salary}
                        onChange={(e) =>
                          setNewPost({ ...newPost, salary: e.target.value })
                        }
                        required
                      />
                      <input
                        type="text"
                        placeholder="Location"
                        className="w-full px-4 py-2 border rounded-xl"
                        value={newPost.location}
                        onChange={(e) =>
                          setNewPost({ ...newPost, location: e.target.value })
                        }
                        required
                      />
                      <input
                        type="text"
                        placeholder="Schedule (e.g., 5 days/week)"
                        className="w-full px-4 py-2 border rounded-xl"
                        value={newPost.schedule}
                        onChange={(e) =>
                          setNewPost({ ...newPost, schedule: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Duration (e.g., 2 hours/day)"
                        className="w-full px-4 py-2 border rounded-xl"
                        value={newPost.duration}
                        onChange={(e) =>
                          setNewPost({ ...newPost, duration: e.target.value })
                        }
                      />
                      <textarea
                        placeholder="Description"
                        rows="3"
                        className="w-full px-4 py-2 border rounded-xl"
                        value={newPost.description}
                        onChange={(e) =>
                          setNewPost({
                            ...newPost,
                            description: e.target.value,
                          })
                        }
                        required
                      />
                      <textarea
                        placeholder="Requirements"
                        rows="2"
                        className="w-full px-4 py-2 border rounded-xl"
                        value={newPost.requirements}
                        onChange={(e) =>
                          setNewPost({
                            ...newPost,
                            requirements: e.target.value,
                          })
                        }
                      />
                      <div className="flex gap-3 pt-4">
                        <button
                          type="submit"
                          className="flex-1 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
                        >
                          Publish Post
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowPostForm(false)}
                          className="flex-1 px-6 py-2 border border-gray-300 rounded-xl hover:bg-gray-50"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* Posts List */}
              <div className="space-y-4">
                {tuitionPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-800">
                            {post.title}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}
                          >
                            {post.status.toUpperCase()}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-gray-600 mb-3">
                          <span>📚 {post.subject}</span>
                          <span>🎓 {post.classLevel}</span>
                          <span>📍 {post.location}</span>
                          <span>💰 {post.salary}</span>
                          <span>⏰ {post.schedule}</span>
                          <span>⌛ {post.duration}</span>
                          <span>📋 {post.applications} applications</span>
                          <span>📅 Posted: {post.postedDate}</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-3">
                          {post.description}
                        </p>
                        <div className="flex gap-3">
                          <button className="text-blue-600 hover:text-blue-700 text-sm">
                            Edit
                          </button>
                          <button className="text-red-600 hover:text-red-700 text-sm">
                            Delete
                          </button>
                          <button className="text-green-600 hover:text-green-700 text-sm">
                            View Applications
                          </button>
                        </div>
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
                  Teacher Applications
                </h2>
                <p className="text-gray-500 mt-1">
                  Review and manage tutor applications
                </p>
              </div>
              <div className="divide-y divide-gray-200">
                {applications.map((app) => (
                  <div key={app.id} className="p-6 hover:bg-gray-50 transition">
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-gray-800">
                            {app.teacherName}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}
                          >
                            {app.status.toUpperCase()}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600 mb-3">
                          <span>📚 Applied for: {app.tuitionTitle}</span>
                          <span>🎓 {app.teacherQualification}</span>
                          <span>⭐ {app.experience} experience</span>
                          <span>💰 Expected: ৳{app.expectedSalary}/month</span>
                          <span>📅 Applied: {app.appliedDate}</span>
                        </div>
                        <p className="text-gray-500 text-sm italic">
                          "{app.message}"
                        </p>
                      </div>
                      {app.status === 'pending' && (
                        <div className="flex gap-2">
                          <button
                            onClick={() =>
                              handleApplicationAction(app.id, 'approved')
                            }
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() =>
                              handleApplicationAction(app.id, 'rejected')
                            }
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                          >
                            Reject
                          </button>
                        </div>
                      )}
                      {app.status === 'approved' && (
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                          Contact Teacher
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'active-tutors' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Active Tutors
                </h2>
                <p className="text-gray-500 mt-1">
                  Monitor your children's progress with their tutors
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                {activeTutors.map((tutor) => (
                  <div
                    key={tutor.id}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-2xl text-white">
                        {tutor.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {tutor.name}
                        </h3>
                        <p className="text-gray-500">{tutor.subject} Teacher</p>
                        <div className="flex items-center gap-1 mt-1">
                          <span>⭐</span>
                          <span className="font-semibold">{tutor.rating}</span>
                          <span className="text-gray-400 text-sm">
                            (45 reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Student:</span>
                        <span className="font-semibold">
                          {tutor.studentName}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Schedule:</span>
                        <span className="font-semibold">{tutor.schedule}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progress:</span>
                        <span className="font-semibold text-green-600">
                          {tutor.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${tutor.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>
                          Completed: {tutor.sessionsCompleted} sessions
                        </span>
                        <span>Total: {tutor.totalSessions} sessions</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Message Tutor
                      </button>
                      <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        View Reports
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">
                  Total Spent on Tuition
                </h3>
                <p className="text-4xl font-bold">
                  ৳{totalSpent.toLocaleString()}
                </p>
                <p className="text-green-100 mt-2">Last payment: March 2024</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Payment History
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Tutor
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Month
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Method
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {payments.map((payment) => (
                        <tr key={payment.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-800">
                            {payment.tutor}
                          </td>
                          <td className="px-6 py-4 text-green-600 font-semibold">
                            ৳{payment.amount.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {payment.month}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}
                            >
                              {payment.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {payment.method}
                          </td>
                          <td className="px-6 py-4">
                            {payment.status === 'pending' && (
                              <button className="text-blue-600 hover:text-blue-800 text-sm">
                                Pay Now
                              </button>
                            )}
                            {payment.status === 'paid' && (
                              <button className="text-gray-500 text-sm">
                                Download Receipt
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'children' && (
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Children Information
              </h2>
              <div className="space-y-6">
                <div className="border rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Rafiq Ahmed
                      </h3>
                      <p className="text-gray-500">Class 10 (SSC) • Age: 16</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">
                      Edit
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">School:</p>
                      <p className="font-semibold">
                        Dhaka Residential Model College
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Subjects:</p>
                      <p className="font-semibold">
                        Mathematics, Physics, Chemistry, English
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Current Tutor:</p>
                      <p className="font-semibold text-green-600">
                        Rahman Khan (Mathematics)
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Performance:</p>
                      <p className="font-semibold text-blue-600">
                        Above Average (75%)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Tahmina Ahmed
                      </h3>
                      <p className="text-gray-500">Class 8 • Age: 13</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">
                      Edit
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">School:</p>
                      <p className="font-semibold">Viqarunnisa Noon School</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Subjects:</p>
                      <p className="font-semibold">
                        English, Bangla, General Science
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Current Tutor:</p>
                      <p className="font-semibold text-green-600">
                        Kamal Hossain (English)
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Performance:</p>
                      <p className="font-semibold text-blue-600">
                        Excellent (85%)
                      </p>
                    </div>
                  </div>
                </div>

                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  + Add Child
                </button>
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
                        Email notifications for new applications
                      </span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-gray-700">
                        Payment reminders and receipts
                      </span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-gray-700">
                        Progress reports for children
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Payment Settings
                  </label>
                  <select className="w-full px-4 py-2 border rounded-xl">
                    <option>bKash (Primary)</option>
                    <option>Nagad</option>
                    <option>Rocket</option>
                    <option>Bank Transfer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Currency
                  </label>
                  <select className="w-full px-4 py-2 border rounded-xl">
                    <option>BDT (Bangladeshi Taka)</option>
                    <option>USD (US Dollar)</option>
                  </select>
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

export default GuardianDashboard;
