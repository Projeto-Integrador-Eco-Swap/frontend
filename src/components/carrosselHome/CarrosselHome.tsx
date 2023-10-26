import React from 'react';
import banner from '../../assets/carrossel_home-1.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarrosselHome = () => {
    return (
        <div className="">
            <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
                <div>
                    <img src={banner} alt="" />
                </div>
            </Carousel>
        </div>
    );
};

export default CarrosselHome;
