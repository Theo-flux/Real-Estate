import React from 'react'
import elipse1 from '../images/small-1.svg'
import elipse2 from '../images/small-2.svg'
import circle1 from '../images/circle-1.svg'
import circle2 from '../images/circle-2.svg'
import elipse3 from '../images/small-3.svg'
import elipse4 from '../images/small-4.svg'
import circle3 from '../images/circle-3.svg'
import circle4 from '../images/circle-4.svg'

export default function Subscribe() {
  return(
    <div className="subscribe">
      <div className=" subscribe-container container">
        <div className="subscribe-img">
          <div className="subscribe-img-row">
            <img src={elipse1} />
            <img src={circle1} />
          </div>

          <div className="subscribe-img-row">
            <img src={circle2} />
            <img src={elipse2} />
          </div>
        </div>

        <div className="subscribe-details">
          <h1 class="subscribe-title">Subscribe For More Info and update from our website</h1>
          <form className="form" action="#">
            <i class="fas fa-envelope"></i>
            <input name="search-box" placeholder="Your Email Here"/>
            <button type="Submit">Subscribe!</button>
          </form>
        </div>

        <div className="subscribe-img">
          <div className="subscribe-img-row">
            <img src={elipse3} />
            <img src={circle3} />
          </div>

          <div className="subscribe-img-row">
            <img src={circle4} />
            <img src={elipse4} />
          </div>
        </div>
      </div>
    </div>
  )
}
