'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from '@/components/ui/select';

interface UpdateBookingModalProps {
  open: boolean;
  onClose: () => void;
  bookingId: string;
  currentStatus: string;
  onUpdateStatus: (status: string) => void;
}

const UpdateBookingModal: React.FC<UpdateBookingModalProps> = ({
  open,
  onClose,
  bookingId,
  currentStatus,
  onUpdateStatus,
}) => {
  const [status, setStatus] = useState(currentStatus);

  useEffect(() => {
    if (open) {
      setStatus(currentStatus); // reset to current status on open
    }
  }, [open, currentStatus]);

  const handleSubmit = () => {
    onUpdateStatus(status);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Booking Status</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Update</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateBookingModal;
