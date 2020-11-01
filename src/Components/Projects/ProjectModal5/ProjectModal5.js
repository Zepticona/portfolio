import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import ProjectImages5 from './ProjectImages5/ProjectImages5';
import classes from './projectModal5.module.css'
import { Col, Container, Row } from 'react-bootstrap';

const ProjectModal5 = () => {
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
                        <ProjectImages5></ProjectImages5>
                        </Col>
                    <Col md={5} style={{'background': '#353943'}} className={classes.projectDetailContainer}>
                        <div className={classes.projectDetailHeader}>
                            <div className={classes.projectTitle}>
                                <h3>Online Courses</h3>
                            </div>
                            <div>
                                <button onClick={closeModal}>close modal</button>
                            </div>
                        </div>
                        <div className={classes.projectTechnologies}>
                            <span>HTML & CSS</span>
                            <span>Javascript</span>
                            <span>ReactJS</span>
                            <span>React Bootstrap</span>
                            <span>Netlify</span>
                        </div>
                        <div className={classes.projectIntro}>
                            <h4>About</h4>
                            <p>Frontend E-commerce like application.</p>
                        </div>
                        <div className={classes.projectFeatures}>
                            <h4>Features</h4>
                            <li>Enroll in any courses.</li>
                            <li>Price of the course is added to the cart.</li>
                            <li>Cart contains total price of all enrolled courses.</li>
                        </div>
                        <div className={classes.projectLinks}>
                            <a href="https://elegant-austin-7fa3df.netlify.app/" target="_blank"> Visit Site</a>
                            <a href="https://github.com/Zepticona/online-course-demo" target="_blank" >Client Code</a>
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

export default ProjectModal5;