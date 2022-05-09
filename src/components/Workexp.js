// src/components/Testimonials

import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";
import { Container, Row, Col } from 'react-bootstrap';

export default function Workexp() {
  return (
    <section id="workexp">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Work Experience
        </h1>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <p>
                Place 1
              </p>
              <br></br>
              <p>
                Place 1
              </p>
            </Col>
            <Col xs={12} md={8}>2 of 2</Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}