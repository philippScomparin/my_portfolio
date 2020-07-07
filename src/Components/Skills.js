import React from 'react'
import frontend from '../images/frontend.png'
import backend from '../images/backend.png'
import database from '../images/database.png'
import tools from '../images/tools.png'

function Skills() {
    return (
        <div className="skills">
            <h1 className="sectionHeader">My Knowledge</h1>
            <div className="skillsCategories">
                <div className="category frontend">
                    <img src={frontend} alt="frontend-icon" />
                    <span>FRONT END</span>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className="category backend">
                    <img src={backend} alt="backend-icon" />
                    <span>BACK END</span>
                    <ul>
                        <li>PHP</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>Elixir</li>
                    </ul>
                </div>
                <div className="category database">
                    <img src={database} alt="database-icon" />
                    <span>DATABASE</span>
                    <ul>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <div className="category other">
                    <img src={tools} alt="tools-icon" />
                    <span>OTHER SKILLS</span>
                    <ul>
                        <li>Git</li>
                        <li>Agile (Scrum)</li>
                        <li>Jira</li>
                        <li>Docker</li>
                        <li>Jenkins</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills
