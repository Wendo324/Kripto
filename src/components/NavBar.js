import React from 'react';
import { FaCoins } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const NavBar = ({ page, set }) => {
  return (
    <nav className="nav-position">
      <div className="nav-bar">
        <NavLink to="/">
          {page === 'home' ? (
            <i className="uil uil-bitcoin coin-icon"></i>
          ) : (
            <i
              className="uil uil-angle-left arrow coin-icon"
              onClick={() => set('home')}
            ></i>
          )}
        </NavLink>
        <div className="logo">
          <FaCoins className="icon" />
          <h1 className="nav-header">
            Crypto<span className="purple">Webs</span>
          </h1>
        </div>
        <div className="mic">
          <i className="uil uil-microphone micro nav-icon"></i>
          <i className="uil uil-cog nav-icon"></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
