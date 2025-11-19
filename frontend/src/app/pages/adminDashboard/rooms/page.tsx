'use client';

import React, { useEffect, useState } from 'react';
import RoomCard from '@/app/component/admin/rooms/roomcard';
import RoomFilterSection from '@/app/component/admin/rooms/roomFilterSection';
import RoomSummeryCard from '@/app/component/admin/rooms/roomSummeryCard';
import UpdateRoomModal from '@/app/component/admin/rooms/updateRoomModel';
import AddRoomModal from '@/app/component/admin/rooms/addRoomModal';
import { Button } from '@/components/ui/button';

interface Room {
  _id: string;
  roomNo: string;
  images: string[];
  noOfBed: number;
  noOfPerson: number;
}

const Rooms = () => {
  const sampleRooms: Room[] = [
    {
      _id: 'r1',
      roomNo: '101',
      images: [
        'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&auto=format&fit=crop&q=60',
      ],
      noOfBed: 1,
      noOfPerson: 2,
    },
    {
      _id: 'r2',
      roomNo: '102',
      images: [
        'https://plus.unsplash.com/premium_photo-1675616575255-99f40284212a?q=80&w=1168&auto=format&fit=crop',
      ],
      noOfBed: 2,
      noOfPerson: 3,
    },
    {
      _id: 'r3',
      roomNo: '201',
      images: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=60',
      ],
      noOfBed: 1,
      noOfPerson: 1,
    },
    {
      _id: 'r4',
      roomNo: '202',
      images: [
        'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600&auto=format&fit=crop&q=60',
      ],
      noOfBed: 2,
      noOfPerson: 4,
    },
    {
      _id: 'r5',
      roomNo: '301',
      images: [
        'https://plus.unsplash.com/premium_photo-1671228941029-1b1b9ca66f7e?w=600&auto=format&fit=crop&q=60',
      ],
      noOfBed: 3,
      noOfPerson: 5,
    },
  ];

  const [rooms, setRooms] = useState<Room[]>(sampleRooms);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);



  const handleUpdate = (roomId: string) => {
    const room = rooms.find((r) => r._id === roomId);
    if (room) {
      setSelectedRoom(room);
      setUpdateModalOpen(true);
    }
  };

  const handleSaveUpdatedRoom = (updatedRoom: Room) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) => (room._id === updatedRoom._id ? updatedRoom : room))
    );
    setSelectedRoom(null);
  };

  const handleRemove = async (roomId: string) => {
    // remove room locally from sample data
    setRooms((prev) => prev.filter((r) => r._id !== roomId));
  };

  const handleAddRoom = (newRoom: Room) => {
    setRooms((prevRooms) => [...prevRooms, newRoom]);
  };

  const handleRetryFetch = () => {
    setLoading(true);
    setError(null);
    // Re-trigger the useEffect
    window.location.reload();
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">Error Loading Rooms</h2>
          <p className="text-gray-600 mt-2">{error}</p>
        </div>
        <Button onClick={handleRetryFetch}>
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4">
      <div className="flex justify-between items-center">
        <RoomSummeryCard />
        <Button onClick={() => setAddModalOpen(true)}>+ Add Room</Button>
      </div>

      <RoomFilterSection />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-full max-w-sm h-56 bg-muted animate-pulse rounded-xl"
            ></div>
          ))
        ) : rooms.length > 0 ? (
          rooms.map((room) => (
            <RoomCard
              key={room._id}
              room={room}
              onUpdate={() => handleUpdate(room._id)}
              onRemove={() => handleRemove(room._id)}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No rooms found.</p>
            <Button onClick={() => setAddModalOpen(true)}>
              Add Your First Room
            </Button>
          </div>
        )}
      </div>

      {selectedRoom && (
        <UpdateRoomModal
          open={isUpdateModalOpen}
          onClose={() => {
            setUpdateModalOpen(false);
            setSelectedRoom(null);
          }}
          roomData={selectedRoom}
          onSave={handleSaveUpdatedRoom}
        />
      )}

      <AddRoomModal
        open={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
        onRoomAdded={handleAddRoom}
      />
    </div>
  );
};

export default Rooms;