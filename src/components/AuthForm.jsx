import React, { useState } from 'react'
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'
import Navbar from './Navbar'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Navbar />
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8 backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20'>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
              Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">CodeVibe</span>
            </h2>
            <p className="text-lg text-white/80 mb-8">
              The future of collaborative coding
            </p>
            
            {/* Toggle Buttons */}
            <div className="flex backdrop-blur-md bg-white/10 rounded-xl p-1.5 mb-8 border border-white/20 ">
              <button
                onClick={() => setIsLogin(true)}
                className={`cursor-pointer flex-1 py-2.5 px-4 rounded-lg font-medium ${
                  isLogin 
                  ? 'bg-white text-purple-600 shadow-lg' 
                  : 'text-white/80 hover:bg-white/10'
                } transition-all duration-300`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`cursor-pointer flex-1 py-2.5 px-4 rounded-lg font-medium ${
                  !isLogin 
                  ? 'bg-white text-purple-600 shadow-lg' 
                  : 'text-white/80 hover:bg-white/10'
                } transition-all duration-300`}
              >
                Sign Up
              </button>
            </div>
          </div>

          <form className="mt-8 space-y-4">
            {!isLogin && (
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-white/50" />
                </div>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full pl-10 px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                  shadow-lg backdrop-blur-md text-white placeholder-white/50 focus:outline-none 
                  focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-300"
                  placeholder="Name"
                />
              </div>
            )}

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-5 w-5 text-white/50" />
              </div>
              <input
                type="email"
                required
                className="mt-1 block w-full pl-10 px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                shadow-lg backdrop-blur-md text-white placeholder-white/50 focus:outline-none 
                focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-300"
                placeholder="Email"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockClosedIcon className="h-5 w-5 text-white/50" />
              </div>
              <input
                type="password"
                required
                className="mt-1 block w-full pl-10 px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                shadow-lg backdrop-blur-md text-white placeholder-white/50 focus:outline-none 
                focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-300"
                placeholder="Password"
              />
            </div>

            {/* New Remember me and Forgot password section */}
            {isLogin && (
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/20 bg-white/10 text-purple-600 focus:ring-2 focus:ring-white/40"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-white hover:text-white/80 transition-colors duration-300">
                    Forgot password?
                  </a>
                </div>
              </div>
            )}

            <div className="mt-8">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 rounded-lg text-base font-medium
                text-purple-600 bg-white hover:bg-white/90 focus:outline-none focus:ring-2 
                focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-purple-500 
                shadow-lg transition-all duration-300 backdrop-blur-xl
                cursor-pointer"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </div>

            {/* Add Terms and Privacy Policy text for signup */}
            {!isLogin && (
              <div className="mt-4 text-center text-sm text-white/70">
                By signing up, you agree to our{' '}
                <a href="#" className="text-white hover:text-white/80 underline">
                  Terms
                </a>{' '}
                and{' '}
                <a href="#" className="text-white hover:text-white/80 underline">
                  Privacy Policy
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  )
}

export default AuthForm
