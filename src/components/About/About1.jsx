import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About1 = () => {
  return (
    <section className="about py-5 about2 bg-light-alt">
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
              <div>
                <button className="btn btn-primary rounded-pill px-5 hover-scale">
                  Learn More
                </button>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="about-image position-relative mt-2">
              <div className="rounded overflow-hidden">
                <video autoPlay muted loop className="img-fluid">
                  <source src="https://cdn.pixabay.com/video/2023/01/13/146336-789093861_large.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="experience-badge position-absolute bg-primary text-white p-4 rounded-circle badge-circle">
                <h3 className="mb-0">15+</h3>
                <p className="mb-0 text-center">Years Experience</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .about {
          padding: 80px 0;
        }

        .subtitle {
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .title {
          font-size: 2.5rem;
          font-weight: 700;
        }

        .about-content {
          margin-bottom: 2rem;
        }

        .hover-scale {
          transition: transform 0.3s ease;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .about-image {
          max-width: 100%;
          height: auto;
        }

        .about-image video {
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .experience-badge {
          bottom: 30px;
          right: 30px;
          min-width: 150px;
          min-height: 150px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .experience-badge h3 {
          font-size: 2.5rem;
          font-weight: 700;
        }

        @media (max-width: 991.98px) {
          .about-content {
            text-align: center;
            padding: 0 15px;
            margin-bottom: 3rem;
          }

          .experience-badge {
            bottom: 20px;
            right: 20px;
            min-width: 120px;
            min-height: 120px;
          }

          .experience-badge h3 {
            font-size: 2rem;
          }
        }

        @media (max-width: 767.98px) {
          .about {
            padding: 60px 0;
          }

          .title {
            font-size: 2rem;
          }

          .experience-badge {
            min-width: 100px;
            min-height: 100px;
            padding: 15px !important;
            position: relative;
            left: 20%;
          }

          .about2 .badge-circle {
            top: 80%;
            transform: translateY(-50%);
            left: 10%;
            height: 150px;
            width: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

          .experience-badge h3 {
            font-size: 1.5rem;
          }

          .experience-badge p {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 575.98px) {
          .about {
            padding: 40px 0;
          }

          .title {
            font-size: 1.75rem;
          }

        }
      `}</style>
    </section>
  );
};

export default About1;
