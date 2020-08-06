import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const NavMenu = () => {
  return (
    <ul className="navmenu">
      <li className="navItem">
        <NavLink exact to="/" activeClassName="selected">
          <p className="nav-link">
            Home
          </p>
        </NavLink>
      </li>
      <li className="navItem">
      <NavLink exact to="/services" activeClassName="selected">
        <p className="nav-link">
          Services
        </p>
      </NavLink>
    </li>
    </ul>
  );
};

export default withRouter(NavMenu);
