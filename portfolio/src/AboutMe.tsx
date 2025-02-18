import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./AboutMe.css";

const AboutMe: React.FC = () => {
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
        setIsDarkMode(event.newValue ? JSON.parse(event.newValue) : false);
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
            <li className="projects"><Link to="/Portfolio/Projects">Projects</Link></li>
            <li className="skillsNav"><Link to="/Portfolio/Skills">Skills</Link></li>
            <li className="resumeNav"><Link to="/Portfolio/Resume">Resume</Link></li>
            <li className="testimonials"><Link to="/Portfolio/Testimonials">Reviews</Link></li>
            <li className="aboutMe"><Link to="/Portfolio/AboutMe">About Me</Link></li>
            <li className="contact"><Link to="/Portfolio/Contact">Contact Me</Link></li>
            <li className="order"><Link to="/Portfolio/Order">Order Now</Link></li>
          </ul>
        </div>
        <header className="titleContainer">
          <h1 className="titleDesc">About Me</h1>
        </header>
        <div className="aboutMeContainer">
          <div className="introduction">
            <p style={{ color: "red" }}><strong>Introduction</strong></p>
            <p>Hi! I'm Christopher Lee, a budding software developer with a passion for building projects and earning a reputation. While I don’t have professional experience in development yet, I’ve worked on various personal and entrepreneurial projects, learning mainly web development, some mobile app development, and some game design along the way. My journey so far has been fueled by curiosity and a desire to create impactful results.</p>
          </div>
          <div className="personalStory">
            <p style={{ color: "green" }}><strong>Personal Story</strong></p>
            <p>Before diving into the world of coding, I spent time as a teacher, where I learned the value of clear communication and patience. Teaching allowed me to help others understand complex concepts, a skill I now apply when learning new technologies and sharing my knowledge through my projects. My transition to tech was born from a hobby I've always had in computers ever since I was a child, and I’ve spent countless hours learning and experimenting with different programming elements like JavaScript, React, Node.js, and Godot.<br /><br />Though I’m currently facing some housing challenges, I remain focused on my path in tech. I’m determined to continue growing, learn from every project, and eventually build a successful career.</p>
          </div>
          <div className="valuesAndMission">
            <p style={{ color: "blue" }}><strong>Values and Mission</strong></p>
            <p>I believe in the power of perseverance and lifelong learning. My mission is to continually improve as a developer and offer my skills to help others build innovative solutions. I value collaboration, open communication, and making technology accessible to everyone. Through my work, I aim to make a positive impact on others and contribute to projects that can make a difference.</p>
          </div>
        </div>
        <div className="spacer" />
      </div>
    </main>
  );
};

export default AboutMe;
