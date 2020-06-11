import React from "react";
import NavBody from "./navBody";

const NavBarGeneric = ({ linkData }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light nb-hide bg-light">
      <NavBody linkData={linkData} />
    </nav>
  );
};

export default NavBarGeneric;
