import { Button, Form, Input, Spin, message } from 'antd'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateCategoryPage = () => {
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const params = useParams()
  const couponId = params.id
  const apiUrl = import.meta.env.VITE_API_BASE_URL

  const onFinish = async (values) => {
    setLoading(true)
    try {
      const response = await fetch(`${apiUrl}/api/coupons/${couponId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        message.success('Coupon updated successfully.')
      } else {
        message.error('Coupon update failed.')
      }
    } catch (error) {
      console.log('Coupon Update Error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const fetchSingleCategory = async () => {
      setLoading(true)

      try {
        const response = await fetch(`${apiUrl}/api/coupons/${couponId}`)

        if (!response.ok) {
          throw new Error('Failed to fetch category.')
        }

        const data = await response.json()

        if (data) {
          form.setFieldsValue({
            code: data.code,
            discountPercent: data.discountPercent,
          })
        }
      } catch (error) {
        console.log('Data Error:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchSingleCategory()
  }, [apiUrl, couponId, form])

  return (
    <Spin spinning={loading}>
      <Form
        form={form}
        name="basic"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label="Coupon Name"
          name="code"
          rules={[
            {
              required: true,
              message: 'Please input your coupon name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Coupon Discount Percent"
          name="discountPercent"
          rules={[
            {
              required: true,
              message: 'Please input your coupon image link!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </Spin>
  )
}

export default UpdateCategoryPage
