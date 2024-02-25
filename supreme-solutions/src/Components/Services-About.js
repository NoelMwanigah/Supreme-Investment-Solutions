import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ServicesAbout(props) {
  return (
    <div className="services-divs">
      <img src={props.image} alt="copy trading image" className="image-about" />
      <h2 className="h1-margin">{props.service}</h2>
      {/* Conditional rendering of Link based on displayLink prop */}
      {props.displayLink ? (
        <React.Fragment>
          {/* <p className="service-description">{props.info}</p> */}
          <Link to="/services" className="service-link">
            {props.linkage}
            <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
          </Link>
        </React.Fragment>
      ) : (
        <h5 className="position">{props.position}</h5>
      )}
    </div>
  );
}
