'use client'

import React, { useState } from 'react'
import ServisesCard from '@/app/component/admin/servises/servisesCard'
import AddServiceModal from '../../../component/admin/servises/addServiceModel';
import { toast } from 'sonner'

interface Service {
  _id: string
  name: string
  description?: string
}

const Services = () => {
  const sampleServices: Service[] = [
    { _id: 's1', name: 'Breakfast', description: 'Continental breakfast included' },
    { _id: 's2', name: 'Airport Pickup', description: 'Pickup and drop service' },
    { _id: 's3', name: 'Spa', description: 'Relaxing spa treatments' },
    { _id: 's4', name: 'Laundry', description: 'Express laundry service' },
    { _id: 's5', name: 'Room Service', description: '24/7 in-room dining' },
  ]

  const [services, setServices] = useState<Service[]>(sampleServices)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleRemoveService = (serviceId: string) => {
    setServices((prev) => prev.filter((s) => s._id !== serviceId))
    toast.success('Service removed successfully!')
  }

  const handleAddService = (newService: Service) => {
    setServices((prev) => [newService, ...prev])
    toast.success('Service added')
    setShowModal(false)
  }

  const handleUpdateService = (updated: Service) => {
    setServices((prev) => prev.map((s) => (s._id === updated._id ? updated : s)))
    toast.success('Service updated')
  }

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Services</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          + Add Service
        </button>
      </div>

      {services.map((service) => (
        <ServisesCard
  id={service._id}
  name={service.name}
  description={service.description}
  onUpdateSuccess={handleUpdateService}
  onRemove={() => handleRemoveService(service._id)}
/>

      ))}

      {showModal && (
        <AddServiceModal
          onClose={() => setShowModal(false)}
          onSuccess={handleAddService}
        />
      )}
    </div>
  )
}

export default Services