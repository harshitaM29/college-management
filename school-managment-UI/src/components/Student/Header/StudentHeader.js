import React, { Fragment } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { authActions } from "../../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const StudentHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(authActions.logout());

    history.replace("/");
    window.location.reload();
  };
  return (
    <Fragment>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand>Student Dashboard</Navbar.Brand>
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
              <NavDropdown title="Academics">
                <NavDropdown.Item>
                  <NavLink
                    to="/sample"
                    style={{ textDecoration: "none", color: "#DEE2E6" }}
                  >
                    Academic Calendar
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/sample"
                    style={{ textDecoration: "none", color: "#DEE2E6" }}
                  >
                    Syllabus
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/sample"
                    style={{ textDecoration: "none", color: "#DEE2E6" }}
                  >
                    Results and Grades
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Events">
                <NavDropdown.Item>
                  <NavLink
                    to="/sample"
                    style={{ textDecoration: "none", color: "#DEE2E6" }}
                  >
                    Event Calendar
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/sample"
                    style={{ textDecoration: "none", color: "#DEE2E6" }}
                  >
                    Event Registration
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/sample"
                    style={{ textDecoration: "none", color: "#DEE2E6" }}
                  >
                    Event Galleries
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <NavLink
                  to="/sample"
                  style={{ textDecoration: "none", color: "#DEE2E6" }}
                >
                  News
                </NavLink>
              </Nav.Link>
              <NavDropdown title="Library">
                <NavDropdown.Item>
                  <NavLink
                    to="/sample"
                    style={{ textDecoration: "none", color: "#DEE2E6" }}
                  >
                    Library Catalog
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/sample"
                    style={{ textDecoration: "none", color: "#DEE2E6" }}
                  >
                    Digital Library
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/sample"
                    style={{ textDecoration: "none", color: "#DEE2E6" }}
                  >
                    Library Services
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Career Services">
                <NavDropdown.Item>
                  <NavLink
                    to="/sample"
                    style={{ textDecoration: "none", color: "#DEE2E6" }}
                  >
                    Job Board
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/sample"
                    style={{ textDecoration: "none", color: "#DEE2E6" }}
                  >
                    Career Counselling
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/sample"
                    style={{ textDecoration: "none", color: "#DEE2E6" }}
                  >
                    Employer Engagement
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              <Button
                onClick={handleLogout}
                style={{
                  marginLeft: "35rem",
                  backgroundColor: "teal",
                  border: "1px solid teal",
                }}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default StudentHeader;
