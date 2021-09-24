import React from 'react'
import Form from './Form'
import phone from '../images/phone.svg'

export default function Quote() {
  return(
    <div className="quote">
      <div className="quote-container container">
        <div className="quote-right">
          <p><small>Want More From Us...</small></p>
          <h3>Get A Quote</h3>
          <div className="quote-right-section">
            <Form />
          </div>
        </div>

        <div className="quote-left">
          <img src={phone} />
        </div>
      </div>
    </div>
  )
}
