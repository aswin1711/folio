import React from 'react'
import Seperator from '../../common/seperator'
import './contact.css'
import SocialContact from '../../common/social-contact'

function Contact() {
  return (
    <div className='contact'>
      <Seperator />
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
      <div className='contact-left'>
        <p>Want to get in touch? Contact me on any of the platform </p>
      <SocialContact />
      </div>
      <div className='download'>
        <a download href ={require("../../../assets/resume.pdf.pdf")}>
        <i class="fi-rr-cloud-download download-icon" />
          Download Resume
        </a>
      </div>
      </div>
    </div>
  )
}

export default Contact