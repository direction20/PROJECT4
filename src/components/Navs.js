import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { NavLink } from "react-router-dom";
import { Nav, NavDropdown, Navbar,Container } from "react-bootstrap";

function Navs() {
  return (
    <>
      <Navbar 
      className="navbar font-weight-bold text-monospace 
      shadow shadow-dark shadow-intensity-lg" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">HOME</Nav.Link>
              <Nav.Link as={NavLink} to="/pages/Forms" >FORM-PREDICTION</Nav.Link>
              <Nav.Link as={NavLink} to="/pages/Information" >INFORMATION</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown className="Text-white" eventKey={2}  title="USERNAME" id="collasible-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/pages/Account">
                  Account
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/pages/Signin">
                  Log-Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navs;