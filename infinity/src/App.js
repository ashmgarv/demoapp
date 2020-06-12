import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import data from "./config.json";
import MainComponent from "./components/main";
import axios from "axios";
import _ from "lodash";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/common/notFound";
import NavBarGeneric from "./components/common/navBarGen";

class App extends Component {
  state = {
    linkData: [
      { path: "/", name: "Home" },
      { path: "/", name: "Mall" },
      { path: "/", name: "Office" },
      { path: "/", name: "Place" },
    ],
    imagesInfo: [{ name: "image-1" }, { name: "image-2" }],
  };

  handleComment = () => {
    console.log("Your comment was shared");
  };
  render() {
    const { linkData, imagesInfo } = this.state;
    return (
      <div className="App">
        <NavBar />
        <NavBarGeneric linkData={linkData} />
        <div className="content">
          <Switch>
            <Route path="/not-found" component={NotFound}></Route>
            <Route
              path="/"
              exact
              render={(props) => (
                <MainComponent
                  imagesInfo={imagesInfo}
                  onComment={this.handleComment}
                  {...props}
                />
              )}
            ></Route>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
