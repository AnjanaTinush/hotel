"use client";

import React, { useState } from 'react';
import { Eye, EyeOff, X, ArrowRight, Mail, Lock, CheckCircle, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode'; // You'll need to install this: npm install jwt-decode
import Image from 'next/image';
import { heroImagesArray } from '../../../../public/assets/imageUrls';

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e :any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showToast = (message : any, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 5000);
  };

  

  const goToSignup = () => {
    router.push('/pages/Signup');
  };

  const goToHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed top-4 right-4 z-50 flex items-center p-4 rounded-lg shadow-lg transition-all duration-300 ${
          toast.type === 'success' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {toast.type === 'success' ? (
            <CheckCircle className="h-5 w-5 mr-2" />
          ) : (
            <AlertCircle className="h-5 w-5 mr-2" />
          )}
          <span className="font-medium">{toast.message}</span>
        </div>
      )}

      {/* Left Side - Image with Overlay Text */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        {/* Background Image */}

        {/* Full-bleed image only (no overlay text) */}
        <Image
          src="https://i.pinimg.com/1200x/19/f9/01/19f90100271e81afe07242951b5c6e11.jpg"
          alt="Luxury Hotel Room"
          fill
          className="object-cover"
          priority
        />
      </div>
        
       
      
    

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-black relative">
        <div className="max-w-md w-full">
          {/* Close Button */}
          <button
            onClick={goToHome}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors duration-200"
            disabled={isLoading}
          >
            <X className="h-6 w-6" />
          </button>

          {/* Form Header */}
          <div className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-8 tracking-wider">
              SIGN IN TO YOUR ACCOUNT
            </h2>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            {/* Email Address */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm tracking-wider"
                placeholder="EMAIL ADDRESS"
                required
                disabled={isLoading}
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-6 py-4 pr-12 bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm tracking-wider"
                placeholder="PASSWORD"
                required
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                disabled={isLoading}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 bg-transparent border-white text-white focus:ring-white focus:ring-offset-black rounded"
                  disabled={isLoading}
                />
                <label htmlFor="remember" className="ml-2 block text-white tracking-wide">
                  REMEMBER ME
                </label>
              </div>
              <a 
                href="#" 
                className={`text-white hover:text-gray-300 transition-colors duration-200 tracking-wide ${
                  isLoading ? 'opacity-50 pointer-events-none' : ''
                }`}
              >
                FORGOT PASSWORD?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="button"
              onClick={() =>{router.push('/pages/adminDashboard')}}
              disabled={isLoading}
              className="w-full bg-white text-black py-4 px-6 font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center justify-center tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                  SIGNING IN...
                </>
              ) : (
                'SIGN IN'
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-black text-gray-400 tracking-wide">OR CONTINUE WITH</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <button 
                className="w-full py-4 px-4 border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-200 disabled:opacity-50 tracking-widest"
                disabled={isLoading}
              >
                GOOGLE
              </button>
              <button 
                className="w-full py-4 px-4 border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-200 disabled:opacity-50 tracking-widest"
                disabled={isLoading}
              >
                FACEBOOK
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center text-sm text-white">
            <span className="tracking-wide">DON'T HAVE AN ACCOUNT?{' '}</span>
            <button
              onClick={goToSignup}
              className="text-white hover:text-gray-300 font-medium transition-colors duration-200 disabled:opacity-50 tracking-wide underline"
              disabled={isLoading}
            >
              SIGN UP HERE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;