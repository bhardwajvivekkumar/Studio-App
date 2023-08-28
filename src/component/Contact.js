import React from 'react'
import "../styles/Contact.css"

const Contact = () => {
  return (
    <div>
      <div className='contactbackground'>
        <div className='backgroundleaf'></div>
         <div className='subscription'>
            <p>Subscribe Newsletter</p>
         </div>
         <div className='subscriptioninfo'>
            <p>I will update good news and promotion service not spam</p>
         </div>
         <form action="text" className='input'>
         <input type="text" name="" id=""  className='input' placeholder='Enter your email address'/>
         </form>
         <div className="contactbutton">
           <button>Contact Now</button>
            </div>
            <div className='buttonbg'></div>
      </div>
    </div>
  )
}

export default Contact
