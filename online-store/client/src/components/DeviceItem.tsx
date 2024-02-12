import React, { FC } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import star from "../assets/star.png";
import { IDevices } from "../store/DeviceStore";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/const";

export type DeviceImageRating = Pick<
  IDevices,
  "img" | "rating" | "name" | "id"
>;

const DeviceItem: FC<{ device: DeviceImageRating }> = ({ device }) => {
  const navigate = useNavigate();
  return (
    <Col
      md={3}
      className={"mt-3"}
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image width={100} height={150} src={device.img} />
        <Card.Body className="p-2 mt-1">
          <Row className="text-black-50 d-flex align-items-center justify-content-around">
            <Col className="d-flex justify-content-start">
              <div>Apple</div>
            </Col>
            <Col className="d-flex justify-content-end align-items-center">
              <div>{device.rating}</div>
              <Image src={star} width={18} height={18} />
            </Col>
          </Row>
          <div>{device.name}</div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DeviceItem;
