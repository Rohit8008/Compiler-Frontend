const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-8 md:mb-0">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              PropManage
            </span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Privacy</a>
            <a href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Terms</a>
            <span className="text-gray-400">© 2025 PropManage. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 