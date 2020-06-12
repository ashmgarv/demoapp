import React, { Component } from "react";
import "../custom_css/main.css";
import ImageGrid from "./common/imageGrid.jsx";

const MainComponent = ({ imagesInfo }) => {
  return <ImageGrid imagesInfo={imagesInfo} />;
};

export default MainComponent;
