
import { Brain, Globe, Monitor, Smartphone, Shield, Zap, Clock, Target, TrendingUp, Code } from 'lucide-react';

const Services = () => {
  const processSteps = [
    {
      number: "1",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap for your app, website, or software solution.",
      duration: "2-3 days",
      icon: Target
    },
    {
      number: "2", 
      title: "Design & Architecture",
      description: "Create stunning UI/UX designs and robust system architecture using the latest development frameworks.",
      duration: "1-2 weeks",
      icon: Monitor
    },
    {
      number: "3",
      title: "Development & Testing",
      description: "Build your custom application with rigorous testing, clean code practices, and regular progress updates.",
      duration: "3-12 weeks",
      icon: Code
    },
    {
      number: "4",
      title: "Deployment & Launch",
      description: "Launch your application with seamless deployment, comprehensive documentation, and user training.",
      duration: "1-2 days",
      icon: Zap
    },
    {
      number: "5",
      title: "Maintenance & Support",
      description: "Ongoing technical support, feature updates, and performance optimization to keep your app running smoothly.",
      duration: "Ongoing",
      icon: TrendingUp
    }
  ];

  const whyChooseUs = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "We build tailor-made applications, websites, and software solutions that perfectly match your business requirements."
    },
    {
      icon: Brain,
      title: "AI Application Specialists",
      description: "Leverage artificial intelligence to create smart applications that automate processes and provide intelligent insights."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Approach",
      description: "All our applications are designed to work seamlessly across desktop, tablet, and mobile devices."
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* How Soteria AI Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 5-step approach to deliver exceptional apps, websites, and software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-green-500 p-3 rounded-xl">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded-full">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{step.description}</p>
                <div className="bg-green-500/10 text-green-400 text-xs font-medium px-3 py-1 rounded-full inline-block">
                  {step.duration}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Start Your Project Today →
            </button>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300">
                <div className="bg-green-500 p-4 rounded-xl w-fit mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300">
              <div className="bg-green-500 p-4 rounded-xl w-fit mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Web Applications</h3>
              <p className="text-gray-400 leading-relaxed">
                Modern, responsive web applications built with the latest technologies and best practices.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300">
              <div className="bg-green-500 p-4 rounded-xl w-fit mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Solutions</h3>
              <p className="text-gray-400 leading-relaxed">
                Scalable enterprise software solutions with advanced security and integration capabilities.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300">
              <div className="bg-green-500 p-4 rounded-xl w-fit mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">24/7 Technical Support</h3>
              <p className="text-gray-400 leading-relaxed">
                Comprehensive technical support and maintenance services to keep your applications running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
