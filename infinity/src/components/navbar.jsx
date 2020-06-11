import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarToggler from "./common/navbarToggler";
import LinkTo from "./common/linkTo";
import NavBody from "./common/navBody";

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
        </nav>
      </header>
    );
  }
}

export default NavBar;
