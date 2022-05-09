// src/components/About.js

import React from "react";
import Bathy from "./images/Bathy.png"
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import {Container, Navbar, Nav, NavDropdown } from "react-bootstrap"

export default function About() {
  return (
    <section id="about">
      <Container>
      <div className="mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="text-left mb-4 text-white">
            Hi, I'm Kandanai.
            <br className="inline-block" /> A Software Engineer / Data Scientist
          </h2>
          <p className="text-left mb-8 leading-relaxed">
            I have graduated with a bachelor in mathematics at Warwick, then became interested in coding and went to 
            a coding bootcamp at Lewagon followed by a Masters in Environmental Data Science and Machine Learning
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-gray-400 bg-stone-900 border-0 py-5 px-10 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <FaEnvelope/>
            </a>
            <a
              href="https://www.linkedin.com/in/kandanai/"
              className="ml-4 inline-flex text-gray-400 bg-stone-900 border-0 py-5 px-10 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <FaLinkedin/>
            </a>
            <a
              href="https://github.com/edsml-kl121"
              className="ml-4 inline-flex text-gray-400 bg-stone-900 border-0 py-5 px-10 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <FaGithub/>
            </a>
            <a
              href="https://drive.google.com/file/d/1uK07ILbwUuBQSRf1VURqV8ljrHFawYpn/view?usp=sharing"
              className="ml-4 inline-flex text-gray-400 bg-stone-900 border-0 py-10 px-10 text-decoration-none focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              CV
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src= {Bathy}
            />
        </div>
      </div>
      </Container>
    </section>
  );
}
