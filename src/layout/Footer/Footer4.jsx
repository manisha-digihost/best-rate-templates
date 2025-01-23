import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Container } from "react-bootstrap";

const Footer1 = () => {
  return (
    <footer className="bg-dark text-white py-5 pb-3">
      <Container>
        <div className="text-center">
          {/* Company Info */}
            <h5 className="text-white mb-3">Best Rate Website</h5>
            
        
            <ul className="list-unstyled d-flex justify-content-center mt-5" style={{gap:"20px"}}>
              <li className="mb-2">
                <a href="#!" className="text-white text-decoration-none">Home</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white text-decoration-none">Services</a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white text-decoration-none">Contact</a>
              </li>
            </ul>
            <div className="social-links mt-5">
              <a href="#" className="text-white me-3"><FaFacebookF /></a>
              <a href="#" className="text-white me-3"><FaXTwitter /></a>
              <a href="#" className="text-white me-3"><FaInstagram /></a>
              <a href="#" className="text-white me-3"><FaLinkedinIn /></a>
            </div>
      

          {/* Contact Info */}
          {/* <div className="col-lg-4 mb-4">
            <h5 className="text-white mb-3">Contact Us</h5>
            <div className="d-flex align-items-center mb-3 text-white">
              <IoMdMail className="me-2" />
              <span>info@bestratewebsite.com</span>
            </div>
            <div className="d-flex align-items-center mb-3 text-white">
              <IoCall className="me-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <address className="text-white mb-0">
              123 Business Street<br />
              New York, NY 10001<br />
              United States
            </address>
          </div> */}
        </div>

        {/* Copyright */}
      </Container>
        <div className="border-top border-secondary pt-4 mt-4 text-center">
          <p className="text-white mb-0">
            © {new Date().getFullYear()} Best Rate Website. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer1;
