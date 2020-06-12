import React, { Component } from "react";
import "../custom_css/main.css";
import data from "../display-texts.json";
import Overflow from "./common/overflow";
import ImageGrid from "./common/imageGrid.jsx";

class MainComponent extends Component {
  render() {
    const { display_texts } = data[0];
    const { imagesInfo, onComment } = this.props;
    return (
      <React.Fragment>
        <Overflow
          main_text={display_texts.main_text}
          main_info={display_texts.main_info}
          css_class="bg-main"
          button_text="Learn More"
        />
        <ImageGrid imagesInfo={imagesInfo} onComment={onComment} />
      </React.Fragment>
    );
  }
}

export default MainComponent;
