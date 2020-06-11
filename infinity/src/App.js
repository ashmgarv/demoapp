import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import data from "./config.json";
import MainComponent from "./components/main";
import axios from "axios";
import _ from "lodash";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/common/not-found";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
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
