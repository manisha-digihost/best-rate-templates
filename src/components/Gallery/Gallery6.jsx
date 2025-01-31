import React from "react";

// Import required lightgallery CSS

import { Container, Row, Col } from "react-bootstrap";
import gallery1 from "./../../assets/images/gallery/gallery1.webp"
import gallery2 from "./../../assets/images/gallery/gallery2.webp"
import gallery3 from "./../../assets/images/gallery/gallery3.webp"
import gallery4 from "./../../assets/images/gallery/gallery4.webp"

const Gallery6 = () => {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    // "https://cdn.pixabay.com/photo/2020/04/19/12/26/thread-5063401_1280.jpg",
    // "https://cdn.pixabay.com/photo/2020/07/11/11/34/mam-tor-5393685_1280.jpg",
    // "https://cdn.pixabay.com/photo/2020/03/14/21/56/wine-4931923_1280.jpg",
    // "https://cdn.pixabay.com/photo/2020/07/03/14/43/waterdrops-5366584_1280.jpg",
    // "https://cdn.pixabay.com/photo/2020/09/27/04/15/cat-5605615_960_720.jpg",
  ];

  return (
    <section className="gallery section">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom">
          <span className="px-3 py-2 rounded-pill bg-primary text-white mb-2 d-inline-block">
            Our Gallery
          </span>
          <h2 className="display-5 fw-bold mb-3">
            Solutions That Drive Success
          </h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: "700px" }}>
            Discover our range of financial services designed to help you
            achieve your goals and secure your future
          </p>
        </div>
        <div className="row">
            {images.map((image, index) => (
                <div className="col lg-3">
                    <img src={image} data-aos="fade-right"
                    alt="gallery img"/>
                </div>
            ))}
        

        </div>
      
      </Container>
    </section>
  );
};

export default Gallery6;
