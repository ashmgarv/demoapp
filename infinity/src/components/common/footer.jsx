import React from "react";
import { getLighterClasses } from "../../utils/common";

const Footer = ({ footerElements }) => {
  return (
    <footer className="container-fluid py-4 bg-white">
      <div className="row ml-5">
        {footerElements.map((item) => (
          <div key={item.name} className="col-footer">
            <a className={getLighterClasses()} href="#">
              {item.name}
            </a>
          </div>
        ))}
        <div className="col-footer">
          <a href="#">
            <i className="fa fa-facebook-official fa-lg" />
          </a>
          <a href="#">
            <i className="fa fa-instagram fa-lg ml-2" />
          </a>
          <a href="#">
            <i className="fa fa-twitter-square fa-lg ml-2" />
          </a>
        </div>
        <div className="col-footer">
          <p className={getLighterClasses()}>© 2019 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
