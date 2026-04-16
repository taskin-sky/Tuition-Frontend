import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'guardian',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (form.fullName.length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^01[3-9]\d{8}$/.test(form.phone)) {
      newErrors.phone = 'Enter a valid Bangladesh phone number';
    }

    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    } else if (!/(?=.*[A-Z])/.test(form.password)) {
      newErrors.password =
        'Password must contain at least one uppercase letter';
    } else if (!/(?=.*[0-9])/.test(form.password)) {
      newErrors.password = 'Password must contain at least one number';
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!form.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        console.log('Register Data:', form);
        setIsLoading(false);
        // Navigate to login or dashboard
        navigate('/login');
      }, 1500);
    }
  };

  const roleOptions = [
    {
      id: 'guardian',
      title: 'Guardian / Parent',
      icon: '👨‍👩‍👧',
      description: 'Post tuition requirements and find teachers',
      benefits: [
        'Post unlimited tuition',
        'Review teacher profiles',
        'Track progress',
      ],
    },
    {
      id: 'teacher',
      title: 'Teacher / Tutor',
      icon: '👨‍🏫',
      description: 'Find students and grow your teaching career',
      benefits: [
        'Browse tuition posts',
        'Apply to opportunities',
        'Build your profile',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tuition Rajshahi
            </h1>
          </Link>
          <p className="text-gray-500 mt-2">
            Join thousands of educators and learners
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Form */}
            <div className="p-8 lg:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Create an Account
                </h2>
                <p className="text-gray-500">
                  Start your journey with us today
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      👤
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-200 focus:ring-blue-500'
                      }`}
                      placeholder="Md. Rahman"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      📧
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-200 focus:ring-blue-500'
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      📱
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-200 focus:ring-blue-500'
                      }`}
                      placeholder="017XXXXXXXX"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      🔒
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                        errors.password
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-200 focus:ring-blue-500'
                      }`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </p>
                  )}
                  <p className="text-gray-400 text-xs mt-1">
                    Must contain at least 6 characters, 1 uppercase & 1 number
                  </p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      🔒
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                        errors.confirmPassword
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-200 focus:ring-blue-500'
                      }`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={form.agreeTerms}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label className="text-sm text-gray-600">
                    I agree to the{' '}
                    <Link to="/terms" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link
                      to="/privacy"
                      className="text-blue-600 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {errors.agreeTerms && (
                  <p className="text-red-500 text-xs">{errors.agreeTerms}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <svg
                        className="w-5 h-5"
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
                    </>
                  )}
                </button>

                {/* Login Link */}
                <p className="text-center text-gray-600">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Sign In
                  </Link>
                </p>
              </form>
            </div>

            {/* Right Side - Role Selection & Info */}
            <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 p-8 lg:p-10 text-white">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Choose Your Role</h3>
                <p className="text-blue-100">
                  Select how you want to use our platform
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {roleOptions.map((role) => (
                  <label
                    key={role.id}
                    className={`block p-5 rounded-2xl cursor-pointer transition-all transform hover:scale-[1.02] ${
                      form.role === role.id
                        ? 'bg-white/20 backdrop-blur-sm border-2 border-white'
                        : 'bg-white/10 hover:bg-white/15'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <input
                        type="radio"
                        name="role"
                        value={role.id}
                        checked={form.role === role.id}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 text-blue-600 focus:ring-blue-500"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-3xl">{role.icon}</span>
                          <h4 className="text-lg font-semibold">
                            {role.title}
                          </h4>
                        </div>
                        <p className="text-blue-100 text-sm mb-3">
                          {role.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {role.benefits.map((benefit, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-white/20 px-2 py-1 rounded-full"
                            >
                              ✓ {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              {/* Stats Section */}
              <div className="border-t border-white/20 pt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">5,000+</div>
                    <div className="text-xs text-blue-100">Active Tutors</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">10,000+</div>
                    <div className="text-xs text-blue-100">Students Helped</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs text-blue-100">
                      Satisfaction Rate
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-xs text-blue-100">Expert Subjects</div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 flex justify-center gap-4 text-xs text-blue-100">
                <span>🔒 Secure Platform</span>
                <span>✓ Verified Users</span>
                <span>💳 Safe Payments</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-400 text-xs mt-8">
          By signing up, you agree to receive important notifications and
          updates from Tuition Rajshahi
        </p>
      </div>
    </div>
  );
};

export default Register;
