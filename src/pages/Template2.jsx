import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/Template2/Hero";
import USPS from "../components/Template2/USPS";
import About from "../components/Template2/About";
import Products from "../components/Template2/Products";
import Testimonials from "../components/Template2/Testimonials";
import Gallery from "../components/Template2/Gallery";
import Contact from "../components/Template2/Contact";
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
