"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const InspireSection = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            The small details make
            <br />
            the difference.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Our luxurious rooms are designed with your comfort in mind. Each space is thoughtfully 
            curated with elegant details and premium amenities. Tropico is the perfect place 
            to relax and recharge.
          </p>
        </div>

        {/* Three Images */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Bedroom Image */}
          <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1470&auto=format&fit=crop"
              alt="Luxury Bedroom"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Pool/Spa Image */}
          <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1470&auto=format&fit=crop"
              alt="Relaxing Pool"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Dining Image */}
          <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1474&auto=format&fit=crop"
              alt="Fine Dining"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Book Your Room Button */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <button
            onClick={() => router.push("/pages/booking")}
            className="px-10 py-3 bg-gray-800 text-white font-semibold uppercase tracking-wider hover:bg-gray-700 transition-all duration-300 shadow-lg"
          >
            Book Your Room
          </button>
        </div>
      </div>
    </section>
  );
};

export default InspireSection;