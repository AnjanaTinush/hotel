"use client";

import React, { useEffect, useState } from "react";

const BounceCards = ({
  className = "",
  images = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1558618047-fd1c8c1b84e1?w=400&h=400&fit=crop",
    "https://www.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_10332581.htm#fromView=search&page=1&position=2&uuid=4a2a2250-673f-47ca-83dd-277c2297b53d&query=rooms",
    "https://www.freepik.com/free-photo/armchair-green-living-room-with-copy-space_36331308.htm#fromView=search&page=1&position=0&uuid=4a2a2250-673f-47ca-83dd-277c2297b53d&query=rooms",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=400&fit=crop"
  ],
  containerWidth = 600,
  containerHeight = 350,
  animationDelay = 0.5,
  animationStagger = 0.4,
  enableHover = true,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);

  const transformStyles = [
    "rotate(12deg) translate(-200px, 0px)",
    "rotate(6deg) translate(-100px, 15px)",
    "rotate(-3deg) translate(0px, 20px)",
    "rotate(-10deg) translate(100px, 10px)",
    "rotate(4deg) translate(200px, -5px)",
    "rotate(-6deg) translate(-150px, -50px)",
    "rotate(8deg) translate(150px, -45px)",
  ];

  useEffect(() => {
    const animateCards = async () => {
      for (let i = 0; i < images.length; i++) {
        await new Promise(resolve => setTimeout(resolve, animationStagger * 1000));
        setAnimatedCards(prev => [...prev, i]);
      }
    };

    const timer = setTimeout(animateCards, animationDelay * 1000);
    return () => clearTimeout(timer);
  }, [images.length, animationDelay, animationStagger]);

  const getNoRotationTransform = (transformStr: string) => {
    return transformStr.replace(/rotate\([^)]*\)/g, "rotate(0deg)");
  };

  const getPushedTransform = (baseTransform: string, offsetX: number) => {
    const translateRegex = /translate\(([^,]+),\s*([^)]+)\)/;
    const match = baseTransform.match(translateRegex);
    
    if (match) {
      const currentX = parseFloat(match[1]);
      const currentY = parseFloat(match[2]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px, ${currentY})`);
    }
    return `${baseTransform} translate(${offsetX}px, 0px)`;
  };

  const getCardStyle = (index: number) => {
    const baseTransform = transformStyles[index] || "rotate(0deg) translate(0px, 0px)";
    const isAnimated = animatedCards.includes(index);
    let finalTransform = baseTransform;
    let zIndex = images.length - Math.abs(index - Math.floor(images.length / 2));

    if (enableHover && hoveredIndex !== null) {
      if (index === hoveredIndex) {
        finalTransform = getNoRotationTransform(baseTransform);
        zIndex = images.length + 1;
      } else {
        const offsetX = index < hoveredIndex ? -140 : 140;
        finalTransform = getPushedTransform(baseTransform, offsetX);
        zIndex = images.length - Math.abs(hoveredIndex - index);
      }
    }

    return {
      transform: isAnimated ? finalTransform : "scale(0) rotate(0deg)",
      zIndex,
      transitionProperty: "transform",
      transitionDuration: isAnimated ? "0.6s" : "0.8s",
      transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      transitionDelay: !isAnimated ? `${index * animationStagger}s` : "0s",
    };
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div
        className={`relative flex items-center justify-center ${className}`}
        style={{
          width: containerWidth,
          height: containerHeight,
        }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="absolute cursor-pointer group"
            style={getCardStyle(idx)}
            onMouseEnter={() => enableHover && setHoveredIndex(idx)}
            onMouseLeave={() => enableHover && setHoveredIndex(null)}
          >
            <div className="w-28 h-32 sm:w-32 sm:h-40 md:w-36 md:h-44 lg:w-40 lg:h-48 border-3 border-white rounded-2xl overflow-hidden shadow-2xl bg-white transform group-hover:scale-105 transition-transform duration-300">
              <img
                className="w-full h-full object-cover"
                src={src}
                alt={`card-${idx}`}
                loading="lazy"
              />
            </div>
          </div>
        ))}

        {/* Center Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default BounceCards;
