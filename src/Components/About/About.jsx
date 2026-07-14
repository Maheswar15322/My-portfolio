import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile from "../../assets/profile.jpeg";
import download from "../../assets/download.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <h1>Objective</h1>
            <p>
              I am a Frontend Developer with a growing interest in Artificial
              Intelligence and AI-powered web applications. I build responsive
              and interactive user interfaces using React.js, JavaScript, HTML,
              and CSS, and I am expanding my skills in Python, AI APIs, and
              prompt engineering to develop intelligent web solutions.
            </p>
            <div className="education">
              <h1>Education</h1>
              <div className="education1">
                <img src={download} alt="" />
                <p>Master of Computer Applications (MCA)</p>
                <p>Asansol Engineering Collage</p>
                <p className="year">2024-2026</p>
              </div>
              <div className="education1">
                <img src={download} alt="" />
                <p>Bachelor of Computer Applications (BCA)</p>
                <span> Bankura Unnayani Institute of Engineering, Bankura</span>
                <p className="year">2021-2024</p>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <h1>My Skills</h1>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>REACT.JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>NODE.JS</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
