import React from 'react';
import { useState } from 'react';
import img from '../../../assets/creativeAgency/1.png'
import Modal from 'react-modal';
import ProjectImages from '../ProjectImages/ProjectImages';

const ProjectModal = () => {
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
        <div className="ModalWrapping">
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div style={{"display": 'flex', 'width': '1200px', 'background': 'gray', 'padding': '10px', 'height': '600px'}}>
                    <div style={{'background': 'red', 'width': '55%'}}>
                        <ProjectImages></ProjectImages>
                    </div>
                    <div style={{'background': 'green', 'width': '45%'}}>
                        <h2>Right</h2>
                    </div>
                </div>
                {/* <button onClick={closeModal}>close</button>
                <div>I am a modal</div> */}
                
            </Modal>
        </div>
    );
};

export default ProjectModal;