import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/Star_big.png";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "Iphone 12 pro",
    price: 25000,
    rating: 5,
    // img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/IPhone_5.png",
    img: "https://fmobile.kz/_next/image?url=https%3A%2F%2Fapi.fmobile.kz%2Fimage%2F%2Fmedia%2Fsale%2Fimage%2F228626_2%202023-01-09_11-48-26.057780%20fa32c0d3c91cbe22076746cb.jpg&w=640&q=100",
  };
  const description = [
    { id: 1, title: "Random Access Memory", description: "6 Gb" },
    { id: 2, title: "Camera", description: "12 Mp" },
    { id: 3, title: "Processor", description: "A14 Bionic" },
    { id: 4, title: "Number of cors", description: "6" },
    { id: 5, title: "Accum", description: "4000 mAh" },
  ];
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={400} height={350} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 className="text-center">{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 60,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>From: {device.price} rub</h3>
            <Button variant={"outline-dark"}>Add to cart</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Characteristics</h1>
        {description.map((info, index: number) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: "10",
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
