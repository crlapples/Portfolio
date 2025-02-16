import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Skills.css";

const Skills: React.FC = () => {

  return (
    <main className="mainContainer">
      <div className="options">
        <h2 className="title">Made in React</h2>
      </div>
      <div className="contentContainer">
        <div className="logoContainer">
          <img className="logo" src="https://assets.onecompiler.app/42xjnjtme/438vttv6t/Gemini_Generated_Image_f55fiof55fiof55f%20(1).jpeg" />
        </div>
        <div className="navBarContainer">
          <ul className="navBar">
            <li className="home"><Link to="/">Home</Link></li>
            <li className="projects"><Link to="/Projects">Projects</Link></li>
            <li className="skills"><Link to="/Skills">Skills</Link></li>
            <li className="resume"><Link to="/Resume">Resume</Link></li>
            <li className="testimonials"><Link to="/Testimonials">Reviews</Link></li>
            <li className="aboutMe"><Link to="/AboutMe">About Me</Link></li>
            <li className="contact"><Link to="/Contact">Contact Me</Link></li>
            <li className="order"><Link to="/Order">Order Now</Link></li>
          </ul>
        </div>
        <header className="titleContainer">
          <h1 className="titleDesc">crlapples' Projects</h1>
        </header>
        <div classMame="skillsContainer">
          <div className="technicalSkillsContainer">
            <div className="skillsCategory">
              <p>Technical Skills</p>
            </div>
            <div className="skillsListContainer">
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/43988jq5w/html-icon.png" />
                <label className="skillName">HTML5</label>
              </div>
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/43988jq5w/css-icon.png" />
                <label className="skillName">CSS3</label>
              </div>
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/43988jq5w/javascript-programming-language-icon.png" />
                <label className="skillName">JavaScript</label>
              </div>
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/43988jq5w/react-js-icon.png" />
                <label className="skillName">React.js</label>
              </div>
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/43988jq5w/typescript-programming-language-icon.png" />
                <label className="skillName">TypeScript</label>
              </div>
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/43988jq5w/node-js-icon.png" />
                <label className="skillName">Node.js</label>
              </div>
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/4399n8sed/sql-database-generic.380x512.png" />
                <label className="skillName sql">SQL</label>
              </div>
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/43988jq5w/java-programming-language-icon.png" />
                <label className="skillName">Java</label>
              </div>
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/43988jq5w/file-xml-color-green-icon.png" />
                <label className="skillName">XML</label>
              </div>
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/43988jq5w/godot-game-engine-icon.png" />
                <label className="skillName">Godot Engine</label>
              </div>
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/43988jq5w/godot-game-engine-icon.png" />
                <label className="skillName">GDScript</label>
              </div>
            </div>
          </div>
          <div className="softSkillsContainer">
            <div className="skillsCategory">
              <p>Soft Skills</p>
            </div>
            <div className="skillsListContainer">
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/4399n8sed/business-communication-icon.png" />
                <label className="skillName">Teamwork</label>
              </div>
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/4399n8sed/opportunity-icon.png" />
                <label className="skillName">Flexibility</label>
              </div>
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/4399n8sed/compression-icon.png" />
                <label className="skillName">Resilience</label>
              </div>
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/4399n8sed/clock-line-icon.png" />
                <label className="skillName">Time Management</label>
              </div>
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/4399n8sed/scale-icon.png" />
                <label className="skillName">Work Ethic</label>
              </div>
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/4399n8sed/search-image-photo-icon.png" />
                <label className="skillName">Attention to Detail</label>
              </div>
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/4399n8sed/positive-thinking-attitude-icon.png" />
                <label className="skillName">Self-Awareness</label>
              </div>
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/4399n8sed/plan-icon.png" />
                <label className="skillName">Adaptability</label>
              </div>
              <div className="skills">
                <img src="https://assets.onecompiler.app/42xjnjtme/4399n8sed/mind-map-icon.png" />
                <label className="skillName">Open-minded</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
                
