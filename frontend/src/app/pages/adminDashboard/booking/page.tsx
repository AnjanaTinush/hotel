'use client'
import React, { useRef, useState } from 'react'
import BookingSummery from '@/app/component/admin/booking/bookingSummery'
import BookingTable from '@/app/component/admin/booking/bookingTable'
import BookinhFiltterSction from '@/app/component/admin/booking/bookinhFIltterSction'
import AddBookingPopup from '@/app/component/admin/booking/AddBookingPopup'
import { Button } from 'antd'

const sampleBookings = [
  {
    _id: 'b1',
    userId: 'u1',
    roomNo: '101',
    checkInDate: new Date().toISOString(),
    checkOutDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
    noOfPerson: 2,
    totalPrice: 2500,
    status: 'confirmed',
    roomImg: [],
  },
  {
    _id: 'b2',
    userId: 'u2',
    roomNo: '102',
    checkInDate: new Date().toISOString(),
    checkOutDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
    noOfPerson: 1,
    totalPrice: 1500,
    status: 'pending',
    roomImg: [],
  },
  {
    _id: 'b3',
    userId: 'u3',
    roomNo: '201',
    checkInDate: new Date().toISOString(),
    checkOutDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    noOfPerson: 3,
    totalPrice: 4200,
    status: 'cancelled',
    roomImg: [],
  },
  {
    _id: 'b4',
    userId: 'u4',
    roomNo: '202',
    checkInDate: new Date().toISOString(),
    checkOutDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
    noOfPerson: 2,
    totalPrice: 3200,
    status: 'confirmed',
    roomImg: [],
  },
  {
    _id: 'b5',
    userId: 'u5',
    roomNo: '301',
    checkInDate: new Date().toISOString(),
    checkOutDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    noOfPerson: 4,
    totalPrice: 6800,
    status: 'pending',
    roomImg: [],
  },
]

const Booking = () => {
  const [open, setOpen] = useState(false)
  const [bookings, setBookings] = useState(sampleBookings)
  const tableRef = useRef<{ refetch: () => void } | null>(null)

  const handleBookingCreated = (newBooking?: any) => {
    // Add a new sample booking (or use provided newBooking)
    const bookingToAdd = newBooking || {
      _id: `b${Date.now()}`,
      userId: 'u_new',
      roomNo: '999',
      checkInDate: new Date().toISOString(),
      checkOutDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
      noOfPerson: 1,
      totalPrice: 1000,
      status: 'pending',
      roomImg: [],
    }

    setBookings((prev) => [bookingToAdd, ...prev])
    // notify table via refetch if needed
    tableRef.current?.refetch?.()
  }

  const handleDelete = (id: string) => {
    setBookings((prev) => prev.filter((b) => b._id !== id))
  }

  const handleUpdate = (booking: any) => {
    // simple replace by id
    setBookings((prev) => prev.map((b) => (b._id === booking._id ? booking : b)))
  }

  return (
    <div>
      <BookingSummery />
      <BookinhFiltterSction />

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
        <Button type="primary" onClick={() => setOpen(true)}>
          Add Booking
        </Button>
      </div>

      <BookingTable
        ref={tableRef}
        bookings={bookings}
        onRefetch={() => {
          // for demo, we just log — in real app you'd re-fetch from API
          // console.log('refetch requested')
        }}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />

      <AddBookingPopup
        open={open}
        onClose={() => setOpen(false)}
        onCreated={handleBookingCreated}
      />
    </div>
  )
}

export default Booking
