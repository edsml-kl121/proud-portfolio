// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import {Container, Navbar, Nav, NavDropdown } from "react-bootstrap"

export default function Navbar2() {
  return (
    <Navbar expand="lg" sticky="top" className="bg-stone-900">
      <Container>
      {window.innerWidth > 600 ?
          <>
          <Navbar.Brand className="text-white mt-1" style={{fontWeight:"bold"}} href="/"><h4>KANDANAI LEENUTAPHONG</h4></Navbar.Brand> 
          </> : 
          <>
          <Navbar.Brand className="text-white mt-1" style={{fontWeight:"bold"}} href="/"><h5>KANDANAI LEENUTAPHONG</h5></Navbar.Brand>
          </>}
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#techstacks" className="text-white">Tech Stack</Nav.Link>
            <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
          </Nav>
            <NavDropdown title={<span className="text-white my-auto">Contact</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/kandanai/">Linkedin</NavDropdown.Item>
              <NavDropdown.Item href="mailto:mew.chayutaphong@gmail.com?subject=Me&body=Hello!">Email</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/edsml-kl121">Github</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://drive.google.com/file/d/12Civ_-RjXZqhHVlQ_Eo76V1e6ZnsIFmc/view?usp=sharing"> CV </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}