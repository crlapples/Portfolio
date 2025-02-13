import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [randomProject, setRandomProject] = useState<string>("");
  
  return (
    <main className="mainContainer">
      <header className="logoContainer">
        <h1 className="title">Made in React</h1>
        <img className="logo" src="https://assets.onecompiler.app/42xjnjtme/438vttv6t/Gemini_Generated_Image_f55fiof55fiof55f%20(1).jpeg" />
      </header>
      <div className="titleContainer">
        <p className="titleDesc">crlapples' Software Developer Portfolio</p>
      </div>
      <div className="navBarContainer">
        <ul className="navBar">
          <li className="home"><a href="#HOME">Home</a></li>
          <li className="projects"><a href="#PROJECTS">Projects</a></li>
          <li className="skills"><a href="#SKILLS">Skills</a></li>
          <li className="resume"><a href="#RESUME">Resume</a></li>
          <li className="aboutMe"><a href="#ABOUTME">About Me</a></li>
          <li className="contact"><a href="#CONTACT">Contact Me</a></li>
        </ul>
      </div>
      <div className="socialsContainer">
        <ul className="socials">
          <li className="linkedin">
            <a href="https://www.linkedin.com/in/crlapples?trk=contact-info">
              <img className="linkedinIcon" src="https://assets.onecompiler.app/42xjnjtme/438vttv6t/LI-In-Bug.png" />
            </a>
          </li>
          <li className="x">
            <a href="https://x.com/crlapples19">
              <img className="xIcon" src="https://assets.onecompiler.app/42xjnjtme/438vttv6t/logo-white.png" />
            </a>
          </li>
          <li className="instagram">
            <a href="https://www.instagram.com/crlapples19/">
              <img className="instagramIcon" src="https://assets.onecompiler.app/42xjnjtme/438vu3zvd/instagram.1024x1024.png" />
            </a>
          </li>
          <li className="tiktok">
            <a href="https://www.tiktok.com/@crlapples?_t=ZP-8trUkMabx5b&_r=1">
              <img src="https://assets.onecompiler.app/42xjnjtme/438vu3zvd/tiktok.946x1024.png" />
            </a>
          </li>
          <li className="youtube">
            <a href="https://youtube.com/@codealchemy-crl?si=gbPEyEOHDn8zLNeL">
              <img src="https://assets.onecompiler.app/42xjnjtme/438vu3zvd/youtube.1024x720.png" />
            </a>
          </li>
        </ul>
      </div>
      <div className="workLinksContainer">
        <ul className="workLinks">
          <li className="github">
            <a href="https://www.github.com/crlapples">
              <img className="githubIcon" src="https://assets.onecompiler.app/42xjnjtme/438vu3zvd/github.1024x979.png" />
            </a>
          </li>
          <li className="fiverr">
            <a href="https://www.fiverr.com/crlapples">
              <img className="fiverrIcon" src="https://assets.onecompiler.app/42xjnjtme/438vttv6t/fiverr-icon.png" />
            </a>
          </li>
          <li className="upwork">
            <a href="https://www.upwork.com/freelancers/~01df79cc1c51463359?mp_source=share">
              <img className="upworkIcon" src="https://assets.onecompiler.app/42xjnjtme/438vu3zvd/upwork.1024x1024.png" />
            </a>
          </li>
          <li className="reddit">
            <a href="https://www.reddit.com/user/Spiritual_Chart_204/">
              <img className="redditIcon" src="https://assets.onecompiler.app/42xjnjtme/438vttv6t/reddit.1024x1024.png" />
            </a>
          </li>
        </ul>
      </div>
      <div className="achievementsContainer">
        <div className="achievement">
          <h2 className="name">Total Hours Coding</h2>
          <p className="value">3000</p>
        </div>
        <div className="achievement">
          <h2 className="name">Projects Completed</h2>
          <p className="value">3</p>
        </div>
      </div>
      <div className="donateContainer">
        <p className="donateDesc">Support My Journey</p>
        <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="business" value="9S4N7ZRF4KENA" />
          <input type="hidden" name="no_recurring" value="0" />
          <input type="hidden" name="item_name" value="Your support makes a difference! Every contribution, big or small, helps me achieve a goal. Thank you." />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    </main>
  );
};

export default App;