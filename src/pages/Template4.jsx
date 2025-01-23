import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header2 from "../layout/Header/Header2";
import Footer2 from "../layout/Footer/Footer2";
import About4 from "../components/About/About4";
import Contact4 from "../components/Contact/Contact4";
import Hero4 from "../components/Hero/Hero4";
import USPS4 from "../components/USPS/USPS4";
import Products4 from "../components/Products/Products4";
import Gallery4 from "../components/Gallery/Gallery4";
import Testimonials4 from "../components/Testimonials/Testimonials4";

const Template4 = () => {
  return (
    <div>
      <Header2 />
      <Hero4 />
      <USPS4 />
      <About4 />
      <Products4 />
      <Testimonials4 />
      <Gallery4 />
      <Contact4 />
      <Footer2 />
    </div>
  );
};

export default Template4;
