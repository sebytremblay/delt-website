import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styling/Header.css";
import logoImage from "../Materials/header-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="dark-purple-bg text-white header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active header-text"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle header-text"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/recruitment">
                      Recruitment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ea-board-page">
                      E/A Board Page
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/alumni-directory">
                      Alumni Directory
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/brother-directory">
                      Brother Directory
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/brother-spotlight">
                      Brother Spotlight
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/housing">
                      Housing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/philanthropy">
                      Philanthropy
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="header-content text-center py-3">
        <img
          src={logoImage}
          alt="Delta Tau Delta"
          className="header-logo bottom-left"
        />

        <div className="header-text-container">
          <h1>Delta Tau Delta Iota Psi Chapter</h1>
          <h4>Northeastern University ΔΤΔ</h4>
          <h2>Unparalleled Excellence</h2>
        </div>

        <img
          src={logoImage}
          alt="Delta Tau Delta Logo"
          className="header-logo bottom-right"
        />
      </div>
    </header>
  );
};

export default Header;
