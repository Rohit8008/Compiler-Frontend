import React from 'react';
import { User, Settings, LogOut, ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';

function ProfileDropdown({ isOpen, onClose, user, onLogout }) {
  if (!isOpen) return null;

  const handleLogout = (e) => {
    e.preventDefault();
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{user?.name || 'User'}</p>
            <p className="text-xs text-gray-500 truncate">{user?.email || 'user@example.com'}</p>
          </div>
        </div>
        
        <div className="mt-2">
          {user?.isAccountVerified ? (
            <span className="flex items-center text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
              <CheckCircle size={14} className="mr-1" />
              Verified Account
            </span>
          ) : (
            <span className="flex items-center text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
              <AlertCircle size={14} className="mr-1" />
              Unverified Account
            </span>
          )}
        </div>
      </div>
      
      <div className="py-1">
        <a href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          <User size={16} className="mr-2 text-gray-500" />
          Your Profile
        </a>
        <a href="/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          <Settings size={16} className="mr-2 text-gray-500" />
          Settings
        </a>
      </div>
      
      <div className="py-1 border-t border-gray-100">
        <button 
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
        >
          <LogOut size={16} className="mr-2" />
          Sign out
        </button>
      </div>
    </div>
  );
}

export default ProfileDropdown; 