import React from 'react'
import './Skills.css'
/*Frontend Developer Logo*/
import HTML5Logo from '../../../assets/skillsLogo/HTML5Logo.svg'
import CssLogo from '../../../assets/skillsLogo/CssLogo.svg'
import JavaScriptLogo from '../../../assets/skillsLogo/JavaScriptLogo.svg'
import ReactLogo from '../../../assets/skillsLogo/ReactLogo.svg'
import NextLogo from '../../../assets/skillsLogo/NextjsLogo.svg'
import FigmaLogo from '../../../assets/skillsLogo/FigmaLogo.svg'
/*Backend Developer Logo*/
import NodeJsLogo from '../../../assets/skillsLogo/NodeJs.svg'
import MongoDBLogo from '../../../assets/skillsLogo/MongoDB.svg'
import ExpressJsLogo from '../../../assets/skillsLogo/ExpressLogo.svg'
import PostmanLogo from '../../../assets/skillsLogo/PostmanLogo.svg'
/*Programming Languages Logo*/
import JavaLogo from '../../../assets/skillsLogo/JavaLogo.svg'
import CppLogo from '../../../assets/skillsLogo/CppLogo.svg'
import PythonLogo from '../../../assets/skillsLogo/PythonLogo.svg'
/*Code Editor Logo*/
import VSCodeLogo from '../../../assets/skillsLogo/VSCodeLogo.svg'
/*Development Tools and Platforms Logo*/
import GitLogo from '../../../assets/skillsLogo/GitLogo.svg'
import GitHubLogo from '../../../assets/skillsLogo/GitHubLogo.svg'
import NetlifyLogo from '../../../assets/skillsLogo/NetlifyLogo.svg'
/*Wave Animation */
import useIntersectionObserver from '../../../utils/IntersectionObserver/useIntersectionObserver'
import slideFromLeftObserver from '../../../utils/IntersectionObserver/slideFromLeftObserver'

const Skills = () => {
useIntersectionObserver()
slideFromLeftObserver()

const skills = [
	{
		category: 'Front-End Development',
		description: 'Front-End Development involves creating the user-facing part of a website or application using HTML, CSS, and JavaScript.',
		skills: [
			{ name: 'HTML', proficiency: 100, logo: HTML5Logo, color: '#26BDE3' },
			{ name: 'CSS', proficiency: 80, logo: CssLogo, color: '#F1B529' },
			{ name: 'JavaScript', proficiency: 70, logo: JavaScriptLogo, color: '#1E36F7' },
			{ name: 'React.js', proficiency: 80, logo: ReactLogo, color: '#FB8261' },
			{ name: 'Next.js', proficiency: 50, logo: NextLogo, color: '#ffffff' },
			{ name: 'Figma', proficiency: 50, logo: FigmaLogo, color: '#F5FF00' },
		],
	},
	{
		category: 'Back-End Development',
		description: 'Back-End Development involves building the server-side logic and database connections of a website or application.',
		skills: [
			{ name: 'Node.js', proficiency: 90, logo: NodeJsLogo, color: '#993399' },
			{ name: 'MongoDB', proficiency: 90, logo: MongoDBLogo, color: '#6946B9' },
			{ name: 'Express.js', proficiency: 90, logo: ExpressJsLogo, color: '#ffffff' },
			{ name: 'Postman', proficiency: 50, logo: PostmanLogo, color: '#37CAFF' },
		],
	},
	{
		category: 'Programming Languages',
		description: 'Programming Languages are used to write instructions and algorithms for computers to execute tasks.',
		skills: [
			{ name: 'Java', proficiency: 90, logo: JavaLogo, color: '#962300' },
			{ name: 'C++', proficiency: 100, logo: CppLogo, color: '#9C4300' },
			{ name: 'Python', proficiency: 50, logo: PythonLogo, color: '#AB6C37' },
		],
	},
	{
		category: 'Code Editor',
		description: 'A Code Editor is a software tool used to write and edit source code for building applications and websites.',
		skills: [
			{ name: 'VS Code', proficiency: 100, logo: VSCodeLogo, color: '#CC5200' },
		],
	},
	{
		category: 'Tools and Platforms',
		description: 'Tools and Platforms are essential software and services used to enhance the development and deployment process.',
		skills: [
			{ name: 'Git', proficiency: 70, logo: GitLogo, color: '#32D2F0' },
			{ name: 'GitHub', proficiency: 90, logo: GitHubLogo, color: '#ffffff' },
			{ name: 'Netlify', proficiency: 70, logo: NetlifyLogo, color: '#C70010' },
		],
	},
];

const sortedSkills = skills.map(category => {
    const sortedSkills = category.skills.sort((a, b) => b.proficiency - a.proficiency);
    return { ...category, skills: sortedSkills };
});

const skill = sortedSkills.map((category, index) => {
    return(
        <div className="skills-grid hidden sub-container">
            <div className="skill-category" key={index}>
                <h2 className='sub-content'>{category.category}</h2>
            </div>
            <div className="skills sub-content">
                {category.skills.map((skill, index) => (
                    <div className="skill skill-logo-hidden sub-content" key={index}>
                        <div className="skill-logo">
                            <img src={skill.logo} alt= {skill.name} />
                        </div>
                        <div className="skill-logo-bg bg-gy-5 sd-gy-1">
                            <div className="wave" style={{
                                    marginTop: `${90 - ((skill.proficiency / 10) * 11)}%`,
                                    backgroundColor: skill.color,
                                }}>
                                <svg className='bg-gy-5' xmlns="http://www.w3.org/2000/svg" viewBox = "0 0 1440 320" >
                                    <path fill={skill.color} id="waveClip" fill-opacity = '1' d="M0,96L48,85.3C96,75,192,53,288,74.7C384,96,480,160,576,181.3C672,203,768,181,864,170.7C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L0,320Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="skills-category-description">
                <p className='sub-content'>{category.description}</p>
            </div>
        </div>
    )
})



    return (
        <div className='MySkills'>
			<div className="h1 hidden">Skills</div>
			<div className="skills-grid-container">
				{skill}
			</div>
        </div>
    )
}

export default Skills