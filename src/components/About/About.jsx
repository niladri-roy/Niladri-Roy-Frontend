import React from 'react'
import './About.css'
import SkillsSection from './Skills/Skills'

const About = () => {


  return (
    <div className='AboutMe'>
      <div className='container content'>
        <div className="h1">About Me</div>
          <div className="p">
            I am an ambitious Software Developer with expertise in Full Stack Development. I excel in crafting innovative solutions, utilizing technologies like React, JavaScript, Express, Node.js, and MongoDB. My proficiency extends to UI/UX design, where I create captivating interfaces. With a strong foundation in Data Structures and Algorithms, I am committed to continuous learning and delivering exceptional results.
          </div>
        <SkillsSection />
      </div>    
    </div>
  )
}

export default About