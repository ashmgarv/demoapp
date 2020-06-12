import React from "react";

const ResponsiveImage = ({ imagePath }) => {
  return (
    <img
      src={imagePath}
      className="img-fluid grid-image m-3 ml-sm-2"
      alt="These are some images"
    ></img>
  );
};

export default ResponsiveImage;
