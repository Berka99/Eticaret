import { Button, Form, Input, InputNumber, Spin, message } from 'antd'
import { useState } from 'react'

const CreateCouponPage = () => {
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const apiUrl = import.meta.env.VITE_API_BASE_URL

  const onFinish = async (values) => {
    setLoading(true)
    try {
      const response = await fetch(`${apiUrl}/api/coupons`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        message.success('Coupon created successfully.')
        form.resetFields()
      } else {
        message.error('Coupon creation failed.')
      }
    } catch (error) {
      console.log('Coupon update error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Coupon Code"
          name="code"
          rules={[
            {
              required: true,
              message: 'Please input your coupon code!',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Coupon Discount Rate"
          name="discountPercent"
          rules={[
            {
              required: true,
              message: 'Please input your coupon discount rate!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </Spin>
  )
}

export default CreateCouponPage
