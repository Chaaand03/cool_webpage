//i need to ad an about section with my image and a brief description of myself. Here's a simple example of an About component using React:

import React from "react";
import "./about.css";
import Sheep from "../assets/sheep.jpeg";
import Dance from "../assets/dance.jpeg";
import Music from "../assets/music.jpeg";
import Trek from "../assets/trek.jpeg";
import Gym from "../assets/gym.jpeg";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-section">
        <div className="about-left">
          <img src={Sheep} alt="Chan" className="about-image" />
        </div>

        <div className="about-right">
          <h2 className="about-title">About Me</h2>

          <p className="about-description">
            Hello! I'm Chandana, a passionate web developer with a love for
            creating beautiful and functional websites. I have experience in
            HTML, CSS, JavaScript, and React.
          </p>

          <p className="about-description">
            Feel free to reach out to me for collaboration or just to say hi!
          </p>
        </div>
      </div>

      <div className="interests-section">
        <h2 className="about-more">A little more about me...</h2>
        <p className="about-description">
          So, these are the things I love doing with the remaining time I have
          after work and studying. <br /> I love to dance, listen to music, trek
          and go to the gym.
        </p>
        <br />
        <br />

        <div className="interests-block">
          <div className="interest">
            <img src={Dance} alt="Dance" className="interest-image" />
            <h3 className="interest-title">Dance</h3>
          </div>

          <div className="interest">
            <img src={Music} alt="Music" className="interest-image" />
            <h3 className="interest-title">Music</h3>
          </div>

          <div className="interest">
            <img src={Trek} alt="Trekking" className="interest-image" />
            <h3 className="interest-title">Trekking</h3>
          </div>

          <div className="interest">
            <img src={Gym} alt="Gym" className="interest-image" />
            <h3 className="interest-title">Gym & Fitness</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
