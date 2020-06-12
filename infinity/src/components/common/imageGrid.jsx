import React from "react";
import ImageCommentSet from "./imageCommentSet";

const ImageGrid = ({ imagesInfo, onComment }) => {
  return (
    <div className="row m-2">
      {imagesInfo.map((item) => (
        <ImageCommentSet
          key={item.name}
          imageInfo={item}
          onComment={onComment}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
