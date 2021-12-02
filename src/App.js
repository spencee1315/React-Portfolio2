import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// importing components
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Social from "./components/Social";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={About()} path='/' exact />
        <Route element={Portfolio()} path='/portfolio' exact />
        <Route element={Social()} path='/social' exact />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
