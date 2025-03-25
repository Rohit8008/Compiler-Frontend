import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="text-3xl font-extrabold text-white">&lt;/&gt;</span>
              <span className="text-2xl font-extrabold text-white tracking-wide">CodeVibe</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Features", "Documentation", "About"].map((item) => (
              <a key={item} href="#" className="text-white/80 hover:text-white text-lg transition duration-300">
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {["Features", "Documentation", "About"].map((item) => (
            <a key={item} href="#" className="text-white text-2xl font-medium hover:text-gray-300 transition duration-300">
              {item}
            </a>
          ))}
          <button 
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsOpen(false)}
          >
            <XMarkIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
