import React from 'react'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ProductDetailsPage() {
  const { id: productId } = useParams()
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const [singleProduct, setSingleProduct] = useState(null)

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products/${productId}`)

        if (!response.ok) {
          throw new Error('Failed to fetch product.')
        }

        const data = await response.json()
        setSingleProduct(data)
      } catch (error) {
        console.log('Data Error:', error)
      }
    }
    fetchSingleProduct()
  }, [apiUrl, productId])
  return singleProduct ? (
    <ProductDetails singleProduct={singleProduct} />
  ) : (
    <p>Loading...</p>
  )
}

export default ProductDetailsPage
