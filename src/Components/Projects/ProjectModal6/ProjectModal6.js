import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import ProjectImages6 from './ProjectImages6/ProjectImages6';
import classes from './projectModal6.module.css'

import { Col, Container, Row } from 'react-bootstrap';

const ProjectModal6 = () => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'none',
            border: 'none'
        }
    };
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className={classes.ModalContainer}>
            <button className={classes.moreInfoBtn} onClick={openModal}>Project Details</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

<Container>
                <Row style={{'background': 'gray'}}>
                    <Col md={7} className={classes.leftColumn} style={{'background': 'red'}}>
                        <ProjectImages6></ProjectImages6>
                        </Col>
                    <Col md={5} style={{'background': '#353943'}} className={classes.projectDetailContainer}>
                        <div className={classes.projectDetailHeader}>
                            <div className={classes.projectTitle}>
                                <h3>Apartment Hunt(Team Project)</h3>
                            </div>
                            <div>
                                <button onClick={closeModal}>EXIT</button>
                            </div>
                        </div>
                        <div className={classes.projectTechnologies}>
                            <span>HTML & CSS</span>
                            <span>Javascript</span>
                            <span>ReactJS</span>
                            <span>NodeJS</span>
                            <span>Express</span>
                            <span>MongoDB</span>
                            <span>React Bootstrap</span>
                            <span>Heroku</span>
                            <span>Firebase</span>
                        </div>
                        <div className={classes.projectIntro}>
                            <h4>About</h4>
                            <p>Full stack(MERN) web application for renting apartments.</p>
                        </div>
                        <div className={classes.projectFeatures}>
                            <h4>Features</h4>
                            <li>User Authentication.</li>
                            <li>Book rents on multiple apartments. A users bookings are reserved.</li>
                            <li>Dashboard for both admins and users. Admins can add new apartment.</li>
                        </div>
                        <div className={classes.projectLinks}>
                            <a href=" https://apartment-hunt-ee46c.web.app/" target="_blank"> Visit Site</a>
                            <a href="https://github.com/rezafset/apartment-hunt-client" target="_blank" >Client side Code</a>
                            <a href="https://github.com/rezafset/apartment-hunt-server" target="_blank" >Server side Code</a>
                        </div>
                        </Col>
                </Row>
                </Container>
                {/* <button onClick={closeModal}>close</button>
                <div>I am a modal</div> */}
                
            </Modal>
            
        </div>
    );
};

export default ProjectModal6;