import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Phone from "./components/Phone";
import Loading from "./components/loading";
import './App.css';
import { useState, useEffect, useRef } from "react";

export default function App() {
  // let isMobile = useRef(false);
  const [loading, setLoading] = useState(true);
//   const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
//     if(window.innerWidth > 600) {
//       if(isMobile.current) {
//         isMobile.current = false;
//         setMobile(false);
//       }
//     } 
//     else {
//       if(!isMobile.current) {
//         isMobile.current = true;
//         setMobile(true)
//       }
//     }
}, [])

//   if (isMobile.current) {
//     return (
//       <>
//       {/* {loading === false ? 
//       <Phone/> : <Loading/>
//       } */}
//       <Phone/> 
//       </>
//     )
//   }
//   else {
    return (
      <>
      {loading === false ? 
      <main className="text-gray-400 body-font font-link" style={{backgroundColor:"#000000"}}>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
      : <Loading/>}
      </>
  )
  // }
}