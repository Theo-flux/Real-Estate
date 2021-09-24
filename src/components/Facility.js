import React from 'react'

export default function Facility(props) {
  return(
    <div className="facility">
      <span >
        <i className="fas fa-bed"></i> {props.bed}
      </span>

      <span >
        <i className="fas fa-bath fa-bg"></i> {props.toilet}
      </span>

      <span >
        <i className="fas fa-hotel"></i> {props.kanal}
      </span>
    </div>
  )
}
