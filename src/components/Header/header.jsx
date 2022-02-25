import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <body>
        <header className="header-width">
          <div className="top-bar">
            <div className="social-btn">
              <a href="#!" className="btn">
                <i className="i fab fa-twitter "></i>
              </a>
              <a href="#!" className="btn">
                <i className="i fab fa-facebook "></i>
              </a>
              <a href="#!" className="btn">
                <i className="i fab fa-instagram "></i>
              </a>
              <a href="#!" className="btn">
                <i className="i fab fa-youtube "></i>
              </a>
            </div>
            <div className="input">
              <form action="#" className="search-top-form">
                <input
                  type="text"
                  id="searchbar"
                  placeholder="Type keyword to search..."
                />
                <span className="s-icon fa fa-search"></span>
              </form>
            </div>
          </div>
          <div className="bottom-bar">
            <div className="logo">
              <h1 className="logoh1">
                <Link to="/" className="logo-a">
                  Wordify
                </Link>
              </h1>
            </div>
          </div>
          <nav className="navbar">
            <div className="nav-div">
              <ul className="nav-items">
                <li className="nav-item">
                  <Link className="navitems" to="/">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navitems" to="/category">
                    BUISNESS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navitems" to="/about">
                    TRAVEL
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navitems" to="/category">
                    CATEGORIES
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navitems" to="/about">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navitems" to="/contact">
                    CONTACTS
                  </Link>
                </li>
              </ul>
            </div>
            <hr className="hrtop" />
          </nav>
        </header>
      </body>
    </>
  );
};

export default Header;
