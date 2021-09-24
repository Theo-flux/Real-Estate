import React from 'react'
import Cards from './Cards'
import House1 from '../images/house-1.svg'
import House2 from '../images/house-2.svg'
import House3 from '../images/house-3.svg'
export default function Society(props){

  return(
    <div className="main container">
      <div className="main-head">

        <div className="main-head-title">
          <p><small>{props.type}</small></p>
          <h3>{props.feature}</h3>
        </div>

        <div className="main-head-side">
          <a className="side-links side-link-active"><i className="fas fa-home"></i> House</a>
          <a className="side-links"><i className="fas fa-building"></i> Apartment</a>
          <a className="side-links"><i className="fas fa-city"></i> Villa</a>
          <a className="side-links side-link-active">view all</a>
        </div>
      </div>

      <div className="main-body">
        <Cards
          image={House1}
          tagColor="red"
          tagName="Popular"
          tagIcon="fas fa-fire"
          cardPrice="35,000,000"
          name="1 Kanal House Airport Housing Society"
          bed = "5"
          toilet = "4"
          kanal = "1"
        />

        <Cards
          image={House2}
          tagColor="blue"
          tagName="New House"
          tagIcon="fas fa-home"
          cardPrice="23,000,000"
          name="14 Marla House Airport Housing Society"
          bed = "5"
          toilet = "4"
          kanal = "1"
        />

        <Cards
          image={House3}
          tagColor="green"
          tagName="Best Deals"
          tagIcon="fas fa-wallet"
          cardPrice="43,000,000"
          name="12 Marla House Airport Housing Society"
          bed = "5"
          toilet = "4"
          kanal = "1"
        />

      </div>

    </div>
  )
}
