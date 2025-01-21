import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <section className="about py-5 about2">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="about-content pe-lg-5">
              <span className="subtitle">About Us</span>
              <h2 className="title mb-4">About Best-Rate</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                fugiat porro quas ducimus quis molestiae perferendis facere sit.
                Dignissimos laboriosam quam sunt modi est harum reiciendis rem
                blanditiis necessitatibus reprehenderit?
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </Col>
          <Col lg={7}>
            <div className="about-image position-relative">
              <div className="img-container rounded overflow-hidden shadow-lg">
                {/* <img src="" alt="" className="img-fluid" /> */}
              </div>
              <div className="experience-badge position-absolute bg-primary text-white p-4 rounded-circle badge-circle">
                <h3 className="mb-0">15+</h3>
                <p className="mb-0 text-center">Years Experience</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
