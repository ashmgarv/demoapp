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
  };
  render() {
    const { linkData } = this.state;
    return (
      <div className="App">
        <NavBar />
        <NavBarGeneric linkData={linkData} />
        <div className="content">
          <Switch>
            <Route path="/not-found" component={NotFound}></Route>
            <Route path="/" exact component={MainComponent}></Route>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
