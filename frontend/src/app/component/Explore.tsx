import React from 'react';
import { motion } from 'framer-motion';

const Explore = () => {
  return (
    <section
      data-section="explore"
      className="h-screen w-full bg-white flex items-center justify-center px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-7xl md:text-6xl font-bold text-teal-600 tracking-wide">
            WHY ANJANA GUEST
          </h1>
        </div>

        {/* ---- Circles + SVG connectors on the same line (desktop) ---- */}
        <div className="hidden md:grid items-center justify-center mx-auto mb-10 gap-24
                        grid-cols-[64px_210px_64px_210px_64px]">
          {/* Circle 1 */}
          <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-600">1</span>
          </div>

          {/* SVG 1->2 (unchanged) */}
          <svg
            width="210"
            height="50"
            viewBox="0 0 210 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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

          {/* Circle 2 */}
          <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-600">2</span>
          </div>

          {/* SVG 2->3 (unchanged) */}
          <svg
            width="210"
            height="50"
            viewBox="0 0 210 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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

          {/* Circle 3 */}
          <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-600">3</span>
          </div>
        </div>

        {/* ---- Wider step cards below the bar (desktop). Circles hidden on md+ to avoid duplicates ---- */}
        <div className="hidden md:grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Step 1 */}
          <div className="text-center relative flex flex-col items-center mx-auto w-80">
            <div className="relative z-10 w-16 h-16 bg-white border-2 border-gray-300 rounded-full items-center justify-center mx-auto mb-8 hidden">
              {/* hidden circle on md+; we already show circles above */}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Welcome and Check-in
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Angana Guest, we provide a warm welcome and seamless check-in
              experience, ensuring our guests feel comfortable and valued from
              the moment they arrive.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative flex flex-col items-center mx-auto w-80">
            <div className="relative z-10 w-16 h-16 bg-white border-2 border-gray-300 rounded-full items-center justify-center mx-auto mb-8 hidden" />
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Premium Services & Amenities
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Angana Guest, we provide exceptional amenities and personalized
              services throughout your stay, ensuring comfort and satisfaction
              at every moment.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative flex flex-col items-center mx-auto w-80">
            <div className="relative z-10 w-16 h-16 bg-white border-2 border-gray-300 rounded-full items-center justify-center mx-auto mb-8 hidden" />
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Memorable Experience & Departure
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Angana Guest, we ensure your departure is as smooth as your
              arrival, leaving you with unforgettable memories and a desire to
              return to our hospitality.
            </p>
          </div>
        </div>

        {/* Mobile stacked version (unchanged) */}
        <div className="grid md:hidden gap-12">
          {/* Step 1 */}
          <div className="text-center relative">
            <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-gray-600">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Welcome and Check-in
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Angana Guest, we provide a warm welcome and seamless check-in
              experience, ensuring our guests feel comfortable and valued from
              the moment they arrive.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative">
            <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-gray-600">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Premium Services & Amenities
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Angana Guest, we provide exceptional amenities and personalized
              services throughout your stay, ensuring comfort and satisfaction
              at every moment.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative">
            <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-gray-600">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Memorable Experience & Departure
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Angana Guest, we ensure your departure is as smooth as your
              arrival, leaving you with unforgettable memories and a desire to
              return to our hospitality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
