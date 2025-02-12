import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [randomProject, setRandomProject] = useState<string>("");
  
  return (
    <div className="mainContainer">
      <div className="logoContainer">
        <img className="logo" src="https://assets.onecompiler.app/42xjnjtme/438vttv6t/Gemini_Generated_Image_f55fiof55fiof55f%20(1).jpeg" />
      </div>
      <div className="titleContainer">
        <h1 className="title">Code Alchemy</h1>
        <p className="titleDesc">crlapples' Software Developer Portfolio</p>
      </div>
      <div className="navBarContainer">
        <ul className="navBar">
          <li className="home">Home</li>
          <li className="projects">Projects</li>
          <li className="skills">Skills</li>
          <li className="resume">Resume</li>
          <li className="aboutMe">About Me</li>
          <li className="contact">Contact Me</li>
        </ul>
      </div>
      <div className="socialsContainer">
        <ul className="socials">
          <li className="linkedin">
            <img className="linkedinIcon" src="https://assets.onecompiler.app/42xjnjtme/438vttv6t/LI-In-Bug.png" href="https://www.linkedin.com/in/crlapples?trk=contact-info" />
          </li>
          <li className="x">
            <img className="xIcon" src="https://assets.onecompiler.app/42xjnjtme/438vttv6t/logo-white.png" href="https://x.com/crlapples19" />
          </li>
          <li className="instagram">
            <img className="instagramIcon" src="https://assets.onecompiler.app/42xjnjtme/438vu3zvd/instagram.1024x1024.png" href="https://www.instagram.com/crlapples19/" />
          </li>
          <li className="tiktok">
            <img src="https://assets.onecompiler.app/42xjnjtme/438vu3zvd/tiktok.946x1024.png" href="https://www.tiktok.com/@crlapples?_t=ZP-8trUkMabx5b&_r=1" />
          </li>
          <li className="youtube">
            <img src="https://assets.onecompiler.app/42xjnjtme/438vu3zvd/youtube.1024x720.png" href="https://youtube.com/@codealchemy-crl?si=gbPEyEOHDn8zLNeL" />
          </li>
        </ul>
      </div>
      <div className="workLinksContainer">
        <ul className="workLinks">
          <li className="github">
            <img className="githubIcon" src="https://assets.onecompiler.app/42xjnjtme/438vu3zvd/github.1024x979.png" href="https://www.github.com/crlapples" />
          </li>
          <li className="fiverr">
            <img className="fiverrIcon" src="https://assets.onecompiler.app/42xjnjtme/438vttv6t/fiverr-icon.png" href="https://www.fiverr.com/crlapples" />
          </li>
          <li className="upwork">
            <img className="upworkIcon" src="https://assets.onecompiler.app/42xjnjtme/438vu3zvd/upwork.1024x1024.png" href="https://www.upwork.com/freelancers/~01df79cc1c51463359?mp_source=share" />
          </li>
          <li className="reddit">
            <img className="redditIcon" src="https://assets.onecompiler.app/42xjnjtme/438vttv6t/reddit.1024x1024.png" href="https://www.reddit.com/user/Spiritual_Chart_204/" />
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
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    </div>
  );
};

export default App;
