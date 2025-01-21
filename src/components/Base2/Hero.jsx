import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <Carousel 
        fade 
        interval={2000} 
        className="hero-carousel"
        indicators={false}
      >
        <Carousel.Item>
          <div className="carousel-image" style={{
            height: "100vh", 
            backgroundColor: "#f8f9fa",
            transition: "all 0.5s ease-in-out"
          }}>
            <Container className="h-100 d-flex align-items-center justify-content-center text-center">
              <div className="carousel-content animate__animated animate__fadeInUp">
                <h1 className="display-4 fw-bold text-primary mb-4" style={{
                  transform: "translateY(0)",
                  opacity: 1,
                  transition: "all 0.8s ease-in-out"
                }}>Welcome to Best Rate</h1>
                <p className="lead mb-4" style={{
                  transform: "translateY(0)", 
                  opacity: 1,
                  transition: "all 0.8s ease-in-out 0.2s"
                }}>Providing the best financial solutions for your business growth</p>
                <button className="btn btn-primary btn-lg rounded-pill px-5 hover-scale">Get Started</button>
              </div>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image" style={{
            height: "100vh",
            backgroundColor: "#f1f3f5",
            transition: "all 0.5s ease-in-out"
          }}>
            <Container className="h-100 d-flex align-items-center justify-content-center text-center">
              <div className="carousel-content animate__animated animate__fadeInUp">
                <h1 className="display-4 fw-bold text-primary mb-4" style={{
                  transform: "translateY(0)",
                  opacity: 1, 
                  transition: "all 0.8s ease-in-out"
                }}>Professional Financial Services</h1>
                <p className="lead mb-4" style={{
                  transform: "translateY(0)",
                  opacity: 1,
                  transition: "all 0.8s ease-in-out 0.2s"
                }}>Expert guidance to help you achieve your financial goals</p>
                <button className="btn btn-primary btn-lg rounded-pill px-5 hover-scale">Our Services</button>
              </div>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image" style={{
            height: "100vh",
            backgroundColor: "#e9ecef",
            transition: "all 0.5s ease-in-out"
          }}>
            <Container className="h-100 d-flex align-items-center justify-content-center text-center">
              <div className="carousel-content animate__animated animate__fadeInUp">
                <h1 className="display-4 fw-bold text-primary mb-4" style={{
                  transform: "translateY(0)",
                  opacity: 1,
                  transition: "all 0.8s ease-in-out"
                }}>Trusted by Thousands</h1>
                <p className="lead mb-4" style={{
                  transform: "translateY(0)",
                  opacity: 1,
                  transition: "all 0.8s ease-in-out 0.2s"
                }}>Join our satisfied clients and experience excellence in service</p>
                <button className="btn btn-primary btn-lg rounded-pill px-5 hover-scale">Contact Us</button>
              </div>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>

      <style jsx>{`
        .hero-carousel .carousel-image {
          position: relative;
        }
        
        .carousel-content {
          opacity: 0;
          transform: translateY(20px);
          animation: slideUp 0.8s forwards;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hover-scale {
          transition: transform 0.3s ease;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .carousel-indicators {
          bottom: 40px;
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          filter: invert(1);
        }
      `}</style>
    </section>
  );
}

export default Hero;