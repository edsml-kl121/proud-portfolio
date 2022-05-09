// src/components/Contact.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
export default function Contact() {


  return (
    <section id="contact" className="relative">
        <footer>
          <Container className="px-5 text-center">
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
              {/* </Col> */}
            {/* </Row> */}
            <br></br>
            <p className="mb-2">Kandanai (Mew) Leenutaphong @2022</p>
          </Container>
        </footer>
    </section>
  );
}