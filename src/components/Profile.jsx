'use client';
import { useState, useEffect } from 'react';
import axios from '../config/axios';
import { UserIcon, EnvelopeIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/api/user/data', { withCredentials: true });
      if (response.data.success) {
        setUserData(response.data.userData);
        setNewName(response.data.userData.name);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error('Failed to fetch user data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    // TODO: Implement save functionality
    setIsEditing(false);
    toast.success('Profile updated successfully!');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12 px-4">
      <ToastContainer autoClose={3000} theme="light" />
      
      <div className="max-w-2xl mx-auto backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20">
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white drop-shadow-lg">Your Profile</h1>
            <div className="flex items-center">
              {userData?.isAccountVerified ? (
                <span className="flex items-center text-white bg-green-500/20 px-4 py-2 rounded-lg backdrop-blur-md">
                  <CheckBadgeIcon className="h-5 w-5 mr-2" />
                  Verified Account
                </span>
              ) : (
                <span className="flex items-center text-white bg-yellow-500/20 px-4 py-2 rounded-lg backdrop-blur-md">
                  Unverified Account
                </span>
              )}
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="h-5 w-5 text-white/50" />
              </div>
              {isEditing ? (
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="mt-1 block w-full pl-10 px-4 py-3 bg-white/10 border border-white/20 rounded-lg shadow-lg backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent"
                />
              ) : (
                <div className="mt-1 block w-full pl-10 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white">
                  {userData?.name}
                </div>
              )}
              <label className="block text-sm font-medium text-white/70 mb-1">Name</label>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-5 w-5 text-white/50" />
              </div>
              <div className="mt-1 block w-full pl-10 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white">
                {userData?.email}
              </div>
              <label className="block text-sm font-medium text-white/70 mb-1">Email</label>
            </div>
          </div>

          {/* Account Actions */}
          <div className="flex justify-end space-x-4">
            {!userData?.isAccountVerified && (
              <button className="px-6 py-3 bg-yellow-500/80 hover:bg-yellow-500 text-white rounded-lg backdrop-blur-xl transition-all duration-300">
                Verify Account
              </button>
            )}
            <button
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className="px-6 py-3 bg-white hover:bg-white/90 text-purple-600 rounded-lg backdrop-blur-xl transition-all duration-300"
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}