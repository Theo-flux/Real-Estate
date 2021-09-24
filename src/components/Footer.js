import React from 'react'
import FooterItem from './FooterItem'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container container">

        <div className="footer-left">
          <h3>LOGO</h3>
          <p><small>We provide information about properties such as houses,
          villas and apartments to help people find their dream home</small></p>
        </div>

        <div className="footer-right">
          <FooterItem title="Property" items={['House', 'Apartment', 'Villa']} />
          <FooterItem title="Article" items={['New Article', 'Popular Article', 'Most Read', 'Tips & Tricks']} />
          <FooterItem title="Contact" items={['G-13/2 Islamabad', '+921234567890', 'Aliyanbaig.up@gmail.com']} />
        </div>

      </div>
    </div>
  )
}
