import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiOutlineSparkles } from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <HiOutlineDesktopComputer className="about__icon" />
            <h3 className="about__title">Foodie!</h3>
            <span className="about__subtitle">Sushi + Watermelon lover</span>
        </div>
        <div className="about__box">
            <HiOutlineTerminal className="about__icon" />
            <h3 className="about__title">Fun Fact!</h3>
            <span className="about__subtitle">I was born in Bangladesh</span>
        </div>
        <div className="about__box">
            <HiOutlineSparkles className="about__icon" />
            <h3 className="about__title">Artist</h3>
            <span className="about__subtitle">Love writing poems</span>
        </div>
    </div>
  );
}

export default Info;