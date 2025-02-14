import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  const [randomProject, setRandomProject] = useState<string>("");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);
  
  return (
    <main className="mainContainer">
      <div className="options">
        <h2 className="title">Made in React</h2>
        <div className="theme">
          <p className="themeP">Light</p>
          <div className="switch">
            <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
            <span className="slider"></span>
          </div>
        </div>
      </div>
      <div className="contentContainer">
        <div className="logoContainer">
          <img className="logo" src="https://assets.onecompiler.app/42xjnjtme/438vttv6t/Gemini_Generated_Image_f55fiof55fiof55f%20(1).jpeg" />
        </div>
        <header className="titleContainer">
          <h1 className="titleDesc">crlapples' Software Developer Portfolio</h1>
        </header>
        <div className="navBarContainer">
          <ul className="navBar">
            <li className="home"><Link to="/">Home</Link></li>
            <li className="projects"><Link to="/Projects">Projects</Link></li>
            <li className="skills"><Link to="/Skills">Skills</Link></li>
            <li className="resume"><Link to="/Resume">Resume</Link></li>
            <li className="testimonials"><Link to="/Testimonials">Reviews</Link></li>
            <li className="aboutMe"><Link to="/AboutMe">About Me</Link></li>
            <li className="contact"><Link to="/Contact">Contact Me</Link></li>
          </ul>
        </div>
        <div className="offerContainer">
          <p className="offer">I design and develop custom websites that fit your needs. Whether for business, e-commerce, or personal projects. Get a sleek, SEO-friendly, and user-focused site that stands out. Let’s build something great together!</p>
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
        <div className="orderContainer">
          <div className="orderDetails">
            <div className="orderDesc">
              <p className="discount">Get [20%] Off Your First Order – Limited Time Only!</p>
              <p>Looking for a solution to [organize your schedule better]? Our [Product Name] is designed to help you [stay on top of your tasks effortlessly]—and to get you started, we're offering an exclusive 20% off your first order!
                With features like:</p>
              <ul>
                <li>Real-time syncing for easy access anywhere</li>
                <li>Simple interface for quick setup and use</li>
                <li>Customizable options to meet your needs</li>
              </ul>
              <p>You’ll experience a more organized day and increased productivity. Plus, we stand behind our product with a no-risk satisfaction guarantee—if you're not happy, we’ll make it right.</p>
              <p>We’re just starting out, and we’d love to have you as one of the first to enjoy [Product Name]. Act fast—this offer is available for a limited time only!</p>
            </div>
            <div className="seperatorLine" />
            <div className="orderTerms">
              <p className="variedPrices">Starting at</p>
              <h2 className="price"></h2>
              <p className="priceInfo">Excluding extras</p>
              <p className="time"></p>
            </div>
          </div>
          <Link to="/Order"><button className="orderButton">Place Order</button></Link>
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
                <img className="xIcon" src="https://assets.onecompiler.app/42xjnjtme/438za4x7t/x-social-media-logo-icon.png" />
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
        <div className="spacer" />
      </div>
    </main>
  );
};

export default Home;
