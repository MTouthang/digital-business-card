import React from 'react';
import profile from '../image/profile-image.png'
import mail from "../image/mail-icon.png"
import vector from "../image/Vector-icon.png"

const HeroSection = () => {
  return (
    <div className='hero-section'>
        <img className= "profile" src={profile} alt="" />
        <div className='hero-typo'>
            <h1> Laura Smith</h1>
            <h3> Frontend Developer</h3>
            <p>laurasmith.website</p>
        </div>
        
        <div className='p-button'>
            <button className='p-btn-one'> 
               <img className='btn-icon' src={mail} alt="email" />
                Email</button>
            <button className='p-btn-two'> 
                 <img className='btn-icon' src={vector} alt="email" />
                LinkedIn</button>
        </div>
    </div>
    
  )
}

export default HeroSection