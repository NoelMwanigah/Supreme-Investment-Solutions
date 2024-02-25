import { FaBars } from "react-icons/fa";
import React, { useState } from "react";
import "../App.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import Mobile from "./Mobile-links";
import Logo from "../Images/Logoo.png";

export default function NavBar() {
  const [showMobileLinks, setShowMobileLinks] = useState(false);

  const toggleMobileLinks = () => {
    setShowMobileLinks(!showMobileLinks);
  };
  const closeMobile = () => {
    setShowMobileLinks(false);
  };

  return (
    <div className="navigation-bar">
      <nav id="nav-head">
        {/* Desktop Navigation */}
        <Header />
        <ul type="none" className="nav">
          <li>
            <Link to="/About" tabindex="0">
              About SIS
            </Link>
          </li>
          <li>
            <Link to="/Home" tabindex="0">
              Why Us
            </Link>
          </li>
          <li>
            <Link to="/Services">We Offer</Link>
          </li>
          <li className="contact-link">
            <Link className="super-link1" to="/Contact">
              Contact Us
            </Link>
            <Link className="super-link1" to="/login">
              Sign Up
            </Link>
          </li>
          {/* <li className="contact-link">
            <Link to="/login">Login</Link>
          </li> */}
          {/* <li>
            <Link to="/sign">Sign Up</Link>
          </li> */}
        </ul>

        {/* Mobile Navigation */}
        {showMobileLinks && <Mobile onClose={closeMobile} />}

        {/* Mobile Button */}
        <section className="btns-section">
          {!showMobileLinks && (
            <button className="nav-btn" onClick={toggleMobileLinks}>
              <FaBars />
            </button>
          )}
          {/* Add a close button if needed */}
        </section>
      </nav>
    </div>
  );
}
