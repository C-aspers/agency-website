import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Navigation.css'; // Tell webpack that Button.js uses these styles

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact className="hover" activeClassName="nav-active">
          <li>Accueil</li>
        </NavLink>

        <NavLink
          to="/about"
          exact
          className="hover"
          activeClassName="nav-active"
        >
          <li>À propos</li>
        </NavLink>
        
        <NavLink
          to="/works"
          exact
          className="hover"
          activeClassName="nav-active"
        >
          <li>Projets</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
