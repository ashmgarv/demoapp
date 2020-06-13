import React from "react";
import ResponsiveImageAndText from "./responsiveImageAndText";

const ImageGrid = ({ imagesInfo }) => {
  return (
    <div className="row img-grid">
      {imagesInfo.map((item) => (
        <ResponsiveImageAndText
          key={item.name}
          imagePath={require(`../../art/${item.name}.jpeg`)}
          imageText={item.display_text}
          imageCategory={item.category}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
