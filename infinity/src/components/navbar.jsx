import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarToggler from "./common/navbarToggler";
import NavBody from "./common/navBody";
import avatar from "../art/avatar-sm.png";

class NavBar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-material">
          <Link className="navbar-brand" to="/">
            N
          </Link>
          <NavbarToggler />
          <NavBody linkData={[{ path: "/", name: "Home" }]} />
          <i className="fa fa-search fa-2x mr-2" aria-hidden="true"></i>
          <img src={avatar} alt="Avatar" className="avatar" />
        </nav>
      </header>
    );
  }
}

export default NavBar;
