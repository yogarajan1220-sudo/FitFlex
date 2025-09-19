import React, { useState } from 'react';
import { 
  Activity, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Chrome, 
  Facebook,
  Play,
  Star,
  Users,
  Trophy,
  Target,
  Zap,
  ArrowRight,
  CheckCircle,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  MapPin,
  Menu,
  X,
  Search,
  Clock,
  Calendar,
  Award,
  Heart,
  Dumbbell,
  TrendingUp,
  Shield,
  Smartphone,
  Globe,
  MessageCircle,
  ChevronRight,
  User,
  Settings
} from 'lucide-react';

type Page = 'home' | 'login' | 'register';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    newsletter: ''
  });
  const [focusedFields, setFocusedFields] = useState({
    email: false,
    password: false,
    confirmPassword: false,
    newsletter: false
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFocus = (field: string) => {
    setFocusedFields(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setFocusedFields(prev => ({ ...prev, [field]: false }));
  };

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mr-3">
              <Activity className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold text-gray-900">Pulse 360</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full px-12 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Search programs, trainers, nutrition..."
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#programs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Programs</a>
            <a href="#trainers" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Trainers</a>
            <a href="#nutrition" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Nutrition</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <button 
              onClick={() => setCurrentPage('login')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Login
            </button>
            <button 
              onClick={() => setCurrentPage('register')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search programs, trainers..."
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <a href="#programs" className="text-gray-700 hover:text-blue-600 font-medium">Programs</a>
              <a href="#trainers" className="text-gray-700 hover:text-blue-600 font-medium">Trainers</a>
              <a href="#nutrition" className="text-gray-700 hover:text-blue-600 font-medium">Nutrition</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <button 
                onClick={() => setCurrentPage('login')}
                className="text-left text-gray-700 hover:text-blue-600 font-medium"
              >
                Login
              </button>
              <button 
                onClick={() => setCurrentPage('register')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold w-fit"
              >
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Train Smarter,<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Live Stronger
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your body and mind with personalized fitness programs designed by world-class trainers. 
            Join thousands who've already started their journey to peak performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setCurrentPage('register')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center"
            >
              Join Now <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 flex items-center">
              <Play className="mr-2 w-5 h-5" /> View Programs
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { number: '50K+', label: 'Active Members' },
              { number: '200+', label: 'Expert Trainers' },
              { number: '1000+', label: 'Workout Programs' },
              { number: '95%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Pulse 360?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven fitness methodologies to deliver results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Smart Tracking",
                description: "AI-powered progress tracking with real-time analytics and personalized insights",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Trainers",
                description: "Certified professionals with years of experience in fitness and nutrition",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Community",
                description: "Connect with fitness enthusiasts worldwide and share your journey",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Safe & Secure",
                description: "Your data is protected with enterprise-grade security measures",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "24/7 Support",
                description: "Round-the-clock assistance from our dedicated support team",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Proven Results",
                description: "Over 95% of our members achieve their fitness goals within 6 months",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our expertly designed programs tailored to your fitness level and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "HIIT Bootcamp",
                level: "Intermediate",
                image: "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "High-intensity interval training to burn fat and build endurance",
                duration: "45 min",
                sessions: "3x/week",
                levelColor: "bg-yellow-500",
                price: "$29/month"
              },
              {
                title: "Strength Builder",
                level: "Beginner",
                image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Build muscle and strength with progressive weight training",
                duration: "60 min",
                sessions: "4x/week",
                levelColor: "bg-green-500",
                price: "$39/month"
              },
              {
                title: "Elite Performance",
                level: "Advanced",
                image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Push your limits with advanced athletic conditioning",
                duration: "75 min",
                sessions: "5x/week",
                levelColor: "bg-red-500",
                price: "$49/month"
              },
              {
                title: "Yoga Flow",
                level: "All Levels",
                image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Improve flexibility, balance, and mental wellness",
                duration: "50 min",
                sessions: "Daily",
                levelColor: "bg-purple-500",
                price: "$19/month"
              },
              {
                title: "Cardio Blast",
                level: "Intermediate",
                image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "High-energy cardio workouts for maximum calorie burn",
                duration: "40 min",
                sessions: "4x/week",
                levelColor: "bg-blue-500",
                price: "$25/month"
              },
              {
                title: "Functional Fitness",
                level: "Beginner",
                image: "https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Real-world movements for everyday strength and mobility",
                duration: "55 min",
                sessions: "3x/week",
                levelColor: "bg-teal-500",
                price: "$35/month"
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
                  <div className={`absolute top-4 left-4 ${program.levelColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {program.level}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    {program.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" /> {program.duration}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" /> {program.sessions}
                    </span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Start Program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Expert Trainers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from certified professionals who are passionate about helping you achieve your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Rodriguez",
                specialty: "Strength Training",
                image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400",
                experience: "8 years",
                certifications: ["NASM-CPT", "CSCS"],
                rating: 4.9
              },
              {
                name: "Sarah Chen",
                specialty: "HIIT & Cardio",
                image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400",
                experience: "6 years",
                certifications: ["ACE-CPT", "TRX"],
                rating: 4.8
              },
              {
                name: "Marcus Johnson",
                specialty: "Functional Fitness",
                image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
                experience: "10 years",
                certifications: ["ACSM-CPT", "FMS"],
                rating: 5.0
              },
              {
                name: "Emma Williams",
                specialty: "Yoga & Wellness",
                image: "https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=400",
                experience: "7 years",
                certifications: ["RYT-500", "NASM"],
                rating: 4.9
              }
            ].map((trainer, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-center">
                  <img src={trainer.image} alt={trainer.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-lg" />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{trainer.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{trainer.specialty}</p>
                  <div className="flex items-center justify-center mb-3">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(trainer.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{trainer.rating}</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    <p className="flex items-center justify-center mb-1">
                      <Trophy className="w-4 h-4 mr-1" />
                      {trainer.experience} experience
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1 mb-4">
                    {trainer.certifications.map((cert, certIndex) => (
                      <span key={certIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {cert}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-sm">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Section */}
      <section id="nutrition" className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nutrition & Wellness
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fuel your body with personalized meal plans and expert nutrition guidance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Healthy meal prep" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Personalized Meal Plans
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our certified nutritionists create customized meal plans based on your goals, 
                dietary preferences, and lifestyle. Whether you're looking to lose weight, 
                build muscle, or maintain a healthy lifestyle, we've got you covered.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: <CheckCircle className="w-5 h-5" />, text: "Custom macro calculations" },
                  { icon: <CheckCircle className="w-5 h-5" />, text: "Weekly meal prep guides" },
                  { icon: <CheckCircle className="w-5 h-5" />, text: "Grocery shopping lists" },
                  { icon: <CheckCircle className="w-5 h-5" />, text: "Recipe database access" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <div className="text-green-500 mr-3">{item.icon}</div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Get Your Meal Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformations from real people who trusted Pulse 360 with their fitness journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                achievement: "Lost 30 lbs in 4 months",
                image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400",
                quote: "Pulse 360 changed my life. The trainers are amazing and the community is so supportive!",
                program: "HIIT Bootcamp",
                beforeAfter: "Before: 180 lbs → After: 150 lbs"
              },
              {
                name: "Mike Chen",
                achievement: "Gained 15 lbs muscle",
                image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400",
                quote: "The strength building program helped me achieve goals I never thought possible.",
                program: "Strength Builder",
                beforeAfter: "Before: 160 lbs → After: 175 lbs"
              },
              {
                name: "Emma Rodriguez",
                achievement: "Marathon finisher",
                image: "https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=400",
                quote: "From couch to marathon in 8 months. The elite program prepared me perfectly!",
                program: "Elite Performance",
                beforeAfter: "0 miles → 26.2 miles"
              },
              {
                name: "David Park",
                achievement: "Improved flexibility 200%",
                image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
                quote: "The yoga program not only improved my flexibility but also my mental health.",
                program: "Yoga Flow",
                beforeAfter: "Couldn't touch toes → Full splits"
              },
              {
                name: "Lisa Thompson",
                achievement: "Reduced body fat 12%",
                image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400",
                quote: "The cardio blast program helped me achieve the body composition I always wanted.",
                program: "Cardio Blast",
                beforeAfter: "28% body fat → 16% body fat"
              },
              {
                name: "James Wilson",
                achievement: "Functional strength +150%",
                image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400",
                quote: "Now I can keep up with my kids and feel stronger in everyday activities.",
                program: "Functional Fitness",
                beforeAfter: "Struggled with stairs → Hiking mountains"
              }
            ].map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-white shadow-md" />
                  <div>
                    <h3 className="font-bold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-blue-600 font-semibold">{story.achievement}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{story.quote}"</p>
                <div className="text-xs text-gray-600 mb-3 bg-white/50 rounded-lg p-2">
                  {story.beforeAfter}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{story.program}</span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Take Pulse 360 Anywhere
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Download our mobile app and access your workouts, track progress, 
                and connect with trainers wherever you are. Available on iOS and Android.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Smartphone className="w-5 h-5" />, text: "Offline workout access" },
                  { icon: <TrendingUp className="w-5 h-5" />, text: "Real-time progress tracking" },
                  { icon: <MessageCircle className="w-5 h-5" />, text: "Direct trainer messaging" },
                  { icon: <Heart className="w-5 h-5" />, text: "Heart rate monitoring" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <div className="text-blue-400 mr-3">{item.icon}</div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  <img src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop" alt="App Store" className="w-6 h-6 mr-2" />
                  Download for iOS
                </button>
                <button className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  <img src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop" alt="Google Play" className="w-6 h-6 mr-2" />
                  Download for Android
                </button>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Mobile app preview" 
                className="rounded-2xl shadow-2xl max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stay Motivated
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get weekly fitness tips, exclusive offers, and motivation delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                value={formData.newsletter}
                onChange={(e) => handleInputChange('newsletter', e.target.value)}
                onFocus={() => handleFocus('newsletter')}
                onBlur={() => handleBlur('newsletter')}
                className="w-full px-6 py-4 rounded-full text-gray-900 placeholder-transparent focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                placeholder="Enter your email"
              />
              <label
                className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                  focusedFields.newsletter || formData.newsletter
                    ? 'top-2 text-xs text-gray-500 font-medium'
                    : 'top-1/2 -translate-y-1/2 text-gray-500'
                }`}
              >
                Enter your email
              </label>
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe Now
              </button>
            </div>
            <p className="text-white/80 text-sm mt-4">
              Get weekly fitness tips and exclusive offers
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mr-3">
                  <Activity className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-xl font-bold">Pulse 360</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transform your fitness journey with world-class training and nutrition guidance.
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Programs</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">HIIT Bootcamp</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Strength Builder</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Elite Performance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Yoga & Flexibility</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cardio Blast</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Functional Fitness</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>hello@pulse360.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>123 Fitness St, Health City</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Pulse 360. All rights reserved. Elevate your fitness journey.</p>
          </div>
        </div>
      </footer>
    </div>
  );

  const LoginPage = () => (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-8">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div 
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              <Activity className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Pulse 360</h1>
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-white/80">Sign in to continue your fitness journey</p>
          </div>

          <form className="space-y-6">
            <div className="relative">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                className="w-full px-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                placeholder="Email address"
              />
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
              <label
                className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                  focusedFields.email || formData.email
                    ? 'top-2 text-xs text-blue-400 font-medium'
                    : 'top-1/2 -translate-y-1/2 text-white/60'
                }`}
              >
                Email address
              </label>
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                onFocus={() => handleFocus('password')}
                onBlur={() => handleBlur('password')}
                className="w-full px-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm pr-12"
                placeholder="Password"
              />
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              <label
                className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                  focusedFields.password || formData.password
                    ? 'top-2 text-xs text-blue-400 font-medium'
                    : 'top-1/2 -translate-y-1/2 text-white/60'
                }`}
              >
                Password
              </label>
            </div>

            <div className="text-right">
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Login
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-white/60">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-300 backdrop-blur-sm group"
              >
                <Chrome className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-300 backdrop-blur-sm group"
              >
                <Facebook className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Facebook
              </button>
            </div>

            <div className="text-center mt-8">
              <p className="text-white/80">
                Don't have an account?{' '}
                <button 
                  onClick={() => setCurrentPage('register')}
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Sign up now
                </button>
              </p>
            </div>
          </form>
        </div>

        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            © 2025 Pulse 360. Elevate your fitness journey.
          </p>
        </div>
      </div>
    </div>
  );

  const RegisterPage = () => (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-8">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div 
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              <Activity className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Pulse 360</h1>
            <h2 className="text-3xl font-bold text-white mb-2">Join the Movement</h2>
            <p className="text-white/80">Start your transformation journey today</p>
          </div>

          <form className="space-y-6">
            <div className="relative">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                className="w-full px-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                placeholder="Email address"
              />
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
              <label
                className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                  focusedFields.email || formData.email
                    ? 'top-2 text-xs text-blue-400 font-medium'
                    : 'top-1/2 -translate-y-1/2 text-white/60'
                }`}
              >
                Email address
              </label>
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                onFocus={() => handleFocus('password')}
                onBlur={() => handleBlur('password')}
                className="w-full px-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm pr-12"
                placeholder="Password"
              />
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              <label
                className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                  focusedFields.password || formData.password
                    ? 'top-2 text-xs text-blue-400 font-medium'
                    : 'top-1/2 -translate-y-1/2 text-white/60'
                }`}
              >
                Password
              </label>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                onFocus={() => handleFocus('confirmPassword')}
                onBlur={() => handleBlur('confirmPassword')}
                className="w-full px-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm pr-12"
                placeholder="Confirm Password"
              />
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              <label
                className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                  focusedFields.confirmPassword || formData.confirmPassword
                    ? 'top-2 text-xs text-blue-400 font-medium'
                    : 'top-1/2 -translate-y-1/2 text-white/60'
                }`}
              >
                Confirm Password
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Register
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-white/60">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-300 backdrop-blur-sm group"
              >
                <Chrome className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-300 backdrop-blur-sm group"
              >
                <Facebook className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Facebook
              </button>
            </div>

            <div className="text-center mt-8">
              <p className="text-white/80">
                Already have an account?{' '}
                <button 
                  onClick={() => setCurrentPage('login')}
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Sign in
                </button>
              </p>
            </div>
          </form>
        </div>

        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            © 2025 Pulse 360. Elevate your fitness journey.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans">
      {currentPage !== 'home' && <Navigation />}
      {currentPage === 'home' && (
        <>
          <Navigation />
          <HomePage />
        </>
      )}
      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'register' && <RegisterPage />}
    </div>
  );
}

export default App;