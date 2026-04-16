import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Information
    title: '',
    subject: '',
    classLevel: '',
    category: 'academic',

    // Location & Schedule
    location: '',
    area: '',
    schedule: '',
    duration: '',
    preferredDays: [],

    // Compensation
    salaryType: 'monthly',
    salaryMin: '',
    salaryMax: '',
    negotiable: false,

    // Requirements
    gender: 'any',
    experience: '',
    qualification: '',
    teachingStyle: '',

    // Additional Info
    description: '',
    requirements: '',
    deadline: '',
    contactNumber: '',
    preferredTime: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const subjects = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
    'Bangla',
    'ICT',
    'Programming',
    'Accounting',
    'Economics',
    'Business Studies',
    'History',
    'Geography',
    'Statistics',
  ];

  const classLevels = [
    'Class 1',
    'Class 2',
    'Class 3',
    'Class 4',
    'Class 5',
    'Class 6',
    'Class 7',
    'Class 8',
    'Class 9',
    'Class 10 (SSC)',
    'HSC 1st Year',
    'HSC 2nd Year',
    'Undergraduate',
    'Masters',
    'Other',
  ];

  const locations = [
    'Dhaka',
    'Chattogram',
    'Rajshahi',
    'Khulna',
    'Sylhet',
    'Barishal',
    'Rangpur',
    'Mymensingh',
    'Cumilla',
    'Narayanganj',
  ];

  const areas = {
    Dhaka: [
      'Banasree',
      'Bashundhara',
      'Uttara',
      'Gulshan',
      'Banani',
      'Mohakhali',
      'Dhanmondi',
      'Mirpur',
      'Mohammadpur',
      'Jatrabari',
    ],
    Chattogram: ['Nasirabad', 'GEC', 'Agrabad', 'Halishahar', 'Pahartali'],
    Rajshahi: ['Shaheb Bazar', 'Kazla', 'Binodpur', 'Boalia'],
    Khulna: ['Sonadanga', 'Khulna University', 'Shiromoni', 'Doulatpur'],
    Sylhet: ['Zindabazar', 'Amberkhana', 'Mirabazar', 'Shahjalal'],
  };

  const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleDayToggle = (day) => {
    setFormData((prev) => ({
      ...prev,
      preferredDays: prev.preferredDays.includes(day)
        ? prev.preferredDays.filter((d) => d !== day)
        : [...prev.preferredDays, day],
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Post title is required';
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (!formData.classLevel)
      newErrors.classLevel = 'Please select class level';
    if (!formData.location) newErrors.location = 'Please select location';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.schedule) newErrors.schedule = 'Schedule is required';
    if (!formData.duration) newErrors.duration = 'Duration is required';
    if (formData.preferredDays.length === 0)
      newErrors.preferredDays = 'Select at least one preferred day';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.salaryMin) newErrors.salaryMin = 'Minimum salary is required';
    if (!formData.salaryMax) newErrors.salaryMax = 'Maximum salary is required';
    if (parseInt(formData.salaryMin) > parseInt(formData.salaryMax)) {
      newErrors.salaryMax = 'Maximum salary must be greater than minimum';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep4 = () => {
    const newErrors = {};
    if (!formData.description.trim())
      newErrors.description = 'Description is required';
    if (!formData.requirements.trim())
      newErrors.requirements = 'Requirements are required';
    if (!formData.deadline)
      newErrors.deadline = 'Application deadline is required';
    if (!formData.contactNumber)
      newErrors.contactNumber = 'Contact number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    let isValid = false;
    if (step === 1) isValid = validateStep1();
    else if (step === 2) isValid = validateStep2();
    else if (step === 3) isValid = validateStep3();

    if (isValid) setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep4()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form Data:', formData);
      setIsSubmitting(false);
      // Show success message and redirect
      alert('Tuition post created successfully!');
      navigate('/guardian-dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Post a Tuition Requirement
          </h1>
          <p className="text-gray-500 text-lg">
            Find the perfect tutor for your child by providing detailed
            information
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-10">
          <div className="flex justify-between items-center">
            {['Basic Info', 'Schedule', 'Compensation', 'Details'].map(
              (label, index) => (
                <div key={index} className="flex-1 relative">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                        step > index + 1
                          ? 'bg-green-500 text-white'
                          : step === index + 1
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-110'
                            : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {step > index + 1 ? '✓' : index + 1}
                    </div>
                    <div className="hidden md:block text-xs mt-2 text-gray-500">
                      {label}
                    </div>
                  </div>
                  {index < 3 && (
                    <div
                      className={`absolute top-5 left-1/2 w-full h-0.5 ${
                        step > index + 1 ? 'bg-green-500' : 'bg-gray-200'
                      }`}
                    ></div>
                  )}
                </div>
              )
            )}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <form onSubmit={handleSubmit}>
            <div className="p-8">
              {/* Step 1: Basic Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Basic Information
                  </h2>

                  {/* Post Title */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Post Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        errors.title ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="e.g., Experienced Math Teacher Needed for SSC Student"
                    />
                    {errors.title && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.title}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.subject ? 'border-red-500' : 'border-gray-200'
                      }`}
                    >
                      <option value="">Select Subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Class Level */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Class Level *
                    </label>
                    <select
                      name="classLevel"
                      value={formData.classLevel}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.classLevel ? 'border-red-500' : 'border-gray-200'
                      }`}
                    >
                      <option value="">Select Class</option>
                      {classLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                    {errors.classLevel && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.classLevel}
                      </p>
                    )}
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="category"
                          value="academic"
                          checked={formData.category === 'academic'}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Academic</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="category"
                          value="skill"
                          checked={formData.category === 'skill'}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Skill Development</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="category"
                          value="exam"
                          checked={formData.category === 'exam'}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Exam Preparation</span>
                      </label>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        City/District *
                      </label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.location ? 'border-red-500' : 'border-gray-200'
                        }`}
                      >
                        <option value="">Select Location</option>
                        {locations.map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                      {errors.location && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.location}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Area/Neighborhood
                      </label>
                      <select
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={!formData.location}
                      >
                        <option value="">Select Area</option>
                        {formData.location &&
                          areas[formData.location]?.map((area) => (
                            <option key={area} value={area}>
                              {area}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Schedule */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Schedule & Timing
                  </h2>

                  {/* Schedule Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Schedule Type *
                    </label>
                    <select
                      name="schedule"
                      value={formData.schedule}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.schedule ? 'border-red-500' : 'border-gray-200'
                      }`}
                    >
                      <option value="">Select Schedule</option>
                      <option value="3 days/week">3 days/week</option>
                      <option value="4 days/week">4 days/week</option>
                      <option value="5 days/week">5 days/week</option>
                      <option value="6 days/week">6 days/week</option>
                      <option value="Weekend only">Weekend only</option>
                      <option value="Custom">Custom</option>
                    </select>
                    {errors.schedule && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.schedule}
                      </p>
                    )}
                  </div>

                  {/* Preferred Days */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Days *
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {weekDays.map((day) => (
                        <button
                          key={day}
                          type="button"
                          onClick={() => handleDayToggle(day)}
                          className={`px-4 py-2 rounded-full font-medium transition-all ${
                            formData.preferredDays.includes(day)
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {day.slice(0, 3)}
                        </button>
                      ))}
                    </div>
                    {errors.preferredDays && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.preferredDays}
                      </p>
                    )}
                  </div>

                  {/* Duration */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Duration per Session *
                    </label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.duration ? 'border-red-500' : 'border-gray-200'
                      }`}
                    >
                      <option value="">Select Duration</option>
                      <option value="1 hour">1 hour</option>
                      <option value="1.5 hours">1.5 hours</option>
                      <option value="2 hours">2 hours</option>
                      <option value="2.5 hours">2.5 hours</option>
                      <option value="3 hours">3 hours</option>
                    </select>
                    {errors.duration && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.duration}
                      </p>
                    )}
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Time of Day
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Time</option>
                      <option value="Morning (8 AM - 12 PM)">
                        Morning (8 AM - 12 PM)
                      </option>
                      <option value="Afternoon (12 PM - 4 PM)">
                        Afternoon (12 PM - 4 PM)
                      </option>
                      <option value="Evening (4 PM - 8 PM)">
                        Evening (4 PM - 8 PM)
                      </option>
                      <option value="Night (8 PM - 10 PM)">
                        Night (8 PM - 10 PM)
                      </option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Compensation */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Compensation
                  </h2>

                  {/* Salary Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Salary Type
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="salaryType"
                          value="monthly"
                          checked={formData.salaryType === 'monthly'}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Monthly</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="salaryType"
                          value="hourly"
                          checked={formData.salaryType === 'hourly'}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Hourly</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="salaryType"
                          value="per-session"
                          checked={formData.salaryType === 'per-session'}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Per Session</span>
                      </label>
                    </div>
                  </div>

                  {/* Salary Range */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Minimum Salary (BDT) *
                      </label>
                      <input
                        type="number"
                        name="salaryMin"
                        value={formData.salaryMin}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.salaryMin
                            ? 'border-red-500'
                            : 'border-gray-200'
                        }`}
                        placeholder="e.g., 8000"
                      />
                      {errors.salaryMin && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.salaryMin}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Maximum Salary (BDT) *
                      </label>
                      <input
                        type="number"
                        name="salaryMax"
                        value={formData.salaryMax}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.salaryMax
                            ? 'border-red-500'
                            : 'border-gray-200'
                        }`}
                        placeholder="e.g., 12000"
                      />
                      {errors.salaryMax && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.salaryMax}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Negotiable */}
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="negotiable"
                      checked={formData.negotiable}
                      onChange={handleChange}
                      className="w-5 h-5 text-blue-600 rounded"
                    />
                    <span className="text-gray-700">Salary is negotiable</span>
                  </label>
                </div>
              )}

              {/* Step 4: Additional Details */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Additional Details
                  </h2>

                  {/* Tutor Requirements */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Tutor Gender
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="gender"
                          value="any"
                          checked={formData.gender === 'any'}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Any</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={formData.gender === 'male'}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Male</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={formData.gender === 'female'}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Female</span>
                      </label>
                    </div>
                  </div>

                  {/* Experience Required */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Minimum Experience Required
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Experience</option>
                      <option value="Fresher">
                        Fresher (No experience required)
                      </option>
                      <option value="1 year">1+ years</option>
                      <option value="2 years">2+ years</option>
                      <option value="3 years">3+ years</option>
                      <option value="5 years">5+ years</option>
                    </select>
                  </div>

                  {/* Qualification */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Required Qualification
                    </label>
                    <input
                      type="text"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Bachelor's degree in Mathematics, B.Sc in CSE"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Detailed Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.description
                          ? 'border-red-500'
                          : 'border-gray-200'
                      }`}
                      placeholder="Describe the tuition requirements, student's current level, goals, etc."
                    />
                    {errors.description && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.description}
                      </p>
                    )}
                  </div>

                  {/* Requirements */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Specific Requirements *
                    </label>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows="3"
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.requirements
                          ? 'border-red-500'
                          : 'border-gray-200'
                      }`}
                      placeholder="List specific requirements for the tutor"
                    />
                    {errors.requirements && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.requirements}
                      </p>
                    )}
                  </div>

                  {/* Deadline */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Application Deadline *
                    </label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.deadline ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {errors.deadline && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.deadline}
                      </p>
                    )}
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.contactNumber
                          ? 'border-red-500'
                          : 'border-gray-200'
                      }`}
                      placeholder="017XXXXXXXX"
                    />
                    {errors.contactNumber && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.contactNumber}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="px-8 py-6 bg-gray-50 border-t flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-2.5 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-100 transition"
                >
                  ← Back
                </button>
              )}
              {step < 4 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition"
                >
                  Continue →
                </button>
              )}
              {step === 4 && (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ml-auto px-8 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:shadow-lg transition disabled:opacity-50 flex items-center gap-2"
                >
                  {isSubmitting ? (
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
                      Publishing...
                    </>
                  ) : (
                    <>📝 Publish Post</>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Tips Card */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
          <h3 className="font-bold text-gray-800 mb-3">
            💡 Tips for a Better Post
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Be specific about the subject and class level</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Mention the student's current performance level</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Provide clear salary expectations</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Include specific requirements for the tutor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
