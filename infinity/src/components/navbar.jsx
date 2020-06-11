import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarToggler from "./common/navbarToggler";
import LinkTo from "./common/linkTo";

class NavBar extends Component {
  onLoginClick = () => {
    console.log("Login Clicked!");
  };

  onRegisterClick = () => {
    console.log("Register Clicked!");
  };

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-material">
          <Link className="navbar-brand" to="/">
            N
          </Link>
          <NavbarToggler />
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <LinkTo path="/" name="Home" />
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
