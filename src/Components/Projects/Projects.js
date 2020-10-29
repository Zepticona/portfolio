import React from 'react';
import NavigationBar from '../Common/NavigationBar/NavigationBar';
import StickySidebar from '../Common/StickySidebar/StickySidebar';
import classes from './projects.module.css'
import bgImg from '../../assets/bg.jpg'
import ProjectModal from './ProjectModal/ProjectModal';
import { Col, Container, Row } from 'react-bootstrap';
const Projects = () => {
    return (
        <div className={classes.ProjectsContainer}>
            <img src={bgImg} className={classes.bgImg} alt=""/>
            <NavigationBar></NavigationBar>
            <main>
                <h2>This is projects section.</h2>
                <StickySidebar></StickySidebar>
                <Container>
                    <Row>
                        <Col md={4} style={{'border': '1px solid red', 'margin-bottom': '15px', 'padding': '10px', 'height': '300px'}}>
                        <ProjectModal></ProjectModal>
                        </Col>
                        <Col md={4} style={{'border': '1px solid red', 'margin-bottom': '15px', 'padding': '10px', 'height': '300px'}}>
                        <ProjectModal></ProjectModal>
                        </Col>
                        <Col md={4} style={{'border': '1px solid red', 'margin-bottom': '15px', 'padding': '10px', 'height': '300px'}}>
                        <ProjectModal></ProjectModal>
                        </Col>
                        <Col md={4} style={{'border': '1px solid red', 'margin-bottom': '15px', 'padding': '10px', 'height': '300px'}}>
                        <ProjectModal></ProjectModal>
                        </Col>
                        <Col md={4} style={{'border': '1px solid red', 'margin-bottom': '15px', 'padding': '10px', 'height': '300px'}}>
                        <ProjectModal></ProjectModal>
                        </Col>
                    </Row>
                </Container>
                <ProjectModal></ProjectModal>
            </main>
        </div>
    );
};

export default Projects;