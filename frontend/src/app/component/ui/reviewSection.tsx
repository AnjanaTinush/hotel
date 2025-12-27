"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const ReviewSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const reviews = [
    {
      name: "Abhishek Lankeshwara",
      role: "Traveler",
      rating: 4.9,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review: "Had an amazing stay! The staff were incredibly friendly and attentive. The room was spacious, clean, and had a beautiful view. The amenities were top-notch, and the location was perfect for exploring the city. Highly recommend!"
    },
    {
      name: "John Anderson",
      role: "Business Traveler",
      rating: 5.0,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review: "Outstanding service and amenities! The room was spacious and well-appointed. Perfect location for business meetings. Will definitely return on my next visit."
    },
    {
      name: "Priya Sharma",
      role: "Tourist",
      rating: 4.8,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      review: "Amazing experience! The breakfast buffet was incredible with so many options. The pool area is beautiful and relaxing. Staff were friendly and helpful throughout our stay."
    },
    {
      name: "Michael Chen",
      role: "Family Vacationer",
      rating: 4.7,
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      review: "Perfect for families! Kids loved the facilities and the staff made sure everyone was comfortable. Great value for money and excellent location near major attractions."
    },
    {
      name: "Sarah Williams",
      role: "Honeymoon Guest",
      rating: 5.0,
      image: "https://randomuser.me/api/portraits/women/21.jpg",
      review: "Our honeymoon was made special by this wonderful hotel. Romantic atmosphere, beautiful rooms, and the staff went out of their way to make our stay memorable."
    },
    {
      name: "David Kumar",
      role: "Weekend Traveler",
      rating: 4.6,
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      review: "Great weekend getaway spot! Clean rooms, comfortable beds, and excellent service. The restaurant served delicious local cuisine. Highly recommend!"
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    if (!scrollRef.current || isDragging) return;

    const scrollContainer = scrollRef.current;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!isDragging && scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Reset scroll when reaching the end
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, [isDragging]);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={16} fill="#FFA500" stroke="#FFA500" />
        ))}
        {hasHalfStar && <Star size={16} fill="#FFA500" stroke="#FFA500" className="opacity-50" />}
        <span className="ml-2 text-lg font-normal text-gray-800">{rating}</span>
      </div>
    );
  };

  return (
    <section className="py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Read authentic reviews from our valued guests who experienced our hospitality
          </p>
        </div>

        {/* Scrolling Reviews Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing py-4"
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
        >
          {/* Duplicate reviews for infinite scroll effect */}
          {[...reviews, ...reviews].map((review, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[350px] md:w-[400px] bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-lg transition-shadow duration-300"
            
            >
              {/* Profile Section */}
              <div className="flex items-start gap-4 mb-4">
                {/* Profile Image */}
                <div className="relative">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  {/* Verified Badge */}
                  <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full p-1">
                    <Star size={12} fill="white" stroke="white" />
                  </div>
                </div>

                {/* Name and Role */}
                <div className="flex-1">
                  <h3 className="text-xl font-normal text-gray-800 mb-1">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{review.role}</p>
                  {renderStars(review.rating)}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed text-sm">
                {review.review}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-8">
          {/* <p className="text-sm text-gray-500 mb-6">
            Drag to explore more reviews or let them scroll automatically
          </p> */}
          
          {/* Google Reviews Button */}
          <a
            href="https://maps.app.goo.gl/z6amhDpfcmxr6fyX6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#009386] text-white font-semibold rounded-lg hover:bg-[#009386]/80 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Google Reviews
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;