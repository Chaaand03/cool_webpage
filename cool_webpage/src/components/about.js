//i need to ad an about section with my image and a brief description of myself. Here's a simple example of an About component using React:

import React from "react";
import "./about.css";
import Sheep from "../assets/sheep.jpeg";

export default function About() {
  return (
    <div className="about-section">
      <div className="about-left">
        <img src={Sheep} alt="Chan" className="about-image" />
      </div>
      <div className="about-right">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          Hello! I'm Chandana, a passionate web developer with a love for
          creating beautiful and functional websites. I have experience in HTML,
          CSS, JavaScript, and React. In my free time, I enjoy learning new
          technologies and improving my skills.
        </p>
        <p className="about-description">
          Feel free to reach out to me for collaboration or just to say hi!
        </p>
      </div>
    </div>
  );
}
