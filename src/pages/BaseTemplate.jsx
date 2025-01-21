import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/Base/Hero";
import USPS from "../components/Base/USPS";
import About from "../components/Base/About";
import Products from "../components/Base/Products";
import Testimonials from "../components/Base/Testimonials";
import Gallery from "../components/Base/Gallery";
import Contact from "../components/Base/Contact";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

const BaseTemplate = () => {
  return (
    <div>
      <Header />
      <Hero />
      <USPS />
      <About />
      <Products />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default BaseTemplate;
