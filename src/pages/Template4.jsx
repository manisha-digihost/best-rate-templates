import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/Template4/Hero";
import USPS from "../components/Template4/USPS";
import About from "../components/Template4/About";
import Products from "../components/Template4/Products";
import Testimonials from "../components/Template4/Testimonials";
import Gallery from "../components/Template4/Gallery";
import Contact from "../components/Template4/Contact";
import Header2 from "../layout/Header/Header2";
import Footer2 from "../layout/Footer/Footer2";

const Template4 = () => {
  return (
    <div>
      <Header2 />
      <Hero />
      <USPS />
      <About />
      <Products />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer2 />
    </div>
  );
};

export default Template4;
