
import React from "react";
import Bathy from "./images/Bathy.png"
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import {Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { useState } from "react";

export default function Card(prop) {
  const [styles, setStyles] = useState({});
  const project = prop.project
  return (
    <div id={project.image} className="bg-dark p-5 m-2" style = {styles} onMouseEnter={() => setStyles({border: '1px solid green', borderRadius: "10px"})}  onMouseLeave={() => setStyles({border: 'none'})}>
      <a
      href={project.link}
      key={project.image}
      className="text-decoration-none">
        <h2 class ="text-success"> {project.title} </h2>
        <div className="">
          <p class="text-white"> {project.description} </p>
        </div>
      </a>
    </div>
    // <p>d</p>
  )
}