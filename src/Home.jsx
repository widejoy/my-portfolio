import React from "react";
import { Fade} from "react-reveal";
import Navbars from "./navbar";
import { Container, Row, Col, Placeholder } from "react-bootstrap";
import BasicCard from "./basiccard";

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

        <div className="py-5 about-me-section bg-dark text-light"> 
          <h1 className="text-center mt-4">My Experiences</h1> 
          <br />
          <h2 className="text-center mt-4">Internship at Lieper books</h2>
          <br />
          <BasicCard txt={"So when I had a decent grasp over flutter and firebase i wanted some industrial expirience and thats when i met abrar through a friend he works as a CFO in a relatively new company which uses flutter and I thought that was the perfect oppurtunity to learn more about flutter,to meet new amazing people and get some industry expirience"} images={["internship_certificate.png"]} size={500}></BasicCard>
          <br />
          <h2 className="text-center mt-4">NSS:UNIT-2 CUSAT Secretary</h2>
          <br />
          <BasicCard txt={"I had this oppurtinity in my college to become an nss secretary I did not think much about it becaause I only patricipated in small scale nss activities before but i had no idea about the amazing activities I got to take part in for example We had to go to a small goverment playschool and buy some toys for them,Clean the area,paint the walls ect,It gave me a feeling like im giving back to the communtity"} images={["nss0.png","nss1.jpg","nss2.jpg","nss4.jpg"]} size={500}></BasicCard>
          <br />
          <h2 className="text-center mt-4">Chess Club Captain</h2>
          <br />
          <BasicCard txt={"When the anual inter-college tournament came up I got selected by our senior into the team i was really tensed and not really sure what to do but we performed quite well so when he graduated he gave me the oppurtunity to be the new captain which gave me new leadership and organising skills ,The position also thought me how to work in a team"} images={[]} size={500}></BasicCard>  
        </div>
      </Fade>
    </div>
  );
}
