import React, { Component } from "react";
import "../custom_css/main.css";
import data from "../display-texts.json";
import Overflow from "./common/overflow";

class MainComponent extends Component {
  render() {
    const { display_texts } = data[0];
    return (
      <Overflow
        main_text={display_texts.main_text}
        main_info={display_texts.main_info}
        css_class="bg-main"
        button_text="Learn More"
      />
    );
  }
}

export default MainComponent;
