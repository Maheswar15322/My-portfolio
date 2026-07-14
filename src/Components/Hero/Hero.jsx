import React from "react";
import "./Hero.css";
import Profile from "../../assets/Profile.jpeg";


const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={Profile} alt="" />
      <h1>
        Hi, I'm <span>Maheswar Mandal</span>
        <br />
        Frontend Developer
      </h1>
      <p>
        I build modern, responsive and interactive web applications using React,
        JavaScript and modern UI technologies.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Contact with me</div>
        <div className="hero-resume">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
