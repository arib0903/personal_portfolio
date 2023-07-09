import React from 'react'
import "./Skills.css"
import FrontEnd from './FrontEnd'



const BackendSkills =[
    {title:"Backend Developer"},
    {name:"Python", level:"Intermediate"},
    {name:"Java", level:"Intermediate"},
    {name:"MySQL", level:"Intermediate"},
    {name:"npm", level:"Basic"},
    {name:"MongoDB", level:"Basic"},
    {name:"Git", level:"Intermediate"},
]

const FrontEndSkills =[
    {title:"Frontend Developer"},
    {name:"React.js", level:"Intermediate"},
    {name:"HTML/CSS", level:"Intermediate"},
    {name:"Flask", level:"Intermediate"},
    {name:"random", level:"Basic"},
]

const AISkills =[
    {title:"Artificial Intelligence + Machine Learning"},
    {name:"Numpy", level:"Intermediate"},
    {name:"Pandas", level:"Intermediate"},
    {name:"Scikit learn", level:"Intermediate"},
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