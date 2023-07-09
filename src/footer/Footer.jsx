import React from 'react';
import "./Footer.css";
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer" id = "footer">
        <div className="footer__container container">
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
               
              
            </ul>
            <div className="footer__social">
               
                <a href="https://github.com/arib0903" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/arib-mahboob-0931061b5/" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
                </a>

                
            </div>

            <div className="contact">

                 <h4>646-684-9338</h4>
                <h4>mahboobarib@gmail.com</h4>


            </div>
            
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;