
import { Zap, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-black/20 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white">DroneVision</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading the future of aerial technology with innovative drones designed for professionals and enthusiasts alike.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#models" className="text-gray-300 hover:text-cyan-400 transition-colors">Models</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>phanimallampally@gmail.com</li>
              <li>+91 6301466859</li>
              <li>drone technology<br />5100 dallas hwy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} DroneVision. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};