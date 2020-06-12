import React from "react";
import ResponsiveImage from "./responsiveImage";
import CommentBox from "./commentBox";
const ImageCommentSet = ({ imageInfo, onComment }) => {
  return (
    <div className="col-6 border border-black">
      <ResponsiveImage
        imagePath={require(`../../art/${imageInfo.name}.jpeg`)}
      />
      <CommentBox onComment={onComment} />
    </div>
  );
};

export default ImageCommentSet;
