import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Workexp from "./components/Workexp";
import './App.css';

export default function App() {
  return (
    <main className="text-gray-400 body-font font-link" style={{backgroundColor:"#000000"}}>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      {/* <Workexp /> */}
      <Contact />
    </main>
  );
}