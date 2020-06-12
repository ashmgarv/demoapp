import React from "react";

const ResponsiveImageAndText = ({ imagePath, imageText }) => {
  return (
    <div className="card col-5 m-2">
      <img className="card-img-top" src={imagePath} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">{imageText}</p>
      </div>
    </div>
  );
};

export default ResponsiveImageAndText;
