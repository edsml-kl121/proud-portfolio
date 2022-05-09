// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import {Container, Navbar, Nav, NavDropdown } from "react-bootstrap"

export default function Navbar2() {
  return (
    <Navbar bg="success" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">Kandanai Leenutaphong</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#workexp">Work Experience</Nav.Link>
          </Nav>
            <NavDropdown title={<span className="text-dark my-auto">Dropdown</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}