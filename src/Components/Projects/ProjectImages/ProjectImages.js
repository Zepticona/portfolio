import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../assets/creativeAgency/1.png'
import img2 from '../../../assets/creativeAgency/2.png'
const ProjectImages = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Third slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="require('../../../assets/creativeAgency/4.png')"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default ProjectImages;