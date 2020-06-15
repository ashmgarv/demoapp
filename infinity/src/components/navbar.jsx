import React from "react";
import { Link } from "react-router-dom";
import NavbarToggler from "./common/navbarToggler";
import NavBody from "./common/navBody";
import avatar from "../art/avatar-sm.png";

const NavBar = ({ profileInfo, onLogout }) => {
  const faData = [
    { fa: "television", name: "CHANNELS" },
    { fa: "bookmark", name: "BOOKMARKS" },
    { fa: "pie-chart", name: "OVERVIEW" },
    { fa: "cog", name: "WIDGETS" },
  ];
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-material">
      <Link className="navbar-brand" to="/">
        N
      </Link>
      <NavBody faData={faData} />
      <NavbarToggler />
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
      <button
        className="btn bg-material ml-2 mb-2 text-white"
        onClick={onLogout}
      >
        Logout
      </button>
    </nav>
  );
};

export default NavBar;
