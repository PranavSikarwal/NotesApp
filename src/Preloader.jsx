import React from "react";
import ReactDOM from "react-dom";
import './Preloader.css';
document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.querySelector('.preloader');
  
    setTimeout(function () {
      preloader.style.display = 'none';
    }, 2000);
  });
  

function Preloader() {
    return (
      <>
 <div className="preloader">
  </div>      
       </>
    );
  }
  
  export default Preloader;
  