import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { FaBars, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Header5 = () => {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Header */}
      <Navbar
        expand="lg"
        className={`bg-light-alt py-3 ${
          isScrolled ? "fixed-top shadow-sm" : ""
        }`}
        style={{ transition: "all 0.3s ease" }}
      >
        <Container>
          <div className="d-flex align-items-center w-100">
            {/* Mobile Menu Toggle */}
            <div className="d-lg-none me-3">
              <FaBars
                className="fs-4"
                onClick={handleShow}
                style={{ cursor: "pointer" }}
              />
            </div>

            {/* Logo */}
            <Navbar.Brand href="#home" className="me-4">
              <span className="fw-bold fs-3 text-uppercase">
                <span className="text-primary">True</span>Buy
              </span>
            </Navbar.Brand>

            {/* Desktop Navigation */}
            <div className="d-none d-lg-flex flex-grow-1">
              <Nav className="ms-auto">
                <Link to="#home" className="nav-link px-3 fw-medium">
                  Home
                </Link>
                <Link to="#about" className="nav-link px-3 fw-medium">
                  About us
                </Link>
                <Link to="#about" className="nav-link px-3 fw-medium">
                  Categories
                </Link>
                <Link to="#contact" className="nav-link px-3 fw-medium">
                  Contact
                </Link>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-link text-dark me-3"
                    aria-label="Facebook"
                  >
                    <svg
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.69522 4.97799C1.71413 4.74244 1.82106 4.52265 1.99473 4.36239C2.1684 4.20213 2.39606 4.11317 2.63237 4.11322H8.29942C8.53573 4.11317 8.76339 4.20213 8.93706 4.36239C9.11073 4.52265 9.21766 4.74244 9.23657 4.97799L9.61396 9.67782C9.62434 9.80715 9.60783 9.93724 9.56547 10.0599C9.52311 10.1825 9.45582 10.2951 9.36783 10.3904C9.27985 10.4858 9.17307 10.5619 9.05422 10.614C8.93538 10.666 8.80704 10.6929 8.67729 10.693H2.2545C2.12475 10.6929 1.99641 10.666 1.87756 10.614C1.75872 10.5619 1.65194 10.4858 1.56395 10.3904C1.47596 10.2951 1.40867 10.1825 1.36631 10.0599C1.32395 9.93724 1.30744 9.80715 1.31782 9.67782L1.69522 4.97799V4.97799Z"
                        stroke="black"
                        stroke-width="0.798971"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.34582 5.52318V3.17327C7.34582 2.67468 7.14775 2.19651 6.7952 1.84395C6.44264 1.4914 5.96447 1.29333 5.46588 1.29333C4.9673 1.29333 4.48913 1.4914 4.13657 1.84395C3.78402 2.19651 3.58595 2.67468 3.58595 3.17327V5.52318"
                        stroke="black"
                        stroke-width="0.798971"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    className="btn btn-link text-dark me-3"
                    aria-label="Twitter"
                  >
                    <svg
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_163_544)">
                        <path
                          d="M8.22356 5.61256C8.41531 5.66886 8.59788 5.74527 8.77127 5.84179C8.94465 5.9383 9.1262 6.08508 9.31591 6.28213C9.50561 6.47918 9.66778 6.71142 9.80241 6.97885C9.93704 7.24627 10.0492 7.59211 10.139 8.01637C10.2287 8.44063 10.2736 8.91617 10.2736 9.44298C10.2736 10.0623 10.0696 10.5921 9.66166 11.0324C9.25369 11.4728 8.76209 11.693 8.18685 11.693H2.96074C2.3855 11.693 1.89389 11.4728 1.48592 11.0324C1.07795 10.5921 0.873962 10.0623 0.873962 9.44298C0.873962 8.91617 0.918839 8.44063 1.00859 8.01637C1.09835 7.59211 1.21054 7.24627 1.34517 6.97885C1.4798 6.71142 1.64197 6.47918 1.83167 6.28213C2.02138 6.08508 2.20293 5.9383 2.37632 5.84179C2.5497 5.74527 2.73227 5.66886 2.92402 5.61256C2.60172 5.10989 2.44057 4.56297 2.44057 3.97182C2.44057 3.55359 2.52319 3.15446 2.68841 2.77444C2.85364 2.39441 3.07701 2.06566 3.35851 1.78818C3.64001 1.5107 3.97352 1.29053 4.35906 1.12766C4.74459 0.964796 5.1495 0.883362 5.57379 0.883362C5.99808 0.883362 6.40299 0.964796 6.78853 1.12766C7.17406 1.29053 7.50757 1.5107 7.78907 1.78818C8.07057 2.06566 8.29394 2.39441 8.45917 2.77444C8.6244 3.15446 8.70701 3.55359 8.70701 3.97182C8.70701 4.56297 8.54586 5.10989 8.22356 5.61256ZM5.57379 1.65548C4.92512 1.65548 4.3713 1.88168 3.91233 2.33409C3.45336 2.7865 3.22388 3.33241 3.22388 3.97182C3.22388 4.61123 3.45336 5.15714 3.91233 5.60955C4.3713 6.06196 4.92512 6.28816 5.57379 6.28816C6.22247 6.28816 6.77629 6.06196 7.23525 5.60955C7.69422 5.15714 7.92371 4.61123 7.92371 3.97182C7.92371 3.33241 7.69422 2.7865 7.23525 2.33409C6.77629 1.88168 6.22247 1.65548 5.57379 1.65548ZM8.18685 10.9209C8.54586 10.9209 8.85286 10.7771 9.10784 10.4896C9.36282 10.202 9.49031 9.85316 9.49031 9.44298C9.49031 8.48185 9.33019 7.72381 9.00993 7.16886C8.68967 6.6139 8.22968 6.32235 7.62997 6.2942C7.03841 6.80492 6.35302 7.06028 5.57379 7.06028C4.79457 7.06028 4.10917 6.80492 3.51762 6.2942C2.9179 6.32235 2.45791 6.6139 2.13765 7.16886C1.8174 7.72381 1.65727 8.48185 1.65727 9.44298C1.65727 9.85316 1.78476 10.202 2.03974 10.4896C2.29472 10.7771 2.60172 10.9209 2.96074 10.9209H8.18685Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_163_544">
                          <rect
                            width="9.39966"
                            height="10.8096"
                            fill="white"
                            transform="translate(0.873962 0.883362)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </Nav>
            </div>

            {/* Header Icons */}
          </div>

          {/* Mobile Menu */}
          <Offcanvas show={show} onHide={handleClose} placement="start">
            <Offcanvas.Header closeButton className="border-bottom">
              <Offcanvas.Title className="fw-bold">
                <span className="text-primary">Best</span>Rate
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Link
                  to="#home"
                  className="nav-link py-2"
                  onClick={handleClose}
                >
                  Home
                </Link>
                <Link
                  to="#about"
                  className="nav-link py-2"
                  onClick={handleClose}
                >
                  About
                </Link>
                <NavDropdown title="Shop" id="mobile-shop-dropdown">
                  <NavDropdown.Item href="#new-arrivals" onClick={handleClose}>
                    New Arrivals
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#best-sellers" onClick={handleClose}>
                    Best Sellers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#sale" onClick={handleClose}>
                    Sale
                  </NavDropdown.Item>
                </NavDropdown>
                <Link
                  to="#contact"
                  className="nav-link py-2"
                  onClick={handleClose}
                >
                  Contact
                </Link>
                <hr />
                <div className="mt-4">
                  <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="text-dark">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="text-dark">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-dark">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header5;
