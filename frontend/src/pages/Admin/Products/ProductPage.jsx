import { Button, Popconfirm, Space, Table, message } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductPage = () => {
  const [dataSource, setDataSource] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const apiUrl = import.meta.env.VITE_API_BASE_URL

  const columns = [
    {
      title: 'Product Image',
      dataIndex: 'img',
      key: 'img',
      render: (imgSrc) => <img src={imgSrc[0]} alt="Image" width={100} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <b>{text}</b>,
    },
    {
      title: 'Category',
      dataIndex: 'categoryName',
      key: 'categoryName',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text) => <span>{text.current.toFixed(2)}</span>,
    },
    {
      title: 'Discount',
      dataIndex: 'price',
      key: 'price',
      render: (text) => <span>%{text.discount}</span>,
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            onClick={() => navigate(`/admin/products/update/${record._id}`)}
          >
            Update
          </Button>
          <Popconfirm
            title="Delete product?"
            description="Are you sure you want to delete this product?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteProducts(record._id)}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  const deleteProducts = async (productId) => {
    try {
      const response = await fetch(`${apiUrl}/api/products/${productId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        message.success('Category deleted.')
        setDataSource((prevProducts) => {
          return prevProducts.filter((product) => product._id !== productId)
        })
      } else {
        message.error('Delete failed.')
      }
    } catch (error) {
      console.log('Delete Error:', error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const [categoryResponse, productResponse] = await Promise.all([
          fetch(`${apiUrl}/api/categories`),
          fetch(`${apiUrl}/api/products`),
        ])

        if (!categoryResponse.ok || !productResponse.ok) {
          throw new Error('Failed to fetch data.')
        }
        const [categoriesData, productsData] = await Promise.all([
          categoryResponse.json(),
          productResponse.json(),
        ])

        const productsWithCategories = productsData.map((product) => {
          const categoryId = product.category
          const category = categoriesData.find(
            (category) => category._id === categoryId
          )
          return { ...product, categoryName: category ? category.name : '' }
        })
        setDataSource(productsWithCategories)
      } catch (error) {
        console.log('Data Error:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [apiUrl])

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => record._id}
      loading={loading}
    />
  )
}

export default ProductPage
