import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Frontend = ({ skillList }) => {
      const slicedSkillList = skillList.slice(1); // Create a new array without the first element

  return (
    <div className="skills__content">
      <h3 className="skills__title">{skillList[0]['title']}</h3>
      <div className="skills__box">
        {slicedSkillList.map((skill, index) => (

          <div className="skills__group" key={index}>
            <div className="skills__data">
              <HiCheckBadge />
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
