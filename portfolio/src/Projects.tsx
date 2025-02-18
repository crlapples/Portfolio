import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Projects.css";

const Projects: React.FC = () => {
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
          <h1 className="titleDesc"><span style={{ color: "purple" }}>crlapples'</span> Projects</h1>
        </header>
        <div className="projectContainer">
          <div className="projectContentContainer">
            <div className="imgContainer">
              <a href="https://crlapples.github.io/Marketplace-project/" target="_blank" rel="noopener noreferrer"><img className="marketplaceImg" src="https://assets.onecompiler.app/42xjnjtme/43982um62/Marketplace1.png" /></a>
              <label className="imgLabel">Homepage of e-commerce example website</label>
            </div>
            <div className="imgContainer">
              <a href="https://crlapples.github.io/Marketplace-project/login.html" target="_blank" rel="noopener noreferrer"><img className="marketplaceImg" src="https://assets.onecompiler.app/42xjnjtme/43982um62/Marketplace2.png" /></a>
              <label className="imgLabel">Account login of e-commerce website</label>
            </div>
            <div className="imgContainer">
              <a href="https://crlapples.github.io/Marketplace-project/checkout.html" target="_blank" rel="noopener noreferrer"><img className="marketplaceImg" src="https://assets.onecompiler.app/42xjnjtme/43982um62/Marketplace3.png" /></a>
              <label className="imgLabel">Checkout page with cart of e-commerce example</label>
            </div>
          </div>
          <p className="projectDetails">My e-commerce project website is completed in HTML, CSS, and JavaScript. The example includes recommended items on the homepage, along with accounts integration, cart, search, categories, individual item pages, checkout, responsive design, dynamically added items to handle new inventory, and persistent items.</p>
          <div className="links">
            <p>Live URL: </p><a href="https://crlapples.github.io/Marketplace-project/" target="_blank" rel="noopener noreferrer">Marketplace Project</a>
            <p>Github URL: </p><a href="https://github.com/crlapples/Marketplace-project" target="_blank" rel="noopener noreferrer">Repository</a>
          </div>
        </div>
        <div className="projectContainer">
          <div className="projectContentContainer">
            <div className="imgContainer">
              <a href="https://crlapples.github.io/Sudoku-project/" target="_blank" rel="noopener noreferrer"><img className="sudokuImg" src="https://assets.onecompiler.app/42xjnjtme/43982um62/Sudoku1.png" /></a>
              <label className="imgLabel">Sudoku variant game generator website</label>
            </div>
            <div className="imgContainer">
              <a href="https://crlapples.github.io/Sudoku-project/" target="_blank" rel="noopener noreferrer"><img className="sudokuImg" src="https://assets.onecompiler.app/42xjnjtme/43982um62/Sudoku3.png" /></a>
              <label className="imgLabel">Sudoku variant game generator website</label>
            </div>
            <div className="imgContainer">
              <a href="https://crlapples.github.io/Sudoku-project/" target="_blank" rel="noopener noreferrer"><img className="sudokuImg" src="https://assets.onecompiler.app/42xjnjtme/43982um62/Sudoku2.png" /></a>
              <label className="imgLabel">Sudoku variant game generator website</label>
            </div>
          </div>
          <p className="projectDetails">Sudoku project is completed in React. It includes an algorithm and button that generates a puzzle, a timer for speed running, and a win notification when the game is solved.</p>
          <div className="links">
            <p>Live URL: </p><a href="https://crlapples.github.io/Sudoku-project/" target="_blank" rel="noopener noreferrer">Sudoku Project</a>
            <p>Github URL: </p><a href="https://github.com/crlapples/Sudoku-project" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </div>
        <div className="projectContainer">
          <div className="projectContentContainer">
            <div className="imgContainer">
              <a href="https://assets.onecompiler.app/42xjnjtme/43982um62/Screenshot_20250209-105912.png" target="_blank" rel="noopener noreferrer"><img className="knightsImg" src="https://assets.onecompiler.app/42xjnjtme/43982um62/Screenshot_20250209-105912.png" /></a>
              <label className="imgLabel">RPG tycoon Android app mobile game</label>
            </div>
            <div className="imgContainer">
              <a href="https://assets.onecompiler.app/42xjnjtme/43982um62/Screenshot_20250209-110038.png" target="_blank" rel="noopener noreferrer"><img className="knightsImg" src="https://assets.onecompiler.app/42xjnjtme/43982um62/Screenshot_20250209-110038.png" /></a>
              <label className="imgLabel">Combat for Android app mobile game</label>
            </div>
            <div className="imgContainer">
              <a href="https://assets.onecompiler.app/42xjnjtme/43982um62/Screenshot_20250209-110006.png" target="_blank" rel="noopener noreferrer"><img className="knightsImg" src="https://assets.onecompiler.app/42xjnjtme/43982um62/Screenshot_20250209-110006.png" /></a>
              <label className="imgLabel">GUI example in Android app mobile game</label>
            </div>
          </div>
          <p className="projectDetails">Knight RPG Tycoon is an Android mobile game done using Godot in GDScript. It includes real-time combat, random affixed items, item stores, AI controlled units, character leveling, knight recruiting, raid boss, saving/loading, music and sounds, audio settings, and menu.</p>
        </div>
        <div className="spacer" />
      </div>
    </main>
  );
};

export default Projects;
