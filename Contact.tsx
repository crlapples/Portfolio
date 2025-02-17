import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Contact.css";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    const response = await fetch("https://formspree.io/f/xzzdkbny", {
      method: "POST",
      headers: { "Accept": "application/json",
                "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setStatus("Thank you for contacting me!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Something went wrong, failed to send message");
    }
  };

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
          <h1 className="titleDesc">Contact Me</h1>
        </header>
        <div className="formWithInfoContainer">
          <div className="formWithInfo">
            <div className="form">
              <form onSubmit="handleSubmit">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <button type="submit">Send</button>
              </form>
            </div>
            <div className="seperatorLine" />
            <div className="info">
              <p className="title">Name:</p>
              <p className="content">Christopher Richard Lee</p>
              <p className="title">Email:</p>
              <p className="content">crlapples19@gmail.com</p>
              <p className="title">Discord:</p>
              <p className="content"><a href="https://discord.gg/WC48vPpH">Invitation</a></p>
            </div>
          </div>
          {status && <p>{status}</p>}
        </div>
      </div>
    </main>
  );
};

export default Contact;
