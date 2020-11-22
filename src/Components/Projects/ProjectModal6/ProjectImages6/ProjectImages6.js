import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../../assets/apartmentHunt/img1.png'
import img2 from '../../../../assets/apartmentHunt/img2.png'
import img3 from '../../../../assets/apartmentHunt/img3.png'
import img4 from '../../../../assets/apartmentHunt/img4.png'
import img5 from '../../../../assets/apartmentHunt/img5.png'
import classes from '../../projects.module.css' 

const ProjectImages6 = () => {
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

export default ProjectImages6;