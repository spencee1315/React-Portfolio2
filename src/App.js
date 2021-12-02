import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

// importing components
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Social from "./components/Social";

function App() {
  return (
    <Router>
      <div id="features">
      <Header />
      </div>
      <div>
      <About />
      </div>
      <div>
      <Portfolio />
      </div>
      <div>
      <Social />
      </div>
      <div id="features">
      <Footer />
      </div>
    </Router>
  )
}

export default App;
