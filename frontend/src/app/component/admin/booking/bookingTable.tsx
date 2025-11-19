'use client';

import React, { forwardRef, useImperativeHandle } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { Pencil, Trash2 } from 'lucide-react';

interface Booking {
  _id: string;
  bookingId?: string;
  userId: string;
  roomNo: string;
  checkInDate: string;
  checkOutDate: string;
  noOfPerson: number;
  totalPrice: number;
  status: string;
  roomImg: string[];
  createdAt?: string;
  updatedAt?: string;
}

interface BookingTableProps {
  bookings: Booking[];
  loading?: boolean;
  onDelete?: (id: string) => void | Promise<void>;
  onUpdate?: (booking: Booking) => void;
  onRefetch?: () => void;
}

const BookingTable = forwardRef(
  (
    { bookings, loading = false, onDelete, onUpdate, onRefetch }: BookingTableProps,
    ref: React.Ref<{ refetch: () => void } | null>
  ) => {
    useImperativeHandle(ref, () => ({
      refetch: () => {
        if (onRefetch) onRefetch();
      },
    }));

    const handleDelete = (id: string) => {
      if (onDelete) onDelete(id);
    };

    const handleUpdateClick = (booking: Booking) => {
      if (onUpdate) onUpdate(booking);
    };

    return (
    <div className="mt-6 overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Room</TableHead>
            <TableHead>Check-In</TableHead>
            <TableHead>Check-Out</TableHead>
            <TableHead>Guests</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={9} className="text-center">
                Loading...
              </TableCell>
            </TableRow>
          ) : bookings.length === 0 ? (
            <TableRow>
              <TableCell colSpan={9} className="text-center text-muted-foreground">
                No bookings found.
              </TableCell>
            </TableRow>
          ) : (
            bookings.map((booking, index) => (
              <TableRow key={booking._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-semibold">{booking.roomNo}</TableCell>
                <TableCell>
                  {format(new Date(booking.checkInDate), 'dd MMM yyyy')}
                </TableCell>
                <TableCell>
                  {format(new Date(booking.checkOutDate), 'dd MMM yyyy')}
                </TableCell>
                <TableCell>{booking.noOfPerson}</TableCell>
                <TableCell>₹ {booking.totalPrice}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      booking.status === 'confirmed'
                        ? 'default'
                        : booking.status === 'pending'
                        ? 'outline'
                        : 'secondary'
                    }
                  >
                    {booking.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {booking.roomImg?.[0] ? (
                    <img
                      src={booking.roomImg[0]}
                      alt="Room"
                      className="h-12 w-20 rounded-md object-cover"
                    />
                  ) : (
                    <span className="text-muted-foreground text-sm">No image</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleUpdateClick(booking)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleDelete(booking._id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

    </div>
  );
});

export default BookingTable;
