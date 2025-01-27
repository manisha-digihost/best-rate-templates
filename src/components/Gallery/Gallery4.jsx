import React from "react";
import Slider from "react-slick"; // Import Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme CSS
import { Container } from "react-bootstrap";

const Gallery4 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // For devices with width < 768px
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          centerMode: false, // Disable center mode on mobile
          focusOnSelect: false, // Disable focus on select on mobile
        },
      },
      {
        breakpoint: 1024, // For devices with width < 1024px
        settings: {
          slidesToShow: 3, // Show 3 slides on tablet
        },
      },
    ],
  };

  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
  ];

  return (
    <section className="gallery section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">
            Solutions That Drive Success
          </h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: "700px" }}>
            Discover our range of financial services designed to help you
            achieve your goals and secure your future.
          </p>
        </div>
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className="px-3">
              <div className="text-center bg-white shadow-sm rounded gallery-video">
                <video
                  src={video}
                  controls
                  autoPlay
                  loop
                  muted
                  className="img-fluid rounded"
                  preload="metadata"
                />
              </div>
            </div>
          ))}
        </Slider>
      </Container>
      <style jsx>{`
        .gallery-video {
          overflow: hidden;
          position: relative;
          height: 100%; /* Make sure the container respects the aspect ratio */
        }
        .gallery-video video {
          width: 100%;
          height: 100%; /* Ensure the video takes the full height */
          object-fit: cover; /* Ensure the video covers the container without distortion */
          transition: all 0.3s linear;
        }
        .gallery-video:hover video {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default Gallery4;
