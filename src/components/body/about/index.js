import React from 'react'
import SocialContact from '../../common/social-contact'
import "./about.css"

function About() {
  return (
    <div className='about'> 
    <div className='about-top'>
       <div className='about-info'>
         Hello There 👋, <span className='info-name'> I am Aswin Sukumaran.</span>
         <br /> I am a Full Stack Developer and i love experimenting with the web.
       </div>
       <div className='about-photo'>
       <img
            src={require('../../../assets/coding.png')}
            className="picture" alt=""
          />
       
       </div>
    </div>
    <div>
    <SocialContact />
    </div>
    </div>
  )
}

export default About