"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Maximize2, Users, Ruler, Droplet } from "lucide-react";

const RoomsSection = () => {
  const router = useRouter();

  const rooms = [
    {
      type: "Standard Rooms",
      title: "(Non AC)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris orci, pellentesque sit et ipsum interdum tempus.",
      size: "252 m²",
      capacity: "2 Adults",
      dimension: "400x300 cm",
      amenity: "Shower",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1470&auto=format&fit=crop",
      imagePosition: "right"
    },
    {
      type: "Deluxe Rooms",
      title: "(AC)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris orci, pellentesque sit et ipsum interdum tempus.",
      size: "352 m²",
      capacity: "2 Adults",
      dimension: "400x300 cm",
      amenity: "Shower",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1474&auto=format&fit=crop",
      imagePosition: "left"
    }
  ];

  return (
    <section className="py-16 px-6 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto space-y-24">
        {rooms.map((room, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              room.imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-12 items-center`}
          >
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              {/* Room Title */}
              <div className="flex">
                <h3 className="text-3xl md:text-4xl font-serif italic text-gray-800 mr-2">
                  {room.type}
                </h3>
                <h2 className="text-3xl md:text-3xl font-serif text-gray-900">
                  {room.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed max-w-md">
                {room.description}
              </p>

              {/* Room Details Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {/* SIZE */}
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Size</p>
                  <p className="text-lg font-serif text-gray-800">{room.size}</p>
                </div>

                {/* BED */}
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Bed</p>
                  <p className="text-lg font-serif text-gray-800">{room.capacity}</p>
                </div>

                {/* DIMENSION */}
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Dimension</p>
                  <p className="text-lg font-serif text-gray-800">{room.dimension}</p>
                </div>

                {/* AMENITY */}
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Bathroom</p>
                  <p className="text-lg font-serif text-gray-800">{room.amenity}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => router.push("/pages/booking")}
                  className="px-6 py-3 bg-gray-900 text-white font-semibold uppercase text-sm tracking-wider hover:bg-gray-800 transition-all duration-300"
                >
                  Book Now
                </button>
                <button
                  onClick={() => router.push(`/rooms/${room.type.toLowerCase()}`)}
                  className="px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold uppercase text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  More Details
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full">
              <div className="relative h-[300px] lg:h-[400px] overflow-hidden rounded-lg shadow-xl">
                <img
                  src={room.image}
                  alt={`${room.type} ${room.title}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomsSection;