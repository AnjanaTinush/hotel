import React, { useRef, useState, useEffect, useCallback } from "react";
import { MapPin, ChevronLeft, ChevronRight, Heart, ArrowRight } from "lucide-react";


export default function DirectionAwareHoverDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLiked, setIsLiked] = useState({});

  const originalCards = [
    {
      imageUrl: "https://tse3.mm.bing.net/th/id/OIP.G8C65hJmA5N4UAeNTc5QZAHaF6?w=757&h=605&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Jaya Sri Maha Bodhiya",
      region: "Anuradhapura",
      location: "Sacred Bodhi Tree",
      price: "€ 175",
      badge: "Hot tour",
      details: "From Colombo 06/05/19, 4 nights, meals, per person"
    },
    {
      imageUrl: "https://slsigiriya.com/wp-content/uploads/2021/04/Jethanaramaya-1.jpg",
      title: "Jetavanarama Stupa",
      region: "Anuradhapura",
      location: "Ancient Buddhist Monument",
      price: "€ 152",
      badge: "Hot tour",
      details: "From Colombo 06/05/19, 4 nights, meals, per person"
    },
    {
      imageUrl: "https://t3.ftcdn.net/jpg/01/63/06/94/360_F_163069411_6hVulh5BPh3sztZPzwuvQOleOfprBP98.jpg",
      title: "Ruwanweli Maha Seya",
      region: "Anuradhapura",
      location: "Great White Stupa",
      price: "€ 220",
      badge: "Hot tour",
      details: "From Colombo 06/05/19, 5 nights, meals, per person"
    },
    {
      imageUrl: "https://media.istockphoto.com/id/1255135539/photo/thuparamaya-is-the-first-buddhist-temple-in-sri-lanka-tourist-destination-in-anuradhapura.jpg?s=612x612&w=0&k=20&c=w9WnVaou_mO5magU2L340aVzI2Ckrxb3pgZyCGazfyQ=",
      title: "Thuparamaya Stupa",
      region: "Anuradhapura",
      location: "First Buddhist Temple",
      price: "€ 190",
      badge: "Hot tour",
      details: "From Colombo 06/05/19, 4 nights, meals, per person"
    },
    {
      imageUrl: "https://srilankatravelpages.com/wp-content/uploads/2021/10/kcor2ehqaiugm1f3nl8b46tpjsyd59vz.jpg",
      title: "Abhayagiri Stupa",
      region: "Anuradhapura",
      location: "Ancient Monastery",
      price: "€ 165",
      badge: "Hot tour",
      details: "From Colombo 06/05/19, 3 nights, meals, per person"
    },
    {
      imageUrl: "https://overatours.com/wp-content/uploads/2021/10/Isurumuniya-Temple-Anuradhapura-in-Sri-Lanka-768x517.jpg",
      title: "Isurumuniya",
      region: "Anuradhapura",
      location: "Rock Temple Complex",
      price: "€ 180",
      badge: "Hot tour",
      details: "From Colombo 06/05/19, 4 nights, meals, per person"
    },
    {
      imageUrl: "https://www.tusktravel.com/blog/wp-content/uploads/2020/05/Mihintale-Sri-Lanka.jpg",
      title: "Mihinthale",
      region: "Anuradhapura",
      location: "Birthplace of Buddhism",
      price: "€ 520",
      badge: "Eco-resort",
      details: "From Colombo 06/05/19, 5 nights, meals, per person"
    },
    {
      imageUrl: "https://www.historyhit.com/app/uploads/fly-images/5154826/The-Kuttam-Pokuna-Shutterstock-1576x1074.jpg",
      title: "Kuttam Pokuna",
      region: "Anuradhapura",
      location: "Twin Ponds",
      price: "€ 145",
      badge: "Hot tour",
      details: "From Colombo 06/05/19, 3 nights, meals, per person"
    },
    {
      imageUrl: "https://bestofceylon.com/images/best-experiences/visit-to-anuradhapura-sacred-city/anuradhapura5.jpg",
      title: "Lovamahapaya",
      region: "Anuradhapura",
      location: "Brazen Palace",
      price: "€ 135",
      badge: "Hot tour",
      details: "From Colombo 06/05/19, 4 nights, meals, per person"
    },
    {
      imageUrl: "https://live.staticflickr.com/2359/2114749917_f97cc2b420_b.jpg",
      title: "Sandakada Pahana",
      region: "Anuradhapura",
      location: "Moonstone Carvings",
      price: "€ 155",
      badge: "Hot tour",
      details: "From Colombo 06/05/19, 4 nights, meals, per person"
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(originalCards.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const toggleLike = (index) => {
    setIsLiked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const visibleCards = originalCards.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="bg-[#009386] py-16">
      <div className="px-4 max-w-7xl mx-auto ">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
          Compilation
        </h2>
        <p className="text-white/90 text-base max-w-2xl mx-auto">
          Discover the ancient wonders and sacred sites of Anuradhapura
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
          {visibleCards.map((card, index) => {
            const globalIndex = currentIndex * itemsPerPage + index;
            return (
              <div 
                key={globalIndex} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Card Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 bg-gray-800/80 text-white px-3 py-1 rounded text-sm">
                    {card.badge}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 text-gray-800 px-3 py-1 rounded font-bold text-sm">
                    {card.price}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  {/* Region Info */}
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                    <MapPin size={14} />
                    <span>Region</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {card.title}
                  </h3>
                  
                  {/* Location */}
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                    <MapPin size={14} />
                    <span>{card.location}</span>
                  </div>

                  {/* Details */}
                  <p className="text-xs text-gray-500 mb-4">
                    {card.details}
                  </p>

                  {/* Bottom Actions */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => toggleLike(globalIndex)}
                      className={`p-2 rounded-full transition-colors ${
                        isLiked[globalIndex] 
                          ? 'text-red-500 bg-red-50' 
                          : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                      }`}
                    >
                      <Heart 
                        size={20} 
                        fill={isLiked[globalIndex] ? 'currentColor' : 'none'} 
                      />
                    </button>
                    
                    <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800 transition-colors">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}