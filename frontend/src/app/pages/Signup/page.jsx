"use client";

import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  X,
  ArrowRight,
  Mail,
  Lock,
  User,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SignupPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 5000);
  };

  const handleSubmit = async () => {
    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      showToast("Please fill in all fields", "error");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showToast("Passwords do not match", "error");
      return;
    }

    if (formData.password.length < 6) {
      showToast("Password must be at least 6 characters long", "error");
      return;
    }

    setIsLoading(true);

    try {
      const signupData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      const response = await signup(signupData);

      // Success handling
      showToast(
        "Account created successfully! Redirecting to home page...",
        "success"
      );

      // Clear form
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Navigate to home page after a short delay
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      // Error handling
      const errorMessage = error.message || "Signup failed. Please try again.";
      showToast(errorMessage, "error");
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const goToLogin = () => {
    router.push("/pages/Login");
  };

  const goToHome = () => {
    router.push("/");
  };

  const passwordsMatch =
    formData.password === formData.confirmPassword &&
    formData.confirmPassword !== "";

  return (
    <div className="min-h-screen bg-black flex">
      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed top-4 right-4 z-50 flex items-center p-4 rounded-lg shadow-lg transition-all duration-300 ${
            toast.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {toast.type === "success" ? (
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
          src="https://i.pinimg.com/1200x/31/a2/70/31a270e995ed5385078fd31220f7877b.jpg"
          alt="Luxury Hotel Room"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-black relative overflow-y-auto">
        <div className="max-w-md w-full py-8">
          {/* Close Button */}
          <button
            onClick={goToHome}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors duration-200"
            disabled={isLoading}
          >
            <X className="h-6 w-6" />
          </button>

          {/* Form Header */}
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-8 tracking-wider">
              CREATE YOUR ACCOUNT
            </h2>
          </div>

          {/* Signup Form */}
          <div className="space-y-5">
            {/* Full Name */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm tracking-wider"
                placeholder="FULL NAME"
                required
                disabled={isLoading}
              />
            </div>

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
                type={showPassword ? "text" : "password"}
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

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`w-full px-6 py-4 pr-12 bg-transparent border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 text-sm tracking-wider ${
                  formData.confirmPassword && !passwordsMatch
                    ? "border-red-500 focus:ring-red-500"
                    : "border-white focus:ring-white"
                }`}
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
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Password Match Indicator */}
            {formData.confirmPassword && !passwordsMatch && (
              <p className="text-xs text-red-400 tracking-wide">
                PASSWORDS DO NOT MATCH
              </p>
            )}
            {passwordsMatch && (
              <p className="text-xs text-green-400 flex items-center tracking-wide">
                <CheckCircle className="h-3 w-3 mr-1" />
                PASSWORDS MATCH
              </p>
            )}

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 mt-1 bg-transparent border-white text-white focus:ring-white focus:ring-offset-black rounded"
                required
                disabled={isLoading}
              />
              <label
                htmlFor="terms"
                className="ml-3 block text-xs text-white tracking-wide leading-relaxed"
              >
                I AGREE TO THE{" "}
                <a
                  href="#"
                  className="underline hover:text-gray-300 transition-colors duration-200"
                >
                  TERMS OF SERVICE
                </a>{" "}
                AND{" "}
                <a
                  href="#"
                  className="underline hover:text-gray-300 transition-colors duration-200"
                >
                  PRIVACY POLICY
                </a>
              </label>
            </div>

            {/* Create Account Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-white text-black py-4 px-6 font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center justify-center tracking-widest disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                  CREATING ACCOUNT...
                </>
              ) : (
                "CREATE ACCOUNT"
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
                <span className="px-4 bg-black text-gray-400 tracking-wide">
                  OR SIGN UP WITH
                </span>
              </div>
            </div>

            {/* Social Signup */}
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

          {/* Sign In Link */}
          <div className="mt-8 text-center text-sm text-white">
            <span className="tracking-wide">ALREADY HAVE AN ACCOUNT? </span>
            <button
              onClick={goToLogin}
              className="text-white hover:text-gray-300 font-medium transition-colors duration-200 disabled:opacity-50 tracking-wide underline"
              disabled={isLoading}
            >
              SIGN IN HERE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
