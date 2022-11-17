import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import ProjectImages2 from './ProjectImages2.js/ProjectImages2';
import classes from './projectModal2.module.css'
import { Col, Container, Row } from 'react-bootstrap';
 
const ProjectModal2 = () => {
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
                        <ProjectImages2></ProjectImages2>
                        </Col>
                    <Col md={5} style={{'background': '#353943'}} className={classes.projectDetailContainer}>
                        <div className={classes.projectDetailHeader}>
                            <div className={classes.projectTitle}>
                                <h3>Fun Findrr</h3>
                            </div>
                            <div>
                                <button onClick={closeModal}>X</button>
                            </div>
                        </div>
                        <div className={classes.projectTechnologies}>
                            <span>NextJS</span>
                            <span>Nodejs</span>
                            <span>ExpressJS</span>
                            <span>MongoDB</span>
                            <span>Mongoose</span>
                            <span>Google Firebase</span>
                            <span>Antd, MaterialUI</span>
                            <span>Cloudinary</span>
                        </div>
                        <div className={classes.projectIntro}>
                            <h4>About</h4>
                            <p>A fictional adult-content creators directory, where content creators would set up their account with information like sex, genre, location, etc., and users can filter them down.</p>
                        </div>
                        <div className={classes.projectFeatures}>
                            <h4>Features</h4>
                            <li>Multiple choice questionnaire, all custom coded.</li>
                            <li>Option to create an account, or sign up with gmail.</li>
                            <li>Content creators can update account/profile with photos, referral links, bios, websites, etc. </li>
                        </div>
                        <div className={classes.projectLinks}>
                            <a href="https://fun-findrr-web.vercel.app/" target="_blank"> Visit Site</a>
                            <a href="https://github.com/Zepticona/funFindrr-web" target="_blank" >Client Code</a>
                            <a href="https://github.com/Zepticona/upwork-funfindrr" target="_blank" >Server Code</a>
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

export default ProjectModal2;