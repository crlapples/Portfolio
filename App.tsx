import React, { useState } from 'react';

const App = () => {
  const [randomProject, setRandomProject] = useState<string>("");
  
  return (
    <div className="mainContainer">
      <div className="logoContainer">
        <img className="logo" src="" />
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
            
          </li>
          <li className="fiverr">
            
          </li>
          <li className="upwork">
            
          </li>
          <li className="reddit">
            
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
