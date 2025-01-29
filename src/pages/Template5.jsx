import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer4 from "../layout/Footer/Footer4";
import About4 from "../components/About/About4";
import Contact4 from "../components/Contact/Contact4";
import Hero4 from "../components/Hero/Hero4";
import USPS4 from "../components/USPS/USPS4";
import Products4 from "../components/Products/Products4";
import Gallery4 from "../components/Gallery/Gallery4";
import Testimonials4 from "../components/Testimonials/Testimonials4";
import Header4 from "../layout/Header/Header4";

const Template5 = () => {
  return (
    <ReactLenis root>
      <div>
        <Header4 />
        <Hero4 className="hero-section" />
        <USPS4 className="usps-section" />
        <About4 className="about-section" />
        <Products4 className="products-section" />
        <Testimonials4 className="testimonials-section" />
        <Gallery4 className="gallery-section" />
        <Contact4 className="contact-section" />
        <Footer4 className="footer-section" />
      </div>
    </ReactLenis>
  );
};

export default Template5;
