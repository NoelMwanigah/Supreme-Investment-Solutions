import React from "react";
import "../App.css";
// import "../Home.css";
import Logo from "../Images/Logoo.png";
export default function Header() {
  return (
    <div className="Header">
      <div className="scroll-watcher"></div>
      <img
        src={Logo}
        className="Logo"
        alt="This is a Logo
        "
      ></img>
      <div>
        <p>
          <span className="company-name">Supreme Investment solutions</span>
          <br></br>
          <span className="company-tagline"> INSIGHT. IMPACT. INFLOW</span>
        </p>
        {/* <p>Impact. Insight. </p> */}
      </div>
    </div>
  );
}
