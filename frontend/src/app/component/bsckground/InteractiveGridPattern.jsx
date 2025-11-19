"use client";

import { motion } from "framer-motion";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 200,
  className,
  maxOpacity = 0.5,
  duration = 1,
  repeatDelay = 0.5,
  ...props
}) {
  const id = useId();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState(() => generateSquares(numSquares));

  function getPos() {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ];
  }

  function generateSquares(count) {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(),
    }));
  }

  // Function to update a single square's position
  const updateSquarePosition = (id) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) => {
        // If the square is in the upper 25% of the grid, increase the chance to stay near the top
        const isUpper =
          sq.pos[1] < Math.floor((dimensions.height / height) * 0.25);
        return sq.id === id
          ? {
              ...sq,
              pos: isUpper
                ? [
                    Math.floor((Math.random() * dimensions.width) / width),
                    Math.floor(
                      Math.random() * ((dimensions.height / height) * 0.25)
                    ),
                  ]
                : getPos(),
            }
          : sq;
      })
    );
  };

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions, numSquares]);

  useEffect(() => {
    const resizeObserver = new window.ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      width={width * 40} 
      height={height * 40} 
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-teal-400/30 stroke-teal-400/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos, id }, index) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration: 1,
              repeat: 1,
              delay: index * 0.1,
              repeatType: "reverse",
            }}
            onAnimationComplete={() => updateSquarePosition(id)}
            key={`${pos[0]}-${pos[1]}-${index}`}
            width={width - 1}
            height={height - 1}
            x={pos[0] * width + 1}
            y={pos[1] * height + 1}
            fill="#0d9488"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}

export { AnimatedGridPattern as InteractiveGridPattern };
