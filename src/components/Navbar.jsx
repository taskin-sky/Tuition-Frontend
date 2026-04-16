import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Temporary fake user (replace with actual auth later)
  const user = null;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/tuition', label: 'Browse Tuition', icon: '🔍' },
    { path: '/create-post', label: 'Post Tuition', icon: '📝' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-xl py-3'
            : 'bg-white/70 backdrop-blur-md border-b border-white/30 shadow-lg py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link to="/" className="group relative flex items-center gap-3">
              {/* Animated gradient orb behind logo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition duration-500 animate-pulse-slow"></div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl p-2.5 shadow-lg transform transition-transform group-hover:scale-105 duration-300">
                  <svg
                    className="w-6 h-6 text-white drop-shadow-md"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      fill="white"
                      fillOpacity="0.2"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                  Tuition Rajshahi
                  <span className="relative inline-block ml-1">
                    <svg
                      className="w-5 h-5 inline-block text-yellow-400 drop-shadow-sm animate-pulse"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1L12 2z" />
                    </svg>
                    <span className="absolute -top-1 -right-3 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
                  </span>
                </span>
                <span className="absolute -top-2 -right-6 text-[11px] font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
                  EST. 2026
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-white/40 backdrop-blur-sm rounded-full p-1 shadow-inner">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2 rounded-full font-semibold transition-all duration-300 group overflow-hidden ${
                    isActive(link.path)
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-white/60'
                  }`}
                >
                  {/* Hover ripple effect */}
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>

                  <span className="relative flex items-center gap-2 z-10">
                    <span className="text-lg drop-shadow-sm">{link.icon}</span>
                    <span>{link.label}</span>
                  </span>

                  {isActive(link.path) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-white rounded-full shadow-sm animate-pulse"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {!user ? (
                <>
                  <Link
                    to="/login"
                    className="px-6 py-2.5 rounded-full font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:bg-white/50 backdrop-blur-sm"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="relative group overflow-hidden px-7 py-2.5 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {/* Animated gradient background */}
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 group-hover:scale-105 transition-transform duration-500"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={`/${user.role}`}
                    className="px-6 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    Dashboard
                  </Link>
                  <button className="px-6 py-2.5 rounded-full font-semibold text-red-600 hover:bg-red-50/80 backdrop-blur-sm transition-all duration-300">
                    Logout
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute left-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    menuOpen ? 'rotate-45 top-2 w-5' : 'top-0 w-5'
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-2 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    menuOpen ? 'opacity-0 w-0' : 'w-5'
                  }`}
                ></span>
                <span
                  className={`absolute left-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    menuOpen ? '-rotate-45 top-2 w-5' : 'top-4 w-5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Stylized */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 backdrop-blur-md"
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 animate-slide-up overflow-hidden">
            <div className="p-6 space-y-4">
              {/* Mobile Navigation Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 shadow-inner'
                      : 'text-gray-700 hover:bg-gray-100/50'
                  }`}
                >
                  <span className="text-2xl drop-shadow-sm">{link.icon}</span>
                  <span className="text-lg">{link.label}</span>
                  {isActive(link.path) && (
                    <svg
                      className="ml-auto w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </Link>
              ))}

              <div className="border-t border-gray-200/50 my-4"></div>

              {/* Mobile Auth Buttons */}
              {!user ? (
                <div className="space-y-3">
                  <Link
                    to="/login"
                    className="block w-full px-5 py-4 rounded-2xl text-center font-semibold text-gray-700 hover:bg-gray-100/50 transition-all duration-300"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full px-5 py-4 rounded-2xl text-center font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Get Started Free
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  <Link
                    to={`/${user.role}`}
                    className="block w-full px-5 py-4 rounded-2xl text-center font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Dashboard
                  </Link>
                  <button className="block w-full px-5 py-4 rounded-2xl text-center font-semibold text-red-600 hover:bg-red-50/80 transition-all duration-300">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20"></div>

      {/* Global styles for custom animations */}
      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default Navbar;
