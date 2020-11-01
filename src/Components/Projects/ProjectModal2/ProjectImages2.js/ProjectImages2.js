import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../../assets/volunteerNetwork/1.png'
import img2 from '../../../../assets/volunteerNetwork/2.png'
import img3 from '../../../../assets/volunteerNetwork/3.png'
import img4 from '../../../../assets/volunteerNetwork/4.png'
import img5 from '../../../../assets/volunteerNetwork/5.png' 
import classes from '../../projects.module.css'

const ProjectImages2 = () => {
    return (
        <Carousel>
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
            <Carousel.Item className={classes.carouselItem}>
                <img
                    className={`d-block ${classes.projectImg}`}
                    src={img4}
                    alt="Third slide"
                    
                />
            </Carousel.Item>
            <Carousel.Item className={classes.carouselItem}>
                <img
                    className={`d-block ${classes.projectImg}`}
                    src={img5}
                    alt="Third slide"
                    
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default ProjectImages2;