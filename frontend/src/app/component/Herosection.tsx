"use client";

import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { InteractiveGridPattern } from "./bsckground/InteractiveGridPattern";
import { heroImagesArray } from "../../../public/assets/imageUrls";
import BounceCards from "./cards/BounceCards";

const WoneHeroSection = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="home"
      className="scroll-mt-24 min-h-screen bg-[#ffffff] flex flex-col pt-6 pb-4 relative overflow-hidden font-inter mt-18"
    >
      {/* Background Pattern */}
      <InteractiveGridPattern className="absolute inset-0 w-full h-full [mask-image:radial-gradient(700px_circle_at_center,white,transparent)] pointer-events-none" />

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-start pt-8 sm:pt-1 pb-8 sm:pb-4 relative z-10">
        <h1
          className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-6 leading-tight"
          data-aos="fade-down"
        >
          Experience Comfort & Luxury <br /> From the Heart of Sri Lanka
        </h1>

        <p
          className="text-sm sm:text-lg text-center text-gray-700 mb-8 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Discover your perfect escape. Whether you're here for business, leisure, or a family vacation, our modern hotel offers comfort, style, and personalized service to make your stay unforgettable.
        </p>

        {/* Call-to-Action Button */}
        <div
          className="relative inline-block"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <button
            className="px-5 py-2 text-base sm:px-8 sm:py-4 sm:text-lg bg-black text-white rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black mb-1"
            onClick={() => router.push("/pages/booking")}
          >
            Book Now
            <FiArrowRight className="ml-1" />
          </button>

          {/* Limited Offer Tag */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-bounce">
            Limited Offer
          </div>
        </div>

        {/* Hero Image Cards */}
        <div
          className="flex flex-wrap items-end justify-center gap-6 mb-12 w-full"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="mt-0">
            <BounceCards images={heroImagesArray} enableHover={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WoneHeroSection;
