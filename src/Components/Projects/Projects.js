import React from 'react';
import NavigationBar from '../Common/NavigationBar/NavigationBar';
import StickySidebar from '../Common/StickySidebar/StickySidebar';
import classes from './projects.module.css'
import bgImg from '../../assets/bg.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import ProjectModal1 from './ProjectModal1/ProjectModal1';
import ProjectModal2 from './ProjectModal2/ProjectModal2';
import ProjectModal3 from './ProjectModal3/ProjectModal3';
import ProjectModal4 from './ProjectModal4/ProjectModal4';
import ProjectModal5 from './ProjectModal5/ProjectModal5';
import ProjectModal6 from './ProjectModal6/ProjectModal6';
const Projects = () => {
    return (
        <div className={classes.ProjectsContainer}>
            <img src={bgImg} className={classes.bgImg} alt=""/>
            <NavigationBar></NavigationBar>
            <main>
                <StickySidebar></StickySidebar>
                <Container>
                    <Row>
                        <Col sm={6} md={4} style={{'margin-bottom': '15px', 'padding': '10px', 'height': '300px'}}>
                            <ProjectModal6></ProjectModal6>
                        </Col>
                        <Col sm={6} md={4} style={{'margin-bottom': '15px', 'padding': '10px', 'height': '300px'}}>
                            <ProjectModal1></ProjectModal1>
                        </Col>
                        <Col sm={6} md={4} style={{'margin-bottom': '15px', 'padding': '10px', 'height': '300px'}}>
                            <ProjectModal2></ProjectModal2>
                        </Col>
                        <Col sm={6} md={4} style={{'margin-bottom': '15px', 'padding': '10px', 'height': '300px'}}>
                            <ProjectModal3></ProjectModal3>
                        </Col>
                        <Col sm={6} md={4} style={{'margin-bottom': '15px', 'padding': '10px', 'height': '300px'}}>
                            <ProjectModal4></ProjectModal4>
                        </Col>
                        <Col sm={6} md={4} style={{'margin-bottom': '15px', 'padding': '10px', 'height': '300px'}}>
                            <ProjectModal5></ProjectModal5>
                        </Col>
                    </Row>
                </Container>
                
            </main>
        </div>
    );
};

export default Projects;