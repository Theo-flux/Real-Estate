import React from 'react'
import Tabs from './Tabs'

export default function Cta(){
  return(
    <div className="CTA container">
      <div>
        <h1 class="cta-title">Al Atash Group</h1>
        <h3 className="tagline">Yor Tag Line Here</h3>
      </div>

      <form className="form" action="#">
        <i class="fas fa-map-marker-alt"></i>
        <input name="search-box" placeholder="search for the location you want"/>
        <button type="Submit">search</button>
      </form>

      <div className="tabs">
        <Tabs active={true} name="Buy"/>
        <Tabs name="Rent"/>
        <Tabs name="Plaza"/>
        <Tabs name="Gallery"/>
      </div>
  </div>
  )
}
