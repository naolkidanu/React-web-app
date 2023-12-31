import React from "react";
import {
  faChevronLeft,
  faMicrophone,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Navbar.css";
import PropTypes from "prop-types";

const Navbar = ({ data, year }) => (
  <>
    <nav className="navbar" id="myNavbar">
      <div className="nav__wrapper">
        <Link id="back" to="/">
          <FontAwesomeIcon icon={faChevronLeft} className="icon" />
          {year}
        </Link>
        <ul className="nav-menu">
          <li className="nav-list">
            <Link
              className="nav-link"
              to="/"
              onClick={() => window.location.reload()}
            >
              {data}
            </Link>
          </li>
        </ul>
        <div className="mic__container">
          <FontAwesomeIcon icon={faMicrophone} className="icon" />
          <FontAwesomeIcon icon={faGear} className="icon" />
        </div>
      </div>
    </nav>
  </>
);

Navbar.propTypes = {
  data: PropTypes.string.isRequired,
  year: PropTypes.number,
};

export default Navbar;
