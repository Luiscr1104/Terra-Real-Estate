import { Carousel } from 'react-bootstrap';
import React from 'react'
import Image from "next/image";

function MyCarousel() {
    return (
      <Carousel>
        <Carousel.Item interval={10000}>
          <a href="#">
            <Image 
            src="/assets/home-1.png" 
            className="d-block w-100 img-fluid" 
            width={1920}
            height={1080} 
            alt="home1" /></a>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <a href="#">
            <Image 
            src="/assets/home-2.png" 
            className="d-block w-100 img-fluid" 
            width={1920}
            height={1080} 
            alt="home-2"
            /></a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="#">
            <Image 
            src="/assets/home-3.png" 
            className="d-block w-100 img-fluid" 
            width={1920}
            height={1080} 
            alt="home-3"
            /></a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="#">
            <Image 
            src="/assets/home-4.png" 
            className="d-block w-100 img-fluid" 
            width={1920}
            height={1080} 
            alt="home-4"
            /></a>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default MyCarousel;