'use client'
import React, { useEffect, useState } from 'react'
import {
  Modal,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Button,
  Row,
  Col,
  message,
} from 'antd'

const { RangePicker } = DatePicker

const AddBookingPopup = ({
  open,
  onClose,
  onCreated,
}: {
  open: boolean
  onClose: () => void
  onCreated?: () => void
}) => {
  const [form] = Form.useForm()
  const [rooms, setRooms] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

 

  const handleSubmit = async (values: any) => {
   
  }

  return (
    <Modal
      title="Add New Booking"
      open={open}
      onCancel={onClose}
      onOk={() => form.submit()}
      confirmLoading={loading}
    >
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <Form.Item label="User ID" name="userId" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Room" name="roomId" rules={[{ required: true }]}>
          <Select placeholder="Select a room">
            {rooms.map((room) => (
              <Select.Option key={room._id} value={room._id}>
                {room.roomNo}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Check-in / Check-out Dates"
          name="dates"
          rules={[{ required: true }]}
        >
          <RangePicker style={{ width: '100%' }} />
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="No. of Persons"
              name="noOfPerson"
              rules={[{ required: true }]}
            >
              <InputNumber min={1} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Total Price"
              name="totalPrice"
              rules={[{ required: true }]}
            >
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  )
}

export default AddBookingPopup
