import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Tuition = () => {
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [salaryRange, setSalaryRange] = useState('all');

  const subjects = [
    'Mathematics',
    'English',
    'Physics',
    'Chemistry',
    'Biology',
    'Bangla',
    'ICT',
  ];
  const locations = [
    'Dhaka',
    'Chattogram',
    'Rajshahi',
    'Khulna',
    'Sylhet',
    'Barishal',
    'Rangpur',
  ];

  const tuitionPosts = [
    {
      id: 1,
      title: 'Mathematics Expert Needed for SSC Student',
      subject: 'Mathematics',
      class: 'Class 10 (SSC)',
      location: 'Dhaka, Banasree',
      salary: '8,000 - 12,000 BDT/month',
      salaryValue: 10000,
      schedule: '5 days/week',
      duration: '2 hours/day',
      gender: 'Any',
      experience: '2+ years',
      deadline: 'March 30, 2026',
      badge: 'Urgent',
      badgeColor: 'bg-red-500',
      description:
        'Looking for an experienced math teacher for SSC candidate. Must have strong concept on algebra and geometry.',
      requirements: [
        "Bachelor's degree in Mathematics",
        'Previous teaching experience',
        'Good communication skills',
      ],
      postedDate: '2 days ago',
      applicants: 12,
    },
    {
      id: 2,
      title: 'English Language & Literature Tutor',
      subject: 'English',
      class: 'Class 8-10',
      location: 'Chattogram, Nasirabad',
      salary: '6,000 - 9,000 BDT/month',
      salaryValue: 7500,
      schedule: '4 days/week',
      duration: '1.5 hours/day',
      gender: 'Female preferred',
      experience: '1+ years',
      deadline: 'April 5, 2026',
      badge: 'Featured',
      badgeColor: 'bg-purple-500',
      description:
        'Need an English tutor focusing on grammar, literature, and creative writing skills.',
      requirements: [
        'English major preferred',
        'IELTS/TOEFL score (optional)',
        'Teaching methodology expertise',
      ],
      postedDate: '5 days ago',
      applicants: 8,
    },
    {
      id: 3,
      title: 'Physics & Chemistry Specialist (HSC)',
      subject: 'Physics',
      class: 'HSC Level',
      location: 'Rajshahi, Shaheb Bazar',
      salary: '10,000 - 15,000 BDT/month',
      salaryValue: 12500,
      schedule: '6 days/week',
      duration: '2 hours/day',
      gender: 'Male preferred',
      experience: '3+ years',
      deadline: 'April 10, 2026',
      badge: 'Premium',
      badgeColor: 'bg-amber-500',
      description:
        'Experienced science teacher needed for HSC candidate. Focus on Physics and Chemistry.',
      requirements: [
        "Master's in Physics/Chemistry",
        'HSC teaching experience',
        'Practical demonstration skills',
      ],
      postedDate: '1 week ago',
      applicants: 24,
    },
    {
      id: 4,
      title: 'Programming & ICT Tutor',
      subject: 'ICT',
      class: 'Class 9-12',
      location: 'Sylhet, Zindabazar',
      salary: '7,000 - 11,000 BDT/month',
      salaryValue: 9000,
      schedule: '3 days/week',
      duration: '2 hours/day',
      gender: 'Any',
      experience: '2+ years',
      deadline: 'April 8, 2026',
      badge: 'New',
      badgeColor: 'bg-green-500',
      description:
        'ICT tutor needed for programming basics, web development, and database management.',
      requirements: [
        'CSE background',
        'Programming knowledge (Python/Java)',
        'Practical project experience',
      ],
      postedDate: '1 day ago',
      applicants: 5,
    },
    {
      id: 5,
      title: 'Biology & Life Sciences Teacher',
      subject: 'Biology',
      class: 'Class 9-10',
      location: 'Khulna, Sonadanga',
      salary: '5,500 - 8,000 BDT/month',
      salaryValue: 6750,
      schedule: '4 days/week',
      duration: '1.5 hours/day',
      gender: 'Female preferred',
      experience: '1+ years',
      deadline: 'March 28, 2026',
      badge: 'Urgent',
      badgeColor: 'bg-red-500',
      description:
        'Biology teacher needed for SSC examinee. Must have deep knowledge in human anatomy and genetics.',
      requirements: [
        'Biology major',
        'Lab demonstration skills',
        'Student-friendly approach',
      ],
      postedDate: '3 days ago',
      applicants: 15,
    },
    {
      id: 6,
      title: 'Bangla Language & Grammar Expert',
      subject: 'Bangla',
      class: 'Class 6-10',
      location: 'Barishal, Banglabazar',
      salary: '4,000 - 6,000 BDT/month',
      salaryValue: 5000,
      schedule: '3 days/week',
      duration: '1.5 hours/day',
      gender: 'Any',
      experience: '1+ years',
      deadline: 'April 12, 2026',
      badge: 'New',
      badgeColor: 'bg-green-500',
      description:
        'Looking for Bangla teacher focusing on grammar, literature, and creative writing.',
      requirements: [
        'Bangla major',
        'Excellent language skills',
        'Creative teaching methods',
      ],
      postedDate: '4 days ago',
      applicants: 6,
    },
  ];

  // Filter logic
  const filteredPosts = tuitionPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject =
      selectedSubject === 'all' || post.subject === selectedSubject;
    const matchesLocation =
      selectedLocation === 'all' ||
      post.location.split(',')[0] === selectedLocation;

    let matchesSalary = true;
    if (salaryRange === 'low') matchesSalary = post.salaryValue < 7000;
    else if (salaryRange === 'medium')
      matchesSalary = post.salaryValue >= 7000 && post.salaryValue <= 10000;
    else if (salaryRange === 'high') matchesSalary = post.salaryValue > 10000;

    let matchesFilter = true;
    if (filterType === 'urgent') matchesFilter = post.badge === 'Urgent';
    else if (filterType === 'featured')
      matchesFilter = post.badge === 'Featured';
    else if (filterType === 'new') matchesFilter = post.badge === 'New';

    return (
      matchesSearch &&
      matchesSubject &&
      matchesLocation &&
      matchesSalary &&
      matchesFilter
    );
  });

  const getSalaryRangeLabel = () => {
    if (salaryRange === 'low') return 'Low (Below 7k)';
    if (salaryRange === 'medium') return 'Medium (7k-10k)';
    if (salaryRange === 'high') return 'High (Above 10k)';
    return 'All Salaries';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-16">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Tuition
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Browse through hundreds of tuition opportunities and start your
              teaching journey today
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search and Filter Section */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by title, subject, or location..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSubject('all');
                  setSelectedLocation('all');
                  setSalaryRange('all');
                  setFilterType('all');
                }}
                className="px-6 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all font-semibold"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => setFilterType('all')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filterType === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              All Posts
            </button>
            <button
              onClick={() => setFilterType('urgent')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filterType === 'urgent'
                  ? 'bg-red-500 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              🔥 Urgent
            </button>
            <button
              onClick={() => setFilterType('featured')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filterType === 'featured'
                  ? 'bg-purple-500 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              ⭐ Featured
            </button>
            <button
              onClick={() => setFilterType('new')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filterType === 'new'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              🆕 New
            </button>
          </div>

          {/* Advanced Filters */}
          <div className="grid md:grid-cols-4 gap-4">
            <select
              className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="all">All Subjects</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>

            <select
              className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="all">All Locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>

            <select
              className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              value={salaryRange}
              onChange={(e) => setSalaryRange(e.target.value)}
            >
              <option value="all">All Salaries</option>
              <option value="low">Low (Below 7,000 BDT)</option>
              <option value="medium">Medium (7,000 - 10,000 BDT)</option>
              <option value="high">High (Above 10,000 BDT)</option>
            </select>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl px-4 py-2 flex items-center justify-between">
              <span className="text-sm text-gray-600">Results:</span>
              <span className="font-bold text-blue-600">
                {filteredPosts.length} posts
              </span>
            </div>
          </div>
        </div>

        {/* Results Count and Sort */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Available Tuition Posts
            </h2>
            <p className="text-gray-500 mt-1">
              Showing {filteredPosts.length} of {tuitionPosts.length}{' '}
              opportunities
            </p>
          </div>
          <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow">
            📅 Updated daily
          </div>
        </div>

        {/* Tuition Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Card Header with Badge */}
                <div className={`${post.badgeColor} h-1.5 w-full`}></div>

                <div className="p-6">
                  {/* Title and Badge Row */}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <span
                      className={`${post.badgeColor} text-white text-xs px-3 py-1 rounded-full whitespace-nowrap ml-2`}
                    >
                      {post.badge}
                    </span>
                  </div>

                  {/* Key Info Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-lg">📚</span>
                      <span className="text-sm">{post.subject}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-lg">🎓</span>
                      <span className="text-sm">{post.class}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-lg">📍</span>
                      <span className="text-sm">{post.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-lg">💰</span>
                      <span className="text-sm font-semibold text-green-600">
                        {post.salary}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-lg">⏰</span>
                      <span className="text-sm">{post.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-lg">⌛</span>
                      <span className="text-sm">{post.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {post.description}
                  </p>

                  {/* Requirements Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.requirements.slice(0, 2).map((req, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {req}
                      </span>
                    ))}
                    {post.requirements.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{post.requirements.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Footer with Meta and Action */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="flex gap-4 text-xs text-gray-500">
                      <span>📅 {post.postedDate}</span>
                      <span>👥 {post.applicants} applied</span>
                      <span>⏳ Deadline: {post.deadline}</span>
                    </div>
                    <Link
                      to={`/tuition/${post.id}`}
                      className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
                    >
                      Apply Now
                      <svg
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              No tuition posts found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your filters or search criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSubject('all');
                setSelectedLocation('all');
                setSalaryRange('all');
                setFilterType('all');
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 rounded-3xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Get New Tuition Alerts</h3>
          <p className="text-blue-100 mb-6">
            Subscribe to receive the latest tuition posts directly in your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tuition;
