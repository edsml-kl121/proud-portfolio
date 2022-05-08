// src/data.js
import Bathy from "./components/images/Bathy.png"
import Thank from "./components/images/thankq.png"
import Barcsnap from "./components/images/barcs.png"
import Python from "./components/images/python96.png"
import React from "./components/images/react80.png"
import Html from "./components/images/html96.png"
import Rails from "./components/images/rails96.png"
import Node from "./components/images/node96.png"
import Css from "./components/images/css96.png"
import Tensor from "./components/images/tensorflow300.png"
import Github from "./components/images/github128.png"
import Heroku from "./components/images/heroku.png"
import R from "./components/images/R.png"
import Mongo from "./components/images/mongo.png"
import Docker from "./components/images/docker.png"

export const projects = [
  {
    title: "Google Earth and Sustainable Development Goals",
    subtitle: "react, node.js, MongoDB atlas, Heroku, Google earth engine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: Bathy,
    link: "https://reactbootcamp.com",
  },
  {
    title: "Flood Prediction Tool",
    subtitle: "Jupyter, machine learning, Folium, pytest, github actions, sphinx",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: Bathy,
    link: "https://pythonbootcamp.com",
  },
  {
    title: "BarcSnap",
    subtitle: "HTML, Barcode API, Ruby on Rails",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: Barcsnap,
    link: "https://www.barcsnap.com/",
  },
  {
    title: "ThankyouChef",
    subtitle: "HTML, Mapbox API, Ruby on Rails, Heroku",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: Thank,
    link: "https://thankyouchef.herokuapp.com/",
  },
];

export const skills = [
  {
    name: "python",
    image: Python
  },
  {
    name: "docker",
    color:"blue",
    image: Docker
  },
  {
    name: "R",
    color:"blue",
    image: R
  },
  {
    name: "html",
    image: Html
  },
  {
    name: "css",
    image: Css
  }, 
  {
    name: "React",
    image: React
  },
  {
    name: "Node.js",
    image: Node
  },
  {
    name: "Ruby on Rails",
    image: Rails
  },
  {
    name: "Tensorflow",
    image: Tensor
  },
  {
    name: "github",
    image: Github
  },
  {
    name: "Heroku",
    color:"blue",
    image: Heroku
  },
  {
    name: "MongoDB",
    color:"blue",
    image: Mongo
  },
]

export const testimonials = [
  {
    quote : "He is the best developer in the world",
    image : Bathy,
    name: "Mew",
    company: "udemy"
  },
  {
    quote : "He is the best developer in the world",
    image : Bathy,
    name: "Mew",
    company: "udemy"
  },
  {
    quote : "He is the best developer in the world",
    image : Bathy,
    name: "Mew",
    company: "udemy"
  },
  {
    quote : "He is the best developer in the world",
    image : Bathy,
    name: "Mew",
    company: "udemy"
  }
]