// src/components/About.js

import React from "react";
// import Bathy from "./images/Bathy.png"
import Mew from "./images/Mew.png"
// import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import {Container, Row, Col } from "react-bootstrap"
// import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { useState } from "react";
import './About.css'


export default function About() {
  const [styles, setStyles] = useState({fontWeight:"400", fontSize:"30px"});
  return (
    <section id="about">
      <Fade>
      <Container>
      <Row className="my-5">
        <Col xs={12} md={5} className="">
        {window.innerWidth > 600 ?
          <>
          <br></br>
          <br></br>
          <br></br> 
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src= {Mew}
            />
          </> : 
          <>
          <span className="">
          <img
            className="rounded-circle"
            alt="hero"
            src= {Mew}
            style={{textAlign: "center"}}
            // width="300"
            />
          </span>
          </>}

        </Col>
        <Col md={1}>
        </Col>
        <Col xs={12} md={5}>
        {window.innerWidth > 600 ?
          <>
          <br></br>
          <br></br>
          <br></br> 
          </> : <></>}
          
          {window.innerWidth > 600 ?
          <>
          <h1 className="mt-5 text-success" style={{textAlign: "center", fontWeight:"700", fontSize:"80px"}}>
              Kandanai
          </h1>
          </> : 
          <h2 className="mt-5 text-success" style={{textAlign: "center", fontWeight:"700", fontSize:"80px"}}>
              Kandanai
          </h2>
          }

            <h2 className="text-white text-center">
              A Software Engineer / Data Scientist
            </h2>
          <p className="text-center">
            I have graduated with a bachelor in <span className="text-success">mathematics at Warwick </span>, then became interested in coding and went to 
            a <span className="text-success">coding bootcamp at Lewagon</span> followed by a Masters in <span className="text-success">Environmental Data Science and Machine Learning at Imperial. </span>
             I have a strong interest in bringing positive impact to Thailand with technology such as Environmental and educational aspects through startups
          </p>
          <div className="text-center">
            {/* <div className="text-center bg-stone-1000 py-1 my-2 mx-0" style = {styles} onMouseEnter={() => setStyles({border: '1px solid green', borderRadius: "10px"})}  onMouseLeave={() => setStyles({border: 'none'})}> */}
              <a
                href="mailto:mew.chayutaphong@gmail.com?subject=Me&body=Hello!"
                className="text-decoration-none text-success text-center bg-stone-1000 py-2 my-2 mx-0 px-3"
                // className="text-decoration-none text-success" 
                onMouseEnter={() => setStyles({border: '1px solid green', borderRadius: "10px", fontWeight:"400", fontSize:"30px"})}
                onMouseLeave={() => setStyles({border: 'none', fontWeight:"400", fontSize:"30px"})}
                style = {styles} 
                // style={{fontWeight:"400", fontSize:"30px"}} 
                >
                Contact me !
              </a>
            {/* </div> */}
          </div>
          <br></br>
      </Col>
      </Row>
      </Container>
      </Fade>
    </section>
  );
}
