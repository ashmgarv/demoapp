import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class LoginPage extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state.account;
    this.props.onLogin(username, password);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div className="row h-auto bring-to-centre">
        <form
          onSubmit={this.handleSubmit}
          className="shadow-lg p-4 col-8 rounded bg-white align-self-center"
        >
          <div className="form-group col-12">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              value={account.username}
              onChange={this.handleChange}
              name="username"
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group col-12">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={account.password}
              onChange={this.handleChange}
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="row ml-3">
            <button type="submit" className="btn bg-material col-5 text-white">
              Login
            </button>
            <NavLink to="/register" className="btn nav-link-first col-6 ml-2">
              Register
            </NavLink>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
