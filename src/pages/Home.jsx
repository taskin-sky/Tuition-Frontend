import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const tuitionPosts = [
    {
      id: 1,
      title: 'Mathematics Expert Needed',
      subject: 'Mathematics',
      class: 'Class 10 (SSC)',
      location: 'Dhaka, Bangladesh',
      salary: '8,000 - 12,000 BDT/month',
      badge: 'Urgent',
      badgeColor: 'bg-red-500',
    },
    {
      id: 2,
      title: 'English Language Tutor',
      subject: 'English',
      class: 'Class 8-10',
      location: 'Chattogram',
      salary: '6,000 - 9,000 BDT/month',
      badge: 'Featured',
      badgeColor: 'bg-purple-500',
    },
    {
      id: 3,
      title: 'Physics & Chemistry Specialist',
      subject: 'Science',
      class: 'HSC Level',
      location: 'Rajshahi',
      salary: '10,000 - 15,000 BDT/month',
      badge: 'Premium',
      badgeColor: 'bg-amber-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
        {/* Simple background pattern without complex SVG */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        {/* Floating animated circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-semibold">
                  ✨ Trusted by 10,000+ Students
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Find Your Perfect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                  Academic Mentor
                </span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed">
                Connect with expert tutors, personalized learning paths, and
                achieve your academic goals with Bangladesh's most trusted
                tuition platform.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/register"
                  className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  Get Started Free
                  <svg
                    className="group-hover:translate-x-1 transition-transform"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/tuition"
                  className="border-2 border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Browse Tutors
                </Link>
              </div>

              {/* Search Bar */}
              <div className="bg-white rounded-2xl shadow-2xl p-2 mt-8">
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl">
                    <svg
                      className="text-gray-400"
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
                      placeholder="Search by subject, class, or location..."
                      className="flex-1 outline-none bg-transparent"
                    />
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Tuition Cards */}
            <div className="relative hidden lg:block">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
                <div className="space-y-4">
                  {tuitionPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white/10 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 transition-all cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{post.title}</h3>
                        <span
                          className={`${post.badgeColor} text-white text-xs px-2 py-1 rounded-full`}
                        >
                          {post.badge}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-blue-100">
                        <span>{post.subject}</span>
                        <span>•</span>
                        <span>{post.class}</span>
                        <span>•</span>
                        <span>{post.location}</span>
                      </div>
                      <div className="mt-2 text-sm text-yellow-200">
                        {post.salary}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '5,000+', label: 'Active Tutors' },
              { number: '10,000+', label: 'Students Helped' },
              { number: '98%', label: 'Satisfaction Rate' },
              { number: '50+', label: 'Expert Subjects' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="text-blue-600"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">
                  {stat.number}
                </h3>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Simple three-step process to start your learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Sign Up Free',
                description:
                  'Create your account as a student or tutor in just 2 minutes',
              },
              {
                step: '02',
                title: 'Find Your Match',
                description:
                  'Browse through verified tutors or post your requirements',
              },
              {
                step: '03',
                title: 'Start Learning',
                description:
                  'Connect, schedule sessions, and achieve your goals',
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-6xl font-bold text-gray-100 absolute top-4 right-6">
                    {item.step}
                  </div>
                  <div className="inline-flex p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4">
                    <svg
                      className="text-white"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-500 text-lg">
              Discover what makes us the best platform for academic success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Verified Tutors',
                description: 'All tutors go through rigorous background checks',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Flexible Schedule',
                description: 'Book sessions that fit your timetable',
                color: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Secure Platform',
                description:
                  'Safe communication with enterprise-grade security',
                color: 'from-green-500 to-emerald-500',
              },
              {
                title: 'Track Progress',
                description: 'Monitor your learning journey with analytics',
                color: 'from-orange-500 to-red-500',
              },
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300">
                  <div
                    className={`bg-gradient-to-r ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <svg
                      className="text-white"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST TUITION POSTS */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-2">
                Latest Opportunities
              </h2>
              <p className="text-gray-500">
                Find the perfect tuition match near you
              </p>
            </div>
            <Link
              to="/tuition"
              className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
            >
              View All Posts
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tuitionPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <div className={`${post.badgeColor} h-1 w-full`}></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <span
                      className={`${post.badgeColor} text-white text-xs px-2 py-1 rounded-full`}
                    >
                      {post.badge}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600">{post.subject}</p>
                    <p className="text-gray-600">{post.class}</p>
                    <p className="text-gray-600">{post.location}</p>
                    <p className="text-blue-600 font-semibold">{post.salary}</p>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Community Says
            </h2>
            <p className="text-gray-500 text-lg">
              Join thousands of satisfied students and tutors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Parent',
                content:
                  'Found an amazing math tutor for my son within days. His grades improved dramatically!',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                role: 'Student',
                content:
                  'The platform made finding a physics tutor so easy. Best decision I made for my studies.',
                rating: 5,
              },
              {
                name: 'Dr. Emily Williams',
                role: 'Professional Tutor',
                content:
                  'This platform helped me connect with motivated students. The best tutoring experience!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#fbbf24"
                      stroke="#fbbf24"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-3xl p-12 text-center text-white">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of students and tutors who are already achieving
                their goals with us
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/register"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                >
                  Join as Student
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/register"
                  className="border-2 border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
                >
                  Become a Tutor
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Tuition Rajshahi
              </h3>
              <p className="text-gray-400">
                Empowering education through quality tutoring connections in
                Bangladesh.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/tuition" className="hover:text-white transition">
                    Browse Tuition
                  </Link>
                </li>
                <li>
                  <Link
                    to="/create-post"
                    className="hover:text-white transition"
                  >
                    Create Post
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="#" className="hover:text-white transition">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400">Taskin Mohammad Mubassir</p>
              <p className="text-gray-400">
                Email: support@tuitionrajshahi.com
              </p>
              <p className="text-gray-400">Phone: +880 1737 778252</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              © 2026 Tuition Rajshahi. All rights reserved. Made with ❤️ for
              education
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
