import React from 'react';
import containerClasses from '../Projects/projects.module.css'
import bgImg from '../../assets/bg.jpg'
import NavigationBar from '../Common/NavigationBar/NavigationBar';
import StickySidebar from '../Common/StickySidebar/StickySidebar';
import { Container } from 'react-bootstrap';
import classes from './home.module.css';
import sakil from '../../assets/sakil.jpg'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className={containerClasses.ProjectsContainer}>
            <img src={bgImg} className={containerClasses.bgImg} alt=""/>
            <NavigationBar></NavigationBar>
            <StickySidebar></StickySidebar>
            <Container>
                <div className={classes.MainContent}>
                    <img src={sakil} className={classes.SakilImg} alt=""/>
                <h2 style={{'color': 'white'}}>Hi, I'm Shahriar Islam Sakil, <br/> A fortend web developer.</h2>
                <span><Link to="/contact">Send me a Message</Link></span>
                <a style={{"marginLeft": '20px'}} href="https://drive.google.com/uc?export=download&amp;id=17ywo3hP8Z7oSUeNEK7J5izHmPWEwaLbc">Download My Resume</a>
                </div>

            </Container>
        </div>
    );
};

export default Home;