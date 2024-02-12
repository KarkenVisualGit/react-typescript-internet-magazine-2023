import React from "react";
import { Button, Container } from "react-bootstrap";

const Admin = () => {
  return (
    <Container className="d-flex flex-column">
      <Button>Add type</Button>
      <Button>Add brand</Button>
      <Button>Add device</Button>
    </Container>
  );
};

export default Admin;
