import React from 'react';
import containerClasses from '../Projects/projects.module.css'
import bgImg from '../../assets/bg.jpg'
import NavigationBar from '../Common/NavigationBar/NavigationBar';
import StickySidebar from '../Common/StickySidebar/StickySidebar';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Resume = () => {
    return (
        <div className={containerClasses.ProjectsContainer}>
            <img src={bgImg} className={containerClasses.bgImg} alt=""/>
            <NavigationBar></NavigationBar>
            <StickySidebar></StickySidebar>
            <Container>
                <h2 style={{'color': 'white'}}>Download my resume:              
                <a style={{"marginLeft": '20px'}} href="https://drive.google.com/uc?export=download&amp;id=17ywo3hP8Z7oSUeNEK7J5izHmPWEwaLbc">
                    <FontAwesomeIcon icon={faFileDownload} />
                </a>
            </h2>
            </Container>
        </div>
    );
};

export default Resume;