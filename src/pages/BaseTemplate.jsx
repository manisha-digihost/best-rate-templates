import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "../components/Base2/Hero";
import USPS from "../components/Base2/USPS";
import About from "../components/Base2/About";
import Products from "../components/Base2/Products";
import Testimonials from "../components/Base2/Testimonials";
import Gallery from "../components/Base2/Gallery";
import Contact from "../components/Base2/Contact";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

const BaseTemplate = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <USPS />
      <About />
      <Products />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer/>
    </div>
  );
};

export default BaseTemplate;
