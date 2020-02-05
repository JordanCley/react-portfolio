import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

// Header Section
const Header = () => {
  return (
    <div className="header">
      <NavBar></NavBar>
    
      <div class="title" id="blockOne">
        <h1>FULL</h1>
      </div>

      <div class="title" id="blockTwo">
        <h1>STACK</h1>
      </div>

      <div class="title" id="blockThree">
        <h1>WEB</h1>
      </div>

      <div class="title" id="blockFour">
        <h1>DEVELOPER</h1>
      </div>

      <hr />

      <div className="skills">
        <ul>
          <li>Javascript(ES6)</li>
          <li>Nodejs</li>
          <li>Express</li>
          <li>React</li>
          <li>JQuery</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Bootstrap</li>
          <li>SemanticUI</li>
          <li>HTML/CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
