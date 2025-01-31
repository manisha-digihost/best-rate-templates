import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutimg from "./../../assets/images/about6.webp"


const About6 = () => {
  return (
    <section className="about section bg-light-alt position-relative py-5">
      <Container>
        <Row className="g-5 align-items-center">
          {/* Image with Overlayed Content */}
          <Col lg={6}>
            <div className="image-container position-relative rounded-3 overflow-hidden shadow-lg">
              <img
                src={aboutimg}
                alt="Office team meeting"
                className="img-fluid w-100"
                style={{ height: "100%", objectFit: "cover" }}
              />
              
            </div>
          </Col>
          
          {/* Text Content */}
          <Col lg={6}>
            <div className="text-content">
            <h4 className="display-6 mb-3">
              Khow More About Us
            </h4>
              <p className="text-muted lead mb-4">
                Over 15 years of creating innovative financial solutions, our
                journey reflects trust, collaboration, and proven success.
              </p>
              <p className="text-muted lead mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat reiciendis modi earum hic obcaecati odit distinctio perferendis corrupti excepturi at.
              </p>
              <p className="text-muted lead mb-4">Officia suscipit nam beatae molestiae eius voluptatum! Voluptates ipsa, itaque, voluptas similique cumque necessitatibus quasi tempora amet corporis labore quia, fuga perspiciatis!
              </p>
           
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .decorative-shape {
          position: absolute;
          top: 0;
          left: -50px;
          width: 200px;
          height: 200px;
          background: rgba(0, 123, 255, 0.1);
          border-radius: 50%;
          z-index: -1;
        }
        .image-container {
          position: relative;
          height: 400px;
          overflow: hidden;
        }
        .image-overlay {
          top: 20px;
          left: 20px;
          max-width: 150px;
        }
        .stats-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
          width: 60px;
        }
        .btn-primary-outline {
          border: 2px solid #007bff;
          color: #007bff;
          transition: background-color 0.3s, color 0.3s;
        }
        .btn-primary-outline:hover {
          background-color: #007bff;
          color: #fff;
        }
        .icon-box {
          font-size: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default About6;
