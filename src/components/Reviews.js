import React from 'react'
import Carousel from './Carousel'

export default function Reviews(props){
  return(
    <div className="main">
      <div className="main-head container">

        <div className="main-head-title">
          <p><small>{props.type}</small></p>
          <h3>{props.feature}</h3>
        </div>

        <div className="main-head-side">
          <a className="side-links side-link-active">view all</a>
        </div>
      </div>
      <Carousel />
    </div>
  )
}
