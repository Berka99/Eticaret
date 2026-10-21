import React from 'react'
import './ProductDetails.css'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import Gallery from './Gallery/Gallery'
import Info from './Info/Info'
import Tabs from './Tabs/Tabs'

function ProductDetails({ singleProduct }) {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <div className="single-content">
            <main className="site-main">
              <Gallery singleProduct={singleProduct} />
              <Info singleProduct={singleProduct} />
            </main>
          </div>
          <Tabs singleProduct={singleProduct} />
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
