import React from "react";

const ResponsiveImageAndText = ({ imagePath, imageText, imageCategory }) => {
  return (
    <div className="col-6">
      <div className="card m-2">
        <img className="card-img-top" src={imagePath} alt="Card cap" />
        <div className="card-body">
          <p className="card-text">{imageText}</p>
          <div className="row">
            <div className="col-4 col-sm-4">
              <i className="fa fa-wifi fa-lg fa-rotate-90 color-primary" />
            </div>
            <div className="footer-col border-category">{imageCategory}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveImageAndText;
