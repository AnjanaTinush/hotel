// src/components/magicui/icon-cloud.tsx
"use client";

import { useRef } from "react";
import { Cloud } from "react-icon-cloud";

type IconCloudProps = {
  images: string[];
};

export function IconCloud({ images }: IconCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  if (!images || images.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="h-[400px] w-full flex items-center justify-center"
    >
      <Cloud
        container={containerRef}
        options={{
          radius: 160,
          maxSpeed: "fast",
          keep: true,
        }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`logo-${idx}`}
            className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-200"
          />
        ))}
      </Cloud>
    </div>
  );
}
