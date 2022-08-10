// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
// import React from "react";
import React, { useState } from "react";
import { projects } from "../data";
import { Container, Row, Col } from 'react-bootstrap';
import Card from "./Card"
import Fade from 'react-reveal/Fade';

export default function Projects() {
  // const [styles, setStyles] = useState({});
  // console.log(styles);
  return (
    
    <section id="projects" className="text-gray-400 body-font" style={{backgroundColor:"#000000"}}>
    <Fade>
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Most recent things I have done.
          </p>
        </div>
        <Container className="px-5" style={{}}>
          <Row>
          {projects.map((project) => (
            <>
            <Col xs={12} md={4}>
              <Card project={project}/>
            </Col>
              </>
          ))}
          </Row>
        </Container>
      </div>
    </Fade>
    </section>
  );
}