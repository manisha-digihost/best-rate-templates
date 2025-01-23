import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/Template3/Hero";
import USPS from "../components/Template3/USPS";
import About from "../components/Template3/About";
import Products from "../components/Template3/Products";
import Testimonials from "../components/Template3/Testimonials";
import Gallery from "../components/Template3/Gallery";
import Contact from "../components/Template3/Contact";
import Header3 from "../layout/Header/Header3";
import Footer3 from "../layout/Footer/Footer3";

const Template3 = () => {
  return (
    <div>
      <Header3 />
      <Hero />
      <USPS />
      <About />
      <Products />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer3 />
    </div>
  );
};

export default Template3;
