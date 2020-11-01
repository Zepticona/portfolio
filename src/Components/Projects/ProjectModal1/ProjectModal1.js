import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import classes from './projectModal1.module.css'
import ProjectImages1 from './ProjectImages1.js/ProjectImages1';
import { Col, Container, Row } from 'react-bootstrap';

const ProjectModal1 = () => {
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
                        <ProjectImages1></ProjectImages1>
                    </Col>
                    <Col md={5} style={{'background': '#353943'}} className={classes.projectDetailContainer}>
                        <div className={classes.projectDetailHeader}>
                            <div className={classes.projectTitle}>
                                <h3>Creative Agency</h3>
                            </div>
                            <div>
                                <button onClick={closeModal}>close modal</button>
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
                            <p>Full-stack web app for users to buy a service, write reviews, etc., and for admins to add new services and process orders.</p>
                        </div>
                        <div className={classes.projectFeatures}>
                            <h4>Features</h4>
                            <li>Order services,view all personal orders and their status, and write reviews.</li>
                            <li>Admins can see all user orders and change their status. Add new services and make a new admin.</li>
                            <li>All dynamic data(orders, services, reviews, status) are loaded from the database.</li>
                        </div>
                        <div className={classes.projectLinks}>
                            <a href="https://creative-agency-5297a.web.app/" target="_blank"> Visit Site</a>
                            <a href="https://github.com/Zepticona/creative-agency-client" target="_blank" >Client Code</a>
                            <a href="https://github.com/Zepticona/creative-agency-server" target="_blank" >Server Code</a>
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

export default ProjectModal1;