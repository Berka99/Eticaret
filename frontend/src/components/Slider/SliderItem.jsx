import React from 'react'
import { Link } from 'react-router-dom'

function SliderItem({ imageSrc }) {
  return (
    <div className="slider-item fade">
      <div className="slider-image">
        <img src={imageSrc} className="img-fluid" alt="" />
      </div>
      <div className="container">
        <p className="slider-title">SUMMER 2024</p>
        <h2 className="slider-heading">Save up to 40%</h2>
        <Link to={'/shop'} className="btn btn-lg btn-primary">
          Explore Now
        </Link>
      </div>
    </div>
  )
}

export default SliderItem
