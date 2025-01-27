import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaChartLine, FaHandshake, FaUsers } from "react-icons/fa";
import { motion } from "motion/react";

const About3 = () => {
  return (
    <section className="about-3 py-6 bg-light-alt">
      <Container>
        <Row className="align-items-center mb-5">
          <Col
            lg={6}
            className="text-start text-lg-start"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -80, opacity: 0 }}
            transition={{ type: "tween", duration: 1, delay: 1 }}
          >
            <motion.div
              className=""
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -80, opacity: 0 }}
              transition={{ type: "tween", duration: 1, delay: 1 }}
            >
              <span className="badge bg-primary px-3 py-2 rounded-pill mb-3">
                About Best Rate
              </span>
              <h2 className="display-4 fw-bold mb-4">
                Building Financial Futures Together
              </h2>
              <p className="lead text-muted">
                With over 15 years of experience, we've helped thousands achieve
                their financial goals through expert guidance and personalized
                solutions.
              </p>
            </motion.div>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <motion.div
              className="stats-grid"
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 80, opacity: 0 }}
              transition={{ type: "tween", duration: 1, delay: 1 }}
            >
              <div className="stat-card bg-white p-4 rounded-4 shadow-sm text-center">
                <h3 className="display-4 fw-bold text-primary mb-2">15+</h3>
                <p className="mb-0">Years Experience</p>
              </div>
              <div className="stat-card bg-white p-4 rounded-4 shadow-sm text-center">
                <h3 className="display-4 fw-bold text-primary mb-2">5K+</h3>
                <p className="mb-0">Happy Clients</p>
              </div>
              <div className="stat-card bg-white p-4 rounded-4 shadow-sm text-center">
                <h3 className="display-4 fw-bold text-primary mb-2">98%</h3>
                <p className="mb-0">Success Rate</p>
              </div>
            </motion.div>
          </Col>
        </Row>

        <Row className="g-4 mt-3">
          <Col md={4}>
            <motion.div
              className="feature-card bg-white p-4 rounded-4 shadow-sm h-100"
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0, opacity: 0 }}
              transition={{ type: "tween", duration: 1, delay: 0.4 }}
            >
              <div className="icon-box bg-primary bg-opacity-10 p-3 rounded-3 mb-4 d-inline-block">
                <FaChartLine className="text-primary" size={24} />
              </div>
              <h4 className="h5 mb-3">Strategic Planning</h4>
              <p className="text-muted mb-0">
                We develop comprehensive financial strategies tailored to your
                unique goals and circumstances, ensuring long-term success.
              </p>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              className="feature-card bg-white p-4 rounded-4 shadow-sm h-100"
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0, opacity: 0 }}
              transition={{ type: "tween", duration: 1, delay: 0.8 }}
            >
              <div className="icon-box bg-primary bg-opacity-10 p-3 rounded-3 mb-4 d-inline-block">
                <FaHandshake className="text-primary" size={24} />
              </div>
              <h4 className="h5 mb-3">Expert Guidance</h4>
              <p className="text-muted mb-0">
                Our team of seasoned financial advisors provides personalized
                consultation and ongoing support throughout your journey.
              </p>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              className="feature-card bg-white p-4 rounded-4 shadow-sm h-100"
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0, opacity: 0 }}
              transition={{ type: "tween", duration: 1, delay: 1.2 }}
            >
              <div className="icon-box bg-primary bg-opacity-10 p-3 rounded-3 mb-4 d-inline-block">
                <FaUsers className="text-primary" size={24} />
              </div>
              <h4 className="h5 mb-3">Client Focus</h4>
              <p className="text-muted mb-0">
                We prioritize building lasting relationships with our clients
                through transparent communication and dedicated service.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .about-3 {
          background-color: #f8f9fa;
        }
        .py-6 {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .feature-card {
          transition: transform 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
        }
        .icon-box {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};

export default About3;
