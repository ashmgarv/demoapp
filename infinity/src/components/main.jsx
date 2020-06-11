import React, { Component } from "react";
import "../custom_css/main.css";
import data from "../display-texts.json";

class MainComponent extends Component {
  render() {
    const { display_texts } = data[0];
    return <React.Fragment></React.Fragment>;
  }
}

export default MainComponent;
