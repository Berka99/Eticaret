import React from 'react'
import './Reviews.css'
import ReviewForm from './ReviewForm'
import ReviewItem from './ReviewItem'

function Reviews({ active, singleProduct }) {
  return (
    <div className={`tab-panel-reviews ${active}`}>
      {singleProduct.reviews.length > 0 ? (
        <div className="comments">
          <ol className="comment-list">
            {singleProduct.reviews.map((item, index) => (
              <ReviewItem key={index} item={item} />
            ))}
          </ol>
        </div>
      ) : (
        <h3 className="no-review">There are no reviews yet.</h3>
      )}

      <div className="review-form-wrapper">
        <h2>Add a review</h2>
        <ReviewForm />
      </div>
    </div>
  )
}

export default Reviews
