import React from 'react';
import containerClasses from '../Projects/projects.module.css'
import classes from './about.module.css'
import bgImg from '../../assets/bg.jpg'
import NavigationBar from '../Common/NavigationBar/NavigationBar';
import StickySidebar from '../Common/StickySidebar/StickySidebar';
import sakil from '../../assets/sakil.jpg'
import { Col, Container, Row } from 'react-bootstrap';
const About = () => {
    return (
        <div className={containerClasses.ProjectsContainer}>
            <img src={bgImg} className={containerClasses.bgImg} alt=""/>
            <NavigationBar></NavigationBar>
            <StickySidebar></StickySidebar>
            <Container>
                <h2 style={{'color': 'white'}}>Who am I?</h2>
                <Row>
                    <Col md={6} className={classes.aboutInfo}>
                        <p>I'm javascript developer who is currently working with Reactjs. My specialization is in responsive frontend applications, but I am comfortable with the backend technologies like Node, Express and MongoDB.</p>
                        <p>
                            <h4>Technologies I Use:</h4>
                            <span>HTML & CSS</span>
                            <span>Javascript</span>
                            <span>ReactJS</span>
                            <span>NodeJS</span>
                            <span>Express</span>
                            <span>MongoDB</span>
                            <span>React Bootstrap</span>
                            <span>Heroku</span>
                            <span>Firebase</span>
                        </p>
                    </Col>
                    <Col md={6}>
                        <img src={sakil} alt="sakil" className={classes.SakilImg}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;