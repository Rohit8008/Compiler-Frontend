import React, { useState } from 'react';
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ForgotPasswordModal from './ForgotPasswordModal';

const InputField = ({ type, name, value, onChange, placeholder, icon: Icon }) => (
  <div className="relative group">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <Icon className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300" />
    </div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="block w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-200/20 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600/50 transition-all duration-300"
      placeholder={placeholder}
    />
  </div>
);

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', rememberMe: false });
  const [loading, setLoading] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = isLogin 
        ? await login(formData.email, formData.password)
        : await register(formData.name, formData.email, formData.password);

      if (result.success) {
        toast.success(isLogin ? 'Successfully logged in!' : 'Account created successfully!', {
          position: 'top-right',
          icon: '🎉',
        });
        navigate('/');
      } else {
        throw new Error(result.message);
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 backdrop-blur-xl bg-white/80 p-8 rounded-2xl shadow-2xl border border-blue-100">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 drop-shadow-lg">
              Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"> RealCRM</span>
            </h2>
            <p className="mt-2 text-lg text-gray-600">Transform Your Property Management</p>

            <div className="mt-8 flex backdrop-blur-md bg-white/50 rounded-xl p-1.5 border border-blue-100">
              {['Login', 'Sign Up'].map((text, index) => (
                <button
                  key={text}
                  onClick={() => setIsLogin(index === 0)}
                  className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-all duration-300 ${
                    (isLogin && index === 0) || (!isLogin && index === 1)
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-white/50'
                  }`}
                >
                  {text}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {!isLogin && (
              <InputField
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                icon={UserIcon}
              />
            )}
            <InputField
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              icon={EnvelopeIcon}
            />
            <InputField
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              icon={LockClosedIcon}
            />

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600/50 bg-white/5"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={() => setIsForgotPasswordOpen(true)}
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-300"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-3 px-4 rounded-xl text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:ring-offset-2 focus:ring-offset-blue-50 shadow-lg transition-all duration-300 ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : isLogin ? 'Sign In' : 'Create Account'}
            </button>

            {!isLogin && (
              <p className="mt-4 text-center text-sm text-gray-500">
                By signing up, you agree to our{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors duration-300">Terms</a> and{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors duration-300">Privacy Policy</a>.
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
