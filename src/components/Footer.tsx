import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-500 p-2 rounded-lg">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-green-500 font-bold text-sm">S</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">
                Soteria AI Technologies
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional app, website, and software development company specializing in AI applications. 
              We build custom technology solutions that drive business growth and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-green-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-green-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-green-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-green-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Registered Software Development Company • CAC: RC 8363264
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Applications</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Software Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>projects@soteria.com.ng</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+2348035567300</span>
              </div>
              <div className="text-sm">
                <p>Ibadan, Oyo State, Nigeria</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-green-400">Legal Information</h4>
            <div className="text-gray-400 text-sm">
              <p className="mb-2">Soteria AI Technologies Limited - Professional Software Development Company</p>
              <p>Office: Dominion Aviation College, 37 Oyinlola Street, Off Bolumole, Ring Road, Ibadan, Oyo State, Nigeria</p>
              <div className="mt-4 space-x-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2024 Soteria AI Technologies Limited. All rights reserved. | Professional App & Software Development</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
