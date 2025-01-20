import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "../components/Hero";
import USPS from "../components/USPS";
import About from "../components/About";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

const Template = () => {
  return (
    <div>
      <Hero />
      <USPS />
      <About />
      <Products />
      <Testimonials />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Template;
