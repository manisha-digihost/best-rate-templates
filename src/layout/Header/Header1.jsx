import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header1 = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3">
          <span className="text-primary">Best</span> Rate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-2">About</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown" className="mx-2">
              <NavDropdown.Item href="#products">Products</NavDropdown.Item>
              <NavDropdown.Item href="#testimonials">Testimonials</NavDropdown.Item>
              <NavDropdown.Item href="#gallery">Gallery</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
          </Nav>
          <div className="d-flex">
            <button className="btn btn-primary rounded-pill px-4">Get Started</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header1;
