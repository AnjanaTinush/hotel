'use client'

import React, { useState } from 'react'
import { Card, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Edit3, Trash2 } from 'lucide-react'
import UpdateServiceModal from '../../../component/admin/servises/updateService'
import { Service } from '../../../../../types/service'

interface ServisesCardProps {
  id: string
  name: string
  description?: string
  onRemove?: () => void
  onUpdateSuccess?: (service: Service) => void
}

const ServisesCard: React.FC<ServisesCardProps> = ({
  id,
  name,
  description,
  onRemove,
  onUpdateSuccess,
}) => {
  const [isUpdateOpen, setIsUpdateOpen] = useState(false)

  return (
    <>
      <Card className="w-full bg-white rounded-lg shadow-sm border hover:shadow-md transition">
        <div className="flex items-start gap-4 p-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-semibold">
            {name.charAt(0).toUpperCase()}
          </div>

          <div className="flex-1 min-w-0">
            <CardTitle className="text-sm font-semibold text-gray-900 truncate">
              {name}
            </CardTitle>
                  <CardContent className="p-0 mt-1">
                    <p className="text-sm text-gray-500 line-clamp-2">{description ?? ''}</p>
                  </CardContent>
          </div>

          <div className="flex flex-col items-end gap-2">
            <Button variant="ghost" size="icon" onClick={() => setIsUpdateOpen(true)}>
              <Edit3 className="h-4 w-4 text-sky-600" />
            </Button>

            <Button variant="ghost" size="icon" onClick={onRemove}>
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </div>
        </div>
      </Card>

      <UpdateServiceModal
        serviceId={id}
        currentName={name}
        currentDescription={description ?? ''}
        open={isUpdateOpen}
        onOpenChange={setIsUpdateOpen}
        onSuccess={(updated) => onUpdateSuccess?.(updated)}
      />
    </>
  )
}

export default ServisesCard
