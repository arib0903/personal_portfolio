import React, { useEffect, useState } from 'react';

import ProjectItems from "./ProjectItems";
import Modal from "./Modal";
import{FaReact,FaPython,FaUnity,FaGitSquare} from 'react-icons/fa';
import {RiJavascriptFill} from 'react-icons/ri';
import {SiScala,SiTailwindcss} from 'react-icons/si';
import {PiFileSql} from 'react-icons/pi';
import EnemyGame from '../assets/EnemyGame.png';
import Project2 from '../assets/work1.jpg';
import Expense from '../assets/Expense.png';
import SpaceX from '../assets/SpaceX.png';




const Projects = () => {
    const [item, setItem] =  useState({ name: "All" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});
    const [selectedProjectId, setSelectedProjectId] = useState(0);

    
    // const projectsData = [
    //    {
    //         id: 1,
    //         image: EnemyGame,
    //         description: "Recreate a PacMan type arcade game where the player moves on towards the opposing enemy and try to shoot at them. The enemy will advance onto the player if nearby, and will shoot at the player. The enemies will also shoot at each other if they are near eachother.",
    //         title: "AI Game",
    //         category: "Game",
    //         technologies: [<RiJavascriptFill/>,<SiScala/>,<FaGitSquare/>],
    //         Code: "https://github.com/arib0903/EnemyGame",
    //         Demo: "",
    //         hasDemo:false,
    //                     hasCode:true

    //     },
    //     {
    //         id: 2,
    //         image: Project2,
    //         description: "Display Covid Data using Python and JavaScript",
    //         title: "Covid Data Visual",
    //         category: "Web",
    //         technologies: [<FaPython/>,<RiJavascriptFill/>,<PiFileSql/>],
    //         Code: "https://github.com/arib0903/PythonProject1",
    //         Demo: "",
    //         hasDemo:false,
    //                     hasCode:true


    //     },
    //     {
    //         id: 3,
    //         image: Expense,
    //         description: "React Project that tracked expenses",
    //         title: "Expense Tracker",
    //         category: "Web",
    //         technologies: [<FaReact/>,<SiTailwindcss/>, <FaGitSquare/>],
    //         Code: "https://github.com/arib0903/ExpenseTracker",
    //         Demo: "https://track-xpenses.netlify.app/",
    //         hasDemo:true,
    //         hasCode:true


    //     },
    //     {
    //         id: 4,
    //         image: SpaceX,
    //         description: "A Unity game that is a 2D platformer where the player is a rocket and has to avoid obstacles",
    //         title: "SpaceX",
    //         category: "Game",
    //         technologies: [<FaUnity/>, 'C#'],
    //         Code: "",
    //         Demo: "https://simmer.io/@arib0903/spacex",
    //         hasDemo: true,
    //         hasCode:false

    //     },
    // ];

    // const projectsNav = [
    //     {
    //         name: "All",
    //     },
    //     {
    //         name: "Web",
    //     },
    //     {
    //         name: "Game",
    //     },
    //     // {
    //     //     name: "C",
    //     // },
    // ];
const projectsNav = [
        {
            name: "All",
        },
        {
            name: "Web",
        },
        {
            name: "Game",
        },
        // {
        //     name: "C",
        // },
    ];

    useEffect(() => {
       const projectsData = [
       {
            id: 1,
            image: EnemyGame,
            description: "Recreate a PacMan type arcade game where the player moves on towards the opposing enemy and try to shoot at them. The enemy will advance onto the player if nearby, and will shoot at the player. The enemies will also shoot at each other if they are near eachother.",
            title: "AI Game",
            category: "Game",
            technologies: [<RiJavascriptFill/>,<SiScala/>,<FaGitSquare/>],
            Code: "https://github.com/arib0903/EnemyGame",
            Demo: "",
            hasDemo:false,
                        hasCode:true

        },
        {
            id: 2,
            image: Project2,
            description: "The application creates a server that gets Covid Vaccine data from the CDC website. Then uses those datas to make certain graphs (barChart,pieGraph,lineGraph)",
            title: "Covid Data Visual",
            category: "Web",
            technologies: [<FaPython/>,<RiJavascriptFill/>,<PiFileSql/>],
            Code: "https://github.com/arib0903/PythonProject1",
            Demo: "",
            hasDemo:false,
                        hasCode:true


        },
        {
            id: 3,
            image: Expense,
            description: "Expense Tracker is a web application built using react that allows users to track their expenses. It provides an intuitive interface for managing and categorizing expenses, helping users keep track of their spending habits and financial health.",
            title: "Expense Tracker",
            category: "Web",
            technologies: [<FaReact/>,<SiTailwindcss/>, <FaGitSquare/>],
            Code: "https://github.com/arib0903/ExpenseTracker",
            Demo: "https://track-xpenses.netlify.app/",
            hasDemo:true,
            hasCode:true


        },
        {
            id: 4,
            image: SpaceX,
            description: "A Unity game that is a 2D platformer where the player is a rocket and has to avoid obstacles",
            title: "SpaceX",
            category: "Game",
            technologies: [<FaUnity/>, 'C#'],
            Code: "",
            Demo: "https://simmer.io/@arib0903/spacex",
            hasDemo: true,
            hasCode:false

        },
    ];

         if(item.name === "All") {
            setProjects(projectsData);
         }
         else{
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
         }
    },[item]);
    
    const handleClick  = (e, index) => {
        setItem({ name: e.target.textContent });
        
        setActive(index);
        
    };

    const handleOpenModal = (itemId) => {
        setSelectedProject(projects);
        setShowModal(true);
        setSelectedProjectId(itemId);
    }

    const handleCloseModal = () => {
  setShowModal(false);
};

   return (
  <div>
    <div className="project__filters">
      {projectsNav.map((item, index) => {
        return (
          <span
            onClick={(e) => {
              handleClick(e, index);
            }}
            className={`${active === index ? 'active-project' : ''} project__item`}
            key={index}
          >
            {item.name}
          </span>
        );
      })}
    </div>
    <div className="project__container container grid">
      {projects.map((item) => {
        return <ProjectItems item={item} key={item.id}  handleClick={() => handleOpenModal(item.id)}  />;
      })}
    </div>
    {showModal && (
      <Modal onClose={handleCloseModal} children = {selectedProject} id = {selectedProjectId}>
      </Modal>
    )}
    {/* {!showModal && (
      <Modal onClose={!handleCloseModal} children = {item}>
      </Modal>
    )} */}
  </div>
);

}

export default Projects;