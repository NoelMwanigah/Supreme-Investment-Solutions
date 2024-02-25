import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

/* Mobile Links */
export default function Mobile({ onClose }) {
  const [showMenuButton, setShowMenuButton] = useState(true);
  const [showLinksButton, setShowLinksButton] = useState(false);

  //Displays the moblie Component
  const showLinks = () => {
    setShowMenuButton(false);
    setShowLinksButton(true);
  };
  // Close the mobile component
  const hideLinks = () => {
    setShowMenuButton(true);
    setShowLinksButton(false);
    onClose();
  };

  return (
    <div className="mobile-links">
      {/* {showMenuButton && <button onClick={showLinks}>Menu</button>}
      {showLinksButton && ( */}
      <ul type="none" class="links-align">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
        <li>
          <button onClick={hideLinks} className="hide-button">
            <FaTimes />
          </button>
        </li>
      </ul>
      {/* )} */}
      {/* )} */}
    </div>
  );
}
