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
  const scrollToContact = () => {
    scroll.scrollTo(5600, {
      smooth: true,
    });
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>About Me</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
          <Nav.Link href="ROGER_RESUME.pdf" download>
              Resume
            </Nav.Link>

            <Nav.Link onClick={scrollToExperiences}>Experience</Nav.Link>
            <Nav.Link onClick={scrollToProjects}>Projects</Nav.Link>
            <Nav.Link onClick={scrollToContact}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
