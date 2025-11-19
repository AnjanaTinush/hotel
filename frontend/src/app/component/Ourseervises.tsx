"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircleDot } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Web Development',
    description: 'Create stunning, responsive websites that engage your audience and drive business growth.',
    details: [
      'Responsive website design',
      'Custom web applications',
      'E-commerce solutions',
      'Performance optimization',
    ],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    icon: '💻',
    color: 'teal'
  },
  {
    id: 2,
    name: 'Mobile App Development',
    description: 'Build powerful mobile applications that provide seamless user experiences across all devices.',
    details: [
      'iOS and Android apps',
      'Cross-platform solutions',
      'User-friendly interfaces',
      'App store deployment',
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    icon: '📱',
    color: 'blue'
  },
  {
    id: 3,
    name: 'Digital Marketing',
    description: 'Amplify your brand presence and reach your target audience through strategic digital campaigns.',
    details: [
      'SEO optimization',
      'Social media management',
      'Content marketing',
      'Analytics and reporting',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    icon: '📈',
    color: 'purple'
  },
  {
    id: 4,
    name: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services to power your business operations efficiently.',
    details: [
      'Cloud migration services',
      'Infrastructure as Code',
      'Serverless architecture',
      'DevOps automation',
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    icon: '☁️',
    color: 'green'
  }
];

const OurServices = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [visibleDetailsCount, setVisibleDetailsCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [animationsStarted, setAnimationsStarted] = useState(false);
  const [showExploreTransition, setShowExploreTransition] = useState(false);
  const sectionRef = useRef(null);

  const currentService = services[currentServiceIndex];

  // Intersection Observer to detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationsStarted) {
          setIsInView(true);
          setAnimationsStarted(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationsStarted]);

  // Enhanced scroll-based service switching with transition to explore
  useEffect(() => {
    if (!isInView) return;

    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;

      if (!ticking) {
        requestAnimationFrame(() => {
          // Only calculate scroll progress when section is in view
          if (sectionTop <= 0 && sectionTop >= -sectionHeight) {
            const scrollProgress = Math.abs(sectionTop) / sectionHeight;

            // Initial state - show first service
            if (scrollProgress < 0.1) {
              setCurrentServiceIndex(0);
              setShowExploreTransition(false);
              ticking = false;
              return;
            }

            // Calculate service index based on scroll progress
            // Divide the scroll area into segments for each service
            const serviceSegmentSize = 0.8 / services.length; // Use 80% of scroll for services
            const serviceProgress = Math.min(scrollProgress / 0.8, 1); // Normalize to 0-1 for service area
            
            const index = Math.min(
              services.length - 1,
              Math.floor(serviceProgress * services.length)
            );

            // Show transition to explore section when we've scrolled past all services
            if (scrollProgress > 0.85) {
              setShowExploreTransition(true);
            } else {
              setShowExploreTransition(false);
              if (index !== currentServiceIndex) {
                setCurrentServiceIndex(index);
              }
            }
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentServiceIndex, isInView]);

  // Animate service details when service changes
  useEffect(() => {
    if (!isInView || showExploreTransition) return;

    setVisibleDetailsCount(0);

    const interval = setInterval(() => {
      setVisibleDetailsCount((prev) => {
        if (prev < currentService.details.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 400);

    return () => clearInterval(interval);
  }, [currentServiceIndex, isInView, showExploreTransition]);

  return (
    <section
      ref={sectionRef}
      className="bg-white relative"
      id="services"
      data-section="services"
      data-services-container
      style={{ height: '400vh' }}
    >
      <div className="h-screen sticky top-0 flex items-center justify-center flex-col px-4">
        {/* Heading */}
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-semibold text-teal-600 text-center mb-8"
        >
          Our Services
        </motion.h1>

        {/* Service Content or Explore Transition */}
        <AnimatePresence mode="wait">
          {isInView && !showExploreTransition && (
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl w-full mt-12"
            >
              {/* Text Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-800">
                  {currentService.name}
                </h2>
                <p className="text-gray-600 mt-2">{currentService.description}</p>

                <div className="mt-6 space-y-4 ">
                  <AnimatePresence>
                    {currentService.details
                      .slice(0, visibleDetailsCount)
                      .map((detail, index) => (
                        <motion.div
                          key={`${currentService.id}-${index}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                        >
                          <div className={`mt-1 text-${currentService.color}-500`}>
                            <CircleDot className="w-5 h-5 shrink-0" />
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">{detail}</p>
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0, x: 50 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="h-full"
              >
                <div className="relative h-full">
                  <motion.div
                    initial={{ rotate: -5, scale: 0.95 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute h-full inset-0 bg-gradient-to-br  rounded-xl  opacity-20 "
                  />
                  <img
                    src={currentService.image}
                    alt={currentService.name}
                    className="relative w-full h-fulll lg:h-full object-cover rounded-xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Transition to Explore Section */}
          {isInView && showExploreTransition && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl w-full"
            >
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              >
                Ready to Explore More?
              </motion.h2>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-600 mb-8"
              >
                Discover what makes us different and how we can help transform your business
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-6xl animate-bounce"
              >
                👇
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OurServices;