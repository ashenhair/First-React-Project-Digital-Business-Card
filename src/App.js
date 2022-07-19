import React from "react";
import "./App.css";
import Info from "./Info.js";
import About from "./About.js";
import Interests from "./Interests.js";
import Footer from "./Footer.js";



export default function App() {
  return(
    <div className="App">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}