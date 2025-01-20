import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Hero() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/integrated-microchip-circuit-board-server-central-computer-processor-with-neon-lights_90220-1202.jpg?t=st=1737356235~exp=1737359835~hmac=b41d951e0683c114493903e91e06aff4b08eea0c1b200bf6b901f7ab9f49318e&w=900"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/integrated-microchip-circuit-board-server-central-computer-processor-with-neon-lights_90220-1202.jpg?t=st=1737356235~exp=1737359835~hmac=b41d951e0683c114493903e91e06aff4b08eea0c1b200bf6b901f7ab9f49318e&w=900"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/integrated-microchip-circuit-board-server-central-computer-processor-with-neon-lights_90220-1202.jpg?t=st=1737356235~exp=1737359835~hmac=b41d951e0683c114493903e91e06aff4b08eea0c1b200bf6b901f7ab9f49318e&w=900"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;