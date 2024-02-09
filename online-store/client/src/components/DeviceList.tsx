import { observer } from "mobx-react-lite";
import React from "react";
import { useUserContext } from "./AppRouter";
import { ListGroup, Row } from "react-bootstrap";
import { IDevices } from "../store/DeviceStore";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useUserContext();
  return (
    <Row className="d-flex ">
      {device.devices.map((device: IDevices) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
});

export default DeviceList;
