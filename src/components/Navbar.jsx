import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../context/AuthContext";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <a href="/">
              <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                &lt;/&gt;
              </span>
              <span className="text-2xl font-extrabold text-gray-900 tracking-wide">
                PropManage
              </span>
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home","Features", "Documentation", "About"].map((item) => (
              <a
                key={item}
                href='/'
                className="text-gray-600 hover:text-blue-600 text-lg font-medium transition duration-300"
              >
                {item}
              </a>
            ))}
            {!loading && (
              user ? (
                <ProfileDropdown />
              ) : (
                <a
                  href="/auth"
                  className="px-6 py-2 text-blue-600 hover:text-blue-700 font-medium transition duration-300"
                >
                  Log in
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button and Profile (if logged in) */}
          <div className="flex items-center space-x-4 md:hidden">
            {!loading && user && (
              <div className="mr-2">
                <ProfileDropdown />
              </div>
            )}
            <button
              className="text-gray-600 hover:text-blue-600 focus:outline-none transition duration-300"
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {["Home","Features", "Documentation", "About"].map((item) => (
            <a
              key={item}
              href="/"
              className="text-gray-600 hover:text-blue-600 text-2xl font-medium transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col space-y-4 mt-8">
            {!loading && !user && (
              <a
                href="/auth"
                className="px-8 py-3 text-blue-600 hover:text-blue-700 font-medium text-lg transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Log in
              </a>
            )}
          </div>
          <button
            className="absolute top-6 right-6 text-gray-600 hover:text-blue-600 transition duration-300"
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
