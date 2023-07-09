import "./App.css";

import React from "react";
import HeaderMain from "./components/HeaderMain";
import Home from "./home/Home";
import About from "./about/About";
import Skills from "./skills/Skills";
import Qualification from "./qualifications/Qualification";
import Footer from "./footer/Footer";
import Portfolio from "./projects/portfolio";
function App() {
  var body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = "rgba(1,3, 0, 12)";

  // trigger this function every time the user scrolls
  window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 600) {
      // green
      body.style.backgroundColor = "rgba(1,3, 0, 12)";
      document.getElementById("Header").style.backgroundColor =
        "rgba(1,3, 0, 12)";
    } else if (scroll >= 600 && scroll < 2250) {
      // yellow
      body.style.backgroundColor = "rgba(120, 117, 110)";
      document.getElementById("Header").style.backgroundColor =
        "rgba(120, 117, 110)";
    } else if (scroll >= 2250 && scroll < 2300) {
      // blue
      body.style.backgroundColor = "rgba(1,3, 0, 12)";
      document.getElementById("Header").style.backgroundColor =
        "rgba(1,3, 0, 12)";
    }
    // } else if (scroll >= 1700 && scroll < 2100) {
    //   // orange
    //   body.style.backgroundColor = "orange";
    // } else if (scroll >= 1900 && scroll < 3100) {
    //   // red
    //   body.style.backgroundColor = "red";
    // } else {
    //   // purple
    //   body.style.backgroundColor = "purple";
    // }
  };
  return (
    <>
      <HeaderMain />

      <main className="main">
        <Home />
        <About />
        <div style={{ height: "100px" }}></div>

        <Portfolio />
        <div style={{ height: "100px" }}></div>
        <Skills />
        <Qualification />
        <Footer />
      </main>
    </>
  );
}

export default App;
