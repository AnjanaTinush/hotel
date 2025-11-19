'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState, useEffect } from 'react';

interface UpdateRoomModalProps {
  open: boolean;
  onClose: () => void;
  roomData: {
    _id: string;             // ✅ Required for API call
    roomNo: string;
    images: string[];
    noOfBed: number;
    noOfPerson: number;
  };
  onSave: (updatedRoom: {
    _id: string;
    roomNo: string;
    images: string[];
    noOfBed: number;
    noOfPerson: number;
  }) => void;
}

const UpdateRoomModal: React.FC<UpdateRoomModalProps> = ({
  open,
  onClose,
  roomData,
  onSave,
}) => {
  const [form, setForm] = useState({ ...roomData });

  useEffect(() => {
    if (open) {
      setForm({ ...roomData });
    }
  }, [open, roomData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'noOfBed' || name === 'noOfPerson' ? Number(value) : value,
    }));
  };

  const handleSubmit = async () => {};

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Room {roomData.roomNo}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            name="roomNo"
            placeholder="Room Number"
            value={form.roomNo}
            onChange={handleChange}
          />
          <Input
            name="noOfBed"
            type="number"
            placeholder="Number of Beds"
            value={form.noOfBed}
            onChange={handleChange}
          />
          <Input
            name="noOfPerson"
            type="number"
            placeholder="Number of Persons"
            value={form.noOfPerson}
            onChange={handleChange}
          />
          <Input
            name="images"
            placeholder="Image URL"
            value={form.images[0] || ''}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                images: [e.target.value],
              }))
            }
          />
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateRoomModal;
