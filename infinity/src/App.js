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
      { path: "/", name: "Trending" },
      { path: "/", name: "For You" },
      { path: "/", name: "Cooking" },
      { path: "/", name: "Nature" },
      { path: "/", name: "Science" },
      { path: "/", name: "Travel" },
      { path: "/", name: "Climate" },
      { path: "/", name: "Music" },
      { path: "/", name: "People" },
    ],
    imagesInfo: [
      {
        name: "image-4",
        display_text:
          "Fresh wave of climate strikes takes place around the world",
      },
      {
        name: "image-1",
        display_text:
          "Arctic sea ice extent hits record low for winter maximum",
      },
      {
        name: "image-2",
        display_text: "New battery for smartphone can now charge in a minute",
      },
      {
        name: "image-3",
        display_text: "The best tropical plants you can grow indoors",
      },
    ],
    profileInfo: { name: "Lea Schneider" },
  };

  render() {
    const { linkData, imagesInfo, profileInfo } = this.state;
    return (
      <main className="container">
        <NavBar profileInfo={profileInfo} />
        <NavBarGeneric linkData={linkData} />
        <div className="mt-5">
          <Switch>
            <Route path="/not-found" component={NotFound}></Route>
            <Route
              path="/"
              exact
              render={(props) => (
                <MainComponent imagesInfo={imagesInfo} {...props} />
              )}
            ></Route>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
