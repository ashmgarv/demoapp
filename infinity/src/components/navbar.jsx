import React from "react";
import { Link } from "react-router-dom";
import NavbarToggler from "./common/navbarToggler";
import NavBody from "./common/navBody";
import avatar from "../art/avatar-sm.png";

const NavBar = ({ profileInfo }) => {
  return (
    // <header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-material">
      <Link className="navbar-brand" to="/">
        N
      </Link>
      <NavbarToggler />
      <NavBody linkData={[{ path: "/", name: "Home" }]} />
      <i
        className="fa fa-search fa-lg mr-2"
        style={{ color: "white" }}
        aria-hidden="true"
      ></i>
      <img src={avatar} alt="Avatar" className="avatar mr-2" />
      <p
        className="text-white content-align-center mt-2"
        style={{ textAlign: "center", fontWeight: "bold" }}
      >
        {profileInfo.name}
      </p>
    </nav>
    // </header>
  );
};

export default NavBar;
