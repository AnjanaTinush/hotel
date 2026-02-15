"use client";

import { useState, useEffect } from "react";
import Herosection from "./component/Herosection";
import Navbar from "./component/Navbar";
import BlackNavbar from "./component/BlackNavbar";
import PopulerSection from "./component/populersection";
import Contactus from "./component/Contactus";
import Explore from "./component/Explore";
import Chatboticon from "./pages/chatbot/chatboticon";
import Chat from "./pages/chatbot/chat";
import { motion } from 'framer-motion';
import InspireSection from './component/ui/InspireSection';
import RoomsSection from './component/ui/roomsSection';
import ReviewSection from './component/ui/reviewSection';
import Ourstory from './component/ui/Ourstory';
import HeroVideo from './component/ui/heroVideo';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [showBlackNav, setShowBlackNav] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    console.log('Chat toggled. Is open:', !isChatOpen);
  };

  const closeChat = () => {
    setIsChatOpen(false);
    console.log('Chat closed');
  };

  useEffect(() => {
    if (isChatOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isChatOpen]);

  // Scroll-based navbar switching: switch at 3/4 hero section height
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const threshold = heroHeight * 0.75; // 3/4 of hero height
        setShowBlackNav(window.scrollY >= threshold);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Main Content */}
      <div 
        className="transition-all duration-300"
        style={{
          opacity: isChatOpen ? 0.5 : 1,
        }}
      >
        <Navbar visible={!showBlackNav} />
        <BlackNavbar visible={showBlackNav} />
        
        <section id="home" className="scroll-mt-24">
          <Herosection />
        </section>

        <section id="story" className="scroll-mt-24">
          <Ourstory />
        </section>

        <section id="video" className="scroll-mt-24">
          <HeroVideo />
        </section>

        {/* <section id="inspire" className="scroll-mt-24">
          <InspireSection />
        </section> */}

        {/* <section id="places" className="scroll-mt-24">
          <PopulerSection />
        </section> */}

        <section id="rooms" className="scroll-mt-24">
          <RoomsSection />
        </section>

        <section id="reviews" className="scroll-mt-24">
          <ReviewSection />
        </section>
        
        <section id="explore" className="scroll-mt-24">
          <Explore />
        </section>

       

        <section id="contact" className="scroll-mt-24">
          <Contactus />
        </section>
        <svg width="210" height="50" viewBox="0 0 210 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  {/* Line path */}
  <motion.path
    d="M0.5 39C68.565 -0.971867 113.11 -8.86864 204.5 11"
    stroke="#000000"
    strokeWidth={2}
    strokeLinecap="butt"
    strokeLinejoin="round"
    fill="none"
    initial={{ pathLength: 0, opacity: 1 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2.5, ease: 'easeInOut' }}
  />

  {/* Arrowhead left */}
  <motion.path
    d="M204.5 11L201 6.5"
    stroke="#000000"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 0.3, ease: 'easeInOut', delay: 2.5 }}
  />

  {/* Arrowhead right */}
  <motion.path
    d="M204.5 11L200.5 14.5"
    stroke="#000000"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 0.3, ease: 'easeInOut', delay: 2.5 }}
  />
</svg>

      </div>

      {/* Backdrop Overlay */}
      {isChatOpen && (
        <div
          className="fixed inset-0 z-30"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 30
          }}
          onClick={closeChat}
        />
      )}

      {/* Chat Components */}
      <div>
        <Chat 
          isOpen={isChatOpen}
          onClose={closeChat}
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
        />
        
        <Chatboticon 
          onToggleChat={toggleChat}
          isChatOpen={isChatOpen}
        />
      </div>
    </div>
  );
}
