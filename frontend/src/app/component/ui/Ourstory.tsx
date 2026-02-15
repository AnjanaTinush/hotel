"use client";

import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function Ourstory() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative h-[500px]  overflow-hidden shadow-2xl" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Hotel Interior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-6" data-aos="fade-left">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                Our Story
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                Where Elegance Meets Tradition
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Since our establishment in 1985, we have been dedicated to providing guests with
                an unparalleled experience of luxury, comfort, and exceptional service. Our hotel
                stands as a testament to timeless elegance and modern sophistication.
              </p>
              
              <p>
                Nestled in the heart of the city, our property combines architectural grandeur
                with contemporary amenities. Every corner of our establishment tells a story of
                heritage, craftsmanship, and attention to detail that has been refined over decades.
              </p>

              <p>
                Our commitment extends beyond providing accommodation—we create memorable experiences
                that resonate with each guest. From our meticulously designed rooms to our world-class
                dining experiences, every aspect reflects our passion for hospitality excellence.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-6">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary">35+</h3>
                <p className="text-sm text-gray-600 mt-1">Years of Excellence</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary">150+</h3>
                <p className="text-sm text-gray-600 mt-1">Luxury Rooms</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary">50K+</h3>
                <p className="text-sm text-gray-600 mt-1">Happy Guests</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourstory;