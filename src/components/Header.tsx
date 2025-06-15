
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="bg-green-500 p-2 rounded-lg">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-green-500 font-bold text-sm">S</span>
                </div>
              </div>
              <h1 className="text-xl font-bold text-white">
                Soteria AI Technologies
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Home</a>
            <a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">Services</a>
            <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-green-400 hover:text-green-300 transition-colors px-4 py-2">
              Support
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-colors">
              Sign In
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-green-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-800">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-green-400">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-green-400">Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-green-400">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-green-400">Contact</a>
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <button className="text-green-400 hover:text-green-300 transition-colors px-4 py-2 text-left">
                  Support
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-colors">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
