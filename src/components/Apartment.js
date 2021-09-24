import React from 'react'
import Cards from './Cards'
import Apartment1 from '../images/apartment-1.svg'
import Apartment2 from '../images/apartment-2.svg'
import Apartment3 from '../images/apartment-3.svg'
import Apartment4 from '../images/apartment-4.svg'
import Apartment5 from '../images/apartment-5.svg'
import Apartment6 from '../images/apartment-6.svg'

export default function Apartment(props){

  return(
    <div className="main container">
      <div className="main-head">

        <div className="main-head-title">
          <p><small>{props.type}</small></p>
          <h3>{props.feature}</h3>
        </div>

        <div className="main-head-side">
          <a className="side-links"><i className="fas fa-home"></i> House</a>
          <a className="side-links side-link-active"><i className="fas fa-building"></i> Apartment</a>
          <a className="side-links"><i className="fas fa-city"></i> Villa</a>
          <a className="side-links side-link-active">view all</a>
        </div>
      </div>

      <div className="main-body">
        <Cards
          image={Apartment1}
          tagColor="green"
          tagName="Best Deals"
          tagIcon="fas fa-wallter"
          cardPrice="475.22"
          name="E-11/4 Makkah Tower 1 Bed 800sqft"
          bed = "5"
          toilet = "4"
          kanal = "1"
        />

        <Cards
          image={Apartment2}
          tagColor="red"
          tagName="Popular"
          tagIcon="fas fa-fire"
          cardPrice="396.84"
          name="Two Full Furnished Master Bedroom Appartment"
          bed = "5"
          toilet = "4"
          kanal = "1"
        />

        <Cards
          image={Apartment3}
          tagColor="blue"
          tagName="New House"
          tagIcon="fas fa-home"
          cardPrice="948.55"
          name="1 Bed Fully Brand New Furnished Flat"
          bed = "5"
          toilet = "4"
          kanal = "1"
        />

        <Cards
          image={Apartment4}
          tagColor="red"
          tagName="Popular"
          tagIcon="fas fa-fire"
          cardPrice="106.58"
          name="A Beautiful Apartment For Rent In Islamabad"
          bed = "5"
          toilet = "4"
          kanal = "1"
        />

        <Cards
          image={Apartment5}
          tagColor="green"
          tagName="Best Deals"
          tagIcon="fas fa-wallet"
          cardPrice="219.78"
          name="A Beautiful Apartment For Rent In Islamabad"
          bed = "5"
          toilet = "4"
          kanal = "1"
        />

        <Cards
          image={Apartment6}
          tagColor="green"
          tagName="Best Deals"
          tagIcon="fas fa-wallet"
          cardPrice="105.55"
          name="Centrally Located Flat For Rent In E-11"
          bed = "5"
          toilet = "4"
          kanal = "1"
        />

      </div>

    </div>
  )
}
