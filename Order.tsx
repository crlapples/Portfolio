import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./Order.css";

const Order: React.FC = () => {
  const [selectedPages, setSelectedPages] = useState<string>("");
  const [selectedHosting, setSelectedHosting] = useState<string>("");
  const [selectedBackend, setSelectedBackend] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<float>(0.0);

  const handlePages = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPages(event.target.value);
  };

  const handleHosting = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHosting(event.target.value);
  };

  const handleBackend = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBackend(event.target.value);
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
          <h1 className="titleDesc">Your Website, Your Way. Let’s Build It!</h1>
        </header>
        <div className="formContainer">
          <form>
            <div className="groupInput">
              <label htmlFor="pages">Choose page amount:</label>
              <select id="pages" name="pages" value={selectedPages} onChange={handlePages}>
                <option value="1">Single-page, 1</option>
                <option value="2-5">Small business, 2-5</option>
                <option value="5-10">Professional, 5-10</option>
              </select>
              <label htmlFor="hosting">Need hosting?:</label>
              <select id="hosting" name="hosting" value={selectedHosting} onChange={handleHosting}>
                <option value="hosting-yes">Yes</option>
                <option value="hosting-no">No</option>
              </select>
              <label htmlFor="backend">Backend server included?:</label>
              <select id="backend" name="backend" value={selectedBackend} onChange={handleBackend}>
                <option value="backend-yes">Yes</option>
                <option value="backend-no">No</option>
              </select>
            </div>
            <div className="clientDescContainer">
              <div className="clientDesc">
                <label htmlFor="clientDescription">Website description:</label>
                <textarea
                  id="clientDescription"
                  name="clientDescription"
                  rows={12}
                  cols={100}
                  placeholder="Describe your website(E-commerce, CRM, blog.. etc.).."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="paypal">
              <PayPalScriptProvider options={{ "client-id": "yourclientid" }}>
                <PayPalButtons 
                  createOrder={(data, actions) => {
                    return actions.orders.create({
                      purchase_units: [{ amount: { value: (totalPrice * 0.3).toFixed(2) } }]
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order?.capture()
                </PayPalButtons>
              </PayPalScriptProvider>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Order;
