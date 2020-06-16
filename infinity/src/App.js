import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import MainComponent from "./components/main";
import { login, register } from "./services/userService";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/common/notFound";
import NavBarGeneric from "./components/common/navBarGen";
import Footer from "./components/common/footer";
import LoginPage from "./components/common/login";
import RegisterForm from "./components/common/register";
import {
  getLinkData,
  getImagesInfo,
  getFooterElements,
} from "./services/dataService";

class App extends Component {
  state = {
    linkData: getLinkData(),
    imagesInfo: getImagesInfo(),
    footerElements: getFooterElements(),
    profileInfo: { name: "Lea Schneider" },
    loggedIn: false,
  };

  handleLogin = async (username, password) => {
    const promise = login(username, password);
    const response = await promise;
    const res_data = response.data;

    const loggedIn = res_data["is_logged_in"];
    const profileInfo = { ...this.state.profileInfo };

    profileInfo.name = res_data["fullname"];
    if (loggedIn) {
      this.setState({ loggedIn, profileInfo });
    }
  };

  handleRegister = async (username, password, fullname) => {
    const promise = register(username, password, fullname);
    const response = await promise;
    const registered = response.data;
    if (registered) {
      alert("User Registered Successfully");
      this.forceUpdate();
    } else {
      alert("There was a problem wih the registration, Please ry again later");
    }
  };

  handleLogout = () => {
    this.setState({ loggedIn: false });
  };

  render() {
    const {
      linkData,
      imagesInfo,
      profileInfo,
      footerElements,
      loggedIn,
    } = this.state;
    return loggedIn ? (
      <React.Fragment>
        <main className="container-fluid">
          <NavBar profileInfo={profileInfo} onLogout={this.handleLogout} />
          <NavBarGeneric linkData={linkData} />
          <div className="container">
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => (
                  <MainComponent imagesInfo={imagesInfo} {...props} />
                )}
              ></Route>
              <Route path="/" exact component={App} />
              <Route path="/not-found" component={NotFound}></Route>
              <Redirect to="/not-found"></Redirect>
            </Switch>
          </div>
        </main>
        <Footer footerElements={footerElements} />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Switch>
          <Route
            path="/register"
            render={(props) => (
              <RegisterForm onRegister={this.handleRegister} {...props} />
            )}
          ></Route>
          <Route
            path="/"
            exact
            render={(props) => (
              <LoginPage onLogin={this.handleLogin} {...props} />
            )}
          ></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
