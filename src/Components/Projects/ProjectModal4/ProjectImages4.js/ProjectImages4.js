import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../../assets/travelGuru/1.png'
import img2 from '../../../../assets/travelGuru/2.png'
import img3 from '../../../../assets/travelGuru/3.png'
import classes from '../../projects.module.css'
const ProjectImages2 = () => {
    return (
        <Carousel className={classes.carouselContainer}>
            <Carousel.Item interval={500} className={classes.carouselItem}>
                <img
                    className={`d-block ${classes.projectImg}`}
                    src={img1}
                    alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item className={classes.carouselItem}>
                <img
                    className={`d-block ${classes.projectImg}`}
                    src={img2}
                    alt="Third slide"
                />
                
            </Carousel.Item>
            <Carousel.Item className={classes.carouselItem}>
                <img
                    className={`d-block ${classes.projectImg}`}
                    src={img3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default ProjectImages2;