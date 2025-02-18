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
    <Router basename="/Portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio/Projects" element={<Projects />} />
        <Route path="/Portfolio/Skills" element={<Skills />} />
        <Route path="/Portfolio/Resume" element={<Resume />} />
        <Route path="/Portfolio/Testimonials" element={<Testimonials />} />
        <Route path="/Portfolio/AboutMe" element={<AboutMe />} />
        <Route path="/Portfolio/Contact" element={<Contact />} />
        <Route path="/Portfolio/Order" element={<Order />} />
        <Route path="/Portfolio/Thankyou" element={<Thankyou />} />
      </Routes>
    </Router>
  );
};

export default App;
