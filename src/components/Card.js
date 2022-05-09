
import React from "react";
import Bathy from "./images/Bathy.png"
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import {Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { useState } from "react";

export default function Card(prop) {
  const [styles, setStyles] = useState({});
  const project = prop.project
  return (
    <div id={project.image} className="bg-stone-1000 px-2 py-3 my-2 mx-0" style = {styles} onMouseEnter={() => setStyles({border: '1px solid green', borderRadius: "10px"})}  onMouseLeave={() => setStyles({border: 'none'})}>
      <a
      href={project.link}
      key={project.image}
      className="text-decoration-none">
        <h5 class ="text-success"> {project.title} </h5>
        <div className="">
          <p class="text-white"> {project.description} </p>
        </div>
        <p class ="text-stone-500">{project.subtitle}</p>
      </a>
    </div>
    // <p>d</p>
  )
}