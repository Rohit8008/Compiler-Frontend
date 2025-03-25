import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">&lt;/&gt;</span>
                <span className="text-2xl font-bold text-white">CodeVibe</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
              Features
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
              Documentation
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 