import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../../assets/creativeAgency/1.png'
import img2 from '../../../../assets/creativeAgency/2.png'
import img3 from '../../../../assets/creativeAgency/3.png'
import img4 from '../../../../assets/creativeAgency/4.png'
import img5 from '../../../../assets/creativeAgency/5.png'

const ProjectImages1 = () => {
    return (
        <Carousel>
            <Carousel.Item interval={500} style={{'height': '600px'}}>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    style={{'maxHeight': '100%', 'height': '100%'}}
                />
                
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Third slide"
                    style={{'maxHeight': '100%', 'height': '100%'}}
                />
                
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    style={{'maxHeight': '100%', 'height': '100%'}}
                />
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className="d-block w-100"
                    src={img4}
                    alt="Third slide"
                    style={{'maxHeight': '100%', 'height': '100%'}}
                />
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className="d-block w-100"
                    src={img5}
                    alt="Third slide"
                    style={{'maxHeight': '100%', 'height': '100%'}}
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default ProjectImages1;