import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css"; // Tell webpack that Button.js uses these styles

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/" exact className="navlist" activeClassName="nav-active">
        Accueil
      </NavLink>

      <NavLink
        to="/about"
        exact
        className="navlist"
        activeClassName="nav-active"
      >
        À propos
      </NavLink>

      <NavLink to="/works" exact className="navlist" activeClassName="nav-active">
        Projets
      </NavLink>
    </div>
  );
};

export default Navigation;
