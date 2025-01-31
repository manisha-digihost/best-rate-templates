import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero6 from "../components/Hero/Hero6";
import Products6 from "../components/Products/Products6";
import Header6 from "../layout/Header/Header6";
import Testimonials6 from "../components/Testimonials/Testimonials6";
import About6 from "../components/About/about6";
import USPS6 from "../components/USPS/USPS6";
import Contact6 from "../components/Contact/Contact6";
import Footer6 from "../layout/Footer/footer6";
import Gallery6 from "../components/Gallery/Gallery6";

const Template6 = () => {
  return (
    <ReactLenis root>
      <div>
        <Header6 />
        <Hero6 className="hero-section" />
        <About6/>
        <USPS6/>
        <Products6 className="products-section" />
        <Testimonials6/>
        <Gallery6/>
        <Contact6/>
        <Footer6/>
      </div>
    </ReactLenis>
  );
};

export default Template6;
