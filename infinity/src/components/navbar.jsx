import React from "react";
import { Link } from "react-router-dom";
import NavbarToggler from "./common/navbarToggler";
import NavBody from "./common/navBody";
import avatar from "../art/avatar-sm.png";
import NavBarGeneric from "./common/navBarGen";

const NavBar = ({ profileInfo }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-material">
      <Link className="navbar-brand" to="/">
        N
      </Link>
      <NavbarToggler />
      <NavBody linkData={[{ path: "/", name: "Home" }]} />
      <i
        className="fa fa-search fa-lg"
        style={{ color: "white" }}
        aria-hidden="true"
      ></i>
      <img src={avatar} alt="Avatar" className="avatar" />
      <p className=" color-custom-white ">{profileInfo.name}</p>
    </nav>
  );
};

export default NavBar;
