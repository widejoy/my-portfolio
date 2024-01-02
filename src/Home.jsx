import React from "react";
import { Fade } from "react-reveal";
import Navbars from "./navbar";
import { Container, Row, Col, Placeholder } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Navbars />

      <Fade>
        <div className="about-me-section bg-dark text-light py-5" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
          <Container>
            <Row>
              <Col md={6} className="mb-4 text-center">
                <p aria-hidden="true">
                  <Placeholder xs={12} />
                </p>

                <p className="fs-3">
                  Welcome to my personal website! I am passionate about a Developer who wants his 
                  skills to make a difference in the community. I have worked on several projects of 
                  my own and in a team. I am a kind of person who loves to connect with new like-minded people
                  and learn new things.
                </p>

                <p aria-hidden="true">
                  <Placeholder xs={12} />
                </p>
              </Col>
              <Col md={6} className="d-flex align-items-center justify-content-center">
                <img
                  src="photo.jpg" 
                  alt="Profile"
                  className="img-fluid rounded-circle"
                  style={{ width: "400px", height: "400px" }} 
                />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="py-5"> {/* Additional padding to separate sections */}
          <h1 className="text-center mt-4">My Experiences</h1> 
          <br />
          <h2 className="text-center mt-4">Internship at Lieper books</h2>
        </div>
      </Fade>
    </div>
  );
}
