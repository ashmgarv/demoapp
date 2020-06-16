import React from "react";
import { NavLink } from "react-router-dom";

const getClasses = (fa) => {
  return "fa fa-" + fa + " fa-lg mr-2 font-weight-bold text-white col-3 col-md";
};
const NavBody = ({ linkData, faData }) => {
  return (
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav">
        {linkData.map((item) =>
          item.name === "Trending" ? (
            <NavLink
              key={item.name}
              className="nav-item nav-link nav-link-first"
              to={item.path}
            >
              {item.name}
            </NavLink>
          ) : (
            <NavLink
              key={item.name}
              className="nav-item nav-link"
              to={item.path}
            >
              {item.name}
            </NavLink>
          )
        )}
        {faData.map((item) => (
          <a key={item.fa}>
            <i className={getClasses(item.fa)}>
              <span style={{ fontSize: "small" }}> {item.name}</span>
            </i>
          </a>
        ))}
      </div>
    </div>
  );
};
NavBody.defaultProps = {
  linkData: [],
  faData: [],
};
export default NavBody;
