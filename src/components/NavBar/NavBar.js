import React from "react";
import "./NavBar.css";
import { Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="navbar">
      <Navbar variant="dark"  expand="sm">
        <Navbar.Brand href="#home">
          <h1 className="brandName">
            <span>Jordan</span> McQuiston
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <h2 className="navLinks m-2">About</h2>
          </Navbar.Text>
          <Navbar.Text>
            <h2 className="navLinks m-2">Projects</h2>
          </Navbar.Text>
          <Navbar.Text>
            <h2 className="navLinks m-2">Resume</h2>
          </Navbar.Text>
          <Navbar.Text>
            <h2 className="navLinks m-2">Contact</h2>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
