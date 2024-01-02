import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Slide } from 'react-awesome-reveal';

export default function ProjectCard({ resources, title, description, hght, link }) {
  return (
    <Slide>
      <div className="d-flex justify-content-center align-items-center">
        <Card style={{ backgroundColor: "#343a40", color: "#ffffff", width: "40rem", height: hght + "rem", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0,0,0,0.3)" }}>
          <Card.Header className="text-center" style={{ fontSize: "1.8rem", backgroundColor: "#9BC0D9", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}>
            {resources}
          </Card.Header>
          <Card.Body>
            <Card.Title className="text-center" style={{ fontSize: "3rem" }}>
              {title}
            </Card.Title>
            <Card.Text className="text-center" style={{ fontSize: "2rem" }}>
              {description}
            </Card.Text>
            <Button variant="outline-light" className="mt-3" href={link} target="_blank" rel="noopener noreferrer">
              View on Github
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Slide>
  );
}
