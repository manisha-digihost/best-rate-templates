import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer4 from "../layout/Footer/Footer4";
import About4 from "../components/About/About4";
import Contact4 from "../components/Contact/Contact4";
import Hero6 from "../components/Hero/Hero6";
import USPS4 from "../components/USPS/USPS4";
import Products6 from "../components/Products/Products6";
import Gallery4 from "../components/Gallery/Gallery4";
import Testimonials4 from "../components/Testimonials/Testimonials4";
import Header6 from "../layout/Header/Header6";
import Testimonials6 from "../components/Testimonials/Testimonials6";

const Template6 = () => {
  return (
    <ReactLenis root>
      <div>
        <Header6 />
        <Hero6 className="hero-section" />
        <Products6 className="products-section" />
        <Testimonials6/>
      </div>
    </ReactLenis>
  );
};

export default Template6;
