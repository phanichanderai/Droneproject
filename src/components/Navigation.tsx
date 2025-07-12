import  { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">DroneVision</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#models" className="text-white hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">
                Models
              </a>
              <a href="#features" className="text-white hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#contact" className="text-white hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
              Shop Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-md rounded-lg mt-2">
              <a href="#home" className="text-white hover:text-cyan-400 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#models" className="text-white hover:text-cyan-400 block px-3 py-2 text-base font-medium">
                Models
              </a>
              <a href="#features" className="text-white hover:text-cyan-400 block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#contact" className="text-white hover:text-cyan-400 block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
