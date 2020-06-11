import React from "react";
import { NavLink } from "react-router-dom";
const LinkTo = ({ path, name }) => {
  return (
    <NavLink className="nav-item nav-link" to={path}>
      {name}
    </NavLink>
  );
};

export default LinkTo;
