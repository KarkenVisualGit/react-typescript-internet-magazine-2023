import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/const";
import { NavLink, useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(location);
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Enter email..." />
          <Form.Control className="mt-3" placeholder="Enter password..." />
          <Row className="mt-3">
            {isLogin ? (
              <Col className="d-flex justify-content-start m-auto">
                Don't have account?
                <NavLink className="m-auto" to={REGISTRATION_ROUTE}>
                  Register
                </NavLink>
              </Col>
            ) : (
              <Col className="d-flex justify-content-start m-auto">
                Have an account?
                <NavLink className="m-auto" to={LOGIN_ROUTE}>
                  Enter
                </NavLink>
              </Col>
            )}
            <Col className="d-flex justify-content-end">
              <Button variant={"outline-success"}>
                {isLogin ? "Enter" : "Registration"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
