import React, { Component } from "react";
import data from "../../display-texts.json";
import "../../custom_css/notfound.css";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    const { display_texts } = data[0];
    return (
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <div></div>
            <h1>404</h1>
          </div>
          <h2>Page not found</h2>
          <p>{display_texts.not_found_text}</p>
          <Link to="/">home page</Link>
        </div>
      </div>
      // This templates was made by Colorlib (https://colorlib.com)
    );
  }
}

export default NotFound;
