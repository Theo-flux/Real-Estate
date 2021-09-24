import React from 'react'
import Navbar from './Navbar'
import Cta from './Cta'
import Note from './Note'

export default function Jumbotron() {
  return(
    <div className="Jumbotron col">
      <Navbar/>
      <Cta/>
      <Note />
    </div>
  )
}
