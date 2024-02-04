import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faPlusSquare, faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import "./Navbar.css";
import logo from "./logo/WeFeltLogo.png";

const Navbar = () => {
  const currentUser = sessionStorage.getItem("currentUser");
 
  return (
    <nav className={`navbar ${currentUser ? "authenticated" : "unauthenticated"}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <img src={logo} alt="Wefelt Logo" className="logo" />
        </NavLink>

        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className="nav-links">
              <FontAwesomeIcon icon={faBuilding} className="nav-icons" />
            </NavLink>
          </li>

          <li className="nav-item">
            {currentUser ? (
              <NavLink to="/create-post" className="nav-links">
                <FontAwesomeIcon icon={faPlusSquare} className="nav-icons" />
              </NavLink>
            ) : (
              <NavLink to="/login" className="nav-links">
                <FontAwesomeIcon icon={faPlusSquare} className="nav-icons" />
              </NavLink>
            )}
          </li>

          <li className="nav-item">
            <NavLink to="/notifications" className="nav-links">
              <FontAwesomeIcon icon={faBell} className="nav-icons" />
            </NavLink>
          </li>

          <li className="nav-item">
            {currentUser ? (
              <NavLink to="/profile" className="nav-links">
                <FontAwesomeIcon icon={faUser} className="nav-icons" />
              </NavLink>
            ) : (
              <NavLink to="/login" className="nav-links">
                <FontAwesomeIcon icon={faUser} className="nav-icons" />
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
