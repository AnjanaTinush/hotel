"use client";

import React, { useState, useEffect } from 'react';
import { Home, Menu, X } from 'lucide-react';
import {
  createNavItems,
  authButtons,
  brandInfo,
  scrollPositions,
  type NavItem,
  type SectionName
} from '../constent/Navitem';
import LoginDrawer from './ui/LoginDrawer';
import SignupDrawer from './ui/SignupDrawer';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<SectionName>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isSignupOpen, setIsSignupOpen] = useState<boolean>(false);

  const navItems: NavItem[] = createNavItems(activeSection);

  const handleNavClick = (sectionName: string): void => {
    let element: Element | null = null;

    element = document.querySelector(`[data-section="${sectionName}"]`);
    if (!element && sectionName === 'services') {
      element = document.querySelector(`[data-services-container]`);
    }
    if (!element) {
      element = document.getElementById(sectionName);
    }

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      const scrollTo = scrollPositions[sectionName] || 0;
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      });
    }

    setActiveSection(sectionName as SectionName);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      const sections = document.querySelectorAll("[data-section], [data-services-container]");

      let currentSection: SectionName = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;

        if (scrollY >= top && scrollY < bottom) {
          const isServices =
            section.hasAttribute("data-services-container") ||
            section.getAttribute("id") === "services";

          if (isServices) {
            currentSection = "services";
          } else {
            const name =
              section.getAttribute("data-section") || section.getAttribute("id");
            currentSection = name as SectionName;
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }

      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAuthClick = (authType: 'login' | 'signup'): void => {
    if (authType === 'login') {
      setIsLoginOpen(true);
    } else {
      setIsSignupOpen(true);
    }
    setIsMenuOpen(false);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  const handleCloseSignup = () => {
    setIsSignupOpen(false);
  };

  const handleSwitchToSignup = () => {
    setIsSignupOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsLoginOpen(true);
  };

  return (
    <nav
      className={`bg-white fixed top-0 z-50 py-3 w-full transition-all duration-300 ${
        scrolled ? "border-b border-gray-200 shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-2.5 rounded-xl shadow-lg">
              <Home className="h-7 w-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-800">{brandInfo.name}</h1>
              <p className="text-xs text-gray-500 -mt-1">{brandInfo.tagline}</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item: NavItem) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.sectionName)}
                  className={`${
                    item.active
                      ? "text-teal-600 bg-teal-50 hover:bg-teal-100"
                      : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                  } px-4 py-2.5 rounded-lg text-lg font-${
                    item.active ? "semibold" : "medium"
                  } transition-all duration-200 cursor-pointer border-none bg-transparent`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Auth */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => handleAuthClick('login')}
                className="text-gray-700 hover:text-teal-600 px-4 py-2 text-lg font-medium transition-colors duration-200"
              >
                {authButtons.login.text}
              </button>
              <button 
                onClick={() => handleAuthClick('signup')}
                className="bg-white text-[#009b8e] px-6 py-2.5 border-2 border-[#009b8e] text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-all duration-200"
              >
                {authButtons.signup.text}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-50 inline-flex items-center justify-center p-2.5 rounded-xl text-gray-600 hover:text-teal-600 hover:bg-gray-100 transition-all duration-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
            {navItems.map((item: NavItem) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.sectionName)}
                className={`${
                  item.active
                    ? "text-teal-600 bg-teal-50"
                    : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                } block px-4 py-3 rounded-lg text-base font-${
                  item.active ? "semibold" : "medium"
                } transition-colors duration-200 cursor-pointer w-full text-left border-none bg-transparent`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200 mt-4">
              <div className="flex flex-col space-y-3 px-2">
                <button 
                  onClick={() => handleAuthClick('login')}
                  className="text-gray-700 hover:text-teal-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-left"
                >
                  {authButtons.login.text}
                </button>
                <button 
                  onClick={() => handleAuthClick('signup')}
                  className="bg-black text-white px-6 py-3 rounded-lg text-base font-semibold uppercase tracking-wider shadow-md transition-all duration-100 w-full"
                >
                  {authButtons.signup.text}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Drawer Modal */}
      <LoginDrawer
        isOpen={isLoginOpen}
        onClose={handleCloseLogin}
        onSwitchToSignup={handleSwitchToSignup}
      />

      {/* Signup Drawer Modal */}
      <SignupDrawer
        isOpen={isSignupOpen}
        onClose={handleCloseSignup}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </nav>
  );
};

export default Navbar;
