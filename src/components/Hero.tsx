
import { ArrowRight, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gray-900 py-20 overflow-hidden min-h-screen flex items-center">
      {/* Animated Node Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Node 1 */}
        <div className="absolute top-20 left-20 w-6 h-6 bg-green-500 rounded-full opacity-60">
          <div className="w-full h-full bg-green-500 rounded-full animate-ping"></div>
        </div>
        
        {/* Node 2 */}
        <div className="absolute top-40 right-32 w-4 h-4 bg-green-400 rounded-full opacity-50">
          <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
        </div>
        
        {/* Node 3 */}
        <div className="absolute bottom-40 left-32 w-8 h-8 bg-green-600 rounded-full opacity-40">
          <div className="w-full h-full bg-green-600 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Node 4 */}
        <div className="absolute top-60 left-1/2 w-5 h-5 bg-green-300 rounded-full opacity-70">
          <div className="w-full h-full bg-green-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        {/* Node 5 */}
        <div className="absolute bottom-60 right-20 w-7 h-7 bg-green-500 rounded-full opacity-50">
          <div className="w-full h-full bg-green-500 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Node 6 */}
        <div className="absolute top-32 left-2/3 w-4 h-4 bg-green-400 rounded-full opacity-60">
          <div className="w-full h-full bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        {/* Node 7 */}
        <div className="absolute bottom-20 left-1/4 w-6 h-6 bg-green-600 rounded-full opacity-45">
          <div className="w-full h-full bg-green-600 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        </div>
        
        {/* Node 8 */}
        <div className="absolute top-1/2 right-40 w-5 h-5 bg-green-300 rounded-full opacity-55">
          <div className="w-full h-full bg-green-300 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        </div>
        
        {/* Floating particles - now all animated */}
        <div className="absolute top-80 left-40 w-2 h-2 bg-green-400 rounded-full opacity-30">
          <div className="w-full h-full bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute bottom-80 right-60 w-2 h-2 bg-green-500 rounded-full opacity-40">
          <div className="w-full h-full bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute top-96 right-1/4 w-2 h-2 bg-green-300 rounded-full opacity-35">
          <div className="w-full h-full bg-green-300 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Central Icon */}
        <div className="mb-8 flex justify-center">
          <div className="bg-green-500 p-6 rounded-2xl shadow-2xl">
            <Code className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="text-white">Soteria AI</span>{' '}
          <span className="text-green-400">Technologies</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Professional{' '}
          <span className="text-green-400 font-semibold">app, website & software development</span> company.{' '}
          Specializing in{' '}
          <span className="text-green-400 font-semibold">AI applications</span> and cutting-edge technology solutions.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">150+</div>
            <p className="text-gray-400">Apps & Websites Built</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">80+</div>
            <p className="text-gray-400">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">98%</div>
            <p className="text-gray-400">Project Success Rate</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto shadow-lg hover:shadow-xl">
            Start Your Project
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Custom software development</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>AI-powered applications</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Mobile & web solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
