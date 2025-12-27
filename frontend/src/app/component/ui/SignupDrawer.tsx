"use client";

import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, X, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface SignupDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const SignupDrawer: React.FC<SignupDrawerProps> = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showToast = (message: string, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 5000);
  };

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      showToast('Please fill in all fields', 'error');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showToast('Passwords do not match', 'error');
      return;
    }

    if (formData.password.length < 6) {
      showToast('Password must be at least 6 characters', 'error');
      return;
    }

    setIsLoading(true);
    
    try {
      // Add your signup API call here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated delay
      showToast('Account created successfully!', 'success');
      setTimeout(() => {
        onClose();
        onSwitchToLogin();
      }, 1000);
    } catch (error) {
      showToast('Registration failed. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwitchToLogin = () => {
    onClose();
    setTimeout(() => {
      onSwitchToLogin();
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[500px] lg:w-[900px] bg-black z-50 shadow-2xl flex overflow-hidden"
          >
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

            {/* Left Side - Signup Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-black relative overflow-y-auto">
              <div className="max-w-md w-full">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                  disabled={isLoading}
                >
                  <X className="h-6 w-6" />
                </button>
                {/* Form Header */}
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-2 tracking-wider">
                    CREATE ACCOUNT
                  </h2>
                  <p className="text-gray-400 text-sm tracking-wide">
                    Join Anjana Guest family
                  </p>
                </div>

                {/* Signup Form */}
                <div className="space-y-5">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3 bg-transparent border border-white/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm tracking-wider"
                        placeholder="FIRST NAME"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3 bg-transparent border border-white/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm tracking-wider"
                        placeholder="LAST NAME"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 bg-transparent border border-white/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm tracking-wider"
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
                      className="w-full px-5 py-3 pr-12 bg-transparent border border-white/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm tracking-wider"
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
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {/* Confirm Password */}
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 pr-12 bg-transparent border border-white/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm tracking-wider"
                      placeholder="CONFIRM PASSWORD"
                      required
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                      disabled={isLoading}
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 h-4 w-4 bg-transparent border-white/30 text-white focus:ring-white focus:ring-offset-black rounded"
                      disabled={isLoading}
                    />
                    <label htmlFor="terms" className="ml-2 block text-white/70 tracking-wide text-xs leading-relaxed">
                      I AGREE TO THE{' '}
                      <a href="#" className="text-white underline hover:text-gray-300">TERMS OF SERVICE</a>
                      {' '}AND{' '}
                      <a href="#" className="text-white underline hover:text-gray-300">PRIVACY POLICY</a>
                    </label>
                  </div>

                  {/* Sign Up Button */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full bg-white text-black py-4 px-6 font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center justify-center tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                        CREATING ACCOUNT...
                      </>
                    ) : (
                      'CREATE ACCOUNT'
                    )}
                  </button>
                </div>

                {/* Divider */}
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-black text-gray-500 tracking-wide text-xs">OR CONTINUE WITH</span>
                    </div>
                  </div>

                  {/* Social Login */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <button 
                      className="w-full py-3 px-4 border border-white/30 text-white text-xs font-medium hover:bg-white hover:text-black transition-all duration-200 disabled:opacity-50 tracking-widest"
                      disabled={isLoading}
                    >
                      GOOGLE
                    </button>
                    <button 
                      className="w-full py-3 px-4 border border-white/30 text-white text-xs font-medium hover:bg-white hover:text-black transition-all duration-200 disabled:opacity-50 tracking-widest"
                      disabled={isLoading}
                    >
                      FACEBOOK
                    </button>
                  </div>
                </div>

                {/* Login Link */}
                <div className="mt-6 text-center text-sm text-white">
                  <span className="tracking-wide text-gray-400 text-xs">ALREADY HAVE AN ACCOUNT? </span>
                  <button
                    onClick={handleSwitchToLogin}
                    className="text-white hover:text-gray-300 font-medium transition-colors duration-200 disabled:opacity-50 tracking-wide text-xs underline"
                    disabled={isLoading}
                  >
                    SIGN IN HERE
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Image (hidden on small screens) */}
            <div className="hidden lg:flex lg:w-1/2 relative">
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1480&auto=format&fit=crop"
                alt="Luxury Hotel Room"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <h3 className="text-3xl font-serif mb-2">Join Us Today</h3>
                <p className="text-white/80">Create an account to access exclusive offers</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SignupDrawer;
