import React from 'react'

export default function FooterItem({title, items}){
  return(
    <div>
      <h4>{title}</h4>
      {items.map((item) => <p><small>{item}</small></p>)}
    </div>
  )
}
