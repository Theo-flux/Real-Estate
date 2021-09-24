import React from 'react'
import map from '../images/map.svg'

export default function Contact(){
  return(
    <div className="contact">
      <div className="contact-container container">

        <div className="contact-right">
          <p><small>For More Enquiries...</small></p>
          <h3>Contact Us</h3>
          <div className="contact-right-section">
            <p><small>G-13/2 Islamabad, Islamabad Capital Territory</small></p>
            <p><small>+923554283498</small></p>
            <p><small>Aliyanbaig.up@gmail.com</small></p>
          </div>
          <a href="#">contact us</a>
        </div>

        <div className="contact-left">
          <img src={map} />
        </div>

      </div>
    </div>
  )
}
