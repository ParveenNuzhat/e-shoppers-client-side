import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import useAuth from "../../Hook/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  console.log(user?.email)
  console.log(user?.displayName)


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="header">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="header-text" to="/home">
              Home
            </NavLink>
            <NavLink className="header-text" to="/shop">
              Shop
            </NavLink>
            <NavLink className="header-text" to="/customer">
              Customer Care
            </NavLink>
            <NavLink className="header-text" to="/register">
              Register
            </NavLink>

            {user?.email && (
              <NavLink className="header-text" to="/dashboard">
                Dashboard
              </NavLink>
            )}
            {user?.email ? (
              <Button onClick={logOut} className="menu-button ms-2">
                Log out
              </Button>
            ) : (
              <NavLink className="header-text" to="/login">
                Login
              </NavLink>

            )}
            {user?.email && (
              <Navbar.Brand to="/home" className="header-text text-danger ps-3">
                {user.displayName}{" "}
              </Navbar.Brand>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
