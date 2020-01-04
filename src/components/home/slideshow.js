import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
const styled = {
        "background-image": require("../images/one.jpg"),
        "background-position": "center",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "height": "91vh",
}

export default function Slideshow() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };

    return (


        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} class = "jumbotron-fluid ">
        <Carousel.Item  style = {styled}>
            <img
                src={require("../images/one.jpg")}
                alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  style = {styled}>
             <img
            src={require("../images/two.jpg")}
            alt="Second slide"
    
            /> 
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  style = {styled}>
           <img
            src={require("../images/three.jpg")}
            alt="Third slide"
    
            />
    
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}