import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Products = () => {
  return (
    <section className="products py-5">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={6}>
            <span className="subtitle">What We Offer</span>
            <h2 className="title">Our Products & Services</h2>
            <p className="text-muted">
              We provide high quality products and services tailored to your
              needs
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={4}>
            <div className="product-card shadow-sm h-100">
              <div className="product-image rounded-top">
                {/* Product image here */}
              </div>
              <div className="product-content p-4">
                <h3 className="h4 mb-3">Premium Service</h3>
                <p className="text-muted mb-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  fugiat porro quas ducimus quis
                </p>
                <a href="!#" className="btn btn-outline-primary">
                  Learn More
                </a>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="product-card shadow-sm h-100">
              <div className="product-image rounded-top">
                {/* Product image here */}
              </div>
              <div className="product-content p-4">
                <h3 className="h4 mb-3">Quality Products</h3>
                <p className="text-muted mb-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  fugiat porro quas ducimus quis
                </p>
                <a href="!#" className="btn btn-outline-primary">
                  Learn More
                </a>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="product-card shadow-sm h-100">
              <div className="product-image rounded-top">
                {/* Product image here */}
              </div>
              <div className="product-content p-4">
                <h3 className="h4 mb-3">Expert Solutions</h3>
                <p className="text-muted mb-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  fugiat porro quas ducimus quis
                </p>
                <a href="!#" className="btn btn-outline-primary">
                  Learn More
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Products;
