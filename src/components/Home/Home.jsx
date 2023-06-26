import React from 'react'
import homeImage from './homeImg.png'
import './Home.css'

const Home = () => {
  return (
    <div className='content container'>
      <div className="home-content">
        <div className="introduction">
          <div className="h1">
            Niladri Roy
          </div>
          <div className="h3">
            Aspiring<i className='h2'> Software</i> and <i className='h2'>Full Stack Developer</i>
          </div>
          <div className="p">
            “Unlocking the Possibilities of Code,<br/>Crafting Digital Solutions with Precision”
          </div>
        </div>
        <div className="home-image">
          <img src={homeImage} alt="Home" />
        </div>
      </div>
    </div>
  )
}

export default Home