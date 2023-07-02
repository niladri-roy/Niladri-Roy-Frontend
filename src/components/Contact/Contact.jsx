import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="container content contact-container">
        <div className="introduction">
          <div className="h1">Just Say Hi.</div>
          <div className="p">I'm always open to discuss your project and talk about new things</div>
          <div className="mail-links">
            <div className="mail">
              <h3>Mail Me at</h3>
              <p>royniladri2017@gmail.com</p>
            </div>
            <div className="socialMedia">
              <h3>Follow Me</h3>
              {/* <a href="">1</a><a href="">2</a><a href="">3</a><a href="">4</a><a href="">5</a> */}
            </div>
          </div>
        </div>
        <div className="form">
            <textarea className='form-topic' id='Name' placeholder='Your Name'></textarea>
            <textarea className='form-topic' id='Email ' placeholder='Your Email address'></textarea>
            <textarea className='form-topic' id='Project' placeholder='Your Project Description'></textarea>
            <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact