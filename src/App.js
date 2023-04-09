// Importing modules
// import React, { useState, useEffect } from "react";
import "./App.css";
// import Test from "./tests/Test";
import { NavBar } from "./components/NavBar";
import Home from "./components/Home";
// import {About} from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      {/* <Test /> */}
	  <NavBar />
	  <Home />
    <Portfolio />
    <Skills />
    {/* <About /> */}
    </div>
  );
}

export default App;
