"use client";

import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const WoneHeroSection = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop"
          alt="Hotel Pool"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content - Centered */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-wide"
          data-aos="fade-up"
        >
          Welcome to Anjana Guest
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light tracking-wide"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Experience unparalleled luxury and comfort in the heart of Anuradhapura, Sri Lanka
        </p>

        {/* Call-to-Action Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button
            className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg"
            onClick={() => router.push("/pages/booking")}
          >
            Book Your Stay
            <FiArrowRight />
          </button>
          
          <button
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-black transition-all duration-300"
            onClick={() => {
              document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore More
          </button>
        </div>
      </div>

      
    </section>
  );
};

export default WoneHeroSection;
