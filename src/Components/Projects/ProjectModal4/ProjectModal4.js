import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import ProjectImages2 from './ProjectImages4.js/ProjectImages4';
import classes from './projectModal4.module.css'
import { Col, Container, Row } from 'react-bootstrap';

const ProjectModal4 = () => {
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
                    <Row style={{ 'background': 'gray' }}>
                        <Col md={7} className={classes.leftColumn} style={{ 'background': 'red' }}>
                            <ProjectImages2></ProjectImages2>
                        </Col>
                        <Col md={5} style={{ 'background': '#353943' }} className={classes.projectDetailContainer}>
                            <div className={classes.projectDetailHeader}>
                                <div className={classes.projectTitle}>
                                    <h3>Trillo</h3>
                                </div>
                                <div>
                                    <button onClick={closeModal}>X</button>
                                </div>
                            </div>
                            <div className={classes.projectTechnologies}>
                                <span>HTML5</span>
                                <span>CSS3</span>
                                <span>SASS</span>
                                <span>Block Element Model(BEM) Architecture</span>
                                <span>Flexbox</span>
                            </div>
                            <div className={classes.projectIntro}>
                                <h4>About</h4>
                                <p>A fictional hotel booking application.</p>
                            </div>
                            <div className={classes.projectFeatures}>
                                <h4>Features</h4>
                                <li>Used the Block Element Model css naming convention.</li>
                                <li>Complex use of CSS Flexbox</li>
                                <li>Responsive design.</li>
                            </div>
                            <div className={classes.projectLinks}>
                                <a href="https://zepticona.github.io/trillo/" target="_blank"> Visit Site</a>
                                <a href="https://github.com/Zepticona/trillo" target="_blank" >Client Code</a>
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

export default ProjectModal4;