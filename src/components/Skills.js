// src/components/Skills.js

import { ChipIcon, Python } from "@heroicons/react/solid";
import React from "react";
import { FaPython } from 'react-icons/fa';
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Some of the tech stacks I have used.
          </p>
        </div>
        <div className="container">
          <div className = "flex flex-wrap">
          {skills.map((skill) => (
            <div key={skill.name} className="ml-2 p-6">
              {/* <FaPython className="text-green-600 h-20" /> */}
              <img
                  alt="gallery"
                  width = "90"
                  src={skill.image}
                />
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}