import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import InputField from "./inputField";
import Joi from "joi-browser";

class LoginPage extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const opions = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.account, this.schema, opions);
    if (!error) return null;
    const errors = {};

    //Iterate over the errors
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    const { username, password } = this.state.account;
    this.props.onLogin(username, password);
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className="row h-auto bring-to-centre">
        <form
          onSubmit={this.handleSubmit}
          className="shadow-lg p-4 col-8 rounded bg-white align-self-center"
        >
          <InputField
            type="text"
            value={account.username}
            error={errors.username}
            name="username"
            label="Username"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <InputField
            type="password"
            value={account.password}
            error={errors.password}
            name="password"
            label="Password"
            placeholder="Password"
            onChange={this.handleChange}
          />
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
