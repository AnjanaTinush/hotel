'use client'

import React, { useState } from 'react'
import { Service } from '../../../../../types/service'

interface Props {
  onSuccess: (service: Service) => void
  onClose: () => void
}

interface ServiceData {
  name: string
  description: string
}

const AddServiceModal = ({ onSuccess, onClose }: Props) => {
  const [formData, setFormData] = useState<ServiceData>({ name: '', description: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      setError('Name is required')
      return
    }

    setError(null)
    setLoading(true)

    const newService: Service = {
      _id: `s_${Date.now()}`,
      name: formData.name.trim(),
      description: formData.description.trim(),
    }

    await new Promise((r) => setTimeout(r, 150))

    onSuccess(newService)
    setLoading(false)
    setFormData({ name: '', description: '' })
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative max-w-md w-full bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-lg font-semibold">Add Service</h2>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {error && <p className="text-sm text-red-600">{error}</p>}

          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border px-3 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full rounded-md border px-3 py-2"
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded bg-sky-600 text-white"
            >
              {loading ? 'Saving…' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddServiceModal
