import React from "react";
import NavBody from "./navBody";

const NavBarGeneric = ({ linkData }) => {
  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-light nb-hide bg-white">
      <NavBody linkData={linkData} />
    </nav>
  );
};

export default NavBarGeneric;
