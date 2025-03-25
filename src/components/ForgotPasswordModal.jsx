import React, { useState } from 'react';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import axios from '../config/axios';

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: email, 2: otp & new password
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('/api/auth/send-reset-otp', { email });
      if (response.data.success) {
        setStep(2);
        setStatus({
          type: 'success',
          message: 'OTP has been sent to your email'
        });
      } else {
        setStatus({
          type: 'error',
          message: response.data.message
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.response?.data?.message || 'Something went wrong'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('/api/auth/reset-password', {
        email,
        otp,
        newPassword
      });

      if (response.data.success) {
        setStatus({
          type: 'success',
          message: 'Password reset successful!'
        });
        setTimeout(() => {
          onClose();
          setEmail('');
          setOtp('');
          setNewPassword('');
          setStep(1);
          setStatus({ type: '', message: '' });
        }, 2000);
      } else {
        setStatus({
          type: 'error',
          message: response.data.message
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.response?.data?.message || 'Something went wrong'
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 w-full max-w-md border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-4">Reset Password</h3>
        <p className="text-white/80 mb-6">
          {step === 1 
            ? 'Enter your email address to receive an OTP'
            : 'Enter the OTP sent to your email and your new password'
          }
        </p>

        {status.message && (
          <div className={`mb-4 p-3 rounded-lg text-sm ${
            status.type === 'success' 
              ? 'bg-green-500/10 border border-green-500/50 text-white' 
              : 'bg-red-500/10 border border-red-500/50 text-white'
          }`}>
            {status.message}
          </div>
        )}

        <form onSubmit={step === 1 ? handleSendOTP : handleResetPassword} className="space-y-4">
          {step === 1 ? (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-5 w-5 text-white/50" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full pl-10 px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                shadow-lg backdrop-blur-md text-white placeholder-white/50 focus:outline-none 
                focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>
          ) : (
            <>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="block w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                shadow-lg backdrop-blur-md text-white placeholder-white/50 focus:outline-none 
                focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-300"
                placeholder="Enter OTP"
                maxLength={6}
              />
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockClosedIcon className="h-5 w-5 text-white/50" />
                </div>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="block w-full pl-10 px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                  shadow-lg backdrop-blur-md text-white placeholder-white/50 focus:outline-none 
                  focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-300"
                  placeholder="New Password"
                />
              </div>
            </>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => {
                if (step === 2) {
                  setStep(1);
                  setOtp('');
                  setNewPassword('');
                } else {
                  onClose();
                  setEmail('');
                  setStep(1);
                }
                setStatus({ type: '', message: '' });
              }}
              className="flex-1 py-3 px-4 rounded-lg text-sm font-medium
              text-white border border-white/20 hover:bg-white/10 focus:outline-none 
              focus:ring-2 focus:ring-white/40 transition-all duration-300"
            >
              {step === 2 ? 'Back' : 'Cancel'}
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium
              text-purple-600 bg-white hover:bg-white/90 focus:outline-none focus:ring-2 
              focus:ring-white/60 shadow-lg transition-all duration-300
              ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
              ) : (
                step === 1 ? 'Send OTP' : 'Reset Password'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordModal; 