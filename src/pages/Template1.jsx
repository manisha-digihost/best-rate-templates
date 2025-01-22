import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/Template1/Hero";
import USPS from "../components/Template1/USPS";
import About from "../components/Template1/About";
import Products from "../components/Template1/Products";
import Testimonials from "../components/Template1/Testimonials";
import Gallery from "../components/Template1/Gallery";
import Contact from "../components/Template1/Contact";
import Header1 from "../layout/Header/Header1";
import Footer1 from "../layout/Footer/Footer1";

const Template1 = () => {
  return (
    <div>
      <Header1 />
      <Hero />
      <USPS />
      <About />
      <Products />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer1 />
    </div>
  );
};

export default Template1;
