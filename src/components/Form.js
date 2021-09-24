import React from 'react'

export default function Form(){
  return(
    <div>
      <form className="multi-form" action="#" >
        <input type="text" name="name" placeholder="Name"/>
        <input type="text" name="phoneNumber" placeholder="Phone Number"/>
        <input type="email" name="email" placeholder="E-mail"/>
        <input type="product" name="name" placeholder="The Product/Service Of Interest"/>
        <textarea placeholder="message"></textarea>
        <p><small>By submitting an application you agree with politics confidentiality</small></p>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
