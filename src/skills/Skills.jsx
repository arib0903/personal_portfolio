import React from 'react'
import "./Skills.css"
import FrontEnd from './FrontEnd'



const BackendSkills =[
    {title:"Backend Developer"},
    {name:"Python"},
    {name:"Java"},
    {name:"SQL"},
    {name:"NPM",},
    {name:"MongoDB"},
    {name:"Git"},
]

const FrontEndSkills =[
    {title:"Frontend Developer"},
    {name:"React.js"},
    {name:"HTML/CSS"},
    {name:"Flask"},
    {name:"Plotly.js"},
]

const AISkills =[
    {title:"Artificial Intelligence + Machine Learning"},
    {name:"Numpy"},
    {name:"Pandas"},
    {name:"Scikit learn"},
]


function Skills() {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <FrontEnd skillList = {FrontEndSkills} />
            <FrontEnd skillList = {BackendSkills} />
            <FrontEnd skillList = {AISkills} />
             
        </div>
    </section>
  )
}

export default Skills