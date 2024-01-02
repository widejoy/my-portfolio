import React from "react";
import { Fade } from "react-awesome-reveal";
import Navbars from "./navbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import BasicCard from "./basiccard";
import ProjectCard from "./projectcard";

export default function Home() {
  return (
    <div>
      <Navbars />

      <div className="py-5 about-me-section bg-dark text-light">
        <Fade>
          <div style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
            <Container>
              <Row>
                <Col md={6} className="mb-4 text-center">
                  <p aria-hidden="true">
                    {/* Placeholder */}
                  </p>

                  <p className="fs-3">
                  TWelcome to my portfolio! I am a robust developer with a task to supply meaningful exchange to the community through Skills and hard work. During my journey, I have contributed to numerous projects each independently and as a part of dynamic agencies. Connecting with fascinated colleagues and increasing my abilties are continually motivating factors. Join me as we discover areas of innovation and collaboration!
                  </p>

                  <p aria-hidden="true">
                    {/* Placeholder */}
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

          <div>
            <h1 className="text-center mt-4">My Experiences</h1>
            <br />
            <h3 className="text-center mt-4">Internship at Lieper books</h3>
            <br />
            <BasicCard txt={"So when I had a decent grasp over flutter and firebase I wanted some industrial experience and that's when I met Abrar through a friend. He works as a CFO in a relatively new company that uses flutter, and I thought that was the perfect opportunity to learn more about flutter, to meet new amazing people, and get some industry experience."} images={["internship_certificate.png"]} size={500}></BasicCard>
            <br />
            <h3 className="text-center mt-4">NSS:UNIT-2 CUSAT Secretary</h3>
            <br />
            <BasicCard txt={"I had this opportunity in my college to become an NSS secretary. I did not think much about it because I only participated in small-scale NSS activities before. But I had no idea about the amazing activities I got to take part in. For example, we had to go to a small government playschool, buy some toys for them, clean the area, paint the walls, etc. It gave me a feeling like I'm giving back to the community."} images={["nss0.png", "nss1.jpg", "nss2.jpg", "nss4.jpg"]} size={500}></BasicCard>
            <br />
            <h3 className="text-center mt-4">Chess Club Captain</h3>
            <br />
            <BasicCard txt={"When the annual inter-college tournament came up, I got selected by our senior into the team. I was really tense and not really sure what to do, but we performed quite well. So when he graduated, he gave me the opportunity to be the new captain, which gave me new leadership and organizing skills. The position also taught me how to work in a team."} images={[]} size={500}></BasicCard>
          </div>
          <br /><br /><br /><br />
          <div>
            <h1 className="text-center mt-4">My Projects</h1>
            <br /><br /><br />
            <ProjectCard description={"Aazadi is an application where students can upload notes, question papers, and other useful material. They can access the materials uploaded by other people, creating a neat ecosystem for students. There is a vote system to keep scam posts away. You can also favorite some material you might want to use later and can also access the stuff you uploaded to edit them directly."} resources={"Flutter, Firebase"} title={"Aazadi"} link={"https://github.com/widejoy/my_college_guide"} hght={"45"}></ProjectCard>
            <br /><br />
            <ProjectCard title={"To-Do List"} link={"https://github.com/widejoy/to-do-react"} resources={"React, Firebase"} description={"A simple To-Do-List created using React where you can add some tasks you want to do. You will be able to edit, delete, and create new tasks. Authentication and storage are using Firestore."} hght={"30"}></ProjectCard>
            <br /><br />
            <ProjectCard title={"Face Recognition App"} link={"https://github.com/widejoy/face-recognition"} resources={"Python"} description={"An app made using Python Tkinter which can detect the number of faces in an image and compare it with a different image and show if it's the same image."} hght={"27"}></ProjectCard>
            <br /><br />
            <ProjectCard title={"Video Game Library App"} link={"https://github.com/widejoy/my_video_game_list"} resources={"Flutter, Rest API"} description={"An app that contains information about a ton of latest games and their current price from Steam, Epic Games, and GOG Games at the same time. So you can use this one platform and get most of the details you want out of the game like genre, plot, platforms, etc."} hght={"36"}></ProjectCard>
          </div>
        </Fade>
      </div>
    </div>
  );
}
