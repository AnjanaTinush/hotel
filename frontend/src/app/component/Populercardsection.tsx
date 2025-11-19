import React, { useRef, useState, useEffect, useCallback } from "react";
import { MapPin, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

// DirectionAwareHover Component
const DirectionAwareHover = ({ imageUrl, children, className = "", onHoverChange }) => {
  const ref = useRef(null);
  const [direction, setDirection] = useState("left");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (event) => {
    if (!ref.current) return;
    setIsHovered(true);
    onHoverChange && onHoverChange(true); // Notify parent about hover
    
    const direction = getDirection(event, ref.current);
    switch (direction) {
      case 0: setDirection("top"); break;
      case 1: setDirection("right"); break;
      case 2: setDirection("bottom"); break;
      case 3: setDirection("left"); break;
      default: setDirection("left"); break;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange && onHoverChange(false); // Notify parent about hover end
  };

  const getDirection = (ev, obj) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  const getTransformStyle = () => {
  if (!isHovered) return { transform: 'scale(1)', transition: 'all 0.6s ease' };
  
  switch (direction) {
    case "top": return { transform: 'translateY(8px) scale(1.05)', transition: 'all 0.6s ease' };
    case "bottom": return { transform: 'translateY(-8px) scale(1.05)', transition: 'all 0.6s ease' };
    case "left": return { transform: 'translateX(8px) scale(1.05)', transition: 'all 0.6s ease' };
    case "right": return { transform: 'translateX(-8px) scale(1.05)', transition: 'all 0.6s ease' };
    default: return { transform: 'scale(1.05)', transition: 'all 0.6s ease' };
  }
};

const getTextStyle = () => {
  if (!isHovered) return { opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' };
  
  switch (direction) {
    case "top": return { opacity: 1, transform: 'translateY(-10px)', transition: 'all 0.6s ease' };
    case "bottom": return { opacity: 1, transform: 'translateY(10px)', transition: 'all 0.6s ease' };
    case "left": return { opacity: 1, transform: 'translateX(-10px)', transition: 'all 0.6s ease' };
    case "right": return { opacity: 1, transform: 'translateX(10px)', transition: 'all 0.6s ease' };
    default: return { opacity: 1, transform: 'translateY(0)', transition: 'all 0.6s ease' };
  }
};


  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
      className={`relative h-80 w-full bg-transparent rounded-xl overflow-hidden group cursor-pointer ${className}`}
    >
      <div className="relative h-full w-full">
        {isHovered && (
          <div className="absolute inset-0 w-full h-full bg-black/40 z-10 transition-opacity duration-300" />
        )}
        <div className="h-full w-full relative bg-gray-50" style={getTransformStyle()}>
          <img
            alt="place"
            className="h-full w-full object-cover"
            src={imageUrl}
          />
        </div>
        <div 
          className="absolute bottom-6 left-6 z-40 text-white"
          style={getTextStyle()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default function DirectionAwareHoverDemo() {
  // Initialize all state variables with default values
  const [translateX, setTranslateX] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const totalElapsedRef = useRef(0);

  const originalCards = [
    {
      imageUrl: "https://tse3.mm.bing.net/th/id/OIP.G8C65hJmA5N4UAeNTc5QZAHaF6?w=757&h=605&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Jaya Sri Maha Bodhiya",
      description: "Sacred Bodhi Tree",
      distance: "2 km away"
    },
    {
      imageUrl: "https://slsigiriya.com/wp-content/uploads/2021/04/Jethanaramaya-1.jpg",
      title: "Jetavanarama Stupa",
      description: "Ancient Buddhist Monument",
      distance: "2 km away"
    },
    {
      imageUrl: "https://t3.ftcdn.net/jpg/01/63/06/94/360_F_163069411_6hVulh5BPh3sztZPzwuvQOleOfprBP98.jpg",
      title: "Ruwanweli Maha Seya",
      description: "Great White Stupa",
      distance: "2 km away"
    },
    {
      imageUrl: "https://media.istockphoto.com/id/1255135539/photo/thuparamaya-is-the-first-buddhist-temple-in-sri-lanka-tourist-destination-in-anuradhapura.jpg?s=612x612&w=0&k=20&c=w9WnVaou_mO5magU2L340aVzI2Ckrxb3pgZyCGazfyQ=",
      title: "Thuparamaya Stupa",
      description: "First Buddhist Temple",
      distance: "2 km away"
    },
    {
      imageUrl: "https://srilankatravelpages.com/wp-content/uploads/2021/10/kcor2ehqaiugm1f3nl8b46tpjsyd59vz.jpg",
      title: "Abhayagiri Stupa",
      description: "Ancient Monastery",
      distance: "2 km away"
    },
    {
      imageUrl: "https://overatours.com/wp-content/uploads/2021/10/Isurumuniya-Temple-Anuradhapura-in-Sri-Lanka-768x517.jpg",
      title: "Isurumuniya",
      description: "Rock Temple Complex",
      distance: "2 km away"
    },
    {
      imageUrl: "https://www.tusktravel.com/blog/wp-content/uploads/2020/05/Mihintale-Sri-Lanka.jpg",
      title: "Mihinthale",
      description: "Birthplace of Buddhism",
      distance: "8 km away"
    },
    {
      imageUrl: "https://www.historyhit.com/app/uploads/fly-images/5154826/The-Kuttam-Pokuna-Shutterstock-1576x1074.jpg",
      title: "Kuttam Pokuna",
      description: "Twin Ponds",
      distance: "2 km away"
    },
    {
      imageUrl: "https://bestofceylon.com/images/best-experiences/visit-to-anuradhapura-sacred-city/anuradhapura5.jpg",
      title: "Lovamahapaya",
      description: "Brazen Palace",
      distance: "2 km away"
    },
    {
      imageUrl: "https://live.staticflickr.com/2359/2114749917_f97cc2b420_b.jpg",
      title: "Sandakada Pahana",
      description: "Moonstone Carvings",
      distance: "2 km away"
    }
  ];

  // Create multiple sets for seamless infinite loop
  const cards = [
    ...originalCards,
    ...originalCards,
    ...originalCards
  ];

  const cardWidth = 320 + 24; // w-80 (320px) + gap-6 (24px)
  const totalWidth = originalCards.length * cardWidth;
  const totalOriginalCards = originalCards.length;

  // Handle image hover changes - pause slider when hovering
// Handle image hover changes - pause slider when hovering
const handleImageHoverChange = useCallback((hovering) => {
  setIsImageHovered(hovering);

  // Save elapsed time before changing speed
  totalElapsedRef.current += (Date.now() - startTimeRef.current) * speed;

  if (hovering) {
    setSpeed(0.2); // Slow down
  } else {
    setSpeed(1); // Resume normal speed
  }

  startTimeRef.current = Date.now();
}, [speed]);




  // Continuous animation function
  const animate = useCallback(() => {
    if (!isPlaying || isTransitioning || isImageHovered) return;

    const currentTime = Date.now();
    const currentSessionElapsed = (currentTime - startTimeRef.current) * speed;
    const totalElapsed = totalElapsedRef.current + currentSessionElapsed;
    
    // Move at 50 pixels per second
    const pixelsPerSecond = 50;
    const newTranslateX = -(totalElapsed / 1000 * pixelsPerSecond) % totalWidth;
    
    setTranslateX(newTranslateX);
    
    // Update current index based on position
    const position = Math.abs(newTranslateX);
    const newIndex = Math.floor(position / cardWidth) % totalOriginalCards;
    setCurrentIndex(prev => {
      if (newIndex !== prev) {
        return newIndex;
      }
      return prev;
    });
    
    animationRef.current = requestAnimationFrame(animate);
  }, [isPlaying, isTransitioning, isImageHovered, speed, totalWidth, cardWidth, totalOriginalCards]);

  // Navigation functions
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setIsPlaying(false);
    
    const nextIndex = (currentIndex + 1) % totalOriginalCards;
    const targetPosition = -(nextIndex * cardWidth);
    
    setCurrentIndex(nextIndex);
    setTranslateX(targetPosition);
    
    // Reset timing when manually navigating
    totalElapsedRef.current = Math.abs(targetPosition) / 50 * 1000;

    setTimeout(() => {
      setIsTransitioning(false);
      setIsPlaying(true);
      startTimeRef.current = Date.now();
    }, 500);
  }, [isTransitioning, currentIndex, totalOriginalCards, cardWidth]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setIsPlaying(false);
    
    const prevIndex = currentIndex === 0 ? totalOriginalCards - 1 : currentIndex - 1;
    const targetPosition = -(prevIndex * cardWidth);
    
    setCurrentIndex(prevIndex);
    setTranslateX(targetPosition);
    
    // Reset timing when manually navigating
    totalElapsedRef.current = Math.abs(targetPosition) / 50 * 1000;

    setTimeout(() => {
      setIsTransitioning(false);
      setIsPlaying(true);
      startTimeRef.current = Date.now();
    }, 500);
  }, [isTransitioning, currentIndex, totalOriginalCards, cardWidth]);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setIsPlaying(false);
    
    const targetPosition = -(index * cardWidth);
    
    setCurrentIndex(index);
    setTranslateX(targetPosition);
    
    // Reset timing when manually navigating
    totalElapsedRef.current = Math.abs(targetPosition) / 50 * 1000;

    setTimeout(() => {
      setIsTransitioning(false);
      setIsPlaying(true);
      startTimeRef.current = Date.now();
    }, 500);
  }, [isTransitioning, currentIndex, cardWidth]);

  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      // Save elapsed time when pausing
      totalElapsedRef.current += (Date.now() - startTimeRef.current) * speed;
    } else {
      // Reset start time when resuming
      startTimeRef.current = Date.now();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying, speed]);

  const changeSpeed = useCallback((newSpeed) => {
    // Save current elapsed time
    if (isPlaying) {
      totalElapsedRef.current += (Date.now() - startTimeRef.current) * speed;
    }
    
    setSpeed(newSpeed);
    startTimeRef.current = Date.now();
  }, [isPlaying, speed]);

  // Animation effect with stable dependencies
  useEffect(() => {
    if (isPlaying && !isTransitioning && !isImageHovered) {
      startTimeRef.current = Date.now();
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
        // Save the total elapsed time when stopping
        if (!isTransitioning && !isImageHovered && isPlaying) {
          totalElapsedRef.current += (Date.now() - startTimeRef.current) * speed;
        }
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isPlaying, isTransitioning, isImageHovered, animate, speed]);

  // Initialize animation on mount
  useEffect(() => {
    startTimeRef.current = Date.now();
    totalElapsedRef.current = 0;
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, []);

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent mb-4 tracking-wide">
          POPULAR PLACES
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover the ancient wonders and sacred sites of Anuradhapura - Hover to pause slider
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-2 z-20 bg-teal-500/90 hover:bg-teal-600 text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
          style={{ top: '160px' }}
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-2 z-20 bg-teal-500/90 hover:bg-teal-600 text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
          style={{ top: '160px' }}
        >
          <ChevronRight size={24} />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden mx-12">
          <div 
            className="flex gap-6 pb-4 will-change-transform"
            style={{ 
              transform: `translateX(${translateX}px)`,
              width: `${cards.length * cardWidth}px`
            }}
          >
            {cards.map((card, index) => (
              <div key={`${card.title}-${index}`} className="flex-shrink-0 w-80">
                <div className="bg-white rounded-xl overflow-hidden transform">
                  <DirectionAwareHover 
                    imageUrl={card.imageUrl}
                    onHoverChange={handleImageHoverChange}
                  >
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl text-white leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-200 opacity-90">
                        {card.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-white/80">
                        <MapPin size={12} />
                        <span>{card.distance}</span>
                      </div>
                    </div>
                  </DirectionAwareHover>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalOriginalCards }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-2 h-2 rounded-full transition-all duration-200 hover:scale-125 disabled:cursor-not-allowed ${
                currentIndex === index 
                  ? 'bg-teal-500 scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}