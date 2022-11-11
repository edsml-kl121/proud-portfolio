// src/data.js
import Bathy from "./components/images/Bathy.png"
import Flood from "./components/images/flood.png"
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
    title: "Water Oracle",
    subtitle: "Mongo DB Atlas, express, React, Node.js, Heroku, Google earth engine (GEE), Google Cloud Platform (GCP), TensorFlow",
    description:
      "App to optimize water classification using Multiview deeplearning on U-Net in Google earth engine.",
    image: Flood,
    link: "https://geeimperial.herokuapp.com/",
  },
  {
  title: "RevED",
  subtitle: "React, Ruby on Rails, Heroku",
  description:
    "an educational startup with the aim to improve the educational experience of students, through giving a module recommendation and reviews.",
  image: Thank,
  link: "https://reved.herokuapp.com/",
  },
  {
    title: "BarcSnap",
    subtitle: "HTML, Barcode API, Ruby on Rails",
    description:
      "Collaborated with 3 developers to build an app to scan Japanese product's barcode to get information",
    image: Barcsnap,
    link: "https://github.com/2tonepantone/barcsnap",
  },
  {
    title: "Flood Prediction Tool",
    subtitle: "Jupyter, machine learning, pytest, github actions",
    description:
      "Producing a map to show and predict flood risks and house prices scoring distinction, collaborating with imperial students.",
    image: Flood,
    link: "https://github.com/edsml-kl121/FloodDetectionTool",
  },
  {
    title: "ThankyouChef",
    subtitle: "HTML, Mapbox API, Ruby on Rails, Heroku",
    description:
      "Created an app to enable hiring of personal chefs to your home",
    image: Thank,
    link: "https://thankyouchef.herokuapp.com/",
  },
  {
    title: "Personal Portfolio v1",
    subtitle: "Vanilla JS, html, css",
    description:
      "Previous portfolio made right after LeWagon bootcamp, trying to get a game-like feel",
    image: Thank,
    link: "https://kandanai.me",
  }
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