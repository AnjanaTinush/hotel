'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreVertical } from 'lucide-react';


interface RoomCardProps {
  room: {
    _id: string;
    roomNo: string;
    images: string[];
    noOfBed: number;
    noOfPerson: number;
  };
  onUpdate: () => void;
  onRemove: () => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, onUpdate, onRemove }) => {
  return (
    <Card className="relative w-full max-w-sm rounded-2xl shadow-md overflow-hidden">
      {/* Dropdown actions */}
      <div className="absolute top-2 right-2 z-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={onUpdate}>Update</DropdownMenuItem>
            <DropdownMenuItem onClick={onRemove}>Remove</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Room Content */}
      <CardContent className="p-4">
        {room.images?.[0] && (
          <img
            src={room.images[0]}
            alt={`Room ${room.roomNo}`}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        )}
        <div className="space-y-1">
          <p className="text-lg font-semibold">Room No: {room.roomNo}</p>
          <p>Beds: {room.noOfBed}</p>
          <p>Persons: {room.noOfPerson}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
