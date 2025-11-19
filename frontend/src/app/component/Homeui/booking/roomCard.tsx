"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star } from 'lucide-react';
import ViewBooking from './viewBooking'; // Import your booking modal

const RoomCard = ({ 
  hotelName = "Capital Business Hotel",
  location = "Bali, Indonesia", 
  price = 1200,
  rating = 4.7,
  imageUrl = "/api/placeholder/400/200",
  roomType = "Deluxe Suite",
  amenities = []
}) => {
  return (
<Card className="max-w-sm rounded-lg overflow-hidden  hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      {/* Hotel Image */}
      <div className="relative h-48 rounded-t-lg overflow-hidden bg-gradient-to-br from-emerald-800 to-emerald-600">
  <img 
    src={imageUrl} 
    alt={`${hotelName} Room`}
    className="w-full h-full object-cover"
  />

        {/* Rating Badge */}
        <Badge 
          variant="secondary" 
          className="absolute top-3 right-3 bg-black/70 text-white hover:bg-black/80 border-0"
        >
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
          {rating}
        </Badge>
      </div> 
      
      {/* Hotel Details */}
      <CardContent className="p-5">
        {/* Hotel Name */}
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {hotelName}
        </h3>
        
        {/* Location */}
        <div className="flex items-center gap-1 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>
        
        {/* Price and Button */}
        <div className="flex items-end justify-between">
          <div>
            <span className="text-2xl font-bold text-foreground">${price}</span>
            <span className="text-muted-foreground text-sm ml-1">/ night</span>
          </div>
          
          {/* Book Button with Modal */}
          <ViewBooking 
            roomData={{
              hotelName,
              location,
              price,
              rating,
              imageUrl,
              roomType,
              amenities
            }}
            triggerButton={
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                size="sm"
              >
                Book Now
              </Button>
            }
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomCard;