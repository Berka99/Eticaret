import { Form, Input, InputNumber, Select, Spin, message, Button } from 'antd'
import { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateProductPage = () => {
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [singleProduct, setSingleProduct] = useState([])
  const [form] = Form.useForm()
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const params = useParams()
  const productId = params.id
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const [categoryResponse, singleProductResponse] = await Promise.all([
          fetch(`${apiUrl}/api/categories`),
          fetch(`${apiUrl}/api/products/${productId}`),
        ])

        if (!categoryResponse.ok || !singleProductResponse.ok) {
          message.error('Failed to fetch data.')
          return
        }
        const [categoriesData, singleProductData] = await Promise.all([
          categoryResponse.json(),
          singleProductResponse.json(),
        ])

        setCategories(categoriesData)

        if (singleProductData) {
          form.setFieldsValue({
            name: singleProductData.name,
            category: singleProductData.category,
            current: singleProductData.price.current,
            discount: singleProductData.price.discount,
            description: singleProductData.description,
            img: singleProductData.img.join('\n'),
            colors: singleProductData.colors.join('\n'),
            sizes: singleProductData.sizes.join('\n'),
          })
        }
      } catch (error) {
        console.log('Data Error:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [apiUrl, productId, form])

  const onFinish = async (values) => {
    const imageLinks = values.img.split('\n').map((link) => link.trim())

    const colors = values.colors.split('\n').map((link) => link.trim())

    const sizes = values.sizes.split('\n').map((link) => link.trim())
    setLoading(true)

    try {
      const response = await fetch(`${apiUrl}/api/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          price: { current: values.current, discount: values.discount },
          colors,
          sizes,
          img: imageLinks,
        }),
      })

      if (response.ok) {
        message.success('Category updated successfully.')
        navigate('/admin/products')
      } else {
        message.error('Category update failed.')
      }
    } catch (error) {
      console.log('Category update error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Prodcut Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please enter a product name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Product Category"
          name="category"
          rules={[
            {
              required: true,
              message: 'Please select a category!',
            },
          ]}
        >
          <Select>
            {categories.map((category) => (
              <Select.Option value={category._id} key={category._id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Price"
          name="current"
          rules={[
            {
              required: true,
              message: 'Lütfen ürün fiyatını girin!',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Discount Rate"
          name="discount"
          rules={[
            {
              required: true,
              message: 'Lütfen bir ürün indirim oranı girin!',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Product Description"
          name="description"
          rules={[
            {
              required: true,
              message: 'Please enter a product description!',
            },
          ]}
        >
          <ReactQuill
            theme="snow"
            style={{
              backgroundColor: 'white',
            }}
          />
        </Form.Item>
        <Form.Item
          label="Product Images (Links)"
          name="img"
          rules={[
            {
              required: true,
              message: 'Please enter at least 4 product image link!',
            },
          ]}
        >
          <Input.TextArea
            placeholder="Please enter each image link on a new line."
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>
        <Form.Item
          label="Product Colors (RGB Codes)"
          name="colors"
          rules={[
            {
              required: true,
              message: 'Please enter at least 1 product color!',
            },
          ]}
        >
          <Input.TextArea
            placeholder="Please enter each color code on a new line."
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>
        <Form.Item
          label="Product Sizes"
          name="sizes"
          rules={[
            {
              required: true,
              message: 'Please enter at least 1 product size!',
            },
          ]}
        >
          <Input.TextArea
            placeholder="Please enter each size on a new line."
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </Spin>
  )
}

export default UpdateProductPage
