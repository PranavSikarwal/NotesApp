import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import Heading from "./Heading";
import Preloader from "./Preloader";
// npm install react-router-dom --save
// import Navbar from "./Navbar";
import Upload from "./Upload"; // Import your Upload component here
import "./App.css"
function App() {
  return (
    <>
      <Preloader />
      <Heading />
      <Upload/>
    
    </>
  );
}

export default App;
