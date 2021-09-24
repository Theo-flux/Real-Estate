import React from 'react'
import ReviewCard from './ReviewCard'
import houseReview1 from '../images/review-1.svg'
import houseReview2 from '../images/review-2.svg'
import houseReview3 from '../images/review-3.svg'
import client1 from '../images/client-1.svg'
import client2 from '../images/client-2.svg'
import client3 from '../images/client-3.svg'

export default function Carousel(){
  return(
    <div className="carousel-container">
      <div className="carousel">
        <ReviewCard
          image = {houseReview1}
          title = 'Best! I got the house I wanted through this Website'
          review = 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.'
          customer = {client1}
          name = 'Dianne Russell'
          job =  'Manager Director'
          rating = '5.0'
        />

        <ReviewCard
          image = {houseReview1}
          title = 'Best! I got the house I wanted through this Website'
          review = 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.'
          customer = {client2}
          name = 'Dianne Russell'
          job =  'Manager Director'
          rating = '5.0'
        />

        <ReviewCard
          style={{id:"review3"}}
          image = {houseReview1}
          title = 'Best! I got the house I wanted through this Website'
          review = 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.'
          customer = {client3}
          name = 'Dianne Russell'
          job =  'Manager Director'
          rating = '5.0'
        />
      </div>
      <div className="carousel-dots">
        <a href="#"></a>
        <a href="#" className="current"></a>
        <a href="#review3"></a>
      </div>
    </div>
  )
}
