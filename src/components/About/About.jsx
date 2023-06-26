import React from 'react'
import './About.css'
import leetCodeImg from '../../assets/profileLinksImages/LeetCode.svg'
import GitHubImg from '../../assets/profileLinksImages/Github.svg'
import LinkedInImg from '../../assets/profileLinksImages/LinkedIn.svg'

const About = () => {

  const skills = [
    {name: 'HTML', Proficiency: '70'},
    {name: 'CSS', Proficiency: '90'},
    {name: 'JavaScript', Proficiency: '90'},
    {name: 'React Js', Proficiency: '90'},
    {name: 'Express', Proficiency: '90'},
    {name: 'MongoDB', Proficiency: '90'},
  ]

  skills.sort((a, b) => b.Proficiency - a.Proficiency);

  const skillsList = skills.map((item, index) => {
    return(
      <div className="skill" key={index}>
        <div className="skill-name p">{item.name}</div>
        <div className="skill-bar">
          <div className="skill-level" style={{width: `${item.Proficiency}%`}}></div>
        </div>
        <div className="skill-percentage">{item.Proficiency}%</div>
      </div>
    )
  })

  const Links = [
    {name: 'LinkedIn', link: 'https://www.linkedin.com/in/niladri-roy-626477237/', icon: LinkedInImg},
    {name: 'GitHub', link: 'https://github.com/niladri-roy', icon: GitHubImg},
    {name: 'LeetCode', link: 'https://leetcode.com/_niladri_/', icon: leetCodeImg },
  ]

  const linksList = Links.map((item, index) => {
    return(
      <div className="link" key={index}>
          <a href={item.link}>
            <img src={item.icon} alt={item.name} />
          </a>
          <p className='link-name p'>{item.name}</p>
      </div>
    )
  })


  return (
    <>
    <div className='container content'>
      <div className="h1">About Me</div>
      <div className="p">
        I am an ambitious Software Developer with expertise in Full Stack Development. I excel in crafting innovative solutions, utilizing technologies like React, JavaScript, Express, Node.js, and MongoDB. My proficiency extends to UI/UX design, where I create captivating interfaces. With a strong foundation in Data Structures and Algorithms, I am committed to continuous learning and delivering exceptional results.
      </div>
    </div>
    <div className="skill-links container content">      
      <div className="skills-section">
        <div className="h2">My Skills</div>
        {skillsList}
        </div>
      <div className="links-section">
        <div className="h2">Links</div>
        {linksList}
      </div>
    </div>
    {/* <button className="container button-container">
      <a href="/">Download Resume</a>
    </button> */}
    </>
  )
}

export default About