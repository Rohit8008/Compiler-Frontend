import React from 'react';

const NavItem = ({ icon, text, active, isSelected, onClick, showText = true }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 ${
        active
          ? 'bg-blue-100 text-blue-800'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <div className="flex items-center justify-center w-6 h-6">
        {icon}
      </div>
      {showText && (
        <span className="ml-3 text-sm font-medium">{text}</span>
      )}
    </div>
  );
};

export default NavItem; 