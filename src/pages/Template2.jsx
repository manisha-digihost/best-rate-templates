import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/Template1/Hero";
import USPS from "../components/Template1/USPS";
import About from "../components/Template1/About";
import Products from "../components/Template1/Products";
import Testimonials from "../components/Template1/Testimonials";
import Gallery from "../components/Template1/Gallery";
import Contact from "../components/Template1/Contact";
import Header2 from "../layout/Header/Header2";
import Footer2 from "../layout/Footer/Footer2";

const Template2 = () => {
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

export default Template2;
