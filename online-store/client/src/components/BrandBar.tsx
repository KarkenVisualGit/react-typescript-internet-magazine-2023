import { observer } from "mobx-react-lite";
import React from "react";
import { Row } from "react-bootstrap";
import { useUserContext } from "./AppRouter";

const BrandBar = observer(() => {
  const { device } = useUserContext();
  return <Row></Row>;
});

export default BrandBar;
