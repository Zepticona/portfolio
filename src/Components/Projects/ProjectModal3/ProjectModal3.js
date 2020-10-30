import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import ProjectImages2 from './ProjectImages3.js/ProjectImages3';
import classes from './projectModal3.module.css'

const ProjectModal3 = () => {
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

                <div style={{"display": 'flex', 'width': '1200px', 'background': 'gray', 'height': '600px'}}>
                    <div style={{'background': 'red', 'width': '55%'}}>
                        <ProjectImages2></ProjectImages2>
                    </div>
                    <div style={{'background': '#353943', 'width': '45%'}} className={classes.projectDetailContainer}>
                        <div className={classes.projectDetailHeader}>
                            <div className={classes.projectTitle}>
                                <h3>Pin Matcher</h3>
                            </div>
                            <div>
                                <button onClick={closeModal}>close modal</button>
                            </div>
                        </div>
                        <div className={classes.projectTechnologies}>
                            <span>HTML & CSS</span>
                            <span>Vanilla Javascript</span>
                        </div>
                        <div className={classes.projectIntro}>
                            <h4>About</h4>
                            <p>Simple app that generates a random 4 digit pin and matches with the user input.</p>
                        </div>
                        <div className={classes.projectFeatures}>
                            <h4>Features</h4>
                            <li>Generate a random 4 digit pin.</li>
                            <li>Users get 3 tries to enter the correct pin.</li>
                            <li>Depending on the trial result, different messages are displayed on the UI.</li>
                        </div>
                        <div className={classes.projectLinks}>
                            <a href="https://zepticona.github.io/pin-matcher-project/" target="_blank"> Visit Site</a>
                            <a href="https://github.com/Zepticona/pin-matcher-project" target="_blank" >Client Code</a>
                        </div>
                    </div>
                </div>
                {/* <button onClick={closeModal}>close</button>
                <div>I am a modal</div> */}
                
            </Modal>
            
        </div>
    );
};

export default ProjectModal3;