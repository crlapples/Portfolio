import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Resume.css";

const Resume: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    const applyTheme = (darkMode: boolean) => {
      if (isDarkMode) {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
      } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
      }
    };

    applyTheme(isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const handleStorageUpdate = (event: StorageEvent) => {
      if (event.key === "isDarkMode") {
        setIsDarkMode(event.newValue ? JSON.parse(event.newValue) : false;
      }
    };

    window.addEventListener("storage", handleStorageUpdate);
    return () => window.removeEventListener("storage", handleStorageUpdate);
  }, []);

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
          <h1 className="titleDesc">crlapples' Resume</h1>
        </header>
        <div className="resumeContainer">
          <iframe
            className="resume"
            src="https://docs.google.com/document/d/1iy7ym7Oda6__luBKYuS0l4lMys6fcBVvVMly4t5cs9A/preview"
          />
          <a href="https://docs.google.com/document/d/1iy7ym7Oda6__luBKYuS0l4lMys6fcBVvVMly4t5cs9A/export?format=pdf" download>Download Resume</a>
        </div>
      </div>
    </main>
  );
};

export default Resume;
