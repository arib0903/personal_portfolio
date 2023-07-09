import React from "react";
import { FiTwitter, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://github.com/arib0903" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/arib-mahboob-0931061b5/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;