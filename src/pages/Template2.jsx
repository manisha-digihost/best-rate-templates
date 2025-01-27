import React,{useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/Hero/Hero2";
import USPS from "../components/USPS/USPS2";
import Products from "../components/Products/Products2";
import Testimonials from "../components/Testimonials/Testimonials2";
import Gallery from "../components/Gallery/Gallery2";
import Header2 from "../layout/Header/Header2";
import Footer2 from "../layout/Footer/Footer2";
import About2 from "../components/About/About2";
import Contact2 from "../components/Contact/Contact2";
import Hero2 from "../components/Hero/Hero2";
import USPS2 from "../components/USPS/USPS2";
import Products2 from "../components/Products/Products2";
import Testimonials3 from "../components/Testimonials/Testimonials3";
import Gallery4 from "../components/Gallery/Gallery4";
import Testimonials2 from "../components/Testimonials/Testimonials2";
import Gallery2 from "../components/Gallery/Gallery2";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Template2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      offset: 100, // Trigger animation 100px before the element is in view
      once: true, // Whether animation should happen only once or every time you scroll
    });
  }, []);
  return (
    <div>
      <Header2 />
      <Hero2 />
      <USPS2 />
      <About2 />
      <Products2 />
      <Testimonials2 />
      <Gallery2 />
      <Contact2 />
      <Footer2 />
    </div>
  );
};

export default Template2;
