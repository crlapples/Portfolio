import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Skills.css";

const Skills = () => {
  
  return (
    <main className="mainContainer">
      <h1 className="title">Made in React</h1>
      <div className="contentContainer">
        <header className="logoContainer">
          <img className="logo" src="https://assets.onecompiler.app/42xjnjtme/438vttv6t/Gemini_Generated_Image_f55fiof55fiof55f%20(1).jpeg" />
        </header>
        <div className="titleContainer">
          <p className="titleDesc">crlapples' Skills</p>
        </div>
        <div className="navBarContainer">
          <ul className="navBar">
            <li className="home"><a href="/">Home</a></li>
            <li className="projects"><a href="/Projects">Projects</a></li>
            <li className="skills"><a href="/Skills">Skills</a></li>
            <li className="resume"><a href="/Resume">Resume</a></li>
            <li className="aboutMe"><a href="/AboutMe">About Me</a></li>
            <li className="contact"><a href="/Contact">Contact Me</a></li>
          </ul>
        </div>
        <div className="spacer" />
      </div>
    </main>
  );
};

export default Skills;