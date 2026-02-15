"use client";

import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function HeroVideo() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <div className="space-y-6" data-aos="fade-right">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                Experience Luxury
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A Visual Journey Through Excellence
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Immerse yourself in the world of unparalleled luxury and sophistication. 
                Our hotel offers a unique blend of contemporary design, timeless elegance, 
                and world-class amenities.
              </p>
              
              <p>
                From breathtaking interiors to meticulously curated spaces, every detail 
                has been thoughtfully designed to create an unforgettable experience. 
                Discover the perfect balance of comfort, style, and exceptional service.
              </p>

              <p>
                Watch our journey and see why guests from around the world choose us 
                for their most memorable stays.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-gray-800 font-medium">Luxury Accommodations</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-gray-800 font-medium">World-Class Dining Experience</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-gray-800 font-medium">Exceptional Guest Service</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-gray-800 font-medium">Premium Amenities & Facilities</p>
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative" data-aos="fade-left">
            <div className="relative h-[650px] rounded-sm overflow-hidden shadow-2xl">
              {/* Replace the src with your actual video URL */}
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source 
                  src="https://firebasestorage.googleapis.com/v0/b/city-travels-web.firebasestorage.app/o/Assets%2FFrom%20KlickPin%20CF%20Island%20paradise%20Sri%20Lanka%20_%20City%20trip%20Culture%20travel%20Asia%20destinations.mp4?alt=media&token=d03c5c9e-3cd7-4b90-b22d-ce203337c692" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
              
              {/* Optional: Play button overlay */}
              {/* <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all">
                  <svg 
                    className="w-6 h-6 text-primary ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div> */}
            </div>

            {/* Decorative element */}
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroVideo;