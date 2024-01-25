import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faPlusSquare, faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import './Navbar.css';
import logo from "./logo/WeFeltLogo.png";

const Navbar = () => {
    return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <img src={logo} alt="Wefelt" className='logo' />
        </NavLink>

        <ul className="nav-menu">
          <li className="nav-item">
            
            <NavLink to="/home" className="nav-links">
              <FontAwesomeIcon icon={faBuilding} className='nav-icons'  />
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink to="/explore" className="nav-links">
              <FontAwesomeIcon icon={faPlusSquare} className='nav-icons' />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/notifications" className="nav-links">
              <FontAwesomeIcon icon={faBell} className='nav-icons'  />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-links">
              <FontAwesomeIcon icon={faUser} className='nav-icons'  />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
