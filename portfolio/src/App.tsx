import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Testimonials from "./Testimonials";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Order from "./Order";
import Thankyou from "./Thankyou";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Thankyou" element={<Thankyou />} />
      </Routes>
    </Router>
  );
};

export default App;
