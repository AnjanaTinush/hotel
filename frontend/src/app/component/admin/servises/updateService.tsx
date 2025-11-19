'use client'

import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Service } from '../../../../../types/service'

interface UpdateServiceModalProps {
  serviceId: string
  currentName: string
  currentDescription: string
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: (service: Service) => void
}

const UpdateServiceModal: React.FC<UpdateServiceModalProps> = ({
  serviceId,
  currentName,
  currentDescription,
  open,
  onOpenChange,
  onSuccess,
}) => {
  const [name, setName] = useState(currentName)
  const [description, setDescription] = useState(currentDescription)
  const [loading, setLoading] = useState(false)

  // Sync form values each time modal opens
  useEffect(() => {
    if (open) {
      setName(currentName)
      setDescription(currentDescription)
    }
  }, [open, currentName, currentDescription])

  const handleUpdate = async () => {
    if (!name.trim()) return

    setLoading(true)

    const updated: Service = {
      _id: serviceId,
      name: name.trim(),
      description: description.trim(),
    }

    await new Promise((r) => setTimeout(r, 150))

    onSuccess(updated)
    setLoading(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="space-y-4">
        <DialogHeader>
          <DialogTitle>Update Service</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <Input
            placeholder="Service name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="Service description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Button onClick={handleUpdate} disabled={loading} className="w-full">
            {loading ? 'Updating…' : 'Update'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default UpdateServiceModal
