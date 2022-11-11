
import React from "react";
import {Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { useState } from "react";

import './loading.css'

export default function loading(prop) {
  // const [styles, setStyles] = useState({});
  // const project = prop.project
  return (
    <>
    
      {window.innerWidth > 600 ?
        <>
        <div id="loading-wrapper">
          
          <div id="loading-text2">Loading ...</div>
          <div id="loading-content"></div>
        </div>
        </> : 
        <>
        <div id="loading-wrapper">
          <div id="loading-text">Loading ...</div>
          <div id="loading-content"></div>
        </div>
        </>}
    </>

  )
}