import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/logo.jpg";
import About from "./About";
import learnMore from "./learnMore";
import checkup from "./checkup";

const Navbar = () => {
  return (
    <nav class="navbar navbar-light">
      <a className="navbar-brand mainfont">
        <Link to="/">
          <img src={logo} class="logo" />
          TheHousepital
        </Link>
      </a>
      <form class="form-inline">
        <a class=" mr-sm-3">
          <Link to="/about">ABOUT</Link>
        </a>
        <a class=" mr-sm-4">
          <Link to="/learnMore">LEARN MORE</Link>
        </a>
        <button
          class="btn btn-outline-primary my-1 my-sm-0"
          type="submit"
          href="/checkup"
        >
          <Link to="/checkup"> START CHECKUP</Link>
        </button>
      </form>
    </nav>
  );
};
export default Navbar;
