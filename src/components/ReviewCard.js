import React from 'react'

export default function ReviewCard({image,title,review,customer,name,job,rating}){
  return(
    <div className="review-card">
      <img className="review-image" src={image} />
      <div className="review-details">

        <h4>{title}</h4>
        <p><small>{review}</small></p>

        <div className="review-info">

          <div className="review-info-details">
            <img src={customer} />
            <div className="review-info-name">
              <p className="name"><small>{name}</small></p>
              <p><small>{job}</small></p>
            </div>
          </div>

          <div className="review-info-rating">
            <h5><i className="fa fas-star"></i>{rating}</h5>
          </div>

        </div>
      </div>
    </div>
  )
}
