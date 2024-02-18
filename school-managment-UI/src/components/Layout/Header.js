import React, { Fragment } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">ABC College</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Admission">
                <NavDropdown.Item>
                  <NavLink
                    to="/procedure"
                    style={{ textDecoration: "none", color: "#DEE2E6" }}
                  >
                    Admission Procedure
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/form"
                    style={{ textDecoration: "none", color: "#DEE2E6" }}
                  >
                    Online Application
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/notice"
                    style={{ textDecoration: "none", color: "#DEE2E6" }}
                  >
                    Admission Notices
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Events</Nav.Link>
              <Nav.Link href="#link">News</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
              <Navbar.Text style={{ marginLeft: "50rem" }}>
                <NavLink
                  to="/student/login"
                  style={{ textDecoration: "none", color: "#DEE2E6" }}
                >
                  Login
                </NavLink>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
