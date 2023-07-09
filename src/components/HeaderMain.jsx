import React, {useState} from "react";
import './HeaderMain.css';
import { HiOutlineHome, HiOutlineUser, HiOutlineBadgeCheck, HiOutlineClipboardList, HiOutlinePhotograph, HiX, HiOutlineMenu } from "react-icons/hi";


const HeaderMain = () => {
   
    const[Toggle, showMenu] = useState(false);
  

    return(
        <header className="header" id="Header">
            <nav className="nav container">
                <div className="nav__l">
                <a href="index.html" className="nav__logo">   
                </a>
                </div>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home"  
                            className= "nav__link active-link" onClick={() => showMenu(!Toggle)}>
                                <HiOutlineHome className="nav__icon" />Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about"  
                            className= "nav__link " onClick={() => showMenu(!Toggle)}>
                                <HiOutlineUser className="nav__icon" />About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills"  
                            className= "nav__link" onClick={() => showMenu(!Toggle)}>
                                <HiOutlineBadgeCheck className="nav__icon" />Skills
                            </a>
                        </li>
                        <li className="nav__item" style={{fontsize: "20px"}}>
                            <a href="#portfolio"  
                            className= "nav__link " onClick={() => showMenu(!Toggle)}>
                                <HiOutlinePhotograph className="nav__icon" />Projects
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="#qualification"  
                            className= "nav__link " onClick={() => showMenu(!Toggle)}>
                                <HiOutlineClipboardList className="nav__icon" />Edu/Exp
                            </a>
                        </li>
                        
                        
                    </ul>
                    <HiX className="nav__close" onClick={() => showMenu(!Toggle)} />
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <HiOutlineMenu />
                </div>
            </nav>
        </header>
    )
}

export default HeaderMain