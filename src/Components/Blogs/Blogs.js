import React from 'react';
import containerClasses from '../Projects/projects.module.css'
import bgImg from '../../assets/bg.jpg'
import NavigationBar from '../Common/NavigationBar/NavigationBar';
import StickySidebar from '../Common/StickySidebar/StickySidebar';
import { Container } from 'react-bootstrap';
const Blogs = () => {
    return (
        <div className={containerClasses.ProjectsContainer}>
            <img src={bgImg} className={containerClasses.bgImg} alt=""/>
            <NavigationBar></NavigationBar>
            <StickySidebar></StickySidebar>
            <Container>
                <h2 style={{'color': 'white'}}>Blogs will arrive soon..</h2>
            </Container>
        </div>
    );
};

export default Blogs;