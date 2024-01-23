import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCompass, faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import './Navbar.css';
import logo from "./logo/WeFeltLogo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Wefelt" className='logo' />
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/home" className="nav-links">
              <FontAwesomeIcon icon={faBuilding} className='nav-icons'  />
            </Link>
          </li>
          
          <li className="nav-item">
            <Link to="/explore" className="nav-links">
              <FontAwesomeIcon icon={faCompass} className='nav-icons' />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/notifications" className="nav-links">
              <FontAwesomeIcon icon={faBell} className='nav-icons'  />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-links">
              <FontAwesomeIcon icon={faUser} className='nav-icons'  />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
