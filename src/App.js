import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import Heading from "./Heading";
import Preloader from "./Preloader";
import Navbar from "./Navbar";
import Upload from "./Upload"; // Import your Upload component here

function App() {
  return (
    <>
      <Preloader />
      <Heading />
      <Upload/>
      {/* <Navbar /> */}
      {/* <Routes> */}
        {/* <Route path="/Upload" element={<Upload />} /> */}
        {/* Define other routes here */}
      {/* </Routes> */}
    </>
  );
}

export default App;
