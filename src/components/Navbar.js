import React from 'react'

export default function Navbar() {
  return(
    <div className="Navbar container">
      <div className="title">
        <h3>LOGO</h3>
      </div>

      <div className="navigations">
        <ul>
          <li className="active"><a href="#">Society</a></li>
          <li><a href="#">Plaza</a></li>
          <li><a href="#">Buy And Sell</a></li>
          <li><a href="#">Rent</a></li>
          <li><a href="#">Plot Size</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Property Dealer</a></li>
          <li><a href="#">Jobs</a></li>
          <li><button class="btn"><i class="fas fa-plus"></i> Add Property</button></li>
          <li className="alert"><i class="far fa-bell"></i></li>
          
        </ul>
      </div>
    </div>
  )
}
