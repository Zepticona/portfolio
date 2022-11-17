import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../../assets/trillo/1.png'

import classes from '../../projects.module.css'

const ProjectImages3 = () => {
    return (
        <Carousel>
            <Carousel.Item interval={500} className={classes.carouselItem}>
                <img
                    className={`d-block ${classes.projectImg}`}
                    src={img1}
                    alt="First slide"
                    
                />                
            </Carousel.Item>
        </Carousel>
    );
};

export default ProjectImages3;