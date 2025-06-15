import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Your <span className="text-green-400">Next Project</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your app, website, or software development project? Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Development Office</h4>
                  <p className="text-gray-400">Dominion Aviation College</p>
                  <p className="text-gray-400">37 Oyinlola Street, Off Bolumole</p>
                  <p className="text-gray-400">Ring Road, Ibadan, Oyo State, Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-gray-400">projects@soteria.com.ng</p>
                  <p className="text-gray-400">hello@soteria.com.ng</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-gray-400">+2348035567300</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-800 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-4">Development Hours</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Emergency Support Only</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
              <h4 className="text-lg font-semibold text-green-400 mb-2">Free Consultation</h4>
              <p className="text-gray-300 text-sm">
                Schedule a free 30-minute consultation to discuss your project requirements and get a detailed quote.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Tell Us About Your Project</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-700 text-white"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-700 text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-700 text-white"
                  placeholder="Tell us about your app, website, or software development needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Project Inquiry
                <Send size={20} />
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Typical response time: <span className="text-green-400 font-semibold">2-4 hours</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
