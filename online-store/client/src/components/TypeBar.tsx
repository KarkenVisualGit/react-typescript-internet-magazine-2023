import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { useUserContext } from "./AppRouter";
import { ITypes } from "../store/DeviceStore";

const TypeBar = observer(() => {
  const { device } = useUserContext();

  return (
    <ListGroup>
      {device.types.map((type: ITypes) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          active={type.id === device.selectedType?.id}
          onClick={() => device.setSelectedTypes(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
