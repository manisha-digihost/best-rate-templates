import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "../components/Base2/Hero";
import USPS from "../components/Base2/USPS";
import About from "../components/Base2/About";
import Products from "../components/Base2/Products";
import Testimonials from "../components/Base2/Testimonials";
import Gallery from "../components/Base2/Gallery";
import Contact from "../components/Base2/Contact";
import Header1 from "../layout/Header/Header1";
import Footer1 from "../layout/Footer/Footer1";


const BaseTemplate = () => {
  return (
    <div>
        <Header1/>
        <Hero />
        <USPS />
        <About />
        <Products />
        <Testimonials />
        <Gallery />
        <Contact />
        <Footer1/>
    </div>
  );
};

export default BaseTemplate;
