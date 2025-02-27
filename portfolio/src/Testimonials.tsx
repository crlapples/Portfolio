import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Testimonials.css";

const Testimonials = () => {
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
            <li className="projects"><Link to="/Projects">Projects</Link></li>
            <li className="skillsNav"><Link to="/Skills">Skills</Link></li>
            <li className="resumeNav"><Link to="/Resume">Resume</Link></li>
            <li className="testimonials"><Link to="/Testimonials">Reviews</Link></li>
            <li className="aboutMe"><Link to="/AboutMe">About Me</Link></li>
            <li className="contact"><Link to="/Contact">Contact Me</Link></li>
            <li className="order"><Link to="/Order">Order Now</Link></li>
          </ul>
        </div>
        <header className="titleContainer">
          <h1 className="titleDesc"><span style={{ color: "purple" }}>crlapples'</span> Reviews</h1>
        </header>
        <div className="testimonialsB">
          <div className="reviews1">
            <div className="titleWithRating">
              <p className="title1">Supplier Relations US, LLC</p>
              <p className="rating1">★★★★★</p>
              <img className="orderedFromIcon" src="https://assets.onecompiler.app/42xjnjtme/438vttv6t/fiverr-icon.png" />
            </div>
            <div className="projectNameDate">
              <p className="projectName">AppShowcase</p>
              <p className="projectDate">02/22/25</p>
            </div>
            <div className="seperatorLineF" />
            <p className="reviewQuote">"Chris did an excellent job for a quite complicated website design. I will most definitely use him again. He took time to research on the project and he can understand what we need. I will highly recommend him. Wait, he did the website in 2 days."</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
