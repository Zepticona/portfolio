import React from 'react';
import classes from './stickySidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFileDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const StickySidebar = () => {
    return (
        <div className={classes.SidebarContainer}>
            <li><a href="https://www.github.com/zepticona"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.linkedin.com/in/zepticona"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /></Link></li>
            <li>
                <a href="https://drive.google.com/uc?export=download&amp;id=17ywo3hP8Z7oSUeNEK7J5izHmPWEwaLbc">
                    <FontAwesomeIcon icon={faFileDownload} />
                </a>
            </li>
        </div>
    );
};

export default StickySidebar;