import { Carousel } from 'react-bootstrap';
import React from 'react'

function MyCarousel() {
    return (
      <Carousel>
        <Carousel.Item interval={10000}>
          <a href="#"><img src="/assets/home-1.png" className="d-block w-100 img-fluid" height="25%" alt="..."/></a>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <a href="#"><img src="/assets/home-2.png" className="d-block w-100 img-fluid" height="25%" alt="..."/></a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="#"><img src="/assets/home-3.png" className="d-block w-100 img-fluid" height="25%" alt="..."/></a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="#"><img src="/assets/home-5.png" className="d-block w-100 img-fluid" height="25%" alt="..."/></a>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default MyCarousel;