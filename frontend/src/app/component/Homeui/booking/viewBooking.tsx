"use client";

import React, { useState } from 'react';
import {
  CalendarDays,
  Wifi,
  Car,
  Coffee,
  Tv,
  Wind,
  Users,
  MapPin,
  Star,
  Minus,
  Plus,
  X
} from 'lucide-react';

const ViewBooking = ({ triggerButton }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);

  const amenities = [
    { icon: Wifi, label: 'Free WiFi' },
    { icon: Car, label: 'Parking' },
    { icon: Coffee, label: 'Coffee Maker' },
    { icon: Tv, label: 'Smart TV' },
    { icon: Wind, label: 'Air Conditioning' },
    { icon: Users, label: 'Room Service' }
  ];

  const roomDetails = {
    name: "Ocean View Suite",
    type: "Deluxe Room",
    price: 1200,
    rating: 4.7,
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop"
  };

  // Calculate number of nights
  const calculateNights = () => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      return diff > 0 ? diff : 1;
    }
    return 1;
  };

  const nights = calculateNights();
  const subtotal = roomDetails.price * rooms * nights;
  const taxes = 50;
  const total = subtotal + taxes;

  const today = new Date().toISOString().split('T')[0];

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Trigger Button */}
      <div onClick={openModal}>
        {triggerButton || (
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
            Book Now
          </button>
        )}
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] flex flex-col relative">
            {/* Modal Header - Always stays at top */}
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-lg z-10">
              <h2 className="text-2xl font-bold">Book Your Stay</h2>
              <button 
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="p-6 overflow-y-auto flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column – Room Info */}
                <div className="space-y-6">
                  {/* Room Image */}
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src={roomDetails.image}
                      alt={roomDetails.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded flex items-center">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                      {roomDetails.rating}
                    </div>
                  </div>

                  {/* Room Description */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{roomDetails.name}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{roomDetails.location}</span>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Bed Type</h4>
                      <div className="inline-block border border-gray-300 px-3 py-1 rounded-full text-sm">
                        {roomDetails.type}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Room Amenities</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {amenities.map((amenity, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <amenity.icon className="w-4 h-4 text-blue-600" />
                            <span>{amenity.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column – Booking Form */}
                <div className="space-y-6">
                  {/* Dates */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Check-in</label>
                      <div className="relative">
                        <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="date"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          min={today}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Check-out</label>
                      <div className="relative">
                        <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="date"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          min={checkIn || today}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Guests / Rooms */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Guests</label>
                      <div className="flex items-center gap-2 mt-1">
                        <button 
                          onClick={() => setGuests(Math.max(1, guests - 1))} 
                          className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="flex-1 text-center font-medium">{guests}</span>
                        <button 
                          onClick={() => setGuests(guests + 1)} 
                          className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Rooms</label>
                      <div className="flex items-center gap-2 mt-1">
                        <button 
                          onClick={() => setRooms(Math.max(1, rooms - 1))} 
                          className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="flex-1 text-center font-medium">{rooms}</span>
                        <button 
                          onClick={() => setRooms(rooms + 1)} 
                          className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Guest Info */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Guest Information</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">First Name</label>
                        <input 
                          type="text" 
                          placeholder="John" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Last Name</label>
                        <input 
                          type="text" 
                          placeholder="Doe" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Cancellation */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Cancellation Rules</h4>
                    <p className="text-sm text-gray-600">
                      Free cancellation until 24 hours before check-in. 
                      After that, the first night will be charged.
                    </p>
                  </div>

                  {/* Pricing Summary */}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Room rate (${roomDetails.price} × {nights} night{nights > 1 ? 's' : ''})</span>
                      <span>${roomDetails.price * nights}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rooms × {rooms}</span>
                      <span>${subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes & fees</span>
                      <span>${taxes}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${total}</span>
                    </div>
                  </div>

                  {/* Book Now */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors duration-200">
                    Complete Booking - ${total}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewBooking;