import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import InputField from "./inputField";
import Joi from "joi-browser";

class RegisterForm extends Component {
  state = {
    account: { username: "", password: "", fullname: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
    fullname: Joi.string().required().label("Name"),
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
    const { username, password, fullname } = this.state.account;
    this.props.onRegister(username, password, fullname);
    this.setState({ account: { username: "", password: "", fullname: "" } });
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
            label="Username"
            value={account.username}
            error={errors.username}
            onChange={this.handleChange}
            name="username"
            placeholder="Username"
          />
          <InputField
            type="password"
            label="Password"
            value={account.password}
            error={errors.password}
            onChange={this.handleChange}
            name="password"
            placeholder="Password"
          />
          <InputField
            type="text"
            label="Full Name"
            value={account.fullname}
            error={errors.fullname}
            onChange={this.handleChange}
            name="fullname"
            placeholder="Full Name"
          />
          <div className="row ml-3">
            <button type="submit" className="btn bg-material col-6 text-white">
              Register
            </button>
            <NavLink to="/" className="btn nav-link-first col-5 ml-2">
              Back
            </NavLink>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
