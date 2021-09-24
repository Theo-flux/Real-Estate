import React from 'react'
import Tag from './Tag'
import Facility from './Facility'
export default function Cards(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.image} />
        <Tag color={props.tagColor} icon={props.tagIcon} name={props.tagName}/>
      </div>
      <div className="card-details">
        <p><strong>$ {props.cardPrice}</strong></p>
        <h4>{props.name}</h4>

        <div className="card-facility">
          <Facility
            toilet={props.toilet}
            kanal={props.kanal}
            bed={props.bed}
          />
        </div>

        <div className="card-inquiry">
          <a className="side-links side-link-active">call</a>
          <a className="side-links side-link-active">message</a>
        </div>

      </div>
    </div>
  )
}
