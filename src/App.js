import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Stories from "./components/Stories";
import Contact from "./components/Contact";
import Destinations from "./components/Destinations";
import Gallery from "./components/Gallery";

import About from "./components/About";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Home />
      <About />
    </div>
  );
}

export default App;
