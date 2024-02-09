import { observer } from "mobx-react-lite";
import React from "react";
import { Card, Row } from "react-bootstrap";
import { useUserContext } from "./AppRouter";
import { IBrands } from "../store/DeviceStore";

const BrandBar = observer(() => {
  const { device } = useUserContext();
  return (
    <Row className="d-flex">
      {device.brands.map((brand: IBrands) => (
        <Card
          style={{ cursor: "pointer", width: "auto" }}
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand?.id ? "danger" : "light"}
          key={brand.id}
          className="pe-4"
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
