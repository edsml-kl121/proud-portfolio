// src/components/About.js

import React from "react";
import Bathy from "./images/Bathy.png"
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import {Container, Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap"

export default function About() {
  return (
    <section id="about">
      <Container>
      <Row className="my-5">
        <Col xs={12} md={5} className="mt-5 my-5 mx-5 mb-5">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src= {Bathy}
            />
        </Col>
        <Col xs={12} md={5}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="mt-5 text-success mx-1" style={{fontWeight:"700", fontSize:"100px"}}>
              Kandanai
          </h1>
            <h2 className="text-white">
              A Software Engineer / Data Scientist
            </h2>
          <p className="text-left">
            I have graduated with a bachelor in mathematics at Warwick, then became interested in coding and went to 
            a coding bootcamp at Lewagon followed by a Masters in Environmental Data Science and Machine Learning
          </p>
          <div className="flex justify-center mb-5">
            <a
              href="mailto:mew.chayutaphong@gmail.com?subject=Me&body=Hello!"
              className="inline-flex text-gray-400 border-0 py-5 px-10 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg" style={{backgroundColor:"#000000"}}>
              <FaEnvelope/>
            </a>
            <a
              href="https://www.linkedin.com/in/kandanai/"
              className="ml-4 inline-flex text-gray-400 border-0 py-5 px-10 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg" style={{backgroundColor:"#000000"}}>
              <FaLinkedin/>
            </a>
            <a
              href="https://github.com/edsml-kl121"
              className="ml-4 inline-flex text-gray-400 border-0 py-5 px-10 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg" style={{backgroundColor:"#000000"}}>
              <FaGithub/>
            </a>
            <a
              href="https://drive.google.com/file/d/1uK07ILbwUuBQSRf1VURqV8ljrHFawYpn/view?usp=sharing"
              className="ml-4 inline-flex text-gray-400 border-0 py-10 px-10 text-decoration-none focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg" style={{backgroundColor:"#000000"}}>
              CV
            </a>
          </div>
          <br></br>
      </Col>
      </Row>
      </Container>
    </section>
  );
}
