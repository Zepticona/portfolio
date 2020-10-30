import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import ProjectImages2 from './ProjectImages4.js/ProjectImages4';
import classes from './projectModal4.module.css'

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

                <div style={{"display": 'flex', 'width': '1200px', 'background': 'gray', 'height': '600px'}}>
                    <div style={{'background': 'red', 'width': '55%'}}>
                        <ProjectImages2></ProjectImages2>
                    </div>
                    <div style={{'background': '#353943', 'width': '45%'}} className={classes.projectDetailContainer}>
                        <div className={classes.projectDetailHeader}>
                            <div className={classes.projectTitle}>
                                <h3>Travel Agency</h3>
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
                            <span>Firebase</span>
                        </div>
                        <div className={classes.projectIntro}>
                            <h4>About</h4>
                            <p>A front end app for travel agencies. Customers can book a trip at a certain range of dates. Multiple authentication systems have been added here. The functionality of the app was the main focus, not the looks.</p>
                        </div>
                        <div className={classes.projectFeatures}>
                            <h4>Features</h4>
                            <li>Select any of the 3 tourist destinations.</li>
                            <li>Enter a range of date to book the trip.</li>
                            <li>Users need to login via gmail, facebook account, or create an account on the site and use that email and password.</li>
                        </div>
                        <div className={classes.projectLinks}>
                            <a href="https://travelguru-6558a.web.app/" target="_blank"> Visit Site</a>
                            <a href="https://github.com/Zepticona/travel-guru-project" target="_blank" >Client Code</a>
                        </div>
                    </div>
                </div>
                {/* <button onClick={closeModal}>close</button>
                <div>I am a modal</div> */}
                
            </Modal>
            
        </div>
    );
};

export default ProjectModal4;