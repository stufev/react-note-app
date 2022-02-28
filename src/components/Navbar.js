import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">NoteApp</div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link">
                Главная
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" exact className="nav-link">
                Информация
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
