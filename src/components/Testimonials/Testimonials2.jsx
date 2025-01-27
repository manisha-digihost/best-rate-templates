import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profile from "./../../assets/images/profile.webp"

const Testimonials2 = () => {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: sliderNavRef.current,
  };

  const settingsNav = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: sliderForRef.current,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768, // For devices with width < 768px
        settings: {
          slidesToShow: 2, // Show 1 slide on mobile
          centerMode: false, // Disable center mode on mobile
          focusOnSelect: false, // Disable focus on select on mobile
        },
      },
      {
        breakpoint: 1024, // For devices with width < 1024px
        settings: {
          slidesToShow: 3, // Show 2 slides on tablet
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "John Smith",
      text: "Best-Rate has completely transformed how I manage my finances. Their expert guidance and personalized service made all the difference.",
      role: "Business Owner",
    },
    {
      name: "Sarah Johnson",
      text: "I'm extremely satisfied with the professional and thorough service provided by Best-Rate. They helped me achieve my financial goals.",
      role: "Entrepreneur",
    },
    {
      name: "Michael Brown",
      text: "The team at Best-Rate goes above and beyond. Their knowledge and dedication to client success is unmatched in the industry.",
      role: "Real Estate Investor",
    },
  ];

  return (
    <section className="testimonials bg-light-alt section">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
          <span className="px-3 py-2 rounded-pill bg-primary text-white mb-2 d-inline-block">
            Testimonials
          </span>
          <h2 className="display-5 fw-bold mb-3">
            Solutions That Drive Success
          </h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: "700px" }}>
            Discover our range of financial services designed to help you
            achieve your goals and secure your future
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="slider slider-for">
              <Slider {...settingsFor} ref={sliderForRef}>
                {testimonials.map((testimonial, index) => (
                  <div key={index}>
                    <div style={{ backgroundColor: "#fff", padding: "20px" }}>
                      <figure
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          style={{
                            borderRadius: "50%",
                            height: "100px",
                            width: "100px",
                            overflow: "hidden",
                          }}
                          src={profile}
                          alt=""
                        />
                      </figure>
                      <h3
                        className="mb-2"
                        style={{ fontSize: "20px", textAlign: "center" }}
                      >
                        {testimonial.name}
                      </h3>
                      <p className="text-center">{testimonial.text}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="slider slider-nav mt-4">
              <Slider {...settingsNav} ref={sliderNavRef}>
                {testimonials.map((testimonial, index) => (
                  <div key={index}>
                    <figure
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <img
                        style={{
                          borderRadius: "50%",
                          height: "70px",
                          width: "70px",
                          overflow: "hidden",
                          background: "#fff",
                          padding: "10px",
                        }}
                        src={profile}
                        alt=""
                      />
                    </figure>
                    {/* <h3 style={{fontSize:"20px",textAlign:"center"}}>{testimonial.name}</h3> */}
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials2;
