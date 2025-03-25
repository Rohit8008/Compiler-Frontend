import React, { useState } from 'react';
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import Navbar from './Navbar';
import axios from '../config/axios';
import ForgotPasswordModal from './ForgotPasswordModal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InputField = ({ type, name, value, onChange, placeholder, icon: Icon }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <Icon className="h-5 w-5 text-white/50" />
    </div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="mt-1 block w-full pl-10 px-4 py-3 bg-white/10 border border-white/20 rounded-lg shadow-lg backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-300"
      placeholder={placeholder}
    />
  </div>
);

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', rememberMe: false });
  const [loading, setLoading] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const { data } = await axios.post(endpoint, formData, { withCredentials: true });

      if (data.success) {
        toast.success(isLogin ? 'Successfully logged in!' : 'Account created successfully!', {
          position: 'top-right',
          icon: '🎉',
        });
        // navigate('/');
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      
      toast.error(err.message || 'Something went wrong', {
        position: 'top-right',
        icon: '⚠️',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} theme="light" />
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg">Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">CodeVibe</span></h2>
            <p className="text-lg text-white/80 mb-8">The future of collaborative coding</p>

            <div className="flex backdrop-blur-md bg-white/10 rounded-xl p-1.5 mb-8 border border-white/20">
              {['Login', 'Sign Up'].map((text, index) => (
                <button
                  key={text}
                  onClick={() => setIsLogin(index === 0)}
                  className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-all duration-300 ${
                    (isLogin && index === 0) || (!isLogin && index === 1)
                      ? 'bg-white text-purple-600 shadow-lg'
                      : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  {text}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {!isLogin && <InputField type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" icon={UserIcon} />}
            <InputField type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" icon={EnvelopeIcon} />
            <InputField type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" icon={LockClosedIcon} />

            {isLogin && (
              <div className="flex items-center justify-between mt-4">
                <label className="flex items-center text-sm text-white">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-white/20 bg-white/10 text-purple-600 focus:ring-2 focus:ring-white/40"
                  />
                  <span className="ml-2">Remember me</span>
                </label>
                <button type="button" onClick={() => setIsForgotPasswordOpen(true)} className="font-medium text-white hover:text-white/80 transition-colors duration-300">
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-3 px-4 rounded-lg text-base font-medium text-purple-600 bg-white hover:bg-white/90 focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-purple-500 shadow-lg transition-all duration-300 backdrop-blur-xl ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : isLogin ? 'Sign In' : 'Create Account'}
            </button>

            {!isLogin && (
              <p className="mt-4 text-center text-sm text-white/70">
                By signing up, you agree to our{' '}
                <a href="#" className="text-white hover:text-white/80 underline">Terms</a> and{' '}
                <a href="#" className="text-white hover:text-white/80 underline">Privacy Policy</a>.
              </p>
            )}
          </form>
        </div>
      </div>

      <ForgotPasswordModal isOpen={isForgotPasswordOpen} onClose={() => setIsForgotPasswordOpen(false)} />
    </>
  );
};

export default AuthForm;
