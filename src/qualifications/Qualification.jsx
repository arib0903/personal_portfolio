import React, { useState } from "react";
import "./Qualifications.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

const qualificationsData = [
  {
    category: "Education",
    items: [
         {
        title: "AI/ML Research",
        subtitle: "Cornell Tech",
        calendar: "2023-2024",
      },
      {
        title: "Computer Science",
        subtitle: "Queens College",
        calendar: "2022-2025",
      },
      {
        title: "Computer Science",
        subtitle: "University At Buffalo",
        calendar: "2021-2022",
      },
      
    ],
  },
  {
    category: "Experience",
    items: [
      {
        title: "Software Engineering Intern",
        subtitle: "Cox Automotive",
        calendar: "2023",
      },
      {
        title: "AI/ML Research",
        subtitle: "Cornell Tech",
        calendar: "2023-2024",
      },
      {
        title: "Full-stack Developer",
        subtitle: "CUNY Tech Prep",
        calendar: "2023-2024",
      },
    ],
  },
];

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id = "qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {qualificationsData.map((item, index) => (
            <div
              key={index}
              className={
                toggleState === index + 1
                  ? "qualification__button button--flex qualification__active"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(index + 1)}
            >
              {index === 0 ? (
                <HiOutlineAcademicCap className="qualification__icon" />
              ) : (
                <HiOutlineBriefcase className="qualification__icon" />
              )}
              {item.category}
            </div>
          ))}
        </div>

        <div className="qualification__sections">
          {qualificationsData.map((item, index) => (
            <div
              key={index}
              className={
                toggleState === index + 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {item.items.map((qualification, idx) => (
                
                <div className="qualification__data" key={idx}>
                  {idx >= 0 && (
                    <div>
                      <h3 className="qualification__title">{qualification.title}</h3>
                      <span className="qualification__subtitle">{qualification.subtitle}</span>
                      <div className="qualification__calendar">
                        <HiOutlineCalendar className="qualification__calendar-icon" />
                        {qualification.calendar}
                      </div>
                    </div>
                  )}
                    <div></div>
                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>
                  
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;