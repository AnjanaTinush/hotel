'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface AddRoomModalProps {
  open: boolean;
  onClose: () => void;
  onRoomAdded: (newRoom: any) => void;
}

const AddRoomModal: React.FC<AddRoomModalProps> = ({ open, onClose }) => {
  const [form, setForm] = useState({
    roomNo: '',
    noOfBed: 1,
    noOfPerson: 1,
    images: [''],
  });

  const [loading, setLoading] = useState(false);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!open) {
      setForm({
        roomNo: '',
        noOfBed: 1,
        noOfPerson: 1,
        images: [''],
      });
    }
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'noOfBed' || name === 'noOfPerson' ? Number(value) : value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      images: value ? [value] : [],
    }));
  };

  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = async () => {};

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Room</DialogTitle>
          <DialogDescription>
            Fill in the details below to add a new room to your hotel.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="roomNo">
              Room Number *
            </label>
            <Input
              id="roomNo"
              name="roomNo"
              placeholder="e.g., 101, A-202"
              value={form.roomNo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="noOfBed">
              Number of Beds *
            </label>
            <Input
              id="noOfBed"
              name="noOfBed"
              type="number"
              min="1"
              placeholder="Number of Beds"
              value={form.noOfBed}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="noOfPerson">
              Number of Persons *
            </label>
            <Input
              id="noOfPerson"
              name="noOfPerson"
              type="number"
              min="1"
              placeholder="Number of Persons"
              value={form.noOfPerson}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="images">
              Image URL (Optional)
            </label>
            <Input
              id="images"
              name="images"
              placeholder="https://example.com/room-image.jpg"
              value={form.images[0] || ''}
              onChange={handleImageChange}
            />
            <p className="text-xs text-gray-500">
              Enter a valid URL for the room image (optional)
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Room'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddRoomModal;