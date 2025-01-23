import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/Hero/Hero";
import USPS from "../components/USPS/USPS";
import About from "../components/About/About";
import Products from "../components/Products/Products";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";
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
