
import { Award, Users, Target, Globe, TrendingUp, BarChart3, Shield } from 'lucide-react';

const About = () => {
  const impactStats = [
    {
      icon: TrendingUp,
      title: "Total Project Value",
      value: "₦2.5B+",
      change: "+25% from last year",
      color: "text-green-400"
    },
    {
      icon: Users,
      title: "Active Clients",
      value: "120+",
      change: "+30% from last year", 
      color: "text-blue-400"
    },
    {
      icon: BarChart3,
      title: "Project Success Rate",
      value: "98.5%",
      change: "+2% from last year",
      color: "text-purple-400"
    },
    {
      icon: Globe,
      title: "Apps & Websites Built",
      value: "250+",
      change: "+40% from last year",
      color: "text-indigo-400"
    }
  ];

  const testimonials = [
    {
      name: "Adebayo Olumide",
      role: "CEO, TechStart Nigeria",
      location: "Lagos",
      avatar: "AO",
      rating: 5,
      quote: "Soteria AI Technologies built our entire e-commerce platform from scratch. The mobile app and web application exceeded our expectations. Sales increased by 300% in 6 months!"
    },
    {
      name: "Chioma Nwachukwu", 
      role: "Founder, MedTech Solutions",
      location: "Abuja",
      avatar: "CN",
      rating: 5,
      quote: "They developed a comprehensive hospital management system for us. The AI-powered patient tracking and automated scheduling features have revolutionized our operations."
    },
    {
      name: "Emeka Okafor",
      role: "CTO, FinServe Limited", 
      location: "Port Harcourt",
      avatar: "EO",
      rating: 5,
      quote: "The custom banking software they built handles over 10,000 transactions daily. The security features and mobile integration are world-class. Highly recommend!"
    },
    {
      name: "Fatima Ibrahim",
      role: "Director, EduTech Institute",
      location: "Kaduna", 
      avatar: "FI",
      rating: 5,
      quote: "Our online learning platform serves 5,000+ students. The AI-powered recommendation system and mobile app have transformed how we deliver education."
    },
    {
      name: "Olumide Adegoke",
      role: "MD, Logistics Pro",
      location: "Ibadan",
      avatar: "OA", 
      rating: 5,
      quote: "The fleet management software with real-time tracking has optimized our delivery operations. We've reduced costs by 40% and improved customer satisfaction significantly."
    },
    {
      name: "Kemi Adebayo",
      role: "Owner, Fashion Hub",
      location: "Abeokuta",
      avatar: "KA",
      rating: 5,
      quote: "They built our e-commerce website and mobile app. The inventory management system and customer analytics have helped us scale from local to nationwide operations."
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Live Impact Dashboard */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Development Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time metrics showcasing the success of our software development projects across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gray-700 p-2 rounded-lg">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">{stat.title}</p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-green-400 text-sm">{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Recent Success Stories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Recent Project Highlights</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-300 italic mb-2">
                    "Built a comprehensive ERP system that handles inventory, sales, and customer management. The mobile app allows remote access from anywhere."
                  </p>
                  <p className="text-green-400 text-sm">- Manufacturing Company, Lagos</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-300 italic mb-2">
                    "Developed an AI-powered recruitment platform that matches candidates with jobs automatically. Reduced hiring time by 70%."
                  </p>
                  <p className="text-green-400 text-sm">- HR Solutions, Abuja</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Technology Expertise</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Mobile Apps (iOS/Android)</span>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '120px'}}></div>
                    <span className="text-green-400 font-semibold">Expert</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Web Applications</span>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '110px'}}></div>
                    <span className="text-green-400 font-semibold">Expert</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">AI/ML Applications</span>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '100px'}}></div>
                    <span className="text-green-400 font-semibold">Advanced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say About Our Development Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-green-400 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                
                <p className="text-gray-300 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted Development Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-16">
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-4 rounded-full mb-4">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Certified Developers</h3>
              <p className="text-gray-400 text-sm">ISO certified development processes</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-4 rounded-full mb-4">
                <Globe className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Global Standards</h3>
              <p className="text-gray-400 text-sm">International development practices</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-4 rounded-full mb-4">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-400 text-sm">Skilled developers and designers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-4 rounded-full mb-4">
                <Award className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Award Winning</h3>
              <p className="text-gray-400 text-sm">Recognized for development excellence</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Start Your Development Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
