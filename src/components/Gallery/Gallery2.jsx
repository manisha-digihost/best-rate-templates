import React from "react";

// Import required lightgallery CSS

import { Container, Row, Col } from "react-bootstrap";
import Masonry, {
  ResponsiveMasonry,
} from "https://cdn.skypack.dev/react-responsive-masonry@2.1.0";
import gallery1 from "./../../assets/images/gallery/gallery1.webp"
import gallery2 from "./../../assets/images/gallery/gallery2.webp"
import gallery3 from "./../../assets/images/gallery/gallery3.webp"
import gallery4 from "./../../assets/images/gallery/gallery4.webp"
import gallery5 from "./../../assets/images/gallery/gallery5.webp"
import gallery7 from "./../../assets/images/gallery/gallery7.webp"

const Gallery2 = () => {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery4,
    gallery7,
    // "https://cdn.pixabay.com/photo/2020/04/19/12/26/thread-5063401_1280.jpg",
    // "https://cdn.pixabay.com/photo/2020/07/11/11/34/mam-tor-5393685_1280.jpg",
    // "https://cdn.pixabay.com/photo/2020/03/14/21/56/wine-4931923_1280.jpg",
    // "https://cdn.pixabay.com/photo/2020/07/03/14/43/waterdrops-5366584_1280.jpg",
    // "https://cdn.pixabay.com/photo/2020/09/27/04/15/cat-5605615_960_720.jpg",
  ];
  const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };

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
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry gutter={4} >
            {images.map((image) => (
              <img src={image} data-aos="fade-right"
              data-aos-offset="300"
              alt="gallery img"
              data-aos-easing="ease-in-sine"/>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </section>
  );
};

export default Gallery2;
