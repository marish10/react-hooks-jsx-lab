// src/components/About.js
import React from "react";
import { image } from "../user";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a web developer passionate about React!</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
