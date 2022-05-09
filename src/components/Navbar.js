// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import {Container, Navbar, Nav, NavDropdown } from "react-bootstrap"

export default function Navbar2() {
  return (
    <Navbar expand="lg" sticky="top" className="bg-stone-900">
      <Container>
        <Navbar.Brand className="text-white" style={{fontWeight:"bold"}} href="/"><h3>KANDANAI LEENUTAPHONG</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
            <Nav.Link href="#workexp" className="text-white">Work Experience</Nav.Link>
          </Nav>
            <NavDropdown title={<span className="text-white my-auto">Contact</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/kandanai/">Linkedin</NavDropdown.Item>
              <NavDropdown.Item href="mailto:mew.chayutaphong@gmail.com?subject=Me&body=Hello!">Email</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/edsml-kl121">Github</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}