import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Navbars() {
  const scrollToExperiences = () => {
    scroll.scrollTo(800, {
      smooth: true,
    });
  };
  const scrollToProjects = () => {
    scroll.scrollTo(2900, {
      smooth: true,
    });
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>About Me</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link onClick={scrollToExperiences}>Experience</Nav.Link>
            <Nav.Link onClick={scrollToProjects}>Projects</Nav.Link>
            <Nav.Link eventKey={2} href="#Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
