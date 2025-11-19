'use client'

import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { UpdateUserDialog } from '../../../component/admin/customers/UpdateUserUser'

const AllCustomerstable = () => {
  const sampleUsers = [
    { _id: 'u1', userId: 'CUST-1001', name: 'Alice Johnson', email: 'alice@example.com', role: 'guest' },
    { _id: 'u2', userId: 'CUST-1002', name: 'Bob Williams', email: 'bob@example.com', role: 'member' },
    { _id: 'u3', userId: 'CUST-1003', name: 'Catherine Smith', email: 'catherine@example.com', role: 'guest' },
    { _id: 'u4', userId: 'CUST-1004', name: 'David Brown', email: 'david@example.com', role: 'admin' },
    { _id: 'u5', userId: 'CUST-1005', name: 'Emma Davis', email: 'emma@example.com', role: 'guest' },
  ]

  const [users, setUsers] = useState<any[]>(sampleUsers)
  const [open, setOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [query, setQuery] = useState('')

  

 
  const handleDelete = async (userId: string) => {
    const confirmed = window.confirm('Delete this user? This action cannot be undone.')
    if (!confirmed) return
    setUsers((prev) => prev.filter((u) => u._id !== userId))
  }

  const handleUpdateClick = (user: any) => {
    setSelectedUser(user)
    setOpen(true)
  }

  const handleDialogClose = () => {
    setOpen(false)
    setSelectedUser(null)
  }

  const filtered = users.filter((u) =>
    `${u.name} ${u.email} ${u.userId} ${u.role}`.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">All Customers</h2>
          <p className="text-sm text-muted-foreground">Manage hotel customers — view, edit or remove accounts.</p>
        </div>

        <div className="flex items-center gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search customers..."
            className="px-3 py-2 border rounded-md text-sm w-64"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No customers found.
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((user: any) => (
                <TableRow key={user._id}>
                  <TableCell>{user.userId || 'N/A'}</TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleUpdateClick(user)}>
                        Update
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => handleDelete(user._id)}>
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <UpdateUserDialog open={open} onClose={handleDialogClose} user={selectedUser} />
    </div>
  )
}

export default AllCustomerstable
