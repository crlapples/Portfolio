import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./Order.css";

const Order: React.FC = () => {
  const [selectedPages, setSelectedPages] = useState<string>("");
  const [selectedHosting, setSelectedHosting] = useState<string>("");
  const [selectedBackend, setSelectedBackend] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0.0);
  const [isDiscounted, setIsDiscounted] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
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

  const prices = { pages: { "1": 50, "2-5": 150, "5-10": 300 }, hosting: { "hosting-yes": 25, "hosting-no": 0 }, backend: { "backend-yes": 300, "backend-no": 0 }};
                  
  useEffect(() => {
    const pagesPrice = prices.pages[selectedPages as keyof typeof prices.pages] || 0;
    const hostingPrice = prices.hosting[selectedHosting as keyof typeof prices.hosting] || 0;
    const backendPrice = prices.backend[selectedBackend as keyof typeof prices.backend] || 0;
    let calculatedPrice = pagesPrice + hostingPrice + backendPrice;
    if (isDiscounted) {
      calculatedPrice = Number((calculatedPrice * 0.8).toFixed(2));
    }
    setTotalPrice(calculatedPrice);
  }, [selectedPages, selectedHosting, selectedBackend, isDiscounted]);

  useEffect(() => {
    if (status === "success") {
      window.location.href = "/Thankyou";
    }
  }, [status]);

  const handlePages = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPages(event.target.value);
  };

  const handleHosting = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHosting(event.target.value);
  };

  const handleBackend = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBackend(event.target.value);
  };

  const handleDiscount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDiscounted(event.target.checked);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
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
            <li className="skillsNav"><Link to="/Skills">Skills</Link></li>
            <li className="resumeNav"><Link to="/Resume">Resume</Link></li>
            <li className="testimonials"><Link to="/Testimonials">Reviews</Link></li>
            <li className="aboutMe"><Link to="/AboutMe">About Me</Link></li>
            <li className="contact"><Link to="/Contact">Contact Me</Link></li>
            <li className="order"><Link to="/Order">Order Now</Link></li>
          </ul>
        </div>
        <header className="titleContainer">
          <h1 className="titleDesc">Your <span style={{ color: "lightblue" }}>Website</span>, Your Way. Let’s Build It!</h1>
        </header>
        <div className="formContainer">
          <form>
            <div className="emailContainer">
              <input
                type="email"
                id="emailInput"
                value={email}
                onChange={handleEmail}
                placeholder="Email"
              />
            </div>
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
            <div className="discountContainer">
              <input
                type="checkbox"
                id="discountCheckbox"
                checked={isDiscounted}
                onChange={handleDiscount}
              />
              <label htmlFor="discountCheckbox">Apply 20% first-time user discount</label>
            </div>
            <div className="priceContainer">
              <div className="totalPriceContainer">
                <p className="priceTitle">Total Price</p>
                <p className="priceNumber">${totalPrice}</p>
              </div>
              <div className="seperatorLineB" />
              <div className="depositContainer">
                <p className="priceTitle">Deposit</p>
                <p className="priceNumber">${(totalPrice * 0.3).toFixed(2)}</p>
              </div>
            </div>
            <div className="paypal">
              <PayPalScriptProvider options={{ "clientId": "AeftqImo59HTVW0LaZzPNRzaAaCMJSTt8ST6s3HWz-LcTM8hhyrglncsqCMxkfIvZLjrUmlOIRLHsm2X" }}>
                <PayPalButtons 
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      intent: "CAPTURE",
                      purchase_units: [{ amount: { currency_code: "USD", value: (totalPrice * 0.3).toFixed(2) } }]
                    });
                  }}
                  onApprove={(data, actions): Promise<void> => {
                    if (actions.order) {
                      return actions.order.capture().then((details) => {
                        if (details.payer && details.payer.name) {
                          
                          const formData = new FormData();
                          formData.append("email", email);
                          formData.append("pages", selectedPages);
                          formData.append("hosting", selectedHosting);
                          formData.append("backend", selectedBackend);
                          formData.append("description", description);
                          formData.append("totalPrice", totalPrice.toString());

                          fetch('https://formspree.io/f/meoerkjq', {
                            method: "POST",
                            body: formData
                          })
                          .then(response => {
                            if (response.ok) {
                              setStatus("success");
                            } else {
                              setStatus("fail");
                            }
                          })
                          .catch(error => {
                            console.error("Error sending form data", error);
                            setStatus("fail");
                          });
                        } else {
                          console.error("Payer details are missing");
                        }
                      }).catch((error) => {
                        console.error("Payment failed", error);
                        return Promise.resolve();
                      });
                    } else {
                      console.error("Order not found");
                      return Promise.resolve();
                    }
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </form>
        </div>
        <div className="spacer" />
      </div>
    </main>
  );
};

export default Order;
