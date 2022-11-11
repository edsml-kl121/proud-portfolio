// src/components/Skills.js

import { ChipIcon, Python } from "@heroicons/react/solid";
import React from "react";
import { FaPython } from 'react-icons/fa';
import { skills } from "../data";
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

export default function Skills() {
  return (
    <section id="techstacks">
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed mx-auto">
            Some of the tech stacks I have used.
          </p>
        </div>
        <Fade left cascade>
          <div className="container">
            <Row>
            {skills.map((skill) => (
              <Col xs={6} md={2}>
                {window.innerWidth > 600 ?
                  <>
              <div key={skill.name} className="p-5">
                <img
                    alt="gallery"
                    width = "150"
                    src={skill.image}
                    />
              </div>
                  </> : 
                  <>
              <div key={skill.name} className="p-3">
                <img
                    alt="gallery"
                    width = "150"
                    src={skill.image}
                    />
              </div>                  
                  </>}

            </Col>
            ))}
            </Row>
          </div>
        </Fade>
        {/* </div> */}
      </div>
    </section>
  );
}