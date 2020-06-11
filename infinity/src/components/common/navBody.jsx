import React from "react";
import LinkTo from "./linkTo";

const NavBody = ({ linkData }) => {
  return (
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav">
        {linkData.map((item) => (
          <LinkTo key={item.name} path={item.path} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default NavBody;
