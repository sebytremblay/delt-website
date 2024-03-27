import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styling/Header.css";
import logoImage from "../Materials/header-logo.png";
import { Link } from "react-router-dom";

const navLinks = [
  { path: "/home", label: "Home" },
];

const menuItems = [
  { path: "/recruitment", label: "Recruitment" },
  { path: "/ea-board-page", label: "E/A Board Page" },
  { path: "/alumni-directory", label: "Alumni Directory" },
  { path: "/brother-directory", label: "Brother Directory" },
  { path: "/housing", label: "Housing" },
  { path: "/philanthropy", label: "Philanthropy" },
];

const NavBar = () => (
  <nav className="navbar navbar-expand navbar-dark">
    <div className="container-fluid">
      <div id="navbarNavDropdown">
        <ul className="navbar-nav">
          {navLinks.map((link) => (
            <li className="nav-item" key={link.path}>
              <Link to={link.path} className="nav-link active header-text" aria-current="page">
                {link.label}
              </Link>
            </li>
          ))}
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle header-text" data-bs-toggle="dropdown" aria-expanded="false">
              Menu
            </button>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link className="dropdown-item" to={item.path}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const HeaderContent = () => (
  <div className="header-content text-center py-3">
    <img src={logoImage} alt="Delta Tau Delta Logo" className="header-logo bottom-left" />
    <div className="header-text-container">
      <h1>Delta Tau Delta Iota Psi</h1>
      <h4>Northeastern University ΔΤΔ</h4>
      <h2>Unparalleled Excellence</h2>
    </div>
    <img src={logoImage} alt="Delta Tau Delta Logo" className="header-logo bottom-right" />
  </div>
);

const Header = () => {
  return (
    <header className="dark-purple-bg text-white header">
      <NavBar />
      <HeaderContent />
    </header>
  );
};

export default Header;
