import React from "react";
import { Slide } from "react-reveal";
import { Carousel, Card } from "react-bootstrap";

export default function ElegantCard({ images, txt, size }) {
  return (
    <Slide right>
      <div className="d-flex justify-content-center align-items-center">
        <div className="mr-3">
          <Carousel style={{ maxWidth: size + "px" }}>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 rounded"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <Card
          style={{ width: "40rem", backgroundColor: "#343a40", color: "#fff" }}
          className="border-0 shadow m-3"
        >
          <Card.Body>
            <Card.Text className="fs-3">{txt}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Slide>
  );
}
