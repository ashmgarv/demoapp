import React from "react";
const Footer = ({ footerElements }) => {
  const getFooterClasses = () => {
    return "text-muted font-weight-lighter";
  };
  return (
    <footer className="container-fluid py-4 bg-white">
      <div className="row">
        {footerElements.map((item) => (
          <div key={item.name} className="col-2">
            <a className={getFooterClasses()} href="#">
              {item.name}
            </a>
          </div>
        ))}
        <div className="col-2">
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
        <div className="col-2">
          <p className={getFooterClasses()}>© 2019 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
