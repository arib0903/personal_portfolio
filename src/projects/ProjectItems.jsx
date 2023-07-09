import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

function ProjectItems({ item, handleClick }) {
  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt="" />
      <h3 className="project__title">{item.title}</h3>
      <button className="project__button" onClick={handleClick} >
        Details <HiOutlineArrowSmRight className="project__button-icon" />
      </button>
    </div>
  );
}


export default ProjectItems