import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Projects.css";

const Projects: React.FC = () => {

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
        <div className="projectContainer">
          <div className="projectContentContainer">
            <div className="imgContainer">
              <Link to=""><img className="marketplaceImg" src="" /></Link>
              <label className="imgLabel">Homepage of e-commerce example website</label>
            </div>
            <div className="imgContainer">
              <Link to=""><img className="marketplaceImg" src="" /></Link>
              <label className="imgLabel">Account login of e-commerce website</label>
            </div>
            <div className="imgContainer">
              <Link to=""><img className="marketplaceImg" src="" /></Link>
              <label className="imgLabel">Checkout page with cart of e-commerce example</label>
            </div>
          </div>
          <p className="projectDetails">My e-commerce example includes recommended items on the homepage, along with accounts integration, cart, search, categories, individual item pages, checkout, responsive design, dynamically added items to handle new inventory, and persistent items.</p>
          <div className="links">
            <p>:</p><Link to=""></Link>
            <p>:</p><Link to=""></Link>
          </div>
        </div>
        <div className="projectContainer">
          <div className="projectContentContainer">
            <div className="imgContainer">
              <Link to=""><img className="sudokuImg" src="" /></Link>
              <label className="imgLabel">Sudoku variant game generator website</label>
            </div>
            <div className="imgContainer">
              <Link to=""><img className="sudokuImg" src="" /></Link>
              <label className="imgLabel">Sudoku variant game generator website</label>
            </div>
            <div className="imgContainer">
              <Link to=""><img className="sudokuImg" src="" /></Link>
              <label className="imgLabel">Sudoku variant game generator website</label>
            </div>
          </div>
          <p className="projectDetails"></p>
          <div className="links">
            <p>:</p><Link to=""></Link>
            <p>:</p><Link to=""></Link>
          </div>
        </div>
        <div className="projectContainer">
          <div className="projectContentContainer">
            <div className="imgContainer">
              <Link to=""><img className="knightsImg" src="" /></Link>
              <label className="imgLabel">RPG tycoon Android app mobile game</label>
            </div>
            <div className="imgContainer">
              <Link to=""><img className="knightsImg" src="" /></Link>
              <label className="imgLabel">Combat for Android app mobile game</label>
            </div>
            <div className="imgContainer">
              <Link to=""><img className="knightsImg" src="" /></Link>
              <label className="imgLabel">GUI example in Android app mobile game</label>
            </div>
          </div>
          <p className="projectDetails"></p>
          <div className="links">
            <p>:</p><Link to=""></Link>
            <p>:</p><Link to=""></Link>
          </div>
        </div>
      </div>
    </main>
  );
};
