import React from "react";
import { useUserContext } from "./AppRouter";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/const";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          Buy a device
        </NavLink>
        {user.isAuth ? (
          <Nav className="ms-auto" style={{ color: "white" }}>
            <Button
              onClick={() => navigate(ADMIN_ROUTE)}
              variant={"outline-light"}
            >
              Admin panel
            </Button>
            <Button
              onClick={() => navigate(LOGIN_ROUTE)}
              variant={"outline-light"}
              className="ms-2"
            >
              Exit
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => user.setisAuth(true)}
            >
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
