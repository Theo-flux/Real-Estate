import React from 'react'

export default function Tag(props) {

  return (
    <div>
      <p className= {`card-tag ${props.color}`}><i className={props.icon}></i>  {props.name}</p>
    </div>
  )
}
