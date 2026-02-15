"use client";

import React, { useEffect, useState } from "react";
import { FiSearch, FiCalendar, FiUsers } from "react-icons/fi";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const WoneHeroSection = () => {
  const router = useRouter();
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [people, setPeople] = useState(2);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSearch = () => {
    // Navigate to booking page with query parameters
    router.push(`/pages/booking?from=${fromDate}&to=${toDate}&people=${people}`);
  };

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
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content - Centered */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 leading-tight tracking-[0.15em] uppercase"
          data-aos="fade-up"
        >
          A Haven of Opulence and Tranquility
        </h1>

        <p
          className="text-sm sm:text-base md:text-xl text-white/90 mb-10 max-w-3xl mx-auto font-light tracking-wide"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Where Timeless Elegance Meets Modern Luxury in the Heart of RITZIO, Offering Unparalleled Comfort and Exquisite Service.
        </p>

        {/* Booking Section */}
        <div
          className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-4 max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* From Date */}
            <div className="flex flex-col text-left">
              <label className="text-xs text-gray-600 mb-1 flex items-center gap-1">
                <FiCalendar className="w-3 h-3" />
                Check-in
              </label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 text-gray-800"
                placeholder="Select date"
              />
            </div>

            {/* To Date */}
            <div className="flex flex-col text-left">
              <label className="text-xs text-gray-600 mb-1 flex items-center gap-1">
                <FiCalendar className="w-3 h-3" />
                Check-out
              </label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 text-gray-800"
                placeholder="Select date"
              />
            </div>

            {/* Number of People */}
            <div className="flex flex-col text-left">
              <label className="text-xs text-gray-600 mb-1 flex items-center gap-1">
                <FiUsers className="w-3 h-3" />
                Guests
              </label>
              <select
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 text-gray-800 bg-white cursor-pointer"
              >
                <option value={1}>1 Person</option>
                <option value={2}>2 People</option>
                <option value={3}>3 People</option>
                <option value={4}>4 People</option>
                <option value={5}>5 People</option>
                <option value={6}>6+ People</option>
              </select>
            </div>

            {/* Search Button */}
            <div>
              <button
                onClick={handleSearch}
                className="w-full px-6 py-3 bg-[#009b8e] text-white font-semibold rounded-md hover:bg-[#007a6f] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                Search
                <FiSearch className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default WoneHeroSection;
