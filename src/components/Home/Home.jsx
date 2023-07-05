import React from 'react'
import homeImage from '../../assets/images/homeImg.png'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="content container">
        <div className="grid-container">
          <div className="grid-item introduction">
            <div className="h1">Niladri Roy</div>
            <div className="h3">Aspiring<span className="h2"> Software</span> and <span className="h2">Full Stack Developer</span></div>
            <div className="p">
            “Unlocking the Possibilities of Code,<br/>Crafting Digital Solutions with Precision”
            </div>
          </div>
          <div className="grid-item home-image">
            <img src={homeImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home