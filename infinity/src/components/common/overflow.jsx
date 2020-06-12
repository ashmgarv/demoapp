import React from "react";
import { getMainDivClasses } from "../../utils/common";

const Overflow = ({ main_text, main_info, css_class, button_text }) => {
  return (
    <div className={getMainDivClasses(css_class)}>
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal">{main_text}</h1>
        <p className="lead font-weight-normal">{main_info}</p>
        {button_text ? (
          <a className="btn btn-outline-secondary" href="#">
            {button_text}
          </a>
        ) : (
          <br />
        )}
      </div>
      <div className="product-device shadow-sm d-none d-md-block"></div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
  );
};
export default Overflow;
