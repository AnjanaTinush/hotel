import RoomCard from '@/app/component/admin/rooms/roomcard'
import RoomSummeryCard from '../../component/Homeui/booking/roomCard'
import React from 'react'

const Booking = () => {
  // Sample room data - replace with your actual data
  const roomsData = [
  {
    id: 1,
    location: "Bali, Indonesia",
    price: 1200,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    hotelName: "Luxury Beach Resort",
    location: "Maldives",
    price: 1800,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2100d?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    hotelName: "Mountain View Lodge",
    location: "Switzerland",
    price: 950,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1551776235-dde6d482980e?w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    hotelName: "City Center Hotel",
    location: "New York, USA",
    price: 1400,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    hotelName: "Desert Oasis Resort",
    location: "Dubai, UAE",
    price: 2200,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1582719478186-894d1c54b0d1?w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    hotelName: "Coastal Paradise",
    location: "Santorini, Greece",
    price: 1600,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&auto=format&fit=crop"
  }
];


  return (
    <div className="container mx-auto px-4 pt-0">
      {/* Filter Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Filter Section</h1>
        {/* Add your filter components here */}
      </div>

      {/* Room Cards Grid using Map */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roomsData.map((room) => (
          <RoomSummeryCard 
            key={room.id}
            hotelName={room.hotelName}
            price={room.price}
            rating={room.rating}
            imageUrl={room.imageUrl}
          />
        ))}
      </div>

      {/* Loading state example */}
      {roomsData.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No rooms available at the moment.</p>
        </div>
      )}
    </div>
  )
}

export default Booking 